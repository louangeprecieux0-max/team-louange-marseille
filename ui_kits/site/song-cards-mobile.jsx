// Sur mobile il n'y a pas de survol : ces cartes/rangées de chants montraient leur halo doré
// et leur bouton lecture uniquement au hover, donc jamais sur un écran tactile. On surcharge
// les deux composants du design system pour que l'effet soit actif en permanence sur mobile.
const { Icon, KeyTag } = window.ChantsDesignSystem_cafe14;

function SongCoverFallback({ title }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "var(--cover-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: "var(--font-affiche)", fontWeight: 800, fontStretch: "125%", fontVariationSettings: '"wdth" 125, "wght" 800', fontSize: "44%", lineHeight: 1, textTransform: "uppercase", color: "var(--cover-ink)" }}>
        {(title || "?").trim()[0]}
      </span>
    </div>
  );
}

function SongCard({ title, author, songKey, duration, cover = null, onPlay, onClick, style, ...rest }) {
  const mobile = useMobile();
  const [hoverState, setHoverState] = React.useState(false);
  const hover = mobile || hoverState;
  return (
    <div role="button" tabIndex={0} onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick && onClick()}
      onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}
      style={{ display: "grid", gap: "var(--s-3)", cursor: "pointer", transform: hover ? "translateY(-4px)" : "none", filter: hover ? "drop-shadow(0 0 16px rgba(233,185,73,0.25))" : "none", transition: "transform var(--dur-hover) var(--ease), filter var(--dur-hover) var(--ease)", ...style }}
      {...rest}>
      <div style={{ position: "relative", aspectRatio: "1 / 1", borderRadius: "var(--r-card)", overflow: "hidden", background: "var(--surface-1)", boxShadow: "var(--cover-shadow)", fontSize: 160 }}>
        {cover ? <img src={cover} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : <SongCoverFallback title={title} />}
        <button type="button" aria-label={"Lancer " + title} onClick={(e) => { e.stopPropagation(); onPlay && onPlay(); }}
          style={{ position: "absolute", right: 12, bottom: 12, width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: "50%", border: "none", background: "var(--gold-gradient)", color: "#000", cursor: "pointer", opacity: hover ? 1 : 0, transform: hover ? "translateY(0)" : "translateY(6px)", transition: "opacity var(--dur-hover) var(--ease), transform var(--dur-hover) var(--ease)" }}>
          <Icon name="play" size={20} strokeWidth={2.5} />
        </button>
      </div>
      <div style={{ display: "grid", gap: "var(--s-1)" }}>
        <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", lineHeight: "var(--small-lh)", color: "var(--text)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{title}</span>
        <span style={{ display: "flex", alignItems: "center", gap: "var(--s-2)", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", lineHeight: "var(--caption-lh)", color: "var(--text-faint)" }}>
          {songKey ? <KeyTag size="sm">{songKey}</KeyTag> : null}
          {duration ? <span>{duration}</span> : null}
          {author && !songKey ? <span>{author}</span> : null}
        </span>
      </div>
    </div>
  );
}

const ROW_HOVER_FILLS = [
  "linear-gradient(135deg, #FBE9A8 0%, #E9B949 45%, #B0842A 100%)",
  "linear-gradient(135deg, #E9B949 0%, #C8912F 48%, #8A6614 100%)",
  "linear-gradient(135deg, #FFF3C9 0%, #F0CB6A 45%, #C89A33 100%)",
  "linear-gradient(135deg, #D9A93F 0%, #B0842A 50%, #6E5010 100%)",
];

function SongRow({ index = null, title, author, songKey, duration, cover = null, active = false, variant = "list", onClick, onPlay, style, ...rest }) {
  const mobile = useMobile();
  const [hoverState, setHoverState] = React.useState(false);
  const fill = React.useRef(0);
  const [fillIndex, setFillIndex] = React.useState(0);
  const enter = () => {
    if (variant === "pill") { setFillIndex(fill.current % ROW_HOVER_FILLS.length); fill.current += 1; }
    setHoverState(true);
  };

  if (variant === "pill") {
    const lit = mobile || hoverState || active;
    const ink = lit ? "#0F0E0B" : "var(--text)";
    return (
      <div role="button" tabIndex={0} onClick={onClick}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick && onClick()}
        onMouseEnter={enter} onMouseLeave={() => setHoverState(false)}
        style={{ position: "relative", display: "flex", alignItems: "center", gap: "var(--s-4)", height: mobile ? 64 : 72, padding: mobile ? "0 10px 0 8px" : "0 var(--s-5) 0 12px", borderRadius: "var(--r-pill)", background: lit ? ROW_HOVER_FILLS[fillIndex] : "var(--row-bg)", border: "1px solid " + (lit ? "transparent" : "var(--row-line)"), boxShadow: lit ? "0 0 0 1px rgba(233,185,73,0.45), 0 0 32px rgba(233,185,73,0.35), 0 0 90px rgba(233,185,73,0.18)" : "var(--row-shadow)", transform: lit && !mobile ? "translateY(-2px)" : "none", cursor: "pointer", transition: "background var(--dur-hover) var(--ease), box-shadow var(--dur-hover) var(--ease), transform var(--dur-hover) var(--ease), border-color var(--dur-hover) var(--ease)", ...style }}
        {...rest}>
        <div style={{ position: "relative", width: mobile ? 40 : 48, height: mobile ? 40 : 48, flex: "none", borderRadius: "50%", overflow: "hidden", background: cover ? "var(--surface-2)" : "var(--cover-bg)", border: "1px solid " + (lit ? "rgba(15,14,11,0.18)" : "var(--line)"), boxShadow: lit ? "none" : "var(--cover-shadow)", display: "grid", placeItems: "center" }}>
          {cover ? <img src={cover} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (
            <span style={{ fontFamily: "var(--font-affiche)", fontWeight: 800, fontStretch: "125%", fontVariationSettings: '"wdth" 125, "wght" 800', fontSize: 20, color: "var(--cover-ink)", textTransform: "uppercase" }}>{(title || "?").trim()[0]}</span>
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0, display: "grid", gap: 2 }}>
          <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--lead)", lineHeight: "24px", color: ink, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
          <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--small)", lineHeight: "20px", color: lit ? "rgba(15,14,11,0.66)" : "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {author}{index !== null ? " · nº " + index : ""}{mobile && duration ? " · " + duration : ""}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: mobile ? "var(--s-2)" : "var(--s-4)", flex: "none" }}>
          {songKey ? (
            <span style={{ display: "inline-flex", alignItems: "center", height: 26, padding: "0 12px", borderRadius: "var(--r-pill)", border: "1px solid " + (lit ? "rgba(15,14,11,0.26)" : "var(--accent-text)"), color: lit ? "#0F0E0B" : "var(--accent-text)", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--caption)", lineHeight: 1 }}>{songKey}</span>
          ) : null}
          {duration && !mobile ? (
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: lit ? "#0F0E0B" : "var(--text-faint)", fontVariantNumeric: "tabular-nums" }}>{duration}</span>
          ) : null}
          <button type="button" aria-label={"Lancer " + title} onClick={(e) => { e.stopPropagation(); onPlay && onPlay(); }}
            style={{ width: 40, height: 40, display: "grid", placeItems: "center", borderRadius: "50%", border: "none", background: lit ? "rgba(15,14,11,0.92)" : "var(--surface-2)", color: lit ? "#fff" : "var(--text-muted)", cursor: "pointer", transition: "background var(--dur-hover) var(--ease), color var(--dur-hover) var(--ease)" }}>
            <Icon name="play" size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    );
  }

  const hover = mobile || hoverState;
  return (
    <div role="button" tabIndex={0} onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick && onClick()}
      onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}
      style={{ display: "flex", alignItems: "center", gap: "var(--s-4)", height: "var(--row-h)", padding: "0 var(--s-3)", borderRadius: "var(--r-sm)", background: hover || active ? "var(--surface-2)" : "transparent", cursor: "pointer", transition: "background var(--dur-hover) var(--ease)", ...style }}
      {...rest}>
      {index !== null ? (
        <span style={{ width: 20, textAlign: "right", flex: "none", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--small)", color: active ? "var(--accent-text)" : "var(--text-faint)", fontVariantNumeric: "tabular-nums" }}>{index}</span>
      ) : null}
      <div style={{ position: "relative", width: 44, height: 44, flex: "none", borderRadius: "var(--r-sm)", overflow: "hidden", background: cover ? "var(--surface-1)" : "var(--cover-bg)", display: "grid", placeItems: "center" }}>
        {cover ? <img src={cover} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (
          <span style={{ fontFamily: "var(--font-affiche)", fontWeight: 800, fontStretch: "125%", fontVariationSettings: '"wdth" 125, "wght" 800', fontSize: 18, color: "#fff", opacity: 0.4, textTransform: "uppercase" }}>{(title || "?").trim()[0]}</span>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "grid" }}>
        <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", lineHeight: "20px", color: active ? "var(--accent-text)" : "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
        {author ? <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", lineHeight: "18px", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{author}</span> : null}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--s-4)", flex: "none" }}>
        <span style={{ display: hover ? "flex" : "none", gap: "var(--s-3)", color: "var(--text-muted)" }}>
          <button type="button" aria-label={"Lancer " + title} onClick={(e) => { e.stopPropagation(); onPlay && onPlay(); }} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, display: "grid" }}>
            <Icon name="play" size={18} />
          </button>
          <Icon name="list-plus" size={18} />
        </span>
        {songKey ? <KeyTag size="sm">{songKey}</KeyTag> : null}
        {duration ? <span style={{ width: 40, textAlign: "right", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)", fontVariantNumeric: "tabular-nums" }}>{duration}</span> : null}
      </div>
    </div>
  );
}

Object.assign(window.ChantsDesignSystem_cafe14, { SongCard, SongRow });
