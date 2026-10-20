(() => {
  const C = window.CONFIG;
  const Q = window.QUESTIONS;
  const CATS = [
    { id: "apt", t: "Aptitudes", d: "Logique, calcul, langage, attention, mémoire", c: "#1FA971", i: "grid" },
    { id: "per", t: "Administration et projets", d: "Administration publique, finances publiques, gestion de projets", c: "#F5B301", i: "briefcase" },
    { id: "theo", t: "Théorie psychométrique", d: "QI, fidélité, validité, statistiques, éthique", c: "#FF7A59", i: "book" }
  ];
  const catOf = (id) => CATS.find((c) => c.id === id);
  const TOTAL_Q = CATS.reduce((s, c) => s + Q[c.id].length, 0);
  const FREE_TOTAL = CATS.reduce((s, c) => s + C.FREE[c.id], 0);

  const PROGRAMS = [
    { id: "conc", t: "Concours et recrutement", c: "#1FA971", d: "Les épreuves d'aptitudes les plus fréquentes, des suites logiques aux batteries d'admission.", steps: [
      { t: "Séries logiques", cat: "apt", packs: ["Séries logiques"] },
      { t: "Calcul et tableaux de données", cat: "apt", packs: ["Raisonnement numérique et calcul", "Tableaux et pourcentages"] },
      { t: "Raisonnement verbal et langue", cat: "apt", packs: ["Raisonnement verbal et langue"] },
      { t: "Logique et déduction", cat: "apt", packs: ["Logique et déduction"] },
      { t: "Matrices et tests non verbaux", cat: "apt", packs: ["Matrices et tests non verbaux"] },
      { t: "Espace, perception et mécanique", cat: "apt", packs: ["Espace, perception et mécanique"] },
      { t: "Batteries d'aptitudes et acquis", cat: "apt", packs: ["Batteries d'aptitudes et admission", "Acquis scolaires, lecture et langues"] },
      { t: "Attention et vitesse", cat: "apt", packs: ["Attention et vitesse"] }] },
    { id: "adm1", t: "Administration publique : les bases", c: "#F5B301", d: "L'État congolais, la décentralisation, l'organisation des administrations et le droit administratif.", steps: [
      { t: "Organisation de l'État congolais", cat: "per", packs: ["Organisation de l'État congolais"] },
      { t: "Décentralisation et provinces", cat: "per", packs: ["Décentralisation et provinces"] },
      { t: "Organisation administrative", cat: "per", packs: ["Organisation administrative"] },
      { t: "Droit administratif et service public", cat: "per", packs: ["Droit administratif et service public"] },
      { t: "Théories de l'administration", cat: "per", packs: ["Théories de l'administration"] }] },
    { id: "adm2", t: "Fonction publique, éthique et rédaction", c: "#FF9F1C", d: "Carrière des agents, déontologie, bonne gouvernance et rédaction administrative.", steps: [
      { t: "Fonction publique et carrière", cat: "per", packs: ["Fonction publique et carrière"] },
      { t: "Éthique et bonne gouvernance", cat: "per", packs: ["Éthique et bonne gouvernance"] },
      { t: "Rédaction et communication administratives", cat: "per", packs: ["Rédaction et communication administratives"] }] },
    { id: "adm3", t: "Finances publiques et marchés publics", c: "#E5484D", d: "Budget de l'État, exécution de la dépense, contrôle, marchés publics et planification.", steps: [
      { t: "Finances publiques et budget", cat: "per", packs: ["Finances publiques et budget"] },
      { t: "Marchés publics", cat: "per", packs: ["Marchés publics"] },
      { t: "Planification et politiques publiques", cat: "per", packs: ["Planification et politiques publiques"] }] },
    { id: "proj1", t: "Gestion de projets : les bases", c: "#3D5AFE", d: "Cycle de projet, cadre logique, planification, coûts et risques.", steps: [
      { t: "Cycle de projet et cadre logique", cat: "per", packs: ["Cycle de projet et cadre logique"] },
      { t: "Planification : WBS, Gantt et chemin critique", cat: "per", packs: ["Planification : WBS, Gantt et chemin critique"] },
      { t: "Coûts, valeur acquise et rentabilité", cat: "per", packs: ["Coûts, valeur acquise et rentabilité"] },
      { t: "Gestion des risques", cat: "per", packs: ["Gestion des risques"] }] },
    { id: "proj2", t: "Gestion de projets : approfondissement", c: "#7C5CFA", d: "Parties prenantes, Agile et Scrum, PMBOK et PRINCE2, suivi-évaluation, qualité, contrats, équipe et clôture.", steps: [
      { t: "Parties prenantes et communication", cat: "per", packs: ["Parties prenantes et communication"] },
      { t: "Agile et Scrum", cat: "per", packs: ["Agile et Scrum"] },
      { t: "PMBOK et PRINCE2", cat: "per", packs: ["PMBOK et PRINCE2"] },
      { t: "Suivi-évaluation", cat: "per", packs: ["Suivi-évaluation"] },
      { t: "Qualité et changements", cat: "per", packs: ["Qualité et changements"] },
      { t: "Approvisionnement et contrats", cat: "per", packs: ["Approvisionnement et contrats"] },
      { t: "Leadership et gestion d'équipe", cat: "per", packs: ["Leadership et gestion d'équipe"] },
      { t: "Clôture et gouvernance de projet", cat: "per", packs: ["Clôture et gouvernance de projet"] },
      { t: "Projets de développement et bailleurs", cat: "per", packs: ["Projets de développement et bailleurs"] }] },
    { id: "intel", t: "Tests d'intelligence", c: "#19B6A0", d: "WAIS, WISC, Raven et théories de l'intelligence.", steps: [
      { t: "Sous-tests du WAIS et du WISC", cat: "apt", packs: ["Sous-tests du WAIS et du WISC"] },
      { t: "Échelles de Wechsler", cat: "theo", packs: ["Échelles de Wechsler"] },
      { t: "QI et théories de l'intelligence", cat: "theo", packs: ["QI et théories de l'intelligence"] },
      { t: "Matrices et tests non verbaux", cat: "apt", packs: ["Matrices et tests non verbaux"] },
      { t: "Tests chez l'enfant", cat: "theo", packs: ["Tests chez l'enfant"] }] },
    { id: "neuro", t: "Neuropsychologie", c: "#FF7A59", d: "Attention, mémoire, fonctions exécutives et batteries neuropsychologiques.", steps: [
      { t: "Attention et vitesse", cat: "apt", packs: ["Attention et vitesse"] },
      { t: "Mémoire", cat: "apt", packs: ["Mémoire"] },
      { t: "Fonctions exécutives", cat: "apt", packs: ["Fonctions exécutives"] },
      { t: "Neuropsychologie et motricité", cat: "apt", packs: ["Neuropsychologie et motricité"] },
      { t: "Évaluation clinique et fonctionnelle", cat: "theo", packs: ["Évaluation clinique, fonctionnelle et neuropsychologique"] }] },
    { id: "theo", t: "Théorie pour étudiants (psychométrie)", c: "#C2307C", d: "Les bases de la psychométrie pour réussir vos examens.", steps: [
      { t: "Histoire de la psychométrie", cat: "theo", packs: ["Histoire de la psychométrie"] },
      { t: "Fidélité et théorie classique", cat: "theo", packs: ["Fidélité et théorie classique"] },
      { t: "Validité, équité et sélection", cat: "theo", packs: ["Validité, équité et sélection"] },
      { t: "Étalonnage et notes standard", cat: "theo", packs: ["Étalonnage et notes standard"] },
      { t: "Construction de tests et analyse d'items", cat: "theo", packs: ["Construction de tests et analyse d'items"] },
      { t: "TRI, analyse factorielle et fondements", cat: "theo", packs: ["TRI, analyse factorielle et fondements"] },
      { t: "Statistiques et choix des tests", cat: "theo", packs: ["Statistiques et choix des tests"] },
      { t: "Calculs psychométriques", cat: "theo", packs: ["Calculs psychométriques"] },
      { t: "Pratique professionnelle et éthique", cat: "theo", packs: ["Pratique professionnelle et éthique"] }] }
  ];
  const TABS = ["home", "packs", "progress", "settings"];
  const ACCENTS = {
    vert: { g: "#1FA971", gl: "#2BC384", gd: "#157A53", n: "Vert" },
    bleu: { g: "#3D5AFE", gl: "#6B83FF", gd: "#2B3FB8", n: "Bleu" },
    violet: { g: "#7C5CFA", gl: "#9B82FF", gd: "#5A3FD6", n: "Violet" }
  };
  const SIZES = [[1, "Normal"], [1.12, "Grand"], [1.26, "Très grand"]];
  const app = document.getElementById("app");

  // ---------- icônes ----------
  const SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<symbol id="i-home" viewBox="0 0 24 24"><path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></symbol>' +
    '<symbol id="i-layers" viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/></symbol>' +
    '<symbol id="i-chart" viewBox="0 0 24 24"><path d="M5 20v-7M12 20V5M19 20v-10"/></symbol>' +
    '<symbol id="i-sliders" viewBox="0 0 24 24"><path d="M4 7h9M19 7h1M4 17h1M11 17h9"/><circle cx="16" cy="7" r="2.2"/><circle cx="8" cy="17" r="2.2"/></symbol>' +
    '<symbol id="i-flame" viewBox="0 0 24 24"><path d="M12 2c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 .2 1.6 1 2.4 2 2.4C11 8.5 10.5 5 12 2z"/></symbol>' +
    '<symbol id="i-check" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></symbol>' +
    '<symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></symbol>' +
    '<symbol id="i-lock" viewBox="0 0 24 24"><path d="M7 11V8a5 5 0 0 1 10 0v3"/><rect x="5" y="11" width="14" height="10" rx="2"/></symbol>' +
    '<symbol id="i-star" viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></symbol>' +
    '<symbol id="i-back" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></symbol>' +
    '<symbol id="i-grid" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/></symbol>' +
    '<symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></symbol>' +
    '<symbol id="i-book" viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/></symbol>' +
    '<symbol id="i-briefcase" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18"/></symbol>' +
    '<symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></symbol>' +
    '<symbol id="i-trophy" viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3M12 13v4M8 21h8M10 17h4"/></symbol>' +
    '<symbol id="i-rocket" viewBox="0 0 24 24"><path d="M5 19c1-4 3-6 5-7M14 5c3 0 5 2 5 5-3 0-5 2-7 5l-3-3c3-2 5-4 5-7z"/><circle cx="14.5" cy="9.5" r="1.2"/></symbol>' +
    '</defs></svg>';
  const ic = (n, f) => '<svg class="ico' + (f ? " f" : "") + '"><use href="#i-' + n + '"/></svg>';
  (() => { const s = document.createElement("div"); s.innerHTML = SPRITE; document.body.appendChild(s); })();

  // ---------- stockage et réglages ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  let res = store.get("pt_res", {});
  let days = store.get("pt_days", {});
  const DEF = { theme: "auto", accent: "vert", size: 1.12, vibrate: true, goal: 5, name: "" };
  let S = Object.assign({}, DEF, store.get("pt_set3", {}));
  if (!ACCENTS[S.accent]) S.accent = "vert";
  let pro = false;
  let deferredPrompt = null;
  let ui = { packTab: "packs" };
  let qs = null;
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

  function isDark() {
    return S.theme === "dark" || (S.theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  function applySettings() {
    const r = document.documentElement;
    if (S.theme === "auto") r.removeAttribute("data-theme"); else r.setAttribute("data-theme", S.theme);
    const a = ACCENTS[S.accent];
    r.style.setProperty("--g", isDark() ? a.gl : a.g);
    r.style.setProperty("--gd", a.gd);
    r.style.fontSize = 16 * S.size + "px";
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", isDark() ? "#0E1A16" : "#F4FBF7");
  }
  const saveS = () => { store.set("pt_set3", S); applySettings(); };

  // ---------- appareil et code Pro ----------
  const ALPHA = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  function genId() { const b = new Uint8Array(8); crypto.getRandomValues(b); let s = ""; for (let i = 0; i < 8; i++) s += ALPHA[b[i] % 32]; return s.slice(0, 4) + "-" + s.slice(4); }
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
  async function checkPro() { const saved = store.get("pt_pro", null); return saved ? verifyCode(saved, dev) : false; }

  // ---------- données ----------
  const isStandalone = () => window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  const tot = (id) => Q[id].length;
  const key = (c, i) => c + "-" + i;
  const locked = (c, i) => !pro && i >= C.FREE[c];
  function status(c, i) {
    if (locked(c, i)) return "lock";
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
    return { n: items.length, done: done.length, avg, unl: items.filter((x) => !locked(x.cat, x.i)).length };
  }
  const stepItems = (st) => Q[st.cat].map((q, i) => ({ cat: st.cat, i, s: q.s, p: q.p || q.s })).filter((x) => st.packs.includes(x.p));
  function nextTodo() {
    for (const c of CATS) for (let i = 0; i < tot(c.id); i++) if (!locked(c.id, i) && res[key(c.id, i)] == null) return { cat: c.id, i };
    return null;
  }
  const dayKey = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const todayCount = () => days[dayKey(new Date())] || 0;
  function streak() {
    const d = new Date();
    if (!days[dayKey(d)]) d.setDate(d.getDate() - 1);
    let n = 0;
    while (days[dayKey(d)] > 0) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function toast(t) { const el = document.createElement("div"); el.className = "toast"; el.textContent = t; document.body.appendChild(el); setTimeout(() => el.remove(), 1800); }
  async function copy(text) { try { await navigator.clipboard.writeText(text); toast("Copié"); } catch (e) { toast("Copie impossible"); } }
  const buzz = (p) => { if (S.vibrate && navigator.vibrate) navigator.vibrate(p); };

  // ---------- navigation ----------
  const tabsEl = document.createElement("nav");
  tabsEl.id = "tabs";
  tabsEl.innerHTML = '<div class="in">' +
    '<button data-act="tab" data-v="home">' + ic("home") + 'Accueil</button>' +
    '<button data-act="tab" data-v="packs">' + ic("layers") + 'Paquets</button>' +
    '<button data-act="tab" data-v="progress">' + ic("chart") + 'Progrès</button>' +
    '<button data-act="tab" data-v="settings">' + ic("sliders") + 'Réglages</button></div>';
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
  function top(title, right) {
    return '<div class="top"><button class="back" data-act="back" aria-label="Retour">' + ic("back") + '</button>' +
      '<div class="sp"><div class="h2">' + title + '</div></div>' + (right || "") + '</div>';
  }
  const proBadge = () => pro ? '<span class="pill g">' + ic("star", true) + ' Pro</span>' : '';

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
      case "tile": if (locked(d.id, +d.i)) go("lock"); else startSession(catOf(d.id).t, Q[d.id].map((q, i) => ({ cat: d.id, i })), { cat: d.id, i: +d.i }); break;
      case "catgo": startSession(catOf(d.id).t, Q[d.id].map((q, i) => ({ cat: d.id, i }))); break;
      case "pack": { const p = packs()[+d.pk]; startSession(p.s, p.items); break; }
      case "step": { const pr = PROGRAMS.find((x) => x.id === d.id); const st = pr.steps[+d.n]; startSession(st.t, stepItems(st)); break; }
      case "resume": startSession(catOf(d.c).t, Q[d.c].map((q, i) => ({ cat: d.c, i })), { cat: d.c, i: +d.i }); break;
      case "express": express(); break;
      case "seg": ui.packTab = d.v; packsView(); break;
      case "progs": ui.packTab = "progs"; go("packs"); break;
      case "set": setSetting(d.k, d.v); break;
      case "toggle": S.vibrate = !S.vibrate; saveS(); settings(); break;
      case "share": share(); break;
      case "reset": if (confirm("Effacer toute votre progression ?")) { res = {}; days = {}; store.set("pt_res", res); store.set("pt_days", days); toast("Progression effacée"); settings(); } break;
    }
  });
  document.addEventListener("change", (e) => {
    if (e.target && e.target.id === "nm") { S.name = e.target.value.trim().slice(0, 20); saveS(); toast("Prénom enregistré"); }
  });
  function setSetting(k, v) { S[k] = (k === "size" || k === "goal") ? parseFloat(v) : v; saveS(); settings(); }
  async function share() {
    const url = location.href.split("#")[0];
    const text = "Je révise les tests psychométriques avec PsychoTest. Essayez l'application : ";
    if (navigator.share) { try { await navigator.share({ title: C.APP_NAME, text, url }); } catch (e) {} } else copy(text + url);
  }

  // ---------- accueil ----------
  function ring(done, goal) {
    const c = 2 * Math.PI * 26, p = Math.min(1, goal ? done / goal : 0);
    return '<svg width="64" height="64" viewBox="0 0 68 68"><circle cx="34" cy="34" r="26" fill="none" stroke="var(--line)" stroke-width="9"/>' +
      '<circle cx="34" cy="34" r="26" fill="none" stroke="var(--g)" stroke-width="9" stroke-linecap="round" stroke-dasharray="' + c + '" stroke-dashoffset="' + c * (1 - p) + '" transform="rotate(-90 34 34)"/>' +
      '<text x="34" y="40" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink)" font-family="Outfit,sans-serif">' + Math.min(done, 99) + '</text></svg>';
  }
  function home() {
    setTabs("home");
    const t = todayCount(), g = S.goal, sk = streak(), todo = nextTodo();
    const cats = CATS.map((c) => {
      const p = prog(Q[c.id].map((q, i) => ({ cat: c.id, i })));
      const pct = p.n ? Math.round((p.done / p.n) * 100) : 0;
      return '<button class="cat" data-act="go" data-v="cat" data-id="' + c.id + '"><div class="ib" style="background:' + c.c + '">' + ic(c.i) + '</div>' +
        '<div class="tx"><div class="t">' + c.t + '</div><div class="muted small">' + c.d + '</div>' +
        '<div class="bar"><i style="width:' + pct + '%;background:' + c.c + '"></i></div>' +
        '<div class="muted small">' + p.done + ' / ' + p.n + ' questions</div></div></button>';
    }).join("");
    app.innerHTML =
      '<div class="row"><div class="sp"><div class="hello">Bonjour' + (S.name ? ", " + esc(S.name) : "") + ' 👋</div><div class="h1">' + C.APP_NAME + '</div></div>' +
      (sk ? '<span class="pill y">' + ic("flame", true) + ' ' + sk + '</span>' : '') + proBadge() + '</div>' +
      '<div class="card goal">' + ring(t, g) + '<div class="sp"><div class="h2">Objectif du jour</div><div class="muted">' + t + ' sur ' + g + ' questions</div></div>' +
      '<span class="pill g">' + Math.min(100, Math.round((t / g) * 100)) + ' %</span></div>' +
      (todo ? '<div class="gap"></div><button class="btn" data-act="resume" data-c="' + todo.cat + '" data-i="' + todo.i + '">Reprendre · ' + esc(Q[todo.cat][todo.i].p || Q[todo.cat][todo.i].s) + '</button>' : '') +
      '<div class="secH"><div class="h2">Catégories</div><span class="muted small">' + (pro ? "Tout débloqué" : FREE_TOTAL + " questions gratuites") + '</span></div>' + cats +
      '<div class="quick"><button class="btn alt" data-act="express">' + ic("bolt") + ' Série express</button><button class="btn alt" data-act="progs">' + ic("layers") + ' Programmes</button></div>' +
      (pro ? '' : '<div class="promo"><div class="h2">Débloquez les ' + (TOTAL_Q - FREE_TOTAL) + ' autres questions</div><p>' + C.PRICE_LABEL + ' · un code, un téléphone</p><button class="btn light" data-act="go" data-v="upgrade">Passer à Pro</button></div>') +
      installBlock();
  }
  function installBlock() {
    if (isStandalone()) return "";
    if (deferredPrompt) return '<div class="card"><div class="h2">Installer l\'application</div><p class="muted small" style="margin:4px 0 12px">Elle s\'ouvre comme une vraie application, même sans connexion.</p><button class="btn" data-act="install">Installer sur ce téléphone</button></div>';
    return '<div class="card"><div class="h2">Installer l\'application</div><p class="muted small" style="margin-top:4px">Android (Chrome) : menu ⋮ puis « Installer l\'application ».<br>iPhone (Safari) : Partager puis « Sur l\'écran d\'accueil ».</p></div>';
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
    let h = '<div class="h1">Réviser</div><div class="seg"><button class="' + (ui.packTab === "packs" ? "on" : "") + '" data-act="seg" data-v="packs">Paquets</button>' +
      '<button class="' + (ui.packTab === "progs" ? "on" : "") + '" data-act="seg" data-v="progs">Programmes</button></div>';
    if (ui.packTab === "packs") {
      const all = packs();
      CATS.forEach((c) => {
        const n = all.filter((p) => p.cat === c.id).length;
        h += '<div class="cathead"><span class="pill" style="background:' + c.c + ';color:#fff">' + ic(c.i) + ' ' + c.t + '</span><span class="muted small">' + n + ' paquets</span></div>';
        all.forEach((p, idx) => {
          if (p.cat !== c.id) return;
          const pg = prog(p.items), pct = pg.done ? Math.round(pg.avg * 100) + " %" : "–";
          h += '<button class="pk" data-act="pack" data-pk="' + idx + '"><div class="dot" style="background:' + c.c + '"></div><div class="sp"><div class="t">' + esc(p.s) + '</div>' +
            '<div class="muted small">' + pg.done + ' / ' + pg.n + ' faites' + (pg.unl < pg.n ? ' · <span class="lk">' + ic("lock") + ' ' + (pg.n - pg.unl) + ' en Pro</span>' : '') + '</div>' +
            '<div class="bar"><i style="width:' + (pg.done / pg.n) * 100 + '%;background:' + c.c + '"></i></div></div><div class="pct" style="color:' + c.c + '">' + pct + '</div></button>';
        });
      });
    } else {
      PROGRAMS.forEach((pr) => {
        const pg = prog(pr.steps.flatMap(stepItems));
        h += '<button class="pcard" style="background:' + pr.c + '" data-act="go" data-v="program" data-id="' + pr.id + '"><div class="h2">' + pr.t + '</div><p>' + pr.d + '</p>' +
          '<div class="bar"><i style="width:' + (pg.done / pg.n) * 100 + '%"></i></div><div class="small">' + pr.steps.length + ' étapes · ' + pg.done + ' / ' + pg.n + ' questions</div></button>';
      });
    }
    app.innerHTML = h;
  }
  function program({ id }) {
    setTabs("packs");
    const pr = PROGRAMS.find((x) => x.id === id) || PROGRAMS[0];
    let cur = -1;
    const rows = pr.steps.map((st, n) => {
      const pg = prog(stepItems(st)), done = pg.n > 0 && pg.done === pg.n;
      if (!done && cur < 0) cur = n;
      const cls = done ? "done" : n === cur ? "cur" : "";
      return '<div class="node ' + cls + '"><div class="n">' + (done ? ic("check") : n + 1) + '</div><div class="tx"><b>' + esc(st.t) + '</b>' +
        '<span class="muted small">' + pg.done + ' / ' + pg.n + ' questions' + (pg.done ? ' · ' + Math.round(pg.avg * 100) + ' %' : '') + '</span></div>' +
        '<button data-act="step" data-id="' + pr.id + '" data-n="' + n + '">' + (pg.done ? "Refaire" : "Commencer") + '</button></div>';
    }).join("");
    const all = prog(pr.steps.flatMap(stepItems));
    app.innerHTML = top("Programme", '<span class="pill g">' + all.done + ' / ' + all.n + '</span>') +
      '<div class="h1" style="margin-top:12px">' + pr.t + '</div><p class="muted" style="margin-top:6px">' + pr.d + '</p>' +
      '<div class="bar" style="margin-top:14px"><i style="width:' + (all.done / all.n) * 100 + '%"></i></div>' +
      '<div class="card" style="padding:8px 14px"><div class="path">' + rows + '</div></div>';
  }

  // ---------- progrès ----------
  function progress() {
    setTabs("progress");
    const pg = prog(allItems()), sk = streak();
    const week = [];
    for (let k = 6; k >= 0; k--) { const d = new Date(); d.setDate(d.getDate() - k); week.push({ l: "DLMMJVS"[d.getDay()], n: days[dayKey(d)] || 0 }); }
    const mx = Math.max(1, ...week.map((w) => w.n));
    const bars = week.map((w) => '<div class="' + (w.n ? "" : "z") + '"><span class="v">' + (w.n || "") + '</span><i style="height:' + Math.max(4, (w.n / mx) * 70) + 'px"></i>' + w.l + '</div>').join("");
    const cats = CATS.map((c) => {
      const p = prog(Q[c.id].map((q, i) => ({ cat: c.id, i })));
      return '<div class="lbl"><span>' + c.t + '</span><span>' + (p.done ? Math.round(p.avg * 100) + " %" : "–") + '</span></div><div class="bar"><i style="width:' + (p.done ? p.avg * 100 : 0) + '%;background:' + c.c + '"></i></div>';
    }).join("");
    const weak = packs().map((p, idx) => ({ p, idx, g: prog(p.items) })).filter((x) => x.g.done > 0 && x.g.avg < 0.7).sort((a, b) => a.g.avg - b.g.avg).slice(0, 4);
    const weakHtml = weak.length ? weak.map((x) => '<button class="pk" data-act="pack" data-pk="' + x.idx + '"><div class="dot" style="background:' + catOf(x.p.cat).c + '"></div><div class="sp"><div class="t">' + esc(x.p.s) + '</div><div class="muted small">' + catOf(x.p.cat).t + '</div></div><div class="pct" style="color:' + catOf(x.p.cat).c + '">' + Math.round(x.g.avg * 100) + ' %</div></button>').join("")
      : '<p class="muted small" style="margin-top:8px">Rien à revoir pour l\'instant. Répondez à quelques questions pour voir vos points faibles.</p>';
    const perfect = Object.values(res).filter((v) => v === 1).length;
    const BD = [
      { i: "rocket", t: "Premier pas", ok: pg.done >= 1 }, { i: "trophy", t: "50 questions", ok: pg.done >= 50 },
      { i: "star", t: "5 sans faute", ok: perfect >= 5 }, { i: "flame", t: "3 jours de suite", ok: sk >= 3 },
      { i: "check", t: "Objectif atteint", ok: todayCount() >= S.goal }, { i: "lock", t: "Membre Pro", ok: pro }
    ];
    app.innerHTML = '<div class="h1">Progrès</div>' +
      '<div class="tiles"><div class="tile" style="background:#1FA971"><b>' + pg.done + '</b><span>questions faites</span></div>' +
      '<div class="tile" style="background:#F5B301"><b>' + (pg.done ? Math.round(pg.avg * 100) : 0) + ' %</b><span>de réussite</span></div>' +
      '<div class="tile" style="background:#FF7A59"><b>' + sk + '</b><span>jour' + (sk > 1 ? "s" : "") + ' de suite</span></div></div>' +
      '<div class="card"><div class="h2">Cette semaine</div><div class="week">' + bars + '</div></div>' +
      '<div class="card"><div class="h2">Par catégorie</div>' + cats + '</div>' +
      '<div class="secH"><div class="h2">À revoir</div></div>' + weakHtml +
      '<div class="secH"><div class="h2">Badges</div></div><div class="badges">' + BD.map((b) => '<div class="bd ' + (b.ok ? "" : "off") + '">' + ic(b.i, b.i === "flame" || b.i === "star") + b.t + '</div>').join("") + '</div>';
  }

  // ---------- réglages ----------
  function opts(k, list, cur) {
    return '<div class="opts">' + list.map((o) => '<button class="' + (String(cur) === String(o[0]) ? "on" : "") + '" data-act="set" data-k="' + k + '" data-v="' + o[0] + '">' + o[1] + '</button>').join("") + '</div>';
  }
  function settings() {
    setTabs("settings");
    const sw = Object.keys(ACCENTS).map((k) => '<button class="sw ' + (S.accent === k ? "on" : "") + '" style="background:' + ACCENTS[k].g + '" data-act="set" data-k="accent" data-v="' + k + '" aria-label="' + ACCENTS[k].n + '"></button>').join("");
    app.innerHTML = '<div class="h1">Réglages</div>' +
      '<div class="set"><h3>Profil</h3><input id="nm" type="text" maxlength="20" placeholder="Votre prénom" value="' + esc(S.name) + '" autocomplete="off"></div>' +
      '<div class="set"><h3>Apparence</h3>' +
      '<div class="line"><span>Thème</span>' + opts("theme", [["auto", "Auto"], ["light", "Clair"], ["dark", "Sombre"]], S.theme) + '</div>' +
      '<div class="line"><span>Couleur</span><div class="opts">' + sw + '</div></div>' +
      '<div class="line"><span>Taille du texte</span>' + opts("size", SIZES, S.size) + '</div></div>' +
      '<div class="set"><h3>Étude</h3><div class="line"><span>Objectif du jour</span>' + opts("goal", [[5, "5"], [10, "10"], [20, "20"]], S.goal) + '</div>' +
      '<div class="line"><span>Vibration</span><button class="toggle ' + (S.vibrate ? "on" : "") + '" data-act="toggle" aria-label="Vibration"></button></div></div>' +
      '<div class="set"><h3>Version Pro</h3><p class="muted small" style="margin-bottom:12px">' + (pro ? "Pro activé : toutes les questions sont débloquées sur ce téléphone." : FREE_TOTAL + " questions gratuites. Débloquez les " + (TOTAL_Q - FREE_TOTAL) + " autres pour " + C.PRICE_LABEL + ".") + '</p>' +
      '<button class="btn ' + (pro ? "alt" : "y") + '" data-act="go" data-v="upgrade">' + (pro ? "Voir mon ID appareil" : "Passer à Pro") + '</button></div>' +
      '<div class="set"><h3>Application</h3>' +
      (isStandalone() ? '' : (deferredPrompt ? '<button class="btn" data-act="install">Installer sur ce téléphone</button><div class="gap"></div>' : '<p class="muted small" style="margin-bottom:12px">Pour installer : menu ⋮ de Chrome puis « Installer l\'application ».</p>')) +
      '<button class="btn alt" data-act="share">Partager l\'application</button><div class="gap"></div>' +
      '<a class="btn alt" href="https://wa.me/' + C.WHATSAPP + '" target="_blank" rel="noopener">Contacter sur WhatsApp</a><div class="gap"></div>' +
      '<button class="btn danger" data-act="reset">Effacer ma progression</button></div>' +
      '<p class="muted small" style="text-align:center;margin-top:16px">' + C.APP_NAME + ' · version 3 · ' + TOTAL_Q + ' questions</p>';
  }

  // ---------- catégorie ----------
  function cat({ id }) {
    setTabs("home");
    const c = catOf(id);
    const tiles = Q[id].map((q, i) => { const s = status(id, i); return '<button class="gt ' + s + '" data-act="tile" data-id="' + id + '" data-i="' + i + '">' + (s === "lock" ? ic("lock") : i + 1) + '</button>'; }).join("");
    app.innerHTML = top(c.t, '<span class="pill" style="background:' + c.c + ';color:#fff">' + C.FREE[id] + ' gratuites</span>') +
      '<p class="muted" style="margin-top:8px">' + c.d + '</p><div class="grid">' + tiles + '</div>' +
      '<button class="btn" style="background:' + c.c + ';box-shadow:0 4px 0 rgba(0,0,0,.2)" data-act="catgo" data-id="' + id + '">Continuer</button>' +
      (pro ? '' : '<div class="gap"></div><button class="btn alt" data-act="go" data-v="upgrade">Débloquer les ' + (tot(id) - C.FREE[id]) + ' autres questions</button>');
  }

  // ---------- séance ----------
  function startSession(title, items, from) {
    const list = items.filter((x) => !locked(x.cat, x.i));
    if (!list.length) { go("lock"); return; }
    let pos = 0;
    if (from) { const k = list.findIndex((x) => x.cat === from.cat && x.i === from.i); pos = k < 0 ? 0 : k; }
    else { const k = list.findIndex((x) => res[key(x.cat, x.i)] == null); pos = k < 0 ? 0 : k; }
    qs = { title, list, pos, step: 0, ans: [], done: false, fin: false, scores: [] };
    go("quiz");
  }
  function express() {
    const l = allItems().filter((x) => !locked(x.cat, x.i));
    l.sort((a, b) => { const ra = res[key(a.cat, a.i)], rb = res[key(b.cat, b.i)]; return (ra == null ? -1 : ra) - (rb == null ? -1 : rb); });
    startSession("Série express", l.slice(0, 5).sort((a, b) => a.cat.localeCompare(b.cat) || a.i - b.i));
  }
  function lock() {
    setTabs(null);
    app.innerHTML = top("Question verrouillée") + '<div class="lockbox">' + ic("lock") + '<div class="h1" style="margin-top:10px">Réservé à la version Pro</div>' +
      '<p class="muted" style="margin-top:8px">' + FREE_TOTAL + ' questions sont gratuites. Débloquez les ' + (TOTAL_Q - FREE_TOTAL) + ' autres pour ' + C.PRICE_LABEL + '.</p></div>' +
      '<button class="btn" data-act="go" data-v="upgrade">Passer à Pro</button>';
  }
  function quizView() { if (!qs || !qs.list.length) { go("home"); return; } setTabs(null); drawQuestion(); }
  function head(c, q) {
    const n = q.a.length, sk = streak();
    const segs = q.a.map((_, k) => '<i class="' + (qs.done || qs.ans[k] != null ? "on" : "") + (!qs.done && k === qs.step ? " cur" : "") + '"></i>').join("");
    return '<div class="qtop"><button class="x" data-act="back" aria-label="Quitter">' + ic("x") + '</button><div class="segs">' + segs + '</div>' +
      (sk ? '<span class="pill y">' + ic("flame", true) + ' ' + sk + '</span>' : '') + '</div>' +
      '<div class="qmeta">Question ' + (qs.pos + 1) + ' sur ' + qs.list.length + ' · <b>' + esc(q.s) + '</b></div>';
  }
  function drawQuestion() {
    if (qs.fin) return drawFinish();
    const it = qs.list[qs.pos], c = catOf(it.cat), q = Q[it.cat][it.i], n = q.a.length;
    if (qs.done) return drawResult(c, q);
    const a = q.a[qs.step], cur = qs.ans[qs.step], last = qs.step === n - 1;
    app.innerHTML = '<div class="quiz">' + head(c, q) + '<div class="stem">' + q.q + '</div>' +
      '<div class="assert"><small>Assertion ' + (qs.step + 1) + ' sur ' + n + '</small>' + a[0] + '</div>' +
      '<div class="vf"><button class="' + (cur === true ? "sel" : "") + '" data-act="ans" data-v="1"><i></i>Vrai</button><button class="' + (cur === false ? "sel" : "") + '" data-act="ans" data-v="0"><i></i>Faux</button></div>' +
      '<div class="btns">' + (qs.step > 0 ? '<button class="btn alt" style="flex:0 0 38%" data-act="prev">Précédente</button>' : '') +
      (last ? '<button class="btn" data-act="validate" ' + (qs.ans.filter((x) => x != null).length < n ? "disabled" : "") + '>Valider</button>'
            : '<button class="btn" data-act="next" ' + (cur == null ? "disabled" : "") + '>Suivante</button>') + '</div></div>';
  }
  function answer(v) { qs.ans[qs.step] = v; drawQuestion(); }
  function validate() {
    const it = qs.list[qs.pos], q = Q[it.cat][it.i];
    if (qs.ans.filter((x) => x != null).length < q.a.length) return;
    const ok = q.a.filter((a, k) => qs.ans[k] === a[1]).length, r = ok / q.a.length;
    res[key(it.cat, it.i)] = r; store.set("pt_res", res);
    const dk = dayKey(new Date()); days[dk] = (days[dk] || 0) + 1; store.set("pt_days", days);
    qs.scores.push(r); buzz(r === 1 ? 30 : [20, 40, 20]);
    qs.done = true; drawQuestion();
  }
  function drawResult(c, q) {
    const ok = q.a.filter((a, k) => qs.ans[k] === a[1]).length, r = ok / q.a.length, cls = r === 1 ? "full" : r === 0 ? "zero" : "part";
    const rows = q.a.map((a, k) => { const good = qs.ans[k] === a[1];
      return '<div class="res ' + (good ? "ok" : "ko") + '"><div class="ic">' + ic(good ? "check" : "x") + '</div><div class="sp">' + a[0] + '<div class="w">Votre réponse : ' + (qs.ans[k] ? "Vrai" : "Faux") + ' · Bonne réponse : ' + (a[1] ? "Vrai" : "Faux") + '</div></div></div>'; }).join("");
    const more = qs.pos + 1 < qs.list.length;
    const goal = todayCount() === S.goal ? '<div class="card" style="background:var(--gs);text-align:center;font-weight:700">Objectif du jour atteint, bravo !</div>' : '';
    app.innerHTML = '<div class="quiz">' + head(c, q) + '<div class="stem" style="font-size:1.2rem">' + q.q + '</div><div class="score ' + cls + '">' + ok + ' / ' + q.a.length + '</div>' + rows +
      '<div class="expl"><b>À retenir</b>' + q.e + '</div>' + goal + '<button class="btn bottom" data-act="nextq">' + (more ? "Question suivante" : "Terminer") + '</button></div>';
  }
  function nextQuestion() {
    qs.pos++; qs.step = 0; qs.ans = []; qs.done = false;
    if (qs.pos >= qs.list.length) { qs.pos = qs.list.length - 1; qs.fin = true; }
    window.scrollTo(0, 0); drawQuestion();
  }
  function drawFinish() {
    const avg = qs.scores.length ? qs.scores.reduce((a, b) => a + b, 0) / qs.scores.length : 0, pct = Math.round(avg * 100), sk = streak();
    const msg = pct >= 80 ? "Excellent travail !" : pct >= 50 ? "Bon début, continuez comme ça." : "Relisez les explications et réessayez.";
    app.innerHTML = '<div class="fin"><div class="trophy">' + ic("trophy") + '</div><div class="h1">Série terminée !</div><p class="muted" style="margin-top:6px">' + msg + '</p>' +
      '<div class="tiles"><div class="tile" style="background:#1FA971"><b>' + pct + ' %</b><span>de réussite</span></div><div class="tile" style="background:#F5B301"><b>+' + qs.scores.length + '</b><span>questions</span></div><div class="tile" style="background:#FF7A59"><b>' + sk + '</b><span>jour' + (sk > 1 ? "s" : "") + ' de suite</span></div></div>' +
      (pro ? '' : '<div class="promo" style="text-align:left"><div class="h2">Il reste des questions à débloquer</div><p>' + C.PRICE_LABEL + '</p><button class="btn light" data-act="go" data-v="upgrade">Passer à Pro</button></div>') +
      '<div class="gap"></div><button class="btn" data-act="express">Série express</button><div class="gap"></div><button class="btn alt" data-act="back">Retour</button></div>';
  }

  // ---------- Pro ----------
  function upgrade() {
    setTabs(null);
    if (pro) {
      app.innerHTML = top("Version Pro") + '<div class="lockbox">' + ic("star", true) + '<div class="h1" style="margin-top:10px">Pro activé</div><p class="muted">Toutes les questions sont débloquées sur ce téléphone.</p></div>' +
        '<div class="card"><div class="muted small">ID de cet appareil</div><div class="devid">' + dev + '</div></div><button class="btn" data-act="back">Retour</button>';
      return;
    }
    const wa = "https://wa.me/" + C.WHATSAPP + "?text=" + encodeURIComponent("Bonjour, je veux activer " + C.APP_NAME + " Pro (" + C.PRICE_LABEL + "). Mon ID appareil : " + dev + ". Voici ma preuve de paiement.");
    const pays = C.PAYMENTS.map((p) => '<div class="pay"><span>' + p.name + '</span><span>' + p.value + '</span></div>').join("");
    app.innerHTML = top("Version Pro") +
      '<div class="promo"><div class="h1">' + C.PRICE_LABEL + '</div><p>Accès aux ' + TOTAL_Q + ' questions, sans limite de durée. Un code ne fonctionne que sur le téléphone pour lequel il a été créé.</p></div>' +
      '<div class="set"><h3>Comment faire</h3><ol class="steps"><li>Payez par l\'un des moyens ci-dessous.</li><li>Envoyez la preuve de paiement et votre ID appareil sur WhatsApp.</li><li>Collez le code reçu pour activer.</li></ol></div>' +
      '<div class="set"><h3>Votre ID appareil</h3><div class="devid">' + dev + '</div><button class="btn alt" data-act="copy" data-t="' + dev + '">Copier l\'ID</button><div class="gap"></div><a class="btn wa" href="' + wa + '" target="_blank" rel="noopener">Envoyer sur WhatsApp</a></div>' +
      '<div class="set"><h3>Moyens de paiement</h3>' + pays + '</div>' +
      '<div class="set"><h3>J\'ai reçu mon code</h3><input id="code" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Collez ici le code reçu" style="font-size:.9rem"><div class="gap"></div><button class="btn" data-act="activate">Activer</button><div id="msg" class="msg"></div></div>';
  }
  async function activate() {
    const input = document.getElementById("code"), msg = document.getElementById("msg");
    const typed = input.value.replace(/\s+/g, "");
    if (typed && (await verifyCode(typed, dev))) {
      store.set("pt_pro", typed); pro = true;
      msg.className = "msg ok"; msg.textContent = "Pro activé. Merci !"; buzz(40);
      setTimeout(() => history.back(), 900);
    } else {
      msg.className = "msg ko"; msg.textContent = "Code incorrect pour ce téléphone. Collez le code en entier, sans le modifier, ou contactez-nous sur WhatsApp.";
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
