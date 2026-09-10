const { Icon } = window.ChantsDesignSystem_cafe14;

const WELCOME_AUTH_ERROR_FR = {
  "Invalid login credentials": "Adresse ou mot de passe incorrect.",
  "User already registered": "Un compte existe déjà avec cette adresse.",
  "Password should be at least 6 characters.": "Le mot de passe doit contenir au moins 6 caractères.",
};

/** Écran d'entrée mobile : photo en haut, feuille d'authentification en bas. */
function AuthField({ label, name, type = "text", placeholder, autoComplete, hint }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--caption)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>
      <input className="auth-input" name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} required />
      {hint ? <span style={{ fontFamily: "var(--font-text)", fontSize: "var(--caption)", color: "var(--text-muted)" }}>{hint}</span> : null}
    </label>
  );
}

/** Porte d'entrée : connexion / inscription réelles (Supabase). `adminMode` retire l'inscription libre-service. */
function MobileWelcome({ adminMode = false, externalError = null }) {
  const [mode, setMode] = React.useState("accueil");
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [notice, setNotice] = React.useState(null);
  const form = mode !== "accueil";
  const pill = { width: "100%", height: 46, minHeight: 46, display: "grid", placeItems: "center", borderRadius: "var(--r-pill)", fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "var(--small)", cursor: "pointer", border: "none", background: "var(--gold-gradient)", color: "#000", boxShadow: "0 0 24px rgba(233,185,73,0.35)" };
  const or = { border: "none", background: "none", padding: 0, font: "inherit", color: "var(--accent-text)", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 };
  const go = (m) => { setMode(m); setError(null); setNotice(null); };

  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const email = fd.get("email");
    const password = fd.get("password");
    if (!email || !password) return;
    setBusy(true); setError(null); setNotice(null);
    const { error: err } = mode === "inscription"
      ? await window.Auth.signUp(email, password, [fd.get("prenom"), fd.get("nom")].filter(Boolean).join(" "))
      : await window.Auth.signIn(email, password);
    setBusy(false);
    if (err) { setError(WELCOME_AUTH_ERROR_FR[err.message] || err.message); return; }
    if (mode === "inscription") { setNotice("Compte créé. Vérifiez votre boîte mail pour confirmer votre adresse, puis connectez-vous."); setMode("connexion"); }
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 80, background: "var(--bg)", overflowY: "auto", display: "grid", gridTemplateRows: form ? "calc(320px + var(--safe-top)) auto" : "1fr auto" }}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src={ASSET("hero-stairs.png")} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <span className="grain" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,5,6,0.30) 0%, rgba(5,5,6,0.10) 42%, rgba(5,5,6,0.70) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "grid", alignContent: form ? "start" : "center", justifyItems: "center", padding: form ? "calc(68px + var(--safe-top)) 32px 0" : "0 var(--s-6)" }}>
          <img src={ASSET("logo.png")} alt="Team Louange Marseille" style={{ width: form ? 72 : 116, height: form ? 72 : 116, objectFit: "contain", display: "block", filter: "drop-shadow(0 8px 22px rgba(0,0,0,0.55))" }} />
        </div>
        {form ? (
          <button type="button" onClick={() => go("accueil")} aria-label="Retour" style={{ position: "absolute", zIndex: 3, top: "calc(env(safe-area-inset-top) + 12px)", left: 12, width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: "var(--r-pill)", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(5,5,6,0.45)", backdropFilter: "blur(10px)", color: "var(--on-media)", cursor: "pointer" }}><Icon name="chevron-left" size={18} /></button>
        ) : null}
      </div>
      <form className="on-dark" onSubmit={submit} style={{ position: "relative", marginTop: -140, background: "linear-gradient(180deg, rgba(5,5,6,0) 0px, rgba(5,5,6,0.55) 60px, rgba(5,5,6,0.92) 112px, #050506 175px)", display: "grid", justifyItems: "center", gap: "var(--s-3)", padding: "calc(var(--s-8) + 40px) var(--s-6) calc(env(safe-area-inset-bottom) + var(--s-6))" }}>
        <h1 className="gold-fill" style={{ margin: 0, fontFamily: "var(--font-affiche)", fontWeight: 800, fontStretch: "125%", fontVariationSettings: '"wdth" 125, "wght" 800', textTransform: "uppercase", letterSpacing: "-0.01em", fontSize: form ? 26 : 32, lineHeight: form ? "28px" : "34px", textAlign: "center" }}>
          {adminMode ? "Administration" : mode === "connexion" ? "Connexion" : mode === "inscription" ? "Créer un compte" : "Bienvenue"}
        </h1>
        {mode === "accueil" ? (
          <>
            <p style={{ margin: 0, maxWidth: "30ch", textAlign: "center", fontFamily: "var(--font-text)", fontSize: "var(--small)", lineHeight: "var(--small-lh)", color: "var(--text-muted)" }}>
              {adminMode ? "Réservée à l'équipe qui gère le contenu de la plateforme." : (<>Les chants, les listes du dimanche et les répétitions de l'équipe.<br />Tout le répertoire dans votre poche.</>)}
            </p>
            <div style={{ width: "100%", display: "grid", gap: "var(--s-3)", marginTop: "var(--s-3)" }}>
              <button type="button" onClick={() => go("connexion")} style={pill}>Se connecter</button>
              {!adminMode ? <button type="button" onClick={() => go("inscription")} style={{ ...pill, background: "transparent", border: "1px solid var(--line)", color: "var(--text)", boxShadow: "none" }}>Créer un compte</button> : null}
            </div>
          </>
        ) : null}
        {mode === "connexion" ? (
          <>
            <div style={{ width: "100%", display: "grid", gap: "var(--s-4)", marginTop: "var(--s-3)" }}>
              <AuthField label="Adresse e-mail" name="email" type="email" placeholder="prenom@exemple.fr" autoComplete="email" />
              <AuthField label="Mot de passe" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
            </div>
            {error ? <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "#ff8a80" }}>{error}</span> : null}
            {externalError ? <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "#ff8a80" }}>{externalError}</span> : null}
            <button type="submit" style={{ ...pill, marginTop: "var(--s-2)", opacity: busy ? 0.7 : 1 }} disabled={busy}>{busy ? "Un instant…" : "Se connecter"}</button>
            {!adminMode ? (
              <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--caption)", color: "var(--text-muted)" }}>
                Pas encore de compte ? <button type="button" onClick={() => go("inscription")} style={or}>Créer un compte</button>
              </p>
            ) : null}
          </>
        ) : null}
        {mode === "inscription" ? (
          <>
            <div style={{ width: "100%", display: "grid", gap: "var(--s-4)", marginTop: "var(--s-3)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-3)" }}>
                <AuthField label="Prénom" name="prenom" placeholder="Marie" autoComplete="given-name" />
                <AuthField label="Nom" name="nom" placeholder="Ndiaye" autoComplete="family-name" />
              </div>
              <AuthField label="Adresse e-mail" name="email" type="email" placeholder="prenom@exemple.fr" autoComplete="email" />
              <AuthField label="Mot de passe" name="password" type="password" placeholder="••••••••" autoComplete="new-password" hint="6 caractères minimum." />
            </div>
            {error ? <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "#ff8a80" }}>{error}</span> : null}
            {notice ? <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--gold-100)" }}>{notice}</span> : null}
            <button type="submit" style={{ ...pill, marginTop: "var(--s-2)", opacity: busy ? 0.7 : 1 }} disabled={busy}>{busy ? "Un instant…" : "Créer mon compte"}</button>
            <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--caption)", color: "var(--text-muted)" }}>
              Déjà membre ? <button type="button" onClick={() => go("connexion")} style={or}>Se connecter</button>
            </p>
          </>
        ) : null}
      </form>
    </div>
  );
}

Object.assign(window, { MobileWelcome, AuthField });
