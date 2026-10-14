(() => {
  const C = window.CONFIG;
  const Q = window.QUESTIONS;
  const CATS = [
    { id: "apt", t: "Aptitudes", d: "Logique, calcul, langage, espace, attention", c: "#5b3fd0" },
    { id: "per", t: "Personnalité", d: "Big Five, MBTI, MMPI, tests projectifs, intérêts", c: "#0e7c86" },
    { id: "theo", t: "Théorie psychométrique", d: "QI, fidélité, validité, étalonnage, grands auteurs", c: "#b7791f" }
  ];
  const app = document.getElementById("app");

  // ---------- stockage ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  let res = store.get("pt_res", {});
  let pro = false;
  let deferredPrompt = null;

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
    const pad = b + "=".repeat((4 - (b.length % 4)) % 4);
    const bin = atob(pad);
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
    if (!saved) return false;
    return verifyCode(saved, dev);
  }

  // ---------- utilitaires ----------
  const isStandalone = () =>
    window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;

  function toast(t) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = t;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  }
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); toast("Copié"); } catch (e) { toast("Copie impossible"); }
  }
  const total = (id) => Q[id].length;
  const qkey = (id, i) => id + "-" + i;
  const locked = (i) => !pro && i >= C.FREE_PER_CAT;
  function status(id, i) {
    if (locked(i)) return "lock";
    const r = res[qkey(id, i)];
    if (r == null) return "";
    return r === 1 ? "full" : r === 0 ? "zero" : "part";
  }

  // ---------- navigation ----------
  function go(name, p = {}) { history.pushState({ name, p }, ""); show(name, p); }
  function back() { history.back(); }
  window.addEventListener("popstate", (e) => {
    const s = e.state || { name: "home", p: {} };
    show(s.name, s.p);
  });
  function show(name, p) {
    window.scrollTo(0, 0);
    ({ home, cat, quiz, upgrade }[name] || home)(p);
  }
  function top(title, withBack = true) {
    return `<div class="top">
      ${withBack ? '<button class="back" data-act="back" aria-label="Retour">←</button>' : ""}
      <div class="title"><h2>${title}</h2></div>
      <span class="badge ${pro ? "pro" : ""}">${pro ? "Pro" : "Gratuit"}</span>
    </div>`;
  }
  app.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    const a = el.dataset.act;
    if (a === "back") back();
    else if (a === "go") go(el.dataset.v, el.dataset.id ? { id: el.dataset.id, i: el.dataset.i != null ? +el.dataset.i : undefined } : {});
    else if (a === "install") install();
    else if (a === "copy") copy(el.dataset.t);
    else if (a === "activate") activate();
    else if (a === "ans") answer(el.dataset.v === "1");
    else if (a === "prev") { qs.step--; drawQuestion(); }
    else if (a === "next") { qs.step++; drawQuestion(); }
    else if (a === "validate") validate();
    else if (a === "nextq") nextQuestion();
    else if (a === "reset") { if (confirm("Effacer toute votre progression ?")) { res = {}; store.set("pt_res", res); home(); } }
  });

  // ---------- accueil ----------
  function home() {
    const ids = [];
    CATS.forEach((c) => Q[c.id].forEach((_, i) => ids.push(qkey(c.id, i))));
    const done = ids.filter((k) => res[k] != null);
    const avg = done.length ? Math.round((done.reduce((s, k) => s + res[k], 0) / done.length) * 100) : 0;
    const count = ids.length;
    const cats = CATS.map((c) => {
      const n = total(c.id);
      const d = Q[c.id].filter((_, i) => res[qkey(c.id, i)] != null).length;
      const pct = n ? Math.round((d / n) * 100) : 0;
      return `<button class="cat" style="--c:${c.c}" data-act="go" data-v="cat" data-id="${c.id}">
        <h2>${c.t}</h2><p>${c.d}</p>
        <div class="bar"><i style="width:${pct}%"></i></div>
        <div class="meta"><span>${d} / ${n} questions</span><span>${pro ? "Tout débloqué" : C.FREE_PER_CAT + " gratuites"}</span></div>
      </button>`;
    }).join("");
    app.innerHTML = `
      <div class="top"><div class="title"><h1>${C.APP_NAME}</h1></div><span class="badge ${pro ? "pro" : ""}">${pro ? "Pro" : "Gratuit"}</span></div>
      <div class="hero"><p>Préparez les tests psychométriques les plus utilisés en RDC et ailleurs. Répondez Vrai ou Faux à chaque assertion, puis lisez l'explication.</p></div>
      <div class="stats">
        <div class="stat"><b>${done.length}</b><span>questions faites</span></div>
        <div class="stat"><b>${avg}%</b><span>de réussite</span></div>
        <div class="stat"><b>${count}</b><span>au total</span></div>
      </div>
      ${cats}
      ${pro ? "" : `<div class="banner pro-ad"><h3>Débloquez toutes les questions</h3><p>Version Pro : ${C.PRICE_LABEL}. Un code, un téléphone.</p><button class="btn light" data-act="go" data-v="upgrade">Passer à Pro</button></div>`}
      ${installBlock()}
      ${done.length ? '<button class="btn ghost" data-act="reset">Effacer ma progression</button>' : ""}
    `;
  }

  function installBlock() {
    if (isStandalone()) return "";
    if (deferredPrompt) {
      return `<div class="banner"><h3>Installer l'application</h3><p class="muted small">Elle s'ouvre comme une vraie application, même sans connexion.</p><button class="btn" data-act="install">Installer sur ce téléphone</button></div>`;
    }
    return `<div class="banner"><h3>Installer l'application</h3>
      <p class="muted small">Android (Chrome) : menu ⋮ puis « Installer l'application ».<br>iPhone (Safari) : bouton Partager puis « Sur l'écran d'accueil ».</p></div>`;
  }
  async function install() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    home();
  }
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (document.querySelector(".hero")) home();
  });
  window.addEventListener("appinstalled", () => { deferredPrompt = null; toast("Application installée"); });

  // ---------- catégorie ----------
  function cat({ id }) {
    const c = CATS.find((x) => x.id === id);
    const tiles = Q[id].map((q, i) => {
      const st = status(id, i);
      return `<button class="tile ${st}" data-act="go" data-v="quiz" data-id="${id}" data-i="${i}">${st === "lock" ? "🔒" : i + 1}</button>`;
    }).join("");
    let next = Q[id].findIndex((_, i) => !locked(i) && res[qkey(id, i)] == null);
    if (next < 0) next = 0;
    app.innerHTML = `
      ${top(c.t)}
      <p class="muted">${c.d}</p>
      <div class="grid">${tiles}</div>
      <button class="btn" style="background:${c.c}" data-act="go" data-v="quiz" data-id="${id}" data-i="${next}">Continuer</button>
      ${pro ? "" : `<div class="gap"></div><button class="btn alt" data-act="go" data-v="upgrade">Débloquer les ${total(id) - C.FREE_PER_CAT} autres questions</button>`}
    `;
  }

  // ---------- quiz ----------
  let qs = { id: "", i: 0, step: 0, ans: [], done: false };
  function quiz({ id, i }) {
    i = i || 0;
    if (locked(i)) return paywall(id);
    qs = { id, i, step: 0, ans: [], done: false };
    drawQuestion();
  }
  function paywall(id) {
    app.innerHTML = `${top("Question verrouillée")}
      <div class="lockbox"><h2>🔒 Réservé à la version Pro</h2>
      <p class="muted">Les ${C.FREE_PER_CAT} premières questions de chaque catégorie sont gratuites. Débloquez toutes les autres pour ${C.PRICE_LABEL}.</p></div>
      <button class="btn" data-act="go" data-v="upgrade">Passer à Pro</button>`;
  }
  function drawQuestion() {
    const c = CATS.find((x) => x.id === qs.id);
    const q = Q[qs.id][qs.i];
    const n = q.a.length;
    if (qs.done) return drawResult(c, q);
    const a = q.a[qs.step];
    const cur = qs.ans[qs.step];
    const dots = q.a.map((_, k) => `<i class="${qs.ans[k] != null ? "on" : ""} ${k === qs.step ? "cur" : ""}" style="--c:${c.c}"></i>`).join("");
    const last = qs.step === n - 1;
    app.innerHTML = `
      ${top(c.t)}
      <div class="qhead"><span>Question ${qs.i + 1} sur ${total(qs.id)}</span><span class="tag">${q.s}</span></div>
      <div class="stem">${q.q}</div>
      <div class="dots">${dots}</div>
      <div class="assert"><div class="n">Assertion ${qs.step + 1} sur ${n}</div><div class="t">${a[0]}</div></div>
      <div class="bubbles">
        <button class="bub ${cur === true ? "sel" : ""}" data-act="ans" data-v="1"><span class="o"></span>Vrai</button>
        <button class="bub ${cur === false ? "sel" : ""}" data-act="ans" data-v="0"><span class="o"></span>Faux</button>
      </div>
      <div class="row">
        ${qs.step > 0 ? '<button class="btn alt" data-act="prev">Précédente</button>' : ""}
        ${last
          ? `<button class="btn" data-act="validate" ${qs.ans.filter((x) => x != null).length < n ? "disabled" : ""}>Valider</button>`
          : `<button class="btn" data-act="next" ${cur == null ? "disabled" : ""}>Suivante</button>`}
      </div>`;
  }
  function answer(v) {
    qs.ans[qs.step] = v;
    drawQuestion();
  }
  function validate() {
    const q = Q[qs.id][qs.i];
    if (qs.ans.filter((x) => x != null).length < q.a.length) return;
    const ok = q.a.filter((a, k) => qs.ans[k] === a[1]).length;
    res[qkey(qs.id, qs.i)] = ok / q.a.length;
    store.set("pt_res", res);
    qs.done = true;
    drawQuestion();
  }
  function drawResult(c, q) {
    const ok = q.a.filter((a, k) => qs.ans[k] === a[1]).length;
    const r = ok / q.a.length;
    const cls = r === 1 ? "full" : r === 0 ? "zero" : "part";
    const rows = q.a.map((a, k) => {
      const good = qs.ans[k] === a[1];
      return `<div class="res ${good ? "ok" : "ko"}"><div class="ic">${good ? "✓" : "✗"}</div>
        <div><div class="t">${a[0]}</div>
        <div class="w">Votre réponse : ${qs.ans[k] ? "Vrai" : "Faux"} · Bonne réponse : ${a[1] ? "Vrai" : "Faux"}</div></div></div>`;
    }).join("");
    const hasNext = qs.i + 1 < total(qs.id);
    app.innerHTML = `
      ${top(c.t)}
      <div class="qhead"><span>Question ${qs.i + 1} sur ${total(qs.id)}</span><span class="tag">${q.s}</span></div>
      <div class="stem">${q.q}</div>
      <div class="score ${cls}">${ok} / ${q.a.length}</div>
      ${rows}
      <div class="expl"><b>À retenir</b>${q.e}</div>
      <button class="btn" data-act="nextq">${hasNext ? "Question suivante" : "Terminer la catégorie"}</button>`;
  }
  function nextQuestion() {
    const ni = qs.i + 1;
    if (ni >= total(qs.id)) { history.back(); return; }
    if (locked(ni)) { history.replaceState({ name: "quiz", p: { id: qs.id, i: ni } }, ""); paywall(qs.id); return; }
    history.replaceState({ name: "quiz", p: { id: qs.id, i: ni } }, "");
    quiz({ id: qs.id, i: ni });
  }

  // ---------- passage à Pro ----------
  function upgrade() {
    if (pro) {
      app.innerHTML = `${top("Version Pro")}<div class="lockbox"><h2>Pro activé</h2><p class="muted">Toutes les questions sont débloquées sur ce téléphone.</p></div>
      <button class="btn" data-act="back">Retour</button>`;
      return;
    }
    const wa = "https://wa.me/" + C.WHATSAPP + "?text=" + encodeURIComponent(
      "Bonjour, je veux activer " + C.APP_NAME + " Pro (" + C.PRICE_LABEL + "). Mon ID appareil : " + dev + ". Voici ma preuve de paiement."
    );
    const pays = C.PAYMENTS.map((p) =>
      `<div class="pay"><span>${p.name}</span><span>${p.value}</span></div>`).join("");
    app.innerHTML = `
      ${top("Version Pro")}
      <div class="banner"><h3>${C.PRICE_LABEL}</h3>
        <p class="muted">Accès à toutes les questions, sans limite de durée. Un code ne fonctionne que sur le téléphone pour lequel il a été créé.</p>
        <ol class="steps">
          <li>Payez par l'un des moyens ci-dessous.</li>
          <li>Envoyez la preuve de paiement et votre ID appareil sur WhatsApp.</li>
          <li>Saisissez le code reçu pour activer.</li>
        </ol></div>
      <div class="banner"><h3>Votre ID appareil</h3>
        <div class="devid">${dev}</div>
        <button class="btn alt" data-act="copy" data-t="${dev}">Copier l'ID</button>
        <div class="gap"></div>
        <a class="btn wa" href="${wa}" target="_blank" rel="noopener">Envoyer sur WhatsApp</a></div>
      <div class="banner"><h3>Moyens de paiement</h3>${pays}</div>
      <div class="banner"><h3>J'ai reçu mon code</h3>
        <input id="code" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Collez ici le code reçu" style="text-transform:none;letter-spacing:0;font-size:15px" />
        <div class="gap"></div>
        <button class="btn" data-act="activate">Activer</button>
        <div id="msg" class="msg"></div></div>`;
  }
  async function activate() {
    const input = document.getElementById("code");
    const msg = document.getElementById("msg");
    const typed = input.value.replace(/\s+/g, "");
    if (typed && (await verifyCode(typed, dev))) {
      store.set("pt_pro", typed);
      pro = true;
      msg.className = "msg ok";
      msg.textContent = "Pro activé. Merci !";
      setTimeout(() => { history.back(); }, 900);
    } else {
      msg.className = "msg ko";
      msg.textContent = "Code incorrect pour ce téléphone. Collez le code en entier, sans le modifier, ou contactez-nous sur WhatsApp.";
    }
  }

  // ---------- démarrage ----------
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
  (async () => {
    pro = await checkPro();
    history.replaceState({ name: "home", p: {} }, "");
    home();
  })();
})();
