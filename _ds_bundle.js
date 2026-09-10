/* @ds-bundle: {"format":4,"namespace":"ChantsDesignSystem_cafe14","components":[{"name":"AnnouncementCard","sourcePath":"components/content/AnnouncementCard.jsx"},{"name":"Banner","sourcePath":"components/content/Banner.jsx"},{"name":"SongCard","sourcePath":"components/content/SongCard.jsx"},{"name":"SongRow","sourcePath":"components/content/SongRow.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"FilterChip","sourcePath":"components/core/FilterChip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"KeyTag","sourcePath":"components/core/KeyTag.jsx"},{"name":"PosterTitle","sourcePath":"components/core/PosterTitle.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Sheet","sourcePath":"components/overlay/Sheet.jsx"},{"name":"Player","sourcePath":"components/player/Player.jsx"}],"sourceHashes":{"components/content/AnnouncementCard.jsx":"f367bdb2e45d","components/content/Banner.jsx":"772eadb3e9b9","components/content/SongCard.jsx":"72917e0b14a6","components/content/SongRow.jsx":"24f42bf2807c","components/core/Avatar.jsx":"126a86335991","components/core/Button.jsx":"ab8c8733725b","components/core/FilterChip.jsx":"ccebc50737c7","components/core/Icon.jsx":"4bf0da50abd8","components/core/KeyTag.jsx":"b426a08552f5","components/core/PosterTitle.jsx":"1c7dcd28c751","components/forms/SearchField.jsx":"a3d395d8d950","components/navigation/BottomNav.jsx":"bad73cb86074","components/navigation/Tabs.jsx":"bc42445a9fa7","components/overlay/Sheet.jsx":"1b605704c996","components/player/Player.jsx":"340358d43f31","ui_kits/app/Accueil.jsx":"d4c47f06361d","ui_kits/app/App.jsx":"1182fcb5032d","ui_kits/app/Catalogue.jsx":"70e0f349eb25","ui_kits/app/Fiche.jsx":"0536326e26e4","ui_kits/app/Shell.jsx":"b2dfbdb27975","ui_kits/app/data.js":"0e76055f38fd","ui_kits/site/Site.jsx":"b9c59fe89020","ui_kits/site/SiteAbout.jsx":"a38f15fe0518","ui_kits/site/SiteChrome.jsx":"daa26f3ddb39","ui_kits/site/SiteHero.jsx":"d914ed971c11","ui_kits/site/SitePages.jsx":"7b22fbb95c8e","ui_kits/site/SiteProgrammation.jsx":"3c95614aaec6","ui_kits/site/SiteSections.jsx":"6a581d104c80","ui_kits/site/SiteTutos.jsx":"170e89dd34f9","ui_kits/site/SiteWelcome.jsx":"b04d37833b6c","ui_kits/site/assets.js":"150f91a6f9da","ui_kits/site/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChantsDesignSystem_cafe14 = window.ChantsDesignSystem_cafe14 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/AnnouncementCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Carte d'annonce : glass-card sur un halo d'ambiance discret, pastille dorée si non lue. */
function AnnouncementCard({
  title,
  body,
  meta,
  unread = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "10%",
      top: "20%",
      width: 320,
      height: 320,
      borderRadius: "50%",
      filter: "blur(var(--glow-amb-blur))",
      opacity: 0.22,
      background: "radial-gradient(circle, rgba(233,185,73,0.9) 0%, transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "flex",
      gap: "var(--s-4)",
      padding: "var(--s-5)",
      borderRadius: "var(--r-panel)",
      background: "var(--glass-card-bg)",
      backdropFilter: "blur(var(--glass-card-blur))",
      WebkitBackdropFilter: "blur(var(--glass-card-blur))",
      border: "var(--glass-card-border)",
      boxShadow: "var(--glass-card-inset)",
      cursor: onClick ? "pointer" : "default",
      transform: hover && onClick ? "translateY(-2px)" : "none",
      transition: "transform var(--dur-hover) var(--ease)"
    }
  }, rest), unread ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      marginTop: 8,
      borderRadius: "50%",
      background: "var(--gold-500)",
      flex: "none"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--lead)",
      lineHeight: "var(--lead-lh)",
      color: "var(--text)"
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "62ch",
      fontFamily: "var(--font-text)",
      fontSize: "var(--small)",
      lineHeight: "var(--small-lh)",
      color: "var(--text-muted)"
    }
  }, body) : null, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)"
    }
  }, meta) : null)));
}
Object.assign(__ds_scope, { AnnouncementCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AnnouncementCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar circulaire. Bordure dorée en dégradé pour les responsables, neutre pour les membres. */
function Avatar({
  name = "",
  src = null,
  size = 40,
  lead = false,
  style,
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name || undefined,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      borderRadius: "50%",
      padding: 2,
      background: lead ? "var(--gold-gradient)" : "var(--line)",
      flex: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      overflow: "hidden",
      background: "var(--surface-2)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: Math.round(size * 0.34)
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bouton. `primary` = pilule dorée, texte noir, glow-md — un seul par écran.
 * `secondary` = verre. `tertiary` = texte doré souligné au survol.
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const h = size === "sm" ? 40 : size === "mobile" ? 44 : 48;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--s-2)",
    height: h,
    padding: variant === "tertiary" ? 0 : `0 ${size === "sm" ? 18 : 24}px`,
    borderRadius: "var(--r-pill)",
    fontFamily: "var(--font-ui)",
    fontSize: size === "sm" ? "var(--small)" : "var(--body)",
    fontWeight: 600,
    lineHeight: 1,
    whiteSpace: "nowrap",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.38 : 1,
    transition: "transform var(--dur-hover) var(--ease), box-shadow var(--dur-hover) var(--ease), border-color var(--dur-hover) var(--ease), background var(--dur-hover) var(--ease)",
    background: "transparent",
    color: "var(--text)"
  };
  const variants = {
    primary: {
      background: "var(--gold-gradient)",
      color: "#000",
      boxShadow: disabled ? "none" : "var(--glow-md)",
      transform: hover && !disabled ? "translateY(-1px)" : "none"
    },
    secondary: {
      background: "var(--glass-pill-bg)",
      backdropFilter: "blur(var(--glass-pill-blur))",
      WebkitBackdropFilter: "blur(var(--glass-pill-blur))",
      border: "var(--glass-pill-border)",
      color: "var(--text)",
      borderColor: hover && !disabled ? "var(--gold-500)" : undefined,
      boxShadow: hover && !disabled ? "var(--glow-sm)" : "none"
    },
    tertiary: {
      color: "var(--accent-text)",
      height: "auto",
      textDecoration: hover && !disabled ? "underline" : "none",
      textUnderlineOffset: "4px"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pastille de filtre : 32 px, surface-2 au repos, doré plein et texte noir à l'état actif. */
function FilterChip({
  active = false,
  disabled = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": active,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height: 32,
      padding: "0 14px",
      borderRadius: "var(--r-pill)",
      border: "1px solid " + (active ? "transparent" : "var(--chip-line)"),
      background: active ? "var(--gold-gradient)" : "var(--chip-bg)",
      boxShadow: active ? "var(--chip-glow)" : "none",
      color: active ? "#000" : hover ? "var(--chip-ink-hover)" : "var(--chip-ink)",
      fontFamily: "var(--font-ui)",
      fontWeight: active ? 600 : 500,
      fontSize: "var(--small)",
      lineHeight: 1,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      whiteSpace: "nowrap",
      transition: "background var(--dur-hover) var(--ease), color var(--dur-hover) var(--ease), border-color var(--dur-hover) var(--ease), box-shadow var(--dur-hover) var(--ease)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PASCAL = n => n.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
function iconChildren(name) {
  const set = typeof window !== "undefined" && window.lucide && window.lucide.icons || null;
  if (!set) return null;
  const node = set[PASCAL(name)] || set[name];
  if (!Array.isArray(node)) return null;
  if (node[0] === "svg") return Array.isArray(node[2]) ? node[2] : null;
  return node;
}

/** Wrapper autour du jeu Lucide chargé par CDN (window.lucide). */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  style,
  ...rest
}) {
  const kids = iconChildren(name);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    "data-lucide": kids ? undefined : name,
    style: {
      display: "block",
      flex: "none",
      ...style
    }
  }, rest), kids ? kids.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })) : null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bannière : 16:9 desktop, 4:3 mobile. Image à droite, halo doré derrière, contenu à gauche. */
function Banner({
  overline,
  title,
  description,
  actionLabel = "Lancer le chant",
  onAction,
  image = null,
  mobile = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--r-panel)",
      background: "var(--surface-1)",
      aspectRatio: mobile ? "auto" : "16 / 9",
      minHeight: mobile ? 260 : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: mobile ? "-10%" : "6%",
      top: "50%",
      width: "var(--glow-amb-size)",
      height: "var(--glow-amb-size)",
      transform: "translateY(-50%)",
      borderRadius: "50%",
      filter: "blur(var(--glow-amb-blur))",
      opacity: "var(--glow-amb-opacity)",
      background: "radial-gradient(circle, rgba(233,185,73,0.9) 0%, rgba(233,185,73,0.25) 45%, transparent 70%)",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 1
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      height: "100%",
      width: mobile ? "100%" : "62%",
      objectFit: "cover"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: mobile ? "linear-gradient(0deg, var(--bg) 12%, rgba(10,10,12,0.65) 55%, transparent 100%)" : "linear-gradient(90deg, var(--bg) 8%, rgba(10,10,12,0.82) 42%, transparent 78%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      height: mobile ? "auto" : "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: mobile ? "flex-end" : "center",
      gap: "var(--s-4)",
      padding: mobile ? "var(--s-4)" : "var(--s-7)",
      maxWidth: mobile ? "100%" : "56%"
    }
  }, overline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--accent-text)"
    }
  }, overline) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-affiche)",
      fontWeight: 800,
      fontStretch: "125%",
      fontVariationSettings: '"wdth" 125, "wght" 800',
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      color: "var(--white)",
      fontSize: mobile ? "var(--display-m)" : "var(--display-l)",
      lineHeight: mobile ? "var(--display-m-lh)" : "var(--display-l-lh)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "48ch",
      fontFamily: "var(--font-text)",
      fontSize: "var(--body)",
      lineHeight: "var(--body-lh)",
      color: "var(--text-muted)"
    }
  }, description) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: mobile ? "mobile" : "md",
    fullWidth: mobile,
    onClick: onAction,
    iconLeft: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "play",
      size: 18,
      strokeWidth: 2.5
    })
  }, actionLabel))));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Banner.jsx", error: String((e && e.message) || e) }); }

// components/core/KeyTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Étiquette de tonalité : pilule 24 px, bordure et texte dorés, fond transparent. */
function KeyTag({
  children,
  size = "md",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: size === "sm" ? 20 : 24,
      padding: "0 10px",
      borderRadius: "var(--r-pill)",
      border: "1px solid var(--accent-text)",
      color: "var(--accent-text)",
      background: "transparent",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--caption)",
      lineHeight: 1,
      letterSpacing: "0.01em",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { KeyTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/KeyTag.jsx", error: String((e && e.message) || e) }); }

// components/content/SongCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Repli sans pochette : aplat en dégradé doré sombre, initiale en police Affiche à 40 %. */
function CoverFallback({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--cover-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-affiche)",
      fontWeight: 800,
      fontStretch: "125%",
      fontVariationSettings: '"wdth" 125, "wght" 800',
      fontSize: "44%",
      lineHeight: 1,
      textTransform: "uppercase",
      color: "var(--cover-ink)"
    }
  }, (title || "?").trim()[0]));
}

/** Carte de chant en grille : pochette carrée, titre sur deux lignes, tonalité et durée en caption. */
function SongCard({
  title,
  author,
  songKey,
  duration,
  cover = null,
  onPlay,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "button",
    tabIndex: 0,
    onClick: onClick,
    onKeyDown: e => (e.key === "Enter" || e.key === " ") && onClick && onClick(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gap: "var(--s-3)",
      cursor: "pointer",
      transform: hover ? "translateY(-4px)" : "none",
      filter: hover ? "drop-shadow(0 0 16px rgba(233,185,73,0.25))" : "none",
      transition: "transform var(--dur-hover) var(--ease), filter var(--dur-hover) var(--ease)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / 1",
      borderRadius: "var(--r-card)",
      overflow: "hidden",
      background: "var(--surface-1)",
      boxShadow: "var(--cover-shadow)",
      fontSize: 160
    }
  }, cover ? /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement(CoverFallback, {
    title: title
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Lancer " + title,
    onClick: e => {
      e.stopPropagation();
      onPlay && onPlay();
    },
    style: {
      position: "absolute",
      right: 12,
      bottom: 12,
      width: 44,
      height: 44,
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      border: "none",
      background: "var(--gold-gradient)",
      color: "#000",
      cursor: "pointer",
      opacity: hover ? 1 : 0,
      transform: hover ? "translateY(0)" : "translateY(6px)",
      transition: "opacity var(--dur-hover) var(--ease), transform var(--dur-hover) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 20,
    strokeWidth: 2.5
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      lineHeight: "var(--small-lh)",
      color: "var(--text)",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-2)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      lineHeight: "var(--caption-lh)",
      color: "var(--text-faint)"
    }
  }, songKey ? /*#__PURE__*/React.createElement(__ds_scope.KeyTag, {
    size: "sm"
  }, songKey) : null, duration ? /*#__PURE__*/React.createElement("span", null, duration) : null, author && !songKey ? /*#__PURE__*/React.createElement("span", null, author) : null)));
}
Object.assign(__ds_scope, { SongCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SongCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SongRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dégradés parcourus au survol — un ton différent à chaque passage de la souris. */
const HOVER_FILLS = ["linear-gradient(135deg, #FBE9A8 0%, #E9B949 45%, #B0842A 100%)", "linear-gradient(135deg, #E9B949 0%, #C8912F 48%, #8A6614 100%)", "linear-gradient(135deg, #FFF3C9 0%, #F0CB6A 45%, #C89A33 100%)", "linear-gradient(135deg, #D9A93F 0%, #B0842A 50%, #6E5010 100%)"];

/**
 * Ligne de chant. `variant="pill"` : rangée en pilule, pochette ronde, valeur à droite,
 * remplissage doré et halo au survol (le ton change à chaque passage).
 */
function useNarrow() {
  const q = "(max-width:760px)";
  const force = typeof document !== "undefined" && document.documentElement.hasAttribute("data-force-mobile");
  const [m, setM] = React.useState(() => force || typeof window !== "undefined" && window.matchMedia(q).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const h = () => setM(force || mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, [force]);
  return m;
}
function SongRow({
  index = null,
  title,
  author,
  songKey,
  duration,
  cover = null,
  active = false,
  variant = "list",
  onClick,
  onPlay,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const fill = React.useRef(0);
  const [fillIndex, setFillIndex] = React.useState(0);
  const narrow = useNarrow();
  const enter = () => {
    if (variant === "pill") {
      setFillIndex(fill.current % HOVER_FILLS.length);
      fill.current += 1;
    }
    setHover(true);
  };
  if (variant === "pill") {
    const lit = hover || active;
    const ink = lit ? "#0F0E0B" : "var(--text)";
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "button",
      tabIndex: 0,
      onClick: onClick,
      onKeyDown: e => (e.key === "Enter" || e.key === " ") && onClick && onClick(),
      onMouseEnter: enter,
      onMouseLeave: () => setHover(false),
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "var(--s-4)",
        height: narrow ? 64 : 72,
        padding: narrow ? "0 10px 0 8px" : "0 var(--s-5) 0 12px",
        borderRadius: "var(--r-pill)",
        background: lit ? HOVER_FILLS[fillIndex] : "var(--row-bg)",
        border: "1px solid " + (lit ? "transparent" : "var(--row-line)"),
        boxShadow: lit ? "0 0 0 1px rgba(233,185,73,0.45), 0 0 32px rgba(233,185,73,0.35), 0 0 90px rgba(233,185,73,0.18)" : "var(--row-shadow)",
        transform: lit ? "translateY(-2px)" : "none",
        cursor: "pointer",
        transition: "background var(--dur-hover) var(--ease), box-shadow var(--dur-hover) var(--ease), transform var(--dur-hover) var(--ease), border-color var(--dur-hover) var(--ease)",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: narrow ? 40 : 48,
        height: narrow ? 40 : 48,
        flex: "none",
        borderRadius: "50%",
        overflow: "hidden",
        background: cover ? "var(--surface-2)" : "var(--cover-bg)",
        border: "1px solid " + (lit ? "rgba(15,14,11,0.18)" : "var(--line)"),
        boxShadow: lit ? "none" : "var(--cover-shadow)",
        display: "grid",
        placeItems: "center"
      }
    }, cover ? /*#__PURE__*/React.createElement("img", {
      src: cover,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-affiche)",
        fontWeight: 800,
        fontStretch: "125%",
        fontVariationSettings: '"wdth" 125, "wght" 800',
        fontSize: 20,
        color: "var(--cover-ink)",
        textTransform: "uppercase"
      }
    }, (title || "?").trim()[0])), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "grid",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: 600,
        fontSize: "var(--lead)",
        lineHeight: "24px",
        color: ink,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: 500,
        fontSize: "var(--small)",
        lineHeight: "20px",
        color: lit ? "rgba(15,14,11,0.66)" : "var(--text-muted)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, author, index !== null ? " · nº " + index : "", narrow && duration ? " · " + duration : "")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: narrow ? "var(--s-2)" : "var(--s-4)",
        flex: "none"
      }
    }, songKey ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        height: 26,
        padding: "0 12px",
        borderRadius: "var(--r-pill)",
        border: "1px solid " + (lit ? "rgba(15,14,11,0.26)" : "var(--accent-text)"),
        color: lit ? "#0F0E0B" : "var(--accent-text)",
        fontFamily: "var(--font-ui)",
        fontWeight: 600,
        fontSize: "var(--caption)",
        lineHeight: 1
      }
    }, songKey) : null, duration && !narrow ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: 600,
        fontSize: "var(--small)",
        color: lit ? "#0F0E0B" : "var(--text-faint)",
        fontVariantNumeric: "tabular-nums"
      }
    }, duration) : null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Lancer " + title,
      onClick: e => {
        e.stopPropagation();
        onPlay && onPlay();
      },
      style: {
        width: 40,
        height: 40,
        display: "grid",
        placeItems: "center",
        borderRadius: "50%",
        border: "none",
        background: lit ? "rgba(15,14,11,0.92)" : "var(--surface-2)",
        color: lit ? "#fff" : "var(--text-muted)",
        cursor: "pointer",
        transition: "background var(--dur-hover) var(--ease), color var(--dur-hover) var(--ease)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "play",
      size: 18,
      strokeWidth: 2.5
    }))));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "button",
    tabIndex: 0,
    onClick: onClick,
    onKeyDown: e => (e.key === "Enter" || e.key === " ") && onClick && onClick(),
    onMouseEnter: enter,
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-4)",
      height: "var(--row-h)",
      padding: "0 var(--s-3)",
      borderRadius: "var(--r-sm)",
      background: hover || active ? "var(--surface-2)" : "transparent",
      cursor: "pointer",
      transition: "background var(--dur-hover) var(--ease)",
      ...style
    }
  }, rest), index !== null ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      textAlign: "right",
      flex: "none",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--small)",
      color: active ? "var(--accent-text)" : "var(--text-faint)",
      fontVariantNumeric: "tabular-nums"
    }
  }, index) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      flex: "none",
      borderRadius: "var(--r-sm)",
      overflow: "hidden",
      background: cover ? "var(--surface-1)" : "var(--cover-bg)",
      display: "grid",
      placeItems: "center"
    }
  }, cover ? /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-affiche)",
      fontWeight: 800,
      fontStretch: "125%",
      fontVariationSettings: '"wdth" 125, "wght" 800',
      fontSize: 18,
      color: "#fff",
      opacity: 0.4,
      textTransform: "uppercase"
    }
  }, (title || "?").trim()[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      lineHeight: "20px",
      color: active ? "var(--accent-text)" : "var(--text)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), author ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      lineHeight: "18px",
      color: "var(--text-muted)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, author) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-4)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: hover ? "flex" : "none",
      gap: "var(--s-3)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Lancer " + title,
    onClick: e => {
      e.stopPropagation();
      onPlay && onPlay();
    },
    style: {
      background: "none",
      border: "none",
      color: "inherit",
      cursor: "pointer",
      padding: 0,
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 18
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "list-plus",
    size: 18
  })), songKey ? /*#__PURE__*/React.createElement(__ds_scope.KeyTag, {
    size: "sm"
  }, songKey) : null, duration ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      textAlign: "right",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)",
      fontVariantNumeric: "tabular-nums"
    }
  }, duration) : null));
}
Object.assign(__ds_scope, { SongRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SongRow.jsx", error: String((e && e.message) || e) }); }

// components/core/PosterTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bloc d'affiche : le seul élément en police Affiche d'un écran.
 * `fill="gold"` applique le dégradé doré — réservé au bloc principal.
 */
function PosterTitle({
  size = "l",
  fill = "white",
  overline = null,
  infoLine = null,
  children,
  style,
  ...rest
}) {
  const sizes = {
    xl: {
      fontSize: "var(--display-xl)",
      lineHeight: "var(--display-xl-lh)"
    },
    l: {
      fontSize: "var(--display-l)",
      lineHeight: "var(--display-l-lh)"
    },
    m: {
      fontSize: "var(--display-m)",
      lineHeight: "var(--display-m-lh)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: "var(--s-4)",
      ...style
    }
  }, rest), overline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      lineHeight: "var(--small-lh)",
      color: "var(--accent-text)"
    }
  }, overline) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-affiche)",
      fontWeight: 800,
      fontStretch: "125%",
      fontVariationSettings: '"wdth" 125, "wght" 800',
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      color: fill === "gold" ? "transparent" : "var(--white)",
      background: fill === "gold" ? "var(--gold-gradient)" : undefined,
      WebkitBackgroundClip: fill === "gold" ? "text" : undefined,
      backgroundClip: fill === "gold" ? "text" : undefined,
      WebkitTextFillColor: fill === "gold" ? "transparent" : undefined,
      ...sizes[size]
    }
  }, children), infoLine ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      lineHeight: "var(--caption-lh)",
      color: "var(--text-faint)"
    }
  }, (Array.isArray(infoLine) ? infoLine : [infoLine]).map((part, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1,
      background: "var(--line)",
      flex: "none"
    }
  }) : null, /*#__PURE__*/React.createElement("span", null, part)))) : null);
}
Object.assign(__ds_scope, { PosterTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PosterTitle.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Champ de recherche : pilule, surface-2, 480 px au repos, 640 px au focus avec liseré doré. */
function SearchField({
  value,
  onChange,
  placeholder = "Rechercher un chant, un auteur, une tonalité",
  width = 480,
  focusWidth = 640,
  suggestions = [],
  fullWidth = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const open = focus && suggestions.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: fullWidth ? "100%" : focus ? focusWidth : width,
      transition: "width var(--dur-hover) var(--ease)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      height: 44,
      padding: "0 18px",
      borderRadius: "var(--r-pill)",
      background: "var(--surface-2)",
      border: "1px solid " + (focus ? "var(--gold-500)" : "var(--line)"),
      boxShadow: focus ? "var(--glow-sm)" : "none",
      transition: "border-color var(--dur-hover) var(--ease), box-shadow var(--dur-hover) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: focus ? "var(--accent-text)" : "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18
  })), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setTimeout(() => setFocus(false), 120),
    style: {
      flex: 1,
      minWidth: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      color: "var(--text)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--small)"
    }
  }, rest))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      left: 0,
      right: 0,
      padding: "var(--s-2)",
      borderRadius: "var(--r-panel)",
      background: "var(--glass-card-bg)",
      backdropFilter: "blur(var(--glass-card-blur))",
      WebkitBackdropFilter: "blur(var(--glass-card-blur))",
      border: "var(--glass-card-border)",
      boxShadow: "var(--glass-card-inset)",
      zIndex: 40
    }
  }, suggestions.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onMouseDown: () => onChange && onChange(typeof s === "string" ? s : s.title),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--s-3)",
      width: "100%",
      padding: "10px 12px",
      background: "transparent",
      border: "none",
      borderRadius: "var(--r-sm)",
      color: "var(--text)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--small)",
      textAlign: "left",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", null, typeof s === "string" ? s : s.title), typeof s === "object" && s.meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      fontSize: "var(--caption)"
    }
  }, s.meta) : null))) : null);
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Navigation basse mobile : pilule en verre flottante à 16 px du bord, cinq entrées maximum. */
function BottomNav({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: "absolute",
      left: "var(--mobile-margin)",
      right: "var(--mobile-margin)",
      bottom: "var(--mobile-margin)",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--s-1)",
      padding: "8px 10px",
      borderRadius: "var(--r-pill)",
      background: "var(--glass-pill-bg)",
      backdropFilter: "blur(var(--glass-pill-blur))",
      WebkitBackdropFilter: "blur(var(--glass-pill-blur))",
      border: "var(--glass-pill-border)",
      zIndex: 30,
      ...style
    }
  }, rest), items.slice(0, 5).map(item => {
    const active = item.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      type: "button",
      "aria-current": active ? "page" : undefined,
      onClick: () => onChange && onChange(item.id),
      style: {
        flex: 1,
        minWidth: 44,
        height: 44,
        display: "grid",
        placeItems: "center",
        gap: 2,
        background: "none",
        border: "none",
        borderRadius: "var(--r-pill)",
        cursor: "pointer",
        color: active ? "var(--accent-text)" : "var(--text-muted)",
        filter: active ? "drop-shadow(0 0 16px rgba(233,185,73,0.25))" : "none",
        transition: "color var(--dur-hover) var(--ease)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: active ? 600 : 500,
        fontSize: 10,
        lineHeight: 1
      }
    }, item.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Onglets : libellés en small, soulignement doré de 2 px sur l'onglet actif, 200 ms. */
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--s-5)",
      borderBottom: "1px solid var(--line)",
      ...style
    }
  }, rest), items.map(item => {
    const id = typeof item === "string" ? item : item.id;
    const label = typeof item === "string" ? item : item.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        position: "relative",
        padding: "0 0 12px",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-ui)",
        fontWeight: active ? 600 : 500,
        fontSize: "var(--small)",
        lineHeight: "var(--small-lh)",
        color: active ? "var(--text)" : "var(--text-muted)",
        transition: "color var(--dur-hover) var(--ease)"
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: "var(--gold-500)",
        opacity: active ? 1 : 0,
        transition: "opacity var(--dur-hover) var(--ease)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Sheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Modale (desktop, centrée) ou feuille (mobile, ancrée en bas, poignée de 40 px). */
function Sheet({
  open = true,
  title,
  mobile = false,
  onClose,
  footer = null,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  const panel = {
    position: "relative",
    width: mobile ? "100%" : 520,
    maxWidth: "100%",
    padding: "var(--s-5)",
    background: "var(--glass-nav-bg)",
    backdropFilter: "blur(var(--glass-nav-blur))",
    WebkitBackdropFilter: "blur(var(--glass-nav-blur))",
    border: "var(--glass-nav-border)",
    borderRadius: mobile ? "var(--r-panel) var(--r-panel) 0 0" : "var(--r-panel)",
    color: "var(--text)",
    display: "grid",
    gap: "var(--s-4)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: mobile ? "flex-end" : "center",
      justifyContent: "center",
      background: "rgba(5,5,6,0.6)",
      ...style
    },
    onClick: onClose
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: panel,
    onClick: e => e.stopPropagation()
  }, mobile ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: "rgba(255,255,255,0.24)",
      justifySelf: "center"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--s-4)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--subtitle)",
      lineHeight: "var(--subtitle-lh)"
    }
  }, title), mobile ? null : /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fermer",
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      cursor: "pointer",
      padding: 0,
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", null, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-3)",
      justifyContent: "flex-end"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/player/Player.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lecteur : pilule en verre ancrée en bas, visible seulement quand un chant est lancé. */
function Player({
  title,
  author,
  cover = null,
  duration = "",
  progress = 0,
  playing = true,
  mobile = false,
  onToggle,
  onClose,
  style,
  ...rest
}) {
  const h = mobile ? 56 : 72;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "absolute",
      left: "var(--mobile-margin)",
      right: "var(--mobile-margin)",
      bottom: mobile ? 76 : 24,
      display: "flex",
      alignItems: "center",
      gap: mobile ? "var(--s-3)" : "var(--s-4)",
      height: h,
      padding: mobile ? "0 8px 0 8px" : "0 var(--s-5) 0 8px",
      borderRadius: "var(--r-pill)",
      background: "var(--glass-pill-bg)",
      backdropFilter: "blur(var(--glass-pill-blur))",
      WebkitBackdropFilter: "blur(var(--glass-pill-blur))",
      border: "var(--glass-pill-border)",
      zIndex: 35,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": playing ? "Mettre en pause" : "Lancer",
    onClick: onToggle,
    style: {
      width: h - 16,
      height: h - 16,
      flex: "none",
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      border: "none",
      background: "var(--gold-gradient)",
      color: "#000",
      boxShadow: "var(--glow-md)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: playing ? "pause" : "play",
    size: mobile ? 20 : 24,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: h - 24,
      height: h - 24,
      flex: "none",
      borderRadius: "var(--r-sm)",
      overflow: "hidden",
      background: cover ? "var(--surface-1)" : "var(--gold-gradient-dim)",
      display: "grid",
      placeItems: "center"
    }
  }, cover ? /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-affiche)",
      fontWeight: 800,
      fontStretch: "125%",
      fontVariationSettings: '"wdth" 125, "wght" 800',
      fontSize: 16,
      color: "#fff",
      opacity: 0.4,
      textTransform: "uppercase"
    }
  }, (title || "?").trim()[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      lineHeight: "18px",
      color: "var(--text)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), mobile ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      lineHeight: "16px",
      color: "var(--text-muted)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, author), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      height: 2,
      borderRadius: 2,
      background: "rgba(255,255,255,0.14)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: "0 auto 0 0",
      width: Math.max(0, Math.min(100, progress)) + "%",
      borderRadius: 2,
      background: "var(--gold-500)"
    }
  }))), duration && !mobile ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)",
      fontVariantNumeric: "tabular-nums"
    }
  }, duration) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fermer le lecteur",
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      cursor: "pointer",
      padding: 0,
      display: "grid",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: mobile ? "x" : "chevron-up",
    size: 20
  })));
}
Object.assign(__ds_scope, { Player });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/player/Player.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Accueil.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Banner,
  SongCard,
  SongRow,
  AnnouncementCard,
  Button,
  Icon
} = window.ChantsDesignSystem_cafe14;
function Accueil({
  mobile = false,
  onOpen,
  onPlay
}) {
  const songs = window.CHANTS;
  if (mobile) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--s-7)",
        padding: "var(--s-4) var(--mobile-margin) 160px"
      }
    }, /*#__PURE__*/React.createElement(Banner, {
      mobile: true,
      overline: "Recueil de septembre",
      title: "\xC9l\xE9vation",
      description: "Douze chants pour ouvrir le temps de louange.",
      onAction: () => onPlay(songs[1])
    }), /*#__PURE__*/React.createElement(SectionRow, {
      title: "Les plus repris",
      onAction: () => onOpen("catalogue")
    }, /*#__PURE__*/React.createElement(Scroller, null, songs.slice(0, 5).map(s => /*#__PURE__*/React.createElement(SongCard, _extends({
      key: s.id
    }, s, {
      onClick: () => onOpen("fiche", s),
      onPlay: () => onPlay(s)
    }))))), /*#__PURE__*/React.createElement(SectionRow, {
      title: "Ajout\xE9s cette semaine",
      onAction: () => onOpen("catalogue")
    }, /*#__PURE__*/React.createElement(Scroller, null, songs.slice(5).map(s => /*#__PURE__*/React.createElement(SongCard, _extends({
      key: s.id
    }, s, {
      onClick: () => onOpen("fiche", s),
      onPlay: () => onPlay(s)
    }))))), /*#__PURE__*/React.createElement(SectionRow, {
      title: "Annonces",
      action: null
    }, /*#__PURE__*/React.createElement(AnnouncementCard, {
      unread: true,
      title: "R\xE9p\xE9tition d\xE9plac\xE9e \xE0 jeudi",
      body: "M\xEAme salle, 19 h 30. Apportez les partitions du recueil de septembre.",
      meta: "Claire \xB7 2 septembre"
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--row-gap)",
      padding: "var(--s-6) var(--s-6) 140px",
      maxWidth: "var(--content-max)"
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    overline: "Recueil de septembre",
    title: "\xC9l\xE9vation",
    description: "Douze chants pour ouvrir le temps de louange, du plus sobre au plus ample.",
    onAction: () => onPlay(songs[1])
  }), /*#__PURE__*/React.createElement(SectionRow, {
    title: "Les plus repris",
    onAction: () => onOpen("catalogue")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "var(--gutter)"
    }
  }, songs.slice(0, 5).map(s => /*#__PURE__*/React.createElement(SongCard, _extends({
    key: s.id
  }, s, {
    onClick: () => onOpen("fiche", s),
    onPlay: () => onPlay(s)
  }))))), /*#__PURE__*/React.createElement(SectionRow, {
    title: "Liste du dimanche 7 septembre",
    action: "Ouvrir la liste",
    onAction: () => onOpen("catalogue")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0 var(--gutter)"
    }
  }, songs.slice(0, 6).map((s, i) => /*#__PURE__*/React.createElement(SongRow, _extends({
    key: s.id,
    index: i + 1
  }, s, {
    onClick: () => onOpen("fiche", s),
    onPlay: () => onPlay(s)
  }))))), /*#__PURE__*/React.createElement(SectionRow, {
    title: "Annonces",
    action: null
  }, /*#__PURE__*/React.createElement(AnnouncementCard, {
    unread: true,
    title: "R\xE9p\xE9tition d\xE9plac\xE9e \xE0 jeudi",
    body: "M\xEAme salle, 19 h 30. Apportez les partitions du recueil de septembre.",
    meta: "Claire \xB7 2 septembre"
  })));
}
Object.assign(window, {
  Accueil
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Accueil.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
const {
  Player,
  BottomNav
} = window.ChantsDesignSystem_cafe14;
function useApp(initial) {
  const [screen, setScreen] = React.useState(initial);
  const [song, setSong] = React.useState(null);
  const [now, setNow] = React.useState(null);
  const [playing, setPlaying] = React.useState(true);
  const open = (s, payload) => {
    if (payload) setSong(payload);
    setScreen(s);
  };
  const play = s => {
    setNow(s);
    setPlaying(true);
  };
  return {
    screen,
    song,
    now,
    playing,
    setPlaying,
    setNow,
    open,
    play
  };
}
function DesktopApp() {
  const app = useApp("accueil");
  const [query, setQuery] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      minHeight: "100vh",
      background: "var(--bg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "grain",
    style: {
      position: "fixed",
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement(Sidebar, {
    screen: app.screen,
    onNavigate: s => app.open(s)
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    query: query,
    onQuery: setQuery
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, app.screen === "accueil" ? /*#__PURE__*/React.createElement(Accueil, {
    onOpen: app.open,
    onPlay: app.play
  }) : null, app.screen === "catalogue" || app.screen === "listes" || app.screen === "equipe" ? /*#__PURE__*/React.createElement(Catalogue, {
    onOpen: app.open,
    onPlay: app.play
  }) : null, app.screen === "fiche" ? /*#__PURE__*/React.createElement(Fiche, {
    song: app.song,
    onPlay: app.play
  }) : null)), app.now ? /*#__PURE__*/React.createElement(Player, {
    title: app.now.title,
    author: app.now.author,
    songKey: app.now.songKey,
    duration: app.now.duration,
    progress: 38,
    playing: app.playing,
    onToggle: () => app.setPlaying(!app.playing),
    onClose: () => app.setNow(null),
    style: {
      position: "fixed",
      left: "calc(var(--sidebar-w) + var(--s-6))",
      right: "var(--s-6)",
      bottom: "var(--s-5)"
    }
  }) : null);
}
function MobileApp() {
  const app = useApp("accueil");
  const titles = {
    accueil: "",
    catalogue: "Catalogue",
    listes: "Listes du dimanche",
    equipe: "Équipe",
    fiche: app.song ? app.song.title : ""
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      height: 844,
      borderRadius: 40,
      overflow: "hidden",
      background: "var(--bg)",
      border: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "grain",
    style: {
      position: "absolute",
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement(MobileHeader, {
    title: titles[app.screen],
    onBack: app.screen === "fiche" ? () => app.open("catalogue") : null
  }), app.screen === "accueil" ? /*#__PURE__*/React.createElement(Accueil, {
    mobile: true,
    onOpen: app.open,
    onPlay: app.play
  }) : null, app.screen === "catalogue" || app.screen === "listes" || app.screen === "equipe" ? /*#__PURE__*/React.createElement(Catalogue, {
    mobile: true,
    onOpen: app.open,
    onPlay: app.play
  }) : null, app.screen === "fiche" ? /*#__PURE__*/React.createElement(Fiche, {
    mobile: true,
    song: app.song,
    onPlay: app.play,
    onBack: () => app.open("catalogue")
  }) : null), app.now ? /*#__PURE__*/React.createElement(Player, {
    mobile: true,
    title: app.now.title,
    author: app.now.author,
    duration: app.now.duration,
    progress: 38,
    playing: app.playing,
    onToggle: () => app.setPlaying(!app.playing),
    onClose: () => app.setNow(null)
  }) : null, /*#__PURE__*/React.createElement(BottomNav, {
    value: app.screen === "fiche" ? "catalogue" : app.screen,
    onChange: s => app.open(s),
    items: [{
      id: "accueil",
      label: "Accueil",
      icon: "house"
    }, {
      id: "catalogue",
      label: "Catalogue",
      icon: "library-big"
    }, {
      id: "listes",
      label: "Listes",
      icon: "list-music"
    }, {
      id: "equipe",
      label: "Équipe",
      icon: "users"
    }]
  }));
}
Object.assign(window, {
  DesktopApp,
  MobileApp,
  useApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Catalogue.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  PosterTitle,
  SongCard,
  SongRow,
  FilterChip,
  Tabs,
  Icon,
  SearchField
} = window.ChantsDesignSystem_cafe14;
const THEMES = ["Louange", "Adoration", "Communion", "Envoi", "Avent", "Enfants"];
function Catalogue({
  mobile = false,
  onOpen,
  onPlay
}) {
  const [theme, setTheme] = React.useState("Louange");
  const [view, setView] = React.useState("liste");
  const [q, setQ] = React.useState("");
  const songs = window.CHANTS.filter(s => s.title.toLowerCase().includes(q.toLowerCase()));
  const filters = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)",
      overflowX: "auto",
      scrollbarWidth: "none",
      padding: mobile ? "0 var(--mobile-margin)" : 0,
      margin: mobile ? "0 calc(-1 * var(--mobile-margin))" : 0
    }
  }, THEMES.map(t => /*#__PURE__*/React.createElement(FilterChip, {
    key: t,
    active: t === theme,
    onClick: () => setTheme(t)
  }, t)));
  if (mobile) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--s-5)",
        padding: "var(--s-4) var(--mobile-margin) 160px"
      }
    }, /*#__PURE__*/React.createElement(PosterTitle, {
      size: "m",
      fill: "gold",
      overline: "Catalogue",
      infoLine: [songs.length + " chants", "Do à Si", "tonalités transposables"]
    }, "Catalogue"), /*#__PURE__*/React.createElement(SearchField, {
      fullWidth: true,
      value: q,
      onChange: setQ,
      placeholder: "Rechercher un chant"
    }), filters, /*#__PURE__*/React.createElement(Tabs, {
      items: [{
        id: "liste",
        label: "Liste"
      }, {
        id: "grille",
        label: "Grille"
      }],
      value: view,
      onChange: setView
    }), view === "liste" ? /*#__PURE__*/React.createElement("div", null, songs.map((s, i) => /*#__PURE__*/React.createElement(SongRow, _extends({
      key: s.id,
      index: i + 1
    }, s, {
      onClick: () => onOpen("fiche", s),
      onPlay: () => onPlay(s)
    })))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--s-4)"
      }
    }, songs.map(s => /*#__PURE__*/React.createElement(SongCard, _extends({
      key: s.id
    }, s, {
      onClick: () => onOpen("fiche", s),
      onPlay: () => onPlay(s)
    })))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-6)",
      padding: "var(--s-6) var(--s-6) 140px",
      maxWidth: "var(--content-max)"
    }
  }, /*#__PURE__*/React.createElement(PosterTitle, {
    size: "l",
    fill: "gold",
    overline: "Catalogue",
    infoLine: [window.CHANTS.length + " chants", "Do à Si", "mis à jour le 2 septembre"]
  }, "Catalogue"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--s-5)"
    }
  }, filters, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: "liste",
      label: "Liste"
    }, {
      id: "grille",
      label: "Grille"
    }],
    value: view,
    onChange: setView,
    style: {
      border: "none"
    }
  })), view === "liste" ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-4)",
      padding: "0 var(--s-3) var(--s-2)",
      borderBottom: "1px solid var(--line)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      textAlign: "right"
    }
  }, "#"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "Titre"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 92
    }
  }, "Tonalit\xE9"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      textAlign: "right"
    }
  }, "Dur\xE9e")), songs.map((s, i) => /*#__PURE__*/React.createElement(SongRow, _extends({
    key: s.id,
    index: i + 1
  }, s, {
    onClick: () => onOpen("fiche", s),
    onPlay: () => onPlay(s)
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "var(--gutter)"
    }
  }, songs.map(s => /*#__PURE__*/React.createElement(SongCard, _extends({
    key: s.id
  }, s, {
    onClick: () => onOpen("fiche", s),
    onPlay: () => onPlay(s)
  })))));
}
Object.assign(window, {
  Catalogue
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Catalogue.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Fiche.jsx
try { (() => {
const {
  PosterTitle,
  Button,
  Icon,
  KeyTag,
  Tabs,
  Sheet,
  SongRow,
  Avatar
} = window.ChantsDesignSystem_cafe14;
function Cover({
  size,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flex: "none",
      borderRadius: "var(--r-card)",
      overflow: "hidden",
      background: "var(--gold-gradient-dim)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-affiche)",
      fontWeight: 800,
      fontStretch: "125%",
      fontVariationSettings: '"wdth" 125, "wght" 800',
      textTransform: "uppercase",
      fontSize: size * 0.44,
      lineHeight: 1,
      color: "#fff",
      opacity: 0.4
    }
  }, (title || "?").trim()[0]), /*#__PURE__*/React.createElement("span", {
    className: "grain"
  }));
}
function Paroles() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-2)",
      maxWidth: "62ch"
    }
  }, window.PAROLES.map((l, i) => l === "" ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: "var(--s-3)"
    }
  }) : /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "var(--body)",
      lineHeight: "var(--body-lh)",
      color: "var(--text)"
    }
  }, l)));
}
function Fiche({
  song,
  mobile = false,
  onPlay,
  onBack
}) {
  const [tab, setTab] = React.useState("paroles");
  const [sheet, setSheet] = React.useState(false);
  const s = song || window.CHANTS[0];
  const tabs = [{
    id: "paroles",
    label: "Paroles"
  }, {
    id: "accords",
    label: "Accords"
  }, {
    id: "videos",
    label: "Enregistrements"
  }];
  const body = tab === "paroles" ? /*#__PURE__*/React.createElement(Paroles, null) : tab === "accords" ? /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "var(--small)",
      lineHeight: "22px",
      color: "var(--text-muted)",
      whiteSpace: "pre-wrap"
    }
  }, "Ré        Sol        La         Ré\nÀ toi la gloire, ô Ressuscité,\nSi m      Sol         La        Ré\nÀ toi la victoire pour l'éternité.") : /*#__PURE__*/React.createElement("div", null, window.CHANTS.slice(0, 3).map((r, i) => /*#__PURE__*/React.createElement(SongRow, {
    key: r.id,
    index: i + 1,
    title: "Enregistrement " + (i + 1),
    author: r.author,
    songKey: s.songKey,
    duration: r.duration,
    onPlay: () => onPlay(s)
  })));
  if (mobile) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "grid",
        gap: "var(--s-5)",
        padding: "var(--s-4) var(--mobile-margin) 160px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "grid",
        justifyItems: "center",
        gap: "var(--s-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "glow-amb",
      style: {
        width: 420,
        height: 420,
        left: "50%",
        top: -80,
        transform: "translateX(-50%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement(Cover, {
      size: 180,
      title: s.title
    }))), /*#__PURE__*/React.createElement(PosterTitle, {
      size: "m",
      fill: "white",
      overline: s.author,
      infoLine: [s.songKey, s.duration, "repris 14 fois"]
    }, s.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--s-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "mobile",
      fullWidth: true,
      onClick: () => onPlay(s),
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "play",
        size: 18,
        strokeWidth: 2.5
      })
    }, "Lancer le chant"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--s-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "mobile",
      style: {
        flex: 1
      },
      onClick: () => setSheet(true)
    }, "Transposer"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "mobile",
      style: {
        flex: 1
      },
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "list-plus",
        size: 18
      })
    }, "Ajouter"))), /*#__PURE__*/React.createElement(Tabs, {
      items: tabs,
      value: tab,
      onChange: setTab
    }), body, /*#__PURE__*/React.createElement(Sheet, {
      mobile: true,
      open: sheet,
      title: "Transposer",
      onClose: () => setSheet(false),
      footer: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        size: "mobile",
        fullWidth: true,
        onClick: () => setSheet(false)
      }, "Appliquer")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--s-2)",
        flexWrap: "wrap"
      }
    }, ["Do", "Ré", "Mi", "Fa", "Sol", "La", "Si"].map(k => /*#__PURE__*/React.createElement(KeyTag, {
      key: k
    }, k)))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "var(--s-6) var(--s-6) 140px",
      maxWidth: "var(--content-max)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "glow-amb",
    style: {
      left: -120,
      top: -220
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "grid",
      gap: "var(--s-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-6)",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Cover, {
    size: 220,
    title: s.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-5)"
    }
  }, /*#__PURE__*/React.createElement(PosterTitle, {
    size: "l",
    fill: "white",
    overline: s.author,
    infoLine: [s.songKey, s.duration, "repris 14 fois", "recueil de septembre"]
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onPlay(s),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 18,
      strokeWidth: 2.5
    })
  }, "Lancer le chant"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSheet(true)
  }, "Transposer"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "list-plus",
      size: 18
    })
  }, "Ajouter \xE0 une liste"), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary"
  }, "Partager")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 300px",
      gap: "var(--s-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-5)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: tabs,
    value: tab,
    onChange: setTab
  }), body), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "grid",
      gap: "var(--s-4)",
      padding: "var(--s-5)",
      background: "var(--surface-1)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-card)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, "Derni\xE8re fois chant\xE9"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-muted)"
    }
  }, "Dimanche 24 ao\xFBt, messe de 10 h 30"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--line)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, "\xC9quipe"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Claire Mbala",
    size: 32,
    lead: true
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Jonas Petit",
    size: 32
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Awa Diop",
    size: 32
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--line)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, "Tonalit\xE9s disponibles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)",
      flexWrap: "wrap"
    }
  }, ["Do", "Ré", "Mi", "Sol"].map(k => /*#__PURE__*/React.createElement(KeyTag, {
    key: k
  }, k)))))), /*#__PURE__*/React.createElement(Sheet, {
    open: sheet,
    title: "Transposer",
    onClose: () => setSheet(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      onClick: () => setSheet(false)
    }, "Annuler"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => setSheet(false)
    }, "Appliquer"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)",
      flexWrap: "wrap"
    }
  }, ["Do", "Ré", "Mi", "Fa", "Sol", "La", "Si"].map(k => /*#__PURE__*/React.createElement(KeyTag, {
    key: k
  }, k)))));
}
Object.assign(window, {
  Fiche
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Fiche.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Shell.jsx
try { (() => {
const {
  Icon,
  SearchField,
  Avatar,
  Button
} = window.ChantsDesignSystem_cafe14;
const NAV = [{
  id: "accueil",
  label: "Accueil",
  icon: "house"
}, {
  id: "catalogue",
  label: "Catalogue",
  icon: "library-big"
}, {
  id: "listes",
  label: "Listes du dimanche",
  icon: "list-music"
}, {
  id: "equipe",
  label: "Équipe",
  icon: "users"
}];
function Sidebar({
  screen,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-w)",
      flex: "none",
      background: "var(--bg-deep)",
      borderRight: "1px solid var(--line)",
      padding: "var(--s-5) var(--s-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-affiche)",
      fontWeight: 800,
      fontStretch: "125%",
      fontVariationSettings: '"wdth" 125, "wght" 800',
      textTransform: "uppercase",
      fontSize: 22,
      letterSpacing: "-0.01em",
      color: "var(--white)",
      padding: "0 var(--s-3)"
    }
  }, "Chants"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      gap: 2
    }
  }, NAV.map(n => {
    const active = n.id === screen || screen === "fiche" && n.id === "catalogue";
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      type: "button",
      onClick: () => onNavigate(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--s-3)",
        height: 44,
        padding: "0 var(--s-3)",
        borderRadius: "var(--r-sm)",
        border: "none",
        background: active ? "var(--surface-2)" : "transparent",
        color: active ? "var(--accent-text)" : "var(--text-muted)",
        fontFamily: "var(--font-ui)",
        fontWeight: active ? 600 : 500,
        fontSize: "var(--small)",
        cursor: "pointer",
        textAlign: "left",
        transition: "background var(--dur-hover) var(--ease), color var(--dur-hover) var(--ease)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, n.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-2)",
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)",
      padding: "0 var(--s-3)"
    }
  }, "Mes recueils"), window.RECUEILS.slice(0, 3).map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    type: "button",
    onClick: () => onNavigate("catalogue"),
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--s-2)",
      padding: "8px var(--s-3)",
      border: "none",
      background: "transparent",
      color: "var(--text-muted)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, r.count)))));
}
function TopBar({
  query,
  onQuery
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "glass-nav",
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      height: "var(--topbar-h)",
      display: "flex",
      alignItems: "center",
      gap: "var(--s-5)",
      padding: "0 var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 20
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SearchField, {
    value: query,
    onChange: onQuery,
    suggestions: query ? window.CHANTS.filter(c => c.title.toLowerCase().includes(query.toLowerCase())).slice(0, 4).map(c => ({
      title: c.title,
      meta: c.songKey + " · " + c.duration
    })) : []
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary"
  }, "Nouvelle liste"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Claire Mbala",
    size: 32,
    lead: true
  })));
}
function SectionRow({
  title,
  action = "Tout voir",
  onAction,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gap: "var(--s-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--s-4)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--subtitle)",
      lineHeight: "var(--subtitle-lh)",
      color: "var(--text)"
    }
  }, title), action ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      background: "none",
      border: "none",
      color: "var(--accent-text)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--small)",
      cursor: "pointer"
    }
  }, action) : null), children);
}
function MobileHeader({
  title,
  onBack
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "glass-nav",
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      height: 56,
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      padding: "0 var(--mobile-margin)"
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    "aria-label": "Retour",
    style: {
      background: "none",
      border: "none",
      color: "var(--text)",
      padding: 0,
      display: "grid",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 22
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-affiche)",
      fontWeight: 800,
      fontStretch: "125%",
      fontVariationSettings: '"wdth" 125, "wght" 800',
      textTransform: "uppercase",
      fontSize: 18,
      color: "var(--white)"
    }
  }, "Chants"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20
  })));
}

/** Rangée à défilement horizontal, débord visible sur le bord droit (mobile). */
function Scroller({
  children,
  itemWidth = 148
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-3)",
      overflowX: "auto",
      padding: "0 var(--mobile-margin)",
      margin: "0 calc(-1 * var(--mobile-margin))",
      scrollbarWidth: "none"
    }
  }, React.Children.map(children, (c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: itemWidth,
      flex: "none"
    }
  }, c)));
}
Object.assign(window, {
  Sidebar,
  TopBar,
  SectionRow,
  MobileHeader,
  Scroller,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
window.CHANTS = [{
  id: 1,
  title: "À toi la gloire",
  author: "Edmond Budry",
  songKey: "Ré",
  duration: "4:12"
}, {
  id: 2,
  title: "Élévation",
  author: "A. Duval",
  songKey: "La",
  duration: "5:03"
}, {
  id: 3,
  title: "Que ma bouche chante ta louange",
  author: "Communauté de l'Emmanuel",
  songKey: "Sol",
  duration: "3:48"
}, {
  id: 4,
  title: "Souffle imprévisible",
  author: "Claude Bernard",
  songKey: "Mi",
  duration: "4:36"
}, {
  id: 5,
  title: "Tu es là présent",
  author: "J. Akepsimas",
  songKey: "Do",
  duration: "3:12"
}, {
  id: 6,
  title: "Je veux chanter ton amour",
  author: "C. Gabarain",
  songKey: "Fa",
  duration: "4:02"
}, {
  id: 7,
  title: "Ouvre mes yeux, Seigneur",
  author: "Communauté",
  songKey: "La♭",
  duration: "3:26"
}, {
  id: 8,
  title: "Rendons gloire à notre Dieu",
  author: "Traditionnel",
  songKey: "Ré",
  duration: "2:58"
}, {
  id: 9,
  title: "Trouver dans ma vie ta présence",
  author: "R. Lebel",
  songKey: "Sol",
  duration: "5:20"
}, {
  id: 10,
  title: "Vienne ta paix sur nous",
  author: "P. Richard",
  songKey: "Mi mineur",
  duration: "4:44"
}];
window.RECUEILS = [{
  id: "sept",
  title: "Recueil de septembre",
  count: 12
}, {
  id: "avent",
  title: "Avent et Noël",
  count: 24
}, {
  id: "paques",
  title: "Temps de Pâques",
  count: 18
}, {
  id: "veillee",
  title: "Veillées",
  count: 9
}, {
  id: "enfants",
  title: "Chants pour les enfants",
  count: 15
}];
window.PAROLES = ["À toi la gloire, ô Ressuscité,", "À toi la victoire pour l'éternité.", "Brillant de lumière, l'ange est descendu,", "Il roule la pierre du tombeau vaincu.", "", "Vois-le paraître : c'est lui, c'est Jésus,", "Ton Sauveur, ton Maître ; oh ! ne doute plus.", "Sois dans l'allégresse, peuple du Seigneur,", "Et redis sans cesse que Christ est vainqueur."];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/site/Site.jsx
try { (() => {
const {
  Player
} = window.ChantsDesignSystem_cafe14;

// Le site public n'affiche pas les tonalités.
window.CHANTS = window.CHANTS.map(({
  songKey,
  ...reste
}) => reste);
function Site() {
  const mobile = useMobile();
  const [entre, setEntre] = React.useState(false);
  const [view, setView] = React.useState("accueil");
  const [song, setSong] = React.useState(null);
  const [now, setNow] = React.useState(null);
  const [playing, setPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [pending, setPending] = React.useState(null);
  const openApp = () => window.open("../app/index.html", "_blank");
  const play = s => {
    setNow(s);
    setPlaying(true);
    setProgress(4);
  };
  const go = (v, hash) => {
    setView(v);
    if (hash) setPending(hash);else window.scrollTo({
      top: 0
    });
  };
  const openSong = s => {
    setSong(s);
    go("chant");
  };
  React.useEffect(() => {
    if (!pending) return;
    let tries = 0;
    const tick = () => {
      const el = document.getElementById(pending);
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: tries ? "smooth" : "auto"
      });
      if (++tries < 6) requestAnimationFrame(tick);else setPending(null);
    };
    requestAnimationFrame(tick);
  }, [pending, view]);
  React.useEffect(() => {
    if (!now || !playing) return;
    const t = setInterval(() => setProgress(p => p >= 100 ? 0 : p + 0.6), 400);
    return () => clearInterval(t);
  }, [now, playing]);
  if (mobile && !entre) return /*#__PURE__*/React.createElement(MobileWelcome, {
    onEnter: () => setEntre(true)
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: "100vh",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    view: view,
    onNav: go,
    onOpenApp: openApp,
    notifs: window.ANNONCES
  }), /*#__PURE__*/React.createElement("main", {
    key: view,
    className: "view-in"
  }, view === "accueil" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHero, {
    onPlay: play,
    onOpenApp: () => go("repertoire")
  }), /*#__PURE__*/React.createElement(AnnonceBandeau, {
    onNav: go
  }), /*#__PURE__*/React.createElement(WeekBanner, {
    onPlay: play,
    onOpenSong: openSong
  }), /*#__PURE__*/React.createElement(Rows, {
    onOpen: () => go("repertoire"),
    onPlay: play,
    onOpenSong: openSong
  }), /*#__PURE__*/React.createElement(ApercuEvenements, {
    onVoirTout: () => go("events")
  }), /*#__PURE__*/React.createElement(Tutos, {
    onOpenTuto: () => go("tutos"),
    onAll: () => go("tutos")
  }), /*#__PURE__*/React.createElement(Chiffres, null)) : null, view === "repertoire" ? /*#__PURE__*/React.createElement(PageRepertoire, {
    onOpenSong: openSong,
    onPlay: play
  }) : null, view === "chant" && song && song.title ? /*#__PURE__*/React.createElement(PageChant, {
    song: song,
    onPlay: play,
    onBack: () => go("repertoire")
  }) : null, view === "tutos" ? /*#__PURE__*/React.createElement(PageTutos, {
    onOpenTuto: () => {}
  }) : null, view === "events" ? /*#__PURE__*/React.createElement(PageEvenements, {
    onOpenSong: openSong,
    onPlay: play
  }) : null, view === "programmation" ? /*#__PURE__*/React.createElement(PageProgrammation, null) : null), /*#__PURE__*/React.createElement(SiteFooter, {
    onNav: go
  }), mobile ? /*#__PURE__*/React.createElement(TabBar, {
    view: view,
    onNav: go
  }) : null, now ? /*#__PURE__*/React.createElement(Player, {
    title: now.title,
    author: now.author,
    duration: now.duration,
    progress: progress,
    playing: playing,
    onToggle: () => setPlaying(!playing),
    onClose: () => setNow(null),
    mobile: mobile,
    style: {
      position: "fixed",
      left: "50%",
      transform: "translateX(-50%)",
      right: "auto",
      width: mobile ? "calc(100% - 2 * var(--mobile-margin))" : "min(720px, calc(100% - 48px))",
      bottom: mobile ? "calc(var(--tabbar-h) + env(safe-area-inset-bottom) + 8px)" : "var(--s-5)",
      zIndex: 55
    }
  }) : null);
}
Object.assign(window, {
  Site
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteAbout.jsx
try { (() => {
const {
  Button,
  Icon,
  Avatar
} = window.ChantsDesignSystem_cafe14;
function Chiffres() {
  const mobile = useMobile();
  const chiffres = [{
    n: "48",
    l: "chants au répertoire"
  }, {
    n: "12",
    l: "recueils par temps liturgique"
  }, {
    n: "14",
    l: "membres dans l'équipe"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "chiffres",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--s-8) 0"
    }
  }, /*#__PURE__*/React.createElement(Halo, {
    size: 620,
    style: {
      right: "-16%",
      top: "-30%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      ...cols(mobile, "minmax(0,1fr)", "repeat(3, minmax(0,1fr))"),
      gap: "var(--gutter)"
    }
  }, chiffres.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--s-4)",
      paddingBottom: "var(--s-4)",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gold-fill",
    style: {
      ...afficheStyle,
      fontSize: mobile ? 52 : 72,
      lineHeight: 1
    }
  }, c.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--small)",
      color: "var(--text-muted)"
    }
  }, c.l)))))));
}

/** Inscription / connexion : verre posé sur une surface colorée, boutons en pilule pleine largeur. */
function Connexion() {
  const mobile = useMobile();
  const [mode, setMode] = React.useState("inscription");
  const field = {
    height: 48,
    width: "100%",
    padding: "0 18px",
    borderRadius: "var(--r-pill)",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "var(--text)",
    fontFamily: "var(--font-ui)",
    fontSize: "var(--small)",
    outline: "none",
    boxSizing: "border-box"
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "connexion",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--s-9) var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "on-dark",
    style: {
      position: "relative",
      maxWidth: 1040,
      margin: "0 auto",
      borderRadius: "var(--r-panel)",
      overflow: "hidden",
      border: "1px solid var(--line)",
      background: "var(--gold-gradient-dim)",
      display: "grid",
      ...cols(mobile, "minmax(0,1fr)", "1fr 420px"),
      minHeight: mobile ? 0 : 460
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "grain"
  }), /*#__PURE__*/React.createElement(Halo, {
    size: 520,
    style: {
      left: "-10%",
      bottom: "-30%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "grid",
      alignContent: "center",
      gap: "var(--s-4)",
      padding: "var(--s-7)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...afficheStyle,
      color: "var(--white)",
      fontSize: "var(--display-m)",
      lineHeight: "var(--display-m-lh)",
      margin: 0
    }
  }, "Rejoindre l'\xE9quipe"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "38ch",
      fontFamily: "var(--font-text)",
      fontSize: "var(--body)",
      lineHeight: "var(--body-lh)",
      color: "rgba(255,255,255,0.72)"
    }
  }, "Un compte donne acc\xE8s aux listes du dimanche et au mode sc\xE8ne pendant la messe.")), /*#__PURE__*/React.createElement("div", {
    className: "glass-card",
    style: {
      position: "relative",
      zIndex: 3,
      borderRadius: 0,
      border: "none",
      borderLeft: "1px solid rgba(255,255,255,0.12)",
      display: "grid",
      alignContent: "center",
      gap: "var(--s-4)",
      padding: "var(--s-7) var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-4)"
    }
  }, ["inscription", "connexion"].map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    type: "button",
    onClick: () => setMode(m),
    style: {
      position: "relative",
      padding: "0 0 10px",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      fontWeight: mode === m ? 600 : 500,
      fontSize: "var(--small)",
      color: mode === m ? "var(--text)" : "var(--text-muted)"
    }
  }, m === "inscription" ? "Créer un compte" : "Se connecter", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 2,
      borderRadius: 2,
      background: "var(--gold-500)",
      opacity: mode === m ? 1 : 0,
      transition: "opacity var(--dur-hover) var(--ease)"
    }
  })))), /*#__PURE__*/React.createElement("input", {
    style: field,
    placeholder: "adresse \xE9lectronique"
  }), /*#__PURE__*/React.createElement("input", {
    style: field,
    type: "password",
    placeholder: "mot de passe"
  }), mode === "inscription" ? /*#__PURE__*/React.createElement("input", {
    style: field,
    placeholder: "votre nom dans l'\xE9quipe"
  }) : null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, mode === "inscription" ? "Créer le compte" : "Entrer"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    })
  }, "Continuer avec l'adresse de la paroisse"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)",
      textAlign: "center"
    }
  }, mode === "inscription" ? "Un responsable valide votre accès sous 24 heures." : "Mot de passe oublié ?"))));
}
Object.assign(window, {
  Chiffres,
  Connexion
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteAbout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteChrome.jsx
try { (() => {
const {
  Icon,
  Button,
  Avatar
} = window.ChantsDesignSystem_cafe14;
const BRAND = "Team Louange Marseille";
const NAVLINKS = [{
  id: "accueil",
  label: "Accueil",
  view: "accueil"
}, {
  id: "repertoire",
  label: "Répertoire",
  view: "repertoire"
}, {
  id: "events",
  label: "Évents",
  view: "events"
}, {
  id: "tutos",
  label: "Tutos",
  view: "tutos"
}, {
  id: "programmation",
  label: "Programmation",
  view: "programmation"
}];

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
const cols = (mobile, m, d) => ({
  gridTemplateColumns: mobile ? m : d
});
/** Rangée qui défile horizontalement sur mobile, grille sinon. */
const scroller = (mobile, col = "46%") => mobile ? {
  gridTemplateColumns: "none",
  gridAutoFlow: "column",
  gridAutoColumns: col,
  minWidth: 0,
  maxWidth: "100vw",
  overflowX: "auto",
  overflowY: "hidden",
  scrollSnapType: "x proximity",
  gap: "var(--s-4)",
  paddingBottom: 4,
  marginInline: "calc(-1 * var(--s-6))",
  paddingInline: "var(--s-6)"
} : {};
const TABS = [{
  id: "accueil",
  label: "Accueil",
  icon: "house"
}, {
  id: "repertoire",
  label: "Chants",
  icon: "music"
}, {
  id: "events",
  label: "Évents",
  icon: "calendar-days"
}, {
  id: "tutos",
  label: "Tutos",
  icon: "graduation-cap"
}, {
  id: "programmation",
  label: "Dates",
  icon: "list-music"
}];

/** Barre d'onglets flottante : pastille de marque à gauche, onglet actif encadré en doré. */
function TabBar({
  view = "accueil",
  onNav = () => {}
}) {
  const i = Math.max(0, TABS.findIndex(t => t.id === view || view === "chant" && t.id === "repertoire"));
  const [survol, setSurvol] = React.useState(null);
  const cible = survol == null ? i : survol;
  return /*#__PURE__*/React.createElement("nav", {
    className: "tabbar",
    "aria-label": "Navigation principale"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNav("accueil"),
    "aria-label": BRAND,
    style: {
      width: 46,
      height: 46,
      flex: "none",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      background: "#1C1B1F",
      border: "1px solid rgba(251,233,168,0.22)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 6px 14px rgba(0,0,0,0.45)",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET("logo.png"),
    alt: "",
    style: {
      width: 30,
      height: 30,
      objectFit: "contain",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      minWidth: 0,
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "1fr",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: "calc(100% / " + TABS.length + ")",
      display: "grid",
      placeItems: "center",
      transform: "translateX(" + cible * 100 + "%)",
      transition: "transform 460ms cubic-bezier(.34,1.42,.5,1)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "calc(100% - 4px)",
      height: 42,
      borderRadius: "var(--r-pill)",
      background: "var(--gold-gradient)",
      boxShadow: "0 4px 18px rgba(233,185,73,0.42)",
      animation: "letterIn 320ms var(--ease)"
    }
  })), TABS.map((t, k) => {
    const active = k === i;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => onNav(t.id),
      "aria-current": active ? "page" : undefined,
      onMouseEnter: () => setSurvol(k),
      onMouseLeave: () => setSurvol(null),
      onFocus: () => setSurvol(k),
      onBlur: () => setSurvol(null),
      style: {
        position: "relative",
        display: "grid",
        justifyItems: "center",
        alignContent: "center",
        gap: 2,
        minHeight: 44,
        padding: "2px",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: k === cible ? "#151309" : "rgba(255,255,255,0.52)",
        transition: "color var(--dur-hover) var(--ease)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        transform: k === cible ? "translateY(-1px) scale(1.12)" : "none",
        transition: "transform 380ms cubic-bezier(.34,1.56,.64,1)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 19,
      strokeWidth: k === cible ? 2.4 : 2
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: k === cible ? 700 : 500,
        fontSize: 10,
        lineHeight: "11px",
        letterSpacing: k === cible ? ".03em" : ".01em",
        transition: "letter-spacing 300ms var(--ease), font-weight 200ms linear"
      }
    }, t.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 3,
        height: 3,
        borderRadius: "50%",
        background: active ? "rgba(21,19,9,0.45)" : "transparent"
      }
    }));
  })));
}

/** Enveloppe d'apparition au défilement — opacité seule si prefers-reduced-motion. */
function Reveal({
  delay = 0,
  children,
  style,
  tag = "div"
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && (el.classList.add("in"), io.unobserve(el))), {
      rootMargin: "-8% 0px -12% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return React.createElement(tag, {
    ref,
    className: "reveal" + (delay ? " d" + delay : ""),
    style
  }, children);
}

/** Halo doré d'ambiance qui respire lentement. */
function Halo({
  size = 620,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "glow-amb breathe",
    style: {
      width: size,
      height: size,
      ...style
    }
  });
}
function SectionHead({
  overline,
  title,
  action,
  onAction
}) {
  const mobile = useMobile();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: mobile ? "column" : "row",
      alignItems: mobile ? "flex-start" : "flex-end",
      justifyContent: "space-between",
      gap: mobile ? "var(--s-2)" : "var(--s-5)",
      marginBottom: "var(--s-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-2)"
    }
  }, overline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--accent-text)"
    }
  }, overline) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--subtitle)",
      lineHeight: "var(--subtitle-lh)",
      color: "var(--text)"
    }
  }, title)), action ? /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: onAction
  }, action) : null);
}

/** Bascule clair / sombre : pose data-theme sur <html> et garde le choix. */
function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem("tl-theme") || "dark");
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("tl-theme", theme);
  }, [theme]);
  const clair = theme === "light";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": clair,
    "aria-label": clair ? "Passer en mode sombre" : "Passer en mode clair",
    onClick: () => setTheme(clair ? "dark" : "light"),
    style: {
      position: "relative",
      width: 62,
      height: 30,
      padding: 3,
      display: "flex",
      alignItems: "center",
      borderRadius: "var(--r-pill)",
      background: "var(--surface-2)",
      border: "1px solid var(--line)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "var(--gold-gradient)",
      transform: clair ? "translateX(32px)" : "none",
      transition: "transform var(--dur-hover) var(--ease)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1,
      width: 24,
      height: 24,
      display: "grid",
      placeItems: "center",
      color: clair ? "var(--text-faint)" : "var(--on-accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "moon",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 1,
      width: 24,
      height: 24,
      marginLeft: 8,
      display: "grid",
      placeItems: "center",
      color: clair ? "var(--on-accent)" : "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sun",
    size: 15
  })));
}
function SiteHeader({
  view = "accueil",
  onNav = () => {},
  onOpenApp,
  notifs = []
}) {
  const mobile = useMobile();
  const [openNotifs, setOpenNotifs] = React.useState(false);
  const unread = notifs.filter(n => n.unread).length;
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const surMedia = !solid && view === "accueil";
  if (mobile) {
    const unreadM = unread;
    return /*#__PURE__*/React.createElement("header", {
      className: solid ? "glass-nav" : "",
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        boxSizing: "border-box",
        height: "var(--topbar-total)",
        display: "flex",
        alignItems: "center",
        gap: "var(--s-3)",
        padding: "var(--safe-top) var(--mobile-margin) 0",
        transition: "background var(--dur-hover) var(--ease)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onNav("accueil"),
      "aria-label": BRAND,
      style: {
        background: "none",
        border: "none",
        padding: 0,
        display: "grid",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: ASSET("logo.png"),
      alt: "",
      style: {
        height: 32,
        width: "auto",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: "var(--s-4)"
      }
    }, /*#__PURE__*/React.createElement(ThemeToggle, null), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Rechercher un chant",
      style: {
        width: "var(--tap-min)",
        height: "var(--tap-min)",
        display: "grid",
        placeItems: "center",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        color: surMedia ? "var(--on-media-muted)" : "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 22
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": unreadM ? unreadM + " nouvelles annonces" : "Annonces",
      onClick: () => onNav("accueil", "annonces"),
      style: {
        position: "relative",
        width: "var(--tap-min)",
        height: "var(--tap-min)",
        display: "grid",
        placeItems: "center",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        color: unreadM ? surMedia ? "var(--on-media-gold)" : "var(--accent-text)" : surMedia ? "var(--on-media-muted)" : "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 22
    }), unreadM ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 6,
        right: 6,
        minWidth: 15,
        height: 15,
        padding: "0 4px",
        borderRadius: 999,
        background: "var(--gold-gradient)",
        color: "#000",
        fontFamily: "var(--font-ui)",
        fontWeight: 700,
        fontSize: 10,
        lineHeight: "15px",
        textAlign: "center"
      }
    }, unreadM) : null)));
  }
  return /*#__PURE__*/React.createElement("header", {
    className: solid ? "glass-nav" : "",
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      height: "var(--topbar-h)",
      display: "flex",
      alignItems: "center",
      gap: "var(--s-6)",
      padding: "0 var(--s-6)",
      whiteSpace: "nowrap",
      transition: "background var(--dur-hover) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav("accueil");
    },
    style: {
      display: "grid",
      flex: "none",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET("logo.png"),
    alt: BRAND,
    style: {
      height: 40,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-5)",
      marginLeft: "var(--s-5)",
      flex: "none"
    }
  }, NAVLINKS.map(l => {
    const active = view === l.view && !l.hash;
    return /*#__PURE__*/React.createElement("button", {
      key: l.id,
      type: "button",
      onClick: () => onNav(l.view, l.hash),
      style: {
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-ui)",
        fontWeight: active ? 600 : 500,
        fontSize: "var(--small)",
        color: active ? surMedia ? "var(--on-media-gold)" : "var(--accent-text)" : surMedia ? "var(--on-media-muted)" : "var(--text-muted)",
        transition: "color var(--dur-hover) var(--ease)"
      }
    }, l.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--s-5)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(ThemeToggle, null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Rechercher un chant",
    style: {
      background: "none",
      border: "none",
      padding: 0,
      display: "grid",
      cursor: "pointer",
      color: surMedia ? "var(--on-media-muted)" : "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": unread ? unread + " nouvelles annonces" : "Annonces",
    onClick: () => setOpenNotifs(!openNotifs),
    style: {
      position: "relative",
      background: "none",
      border: "none",
      padding: 0,
      display: "grid",
      cursor: "pointer",
      color: openNotifs || unread ? surMedia ? "var(--on-media-gold)" : "var(--accent-text)" : surMedia ? "var(--on-media-muted)" : "var(--text-muted)",
      filter: unread ? "drop-shadow(0 0 16px rgba(233,185,73,0.25))" : "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20
  }), unread ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -4,
      right: -5,
      minWidth: 15,
      height: 15,
      padding: "0 4px",
      borderRadius: 999,
      background: "var(--gold-gradient)",
      color: "#000",
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 10,
      lineHeight: "15px",
      textAlign: "center"
    }
  }, unread) : null), openNotifs ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: "calc(100% + 14px)",
      width: 340,
      padding: "var(--s-2)",
      borderRadius: "var(--r-panel)",
      background: "var(--glass-card-bg)",
      backdropFilter: "blur(var(--glass-card-blur))",
      WebkitBackdropFilter: "blur(var(--glass-card-blur))",
      border: "var(--glass-card-border)",
      boxShadow: "var(--glass-card-inset)",
      display: "grid",
      gap: 2
    }
  }, notifs.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    type: "button",
    onClick: () => {
      setOpenNotifs(false);
      onNav("accueil", "annonces");
    },
    style: {
      display: "grid",
      gap: 3,
      textAlign: "left",
      padding: "10px 12px",
      background: "none",
      border: "none",
      borderRadius: "var(--r-sm)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, n.unread ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--gold-500)",
      flex: "none"
    }
  }) : null, n.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)"
    }
  }, n.meta)))) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Ouvrir l'application",
    onClick: onOpenApp,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Claire Mbala",
    size: 32,
    lead: true
  }))));
}
function SiteFooter({
  onNav = () => {}
}) {
  const mobile = useMobile();
  const info = ["Team Louange Marseille", "48 chants au répertoire", "répétition le jeudi, 19 h 30", "© 2026"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--bg-deep)",
      borderTop: "1px solid var(--line)",
      padding: "var(--s-8) var(--s-6) var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--s-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: mobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr",
      gap: "var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-3)",
      alignContent: "start",
      gridColumn: mobile ? "1 / -1" : "auto"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET("logo.png"),
    alt: BRAND,
    onClick: () => onNav("accueil"),
    style: {
      height: 72,
      width: "auto",
      justifySelf: "start",
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "38ch",
      fontFamily: "var(--font-text)",
      fontSize: "var(--small)",
      lineHeight: "var(--small-lh)",
      color: "var(--text-muted)"
    }
  }, "Le r\xE9pertoire de nos assembl\xE9es : les chants, les listes du dimanche, au m\xEAme endroit.")), [{
    t: "Répertoire",
    l: [["Tous les chants", "repertoire"], ["Nouveautés", "repertoire"], ["Vidéos tutos", "tutos"], ["Événements", "events"]]
  }, {
    t: "Programmation",
    l: [["Prochaines dates", "programmation"], ["Confirmer ma présence", "programmation"], ["Annonces", "accueil"], ["Nous rejoindre", "accueil"]]
  }, {
    t: "Plateforme",
    l: [["Application", "accueil"], ["Mode scène", "accueil"], ["Aide", "accueil"], ["Contact", "accueil"]]
  }].map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    style: {
      display: "grid",
      gap: "var(--s-3)",
      alignContent: "start",
      justifyItems: "start",
      gridColumn: mobile && ci === 2 ? "1 / -1" : "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, c.t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: mobile && ci === 2 ? "1fr 1fr" : "1fr",
      gap: "var(--s-3)",
      justifyItems: "start",
      width: "100%"
    }
  }, c.l.map(([x, v]) => /*#__PURE__*/React.createElement("button", {
    key: x,
    type: "button",
    onClick: () => onNav(v),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      textAlign: "left",
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-muted)"
    }
  }, x)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      flexWrap: "wrap",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      lineHeight: "var(--caption-lh)",
      color: "var(--text-faint)"
    }
  }, info.map((part, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "hairline"
  }) : null, /*#__PURE__*/React.createElement("span", null, part))))));
}
Object.assign(window, {
  Reveal,
  Halo,
  SectionHead,
  ThemeToggle,
  SiteHeader,
  SiteFooter,
  TabBar,
  useMobile,
  cols,
  scroller,
  BRAND,
  NAVLINKS,
  TABS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteHero.jsx
try { (() => {
const {
  Button,
  Icon
} = window.ChantsDesignSystem_cafe14;
const afficheStyle = {
  margin: 0,
  fontFamily: "var(--font-affiche)",
  fontWeight: 800,
  fontStretch: "125%",
  fontVariationSettings: '"wdth" 125, "wght" 800',
  textTransform: "uppercase",
  letterSpacing: "-0.015em"
};

/** Titre composé lettre par lettre. */
function AfficheLines({
  lines,
  size = 96,
  lh = 0.94,
  gold = [],
  ink = "var(--white)"
}) {
  let n = 0;
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      ...afficheStyle,
      fontSize: size,
      lineHeight: lh,
      display: "grid"
    }
  }, lines.map((line, li) => /*#__PURE__*/React.createElement("span", {
    key: li,
    className: gold.includes(li) ? "gold-fill" : undefined,
    style: {
      display: "block",
      color: gold.includes(li) ? undefined : ink
    }
  }, line.split(" ").map((mot, mi, all) => /*#__PURE__*/React.createElement("span", {
    key: mi,
    style: {
      display: "inline-block",
      whiteSpace: "nowrap"
    }
  }, (mi < all.length - 1 ? mot + "\u00A0" : mot).split("").map((ch, ci) => /*#__PURE__*/React.createElement("span", {
    key: ci,
    className: "letter",
    style: {
      animationDelay: 120 + 26 * n++ + "ms"
    }
  }, ch)))))));
}

/** Héro plein cadre : image de fond, dégradés de protection, contenu en bas à gauche. */
function SiteHero({
  onPlay,
  onOpenApp
}) {
  const song = window.CHANTS[1];
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      height: "100dvh",
      minHeight: 620,
      overflow: "hidden",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-bg-2",
    shape: "rect",
    fit: "cover",
    src: ASSET("hero-stairs.png"),
    placeholder: "D\xE9posez la photographie du h\xE9ro (paysage, 2000 px de large)"
  })), /*#__PURE__*/React.createElement(Halo, {
    size: 820,
    style: {
      right: "-18%",
      top: "-26%",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "grain",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 3,
      pointerEvents: "none",
      background: "linear-gradient(90deg, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0.62) 30%, rgba(10,10,12,0.22) 52%, rgba(10,10,12,0.04) 72%, transparent 88%), radial-gradient(90% 70% at 0% 100%, rgba(5,5,6,0.92) 0%, rgba(5,5,6,0.6) 34%, rgba(5,5,6,0.2) 56%, transparent 74%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 3,
      pointerEvents: "none",
      background: "linear-gradient(0deg, rgba(10,10,12,0.62) 0%, rgba(10,10,12,0.12) 20%, transparent 40%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 4,
      pointerEvents: "none",
      padding: "0 var(--s-6) var(--s-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-5)",
      justifyItems: "start",
      width: "min(58%, 700px)"
    }
  }, /*#__PURE__*/React.createElement(AfficheLines, {
    lines: [song.title],
    size: "clamp(34px, 4.2vw, 68px)",
    ink: "var(--on-media)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      flexWrap: "wrap",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--small)",
      lineHeight: "var(--small-lh)",
      color: "var(--on-media-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--on-media-gold)",
      fontWeight: 600
    }
  }, "Chant de la semaine"), /*#__PURE__*/React.createElement("span", null, song.duration), /*#__PURE__*/React.createElement("span", null, "2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-4)",
      pointerEvents: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onPlay(song),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 18,
      strokeWidth: 2.5
    })
  }, "\xC9couter"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Parcourir le r\xE9pertoire",
    onClick: onOpenApp,
    style: {
      width: 48,
      height: 48,
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.10)",
      backdropFilter: "blur(var(--glass-pill-blur))",
      WebkitBackdropFilter: "blur(var(--glass-pill-blur))",
      border: "1px solid rgba(255,255,255,0.28)",
      color: "var(--on-media)",
      cursor: "pointer",
      transition: "border-color var(--dur-hover) var(--ease), box-shadow var(--dur-hover) var(--ease)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--gold-500)";
      e.currentTarget.style.boxShadow = "var(--glow-sm)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "";
      e.currentTarget.style.boxShadow = "none";
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 22
  })))))));
}

/** Chants des semaines précédentes : défile automatiquement dans le catalogue. */
function WeekBanner({
  onPlay,
  onOpenSong = () => {}
}) {
  const mobile = useMobile();
  const picks = window.CHANTS;
  const semaines = ["Dimanche 31 août", "Dimanche 24 août", "Dimanche 17 août", "Dimanche 10 août", "Dimanche 3 août", "Dimanche 27 juillet", "Dimanche 20 juillet", "Dimanche 13 juillet", "Dimanche 6 juillet", "Dimanche 29 juin"];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % picks.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = picks[i];
  return /*#__PURE__*/React.createElement("section", {
    id: "repertoire",
    style: {
      position: "relative",
      padding: "0 var(--s-6)",
      maxWidth: "var(--content-max)",
      margin: "0 auto var(--s-9)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "on-dark",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--r-panel)",
      background: "var(--band-bg)",
      border: "1px solid var(--band-line)",
      minHeight: mobile ? 0 : 380,
      display: "grid",
      ...cols(mobile, "minmax(0,1fr)", "1.1fr .9fr")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "grid",
      alignContent: "center",
      gap: "var(--s-4)",
      padding: mobile ? "var(--s-5)" : "var(--s-7)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--band-gold)"
    }
  }, "Chants des semaines pr\xE9c\xE9dentes"), /*#__PURE__*/React.createElement("h2", {
    key: s.title,
    style: {
      ...afficheStyle,
      color: "var(--band-ink)",
      fontSize: "var(--display-l)",
      lineHeight: "var(--display-l-lh)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      maxWidth: "44ch",
      fontFamily: "var(--font-text)",
      fontSize: "var(--body)",
      lineHeight: "var(--body-lh)",
      color: "var(--band-ink-muted)"
    }
  }, "Chant\xE9 le ", semaines[i].toLowerCase(), ", messe de 10 h 30."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--band-ink-faint)"
    }
  }, s.author, " \xB7 ", s.duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-3)",
      marginTop: "var(--s-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onPlay(s),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 18,
      strokeWidth: 2.5
    })
  }, "Lancer le chant"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onOpenSong(s)
  }, "Voir la fiche")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: "var(--s-4)",
      flexWrap: "wrap"
    }
  }, picks.map((p, k) => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    type: "button",
    "aria-label": "Voir " + p.title,
    onClick: () => setI(k),
    style: {
      width: k === i ? 28 : 10,
      height: 4,
      borderRadius: 999,
      border: "none",
      padding: 0,
      cursor: "pointer",
      background: k === i ? "var(--gold-500)" : "var(--band-dot-off)",
      transition: "width var(--dur-hover) var(--ease), background var(--dur-hover) var(--ease)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      height: mobile ? 150 : "auto",
      order: mobile ? -1 : 0
    }
  }, /*#__PURE__*/React.createElement(Halo, {
    size: 560,
    style: {
      right: "-30%",
      top: "-20%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: "var(--gold-gradient-dim)",
      animation: "letterIn 700ms var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...afficheStyle,
      fontSize: mobile ? 110 : 220,
      lineHeight: 1,
      color: "#fff",
      opacity: 0.4
    }
  }, s.title.trim()[0]), /*#__PURE__*/React.createElement("span", {
    className: "grain"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: mobile ? "linear-gradient(0deg,#121216 0%,rgba(18,18,22,.35) 60%,transparent 100%)" : "var(--band-veil)"
    }
  })))));
}
Object.assign(window, {
  SiteHero,
  WeekBanner,
  AfficheLines,
  afficheStyle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SitePages.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SongRow,
  SongCard,
  Button,
  Icon,
  Tabs,
  FilterChip,
  Avatar,
  AnnouncementCard
} = window.ChantsDesignSystem_cafe14;
const THEMES = ["Tous", "Louange", "Adoration", "Communion", "Envoi", "Avent", "Enfants"];
function PageHead({
  overline,
  title,
  info,
  children,
  gold = true
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "calc(var(--topbar-total) + var(--s-7)) var(--s-6) var(--s-7)"
    }
  }, /*#__PURE__*/React.createElement(Halo, {
    size: 640,
    style: {
      left: "-14%",
      top: "-30%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "grain",
    style: {
      position: "absolute",
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--s-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--accent-text)"
    }
  }, overline), /*#__PURE__*/React.createElement("h1", {
    className: gold ? "gold-fill" : undefined,
    style: {
      ...afficheStyle,
      fontSize: "var(--display-l)",
      lineHeight: "var(--display-l-lh)",
      color: gold ? undefined : "var(--white)"
    }
  }, title), info ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      flexWrap: "wrap",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)"
    }
  }, info.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "hairline"
  }) : null, /*#__PURE__*/React.createElement("span", null, p)))) : null, children));
}
function PageRepertoire({
  onOpenSong,
  onPlay
}) {
  const mobile = useMobile();
  const [theme, setTheme] = React.useState("Tous");
  const [view, setView] = React.useState("liste");
  const songs = window.CHANTS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    overline: "R\xE9pertoire",
    title: "48 chants",
    gold: true,
    info: ["Do à Si, transposables", "12 recueils", "mis à jour le 2 septembre"]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: mobile ? "column" : "row",
      alignItems: mobile ? "stretch" : "center",
      justifyContent: "space-between",
      gap: mobile ? "var(--s-3)" : "var(--s-5)",
      marginTop: "var(--s-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)",
      flexWrap: mobile ? "nowrap" : "wrap",
      overflowX: mobile ? "auto" : "visible",
      marginInline: mobile ? "calc(-1 * var(--s-6))" : 0,
      paddingInline: mobile ? "var(--s-6)" : 0
    }
  }, THEMES.map(t => /*#__PURE__*/React.createElement(FilterChip, {
    key: t,
    active: t === theme,
    onClick: () => setTheme(t)
  }, t))), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: "liste",
      label: "Liste"
    }, {
      id: "grille",
      label: "Grille"
    }],
    value: view,
    onChange: setView,
    style: {
      border: "none"
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 var(--s-6) var(--s-9)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, view === "liste" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-3)"
    }
  }, songs.map((s, i) => /*#__PURE__*/React.createElement(SongRow, _extends({
    key: s.id,
    variant: "pill",
    index: i + 1
  }, s, {
    onClick: () => onOpenSong(s),
    onPlay: () => onPlay(s)
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      ...cols(mobile, "repeat(2, minmax(0,1fr))", "repeat(6, 1fr)"),
      gap: "var(--gutter)"
    }
  }, songs.map(s => /*#__PURE__*/React.createElement(SongCard, _extends({
    key: s.id
  }, s, {
    onClick: () => onOpenSong(s),
    onPlay: () => onPlay(s)
  })))))));
}
function PageChant({
  song,
  onPlay,
  onBack
}) {
  const mobile = useMobile();
  const s = song || window.CHANTS[0];
  const [tab, setTab] = React.useState("paroles");
  const body = tab === "paroles" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-2)",
      maxWidth: "62ch"
    }
  }, window.PAROLES.map((l, i) => l === "" ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: "var(--s-3)"
    }
  }) : /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "var(--body)",
      lineHeight: "var(--body-lh)",
      color: "var(--text)"
    }
  }, l))) : tab === "accords" ? /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "var(--small)",
      lineHeight: "22px",
      color: "var(--text-muted)",
      whiteSpace: "pre-wrap"
    }
  }, "Ré        Sol        La         Ré\nÀ toi la gloire, ô Ressuscité,\nSi m      Sol         La        Ré\nÀ toi la victoire pour l'éternité.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-3)"
    }
  }, window.CHANTS.slice(0, 3).map((r, i) => /*#__PURE__*/React.createElement(SongRow, {
    key: r.id,
    variant: "pill",
    index: i + 1,
    title: "Enregistrement " + (i + 1),
    author: r.author,
    duration: r.duration,
    onPlay: () => onPlay(s)
  })));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "120px var(--s-6) var(--s-7)"
    }
  }, /*#__PURE__*/React.createElement(Halo, {
    size: 720,
    style: {
      left: "-10%",
      top: "-34%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "grain",
    style: {
      position: "absolute",
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: onBack,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-left",
      size: 16
    })
  }, "Retour au r\xE9pertoire"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: mobile ? "var(--s-4)" : "var(--s-6)",
      alignItems: mobile ? "flex-start" : "flex-end",
      flexDirection: mobile ? "column" : "row",
      marginTop: "var(--s-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: mobile ? 132 : 220,
      height: mobile ? 132 : 220,
      flex: "none",
      borderRadius: "var(--r-card)",
      overflow: "hidden",
      background: "var(--cover-bg)",
      boxShadow: "var(--cover-shadow)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...afficheStyle,
      fontSize: mobile ? 62 : 104,
      lineHeight: 1,
      color: "var(--cover-ink)"
    }
  }, s.title.trim()[0]), /*#__PURE__*/React.createElement("span", {
    className: "grain"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-4)",
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--accent-text)"
    }
  }, s.author), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...afficheStyle,
      fontSize: "clamp(32px, 4vw, 56px)",
      lineHeight: 1.05,
      color: "var(--white)",
      overflowWrap: "break-word"
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      flexWrap: "wrap",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, s.duration), /*#__PURE__*/React.createElement("span", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("span", null, "repris 14 fois"), /*#__PURE__*/React.createElement("span", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("span", null, "recueil de septembre")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-3)",
      marginTop: "var(--s-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onPlay(s),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 18,
      strokeWidth: 2.5
    })
  }, "Lancer le chant"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 18
    })
  }, "T\xE9l\xE9charger la chanson"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "list-plus",
      size: 18
    })
  }, "Ajouter \xE0 une liste")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 var(--s-6) var(--s-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      ...cols(mobile, "minmax(0,1fr)", "minmax(0,1fr) 320px"),
      gap: mobile ? "var(--s-6)" : "var(--s-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-5)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: "paroles",
      label: "Paroles"
    }, {
      id: "accords",
      label: "Accords"
    }, {
      id: "videos",
      label: "Enregistrements"
    }],
    value: tab,
    onChange: setTab
  }), body, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      flexWrap: "wrap",
      paddingTop: "var(--s-4)",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 18
    })
  }, "T\xE9l\xE9charger les paroles"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setTab("videos"),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 18
    })
  }, "Voir la vid\xE9o"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)"
    }
  }, "PDF, une page \xB7 accords inclus"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "grid",
      gap: "var(--s-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-3)",
      padding: "var(--s-4)",
      background: "var(--surface-1)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-card)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, "Aper\xE7u vid\xE9o"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 9",
      borderRadius: "var(--r-sm)",
      overflow: "hidden",
      background: "var(--gold-gradient-dim)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "grain"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...afficheStyle,
      fontSize: 44,
      lineHeight: 1,
      color: "#fff",
      opacity: 0.3
    }
  }, s.title.trim()[0]), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Lire la vid\xE9o",
    onClick: () => onPlay(s),
    style: {
      position: "absolute",
      width: 48,
      height: 48,
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      border: "none",
      background: "var(--gold-gradient)",
      color: "#000",
      boxShadow: "var(--glow-md)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 20,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 8,
      bottom: 8,
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "rgba(255,255,255,0.82)"
    }
  }, s.duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onPlay(s),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16,
      strokeWidth: 2.5
    }),
    style: {
      flex: 1
    }
  }, "\xC9couter"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 16
    })
  }, "MP3"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-4)",
      padding: "var(--s-5)",
      background: "var(--surface-1)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-card)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, "Derni\xE8re fois chant\xE9"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-muted)"
    }
  }, "Dimanche 24 ao\xFBt, messe de 10 h 30"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--line)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, "Qui le m\xE8ne"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Claire Mbala",
    size: 32,
    lead: true
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Jonas Petit",
    size: 32
  })))))));
}
Object.assign(window, {
  PageRepertoire,
  PageChant,
  PageHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SitePages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteProgrammation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  Avatar,
  SongRow,
  FilterChip
} = window.ChantsDesignSystem_cafe14;
const ANNONCES = [{
  id: "a6",
  title: "Répétition",
  body: "Deux heures pour travailler les chants, les transitions et l'écoute entre nous.",
  jour: "Dimanche 21 septembre 2025",
  heure: "17 h 00 – 19 h 00",
  lieu: "Salle Harmonie, Aix-en-Provence",
  date: "21 sept.",
  meta: "Dimanche 21 septembre · 17 h 00",
  tags: ["Répétition", "Équipe"],
  affiche: ASSET("events/repetition.png"),
  ratio: "1 / 1",
  unread: true
}, {
  id: "a1",
  title: "Talk Show 100% chrétien",
  body: "Et si Dieu répondait à toutes tes questions ? Une heure d'échange, deux fauteuils, un micro ouvert.",
  jour: "Dimanche 2 août 2026",
  heure: "17:00",
  lieu: "Saint-Charles",
  date: "2 août",
  meta: "Dimanche 2 août · 17:00",
  tags: ["Talk show", "Échange"],
  affiche: ASSET("events/talk-show.jpg"),
  unread: true
}, {
  id: "a2",
  title: "Food Festival",
  body: "Qui sera le meilleur couple spirituel ? Repas partagé au parc, jeux et louange en plein air.",
  jour: "Dimanche 9 août 2026",
  heure: "16 h 00",
  lieu: "Parc du 26ème Centenaire",
  date: "9 août",
  meta: "Dimanche 9 août · 16 h 00",
  tags: ["Festival", "Plein air"],
  affiche: ASSET("events/food-festival.jpg"),
  unread: true
}, {
  id: "a3",
  title: "1h dans sa présence",
  body: "Comment être sûr que l'Esprit de Dieu est avec moi ? Une heure de louange et d'adoration ensemble.",
  jour: "Jeudi 13 août 2026",
  heure: "18:45",
  lieu: "Saint-Charles",
  date: "13 août",
  meta: "Jeudi 13 août · 18:45",
  tags: ["Louange", "1h dans sa présence"],
  affiche: ASSET("events/1h-presence-13aout.jpg"),
  unread: false
}, {
  id: "a4",
  title: "Reconnexion avec Dieu",
  body: "Prenez une pause, revenez à l'essentiel : se reposer, se ressourcer, se reconnecter.",
  jour: "Mardi 18 août 2026",
  heure: "19 h 15",
  lieu: "En présentiel",
  date: "18 août",
  meta: "Mardi 18 août · 19 h 15",
  tags: ["Soirée", "Ressourcement"],
  affiche: ASSET("events/reconnexion.jpg"),
  unread: false
}, {
  id: "a5",
  title: "1 heure dans sa présence",
  body: "Dieu est-il réellement avec moi ? Rejoins-nous ce vendredi pour une heure de présence.",
  jour: "Vendredi 21 août 2026",
  heure: "18 h 45",
  lieu: "Saint-Charles",
  date: "21 août",
  meta: "Vendredi 21 août · 18 h 45",
  tags: ["Louange", "Vendredi"],
  affiche: ASSET("events/1heure-presence-21aout.jpg"),
  unread: false
}];

/** Vrai quand la fenêtre est trop étroite pour l'annonce en deux colonnes. */
function useEtroit() {
  const mq = "(max-width: 700px)";
  const [etroit, setEtroit] = React.useState(() => window.matchMedia(mq).matches);
  React.useEffect(() => {
    const m = window.matchMedia(mq);
    const suivi = e => setEtroit(e.matches);
    m.addEventListener("change", suivi);
    setEtroit(m.matches);
    return () => m.removeEventListener("change", suivi);
  }, []);
  return etroit;
}

/** Annonce d'événement : affiche entière à gauche, informations et actions à droite. */
function AnnonceCard({
  a,
  onParticiper = () => {},
  onVoirChants = () => {}
}) {
  const [hover, setHover] = React.useState(false);
  const etroit = useMobile(700);
  const info = (icone, texte) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--small)",
      color: hover ? "rgba(15,14,11,0.7)" : "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icone,
    size: 16
  }), " ", texte);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: etroit ? "minmax(0,1fr)" : "clamp(170px, 34%, 300px) minmax(0,1fr)",
      alignItems: etroit ? "start" : "stretch",
      gap: "var(--s-5)",
      padding: "var(--s-4)",
      background: hover ? "linear-gradient(180deg,#F6DC8E 0%,#EFC968 38%,#E9B949 72%,#DDAC44 100%)" : "var(--surface-1)",
      border: "1px solid " + (hover ? "transparent" : "var(--line)"),
      borderRadius: "var(--r-panel)",
      boxShadow: hover ? "0 0 32px rgba(233,185,73,0.30), 0 20px 48px rgba(0,0,0,0.5)" : "none",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "background var(--dur-hover) var(--ease), border-color var(--dur-hover) var(--ease), box-shadow var(--dur-hover) var(--ease), transform var(--dur-hover) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      minWidth: 0,
      maxWidth: etroit ? 300 : "none",
      justifySelf: etroit ? "center" : "stretch",
      aspectRatio: a.ratio || "3 / 4",
      alignSelf: etroit ? "start" : "stretch",
      height: etroit ? "auto" : "100%",
      borderRadius: "var(--r-card)",
      overflow: "hidden",
      background: "#0B0A08"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.affiche,
    alt: "Affiche · " + a.title,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), a.unread ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: 10,
      display: "flex",
      alignItems: "center",
      gap: 7,
      padding: "6px 13px",
      borderRadius: "var(--r-pill)",
      background: "rgba(20,14,4,0.72)",
      border: "1px solid rgba(233,185,73,0.45)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--caption)",
      color: "#FBE9A8"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--gold-500)"
    }
  }), " Nouveau") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      alignContent: "start",
      gap: "var(--s-3)",
      minWidth: 0,
      overflowWrap: "anywhere"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)",
      flexWrap: "wrap"
    }
  }, a.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: "7px 15px",
      borderRadius: "var(--r-pill)",
      background: hover ? "rgba(15,14,11,0.07)" : "var(--surface-2)",
      border: "1px solid " + (hover ? "rgba(15,14,11,0.16)" : "var(--line)"),
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--small)",
      color: hover ? "#0F0E0B" : "var(--text)"
    }
  }, t))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: "var(--subtitle)",
      lineHeight: 1.15,
      color: hover ? "#0F0E0B" : "var(--text)",
      textWrap: "pretty"
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "var(--small)",
      lineHeight: "var(--small-lh)",
      color: hover ? "rgba(15,14,11,0.7)" : "var(--text-muted)",
      textWrap: "pretty"
    }
  }, a.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-3)",
      paddingTop: "var(--s-3)",
      borderTop: "1px solid " + (hover ? "rgba(15,14,11,0.16)" : "var(--line)")
    }
  }, info("calendar", a.jour), info("clock", a.heure), info("map-pin", a.lieu)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      flexWrap: "wrap",
      rowGap: "var(--s-2)",
      marginTop: "var(--s-2)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onParticiper,
    style: {
      height: 44,
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      gap: 9,
      borderRadius: "var(--r-pill)",
      border: "none",
      background: hover ? "linear-gradient(135deg,#2A2A2E 0%,#121214 55%,#000000 100%)" : "linear-gradient(180deg,#F6DC8E 0%,#EFC968 40%,#E9B949 100%)",
      color: hover ? "#FFFFFF" : "#0F0E0B",
      boxShadow: hover ? "0 10px 26px rgba(0,0,0,0.45)" : "none",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      flex: "0 0 auto",
      transition: "box-shadow var(--dur-hover) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17
  }), " Je participe"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onVoirChants,
    style: {
      height: 44,
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      borderRadius: "var(--r-pill)",
      border: "1px solid " + (hover ? "rgba(15,14,11,0.16)" : "var(--line)"),
      background: hover ? "linear-gradient(135deg,#FFFFFF 0%,#F4F2EC 55%,#DCD7CB 100%)" : "var(--surface-2)",
      color: hover ? "#0F0E0B" : "var(--text)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--small)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      flex: "0 0 auto"
    }
  }, "Voir l'affiche"))));
}

/** Rangée d'annonces d'événements qui défile latéralement, sous le héro. */
function AnnonceBandeau({
  onNav = () => {}
}) {
  const rail = React.useRef(null);
  const [par, setPar] = React.useState(3);
  React.useEffect(() => {
    const r = rail.current;
    if (!r) return;
    const mesure = () => {
      const w = r.clientWidth;
      setPar(w >= 1120 ? 2 : 1);
    };
    mesure();
    const ro = new ResizeObserver(mesure);
    ro.observe(r);
    return () => ro.disconnect();
  }, []);
  const glisse = dir => {
    const r = rail.current;
    if (!r) return;
    const carte = r.firstElementChild;
    const gap = parseFloat(getComputedStyle(r).columnGap) || 0;
    const pas = carte ? carte.getBoundingClientRect().width + gap : r.clientWidth;
    r.scrollBy({
      left: dir * pas,
      behavior: "smooth"
    });
  };
  const fleche = dir => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": dir < 0 ? "Annonces précédentes" : "Annonces suivantes",
    onClick: () => glisse(dir),
    style: {
      width: 36,
      height: 36,
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      cursor: "pointer",
      border: dir < 0 ? "1px solid var(--line)" : "none",
      background: dir < 0 ? "var(--surface-2)" : "var(--gold-gradient)",
      color: dir < 0 ? "var(--text-muted)" : "var(--on-accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: dir < 0 ? "chevron-left" : "chevron-right",
    size: 18,
    strokeWidth: 2.5
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "annonces",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--bg-deep)",
      borderBottom: "1px solid var(--line)",
      padding: "var(--s-8) 0"
    }
  }, /*#__PURE__*/React.createElement(Halo, {
    size: 520,
    style: {
      left: "18%",
      top: "-60%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--s-5)",
      marginBottom: "var(--s-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-2)",
      padding: "10px 22px",
      borderRadius: "var(--r-pill)",
      background: "var(--pill-bg)",
      border: "1px solid var(--pill-line)",
      boxShadow: "var(--pill-shadow)",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--lead)",
      color: "var(--pill-ink)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "megaphone",
    size: 18
  }), " Annonces"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)"
    }
  }, fleche(-1), fleche(1))), /*#__PURE__*/React.createElement("div", {
    ref: rail,
    style: {
      scrollbarWidth: "none",
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "calc((100% - " + (par - 1) + " * var(--gutter)) / " + par + ")",
      gap: "var(--gutter)",
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      paddingBottom: 4
    }
  }, ANNONCES.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      scrollSnapAlign: "start"
    }
  }, /*#__PURE__*/React.createElement(AnnonceCard, {
    a: a,
    onParticiper: () => onNav("programmation"),
    onVoirChants: () => onNav("accueil", "liste")
  }))))));
}
const EVENEMENTS = [{
  id: "e1",
  label: "Dimanche 7 sept.",
  court: "Dim. 7 sept.",
  ton: "clair",
  titre: "1h dans sa présence",
  heure: "10 h 30",
  lieu: "Église Saint-Cannat",
  resume: "Une heure de louange et d'adoration ensemble, sans programme serré.",
  affiche: ASSET("events/1h-presence-13aout.jpg"),
  songs: [0, 1, 2, 3, 4, 7],
  equipe: ["Claire Mbala", "Jonas Petit", "Awa Diop"]
}, {
  id: "e2",
  label: "Jeudi 11 sept.",
  court: "Jeu. 11 sept.",
  ton: "sombre",
  titre: "Répétition",
  heure: "19 h 30",
  lieu: "Salle Sainte-Anne",
  resume: "On travaille les nouveaux chants et les transitions du dimanche.",
  affiche: ASSET("events/repetition.png"),
  songs: [1, 5, 6, 9],
  equipe: ["Claire Mbala", "Marc Olivier"]
}, {
  id: "e3",
  label: "Samedi 20 sept.",
  court: "Sam. 20 sept.",
  ton: "clair",
  titre: "Holy stream",
  heure: "20 h 00",
  lieu: "Église Saint-Cannat",
  resume: "Soirée diffusée en direct : louange, témoignages et prière.",
  affiche: ASSET("hero-stairs.png"),
  songs: [2, 4, 6, 8, 9],
  equipe: ["Awa Diop", "Jonas Petit", "Léa Roux"]
}, {
  id: "e4",
  label: "Dimanche 28 sept.",
  court: "Dim. 28 sept.",
  ton: "clair",
  titre: "1h dans sa présence",
  heure: "10 h 30",
  lieu: "Église Saint-Cannat",
  resume: "Le rendez-vous du dimanche matin, ouvert à tous.",
  affiche: ASSET("events/talk-show.jpg"),
  songs: [0, 3, 5, 7],
  equipe: ["Claire Mbala", "Paul Ferrand"]
}];

/** Fiche verticale d'un événement : visuel, informations, trois repères, action. */
function FicheEvenement({
  ev
}) {
  const encre = "var(--ev-ink)";
  const encreDouce = "var(--ev-ink-soft)";
  const encreFaible = "var(--ev-ink-faint)";
  const filet = "var(--ev-line)";
  const fond = "var(--ev-bg)";
  const repere = (valeur, legende) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: "var(--caption)",
      lineHeight: 1.3,
      overflowWrap: "anywhere",
      color: "var(--ev-ink-strong)"
    }
  }, valeur), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: 11,
      color: encreFaible
    }
  }, legende));
  return /*#__PURE__*/React.createElement("article", {
    key: ev.id,
    className: "on-dark",
    style: {
      display: "grid",
      gap: "var(--s-4)",
      padding: "var(--s-3)",
      background: fond,
      border: "1px solid " + filet,
      borderRadius: "var(--r-panel)",
      boxShadow: "var(--ev-shadow)",
      animation: "letterIn 450ms var(--ease)",
      height: "100%",
      gridTemplateRows: "auto 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 200,
      borderRadius: "var(--r-card)",
      overflow: "hidden",
      background: "var(--surface-2)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ev.affiche,
    alt: "Affiche · " + ev.titre,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-4)",
      padding: "0 var(--s-2) var(--s-2)",
      gridTemplateRows: "auto 1fr auto",
      alignContent: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",
      gap: "var(--s-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: "var(--lead)",
      color: encre
    }
  }, ev.titre), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: encreDouce
    }
  }, ev.lieu)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, ev.equipe.map((w, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: w,
    name: w,
    size: 26,
    lead: i === 0
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "var(--caption)",
      lineHeight: 1.55,
      color: encreDouce,
      textWrap: "pretty"
    }
  }, ev.resume), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.25fr) minmax(0,0.8fr) minmax(0,1fr)",
      gap: "var(--s-3)",
      paddingTop: "var(--s-2)",
      borderTop: "1px solid " + filet
    }
  }, repere(ev.court || ev.label, "Date"), repere(ev.heure, "Heure"), repere(ev.songs.length + " chants", "Programme"))));
}

/** Liste de chants qui change selon l'événement choisi. */
function ListeEvenement({
  onOpenSong = () => {},
  onPlay = () => {}
}) {
  const mobile = useMobile();
  const [id, setId] = React.useState(EVENEMENTS[0].id);
  const ev = EVENEMENTS.find(e => e.id === id);
  const songs = ev.songs.map(k => window.CHANTS[k]);
  const minutes = songs.reduce((m, s) => m + parseInt(s.duration.split(":")[0], 10), 0);
  return /*#__PURE__*/React.createElement("section", {
    id: "liste",
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "var(--s-6) var(--s-6) var(--s-9)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    overline: "\xC9vents",
    title: ev.titre + " · " + ev.label,
    action: "Ouvrir la liste",
    onAction: () => onOpenSong(songs[0])
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)",
      flexWrap: "wrap",
      marginBottom: "var(--s-5)"
    }
  }, EVENEMENTS.map(e => /*#__PURE__*/React.createElement(FilterChip, {
    key: e.id,
    active: e.id === id,
    onClick: () => setId(e.id)
  }, e.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      ...cols(mobile, "minmax(0,1fr)", "minmax(0,1fr) 330px"),
      gap: mobile ? "var(--s-6)" : "var(--s-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: ev.id,
    style: {
      animation: "letterIn 450ms var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-3)"
    }
  }, songs.map((s, i) => /*#__PURE__*/React.createElement(SongRow, _extends({
    key: s.id,
    variant: "pill",
    index: i + 1
  }, s, {
    onClick: () => onOpenSong(s),
    onPlay: () => onPlay(s)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      marginTop: "var(--s-4)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, songs.length, " chants"), /*#__PURE__*/React.createElement("span", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("span", null, "environ ", minutes, " minutes"), /*#__PURE__*/React.createElement("span", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("span", null, "mise \xE0 jour ce matin"))), /*#__PURE__*/React.createElement(FicheEvenement, {
    ev: ev
  }))));
}

/** Page Programmation : dates, heures, équipes et confirmation de présence. */
function PageProgrammation() {
  const mobile = useMobile();
  const [reponses, setReponses] = React.useState({
    e1: "oui"
  });
  const set = (id, v) => setReponses(r => ({
    ...r,
    [id]: v
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    gold: true,
    overline: "Programmation",
    title: "Prochaines dates",
    info: ["4 événements", "répétition le jeudi, 19 h 30", "confirmez avant le mercredi"]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "var(--s-6) var(--s-6) var(--s-9)",
      display: "grid",
      gap: "var(--s-5)"
    }
  }, EVENEMENTS.map(ev => {
    const r = reponses[ev.id];
    return /*#__PURE__*/React.createElement(Reveal, {
      key: ev.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "on-dark",
      style: {
        display: "grid",
        ...cols(mobile, "minmax(0,1fr)", "160px minmax(0,1fr) auto"),
        gap: mobile ? "var(--s-4)" : "var(--s-6)",
        alignItems: mobile ? "start" : "center",
        padding: "var(--s-5)",
        background: "var(--ev-bg)",
        border: "1px solid " + (r === "oui" ? "var(--gold-700)" : "var(--ev-line)"),
        borderRadius: "var(--r-card)",
        boxShadow: "var(--ev-shadow)",
        transition: "border-color var(--dur-hover) var(--ease)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: 600,
        fontSize: "var(--small)",
        color: "var(--text)"
      }
    }, ev.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: 600,
        fontSize: "var(--caption)",
        color: "var(--accent-text)"
      }
    }, ev.heure)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--s-2)",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: 600,
        fontSize: "var(--lead)",
        color: "var(--text)"
      }
    }, ev.titre), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--s-3)",
        fontFamily: "var(--font-ui)",
        fontWeight: 500,
        fontSize: "var(--caption)",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", null, ev.lieu), /*#__PURE__*/React.createElement("span", {
      className: "hairline"
    }), /*#__PURE__*/React.createElement("span", null, ev.songs.length, " chants")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginTop: 2
      }
    }, ev.equipe.map((w, i) => /*#__PURE__*/React.createElement(Avatar, {
      key: w,
      name: w,
      size: 26,
      lead: i === 0
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--s-2)",
        justifyItems: mobile ? "start" : "end",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: mobile ? "grid" : "flex",
        gridTemplateColumns: mobile ? "1fr 1fr" : undefined,
        width: mobile ? "100%" : undefined,
        gap: "var(--s-2)",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => set(ev.id, "oui"),
      style: {
        minHeight: 40,
        padding: "0 16px",
        borderRadius: "var(--r-pill)",
        border: "1px solid " + (r === "oui" ? "transparent" : "var(--line)"),
        background: r === "oui" ? "var(--gold-gradient)" : "var(--surface-2)",
        color: r === "oui" ? "#000" : "var(--text-muted)",
        fontFamily: "var(--font-ui)",
        fontWeight: 600,
        fontSize: "var(--small)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16
    }), " Je suis l\xE0"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => set(ev.id, "non"),
      style: {
        minHeight: 40,
        padding: "0 16px",
        borderRadius: "var(--r-pill)",
        border: "1px solid " + (r === "non" ? "var(--text-muted)" : "var(--line)"),
        background: r === "non" ? "var(--surface-2)" : "transparent",
        color: r === "non" ? "var(--text)" : "var(--text-muted)",
        fontFamily: "var(--font-ui)",
        fontWeight: 500,
        fontSize: "var(--small)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        minWidth: 0,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 16
    }), " Je ne suis pas l\xE0")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontWeight: 500,
        fontSize: "var(--caption)",
        color: "var(--text-faint)"
      }
    }, r === "oui" ? "Présence confirmée" : r === "non" ? "Absence signalée à Claire" : "En attente de votre réponse"))));
  }), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: mobile ? "column" : "row",
      alignItems: mobile ? "stretch" : "center",
      justifyContent: "space-between",
      gap: "var(--s-4)",
      padding: "var(--s-5)",
      background: "var(--bg-deep)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 4,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, "Proposer une date"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-muted)"
    }
  }, "Les responsables re\xE7oivent la proposition et programment l'\xE9quipe.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-plus",
      size: 18
    })
  }, "Proposer une date")))));
}

/** Aperçu d'accueil : les trois prochains rendez-vous et un lien vers la page événements. */
function ApercuEvenements({
  onVoirTout = () => {}
}) {
  const mobile = useMobile();
  return /*#__PURE__*/React.createElement("section", {
    id: "liste",
    style: {
      maxWidth: "var(--content-max)",
      margin: "var(--s-9) auto 0",
      padding: "0 var(--s-6) var(--s-8)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    overline: "\xC9vents",
    title: "Prochains rendez-vous",
    action: "Voir tous les \xE9v\xE9nements",
    onAction: onVoirTout
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: "var(--gutter)",
      alignItems: "stretch",
      ...scroller(mobile, "78%")
    }
  }, EVENEMENTS.slice(0, 3).map(ev => /*#__PURE__*/React.createElement(FicheEvenement, {
    key: ev.id,
    ev: ev
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--s-5)",
      flexWrap: "wrap",
      marginTop: "var(--s-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      rowGap: "var(--s-2)",
      gap: "var(--s-3)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      lineHeight: 1.5,
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, EVENEMENTS.length, " \xE9v\xE9nements \xE0 venir"), /*#__PURE__*/React.createElement("span", {
    className: "hairline",
    style: {
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "1 1 180px",
      minWidth: 0
    }
  }, "listes de chants et \xE9quipes sur la page \xE9v\xE9nements")), /*#__PURE__*/React.createElement(Button, {
    onClick: onVoirTout,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Voir les \xE9v\xE9nements"))));
}

/** Page Évents : liste de chants par événement. */
function PageEvenements({
  onOpenSong = () => {},
  onPlay = () => {}
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    gold: true,
    overline: "\xC9vents",
    title: "Nos \xE9v\xE9nements",
    info: [EVENEMENTS.length + " événements à venir", "listes de chants par date", "équipes programmées"]
  }), /*#__PURE__*/React.createElement(ListeEvenement, {
    onOpenSong: onOpenSong,
    onPlay: onPlay
  }));
}
Object.assign(window, {
  ApercuEvenements,
  PageEvenements,
  AnnonceBandeau,
  AnnonceCard,
  ListeEvenement,
  PageProgrammation,
  ANNONCES,
  EVENEMENTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteProgrammation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteSections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SongCard,
  SongRow,
  AnnouncementCard,
  Avatar,
  Button,
  KeyTag,
  Icon
} = window.ChantsDesignSystem_cafe14;
function Rows({
  onOpen,
  onPlay,
  onOpenSong = () => {}
}) {
  const mobile = useMobile();
  const songs = window.CHANTS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 var(--s-6)",
      display: "grid",
      gap: "var(--row-gap)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    overline: "R\xE9pertoire",
    title: "Les plus repris cette saison",
    action: "Tout voir",
    onAction: onOpen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "var(--gutter)",
      ...scroller(mobile, "48%")
    }
  }, songs.slice(0, 5).map(s => /*#__PURE__*/React.createElement(SongCard, _extends({
    key: s.id
  }, s, {
    onClick: () => onOpenSong(s),
    onPlay: () => onPlay(s)
  }))))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    overline: "Nouveaut\xE9s",
    title: "Ajout\xE9s ce mois-ci",
    action: "Tout voir",
    onAction: onOpen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "var(--gutter)",
      ...scroller(mobile, "48%")
    }
  }, songs.slice(5, 10).map(s => /*#__PURE__*/React.createElement(SongCard, _extends({
    key: s.id
  }, s, {
    onClick: () => onOpenSong(s),
    onPlay: () => onPlay(s)
  }))))));
}
function Recueils({
  onOpen
}) {
  const mobile = useMobile();
  const items = window.RECUEILS;
  return /*#__PURE__*/React.createElement("section", {
    id: "recueils",
    style: {
      position: "relative",
      padding: "var(--s-9) 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Halo, {
    size: 680,
    style: {
      left: "-16%",
      top: "10%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    overline: "Recueils",
    title: "Rassembl\xE9s par temps liturgique",
    action: "Tous les recueils",
    onAction: onOpen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "var(--gutter)",
      ...scroller(mobile, "54%")
    }
  }, items.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    type: "button",
    onClick: onOpen,
    style: {
      position: "relative",
      textAlign: "left",
      padding: 0,
      border: "1px solid var(--line)",
      borderRadius: "var(--r-card)",
      overflow: "hidden",
      background: "var(--surface-1)",
      cursor: "pointer",
      aspectRatio: "3 / 4",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)",
      alignContent: "end",
      gap: "var(--s-2)",
      transition: "transform var(--dur-hover) var(--ease), border-color var(--dur-hover) var(--ease)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.borderColor = "var(--gold-700)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.borderColor = "var(--line)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gold-gradient-dim)",
      opacity: 0.9 - i * 0.12
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "grain"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(0deg, rgba(5,5,6,0.92) 12%, rgba(5,5,6,0.25) 60%, transparent 100%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      ...afficheStyle,
      fontSize: 22,
      lineHeight: "23px",
      color: "var(--white)",
      padding: "0 var(--s-4)",
      boxSizing: "border-box",
      minWidth: 0,
      overflowWrap: "break-word"
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-muted)",
      padding: "0 var(--s-4) var(--s-4)",
      boxSizing: "border-box",
      minWidth: 0
    }
  }, r.count, " chants")))))));
}
function Dimanche({
  onOpen,
  onPlay,
  onOpenSong = () => {}
}) {
  const mobile = useMobile();
  const songs = window.CHANTS.slice(0, 6);
  return /*#__PURE__*/React.createElement("section", {
    id: "dimanche",
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 var(--s-6) var(--s-9)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      ...cols(mobile, "minmax(0,1fr)", "minmax(0,1.4fr) minmax(0,1fr)"),
      gap: mobile ? "var(--s-6)" : "var(--s-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    overline: "Liste du dimanche",
    title: "Dimanche 7 septembre \xB7 messe de 10 h 30",
    action: "Ouvrir la liste",
    onAction: onOpen
  }), /*#__PURE__*/React.createElement("div", null, songs.map((s, i) => /*#__PURE__*/React.createElement(SongRow, _extends({
    key: s.id,
    index: i + 1
  }, s, {
    onClick: () => onOpenSong(s),
    onPlay: () => onPlay(s)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      marginTop: "var(--s-4)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "6 chants"), /*#__PURE__*/React.createElement("span", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("span", null, "26 minutes"), /*#__PURE__*/React.createElement("span", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("span", null, "pr\xE9par\xE9e par Claire"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-4)",
      padding: "var(--s-5)",
      background: "var(--surface-1)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-card)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, "R\xE9p\xE9titions \xE0 venir"), [{
    d: "Jeudi 4 sept.",
    h: "19 h 30",
    l: "Salle Sainte-Anne",
    who: ["Claire Mbala", "Jonas Petit", "Awa Diop"]
  }, {
    d: "Jeudi 11 sept.",
    h: "19 h 30",
    l: "Salle Sainte-Anne",
    who: ["Claire Mbala", "Marc Olivier"]
  }, {
    d: "Samedi 20 sept.",
    h: "10 h 00",
    l: "Église, veillée",
    who: ["Awa Diop", "Jonas Petit", "Léa Roux"]
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.d,
    style: {
      display: "grid",
      gap: "var(--s-2)",
      paddingTop: "var(--s-4)",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--s-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      color: "var(--text)"
    }
  }, r.d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--accent-text)"
    }
  }, r.h)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-muted)"
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 2
    }
  }, r.who.map((w, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: w,
    name: w,
    size: 26,
    lead: i === 0
  }))))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: "var(--s-2)"
    }
  }, "Je serai l\xE0")))));
}
function Annonces() {
  const mobile = useMobile();
  return /*#__PURE__*/React.createElement("section", {
    id: "equipe",
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 var(--s-6) var(--s-9)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    overline: "\xC9quipe",
    title: "Annonces"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      ...cols(mobile, "minmax(0,1fr)", "1fr 1fr"),
      gap: "var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(AnnouncementCard, {
    unread: true,
    title: "R\xE9p\xE9tition d\xE9plac\xE9e \xE0 jeudi",
    body: "M\xEAme salle, 19 h 30. Apportez les partitions du recueil de septembre.",
    meta: "Claire \xB7 2 septembre"
  }), /*#__PURE__*/React.createElement(AnnouncementCard, {
    title: "Trois chants transpos\xE9s en Mi",
    body: "Souffle impr\xE9visible, Tu es l\xE0 pr\xE9sent et Vienne ta paix passent en Mi pour la voix de Claire.",
    meta: "Jonas \xB7 29 ao\xFBt"
  }))));
}
Object.assign(window, {
  Rows,
  Recueils,
  Dimanche,
  Annonces
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteTutos.jsx
try { (() => {
const {
  Button,
  Icon,
  KeyTag,
  FilterChip
} = window.ChantsDesignSystem_cafe14;
const TUTOS = [{
  id: "t1",
  title: "Tenir la tonalité au clavier",
  author: "Marc Olivier",
  dur: "8:12",
  cat: "Clavier",
  niveau: "Débutant"
}, {
  id: "t2",
  title: "Placer sa voix sur les couplets longs",
  author: "Claire Mbala",
  dur: "12:40",
  cat: "Exercice de voix",
  niveau: "Tous niveaux"
}, {
  id: "t7",
  title: "Chanter en duo sans se couvrir",
  author: "Awa Diop",
  dur: "10:18",
  cat: "Chant",
  niveau: "Intermédiaire"
}, {
  id: "t3",
  title: "Transposer un chant sans partition",
  author: "Jonas Petit",
  dur: "6:58",
  cat: "Guitare",
  niveau: "Intermédiaire"
}, {
  id: "t4",
  title: "Échauffement de la voix en dix minutes",
  author: "Léa Roux",
  dur: "15:04",
  cat: "Exercice de voix",
  niveau: "Débutant"
}, {
  id: "t5",
  title: "Rythmiques de louange à la guitare",
  author: "Jonas Petit",
  dur: "9:26",
  cat: "Guitare",
  niveau: "Intermédiaire"
}, {
  id: "t6",
  title: "Brancher et régler la sonorisation",
  author: "Paul Ferrand",
  dur: "7:31",
  cat: "Autre",
  niveau: "Tous niveaux"
}];
function TutoCard({
  t,
  onPlay
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: () => onPlay(t),
    onKeyDown: e => (e.key === "Enter" || e.key === " ") && onPlay(t),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gap: "var(--s-3)",
      cursor: "pointer",
      transform: hover ? "translateY(-4px)" : "none",
      filter: hover ? "drop-shadow(0 0 16px rgba(233,185,73,0.25))" : "none",
      transition: "transform var(--dur-hover) var(--ease), filter var(--dur-hover) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 9",
      borderRadius: "var(--r-card)",
      overflow: "hidden",
      background: "var(--cover-bg)",
      boxShadow: "var(--cover-shadow)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "grain"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...afficheStyle,
      fontSize: 56,
      lineHeight: 1,
      color: "var(--cover-ink)"
    }
  }, t.cat[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(0deg, rgba(5,5,6,0.72) 0%, transparent 62%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      padding: "4px 10px",
      borderRadius: "var(--r-pill)",
      background: "var(--gold-gradient)",
      border: "1px solid rgba(255,255,255,0.24)",
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--caption)",
      color: "#0F0E0B"
    }
  }, t.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      bottom: 12,
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "rgba(255,255,255,0.82)",
      fontVariantNumeric: "tabular-nums"
    }
  }, t.dur), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%) scale(" + (hover ? 1 : 0.9) + ")",
      width: 52,
      height: 52,
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      background: "var(--gold-gradient)",
      color: "#000",
      boxShadow: "var(--glow-md)",
      opacity: hover ? 1 : 0,
      transition: "opacity var(--dur-hover) var(--ease), transform var(--dur-hover) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 22,
    strokeWidth: 2.5
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--small)",
      lineHeight: "var(--small-lh)",
      color: "var(--text)"
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)"
    }
  }, t.author, " \xB7 ", t.niveau)));
}

/** Vidéos tutos : formation de l'équipe, par instrument et par niveau. */
function Tutos({
  onOpenTuto = () => {},
  onAll = () => {}
}) {
  const mobile = useMobile();
  const cats = ["Tout", "Chant", "Exercice de voix", "Guitare", "Clavier", "Autre"];
  const [cat, setCat] = React.useState("Tout");
  const list = cat === "Tout" ? TUTOS : TUTOS.filter(t => t.cat === cat);
  return /*#__PURE__*/React.createElement("section", {
    id: "tutos",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--s-9) 0"
    }
  }, /*#__PURE__*/React.createElement(Halo, {
    size: 640,
    style: {
      right: "-14%",
      top: "6%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    overline: "Vid\xE9os tutos",
    title: "Apprendre entre deux r\xE9p\xE9titions",
    action: "Toutes les vid\xE9os",
    onAction: onAll
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)",
      flexWrap: "wrap",
      marginBottom: "var(--s-5)"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(FilterChip, {
    key: c,
    active: c === cat,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      ...cols(mobile, "minmax(0,1fr)", "repeat(3, minmax(0,1fr))"),
      gap: "var(--gutter)"
    }
  }, list.map(t => /*#__PURE__*/React.createElement(TutoCard, {
    key: t.id,
    t: t,
    onPlay: onOpenTuto
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s-3)",
      marginTop: "var(--s-5)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--caption)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, TUTOS.length, " vid\xE9os"), /*#__PURE__*/React.createElement("span", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("span", null, "5 \xE0 15 minutes"), /*#__PURE__*/React.createElement("span", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("span", null, "tourn\xE9es \xE0 la salle Sainte-Anne")))));
}

/** Page dédiée aux vidéos tutos. */
function PageTutos({
  onOpenTuto = () => {}
}) {
  const mobile = useMobile();
  const cats = ["Tout", "Chant", "Exercice de voix", "Guitare", "Clavier", "Autre"];
  const [cat, setCat] = React.useState("Tout");
  const list = TUTOS.filter(t => cat === "Tout" || t.cat === cat);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    overline: "Vid\xE9os tutos",
    title: "Se former",
    gold: true,
    info: [TUTOS.length + " vidéos", "5 à 15 minutes", "tournées à la salle Sainte-Anne"]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s-3)",
      marginTop: "var(--s-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s-2)",
      flexWrap: "wrap"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(FilterChip, {
    key: c,
    active: c === cat,
    onClick: () => setCat(c)
  }, c))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "var(--s-6) var(--s-6) var(--s-9)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      ...cols(mobile, "minmax(0,1fr)", "repeat(3, minmax(0,1fr))"),
      gap: "var(--gutter)"
    }
  }, list.map(t => /*#__PURE__*/React.createElement(TutoCard, {
    key: t.id,
    t: t,
    onPlay: onOpenTuto
  }))), list.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--s-6) 0 0",
      fontFamily: "var(--font-text)",
      fontSize: "var(--body)",
      color: "var(--text-muted)"
    }
  }, "Aucune vid\xE9o pour ce filtre.") : null)));
}
Object.assign(window, {
  Tutos,
  PageTutos,
  TutoCard,
  TUTOS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteTutos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteWelcome.jsx
try { (() => {
const {
  Icon
} = window.ChantsDesignSystem_cafe14;

/** Écran d'entrée mobile : photo en haut, feuille d'authentification en bas. */
function AuthField({
  label,
  type = "text",
  placeholder,
  autoComplete,
  hint
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: "var(--caption)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    className: "auth-input",
    type: type,
    placeholder: placeholder,
    autoComplete: autoComplete
  }), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
function MobileWelcome({
  onEnter = () => {}
}) {
  const [mode, setMode] = React.useState("accueil");
  const form = mode !== "accueil";
  const pill = {
    width: "100%",
    height: 46,
    minHeight: 46,
    display: "grid",
    placeItems: "center",
    borderRadius: "var(--r-pill)",
    fontFamily: "var(--font-ui)",
    fontWeight: 700,
    fontSize: "var(--small)",
    cursor: "pointer"
  };
  const or = {
    border: "none",
    background: "none",
    padding: 0,
    font: "inherit",
    color: "var(--accent-text)",
    cursor: "pointer",
    textDecoration: "underline",
    textUnderlineOffset: 3
  };
  const submit = e => {
    e.preventDefault();
    onEnter();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 80,
      background: "var(--bg)",
      display: "grid",
      gridTemplateRows: form ? "calc(320px + var(--safe-top)) auto" : "1fr auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET("hero-stairs.png"),
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "grain",
    style: {
      position: "absolute",
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(5,5,6,0.30) 0%, rgba(5,5,6,0.10) 42%, rgba(5,5,6,0.70) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 2,
      display: "grid",
      alignContent: form ? "start" : "center",
      justifyItems: "center",
      padding: form ? "calc(68px + var(--safe-top)) 32px 0" : "0 var(--s-6)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET("logo.png"),
    alt: "Team Louange Marseille",
    style: {
      width: form ? 72 : 116,
      height: form ? 72 : 116,
      objectFit: "contain",
      display: "block",
      filter: "drop-shadow(0 8px 22px rgba(0,0,0,0.55))"
    }
  })), form ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMode("accueil"),
    "aria-label": "Retour",
    style: {
      position: "absolute",
      zIndex: 3,
      top: "calc(env(safe-area-inset-top) + 12px)",
      left: 12,
      width: 44,
      height: 44,
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--r-pill)",
      border: "1px solid rgba(255,255,255,0.18)",
      background: "rgba(5,5,6,0.45)",
      backdropFilter: "blur(10px)",
      color: "var(--on-media)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 18
  })) : null), /*#__PURE__*/React.createElement("form", {
    className: "on-dark",
    onSubmit: submit,
    style: {
      position: "relative",
      marginTop: -140,
      background: "linear-gradient(180deg, rgba(5,5,6,0) 0px, rgba(5,5,6,0.55) 60px, rgba(5,5,6,0.92) 112px, #050506 175px)",
      display: "grid",
      justifyItems: "center",
      gap: "var(--s-3)",
      padding: "calc(var(--s-8) + 40px) var(--s-6) calc(env(safe-area-inset-bottom) + var(--s-6))"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "gold-fill",
    style: {
      margin: 0,
      fontFamily: "var(--font-affiche)",
      fontWeight: 800,
      fontStretch: "125%",
      fontVariationSettings: '"wdth" 125, "wght" 800',
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      fontSize: form ? 26 : 32,
      lineHeight: form ? "28px" : "34px",
      textAlign: "center"
    }
  }, mode === "connexion" ? "Connexion" : mode === "inscription" ? "Créer un compte" : "Bienvenue"), mode === "accueil" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "30ch",
      textAlign: "center",
      fontFamily: "var(--font-text)",
      fontSize: "var(--small)",
      lineHeight: "var(--small-lh)",
      color: "var(--text-muted)"
    }
  }, "Les chants, les listes du dimanche et les r\xE9p\xE9titions de l'\xE9quipe.", /*#__PURE__*/React.createElement("br", null), "Tout le r\xE9pertoire dans votre poche."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "grid",
      gap: "var(--s-3)",
      marginTop: "var(--s-3)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMode("connexion"),
    style: {
      ...pill,
      border: "none",
      background: "var(--gold-gradient)",
      color: "#000",
      boxShadow: "0 0 24px rgba(233,185,73,0.35)"
    }
  }, "Se connecter"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMode("inscription"),
    style: {
      ...pill,
      background: "transparent",
      border: "1px solid var(--line)",
      color: "var(--text)"
    }
  }, "Cr\xE9er un compte"))) : null, mode === "connexion" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "grid",
      gap: "var(--s-4)",
      marginTop: "var(--s-3)"
    }
  }, /*#__PURE__*/React.createElement(AuthField, {
    label: "Adresse e-mail",
    type: "email",
    placeholder: "prenom@exemple.fr",
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement(AuthField, {
    label: "Mot de passe",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    autoComplete: "current-password"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      fontFamily: "var(--font-text)",
      fontSize: "var(--caption)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: or
  }, "Mot de passe oubli\xE9 ?")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      ...pill,
      marginTop: "var(--s-2)",
      border: "none",
      background: "var(--gold-gradient)",
      color: "#000",
      boxShadow: "0 0 24px rgba(233,185,73,0.35)"
    }
  }, "Se connecter"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "var(--caption)",
      color: "var(--text-muted)"
    }
  }, "Pas encore de compte ? ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMode("inscription"),
    style: or
  }, "Cr\xE9er un compte"))) : null, mode === "inscription" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "grid",
      gap: "var(--s-4)",
      marginTop: "var(--s-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--s-3)"
    }
  }, /*#__PURE__*/React.createElement(AuthField, {
    label: "Pr\xE9nom",
    placeholder: "Marie",
    autoComplete: "given-name"
  }), /*#__PURE__*/React.createElement(AuthField, {
    label: "Nom",
    placeholder: "Ndiaye",
    autoComplete: "family-name"
  })), /*#__PURE__*/React.createElement(AuthField, {
    label: "Adresse e-mail",
    type: "email",
    placeholder: "prenom@exemple.fr",
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement(AuthField, {
    label: "Mot de passe",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    autoComplete: "new-password",
    hint: "8 caract\xE8res minimum."
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      ...pill,
      marginTop: "var(--s-2)",
      border: "none",
      background: "var(--gold-gradient)",
      color: "#000",
      boxShadow: "0 0 24px rgba(233,185,73,0.35)"
    }
  }, "Cr\xE9er mon compte"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "var(--caption)",
      color: "var(--text-muted)"
    }
  }, "D\xE9j\xE0 membre ? ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMode("connexion"),
    style: or
  }, "Se connecter"))) : null));
}
Object.assign(window, {
  MobileWelcome,
  AuthField
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteWelcome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/assets.js
try { (() => {
// Résout les chemins d'images pour les deux emplacements de la page :
// aperçu à ui_kits/site/ (../../assets/) et export autonome à la racine (assets/).
window.ASSET = function (p) {
  var base = /\/ui_kits\/site\//.test(location.pathname) ? '../../assets/' : 'assets/';
  return base + p;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/assets.js", error: String((e && e.message) || e) }); }

// ui_kits/site/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.AnnouncementCard = __ds_scope.AnnouncementCard;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.SongCard = __ds_scope.SongCard;

__ds_ns.SongRow = __ds_scope.SongRow;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.KeyTag = __ds_scope.KeyTag;

__ds_ns.PosterTitle = __ds_scope.PosterTitle;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Player = __ds_scope.Player;

})();
