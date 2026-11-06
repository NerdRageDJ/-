// 用法：node tools/gen-recall-doc.js bank.csv → dist/SAP-C02-关键词选项速记.md
// 输出“题干关键词 + 正确选项”，单选在前、多选在后，按主题分组。
const fs = require("fs");
const path = require("path");

const csvPath = process.argv[2] || path.join(__dirname, "..", "bank.csv");
const text = fs.readFileSync(csvPath, "utf8").replace(/^\ufeff/, "");

function parseCSV(s) {
  const rows = [];
  let row = [], field = "", q = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) {
      if (c === '"') { if (s[i + 1] === '"') { field += '"'; i++; } else q = false; } else field += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && s[i + 1] === "\n") i++;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((x) => x.trim()));
}

const LATIN = /[A-Za-z0-9][A-Za-z0-9\-.:/_]*/g;
const STOP = new Set(["aws", "amazon", "a", "an", "the", "to", "of", "and", "or", "in", "on", "for", "with", "by", "id", "api", "s3", "1", "2", "3"]);
const norm = (w) => w.toLowerCase().replace(/\.+$/, "");

function keywords(options, letter) {
  const others = new Set();
  Object.entries(options).forEach(([l, v]) => { if (l !== letter) (v.match(LATIN) || []).forEach((w) => others.add(norm(w))); });
  const t = options[letter];
  const phrases = [];
  let cur = null;
  for (const m of t.matchAll(LATIN)) {
    const w = norm(m[0]);
    if (others.has(w) || STOP.has(w)) continue;
    const s = m.index, e = m.index + m[0].length;
    if (cur && s - cur[1] <= 2) cur[1] = e; else { if (cur) phrases.push(cur); cur = [s, e]; }
  }
  if (cur) phrases.push(cur);
  return [...new Set(phrases.map(([s, e]) => t.slice(s, e).replace(/\.+$/, "")))];
}

const rows = parseCSV(text);
const head = rows.shift();
const col = (n) => head.indexOf(n);
const items = rows.map((r) => {
  const get = (n) => (col(n) >= 0 ? (r[col(n)] || "").trim() : "");
  const options = {};
  get("全部选项").split(/；(?=[A-H]：)/).forEach((p) => {
    const m = p.trim().match(/^([A-H])：([\s\S]*)$/);
    if (m) options[m[1]] = m[2].trim();
  });
  const answer = (get("题库答案").match(/[A-H]/g) || []).filter((l) => options[l]);
  return { id: Number(get("原题号")), topic: get("主题分类") || "未分类", grip: get("题干抓手"), hint: get("答案联想"), unverified: get("核验状态") === "待核验", options, answer };
}).filter((q) => q.id && q.answer.length).sort((a, b) => a.id - b.id);

const out = ["# SAP-C02 关键词 + 正确选项速记", "", "> 由 `tools/gen-recall-doc.js` 根据题库生成。格式：题号｜题干关键词 → 答案关键词，下面是正确选项原文。标“待核验”的题原答案可能有误。", ""];
const section = (title, list) => {
  out.push(`## ${title}（${list.length} 题）`, "");
  const topics = [...new Set(list.map((q) => q.topic))];
  topics.forEach((t) => {
    out.push(`### ${t}`, "");
    list.filter((q) => q.topic === t).forEach((q) => {
      const keys = [...new Set(q.answer.flatMap((l) => keywords(q.options, l)))];
      out.push(`**#${q.id}｜${q.grip}** → ${q.hint}${keys.length ? `　〔区分词：${keys.join("、")}〕` : ""}${q.unverified ? "（待核验）" : ""}`, "");
      q.answer.forEach((l) => out.push(`- ${l}：${q.options[l]}`));
      out.push("");
    });
  });
};
section("单选", items.filter((q) => q.answer.length === 1));
section("多选", items.filter((q) => q.answer.length > 1));

const dest = path.join(__dirname, "..", "dist", "SAP-C02-关键词选项速记.md");
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, out.join("\n"));
console.log(`written ${dest} (${items.length} 题)`);
