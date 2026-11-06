// 把页面打包成一个可离线打开的独立 HTML 文件。
// 用法：
//   node tools/build-single-html.js                      → dist/sapc02-standalone.html（不含题库，可在页面内导入 CSV）
//   node tools/build-single-html.js --bank bank.csv      → dist/sapc02-with-bank.html（内嵌题库，请勿提交到公开仓库）
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");

const args = process.argv.slice(2);
const bankIdx = args.indexOf("--bank");
const bankPath = bankIdx >= 0 ? args[bankIdx + 1] : null;
const outIdx = args.indexOf("--out");

// 内联到 <script> 中的内容不能出现 "</script"
const safeScript = (js) => js.replace(/<\/(script)/gi, "<\\/$1");

let html = read("index.html");
html = html.replace('<link rel="stylesheet" href="styles.css" />', () => `<style>\n${read("styles.css")}\n</style>`);

const scripts = [`<script>\nwindow.SAP_STANDALONE = true;\n</script>`];
scripts.push(...["data.js", "methods.js"].map((f) => `<script>\n${safeScript(read(f))}\n</script>`));
if (bankPath) {
  const csv = fs.readFileSync(path.resolve(bankPath), "utf8");
  scripts.push(`<script>\nwindow.SAP_BANK_CSV = ${safeScript(JSON.stringify(csv))};\n</script>`);
}
scripts.push(`<script>\n${safeScript(read("app.js"))}\n</script>`);

html = html.replace(/\s*<script src="data\.js"><\/script>\s*<script src="methods\.js"><\/script>\s*<script src="app\.js"><\/script>/, () => "\n  " + scripts.join("\n  "));
const external = [
  [/<script[^>]+src=/i, "外部脚本"],
  [/<link[^>]+href="(?!data:)/i, "外部样式或图标"],
  [/<(img|iframe|audio|video|source)[^>]+src="(?!data:)/i, "外部媒体"],
];
const markup = html.replace(/<script>[\s\S]*?<\/script>/g, "");
for (const [re, what] of external) {
  if (re.test(markup)) throw new Error(`打包结果仍引用${what}，请检查源文件`);
}
const css = (html.match(/<style>[\s\S]*?<\/style>/g) || []).join("");
if (/@import|url\((?!\s*["']?data:)/i.test(css)) throw new Error("打包结果的 CSS 仍引用外部资源");

const out = outIdx >= 0
  ? path.resolve(args[outIdx + 1])
  : path.join(root, "dist", bankPath ? "sapc02-with-bank.html" : "sapc02-standalone.html");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log(`written ${out} (${(fs.statSync(out).size / 1024).toFixed(0)} KB)`);
