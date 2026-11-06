(function () {
  "use strict";

  const DATA = window.SAP_DATA;
  const METHOD = window.SAP_METHOD;
  const BANK_KEY = "sapc02-bank-data-v1";
  let BANK = null;
  const STORE_KEY = "sapc02-study-v1";
  const DAY = 24 * 60 * 60 * 1000;
  // Leitner 盒子对应的复习间隔（天），盒子 0 表示当天需重学
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32];
  const MASTERED_BOX = 4;
  const LETTERS = "ABCDEFGH";

  const app = document.getElementById("app");

  // ---------------- 存储 ----------------
  function normalizeState(s) {
    s = s && typeof s === "object" ? s : {};
    const bank = s.bank && typeof s.bank === "object" ? s.bank : {};
    return {
      cards: s.cards || {},
      questions: s.questions || {},
      wrong: s.wrong || [],
      bank: { rec: bank.rec || {}, wrong: bank.wrong || [], ui: bank.ui || {}, recallUi: bank.recallUi || {} },
      tipsDone: s.tipsDone || {},
    };
  }
  function loadState() {
    try {
      return normalizeState(JSON.parse(localStorage.getItem(STORE_KEY)));
    } catch (_) {
      return normalizeState(null);
    }
  }
  let state = loadState();
  function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

  // ---------------- 工具函数 ----------------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function domainName(d) { return DATA.domains[d] ? DATA.domains[d].name : d; }
  function domainOptions(selected, withAll = true) {
    const opts = withAll ? [`<option value="all">全部领域</option>`] : [];
    for (const [k, v] of Object.entries(DATA.domains)) {
      opts.push(`<option value="${k}" ${selected === k ? "selected" : ""}>${esc(v.name)}（${v.weight}%）</option>`);
    }
    return opts.join("");
  }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    const s = new Set(a);
    return b.every((x) => s.has(x));
  }

  // ---------------- 闪卡调度 ----------------
  function cardState(id) { return state.cards[id] || { box: 0, due: 0, seen: 0 }; }
  function isDue(id, now = Date.now()) {
    const c = state.cards[id];
    return !c || c.due <= now;
  }
  function gradeCard(id, grade) {
    const c = cardState(id);
    if (grade === 0) c.box = 0;
    else if (grade === 1) c.box = Math.max(1, c.box);
    else c.box = Math.min(INTERVALS.length - 1, c.box + 1);
    c.due = Date.now() + INTERVALS[c.box] * DAY;
    c.seen += 1;
    state.cards[id] = c;
    save();
  }

  // ---------------- 视图：概览 ----------------
  function renderHome() {
    const now = Date.now();
    const total = DATA.cards.length;
    const mastered = DATA.cards.filter((c) => cardState(c.id).box >= MASTERED_BOX).length;
    const due = DATA.cards.filter((c) => isDue(c.id, now)).length;
    const qDone = DATA.questions.filter((q) => state.questions[q.id]).length;
    const qRight = DATA.questions.filter((q) => state.questions[q.id] && state.questions[q.id].lastCorrect).length;

    const rows = Object.entries(DATA.domains).map(([k, v]) => {
      const cs = DATA.cards.filter((c) => c.d === k);
      const m = cs.filter((c) => cardState(c.id).box >= MASTERED_BOX).length;
      const learning = cs.filter((c) => { const b = cardState(c.id).box; return b > 0 && b < MASTERED_BOX; }).length;
      const pm = cs.length ? (m / cs.length) * 100 : 0;
      const pl = cs.length ? (learning / cs.length) * 100 : 0;
      return `
        <div class="domain-row">
          <div class="head"><span>${esc(v.name)} <span class="pill">考试占比 ${v.weight}%</span></span><span>${m}/${cs.length} 已掌握</span></div>
          <div class="bar"><i class="ok" style="width:${pm}%"></i><i class="mid" style="width:${pl}%"></i></div>
        </div>`;
    }).join("");

    const bankDone = BANK ? BANK.list.filter((q) => state.bank.rec[q.id]).length : 0;
    const bankRight = BANK ? BANK.list.filter((q) => state.bank.rec[q.id] && state.bank.rec[q.id].last).length : 0;

    app.innerHTML = `
      <div class="panel start">
        <h3>病急乱投医？从这里开始</h3>
        <p style="margin:0 0 12px">先花 20 分钟读完 <a href="#/method">方法论</a>（四步审题法 + 33 条妙招 + 产品对决表），再按主题刷 <a href="#/bank">真题库</a>：第一轮只看“题干抓手 → 答案联想”，建立条件反射。</p>
        <div class="grid">
          <div class="stat"><div class="num">${BANK ? `${bankDone}/${BANK.list.length}` : "未导入"}</div><div class="label">真题库已做${BANK ? `，最近正确率 ${bankDone ? Math.round((bankRight / bankDone) * 100) : 0}%` : ""}</div></div>
          <div class="stat"><div class="num">${state.bank.wrong.length}</div><div class="label">真题错题</div></div>
          <div class="stat"><div class="num">${Object.keys(state.tipsDone).length}/${METHOD.tips.length}</div><div class="label">已掌握的妙招</div></div>
        </div>
      </div>
      <div class="grid">
        <div class="panel stat"><div class="num">${due}</div><div class="label">今日待复习闪卡</div></div>
        <div class="panel stat"><div class="num">${mastered}/${total}</div><div class="label">已掌握闪卡</div></div>
        <div class="panel stat"><div class="num">${qDone ? Math.round((qRight / qDone) * 100) : 0}%</div><div class="label">练习题最近正确率（${qDone}/${DATA.questions.length} 已做）</div></div>
        <div class="panel stat"><div class="num">${state.wrong.length}</div><div class="label">错题本</div></div>
      </div>
      <div class="panel">
        <h3>各领域掌握度</h3>
        <p class="muted" style="margin-top:0">绿色为已掌握（连续答对、间隔 ≥ 8 天），黄色为学习中。</p>
        ${rows}
      </div>
      <div class="panel">
        <h3>建议的每日节奏</h3>
        <p style="margin:0">先清空 <a href="#/cards">闪卡</a> 的到期复习，再做 10 道 <a href="#/quiz">练习题</a>，最后回顾 <a href="#/wrong">错题本</a>。考前用 <a href="#/keywords">关键词速查</a> 过一遍“题干关键词 → 服务”的映射。</p>
        <div class="actions">
          <button class="btn" id="export">导出进度</button>
          <button class="btn" id="import">导入进度</button>
          <button class="btn bad" id="reset">重置全部进度</button>
        </div>
      </div>`;

    document.getElementById("export").onclick = () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `sapc02-progress-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    };
    document.getElementById("import").onclick = () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "application/json";
      input.onchange = async () => {
        try {
          state = normalizeState(JSON.parse(await input.files[0].text()));
          save();
          renderHome();
        } catch (e) {
          alert("导入失败：文件格式不正确");
        }
      };
      input.click();
    };
    document.getElementById("reset").onclick = () => {
      if (confirm("确定清空所有学习进度？此操作不可撤销。")) {
        state = normalizeState(null);
        save();
        renderHome();
      }
    };
  }

  // ---------------- 视图：闪卡 ----------------
  const cardSession = { domain: "all", mode: "due", queue: [], idx: 0, flipped: false };

  function buildCardQueue() {
    let pool = DATA.cards.filter((c) => cardSession.domain === "all" || c.d === cardSession.domain);
    if (cardSession.mode === "due") pool = pool.filter((c) => isDue(c.id));
    if (cardSession.mode === "weak") pool = pool.filter((c) => state.cards[c.id] && cardState(c.id).box <= 1);
    cardSession.queue = shuffle(pool).map((c) => c.id);
    cardSession.idx = 0;
    cardSession.flipped = false;
  }

  function renderCards() {
    const { queue, idx, flipped } = cardSession;
    const toolbar = `
      <div class="toolbar">
        <select id="c-domain">${domainOptions(cardSession.domain)}</select>
        <select id="c-mode">
          <option value="due" ${cardSession.mode === "due" ? "selected" : ""}>到期复习</option>
          <option value="all" ${cardSession.mode === "all" ? "selected" : ""}>全部随机</option>
          <option value="weak" ${cardSession.mode === "weak" ? "selected" : ""}>薄弱卡片</option>
        </select>
        <span class="progress-text">${queue.length ? `${Math.min(idx + 1, queue.length)} / ${queue.length}` : ""}</span>
      </div>`;

    if (idx >= queue.length) {
      app.innerHTML = toolbar + `
        <div class="panel empty">
          <h3>${queue.length ? "本轮完成！" : "当前没有需要复习的卡片"}</h3>
          <p>${cardSession.mode === "due" ? "可以切换到“全部随机”继续刷，或去做练习题。" : "换个筛选条件再来一轮吧。"}</p>
          <button class="btn primary" id="c-restart">再来一轮</button>
        </div>`;
      bindCardToolbar();
      document.getElementById("c-restart").onclick = () => { buildCardQueue(); renderCards(); };
      return;
    }

    const card = DATA.cards.find((c) => c.id === queue[idx]);
    const cs = cardState(card.id);
    app.innerHTML = toolbar + `
      <div class="panel flashcard" id="fc">
        <div>
          <span class="pill domain">${esc(domainName(card.d))}</span>
          ${card.tags.map((t) => `<span class="pill">${esc(t)}</span>`).join("")}
          <span class="pill">盒子 ${cs.box}</span>
        </div>
        <div class="q">${esc(card.q)}</div>
        ${flipped ? `<div class="a">${esc(card.a)}</div>` : `<div class="hint">先在脑中回答，再点击卡片或按空格查看答案</div>`}
      </div>
      ${flipped ? `
        <div class="grade">
          <button class="btn bad" data-g="0">1 · 不会（今天重学）</button>
          <button class="btn mid" data-g="1">2 · 模糊</button>
          <button class="btn ok" data-g="2">3 · 记住了</button>
        </div>` : ""}`;

    bindCardToolbar();
    document.getElementById("fc").onclick = () => { if (!cardSession.flipped) { cardSession.flipped = true; renderCards(); } };
    app.querySelectorAll("[data-g]").forEach((b) => { b.onclick = () => submitCardGrade(Number(b.dataset.g)); });
  }

  function submitCardGrade(g) {
    const id = cardSession.queue[cardSession.idx];
    gradeCard(id, g);
    if (g === 0) cardSession.queue.push(id);
    cardSession.idx += 1;
    cardSession.flipped = false;
    renderCards();
  }

  function bindCardToolbar() {
    document.getElementById("c-domain").onchange = (e) => { cardSession.domain = e.target.value; buildCardQueue(); renderCards(); };
    document.getElementById("c-mode").onchange = (e) => { cardSession.mode = e.target.value; buildCardQueue(); renderCards(); };
  }

  // ---------------- 视图：练习题（练习 & 错题共用） ----------------
  function newQuizSession(source) {
    return { source, domain: "all", count: 10, queue: [], idx: 0, selected: [], submitted: false, results: [], order: [] };
  }
  const quizSessions = { quiz: newQuizSession("quiz"), wrong: newQuizSession("wrong") };

  function buildQuizQueue(sess) {
    let pool = sess.source === "wrong"
      ? DATA.questions.filter((q) => state.wrong.includes(q.id))
      : DATA.questions.filter((q) => sess.domain === "all" || q.d === sess.domain);
    pool = shuffle(pool);
    if (sess.source === "quiz" && sess.count > 0) pool = pool.slice(0, sess.count);
    sess.queue = pool.map((q) => q.id);
    sess.idx = 0;
    sess.results = [];
    resetQuestion(sess);
  }

  function resetQuestion(sess) {
    sess.selected = [];
    sess.submitted = false;
    const q = DATA.questions.find((x) => x.id === sess.queue[sess.idx]);
    sess.order = q ? shuffle(q.options.map((_, i) => i)) : [];
  }

  function renderQuiz(sess) {
    const isWrong = sess.source === "wrong";
    const toolbar = isWrong
      ? `<div class="toolbar"><h2 style="margin:0">错题本（${state.wrong.length}）</h2><span class="progress-text">${sess.queue.length ? `${Math.min(sess.idx + 1, sess.queue.length)} / ${sess.queue.length}` : ""}</span></div>`
      : `<div class="toolbar">
          <select id="q-domain">${domainOptions(sess.domain)}</select>
          <select id="q-count">
            ${[5, 10, 20, 0].map((n) => `<option value="${n}" ${sess.count === n ? "selected" : ""}>${n ? n + " 题" : "全部题目"}</option>`).join("")}
          </select>
          <button class="btn" id="q-new">重新出题</button>
          <span class="progress-text">${sess.queue.length ? `${Math.min(sess.idx + 1, sess.queue.length)} / ${sess.queue.length}` : ""}</span>
        </div>`;

    if (!sess.queue.length || sess.idx >= sess.queue.length) {
      app.innerHTML = toolbar + (sess.queue.length ? quizSummary(sess) : `
        <div class="panel empty">
          ${isWrong ? "<h3>错题本是空的</h3><p>在练习中答错的题会自动加入这里，答对后自动移出。</p>" : "<h3>没有符合条件的题目</h3>"}
        </div>`);
      bindQuizToolbar(sess);
      const again = document.getElementById("q-again");
      if (again) again.onclick = () => { buildQuizQueue(sess); renderQuiz(sess); };
      return;
    }

    const q = DATA.questions.find((x) => x.id === sess.queue[sess.idx]);
    const multi = q.answer.length > 1;
    const correct = sess.submitted && sameSet(sess.selected, q.answer);

    const opts = sess.order.map((origIdx, pos) => {
      let cls = "option";
      if (sess.submitted) {
        if (q.answer.includes(origIdx)) cls += " correct";
        else if (sess.selected.includes(origIdx)) cls += " wrong";
      } else if (sess.selected.includes(origIdx)) cls += " selected";
      return `<button class="${cls}" data-o="${origIdx}" ${sess.submitted ? "disabled" : ""}>
        <span class="letter">${LETTERS[pos]}</span><span>${esc(q.options[origIdx])}</span></button>`;
    }).join("");

    const correctLetters = sess.order.map((o, pos) => (q.answer.includes(o) ? LETTERS[pos] : null)).filter(Boolean).join("、");

    app.innerHTML = toolbar + `
      <div class="panel">
        <span class="pill domain">${esc(domainName(q.d))}</span>
        <span class="pill">${multi ? `多选（选 ${q.answer.length} 项）` : "单选"}</span>
        <div class="stem">${esc(q.stem)}</div>
        <div class="options">${opts}</div>
        ${sess.submitted ? `
          <div class="explain ${correct ? "ok" : "bad"}">
            <strong>${correct ? "回答正确" : `回答错误，正确答案：${correctLetters}`}</strong>
            <div>${esc(q.explain)}</div>
          </div>` : ""}
        <div class="actions">
          ${sess.submitted
            ? `<button class="btn primary" id="q-next">${sess.idx + 1 < sess.queue.length ? "下一题" : "查看结果"}</button>`
            : `<button class="btn primary" id="q-submit" ${sess.selected.length ? "" : "disabled"}>提交答案</button>`}
        </div>
      </div>`;

    bindQuizToolbar(sess);
    app.querySelectorAll("[data-o]").forEach((b) => { b.onclick = () => toggleOption(sess, Number(b.dataset.o)); });
    const submit = document.getElementById("q-submit");
    if (submit) submit.onclick = () => submitQuiz(sess);
    const next = document.getElementById("q-next");
    if (next) next.onclick = () => nextQuestion(sess);
  }

  function toggleOption(sess, o) {
    if (sess.submitted) return;
    const q = DATA.questions.find((x) => x.id === sess.queue[sess.idx]);
    if (q.answer.length > 1) {
      sess.selected = sess.selected.includes(o) ? sess.selected.filter((x) => x !== o) : sess.selected.concat(o);
    } else {
      sess.selected = [o];
    }
    renderQuiz(sess);
  }

  function submitQuiz(sess) {
    if (sess.submitted || !sess.selected.length) return;
    const q = DATA.questions.find((x) => x.id === sess.queue[sess.idx]);
    const ok = sameSet(sess.selected, q.answer);
    sess.submitted = true;
    sess.results.push({ id: q.id, ok });

    const rec = state.questions[q.id] || { attempts: 0, correct: 0 };
    rec.attempts += 1;
    if (ok) rec.correct += 1;
    rec.lastCorrect = ok;
    state.questions[q.id] = rec;
    if (!ok && !state.wrong.includes(q.id)) state.wrong.push(q.id);
    if (ok && sess.source === "wrong") state.wrong = state.wrong.filter((x) => x !== q.id);
    save();
    renderQuiz(sess);
  }

  function nextQuestion(sess) {
    sess.idx += 1;
    resetQuestion(sess);
    renderQuiz(sess);
  }

  function quizSummary(sess) {
    const right = sess.results.filter((r) => r.ok).length;
    const pct = Math.round((right / sess.results.length) * 100);
    const wrongList = sess.results.filter((r) => !r.ok).map((r) => {
      const q = DATA.questions.find((x) => x.id === r.id);
      return `<div class="list-item"><span class="pill domain">${esc(domainName(q.d))}</span><div>${esc(q.stem)}</div></div>`;
    }).join("");
    return `
      <div class="panel">
        <div class="score">${pct}%</div>
        <p>答对 ${right} / ${sess.results.length} 题。${pct >= 75 ? "表现不错，SAP-C02 及格线为 750/1000。" : "继续加油，建议先回顾相关领域的闪卡。"}</p>
        ${wrongList ? `<h3>本轮错题</h3>${wrongList}` : ""}
        <div class="actions"><button class="btn primary" id="q-again">再练一轮</button></div>
      </div>`;
  }

  function bindQuizToolbar(sess) {
    if (sess.source !== "quiz") return;
    document.getElementById("q-domain").onchange = (e) => { sess.domain = e.target.value; buildQuizQueue(sess); renderQuiz(sess); };
    document.getElementById("q-count").onchange = (e) => { sess.count = Number(e.target.value); buildQuizQueue(sess); renderQuiz(sess); };
    document.getElementById("q-new").onclick = () => { buildQuizQueue(sess); renderQuiz(sess); };
  }

  // ---------------- 视图：关键词速查 ----------------
  let kwFilter = "";
  function renderKeywords() {
    app.innerHTML = `
      <h2>题干关键词 → 答案服务</h2>
      <div class="toolbar"><input type="search" id="kw" placeholder="搜索关键词或服务，例如：DR、迁移、SCP、加密……" value="${esc(kwFilter)}" /></div>
      <div class="panel"><table class="kw-table" id="kw-table"></table></div>`;
    const input = document.getElementById("kw");
    input.oninput = () => { kwFilter = input.value; drawKeywordTable(); };
    input.focus();
    drawKeywordTable();
  }

  function highlight(text, term) {
    const safe = esc(text);
    if (!term) return safe;
    const re = new RegExp(esc(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    return safe.replace(re, (m) => `<mark>${m}</mark>`);
  }

  function drawKeywordTable() {
    const term = kwFilter.trim();
    const t = term.toLowerCase();
    const rows = DATA.keywords.filter((r) => !t || r.k.toLowerCase().includes(t) || r.v.toLowerCase().includes(t));
    document.getElementById("kw-table").innerHTML = rows.length
      ? rows.map((r) => `<tr><td>${highlight(r.k, term)}</td><td>${highlight(r.v, term)}</td></tr>`).join("")
      : `<tr><td colspan="2" class="empty">没有匹配的条目</td></tr>`;
  }

  // ---------------- 视图：方法论 ----------------
  const tipsByQuestion = {};
  METHOD.tips.forEach((t, i) => t.ex.forEach((id) => { (tipsByQuestion[id] = tipsByQuestion[id] || []).push(i); }));
  METHOD.duels.forEach((d) => d.ex.forEach((id) => { (tipsByQuestion[id] = tipsByQuestion[id] || []); }));

  let methodCat = "全部";
  function qChips(ids) {
    return ids.map((id) => {
      const q = BANK && BANK.byId[id];
      const title = q ? `${q.grip} → ${q.hint}` : "导入真题库后可查看原题";
      return `<a class="chip ${q && q.unverified ? "warn" : ""}" href="#/bank?id=${id}" title="${esc(title)}">#${id}</a>`;
    }).join("");
  }

  function renderMethod() {
    const cats = ["全部", "审题", "选项", "关键词"];
    const tips = METHOD.tips.map((t, i) => ({ ...t, i })).filter((t) => methodCat === "全部" || t.cat === methodCat);
    app.innerHTML = `
      <nav class="toc">
        <a href="#m-steps">四步审题法</a><a href="#m-stats">题库统计</a><a href="#m-tips">妙招</a>
        <a href="#m-domains">从提纲入手</a><a href="#m-duels">从产品入手</a><a href="#m-numbers">数字速记</a>
        <a href="#m-pitfalls">陷阱清单</a><a href="#m-plan">冲刺计划</a>
      </nav>
      ${BANK ? "" : `<div class="panel notice">题号标签（如 #683）可直接跳到原题。请先在 <a href="#/bank">真题库</a> 导入你的 CSV。</div>`}

      <section class="panel" id="m-steps">
        <h2>四步审题法（每题 30 秒内完成前三步）</h2>
        <ol class="steps">${METHOD.steps.map((s) => `<li><strong>${esc(s.t)}</strong><div>${esc(s.d)}</div></li>`).join("")}</ol>
      </section>

      <section class="panel" id="m-stats">
        <h2>用 683 道题统计出来的规律</h2>
        <p class="muted">统计口径：按题库答案计算各类选项的正确率。这些规律只能用来排除和缩小范围，最终仍以技术正确为准。</p>
        <table class="kw-table">${METHOD.stats.map((s) => `<tr><td>${esc(s.k)}</td><td>${esc(s.v)}</td></tr>`).join("")}</table>
      </section>

      <section id="m-tips">
        <div class="toolbar">
          <h2 style="margin:0">妙招（${METHOD.tips.length} 条）</h2>
          <span class="seg">${cats.map((c) => `<button class="btn ${c === methodCat ? "primary" : ""}" data-cat="${c}">${c}</button>`).join("")}</span>
        </div>
        ${tips.map((t) => `
          <div class="panel tip ${state.tipsDone[t.i] ? "done" : ""}">
            <div class="tip-head">
              <span class="pill domain">${esc(t.cat)}</span>
              <h3>${t.i + 1}. ${esc(t.title)}</h3>
              <label class="done-toggle"><input type="checkbox" data-tip="${t.i}" ${state.tipsDone[t.i] ? "checked" : ""}/> 已掌握</label>
            </div>
            <p>${esc(t.body)}</p>
            <div class="chips"><span class="muted">例题：</span>${qChips(t.ex)}</div>
          </div>`).join("")}
      </section>

      <section class="panel" id="m-domains">
        <h2>从提纲入手：按考试领域建立决策顺序</h2>
        ${METHOD.domains.map((d) => `
          <div class="domain-block">
            <h3>${esc(d.name)}</h3>
            <div class="muted">${esc(d.bank)}</div>
            <ol>${d.flow.map((f) => `<li>${esc(f)}</li>`).join("")}</ol>
            <div class="chips"><span class="muted">代表题：</span>${qChips(d.ex)}</div>
          </div>`).join("")}
      </section>

      <section class="panel" id="m-duels">
        <h2>从产品入手：易混产品对决表</h2>
        <p class="muted">“同题对决”指两个服务出现在同一道题的不同选项中时，各自是正确答案的次数。</p>
        <table class="kw-table duel">
          ${METHOD.duels.map((d) => `<tr><td>${esc(d.a)} <span class="muted">vs</span> ${esc(d.b)}</td>
            <td>${esc(d.rule)}${d.stat ? `<div class="muted">${esc(d.stat)}</div>` : ""}<div class="chips">${qChips(d.ex)}</div></td></tr>`).join("")}
        </table>
      </section>

      <section class="panel" id="m-numbers">
        <h2>数字速记</h2>
        <table class="kw-table">${METHOD.numbers.map((n) => `<tr><td>${esc(n.k)}</td><td>${esc(n.v)}</td></tr>`).join("")}</table>
      </section>

      <section class="panel" id="m-pitfalls">
        <h2>高频陷阱清单</h2>
        <ul class="pitfalls">${METHOD.pitfalls.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </section>

      <section class="panel" id="m-plan">
        <h2>冲刺计划</h2>
        <ol class="steps">${METHOD.plan.map((s) => `<li><strong>${esc(s.t)}</strong><div>${esc(s.d)}</div></li>`).join("")}</ol>
      </section>`;

    app.querySelectorAll("[data-cat]").forEach((b) => { b.onclick = () => { methodCat = b.dataset.cat; renderMethod(); document.getElementById("m-tips").scrollIntoView(); }; });
    app.querySelectorAll("[data-tip]").forEach((c) => {
      c.onchange = () => {
        if (c.checked) state.tipsDone[c.dataset.tip] = Date.now();
        else delete state.tipsDone[c.dataset.tip];
        save();
        c.closest(".tip").classList.toggle("done", c.checked);
      };
    });
    app.querySelectorAll(".toc a").forEach((a) => {
      a.onclick = (e) => { e.preventDefault(); document.querySelector(a.getAttribute("href")).scrollIntoView({ behavior: "smooth" }); };
    });
  }

  // ---------------- 真题库（本地导入 CSV） ----------------
  function parseCSV(text) {
    const rows = [];
    let row = [], field = "", i = 0, inQuotes = false;
    if (text.charCodeAt(0) === 0xfeff) i = 1;
    for (; i < text.length; i++) {
      const ch = text[i];
      if (inQuotes) {
        if (ch === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; } else inQuotes = false;
        } else field += ch;
      } else if (ch === '"') inQuotes = true;
      else if (ch === ",") { row.push(field); field = ""; }
      else if (ch === "\n" || ch === "\r") {
        if (ch === "\r" && text[i + 1] === "\n") i++;
        row.push(field); rows.push(row); row = []; field = "";
      } else field += ch;
    }
    if (field || row.length) { row.push(field); rows.push(row); }
    return rows.filter((r) => r.some((c) => c.trim()));
  }

  function splitOptions(s) {
    const out = {};
    String(s).split(/；(?=[A-H]：)/).forEach((p) => {
      const m = p.trim().match(/^([A-H])：([\s\S]*)$/);
      if (m) out[m[1]] = m[2].trim();
    });
    return out;
  }

  function bankFromCSV(text) {
    const rows = parseCSV(text);
    const head = rows.shift() || [];
    const col = (name) => head.indexOf(name);
    const need = ["原题号", "原题干", "全部选项", "题库答案"];
    if (need.some((n) => col(n) < 0)) throw new Error("缺少必要列：" + need.filter((n) => col(n) < 0).join("、"));
    const get = (r, n) => (col(n) >= 0 ? (r[col(n)] || "").trim() : "");
    const list = rows.map((r) => {
      const options = splitOptions(get(r, "全部选项"));
      const answer = (get(r, "题库答案").match(/[A-H]/g) || []).filter((l) => options[l]);
      return {
        id: Number(get(r, "原题号")),
        topic: get(r, "主题分类") || "未分类",
        type: get(r, "题型"),
        grip: get(r, "题干抓手"),
        hint: get(r, "答案联想"),
        memo: get(r, "关联记忆短句"),
        split: get(r, "多选拆记"),
        breakdown: get(r, "长题拆解"),
        unverified: get(r, "核验状态") === "待核验",
        note: get(r, "核验备注"),
        stem: get(r, "原题干"),
        options,
        answer,
        explain: get(r, "原解析"),
      };
    }).filter((q) => q.id && q.stem && Object.keys(q.options).length);
    if (!list.length) throw new Error("没有解析出题目");
    return list;
  }

  function setBank(list) {
    list.sort((a, b) => a.id - b.id);
    const byId = {};
    list.forEach((q) => { byId[q.id] = q; });
    const topics = [...new Set(list.map((q) => q.topic))];
    BANK = { list, byId, topics };
  }

  function persistBank(list) {
    try { localStorage.setItem(BANK_KEY, JSON.stringify(list)); return true; } catch (_) { return false; }
  }

  async function initBank() {
    if (typeof window.SAP_BANK_CSV === "string") {
      try { setBank(bankFromCSV(window.SAP_BANK_CSV)); return; } catch (_) { /* 内嵌数据损坏时退回其他来源 */ }
    }
    try {
      const cached = localStorage.getItem(BANK_KEY);
      if (cached) { setBank(JSON.parse(cached)); return; }
    } catch (_) { /* 缓存损坏时忽略，走下面的加载 */ }
    if (location.protocol.startsWith("http")) {
      try {
        const res = await fetch("bank.csv", { cache: "no-store" });
        if (res.ok) {
          const list = bankFromCSV(await res.text());
          setBank(list);
          persistBank(list);
        }
      } catch (_) { /* 同目录没有 bank.csv 时保持未导入状态 */ }
    }
  }

  function importBankFile(onDone) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv,text/csv";
    input.onchange = async () => {
      try {
        const list = bankFromCSV(await input.files[0].text());
        setBank(list);
        const ok = persistBank(list);
        alert(`已导入 ${list.length} 道题${ok ? "" : "（浏览器存储空间不足，本次仅在当前页面有效）"}`);
        onDone();
      } catch (e) {
        alert("导入失败：" + e.message);
      }
    };
    input.click();
  }

  const bankSess = Object.assign(
    { topic: "all", scope: "all", mode: "study", order: "seq", list: [], idx: 0, selected: [], submitted: false, showGrip: false },
    state.bank.ui
  );

  function saveBankUi() {
    const { topic, scope, mode, order } = bankSess;
    state.bank.ui = { topic, scope, mode, order, pos: bankSess.list[bankSess.idx] };
    save();
  }

  function buildBankList(keepId) {
    let pool = BANK.list.filter((q) => bankSess.topic === "all" || q.topic === bankSess.topic);
    if (bankSess.scope === "reliable") pool = pool.filter((q) => !q.unverified);
    if (bankSess.scope === "unverified") pool = pool.filter((q) => q.unverified);
    if (bankSess.scope === "wrong") pool = pool.filter((q) => state.bank.wrong.includes(q.id));
    if (bankSess.scope === "todo") pool = pool.filter((q) => !state.bank.rec[q.id]);
    if (bankSess.scope === "multi") pool = pool.filter((q) => q.answer.length > 1);
    if (bankSess.order === "random") pool = shuffle(pool);
    bankSess.list = pool.map((q) => q.id);
    const at = keepId ? bankSess.list.indexOf(keepId) : -1;
    bankSess.idx = at >= 0 ? at : 0;
    resetBankQuestion();
  }

  function resetBankQuestion() {
    bankSess.selected = [];
    bankSess.submitted = false;
    bankSess.showGrip = false;
  }

  function openBankQuestion(id) {
    if (!BANK || !BANK.byId[id]) return false;
    if (!bankSess.list.includes(id)) {
      bankSess.topic = "all";
      bankSess.scope = "all";
      bankSess.order = "seq";
    }
    buildBankList(id);
    bankSess.built = true;
    return true;
  }

  function renderBank() {
    if (!BANK) {
      app.innerHTML = `
        <div class="panel">
          <h2>真题库</h2>
          <p>导入你整理的题库 CSV（需包含“原题号、原题干、全部选项、题库答案”等列，推荐同时包含“题干抓手、答案联想、核验状态”）。数据只保存在本机浏览器，不会上传。</p>
          <p class="muted">也可以把 CSV 重命名为 <code>bank.csv</code> 放在 <code>index.html</code> 同目录，用本地 HTTP 服务打开时会自动加载。</p>
          <div class="actions" style="justify-content:flex-start"><button class="btn primary" id="b-import">导入 CSV</button></div>
        </div>`;
      document.getElementById("b-import").onclick = () => importBankFile(() => { buildBankList(); renderBank(); });
      return;
    }
    if (!bankSess.built) { buildBankList(bankSess.pos); bankSess.built = true; }

    const opt = (v, label, cur) => `<option value="${v}" ${cur === v ? "selected" : ""}>${label}</option>`;
    const count = (t) => BANK.list.filter((q) => q.topic === t).length;
    const toolbar = `
      <div class="toolbar">
        <select id="b-topic">${opt("all", `全部主题（${BANK.list.length}）`, bankSess.topic)}${BANK.topics.map((t) => opt(t, `${t}（${count(t)}）`, bankSess.topic)).join("")}</select>
        <select id="b-scope">
          ${opt("all", "全部题目", bankSess.scope)}${opt("reliable", "仅可靠题", bankSess.scope)}${opt("unverified", "仅待核验", bankSess.scope)}
          ${opt("multi", "仅多选题", bankSess.scope)}${opt("todo", "未做过", bankSess.scope)}${opt("wrong", `错题（${state.bank.wrong.length}）`, bankSess.scope)}
        </select>
        <select id="b-mode">${opt("study", "背题模式", bankSess.mode)}${opt("practice", "练习模式", bankSess.mode)}</select>
        <select id="b-order">${opt("seq", "按题号", bankSess.order)}${opt("random", "随机", bankSess.order)}</select>
        <input id="b-jump" type="number" min="1" placeholder="题号" style="width:90px" />
        <span class="progress-text">${bankSess.list.length ? `${bankSess.idx + 1} / ${bankSess.list.length}` : ""}</span>
      </div>`;

    if (!bankSess.list.length) {
      app.innerHTML = toolbar + `<div class="panel empty">当前筛选条件下没有题目</div>` + bankFooter();
      bindBank();
      return;
    }

    const q = BANK.byId[bankSess.list[bankSess.idx]];
    const reveal = bankSess.mode === "study" || bankSess.submitted;
    const correct = bankSess.submitted && sameSet(bankSess.selected, q.answer);
    const rec = state.bank.rec[q.id];
    const multi = q.answer.length > 1;
    const relatedTips = (tipsByQuestion[q.id] || []).map((i) => METHOD.tips[i]);

    const opts = Object.entries(q.options).map(([k, v]) => {
      let cls = "option";
      if (reveal && q.answer.includes(k)) cls += " correct";
      else if (reveal && bankSess.selected.includes(k)) cls += " wrong";
      else if (bankSess.selected.includes(k)) cls += " selected";
      return `<button class="${cls}" data-o="${k}" ${reveal ? "disabled" : ""}><span class="letter">${k}</span><span>${esc(v)}</span></button>`;
    }).join("");

    app.innerHTML = toolbar + `
      <div class="panel">
        <div>
          <span class="pill domain">原题 ${q.id}</span>
          <span class="pill">${esc(q.topic)}</span>
          <span class="pill">${multi ? `多选（选 ${q.answer.length} 项）` : "单选"}</span>
          ${q.unverified ? `<span class="pill warn">待核验</span>` : ""}
          ${rec ? `<span class="pill">做过 ${rec.attempts} 次 · 对 ${rec.correct} 次</span>` : ""}
        </div>
        ${bankSess.mode === "practice" && !reveal ? `
          <div class="grip-line">${bankSess.showGrip
            ? `<strong>题干抓手：</strong>${esc(q.grip)}`
            : `<button class="btn" id="b-grip">看一眼题干抓手（H）</button>`}</div>` : `
          <div class="grip-line"><strong>题干抓手：</strong>${esc(q.grip)} <span class="muted">→</span> <strong>答案联想：</strong>${esc(q.hint)}</div>`}
        <div class="stem">${esc(q.stem)}</div>
        <div class="options">${opts}</div>
        ${reveal ? `
          <div class="explain ${bankSess.mode === "practice" ? (correct ? "ok" : "bad") : ""}">
            <strong>${bankSess.mode === "practice" ? (correct ? "回答正确 · " : "回答错误 · ") : ""}题库答案：${q.answer.join("、") || "（缺失）"}</strong>
            ${q.memo ? `<div><strong>记忆短句：</strong>${esc(q.memo)}</div>` : ""}
            ${multi && q.split ? `<div><strong>多选拆记：</strong>${esc(q.split)}</div>` : ""}
            ${q.unverified ? `<div class="warn-text"><strong>核验备注：</strong>${esc(q.note || "原答案存在疑点，请对照技术逻辑判断")}</div>` : ""}
            ${relatedTips.length ? `<div><strong>相关妙招：</strong>${relatedTips.map((t) => `<a href="#/method">${esc(t.title)}</a>`).join("；")}</div>` : ""}
            ${q.explain ? `<details><summary>原解析</summary><div>${esc(q.explain)}</div></details>` : ""}
          </div>` : ""}
        <div class="actions">
          <button class="btn" id="b-prev" ${bankSess.idx === 0 ? "disabled" : ""}>上一题</button>
          ${bankSess.mode === "practice" && !reveal ? `<button class="btn primary" id="b-submit" ${bankSess.selected.length ? "" : "disabled"}>提交答案</button>` : ""}
          <button class="btn ${reveal ? "primary" : ""}" id="b-next" ${bankSess.idx >= bankSess.list.length - 1 ? "disabled" : ""}>下一题</button>
        </div>
      </div>` + bankFooter();
    bindBank(q);
  }

  function bankFooter() {
    return `<div class="actions" style="justify-content:flex-start">
      <span class="muted">已导入 ${BANK.list.length} 题，其中待核验 ${BANK.list.filter((q) => q.unverified).length} 题。</span>
      <button class="btn" id="b-reimport">重新导入 CSV</button>
      <button class="btn bad" id="b-clear">移除题库</button>
    </div>`;
  }

  function bindBank(q) {
    const on = (id, ev, fn) => { const el = document.getElementById(id); if (el) el[ev] = fn; };
    const refilter = (key) => (e) => { bankSess[key] = e.target.value; buildBankList(); saveBankUi(); renderBank(); };
    on("b-topic", "onchange", refilter("topic"));
    on("b-scope", "onchange", refilter("scope"));
    on("b-order", "onchange", refilter("order"));
    on("b-mode", "onchange", (e) => { bankSess.mode = e.target.value; resetBankQuestion(); saveBankUi(); renderBank(); });
    on("b-jump", "onkeydown", (e) => {
      if (e.key !== "Enter") return;
      const id = Number(e.target.value);
      if (!openBankQuestion(id)) { alert("题库中没有这个题号"); return; }
      saveBankUi(); renderBank();
    });
    on("b-prev", "onclick", () => moveBank(-1));
    on("b-next", "onclick", () => moveBank(1));
    on("b-submit", "onclick", submitBank);
    on("b-grip", "onclick", () => { bankSess.showGrip = true; renderBank(); });
    on("b-reimport", "onclick", () => importBankFile(() => { buildBankList(); renderBank(); }));
    on("b-clear", "onclick", () => {
      if (typeof window.SAP_BANK_CSV === "string") { alert("当前题库内嵌在 HTML 文件中，无法移除。"); return; }
      if (!confirm("从本机浏览器移除已导入的题库？（做题记录会保留）")) return;
      localStorage.removeItem(BANK_KEY);
      BANK = null;
      renderBank();
    });
    if (q) app.querySelectorAll("[data-o]").forEach((b) => { b.onclick = () => toggleBankOption(q, b.dataset.o); });
  }

  function toggleBankOption(q, k) {
    if (bankSess.mode !== "practice" || bankSess.submitted || !q.options[k]) return;
    if (q.answer.length > 1) {
      bankSess.selected = bankSess.selected.includes(k) ? bankSess.selected.filter((x) => x !== k) : bankSess.selected.concat(k);
    } else bankSess.selected = [k];
    renderBank();
  }

  function submitBank() {
    const q = BANK.byId[bankSess.list[bankSess.idx]];
    if (bankSess.submitted || !bankSess.selected.length || !q.answer.length) return;
    const ok = sameSet(bankSess.selected, q.answer);
    bankSess.submitted = true;
    const rec = state.bank.rec[q.id] || { attempts: 0, correct: 0 };
    rec.attempts += 1;
    if (ok) rec.correct += 1;
    rec.last = ok;
    state.bank.rec[q.id] = rec;
    if (!ok && !state.bank.wrong.includes(q.id)) state.bank.wrong.push(q.id);
    if (ok && bankSess.scope === "wrong") state.bank.wrong = state.bank.wrong.filter((x) => x !== q.id);
    save();
    renderBank();
  }

  function moveBank(d) {
    const next = bankSess.idx + d;
    if (next < 0 || next >= bankSess.list.length) return;
    bankSess.idx = next;
    resetBankQuestion();
    saveBankUi();
    renderBank();
    window.scrollTo(0, 0);
  }

  // ---------------- 视图：速记（关键词 + 正确选项） ----------------
  const LATIN = /[A-Za-z0-9][A-Za-z0-9\-.:/_]*/g;
  const STOPWORDS = new Set(["aws", "amazon", "a", "an", "the", "to", "of", "and", "or", "in", "on", "for", "with", "by", "id", "api", "s3", "1", "2", "3"]);
  const normWord = (w) => w.toLowerCase().replace(/\.+$/, "");

  // 正确选项中出现、其他选项都没有的英文词（服务名、参数等）
  function distinctRanges(q, letter) {
    const others = new Set();
    Object.entries(q.options).forEach(([l, v]) => {
      if (l !== letter) (v.match(LATIN) || []).forEach((w) => others.add(normWord(w)));
    });
    const text = q.options[letter];
    const ranges = [];
    for (const m of text.matchAll(LATIN)) {
      const w = normWord(m[0]);
      if (!others.has(w) && !STOPWORDS.has(w)) ranges.push([m.index, m.index + m[0].length]);
    }
    return ranges;
  }

  function distinctPhrases(text, ranges) {
    const phrases = [];
    let cur = null;
    ranges.forEach(([s, e]) => {
      if (cur && s - cur[1] <= 2) cur[1] = e;
      else { if (cur) phrases.push(cur); cur = [s, e]; }
    });
    if (cur) phrases.push(cur);
    return [...new Set(phrases.map(([s, e]) => text.slice(s, e).replace(/\.+$/, "")))];
  }

  function markRanges(text, ranges) {
    let out = "", pos = 0;
    ranges.forEach(([s, e]) => {
      out += esc(text.slice(pos, s)) + `<mark>${esc(text.slice(s, e))}</mark>`;
      pos = e;
    });
    return out + esc(text.slice(pos));
  }

  const recall = Object.assign({ topic: "all", kind: "single", mode: "list", term: "", page: 0 }, state.bank.recallUi || {});
  const RECALL_PAGE = 40;
  const revealed = new Set();
  const expanded = new Set();

  function recallPool() {
    const t = recall.term.trim().toLowerCase();
    if (/^\d+$/.test(t)) return BANK.byId[t] && BANK.byId[t].answer.length ? [BANK.byId[t]] : [];
    return BANK.list.filter((q) => {
      if (!q.answer.length) return false;
      if (recall.topic !== "all" && q.topic !== recall.topic) return false;
      if (recall.kind === "single" && q.answer.length !== 1) return false;
      if (recall.kind === "multi" && q.answer.length === 1) return false;
      if (recall.kind === "unverified" && !q.unverified) return false;
      if (recall.kind === "wrong" && !state.bank.wrong.includes(q.id)) return false;
      if (!t) return true;
      if (String(q.id) === t) return true;
      const hay = [q.grip, q.hint, q.memo, ...q.answer.map((l) => q.options[l])].join(" ").toLowerCase();
      return hay.includes(t);
    });
  }

  function saveRecallUi() {
    const { topic, kind, mode, term, page } = recall;
    state.bank.recallUi = { topic, kind, mode, term, page };
    save();
  }

  function recallItem(q) {
    const show = recall.mode === "list" || revealed.has(q.id);
    const answers = q.answer.map((l) => {
      const ranges = distinctRanges(q, l);
      return { l, text: q.options[l], ranges, keys: distinctPhrases(q.options[l], ranges) };
    });
    const keys = [...new Set(answers.flatMap((a) => a.keys))];
    return `
      <div class="panel recall-item" data-id="${q.id}">
        <div class="recall-head">
          <a class="chip" href="#/bank?id=${q.id}">#${q.id}</a>
          <span class="pill">${esc(q.topic)}</span>
          ${q.answer.length > 1 ? `<span class="pill">多选 ${q.answer.length} 项</span>` : ""}
          ${q.unverified ? `<span class="pill warn">待核验</span>` : ""}
        </div>
        <div class="recall-grip">${esc(q.grip || q.memo || q.stem.slice(0, 60))}</div>
        ${show ? `
          ${q.hint ? `<div class="recall-hint"><span class="muted">答案联想：</span>${esc(q.hint)}</div>` : ""}
          ${keys.length ? `<div class="recall-keys"><span class="muted">区分词（其他选项没有）：</span>${keys.map((k) => `<span class="key">${esc(k)}</span>`).join("")}</div>` : ""}
          ${answers.map((a) => `<div class="recall-answer"><span class="letter">${a.l}</span><span>${markRanges(a.text, a.ranges)}</span></div>`).join("")}
          ${q.unverified && q.note ? `<div class="warn-text small">核验备注：${esc(q.note)}</div>` : ""}
          <button class="link-btn" data-expand="${q.id}">${expanded.has(q.id) ? "收起原题" : "展开原题和其他选项"}</button>
          ${expanded.has(q.id) ? `
            <div class="recall-full">
              <div class="stem">${esc(q.stem)}</div>
              ${Object.entries(q.options).map(([k, v]) => `<div class="recall-opt ${q.answer.includes(k) ? "ok" : ""}"><span class="letter">${k}</span><span>${esc(v)}</span></div>`).join("")}
            </div>` : ""}`
        : `<button class="btn" data-reveal="${q.id}">显示正确选项</button>`}
      </div>`;
  }

  function renderRecall() {
    if (!BANK) { renderBank(); return; }
    const pool = recallPool();
    const pages = Math.max(1, Math.ceil(pool.length / RECALL_PAGE));
    recall.page = Math.min(recall.page, pages - 1);
    const items = pool.slice(recall.page * RECALL_PAGE, (recall.page + 1) * RECALL_PAGE);
    const opt = (v, label, cur) => `<option value="${v}" ${cur === v ? "selected" : ""}>${label}</option>`;
    const pager = pages > 1 ? `
      <div class="actions pager">
        <button class="btn" data-page="-1" ${recall.page === 0 ? "disabled" : ""}>上一页</button>
        <span class="muted">第 ${recall.page + 1} / ${pages} 页</span>
        <button class="btn" data-page="1" ${recall.page >= pages - 1 ? "disabled" : ""}>下一页</button>
      </div>` : "";

    app.innerHTML = `
      <h2>关键词 + 正确选项速记</h2>
      <p class="muted">题目和选项固定成套出现：看到题干关键词，就认出正确选项。正确选项里其他选项都没有的英文服务名/参数已高亮，背这几个词即可在考场上锁定答案。</p>
      <div class="toolbar">
        <select id="r-kind">${opt("single", "单选", recall.kind)}${opt("multi", "多选", recall.kind)}${opt("all", "全部题型", recall.kind)}${opt("unverified", "仅待核验", recall.kind)}${opt("wrong", "真题错题", recall.kind)}</select>
        <select id="r-topic">${opt("all", "全部主题", recall.topic)}${BANK.topics.map((t) => opt(t, t, recall.topic)).join("")}</select>
        <select id="r-mode">${opt("list", "直接显示答案", recall.mode)}${opt("quiz", "自测（先遮住答案）", recall.mode)}</select>
        <input type="search" id="r-term" placeholder="搜关键词、服务名或题号" value="${esc(recall.term)}" />
        <span class="progress-text">共 ${pool.length} 题</span>
      </div>
      ${pager}
      ${items.length ? items.map(recallItem).join("") : `<div class="panel empty">没有符合条件的题目</div>`}
      ${pager}`;

    const refilter = (key) => (e) => { recall[key] = e.target.value; recall.page = 0; revealed.clear(); saveRecallUi(); renderRecall(); };
    document.getElementById("r-kind").onchange = refilter("kind");
    document.getElementById("r-topic").onchange = refilter("topic");
    document.getElementById("r-mode").onchange = refilter("mode");
    const term = document.getElementById("r-term");
    let timer = null;
    term.oninput = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        recall.term = term.value; recall.page = 0; saveRecallUi(); renderRecall();
        const el = document.getElementById("r-term");
        el.focus(); el.setSelectionRange(el.value.length, el.value.length);
      }, 300);
    };
    app.querySelectorAll("[data-page]").forEach((b) => {
      b.onclick = () => { recall.page += Number(b.dataset.page); saveRecallUi(); renderRecall(); window.scrollTo(0, 0); };
    });
    app.querySelectorAll("[data-reveal]").forEach((b) => { b.onclick = () => rerenderRecallItem(Number(b.dataset.reveal), () => revealed.add(Number(b.dataset.reveal))); });
    app.querySelectorAll("[data-expand]").forEach((b) => {
      b.onclick = () => rerenderRecallItem(Number(b.dataset.expand), (id) => { expanded.has(id) ? expanded.delete(id) : expanded.add(id); });
    });
  }

  function rerenderRecallItem(id, mutate) {
    mutate(id);
    const el = app.querySelector(`.recall-item[data-id="${id}"]`);
    if (!el) return;
    const tmp = document.createElement("div");
    tmp.innerHTML = recallItem(BANK.byId[id]);
    const fresh = tmp.firstElementChild;
    el.replaceWith(fresh);
    fresh.querySelectorAll("[data-reveal]").forEach((b) => { b.onclick = () => rerenderRecallItem(id, () => revealed.add(id)); });
    fresh.querySelectorAll("[data-expand]").forEach((b) => {
      b.onclick = () => rerenderRecallItem(id, () => { expanded.has(id) ? expanded.delete(id) : expanded.add(id); });
    });
  }

  // ---------------- 路由与快捷键 ----------------
  let currentView = "home";
  function route() {
    const [view, query] = (location.hash.replace(/^#\//, "") || "home").split("?");
    currentView = ["home", "method", "recall", "bank", "cards", "quiz", "wrong", "keywords"].includes(view) ? view : "home";
    document.querySelectorAll("#tabs a").forEach((a) => a.classList.toggle("active", a.dataset.view === currentView));
    if (currentView === "home") renderHome();
    if (currentView === "method") renderMethod();
    if (currentView === "recall") renderRecall();
    if (currentView === "bank") {
      const id = Number(new URLSearchParams(query || "").get("id"));
      if (id && openBankQuestion(id)) saveBankUi();
      renderBank();
    }
    if (currentView === "cards") { buildCardQueue(); renderCards(); }
    if (currentView === "quiz") { if (!quizSessions.quiz.queue.length) buildQuizQueue(quizSessions.quiz); renderQuiz(quizSessions.quiz); }
    if (currentView === "wrong") { buildQuizQueue(quizSessions.wrong); renderQuiz(quizSessions.wrong); }
    if (currentView === "keywords") renderKeywords();
    window.scrollTo(0, 0);
  }

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, select, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
    if (currentView === "cards" && cardSession.idx < cardSession.queue.length) {
      if (e.key === " ") {
        e.preventDefault();
        if (!cardSession.flipped) { cardSession.flipped = true; renderCards(); }
      } else if (cardSession.flipped && ["1", "2", "3"].includes(e.key)) {
        submitCardGrade(Number(e.key) - 1);
      }
    }
    if (currentView === "bank" && BANK && bankSess.list.length) {
      const q = BANK.byId[bankSess.list[bankSess.idx]];
      const k = e.key.toUpperCase();
      if (e.key.length === 1 && q.options[k]) toggleBankOption(q, k);
      else if (k === "H" && bankSess.mode === "practice") { bankSess.showGrip = true; renderBank(); }
      else if (e.key === "ArrowRight") moveBank(1);
      else if (e.key === "ArrowLeft") moveBank(-1);
      else if (e.key === "Enter") {
        e.preventDefault();
        const revealed = bankSess.mode === "study" || bankSess.submitted;
        revealed ? moveBank(1) : submitBank();
      }
      return;
    }
    if (currentView === "quiz" || currentView === "wrong") {
      const sess = quizSessions[currentView];
      if (sess.idx >= sess.queue.length) return;
      const pos = LETTERS.indexOf(e.key.toUpperCase());
      if (pos >= 0 && pos < sess.order.length && e.key.length === 1) toggleOption(sess, sess.order[pos]);
      else if (e.key === "Enter") {
        e.preventDefault();
        sess.submitted ? nextQuestion(sess) : submitQuiz(sess);
      }
    }
  });

  window.addEventListener("hashchange", route);
  initBank().then(route);
})();
