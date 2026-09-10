const { Button } = window.ChantsDesignSystem_cafe14;

function Chiffres() {
  const mobile = useMobile();
  const chiffres = [
    { n: "48", l: "chants au répertoire" },
    { n: "12", l: "recueils par temps liturgique" },
    { n: "14", l: "membres dans l'équipe" },
  ];
  return (
    <section id="chiffres" style={{ position: "relative", overflow: "hidden", padding: "var(--s-8) 0" }}>
      <Halo size={620} style={{ right: "-16%", top: "-30%" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--s-6)" }}>
        <Reveal>
          <div style={{ display: "grid", ...cols(mobile, "minmax(0,1fr)", "repeat(3, minmax(0,1fr))"), gap: "var(--gutter)" }}>
            {chiffres.map((c) => (
              <div key={c.n} style={{ display: "flex", alignItems: "baseline", gap: "var(--s-4)", paddingBottom: "var(--s-4)", borderBottom: "1px solid var(--line)" }}>
                <span className="gold-fill" style={{ ...afficheStyle, fontSize: mobile ? 52 : 72, lineHeight: 1 }}>{c.n}</span>
                <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--small)", color: "var(--text-muted)" }}>{c.l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const AUTH_ERROR_FR = {
  "Invalid login credentials": "Adresse ou mot de passe incorrect.",
  "User already registered": "Un compte existe déjà avec cette adresse.",
  "Password should be at least 6 characters.": "Le mot de passe doit contenir au moins 6 caractères.",
};

/**
 * Inscription / connexion réelles (Supabase) : verre posé sur une surface colorée.
 * `standalone` : porte d'entrée plein écran (avant d'accéder au site).
 * `adminMode` : cadrage « connexion administrateur », inscription désactivée.
 * `externalError` : erreur affichée en plus (ex. compte non administrateur).
 */
function Connexion({ session, profile, standalone = false, adminMode = false, externalError = null }) {
  const mobile = useMobile();
  const [mode, setMode] = React.useState(adminMode ? "connexion" : "inscription");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [notice, setNotice] = React.useState(null);
  const field = { height: 48, width: "100%", padding: "0 18px", borderRadius: "var(--r-pill)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", color: "var(--text)", fontFamily: "var(--font-ui)", fontSize: "var(--small)", outline: "none", boxSizing: "border-box" };

  const submit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setBusy(true); setError(null); setNotice(null);
    const { error: err } = mode === "inscription"
      ? await window.Auth.signUp(email, password, name)
      : await window.Auth.signIn(email, password);
    setBusy(false);
    if (err) { setError(AUTH_ERROR_FR[err.message] || err.message); return; }
    if (mode === "inscription") { setNotice("Compte créé. Vérifiez votre boîte mail pour confirmer votre adresse, puis connectez-vous."); setMode("connexion"); }
    setPassword("");
  };

  if (session && !standalone) {
    return (
      <section id="connexion" style={{ position: "relative", overflow: "hidden", padding: "var(--s-9) var(--s-6)" }}>
        <div className="on-dark" style={{ position: "relative", maxWidth: 1040, margin: "0 auto", borderRadius: "var(--r-panel)", overflow: "hidden", border: "1px solid var(--line)", background: "var(--gold-gradient-dim)", padding: "var(--s-7)", display: "grid", gap: "var(--s-4)", justifyItems: "start" }}>
          <span className="grain" />
          <Halo size={520} style={{ left: "-10%", bottom: "-30%" }} />
          <div style={{ position: "relative", zIndex: 2, display: "grid", gap: "var(--s-3)" }}>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--gold-100)" }}>{profile?.role === "admin" ? "Connecté · Administrateur" : "Connecté"}</span>
            <h2 style={{ ...afficheStyle, color: "var(--white)", fontSize: "var(--display-m)", lineHeight: "var(--display-m-lh)", margin: 0 }}>{profile?.display_name || session.user.email}</h2>
            <Button variant="secondary" onClick={() => window.Auth.signOut()}>Se déconnecter</Button>
          </div>
        </div>
      </section>
    );
  }

  const heading = adminMode ? "Connexion administrateur" : "Mon compte";
  const sub = adminMode
    ? "Réservée à l'équipe qui gère le contenu de la plateforme."
    : "Créez votre compte pour retrouver les listes du dimanche et le mode scène pendant la messe.";

  return (
    <section id="connexion" style={standalone
      ? { position: "fixed", inset: 0, zIndex: 90, overflowY: "auto", background: "var(--bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--s-6)", boxSizing: "border-box" }
      : { position: "relative", overflow: "hidden", padding: "var(--s-9) var(--s-6)" }}>
      {standalone ? <img src={ASSET("logo.png")} alt="Team Louange Marseille" style={{ width: 64, height: 64, objectFit: "contain", marginBottom: "var(--s-5)" }} /> : null}
      <div className="on-dark" style={{ position: "relative", width: "100%", maxWidth: 1040, margin: "0 auto", borderRadius: "var(--r-panel)", overflow: "hidden", border: "1px solid var(--line)", background: "var(--gold-gradient-dim)", display: "grid", ...cols(mobile, "minmax(0,1fr)", "1fr 420px"), minHeight: mobile ? 0 : 460 }}>
        <span className="grain" />
        <Halo size={520} style={{ left: "-10%", bottom: "-30%" }} />
        <div style={{ position: "relative", zIndex: 2, display: "grid", alignContent: "center", gap: "var(--s-4)", padding: "var(--s-7)" }}>
          <h2 style={{ ...afficheStyle, color: "var(--white)", fontSize: "var(--display-m)", lineHeight: "var(--display-m-lh)", margin: 0 }}>{heading}</h2>
          <p style={{ margin: 0, maxWidth: "38ch", fontFamily: "var(--font-text)", fontSize: "var(--body)", lineHeight: "var(--body-lh)", color: "rgba(255,255,255,0.72)" }}>{sub}</p>
        </div>
        <form onSubmit={submit} className="glass-card" style={{ position: "relative", zIndex: 3, borderRadius: 0, border: "none", borderLeft: "1px solid rgba(255,255,255,0.12)", display: "grid", alignContent: "center", gap: "var(--s-4)", padding: "var(--s-7) var(--s-6)" }}>
          {!adminMode ? (
            <div style={{ display: "flex", gap: "var(--s-4)" }}>
              {["inscription", "connexion"].map((m) => (
                <button key={m} type="button" onClick={() => { setMode(m); setError(null); setNotice(null); }}
                  style={{ position: "relative", padding: "0 0 10px", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-ui)", fontWeight: mode === m ? 600 : 500, fontSize: "var(--small)", color: mode === m ? "var(--text)" : "var(--text-muted)" }}>
                  {m === "inscription" ? "Créer un compte" : "Se connecter"}
                  <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, borderRadius: 2, background: "var(--gold-500)", opacity: mode === m ? 1 : 0, transition: "opacity var(--dur-hover) var(--ease)" }} />
                </button>
              ))}
            </div>
          ) : null}
          {mode === "inscription" ? <input style={field} placeholder="votre nom dans l'équipe" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /> : null}
          <input style={field} type="email" placeholder="adresse électronique" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
          <input style={field} type="password" placeholder="mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete={mode === "inscription" ? "new-password" : "current-password"} required minLength={6} />
          {error ? <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "#ff8a80" }}>{error}</span> : null}
          {externalError ? <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "#ff8a80" }}>{externalError}</span> : null}
          {notice ? <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--gold-100)" }}>{notice}</span> : null}
          <Button type="submit" variant="primary" fullWidth disabled={busy}>{busy ? "Un instant…" : mode === "inscription" ? "Créer le compte" : "Entrer"}</Button>
        </form>
      </div>
    </section>
  );
}

Object.assign(window, { Chiffres, Connexion });
