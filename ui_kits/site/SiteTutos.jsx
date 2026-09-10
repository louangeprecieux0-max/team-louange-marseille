const { Button, Icon, KeyTag, FilterChip } = window.ChantsDesignSystem_cafe14;

const TUTOS = [
  { id: "t1", title: "Tenir la tonalité au clavier", author: "Marc Olivier", dur: "8:12", cat: "Clavier", niveau: "Débutant" },
  { id: "t2", title: "Placer sa voix sur les couplets longs", author: "Claire Mbala", dur: "12:40", cat: "Exercice de voix", niveau: "Tous niveaux" },
  { id: "t7", title: "Chanter en duo sans se couvrir", author: "Awa Diop", dur: "10:18", cat: "Chant", niveau: "Intermédiaire" },
  { id: "t3", title: "Transposer un chant sans partition", author: "Jonas Petit", dur: "6:58", cat: "Guitare", niveau: "Intermédiaire" },
  { id: "t4", title: "Échauffement de la voix en dix minutes", author: "Léa Roux", dur: "15:04", cat: "Exercice de voix", niveau: "Débutant" },
  { id: "t5", title: "Rythmiques de louange à la guitare", author: "Jonas Petit", dur: "9:26", cat: "Guitare", niveau: "Intermédiaire" },
  { id: "t6", title: "Brancher et régler la sonorisation", author: "Paul Ferrand", dur: "7:31", cat: "Autre", niveau: "Tous niveaux" },
];

function TutoCard({ t, onPlay }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div role="button" tabIndex={0} onClick={() => onPlay(t)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onPlay(t)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "grid", gap: "var(--s-3)", cursor: "pointer", transform: hover ? "translateY(-4px)" : "none", filter: hover ? "drop-shadow(0 0 16px rgba(233,185,73,0.25))" : "none", transition: "transform var(--dur-hover) var(--ease), filter var(--dur-hover) var(--ease)" }}>
      <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "var(--r-card)", overflow: "hidden", background: "var(--cover-bg)", boxShadow: "var(--cover-shadow)", display: "grid", placeItems: "center" }}>
        <span className="grain" />
        <span style={{ ...afficheStyle, fontSize: 56, lineHeight: 1, color: "var(--cover-ink)" }}>{t.cat[0]}</span>
        <span style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(5,5,6,0.72) 0%, transparent 62%)" }} />
        <span style={{ position: "absolute", left: 12, top: 12, padding: "4px 10px", borderRadius: "var(--r-pill)", background: "var(--gold-gradient)", border: "1px solid rgba(255,255,255,0.24)", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--caption)", color: "#0F0E0B" }}>{t.cat}</span>
        <span style={{ position: "absolute", right: 12, bottom: 12, fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "rgba(255,255,255,0.82)", fontVariantNumeric: "tabular-nums" }}>{t.dur}</span>
        <span style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%) scale(" + (hover ? 1 : 0.9) + ")", width: 52, height: 52, display: "grid", placeItems: "center", borderRadius: "50%", background: "var(--gold-gradient)", color: "#000", boxShadow: "var(--glow-md)", opacity: hover ? 1 : 0, transition: "opacity var(--dur-hover) var(--ease), transform var(--dur-hover) var(--ease)" }}>
          <Icon name="play" size={22} strokeWidth={2.5} />
        </span>
      </div>
      <div style={{ display: "grid", gap: "var(--s-1)" }}>
        <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", lineHeight: "var(--small-lh)", color: "var(--text)" }}>{t.title}</span>
        <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)" }}>{t.author} · {t.niveau}</span>
      </div>
    </div>
  );
}

/** Vidéos tutos : formation de l'équipe, par instrument et par niveau. */
function Tutos({ onOpenTuto = () => {}, onAll = () => {} }) {
  const mobile = useMobile();
  const cats = ["Tout", "Chant", "Exercice de voix", "Guitare", "Clavier", "Autre"];
  const [cat, setCat] = React.useState("Tout");
  const list = cat === "Tout" ? TUTOS : TUTOS.filter((t) => t.cat === cat);
  return (
    <section id="tutos" style={{ position: "relative", overflow: "hidden", padding: "var(--s-9) 0" }}>
      <Halo size={640} style={{ right: "-14%", top: "6%" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--s-6)" }}>
        <Reveal>
          <SectionHead overline="Vidéos tutos" title="Apprendre entre deux répétitions" action="Toutes les vidéos" onAction={onAll} />
          <div style={{ display: "flex", gap: "var(--s-2)", flexWrap: "wrap", marginBottom: "var(--s-5)" }}>
            {cats.map((c) => <FilterChip key={c} active={c === cat} onClick={() => setCat(c)}>{c}</FilterChip>)}
          </div>
          <div style={{ display: "grid", ...cols(mobile, "minmax(0,1fr)", "repeat(3, minmax(0,1fr))"), gap: "var(--gutter)" }}>
            {list.map((t) => <TutoCard key={t.id} t={t} onPlay={onOpenTuto} />)}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", marginTop: "var(--s-5)", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)" }}>
            <span>{TUTOS.length} vidéos</span><span className="hairline" /><span>5 à 15 minutes</span><span className="hairline" /><span>tournées à la salle Sainte-Anne</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Page dédiée aux vidéos tutos. */
function PageTutos({ onOpenTuto = () => {} }) {
  const mobile = useMobile();
  const cats = ["Tout", "Chant", "Exercice de voix", "Guitare", "Clavier", "Autre"];
  const [cat, setCat] = React.useState("Tout");
  const list = TUTOS.filter((t) => cat === "Tout" || t.cat === cat);
  return (
    <>
      <PageHead overline="Vidéos tutos" title="Se former" gold info={[TUTOS.length + " vidéos", "5 à 15 minutes", "tournées à la salle Sainte-Anne"]}>
        <div style={{ display: "grid", gap: "var(--s-3)", marginTop: "var(--s-4)" }}>
          <div style={{ display: "flex", gap: "var(--s-2)", flexWrap: "wrap" }}>
            {cats.map((c) => <FilterChip key={c} active={c === cat} onClick={() => setCat(c)}>{c}</FilterChip>)}
          </div>
        </div>
      </PageHead>
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--s-6) var(--s-6) var(--s-9)" }}>
        <Reveal>
          <div style={{ display: "grid", ...cols(mobile, "minmax(0,1fr)", "repeat(3, minmax(0,1fr))"), gap: "var(--gutter)" }}>
            {list.map((t) => <TutoCard key={t.id} t={t} onPlay={onOpenTuto} />)}
          </div>
          {list.length === 0 ? (
            <p style={{ margin: "var(--s-6) 0 0", fontFamily: "var(--font-text)", fontSize: "var(--body)", color: "var(--text-muted)" }}>Aucune vidéo pour ce filtre.</p>
          ) : null}
        </Reveal>
      </section>
    </>
  );
}

Object.assign(window, { Tutos, PageTutos, TutoCard, TUTOS });
