const { Icon, Button, Avatar } = window.ChantsDesignSystem_cafe14;

const BRAND = "Team Louange Marseille";
const NAVLINKS = [
  { id: "accueil", label: "Accueil", view: "accueil" },
  { id: "repertoire", label: "Répertoire", view: "repertoire" },
  { id: "events", label: "Évents", view: "events" },
  { id: "tutos", label: "Tutos", view: "tutos" },
  { id: "programmation", label: "Programmation", view: "programmation" },
];

/** Vrai sous 760 px : on bascule en présentation application. */
function useMobile(bp = 760) {
  const q = "(max-width:" + bp + "px)";
  const force = document.documentElement.hasAttribute("data-force-mobile");
  const [m, setM] = React.useState(() => force || window.matchMedia(q).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const h = () => setM(force || mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, [q, force]);
  return m;
}

/** Colonnes selon le contexte. */
const cols = (mobile, m, d) => ({ gridTemplateColumns: mobile ? m : d });
/** Rangée qui défile horizontalement sur mobile, grille sinon. */
const scroller = (mobile, col = "46%") => (mobile ? { gridTemplateColumns: "none", gridAutoFlow: "column", gridAutoColumns: col, minWidth: 0, maxWidth: "100vw", overflowX: "auto", overflowY: "hidden", scrollSnapType: "x proximity", gap: "var(--s-4)", paddingBottom: 4, marginInline: "calc(-1 * var(--s-6))", paddingInline: "var(--s-6)" } : {});

const TABS = [
  { id: "accueil", label: "Accueil", icon: "house" },
  { id: "repertoire", label: "Chants", icon: "music" },
  { id: "events", label: "Évents", icon: "calendar-days" },
  { id: "tutos", label: "Tutos", icon: "graduation-cap" },
  { id: "programmation", label: "Dates", icon: "list-music" },
];

/** Barre d'onglets flottante : pastille de marque à gauche, onglet actif encadré en doré. */
function TabBar({ view = "accueil", onNav = () => {} }) {
  const i = Math.max(0, TABS.findIndex((t) => t.id === view || (view === "chant" && t.id === "repertoire")));
  const [survol, setSurvol] = React.useState(null);
  const cible = survol == null ? i : survol;
  return (
    <nav className="tabbar" aria-label="Navigation principale">
      <button type="button" onClick={() => onNav("accueil")} aria-label={BRAND}
        style={{ width: 46, height: 46, flex: "none", borderRadius: "50%", display: "grid", placeItems: "center", background: "#1C1B1F", border: "1px solid rgba(251,233,168,0.22)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 6px 14px rgba(0,0,0,0.45)", cursor: "pointer", padding: 0 }}>
        <img src={ASSET("logo.png")} alt="" style={{ width: 30, height: 30, objectFit: "contain", display: "block" }} />
      </button>
      <div style={{ position: "relative", flex: 1, minWidth: 0, display: "grid", gridAutoFlow: "column", gridAutoColumns: "1fr", alignItems: "center" }}>
        <span aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "calc(100% / " + TABS.length + ")", display: "grid", placeItems: "center", transform: "translateX(" + cible * 100 + "%)", transition: "transform 460ms cubic-bezier(.34,1.42,.5,1)", pointerEvents: "none" }}>
          <span style={{ width: "calc(100% - 4px)", height: 42, borderRadius: "var(--r-pill)", background: "var(--gold-gradient)", boxShadow: "0 4px 18px rgba(233,185,73,0.42)", animation: "letterIn 320ms var(--ease)" }} />
        </span>
        {TABS.map((t, k) => {
          const active = k === i;
          return (
            <button key={t.id} type="button" onClick={() => onNav(t.id)} aria-current={active ? "page" : undefined}
              onMouseEnter={() => setSurvol(k)} onMouseLeave={() => setSurvol(null)} onFocus={() => setSurvol(k)} onBlur={() => setSurvol(null)}
              style={{ position: "relative", display: "grid", justifyItems: "center", alignContent: "center", gap: 2, minHeight: 44, padding: "2px", background: "none", border: "none", cursor: "pointer", color: k === cible ? "#151309" : "rgba(255,255,255,0.52)", transition: "color var(--dur-hover) var(--ease)" }}>
              <span style={{ display: "grid", transform: k === cible ? "translateY(-1px) scale(1.12)" : "none", transition: "transform 380ms cubic-bezier(.34,1.56,.64,1)" }}>
                <Icon name={t.icon} size={19} strokeWidth={k === cible ? 2.4 : 2} />
              </span>
              <span style={{ fontFamily: "var(--font-ui)", fontWeight: k === cible ? 700 : 500, fontSize: 10, lineHeight: "11px", letterSpacing: k === cible ? ".03em" : ".01em", transition: "letter-spacing 300ms var(--ease), font-weight 200ms linear" }}>{t.label}</span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: active ? "rgba(21,19,9,0.45)" : "transparent" }} />
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/** Enveloppe d'apparition au défilement — opacité seule si prefers-reduced-motion. */
function Reveal({ delay = 0, children, style, tag = "div" }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (el.classList.add("in"), io.unobserve(el))),
      { rootMargin: "-8% 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return React.createElement(
    tag,
    { ref, className: "reveal" + (delay ? " d" + delay : ""), style },
    children
  );
}

/** Halo doré d'ambiance qui respire lentement. */
function Halo({ size = 620, style }) {
  return <span className="glow-amb breathe" style={{ width: size, height: size, ...style }} />;
}

function SectionHead({ overline, title, action, onAction }) {
  const mobile = useMobile();
  return (
    <div style={{ display: "flex", flexDirection: mobile ? "column" : "row", alignItems: mobile ? "flex-start" : "flex-end", justifyContent: "space-between", gap: mobile ? "var(--s-2)" : "var(--s-5)", marginBottom: "var(--s-5)" }}>
      <div style={{ display: "grid", gap: "var(--s-2)" }}>
        {overline ? (
          <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--accent-text)" }}>{overline}</span>
        ) : null}
        <h2 style={{ margin: 0, fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--subtitle)", lineHeight: "var(--subtitle-lh)", color: "var(--text)" }}>{title}</h2>
      </div>
      {action ? <Button variant="tertiary" onClick={onAction}>{action}</Button> : null}
    </div>
  );
}

/** Bascule clair / sombre : pose data-theme sur <html> et garde le choix. */
function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem("tl-theme") || "dark");
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("tl-theme", theme);
  }, [theme]);
  const clair = theme === "light";
  return (
    <button type="button" role="switch" aria-checked={clair} aria-label={clair ? "Passer en mode sombre" : "Passer en mode clair"}
      onClick={() => setTheme(clair ? "dark" : "light")}
      style={{ position: "relative", width: 62, height: 30, padding: 3, display: "flex", alignItems: "center", borderRadius: "var(--r-pill)", background: "var(--surface-2)", border: "1px solid var(--line)", cursor: "pointer" }}>
      <span style={{ position: "absolute", left: 3, top: 3, width: 24, height: 24, borderRadius: "50%", background: "var(--gold-gradient)", transform: clair ? "translateX(32px)" : "none", transition: "transform var(--dur-hover) var(--ease)" }} />
      <span style={{ position: "relative", zIndex: 1, width: 24, height: 24, display: "grid", placeItems: "center", color: clair ? "var(--text-faint)" : "var(--on-accent)" }}><Icon name="moon" size={15} /></span>
      <span style={{ position: "relative", zIndex: 1, width: 24, height: 24, marginLeft: 8, display: "grid", placeItems: "center", color: clair ? "var(--on-accent)" : "var(--text-faint)" }}><Icon name="sun" size={15} /></span>
    </button>
  );
}

function SiteHeader({ view = "accueil", onNav = () => {}, notifs = [], session = null, profile = null }) {
  const mobile = useMobile();
  const [openNotifs, setOpenNotifs] = React.useState(false);
  const unread = notifs.filter((n) => n.unread).length;
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const surMedia = !solid && view === "accueil";
  if (mobile) {
    const unreadM = unread;
    return (
      <header className={solid ? "glass-nav" : ""} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 40, boxSizing: "border-box", height: "var(--topbar-total)", display: "flex", alignItems: "center", gap: "var(--s-3)", padding: "var(--safe-top) var(--mobile-margin) 0", transition: "background var(--dur-hover) var(--ease)" }}>
        <button type="button" onClick={() => onNav("accueil")} aria-label={BRAND} style={{ background: "none", border: "none", padding: 0, display: "grid", cursor: "pointer" }}>
          <img src={ASSET("logo.png")} alt="" style={{ height: 32, width: "auto", display: "block" }} />
        </button>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--s-4)" }}>
          <ThemeToggle />
          <button type="button" aria-label="Rechercher un chant" onClick={() => onNav("repertoire")} style={{ width: "var(--tap-min)", height: "var(--tap-min)", display: "grid", placeItems: "center", background: "none", border: "none", padding: 0, cursor: "pointer", color: surMedia ? "var(--on-media-muted)" : "var(--text-muted)" }}>
            <Icon name="search" size={22} />
          </button>
          <button type="button" aria-label={unreadM ? unreadM + " nouvelles annonces" : "Annonces"} onClick={() => onNav("accueil", "annonces")}
            style={{ position: "relative", width: "var(--tap-min)", height: "var(--tap-min)", display: "grid", placeItems: "center", background: "none", border: "none", padding: 0, cursor: "pointer", color: unreadM ? (surMedia ? "var(--on-media-gold)" : "var(--accent-text)") : (surMedia ? "var(--on-media-muted)" : "var(--text-muted)") }}>
            <Icon name="bell" size={22} />
            {unreadM ? (
              <span style={{ position: "absolute", top: 6, right: 6, minWidth: 15, height: 15, padding: "0 4px", borderRadius: 999, background: "var(--gold-gradient)", color: "#000", fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, lineHeight: "15px", textAlign: "center" }}>{unreadM}</span>
            ) : null}
          </button>
        </div>
      </header>
    );
  }
  return (
    <header
      className={solid ? "glass-nav" : ""}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 40, height: "var(--topbar-h)", display: "flex", alignItems: "center", gap: "var(--s-6)", padding: "0 var(--s-6)", whiteSpace: "nowrap", transition: "background var(--dur-hover) var(--ease)" }}
    >
      <a href="#top" onClick={(e) => { e.preventDefault(); onNav("accueil"); }} style={{ display: "grid", flex: "none", textDecoration: "none" }}>
        <img src={ASSET("logo.png")} alt={BRAND} style={{ height: 40, width: "auto", display: "block" }} />
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: "var(--s-5)", marginLeft: "var(--s-5)", flex: "none" }}>
        {NAVLINKS.map((l) => {
          const active = view === l.view && !l.hash;
          return (
          <button key={l.id} type="button" onClick={() => onNav(l.view, l.hash)}
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "var(--font-ui)", fontWeight: active ? 600 : 500, fontSize: "var(--small)", color: active ? (surMedia ? "var(--on-media-gold)" : "var(--accent-text)") : (surMedia ? "var(--on-media-muted)" : "var(--text-muted)"), transition: "color var(--dur-hover) var(--ease)" }}>
            {l.label}
          </button>
          );
        })}
      </nav>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--s-5)", flex: "none" }}>
        <ThemeToggle />
        <button type="button" aria-label="Rechercher un chant" onClick={() => onNav("repertoire")} style={{ background: "none", border: "none", padding: 0, display: "grid", cursor: "pointer", color: surMedia ? "var(--on-media-muted)" : "var(--text-muted)" }}>
          <Icon name="search" size={20} />
        </button>
        <div style={{ position: "relative" }}>
          <button type="button" aria-label={unread ? unread + " nouvelles annonces" : "Annonces"} onClick={() => setOpenNotifs(!openNotifs)}
            style={{ position: "relative", background: "none", border: "none", padding: 0, display: "grid", cursor: "pointer", color: openNotifs || unread ? (surMedia ? "var(--on-media-gold)" : "var(--accent-text)") : (surMedia ? "var(--on-media-muted)" : "var(--text-muted)"), filter: unread ? "drop-shadow(0 0 16px rgba(233,185,73,0.25))" : "none" }}>
            <Icon name="bell" size={20} />
            {unread ? (
              <span style={{ position: "absolute", top: -4, right: -5, minWidth: 15, height: 15, padding: "0 4px", borderRadius: 999, background: "var(--gold-gradient)", color: "#000", fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 10, lineHeight: "15px", textAlign: "center" }}>{unread}</span>
            ) : null}
          </button>
          {openNotifs ? (
            <div style={{ position: "absolute", right: 0, top: "calc(100% + 14px)", width: 340, padding: "var(--s-2)", borderRadius: "var(--r-panel)", background: "var(--glass-card-bg)", backdropFilter: "blur(var(--glass-card-blur))", WebkitBackdropFilter: "blur(var(--glass-card-blur))", border: "var(--glass-card-border)", boxShadow: "var(--glass-card-inset)", display: "grid", gap: 2 }}>
              {notifs.map((n) => (
                <button key={n.id} type="button" onClick={() => { setOpenNotifs(false); onNav("accueil", "annonces"); }}
                  style={{ display: "grid", gap: 3, textAlign: "left", padding: "10px 12px", background: "none", border: "none", borderRadius: "var(--r-sm)", cursor: "pointer" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--text)" }}>
                    {n.unread ? <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold-500)", flex: "none" }} /> : null}
                    {n.title}
                  </span>
                  <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)" }}>{n.meta}</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <button type="button" aria-label="Mon compte" onClick={() => onNav("accueil", "connexion")} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "grid" }}>
          <Avatar name={profile?.display_name || (session ? session.user.email : "Invité")} size={32} lead={!!session} />
        </button>
      </div>
    </header>
  );
}

function SiteFooter({ onNav = () => {} }) {
  const mobile = useMobile();
  const info = ["Team Louange Marseille", "48 chants au répertoire", "répétition le jeudi, 19 h 30", "© 2026"];
  return (
    <footer style={{ position: "relative", overflow: "hidden", background: "var(--bg-deep)", borderTop: "1px solid var(--line)", padding: "var(--s-8) var(--s-6) var(--s-6)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--s-7)" }}>
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr", gap: "var(--s-6)" }}>
          <div style={{ display: "grid", gap: "var(--s-3)", alignContent: "start", gridColumn: mobile ? "1 / -1" : "auto" }}>
            <img src={ASSET("logo.png")} alt={BRAND} onClick={() => onNav("accueil")} style={{ height: 72, width: "auto", justifySelf: "start", cursor: "pointer" }} />
            <p style={{ margin: 0, maxWidth: "38ch", fontFamily: "var(--font-text)", fontSize: "var(--small)", lineHeight: "var(--small-lh)", color: "var(--text-muted)" }}>
              Le répertoire de nos assemblées : les chants, les listes du dimanche, au même endroit.
            </p>
          </div>
          {[
            { t: "Répertoire", l: [["Tous les chants", "repertoire"], ["Nouveautés", "repertoire"], ["Vidéos tutos", "tutos"], ["Événements", "events"]] },
            { t: "Programmation", l: [["Prochaines dates", "programmation"], ["Confirmer ma présence", "programmation"], ["Annonces", "accueil", "annonces"], ["Nous rejoindre", "accueil", "connexion"]] },
            { t: "Plateforme", l: [["Application", "accueil", "connexion"], ["Mode scène", "accueil"], ["Aide", "accueil"], ["Contact", "accueil"]] },
          ].map((c, ci) => (
            <div key={c.t} style={{ display: "grid", gap: "var(--s-3)", alignContent: "start", justifyItems: "start", gridColumn: mobile && ci === 2 ? "1 / -1" : "auto" }}>
              <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--text)" }}>{c.t}</span>
              <div style={{ display: "grid", gridTemplateColumns: mobile && ci === 2 ? "1fr 1fr" : "1fr", gap: "var(--s-3)", justifyItems: "start", width: "100%" }}>
                {c.l.map(([x, v, h]) => (
                  <button key={x} type="button" onClick={() => onNav(v, h)} style={{ background: "none", border: "none", padding: 0, textAlign: "left", cursor: "pointer", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-muted)" }}>{x}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", flexWrap: "wrap", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", lineHeight: "var(--caption-lh)", color: "var(--text-faint)" }}>
          {info.map((part, i) => (
            <React.Fragment key={i}>
              {i > 0 ? <span className="hairline" /> : null}
              <span>{part}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Reveal, Halo, SectionHead, ThemeToggle, SiteHeader, SiteFooter, TabBar, useMobile, cols, scroller, BRAND, NAVLINKS, TABS });
