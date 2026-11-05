// 用法：node tools/gen-method-doc.js  → 生成 docs/SAP-C02-方法论.md
const fs = require("fs");
const path = require("path");

global.window = {};
require("../methods.js");
const M = window.SAP_METHOD;
const ids = (ex) => ex.map((id) => `#${id}`).join(" ");

const out = [];
out.push("# SAP-C02 做题方法论", "");
out.push("> 由 `methods.js` 自动生成，请勿直接编辑。题号对应个人题库 CSV 的“原题号”。", "");

out.push("## 一、四步审题法", "");
M.steps.forEach((s) => out.push(`- **${s.t}**：${s.d}`));
out.push("");

out.push("## 二、683 道题统计出来的规律", "", "| 指标 | 结果 |", "| --- | --- |");
M.stats.forEach((s) => out.push(`| ${s.k} | ${s.v} |`));
out.push("");

out.push(`## 三、妙招（${M.tips.length} 条）`, "");
["审题", "选项", "关键词"].forEach((cat) => {
  out.push(`### ${cat}`, "");
  M.tips.forEach((t, i) => {
    if (t.cat === cat) out.push(`${i + 1}. **${t.title}**：${t.body}（例题：${ids(t.ex)}）`);
  });
  out.push("");
});

out.push("## 四、从提纲入手", "");
M.domains.forEach((d) => {
  out.push(`### ${d.name}`, "", `${d.bank}`, "");
  d.flow.forEach((f, i) => out.push(`${i + 1}. ${f}`));
  out.push("", `代表题：${ids(d.ex)}`, "");
});

out.push("## 五、从产品入手：易混产品对决表", "", "| 对决 | 怎么选 | 题库证据 |", "| --- | --- | --- |");
M.duels.forEach((d) => out.push(`| ${d.a} vs ${d.b} | ${d.rule} | ${[d.stat, ids(d.ex)].filter(Boolean).join("；")} |`));
out.push("");

out.push("## 六、数字速记", "", "| 项目 | 数值 |", "| --- | --- |");
M.numbers.forEach((n) => out.push(`| ${n.k} | ${n.v} |`));
out.push("");

out.push("## 七、高频陷阱清单", "");
M.pitfalls.forEach((p) => out.push(`- ${p}`));
out.push("");

out.push("## 八、冲刺计划", "");
M.plan.forEach((s) => out.push(`- **${s.t}**：${s.d}`));
out.push("");

const dest = path.join(__dirname, "..", "docs", "SAP-C02-方法论.md");
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, out.join("\n"));
console.log("written", dest);
