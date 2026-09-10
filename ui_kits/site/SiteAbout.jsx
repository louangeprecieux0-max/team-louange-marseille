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

/** Carte de compte affichée sur l'accueil une fois connecté (la connexion elle-même se fait sur la porte d'entrée). */
function Connexion({ session, profile }) {
  if (!session) return null;
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

Object.assign(window, { Chiffres, Connexion });
