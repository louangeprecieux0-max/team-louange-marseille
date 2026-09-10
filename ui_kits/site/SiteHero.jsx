const { Button, Icon } = window.ChantsDesignSystem_cafe14;

const afficheStyle = {
  margin: 0,
  fontFamily: "var(--font-affiche)",
  fontWeight: 800,
  fontStretch: "125%",
  fontVariationSettings: '"wdth" 125, "wght" 800',
  textTransform: "uppercase",
  letterSpacing: "-0.015em",
};

/** Titre composé lettre par lettre. */
function AfficheLines({ lines, size = 96, lh = 0.94, gold = [], ink = "var(--white)" }) {
  let n = 0;
  return (
    <h1 style={{ ...afficheStyle, fontSize: size, lineHeight: lh, display: "grid" }}>
      {lines.map((line, li) => (
        <span key={li} className={gold.includes(li) ? "gold-fill" : undefined} style={{ display: "block", color: gold.includes(li) ? undefined : ink }}>
          {line.split(" ").map((mot, mi, all) => (
            <span key={mi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              {(mi < all.length - 1 ? mot + "\u00A0" : mot).split("").map((ch, ci) => (
                <span key={ci} className="letter" style={{ animationDelay: 120 + 26 * n++ + "ms" }}>{ch}</span>
              ))}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

/** Héro plein cadre : image de fond, dégradés de protection, contenu en bas à gauche. */
function SiteHero({ onPlay, onOpenApp }) {
  const song = window.CHANTS[1];
  return (
    <section id="top" style={{ position: "relative", height: "100dvh", minHeight: 620, overflow: "hidden", background: "var(--bg)" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <img src={ASSET("hero-stairs.png")} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <Halo size={820} style={{ right: "-18%", top: "-26%", zIndex: 1 }} />
      <span className="grain" style={{ position: "absolute", inset: 0, zIndex: 2 }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none", background: "linear-gradient(90deg, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0.62) 30%, rgba(10,10,12,0.22) 52%, rgba(10,10,12,0.04) 72%, transparent 88%), radial-gradient(90% 70% at 0% 100%, rgba(5,5,6,0.92) 0%, rgba(5,5,6,0.6) 34%, rgba(5,5,6,0.2) 56%, transparent 74%)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none", background: "linear-gradient(0deg, rgba(10,10,12,0.62) 0%, rgba(10,10,12,0.12) 20%, transparent 40%)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 4, pointerEvents: "none", padding: "0 var(--s-6) var(--s-8)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
          <div style={{ display: "grid", gap: "var(--s-5)", justifyItems: "start", width: "min(58%, 700px)" }}>
            <AfficheLines lines={[song.title]} size={"clamp(34px, 4.2vw, 68px)"} ink="var(--on-media)" />
          <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", flexWrap: "wrap", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--small)", lineHeight: "var(--small-lh)", color: "var(--on-media-muted)" }}>
            <span style={{ color: "var(--on-media-gold)", fontWeight: 600 }}>Chant de la semaine</span>
            <span>{song.duration}</span>
            <span>2026</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--s-4)", pointerEvents: "auto" }}>
            <Button variant="primary" onClick={() => onPlay(song)} iconLeft={<Icon name="play" size={18} strokeWidth={2.5} />}>
              Écouter
            </Button>
            <button type="button" aria-label="Parcourir le répertoire" onClick={onOpenApp}
              style={{ width: 48, height: 48, display: "grid", placeItems: "center", borderRadius: "50%", background: "rgba(255,255,255,0.10)", backdropFilter: "blur(var(--glass-pill-blur))", WebkitBackdropFilter: "blur(var(--glass-pill-blur))", border: "1px solid rgba(255,255,255,0.28)", color: "var(--on-media)", cursor: "pointer", transition: "border-color var(--dur-hover) var(--ease), box-shadow var(--dur-hover) var(--ease)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold-500)"; e.currentTarget.style.boxShadow = "var(--glow-sm)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.boxShadow = "none"; }}>
              <Icon name="plus" size={22} />
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Chants des semaines précédentes : défile automatiquement dans le catalogue. */
function WeekBanner({ onPlay, onOpenSong = () => {} }) {
  const mobile = useMobile();
  const picks = window.CHANTS;
  const semaines = ["Dimanche 31 août", "Dimanche 24 août", "Dimanche 17 août", "Dimanche 10 août", "Dimanche 3 août", "Dimanche 27 juillet", "Dimanche 20 juillet", "Dimanche 13 juillet", "Dimanche 6 juillet", "Dimanche 29 juin"];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % picks.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = picks[i];
  return (
    <section id="repertoire" style={{ position: "relative", padding: "0 var(--s-6)", maxWidth: "var(--content-max)", margin: "0 auto var(--s-9)" }}>
      <Reveal>
        <div className="on-dark" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--r-panel)", background: "var(--band-bg)", border: "1px solid var(--band-line)", minHeight: mobile ? 0 : 380, display: "grid", ...cols(mobile, "minmax(0,1fr)", "1.1fr .9fr") }}>
          <div style={{ position: "relative", zIndex: 2, display: "grid", alignContent: "center", gap: "var(--s-4)", padding: mobile ? "var(--s-5)" : "var(--s-7)" }}>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--band-gold)" }}>Chants des semaines précédentes</span>
            <h2 key={s.title} style={{ ...afficheStyle, color: "var(--band-ink)", fontSize: "var(--display-l)", lineHeight: "var(--display-l-lh)" }}>{s.title}</h2>
            <p key={i} style={{ margin: 0, maxWidth: "44ch", fontFamily: "var(--font-text)", fontSize: "var(--body)", lineHeight: "var(--body-lh)", color: "var(--band-ink-muted)" }}>Chanté le {semaines[i].toLowerCase()}, messe de 10 h 30.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)" }}>
              <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--band-ink-faint)" }}>{s.author} · {s.duration}</span>
            </div>
            <div style={{ display: "flex", gap: "var(--s-3)", marginTop: "var(--s-2)", flexWrap: "wrap" }}>
              <Button variant="primary" onClick={() => onPlay(s)} iconLeft={<Icon name="play" size={18} strokeWidth={2.5} />}>Lancer le chant</Button>
              <Button variant="secondary" onClick={() => onOpenSong(s)}>Voir la fiche</Button>
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: "var(--s-4)", flexWrap: "wrap" }}>
              {picks.map((p, k) => (
                <button key={p.id} type="button" aria-label={"Voir " + p.title} onClick={() => setI(k)}
                  style={{ width: k === i ? 28 : 10, height: 4, borderRadius: 999, border: "none", padding: 0, cursor: "pointer", background: k === i ? "var(--gold-500)" : "var(--band-dot-off)", transition: "width var(--dur-hover) var(--ease), background var(--dur-hover) var(--ease)" }} />
              ))}
            </div>
          </div>
          <div style={{ position: "relative", overflow: "hidden", height: mobile ? 150 : "auto", order: mobile ? -1 : 0 }}>
            <Halo size={560} style={{ right: "-30%", top: "-20%" }} />
            <div key={s.id} style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "var(--gold-gradient-dim)", animation: "letterIn 700ms var(--ease)" }}>
              <span style={{ ...afficheStyle, fontSize: mobile ? 110 : 220, lineHeight: 1, color: "#fff", opacity: 0.4 }}>{s.title.trim()[0]}</span>
              <span className="grain" />
            </div>
            <div style={{ position: "absolute", inset: 0, background: mobile ? "linear-gradient(0deg,#121216 0%,rgba(18,18,22,.35) 60%,transparent 100%)" : "var(--band-veil)" }} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { SiteHero, WeekBanner, AfficheLines, afficheStyle });
