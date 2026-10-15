(() => {
  const C = window.CONFIG;
  const Q = window.QUESTIONS;
  const CATS = [
    { id: "apt", t: "Aptitudes", d: "Logique, calcul, langage, espace, attention", c: "#6d4ae0", e: "🧩" },
    { id: "per", t: "Personnalité", d: "Big Five, MBTI, MMPI, tests projectifs", c: "#0e8a96", e: "🧠" },
    { id: "theo", t: "Théorie psychométrique", d: "QI, fidélité, validité, étalonnage", c: "#c9801b", e: "📐" }
  ];
  const catOf = (id) => CATS.find((c) => c.id === id);
  const PROGRAMS = [
    { id: "conc", t: "Concours et recrutement", e: "🎯", c: "#6d4ae0", d: "Les épreuves d'aptitudes les plus fréquentes, des suites logiques à l'entretien de recrutement.", steps: [
      { t: "Séries logiques", cat: "apt", packs: ["Séries logiques"] },
      { t: "Calcul et tableaux de données", cat: "apt", packs: ["Raisonnement numérique et calcul", "Tableaux et pourcentages"] },
      { t: "Raisonnement verbal et langue", cat: "apt", packs: ["Raisonnement verbal et langue"] },
      { t: "Logique et déduction", cat: "apt", packs: ["Logique et déduction"] },
      { t: "Matrices et tests non verbaux", cat: "apt", packs: ["Matrices et tests non verbaux"] },
      { t: "Espace, perception et mécanique", cat: "apt", packs: ["Espace, perception et mécanique"] },
      { t: "Batteries d'aptitudes et acquis", cat: "apt", packs: ["Batteries d'aptitudes et admission", "Acquis scolaires, lecture et langues"] },
      { t: "Attention et vitesse", cat: "apt", packs: ["Attention et vitesse"] },
      { t: "Recrutement et sélection", cat: "per", packs: ["Recrutement et sélection"] }] },
    { id: "pers", t: "Tests de personnalité", e: "🧠", c: "#0e8a96", d: "Des modèles aux inventaires utilisés en orientation et en entreprise.", steps: [
      { t: "Big Five", cat: "per", packs: ["Big Five"] },
      { t: "MBTI et inventaires de personnalité", cat: "per", packs: ["MBTI", "Inventaires de personnalité"] },
      { t: "Intérêts, valeurs et styles", cat: "per", packs: ["Intérêts, valeurs et styles"] },
      { t: "Tests projectifs", cat: "per", packs: ["Tests projectifs"] },
      { t: "Méthodologie et biais de réponse", cat: "per", packs: ["Méthodologie des questionnaires"] },
      { t: "Interprétation des profils", cat: "per", packs: ["Interprétation des profils"] }] },
    { id: "clin", t: "Psychologie clinique et santé", e: "🩺", c: "#c2307c", d: "Inventaires cliniques, échelles de dépistage, entretiens et évaluation fonctionnelle.", steps: [
      { t: "MMPI et inventaires cliniques", cat: "per", packs: ["MMPI et inventaires cliniques"] },
      { t: "Dépistage : anxiété, trauma, humeur, sommeil", cat: "per", packs: ["Dépistage : anxiété, trauma, humeur, sommeil"] },
      { t: "Entretiens cliniques, enfants et famille", cat: "per", packs: ["Entretiens cliniques, enfants et famille"] },
      { t: "Bien-être, stress et psychologie positive", cat: "per", packs: ["Bien-être, stress et psychologie positive"] },
      { t: "Évaluation clinique et fonctionnelle", cat: "theo", packs: ["Évaluation clinique, fonctionnelle et neuropsychologique"] }] },
    { id: "intel", t: "Tests d'intelligence", e: "🧩", c: "#c9801b", d: "WAIS, WISC, Raven et théories de l'intelligence.", steps: [
      { t: "Sous-tests du WAIS et du WISC", cat: "apt", packs: ["Sous-tests du WAIS et du WISC"] },
      { t: "Échelles de Wechsler", cat: "theo", packs: ["Échelles de Wechsler"] },
      { t: "QI et théories de l'intelligence", cat: "theo", packs: ["QI et théories de l'intelligence"] },
      { t: "Matrices et tests non verbaux", cat: "apt", packs: ["Matrices et tests non verbaux"] },
      { t: "Tests chez l'enfant", cat: "theo", packs: ["Tests chez l'enfant"] }] },
    { id: "neuro", t: "Neuropsychologie", e: "🔬", c: "#2563eb", d: "Attention, mémoire, fonctions exécutives et batteries neuropsychologiques.", steps: [
      { t: "Attention et vitesse", cat: "apt", packs: ["Attention et vitesse"] },
      { t: "Mémoire", cat: "apt", packs: ["Mémoire"] },
      { t: "Fonctions exécutives", cat: "apt", packs: ["Fonctions exécutives"] },
      { t: "Neuropsychologie et motricité", cat: "apt", packs: ["Neuropsychologie et motricité"] },
      { t: "Évaluation clinique et fonctionnelle", cat: "theo", packs: ["Évaluation clinique, fonctionnelle et neuropsychologique"] }] },
    { id: "trav", t: "Travail et sélection du personnel", e: "💼", c: "#12805c", d: "Psychologie du travail, sélection, validité des méthodes et équité.", steps: [
      { t: "Psychologie du travail", cat: "per", packs: ["Psychologie du travail"] },
      { t: "Recrutement et sélection", cat: "per", packs: ["Recrutement et sélection"] },
      { t: "Intérêts, valeurs et styles", cat: "per", packs: ["Intérêts, valeurs et styles"] },
      { t: "Batteries d'aptitudes et admission", cat: "apt", packs: ["Batteries d'aptitudes et admission"] },
      { t: "Validité, équité et sélection", cat: "theo", packs: ["Validité, équité et sélection"] }] },
    { id: "theo", t: "Théorie pour étudiants", e: "📐", c: "#7c3aed", d: "Les bases de la psychométrie pour réussir vos examens.", steps: [
      { t: "Histoire de la psychométrie", cat: "theo", packs: ["Histoire de la psychométrie"] },
      { t: "Fidélité et théorie classique", cat: "theo", packs: ["Fidélité et théorie classique"] },
      { t: "Validité, équité et sélection", cat: "theo", packs: ["Validité, équité et sélection"] },
      { t: "Étalonnage et notes standard", cat: "theo", packs: ["Étalonnage et notes standard"] },
      { t: "Construction de tests et analyse d'items", cat: "theo", packs: ["Construction de tests et analyse d'items"] },
      { t: "TRI, analyse factorielle et fondements", cat: "theo", packs: ["TRI, analyse factorielle et fondements"] },
      { t: "Statistiques et choix des tests", cat: "theo", packs: ["Statistiques et choix des tests"] },
      { t: "Calculs psychométriques", cat: "theo", packs: ["Calculs psychométriques"] }] },
    { id: "ethic", t: "Éthique et pratique professionnelle", e: "⚖️", c: "#d9650b", d: "Déontologie, passation, cotation et interprétation responsable des tests.", steps: [
      { t: "Éthique et déontologie", cat: "per", packs: ["Éthique et déontologie"] },
      { t: "Pratique professionnelle et éthique", cat: "theo", packs: ["Pratique professionnelle et éthique"] },
      { t: "Interprétation des profils", cat: "per", packs: ["Interprétation des profils"] },
      { t: "Méthodologie des questionnaires", cat: "per", packs: ["Méthodologie des questionnaires"] }] }
  ];
  const TABS = ["home", "packs", "progress", "settings"];
  const ACCENTS = { violet: "#5b3fd0", bleu: "#2563eb", vert: "#12805c", orange: "#d9650b", rose: "#c2307c" };
  const app = document.getElementById("app");

  // ---------- stockage ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  let res = store.get("pt_res", {});
  let days = store.get("pt_days", {});
  const DEF = { theme: "auto", accent: "violet", size: 1, vibrate: true, goal: 5, name: "" };
  let S = Object.assign({}, DEF, store.get("pt_set", {}));
  let pro = false;
  let deferredPrompt = null;
  let ui = { packTab: "packs" };
  let qs = null;

  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

  function applySettings() {
    const r = document.documentElement;
    if (S.theme === "auto") r.removeAttribute("data-theme"); else r.setAttribute("data-theme", S.theme);
    r.style.setProperty("--accent", ACCENTS[S.accent] || ACCENTS.violet);
    r.style.fontSize = 16 * S.size + "px";
    const dark = S.theme === "dark" || (S.theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", dark ? "#0f1020" : ACCENTS[S.accent] || ACCENTS.violet);
  }
  const saveS = () => { store.set("pt_set", S); applySettings(); };

  // ---------- identifiant d'appareil et code Pro ----------
  const ALPHA = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  function genId() {
    const b = new Uint8Array(8);
    crypto.getRandomValues(b);
    let s = "";
    for (let i = 0; i < 8; i++) s += ALPHA[b[i] % 32];
    return s.slice(0, 4) + "-" + s.slice(4);
  }
  let dev = store.get("pt_dev", null);
  if (!dev) { dev = genId(); store.set("pt_dev", dev); }

  function b64uToBytes(str) {
    const b = str.replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(b + "=".repeat((4 - (b.length % 4)) % 4));
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  async function verifyCode(code, id) {
    try {
      const sig = b64uToBytes(String(code).replace(/\s+/g, ""));
      const key = await crypto.subtle.importKey("jwk", C.PUBLIC_KEY, { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]);
      return await crypto.subtle.verify({ name: "ECDSA", hash: "SHA-256" }, key, sig, new TextEncoder().encode("PSYCHOTEST|" + id));
    } catch (e) { return false; }
  }
  async function checkPro() {
    const saved = store.get("pt_pro", null);
    return saved ? verifyCode(saved, dev) : false;
  }

  // ---------- données ----------
  const isStandalone = () => window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  const tot = (id) => Q[id].length;
  const key = (c, i) => c + "-" + i;
  const locked = (i) => !pro && i >= C.FREE_PER_CAT;
  function status(c, i) {
    if (locked(i)) return "lock";
    const r = res[key(c, i)];
    return r == null ? "" : r === 1 ? "full" : r === 0 ? "zero" : "part";
  }
  function allItems() { const o = []; CATS.forEach((c) => Q[c.id].forEach((q, i) => o.push({ cat: c.id, i, s: q.s }))); return o; }
  function packs() {
    const out = [];
    CATS.forEach((c) => {
      const m = new Map();
      Q[c.id].forEach((q, i) => { const pk = q.p || q.s; if (!m.has(pk)) m.set(pk, []); m.get(pk).push({ cat: c.id, i, s: q.s, p: pk }); });
      m.forEach((items, s) => out.push({ cat: c.id, s, items }));
    });
    return out;
  }
  function prog(items) {
    const done = items.filter((x) => res[key(x.cat, x.i)] != null);
    const avg = done.length ? done.reduce((s, x) => s + res[key(x.cat, x.i)], 0) / done.length : 0;
    return { n: items.length, done: done.length, avg, unl: items.filter((x) => !locked(x.i)).length };
  }
  const stepItems = (st) => Q[st.cat].map((q, i) => ({ cat: st.cat, i, s: q.s, p: q.p || q.s })).filter((x) => st.packs.includes(x.p));
  function nextTodo() {
    for (const c of CATS) for (let i = 0; i < tot(c.id); i++) if (!locked(i) && res[key(c.id, i)] == null) return { cat: c.id, i };
    return null;
  }

  // jours, série, objectif
  const dayKey = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const todayCount = () => days[dayKey(new Date())] || 0;
  function streak() {
    const d = new Date();
    if (!days[dayKey(d)]) d.setDate(d.getDate() - 1);
    let n = 0;
    while (days[dayKey(d)] > 0) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  function toast(t) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = t;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  }
  async function copy(text) { try { await navigator.clipboard.writeText(text); toast("Copié"); } catch (e) { toast("Copie impossible"); } }
  const buzz = (p) => { if (S.vibrate && navigator.vibrate) navigator.vibrate(p); };

  // ---------- onglets et navigation ----------
  const tabsEl = document.createElement("nav");
  tabsEl.id = "tabs";
  tabsEl.innerHTML = `<div class="in">
    <button data-act="tab" data-v="home"><b>🏠</b>Accueil</button>
    <button data-act="tab" data-v="packs"><b>📚</b>Paquets</button>
    <button data-act="tab" data-v="progress"><b>📈</b>Progrès</button>
    <button data-act="tab" data-v="settings"><b>⚙️</b>Réglages</button></div>`;
  document.body.appendChild(tabsEl);
  function setTabs(active) {
    tabsEl.classList.toggle("hide", !active);
    app.classList.toggle("notabs", !active);
    tabsEl.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.v === active));
  }
  function go(name, p = {}) {
    const cur = history.state && history.state.name;
    if (TABS.includes(name) && TABS.includes(cur)) history.replaceState({ name, p }, "");
    else history.pushState({ name, p }, "");
    show(name, p);
  }
  const back = () => history.back();
  window.addEventListener("popstate", (e) => { const s = e.state || { name: "home", p: {} }; show(s.name, s.p); });
  function show(name, p) {
    window.scrollTo(0, 0);
    const V = { home, packs: packsView, progress, settings, cat, program, quiz: quizView, upgrade, lock };
    (V[name] || home)(p || {});
  }
  function top(title) {
    return `<div class="top"><button class="back" data-act="back" aria-label="Retour">←</button>
      <div class="title"><h2>${title}</h2></div><span class="badge ${pro ? "pro" : ""}">${pro ? "Pro" : "Gratuit"}</span></div>`;
  }

  // ---------- clics ----------
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    const d = el.dataset;
    switch (d.act) {
      case "back": back(); break;
      case "tab": go(d.v); break;
      case "go": go(d.v, d.id ? { id: d.id } : {}); break;
      case "install": install(); break;
      case "copy": copy(d.t); break;
      case "activate": activate(); break;
      case "ans": answer(d.v === "1"); break;
      case "prev": qs.step--; drawQuestion(); break;
      case "next": qs.step++; drawQuestion(); break;
      case "validate": validate(); break;
      case "nextq": nextQuestion(); break;
      case "tile": if (locked(+d.i)) go("lock"); else startSession(catOf(d.id).t, Q[d.id].map((q, i) => ({ cat: d.id, i })), { cat: d.id, i: +d.i }); break;
      case "catgo": startSession(catOf(d.id).t, Q[d.id].map((q, i) => ({ cat: d.id, i }))); break;
      case "pack": { const p = packs()[+d.pk]; startSession(p.s, p.items); break; }
      case "step": { const pr = PROGRAMS.find((x) => x.id === d.id); const st = pr.steps[+d.n]; startSession(st.t, stepItems(st)); break; }
      case "resume": startSession(catOf(d.c).t, Q[d.c].map((q, i) => ({ cat: d.c, i })), { cat: d.c, i: +d.i }); break;
      case "express": express(); break;
      case "seg": ui.packTab = d.v; packsView(); break;
      case "set": setSetting(d.k, d.v); break;
      case "toggle": S.vibrate = !S.vibrate; saveS(); settings(); break;
      case "share": share(); break;
      case "reset": if (confirm("Effacer toute votre progression ?")) { res = {}; days = {}; store.set("pt_res", res); store.set("pt_days", days); toast("Progression effacée"); settings(); } break;
    }
  });
  document.addEventListener("change", (e) => {
    if (e.target.id === "nm") { S.name = e.target.value.trim().slice(0, 20); saveS(); toast("Prénom enregistré"); }
  });
  function setSetting(k, v) {
    S[k] = k === "size" || k === "goal" ? parseFloat(v) : v;
    saveS();
    settings();
  }
  async function share() {
    const url = location.href.split("#")[0];
    const text = "Je révise les tests psychométriques avec PsychoTest. Essayez l'application : ";
    if (navigator.share) { try { await navigator.share({ title: C.APP_NAME, text, url }); } catch (e) {} }
    else copy(text + url);
  }

  // ---------- accueil ----------
  function ring(done, goal) {
    const r = 26, c = 2 * Math.PI * r, p = Math.min(1, goal ? done / goal : 0);
    return `<svg width="68" height="68" viewBox="0 0 68 68"><circle cx="34" cy="34" r="${r}" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="8"/>
      <circle cx="34" cy="34" r="${r}" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - p)}" transform="rotate(-90 34 34)"/>
      <text x="34" y="39" text-anchor="middle" fill="#fff" font-size="15" font-weight="800">${done >= goal ? "✓" : done}</text></svg>`;
  }
  function home() {
    setTabs("home");
    const t = todayCount(), g = S.goal, sk = streak();
    const todo = nextTodo();
    const cats = CATS.map((c) => {
      const p = prog(Q[c.id].map((q, i) => ({ cat: c.id, i })));
      const pct = p.n ? Math.round((p.done / p.n) * 100) : 0;
      return `<button class="cat" style="--c:${c.c}" data-act="go" data-v="cat" data-id="${c.id}">
        <div class="ic">${c.e}</div>
        <div class="tx"><h3>${c.t}</h3><p>${c.d}</p>
        <div class="bar"><i style="width:${pct}%"></i></div>
        <div class="meta"><span>${p.done} / ${p.n} questions</span><span>${pro ? "Tout débloqué" : C.FREE_PER_CAT + " gratuites"}</span></div></div>
      </button>`;
    }).join("");
    app.innerHTML = `
      <div class="hero">
        <div class="hero-top"><div><div class="hi">Bonjour${S.name ? ", " + esc(S.name) : ""} 👋</div><h1>${C.APP_NAME}</h1></div>
          <span class="badge ${pro ? "pro" : ""}">${pro ? "Pro" : "Gratuit"}</span></div>
        <div class="goalbox">${ring(t, g)}
          <div><div class="g1">Objectif du jour</div><div class="g2">${t} sur ${g} questions</div></div>
          ${sk ? `<div class="streak">🔥 ${sk} jour${sk > 1 ? "s" : ""}</div>` : ""}</div>
      </div>
      ${todo ? `<button class="todo" style="--c:${catOf(todo.cat).c}" data-act="resume" data-c="${todo.cat}" data-i="${todo.i}">
        <div><div class="t1">Reprendre</div><div class="t2">${catOf(todo.cat).t} · ${esc(Q[todo.cat][todo.i].s)}</div></div><span class="go">▶</span></button>` : ""}
      <div class="quick">
        <button data-act="express"><b>⚡</b><span>Série express</span></button>
        <button data-act="tab" data-v="packs"><b>🗂️</b><span>Paquets et programmes</span></button>
      </div>
      <div class="sec">Catégories</div>
      ${cats}
      ${pro ? "" : `<div class="banner pro-ad"><h3>Débloquez toutes les questions</h3><p>Version Pro : ${C.PRICE_LABEL}. Un code, un téléphone.</p><button class="btn light" data-act="go" data-v="upgrade">Passer à Pro</button></div>`}
      ${installBlock()}`;
  }
  function installBlock() {
    if (isStandalone()) return "";
    if (deferredPrompt) return `<div class="banner"><h3>Installer l'application</h3><p class="muted small">Elle s'ouvre comme une vraie application, même sans connexion.</p><button class="btn" data-act="install">Installer sur ce téléphone</button></div>`;
    return `<div class="banner"><h3>Installer l'application</h3><p class="muted small">Android (Chrome) : menu ⋮ puis « Installer l'application ».<br>iPhone (Safari) : bouton Partager puis « Sur l'écran d'accueil ».</p></div>`;
  }
  async function install() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    show(history.state ? history.state.name : "home", {});
  }
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); deferredPrompt = e; if (history.state && history.state.name === "home") home(); });
  window.addEventListener("appinstalled", () => { deferredPrompt = null; toast("Application installée"); });

  // ---------- paquets et programmes ----------
  function packsView() {
    setTabs("packs");
    let html = `<div class="top"><div class="title"><h1>Réviser</h1></div></div>
      <div class="seg"><button class="${ui.packTab === "packs" ? "on" : ""}" data-act="seg" data-v="packs">Paquets</button>
      <button class="${ui.packTab === "progs" ? "on" : ""}" data-act="seg" data-v="progs">Programmes</button></div>`;
    if (ui.packTab === "packs") {
      const all = packs();
      CATS.forEach((c) => {
        html += `<div class="cathead" style="--c:${c.c}"><span>${c.e}</span>${c.t}</div>`;
        all.forEach((p, idx) => {
          if (p.cat !== c.id) return;
          const pg = prog(p.items);
          const pct = pg.done ? Math.round(pg.avg * 100) + "%" : "–";
          html += `<button class="pk" style="--c:${c.c}" data-act="pack" data-pk="${idx}">
            <div class="tx"><div class="nm">${esc(p.s)}</div>
            <div class="meta" style="margin:2px 0 6px"><span>${pg.done} / ${pg.n} faites</span>${pg.unl < pg.n ? `<span class="lk">🔒 ${pg.n - pg.unl} en Pro</span>` : ""}</div>
            <div class="bar" style="--c:${c.c}"><i style="width:${(pg.done / pg.n) * 100}%"></i></div></div>
            <div class="pct">${pct}</div></button>`;
        });
      });
    } else {
      PROGRAMS.forEach((pr) => {
        const items = pr.steps.flatMap(stepItems);
        const pg = prog(items);
        html += `<button class="prog" style="--c:${pr.c}" data-act="go" data-v="program" data-id="${pr.id}">
          <h3>${pr.e} ${pr.t}</h3><p>${pr.d}</p>
          <div class="bar"><i style="width:${(pg.done / pg.n) * 100}%"></i></div>
          <div class="meta"><span>${pr.steps.length} étapes</span><span>${pg.done} / ${pg.n} questions</span></div></button>`;
      });
    }
    app.innerHTML = html;
  }
  function program({ id }) {
    setTabs("packs");
    const pr = PROGRAMS.find((x) => x.id === id) || PROGRAMS[0];
    const rows = pr.steps.map((st, n) => {
      const pg = prog(stepItems(st));
      const done = pg.n > 0 && pg.done === pg.n;
      return `<div class="step"><div class="n ${done ? "done" : ""}">${done ? "✓" : n + 1}</div>
        <div class="tx"><div style="font-weight:700">${esc(st.t)}</div><div class="small muted">${pg.done} / ${pg.n} questions${pg.done ? " · " + Math.round(pg.avg * 100) + "%" : ""}</div></div>
        <button data-act="step" data-id="${pr.id}" data-n="${n}">${pg.done ? "Refaire" : "Commencer"}</button></div>`;
    }).join("");
    app.innerHTML = `${top(pr.e + " Programme")}
      <h2>${pr.t}</h2><p class="muted" style="margin-top:6px">${pr.d}</p>
      <div class="card" style="margin-top:14px">${rows}</div>`;
  }

  // ---------- progression ----------
  function progress() {
    setTabs("progress");
    const items = allItems();
    const pg = prog(items);
    const sk = streak();
    const week = [];
    for (let k = 6; k >= 0; k--) { const d = new Date(); d.setDate(d.getDate() - k); week.push({ l: "DLMMJVS"[d.getDay()], n: days[dayKey(d)] || 0 }); }
    const mx = Math.max(1, ...week.map((w) => w.n));
    const bars = week.map((w) => `<div class="${w.n ? "" : "zero"}"><span class="v">${w.n || ""}</span><i style="height:${Math.max(4, (w.n / mx) * 70)}px"></i>${w.l}</div>`).join("");
    const cats = CATS.map((c) => {
      const p = prog(Q[c.id].map((q, i) => ({ cat: c.id, i })));
      return `<div class="lbl"><span>${c.e} ${c.t}</span><span>${p.done ? Math.round(p.avg * 100) + "%" : "–"}</span></div>
        <div class="bar" style="--c:${c.c}"><i style="width:${p.done ? p.avg * 100 : 0}%"></i></div>`;
    }).join("");
    const weak = packs().map((p, idx) => ({ p, idx, g: prog(p.items) })).filter((x) => x.g.done > 0 && x.g.avg < 0.7).sort((a, b) => a.g.avg - b.g.avg).slice(0, 4);
    const weakHtml = weak.length
      ? weak.map((x) => `<button class="pk" style="--c:${catOf(x.p.cat).c}" data-act="pack" data-pk="${x.idx}"><div class="tx"><div class="nm">${esc(x.p.s)}</div><div class="small muted">${catOf(x.p.cat).t}</div></div><div class="pct">${Math.round(x.g.avg * 100)}%</div></button>`).join("")
      : `<p class="muted small">Rien à revoir pour l'instant. Répondez à quelques questions pour voir vos points faibles.</p>`;
    const perfect = Object.values(res).filter((v) => v === 1).length;
    const BD = [
      { e: "🚀", t: "Premier pas", ok: pg.done >= 1 },
      { e: "🔟", t: "10 questions", ok: pg.done >= 10 },
      { e: "💯", t: "5 sans faute", ok: perfect >= 5 },
      { e: "🔥", t: "3 jours de suite", ok: sk >= 3 },
      { e: "🎯", t: "Objectif atteint", ok: todayCount() >= S.goal },
      { e: "⭐", t: "Membre Pro", ok: pro }
    ];
    app.innerHTML = `<div class="top"><div class="title"><h1>Progrès</h1></div></div>
      <div class="stats">
        <div class="stat" style="background:#6d4ae0"><b>${pg.done}</b><span>questions faites</span></div>
        <div class="stat" style="background:#0e8a96"><b>${pg.done ? Math.round(pg.avg * 100) : 0}%</b><span>de réussite</span></div>
        <div class="stat" style="background:#c9801b"><b>${sk}</b><span>jour${sk > 1 ? "s" : ""} de suite</span></div>
      </div>
      <div class="sec">Cette semaine</div><div class="card"><div class="week">${bars}</div></div>
      <div class="sec">Par catégorie</div><div class="card">${cats}</div>
      <div class="sec">À revoir</div>${weakHtml}
      <div class="sec">Badges</div><div class="badges">${BD.map((b) => `<div class="bd ${b.ok ? "" : "off"}"><b>${b.e}</b>${b.t}</div>`).join("")}</div>`;
  }

  // ---------- réglages ----------
  function opts(k, list, cur) {
    return `<div class="opts">${list.map((o) => `<button class="${String(cur) === String(o[0]) ? "on" : ""}" data-act="set" data-k="${k}" data-v="${o[0]}">${o[1]}</button>`).join("")}</div>`;
  }
  function settings() {
    setTabs("settings");
    const sw = Object.keys(ACCENTS).map((k) => `<button class="sw ${S.accent === k ? "on" : ""}" style="background:${ACCENTS[k]}" data-act="set" data-k="accent" data-v="${k}" aria-label="${k}"></button>`).join("");
    app.innerHTML = `<div class="top"><div class="title"><h1>Réglages</h1></div></div>
      <div class="card set"><h3>Profil</h3><input id="nm" type="text" maxlength="20" placeholder="Votre prénom" value="${esc(S.name)}" autocomplete="off"></div>
      <div class="card set"><h3>Apparence</h3>
        <div class="line"><span>Thème</span>${opts("theme", [["auto", "Auto"], ["light", "Clair"], ["dark", "Sombre"]], S.theme)}</div>
        <div class="line"><span>Couleur</span><div class="opts">${sw}</div></div>
        <div class="line"><span>Taille du texte</span>${opts("size", [[0.9, "Petit"], [1, "Normal"], [1.15, "Grand"]], S.size)}</div></div>
      <div class="card set"><h3>Étude</h3>
        <div class="line"><span>Objectif du jour</span>${opts("goal", [[5, "5"], [10, "10"], [20, "20"]], S.goal)}</div>
        <div class="line"><span>Vibration</span><button class="toggle ${S.vibrate ? "on" : ""}" data-act="toggle" aria-label="Vibration"></button></div></div>
      <div class="card set"><h3>Version Pro</h3>
        <p class="muted small">${pro ? "Pro activé : toutes les questions sont débloquées sur ce téléphone." : "5 questions gratuites par catégorie. Débloquez tout pour " + C.PRICE_LABEL + "."}</p>
        <button class="btn ${pro ? "alt" : ""}" data-act="go" data-v="upgrade">${pro ? "Voir mon ID appareil" : "Passer à Pro"}</button></div>
      <div class="card set"><h3>Application</h3>
        ${isStandalone() ? "" : (deferredPrompt ? '<button class="btn" data-act="install">Installer sur ce téléphone</button><div class="gap"></div>' : '<p class="muted small">Pour installer : menu ⋮ de Chrome puis « Installer l\'application ».</p>')}
        <button class="btn alt" data-act="share">Partager l'application</button><div class="gap"></div>
        <a class="btn alt" href="https://wa.me/${C.WHATSAPP}" target="_blank" rel="noopener">Contacter sur WhatsApp</a><div class="gap"></div>
        <button class="btn danger" data-act="reset">Effacer ma progression</button></div>
      <p class="muted small" style="text-align:center">${C.APP_NAME} · version 3 · ${allItems().length} questions</p>`;
  }

  // ---------- catégorie ----------
  function cat({ id }) {
    setTabs("home");
    const c = catOf(id);
    const tiles = Q[id].map((q, i) => { const s = status(id, i); return `<button class="tile ${s}" data-act="tile" data-id="${id}" data-i="${i}">${s === "lock" ? "🔒" : i + 1}</button>`; }).join("");
    app.innerHTML = `${top(c.e + " " + c.t)}<p class="muted">${c.d}</p><div class="grid">${tiles}</div>
      <button class="btn" style="background:${c.c}" data-act="catgo" data-id="${id}">Continuer</button>
      ${pro ? "" : `<div class="gap"></div><button class="btn alt" data-act="go" data-v="upgrade">Débloquer les ${tot(id) - C.FREE_PER_CAT} autres questions</button>`}`;
  }

  // ---------- séance de questions ----------
  function startSession(title, items, from) {
    const list = items.filter((x) => !locked(x.i));
    if (!list.length) { go("lock"); return; }
    let pos = 0;
    if (from) { const k = list.findIndex((x) => x.cat === from.cat && x.i === from.i); pos = k < 0 ? 0 : k; }
    else { const k = list.findIndex((x) => res[key(x.cat, x.i)] == null); pos = k < 0 ? 0 : k; }
    qs = { title, list, pos, step: 0, ans: [], done: false, fin: false, scores: [] };
    go("quiz");
  }
  function express() {
    const l = allItems().filter((x) => !locked(x.i));
    l.sort((a, b) => { const ra = res[key(a.cat, a.i)], rb = res[key(b.cat, b.i)]; return (ra == null ? -1 : ra) - (rb == null ? -1 : rb); });
    startSession("Série express", l.slice(0, 5).sort((a, b) => a.cat.localeCompare(b.cat) || a.i - b.i));
  }
  function lock() {
    setTabs(null);
    app.innerHTML = `${top("Question verrouillée")}<div class="lockbox"><div class="big">🔒</div><h2>Réservé à la version Pro</h2>
      <p class="muted" style="margin-top:8px">Les ${C.FREE_PER_CAT} premières questions de chaque catégorie sont gratuites. Débloquez toutes les autres pour ${C.PRICE_LABEL}.</p></div>
      <button class="btn" data-act="go" data-v="upgrade">Passer à Pro</button>`;
  }
  function quizView() {
    if (!qs || !qs.list.length) { go("home"); return; }
    setTabs(null);
    drawQuestion();
  }
  function drawQuestion() {
    if (qs.fin) return drawFinish();
    const it = qs.list[qs.pos], c = catOf(it.cat), q = Q[it.cat][it.i], n = q.a.length;
    if (qs.done) return drawResult(c, q);
    const a = q.a[qs.step], cur = qs.ans[qs.step], last = qs.step === n - 1;
    const dots = q.a.map((_, k) => `<i class="${qs.ans[k] != null ? "on" : ""} ${k === qs.step ? "cur" : ""}"></i>`).join("");
    app.innerHTML = `<div class="quiz" style="--c:${c.c}">${top(esc(qs.title))}
      <div class="qhead"><span>Question ${qs.pos + 1} sur ${qs.list.length}</span><span class="tag">${esc(q.s)}</span></div>
      <div class="stem">${q.q}</div><div class="dots">${dots}</div>
      <div class="assert"><div class="n">Assertion ${qs.step + 1} sur ${n}</div><div class="t">${a[0]}</div></div>
      <div class="bubbles">
        <button class="bub ${cur === true ? "sel" : ""}" data-act="ans" data-v="1"><span class="o"></span>Vrai</button>
        <button class="bub ${cur === false ? "sel" : ""}" data-act="ans" data-v="0"><span class="o"></span>Faux</button></div>
      <div class="row">${qs.step > 0 ? '<button class="btn alt" data-act="prev">Précédente</button>' : ""}
        ${last ? `<button class="btn" style="background:${c.c}" data-act="validate" ${qs.ans.filter((x) => x != null).length < n ? "disabled" : ""}>Valider</button>`
               : `<button class="btn" style="background:${c.c}" data-act="next" ${cur == null ? "disabled" : ""}>Suivante</button>`}</div></div>`;
  }
  function answer(v) { qs.ans[qs.step] = v; drawQuestion(); }
  function validate() {
    const it = qs.list[qs.pos], q = Q[it.cat][it.i];
    if (qs.ans.filter((x) => x != null).length < q.a.length) return;
    const ok = q.a.filter((a, k) => qs.ans[k] === a[1]).length, r = ok / q.a.length;
    res[key(it.cat, it.i)] = r;
    store.set("pt_res", res);
    const dk = dayKey(new Date());
    days[dk] = (days[dk] || 0) + 1;
    store.set("pt_days", days);
    qs.scores.push(r);
    buzz(r === 1 ? 30 : [20, 40, 20]);
    qs.done = true;
    drawQuestion();
  }
  function drawResult(c, q) {
    const ok = q.a.filter((a, k) => qs.ans[k] === a[1]).length, r = ok / q.a.length;
    const cls = r === 1 ? "full" : r === 0 ? "zero" : "part";
    const rows = q.a.map((a, k) => { const good = qs.ans[k] === a[1];
      return `<div class="res ${good ? "ok" : "ko"}"><div class="ic">${good ? "✓" : "✗"}</div><div><div class="t">${a[0]}</div>
        <div class="w">Votre réponse : ${qs.ans[k] ? "Vrai" : "Faux"} · Bonne réponse : ${a[1] ? "Vrai" : "Faux"}</div></div></div>`; }).join("");
    const more = qs.pos + 1 < qs.list.length;
    const goal = todayCount() === S.goal ? `<div class="banner" style="background:var(--ok-soft);text-align:center">🎯 Objectif du jour atteint, bravo !</div>` : "";
    app.innerHTML = `<div class="quiz" style="--c:${c.c}">${top(esc(qs.title))}
      <div class="qhead"><span>Question ${qs.pos + 1} sur ${qs.list.length}</span><span class="tag">${esc(q.s)}</span></div>
      <div class="stem">${q.q}</div><div class="score ${cls}">${ok} / ${q.a.length}</div>${rows}
      <div class="expl"><b>À retenir</b>${q.e}</div>${goal}
      <button class="btn" style="background:${c.c}" data-act="nextq">${more ? "Question suivante" : "Terminer"}</button></div>`;
  }
  function nextQuestion() {
    qs.pos++; qs.step = 0; qs.ans = []; qs.done = false;
    if (qs.pos >= qs.list.length) { qs.pos = qs.list.length - 1; qs.fin = true; }
    window.scrollTo(0, 0);
    drawQuestion();
  }
  function drawFinish() {
    const avg = qs.scores.length ? qs.scores.reduce((a, b) => a + b, 0) / qs.scores.length : 0;
    const pct = Math.round(avg * 100);
    const em = pct >= 80 ? "🏆" : pct >= 50 ? "👏" : "💪";
    const msg = pct >= 80 ? "Excellent travail !" : pct >= 50 ? "Bon début, continuez !" : "Relisez les explications et réessayez.";
    app.innerHTML = `${top(esc(qs.title))}<div class="finish"><div class="big">${em}</div><h2>Série terminée</h2>
      <div class="score ${pct >= 80 ? "full" : pct >= 50 ? "part" : "zero"}">${pct}%</div><p class="muted">${msg}</p></div>
      ${pro ? "" : `<div class="banner pro-ad"><h3>Il y a encore des questions à débloquer</h3><p>Version Pro : ${C.PRICE_LABEL}.</p><button class="btn light" data-act="go" data-v="upgrade">Passer à Pro</button></div>`}
      <div class="row"><button class="btn alt" data-act="back">Retour</button><button class="btn" data-act="express">Série express</button></div>`;
  }

  // ---------- passage à Pro ----------
  function upgrade() {
    setTabs(null);
    if (pro) {
      app.innerHTML = `${top("Version Pro")}<div class="lockbox"><div class="big">⭐</div><h2>Pro activé</h2><p class="muted">Toutes les questions sont débloquées sur ce téléphone.</p></div>
        <div class="card"><div class="small muted">ID de cet appareil</div><div class="devid">${dev}</div></div><button class="btn" data-act="back">Retour</button>`;
      return;
    }
    const wa = "https://wa.me/" + C.WHATSAPP + "?text=" + encodeURIComponent("Bonjour, je veux activer " + C.APP_NAME + " Pro (" + C.PRICE_LABEL + "). Mon ID appareil : " + dev + ". Voici ma preuve de paiement.");
    const pays = C.PAYMENTS.map((p) => `<div class="pay"><span>${p.name}</span><span>${p.value}</span></div>`).join("");
    app.innerHTML = `${top("Version Pro")}
      <div class="banner pro-ad"><h3>${C.PRICE_LABEL}</h3><p>Accès à toutes les questions, sans limite de durée. Un code ne fonctionne que sur le téléphone pour lequel il a été créé.</p></div>
      <div class="banner"><h3>Comment faire</h3><ol class="steps"><li>Payez par l'un des moyens ci-dessous.</li><li>Envoyez la preuve de paiement et votre ID appareil sur WhatsApp.</li><li>Collez le code reçu pour activer.</li></ol></div>
      <div class="banner"><h3>Votre ID appareil</h3><div class="devid">${dev}</div>
        <button class="btn alt" data-act="copy" data-t="${dev}">Copier l'ID</button><div class="gap"></div>
        <a class="btn wa" href="${wa}" target="_blank" rel="noopener">Envoyer sur WhatsApp</a></div>
      <div class="banner"><h3>Moyens de paiement</h3>${pays}</div>
      <div class="banner"><h3>J'ai reçu mon code</h3>
        <input id="code" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Collez ici le code reçu" style="font-size:.9rem">
        <div class="gap"></div><button class="btn" data-act="activate">Activer</button><div id="msg" class="msg"></div></div>`;
  }
  async function activate() {
    const input = document.getElementById("code"), msg = document.getElementById("msg");
    const typed = input.value.replace(/\s+/g, "");
    if (typed && (await verifyCode(typed, dev))) {
      store.set("pt_pro", typed);
      pro = true;
      msg.className = "msg ok";
      msg.textContent = "Pro activé. Merci !";
      buzz(40);
      setTimeout(() => history.back(), 900);
    } else {
      msg.className = "msg ko";
      msg.textContent = "Code incorrect pour ce téléphone. Collez le code en entier, sans le modifier, ou contactez-nous sur WhatsApp.";
    }
  }

  // ---------- démarrage ----------
  if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySettings);
  applySettings();
  (async () => {
    pro = await checkPro();
    history.replaceState({ name: "home", p: {} }, "");
    home();
  })();
})();
