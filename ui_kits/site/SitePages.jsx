const { SongRow, SongCard, Button, Icon, Tabs, FilterChip, Avatar, AnnouncementCard } = window.ChantsDesignSystem_cafe14;

const THEMES = ["Tous", "Louange", "Adoration", "Communion", "Envoi", "Avent", "Enfants"];

function PageHead({ overline, title, info, children, gold = true }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "calc(var(--topbar-total) + var(--s-7)) var(--s-6) var(--s-7)" }}>
      <Halo size={640} style={{ left: "-14%", top: "-30%" }} />
      <span className="grain" style={{ position: "absolute", inset: 0 }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--s-4)" }}>
        <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--accent-text)" }}>{overline}</span>
        <h1 className={gold ? "gold-fill" : undefined} style={{ ...afficheStyle, fontSize: "var(--display-l)", lineHeight: "var(--display-l-lh)", color: gold ? undefined : "var(--white)" }}>{title}</h1>
        {info ? (
          <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", flexWrap: "wrap", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)" }}>
            {info.map((p, i) => (
              <React.Fragment key={i}>{i > 0 ? <span className="hairline" /> : null}<span>{p}</span></React.Fragment>
            ))}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

function PageRepertoire({ onOpenSong, onPlay }) {
  const mobile = useMobile();
  const [theme, setTheme] = React.useState("Tous");
  const [view, setView] = React.useState("liste");
  const songs = window.CHANTS;
  return (
    <>
      <PageHead overline="Répertoire" title="48 chants" gold info={["Do à Si, transposables", "12 recueils", "mis à jour le 2 septembre"]}>
        <div style={{ display: "flex", flexDirection: mobile ? "column" : "row", alignItems: mobile ? "stretch" : "center", justifyContent: "space-between", gap: mobile ? "var(--s-3)" : "var(--s-5)", marginTop: "var(--s-4)" }}>
          <div style={{ display: "flex", gap: "var(--s-2)", flexWrap: mobile ? "nowrap" : "wrap", overflowX: mobile ? "auto" : "visible", marginInline: mobile ? "calc(-1 * var(--s-6))" : 0, paddingInline: mobile ? "var(--s-6)" : 0 }}>
            {THEMES.map((t) => <FilterChip key={t} active={t === theme} onClick={() => setTheme(t)}>{t}</FilterChip>)}
          </div>
          <Tabs items={[{ id: "liste", label: "Liste" }, { id: "grille", label: "Grille" }]} value={view} onChange={setView} style={{ border: "none" }} />
        </div>
      </PageHead>
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--s-6) var(--s-9)" }}>
        <Reveal>
          {view === "liste" ? (
            <div style={{ display: "grid", gap: "var(--s-3)" }}>
              {songs.map((s, i) => <SongRow key={s.id} variant="pill" index={i + 1} {...s} onClick={() => onOpenSong(s)} onPlay={() => onPlay(s)} />)}
            </div>
          ) : (
            <div style={{ display: "grid", ...cols(mobile, "repeat(2, minmax(0,1fr))", "repeat(6, 1fr)"), gap: "var(--gutter)" }}>
              {songs.map((s) => <SongCard key={s.id} {...s} onClick={() => onOpenSong(s)} onPlay={() => onPlay(s)} />)}
            </div>
          )}
        </Reveal>
      </section>
    </>
  );
}

function PageChant({ song, onPlay, onBack }) {
  const mobile = useMobile();
  const s = song || window.CHANTS[0];
  const [tab, setTab] = React.useState("paroles");
  const body =
    tab === "paroles" ? (
      <div style={{ display: "grid", gap: "var(--s-2)", maxWidth: "62ch" }}>
        {window.PAROLES.map((l, i) => l === "" ? <span key={i} style={{ height: "var(--s-3)" }} /> : (
          <p key={i} style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--body)", lineHeight: "var(--body-lh)", color: "var(--text)" }}>{l}</p>
        ))}
      </div>
    ) : tab === "accords" ? (
      <pre style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--small)", lineHeight: "22px", color: "var(--text-muted)", whiteSpace: "pre-wrap" }}>{"Ré        Sol        La         Ré\nÀ toi la gloire, ô Ressuscité,\nSi m      Sol         La        Ré\nÀ toi la victoire pour l'éternité."}</pre>
    ) : (
      <div style={{ display: "grid", gap: "var(--s-3)" }}>{window.CHANTS.slice(0, 3).map((r, i) => (
        <SongRow key={r.id} variant="pill" index={i + 1} title={"Enregistrement " + (i + 1)} author={r.author} duration={r.duration} onPlay={() => onPlay(s)} />
      ))}</div>
    );
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", padding: "120px var(--s-6) var(--s-7)" }}>
        <Halo size={720} style={{ left: "-10%", top: "-34%" }} />
        <span className="grain" style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "var(--content-max)", margin: "0 auto" }}>
          <Button variant="tertiary" onClick={onBack} iconLeft={<Icon name="chevron-left" size={16} />}>Retour au répertoire</Button>
          <div style={{ display: "flex", gap: mobile ? "var(--s-4)" : "var(--s-6)", alignItems: mobile ? "flex-start" : "flex-end", flexDirection: mobile ? "column" : "row", marginTop: "var(--s-5)" }}>
            <div style={{ position: "relative", width: mobile ? 132 : 220, height: mobile ? 132 : 220, flex: "none", borderRadius: "var(--r-card)", overflow: "hidden", background: "var(--cover-bg)", boxShadow: "var(--cover-shadow)", display: "grid", placeItems: "center" }}>
              <span style={{ ...afficheStyle, fontSize: mobile ? 62 : 104, lineHeight: 1, color: "var(--cover-ink)" }}>{s.title.trim()[0]}</span>
              <span className="grain" />
            </div>
            <div style={{ display: "grid", gap: "var(--s-4)", flex: 1, minWidth: 0 }}>
              <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--accent-text)" }}>{s.author}</span>
              <h1 style={{ ...afficheStyle, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, color: "var(--white)", overflowWrap: "break-word" }}>{s.title}</h1>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", flexWrap: "wrap", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)" }}>
                <span>{s.duration}</span><span className="hairline" /><span>repris 14 fois</span><span className="hairline" /><span>recueil de septembre</span>
              </div>
              <div style={{ display: "flex", gap: "var(--s-3)", marginTop: "var(--s-2)", flexWrap: "wrap" }}>
                <Button variant="primary" onClick={() => onPlay(s)} iconLeft={<Icon name="play" size={18} strokeWidth={2.5} />}>Lancer le chant</Button>
                <Button variant="secondary" iconLeft={<Icon name="download" size={18} />}>Télécharger la chanson</Button>
                <Button variant="secondary" iconLeft={<Icon name="list-plus" size={18} />}>Ajouter à une liste</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--s-6) var(--s-9)" }}>
        <div style={{ display: "grid", ...cols(mobile, "minmax(0,1fr)", "minmax(0,1fr) 320px"), gap: mobile ? "var(--s-6)" : "var(--s-8)", alignItems: "start" }}>
          <div style={{ display: "grid", gap: "var(--s-5)" }}>
            <Tabs items={[{ id: "paroles", label: "Paroles" }, { id: "accords", label: "Accords" }, { id: "videos", label: "Enregistrements" }]} value={tab} onChange={setTab} />
            {body}
            <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", flexWrap: "wrap", paddingTop: "var(--s-4)", borderTop: "1px solid var(--line)" }}>
              <Button variant="secondary" iconLeft={<Icon name="download" size={18} />}>Télécharger les paroles</Button>
              <Button variant="secondary" onClick={() => setTab("videos")} iconLeft={<Icon name="play" size={18} />}>Voir la vidéo</Button>
              <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)" }}>PDF, une page · accords inclus</span>
            </div>
          </div>
          <aside style={{ display: "grid", gap: "var(--s-4)" }}>
            <div style={{ display: "grid", gap: "var(--s-3)", padding: "var(--s-4)", background: "var(--surface-1)", border: "1px solid var(--line)", borderRadius: "var(--r-card)" }}>
              <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--text)" }}>Aperçu vidéo</span>
              <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "var(--r-sm)", overflow: "hidden", background: "var(--gold-gradient-dim)", display: "grid", placeItems: "center" }}>
                <span className="grain" />
                <span style={{ ...afficheStyle, fontSize: 44, lineHeight: 1, color: "#fff", opacity: 0.3 }}>{s.title.trim()[0]}</span>
                <button type="button" aria-label="Lire la vidéo" onClick={() => onPlay(s)}
                  style={{ position: "absolute", width: 48, height: 48, display: "grid", placeItems: "center", borderRadius: "50%", border: "none", background: "var(--gold-gradient)", color: "#000", boxShadow: "var(--glow-md)", cursor: "pointer" }}>
                  <Icon name="play" size={20} strokeWidth={2.5} />
                </button>
                <span style={{ position: "absolute", right: 8, bottom: 8, fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "rgba(255,255,255,0.82)" }}>{s.duration}</span>
              </div>
              <div style={{ display: "flex", gap: "var(--s-2)" }}>
                <Button variant="primary" size="sm" onClick={() => onPlay(s)} iconLeft={<Icon name="play" size={16} strokeWidth={2.5} />} style={{ flex: 1 }}>Écouter</Button>
                <Button variant="secondary" size="sm" iconLeft={<Icon name="download" size={16} />}>MP3</Button>
              </div>
            </div>
            <div style={{ display: "grid", gap: "var(--s-4)", padding: "var(--s-5)", background: "var(--surface-1)", border: "1px solid var(--line)", borderRadius: "var(--r-card)" }}>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--text)" }}>Dernière fois chanté</span>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-muted)" }}>Dimanche 24 août, messe de 10 h 30</span>
            <div style={{ height: 1, background: "var(--line)" }} />
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--text)" }}>Qui le mène</span>
            <div style={{ display: "flex", gap: "var(--s-2)" }}><Avatar name="Claire Mbala" size={32} lead /><Avatar name="Jonas Petit" size={32} /></div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PageRepertoire, PageChant, PageHead });
