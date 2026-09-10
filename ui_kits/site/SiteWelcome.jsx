const { Icon } = window.ChantsDesignSystem_cafe14;

/** Écran d'entrée mobile : photo en haut, feuille d'authentification en bas. */
function AuthField({ label, type = "text", placeholder, autoComplete, hint }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--caption)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>
      <input className="auth-input" type={type} placeholder={placeholder} autoComplete={autoComplete} />
      {hint ? <span style={{ fontFamily: "var(--font-text)", fontSize: "var(--caption)", color: "var(--text-muted)" }}>{hint}</span> : null}
    </label>
  );
}

function MobileWelcome({ onEnter = () => {} }) {
  const [mode, setMode] = React.useState("accueil");
  const form = mode !== "accueil";
  const pill = { width: "100%", height: 46, minHeight: 46, display: "grid", placeItems: "center", borderRadius: "var(--r-pill)", fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "var(--small)", cursor: "pointer" };
  const or = { border: "none", background: "none", padding: 0, font: "inherit", color: "var(--accent-text)", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 };
  const submit = (e) => { e.preventDefault(); onEnter(); };
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 80, background: "var(--bg)", display: "grid", gridTemplateRows: form ? "calc(320px + var(--safe-top)) auto" : "1fr auto" }}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src={ASSET("hero-stairs.png")} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <span className="grain" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,5,6,0.30) 0%, rgba(5,5,6,0.10) 42%, rgba(5,5,6,0.70) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "grid", alignContent: form ? "start" : "center", justifyItems: "center", padding: form ? "calc(68px + var(--safe-top)) 32px 0" : "0 var(--s-6)" }}>
          <img src={ASSET("logo.png")} alt="Team Louange Marseille" style={{ width: form ? 72 : 116, height: form ? 72 : 116, objectFit: "contain", display: "block", filter: "drop-shadow(0 8px 22px rgba(0,0,0,0.55))" }} />
        </div>
        {form ? (
          <button type="button" onClick={() => setMode("accueil")} aria-label="Retour" style={{ position: "absolute", zIndex: 3, top: "calc(env(safe-area-inset-top) + 12px)", left: 12, width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: "var(--r-pill)", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(5,5,6,0.45)", backdropFilter: "blur(10px)", color: "var(--on-media)", cursor: "pointer" }}><Icon name="chevron-left" size={18} /></button>
        ) : null}
      </div>
      <form className="on-dark" onSubmit={submit} style={{ position: "relative", marginTop: -140, background: "linear-gradient(180deg, rgba(5,5,6,0) 0px, rgba(5,5,6,0.55) 60px, rgba(5,5,6,0.92) 112px, #050506 175px)", display: "grid", justifyItems: "center", gap: "var(--s-3)", padding: "calc(var(--s-8) + 40px) var(--s-6) calc(env(safe-area-inset-bottom) + var(--s-6))" }}>
        <h1 className="gold-fill" style={{ margin: 0, fontFamily: "var(--font-affiche)", fontWeight: 800, fontStretch: "125%", fontVariationSettings: '"wdth" 125, "wght" 800', textTransform: "uppercase", letterSpacing: "-0.01em", fontSize: form ? 26 : 32, lineHeight: form ? "28px" : "34px", textAlign: "center" }}>
          {mode === "connexion" ? "Connexion" : mode === "inscription" ? "Créer un compte" : "Bienvenue"}
        </h1>
        {mode === "accueil" ? (
          <>
            <p style={{ margin: 0, maxWidth: "30ch", textAlign: "center", fontFamily: "var(--font-text)", fontSize: "var(--small)", lineHeight: "var(--small-lh)", color: "var(--text-muted)" }}>
              Les chants, les listes du dimanche et les répétitions de l'équipe.
              <br />Tout le répertoire dans votre poche.
            </p>
            <div style={{ width: "100%", display: "grid", gap: "var(--s-3)", marginTop: "var(--s-3)" }}>
              <button type="button" onClick={() => setMode("connexion")} style={{ ...pill, border: "none", background: "var(--gold-gradient)", color: "#000", boxShadow: "0 0 24px rgba(233,185,73,0.35)" }}>Se connecter</button>
              <button type="button" onClick={() => setMode("inscription")} style={{ ...pill, background: "transparent", border: "1px solid var(--line)", color: "var(--text)" }}>Créer un compte</button>
            </div>
          </>
        ) : null}
        {mode === "connexion" ? (
          <>
            <div style={{ width: "100%", display: "grid", gap: "var(--s-4)", marginTop: "var(--s-3)" }}>
              <AuthField label="Adresse e-mail" type="email" placeholder="prenom@exemple.fr" autoComplete="email" />
              <AuthField label="Mot de passe" type="password" placeholder="••••••••" autoComplete="current-password" />
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", fontFamily: "var(--font-text)", fontSize: "var(--caption)" }}>
              <button type="button" style={or}>Mot de passe oublié ?</button>
            </div>
            <button type="submit" style={{ ...pill, marginTop: "var(--s-2)", border: "none", background: "var(--gold-gradient)", color: "#000", boxShadow: "0 0 24px rgba(233,185,73,0.35)" }}>Se connecter</button>
            <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--caption)", color: "var(--text-muted)" }}>
              Pas encore de compte ? <button type="button" onClick={() => setMode("inscription")} style={or}>Créer un compte</button>
            </p>
          </>
        ) : null}
        {mode === "inscription" ? (
          <>
            <div style={{ width: "100%", display: "grid", gap: "var(--s-4)", marginTop: "var(--s-3)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-3)" }}>
                <AuthField label="Prénom" placeholder="Marie" autoComplete="given-name" />
                <AuthField label="Nom" placeholder="Ndiaye" autoComplete="family-name" />
              </div>
              <AuthField label="Adresse e-mail" type="email" placeholder="prenom@exemple.fr" autoComplete="email" />
              <AuthField label="Mot de passe" type="password" placeholder="••••••••" autoComplete="new-password" hint="8 caractères minimum." />
            </div>
            <button type="submit" style={{ ...pill, marginTop: "var(--s-2)", border: "none", background: "var(--gold-gradient)", color: "#000", boxShadow: "0 0 24px rgba(233,185,73,0.35)" }}>Créer mon compte</button>
            <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--caption)", color: "var(--text-muted)" }}>
              Déjà membre ? <button type="button" onClick={() => setMode("connexion")} style={or}>Se connecter</button>
            </p>
          </>
        ) : null}
      </form>
    </div>
  );
}

Object.assign(window, { MobileWelcome, AuthField });
