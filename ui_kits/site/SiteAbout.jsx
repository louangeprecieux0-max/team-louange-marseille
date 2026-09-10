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

/** Inscription / connexion : verre posé sur une surface colorée, boutons en pilule pleine largeur. */
function Connexion() {
  const mobile = useMobile();
  const [mode, setMode] = React.useState("inscription");
  const field = { height: 48, width: "100%", padding: "0 18px", borderRadius: "var(--r-pill)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", color: "var(--text)", fontFamily: "var(--font-ui)", fontSize: "var(--small)", outline: "none", boxSizing: "border-box" };
  return (
    <section id="connexion" style={{ position: "relative", overflow: "hidden", padding: "var(--s-9) var(--s-6)" }}>
      <div className="on-dark" style={{ position: "relative", maxWidth: 1040, margin: "0 auto", borderRadius: "var(--r-panel)", overflow: "hidden", border: "1px solid var(--line)", background: "var(--gold-gradient-dim)", display: "grid", ...cols(mobile, "minmax(0,1fr)", "1fr 420px"), minHeight: mobile ? 0 : 460 }}>
        <span className="grain" />
        <Halo size={520} style={{ left: "-10%", bottom: "-30%" }} />
        <div style={{ position: "relative", zIndex: 2, display: "grid", alignContent: "center", gap: "var(--s-4)", padding: "var(--s-7)" }}>
          <h2 style={{ ...afficheStyle, color: "var(--white)", fontSize: "var(--display-m)", lineHeight: "var(--display-m-lh)", margin: 0 }}>Mon compte</h2>
          <p style={{ margin: 0, maxWidth: "38ch", fontFamily: "var(--font-text)", fontSize: "var(--body)", lineHeight: "var(--body-lh)", color: "rgba(255,255,255,0.72)" }}>
            Connectez-vous pour retrouver les listes du dimanche et le mode scène pendant la messe.
          </p>
        </div>
        <div className="glass-card" style={{ position: "relative", zIndex: 3, borderRadius: 0, border: "none", borderLeft: "1px solid rgba(255,255,255,0.12)", display: "grid", alignContent: "center", gap: "var(--s-4)", padding: "var(--s-7) var(--s-6)" }}>
          <div style={{ display: "flex", gap: "var(--s-4)" }}>
            {["inscription", "connexion"].map((m) => (
              <button key={m} type="button" onClick={() => setMode(m)}
                style={{ position: "relative", padding: "0 0 10px", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-ui)", fontWeight: mode === m ? 600 : 500, fontSize: "var(--small)", color: mode === m ? "var(--text)" : "var(--text-muted)" }}>
                {m === "inscription" ? "Créer un compte" : "Se connecter"}
                <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, borderRadius: 2, background: "var(--gold-500)", opacity: mode === m ? 1 : 0, transition: "opacity var(--dur-hover) var(--ease)" }} />
              </button>
            ))}
          </div>
          <input style={field} placeholder="adresse électronique" />
          <input style={field} type="password" placeholder="mot de passe" />
          {mode === "inscription" ? <input style={field} placeholder="votre nom dans l'équipe" /> : null}
          <Button variant="primary" fullWidth>{mode === "inscription" ? "Créer le compte" : "Entrer"}</Button>
          {mode === "connexion" ? (
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)", textAlign: "center" }}>
              Mot de passe oublié ?
            </span>
          ) : null}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Chiffres, Connexion });
