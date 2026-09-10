const { Button, Icon, Avatar, SongRow, FilterChip } = window.ChantsDesignSystem_cafe14;

const ANNONCES = [
  { id: "a6", title: "Répétition", body: "Deux heures pour travailler les chants, les transitions et l'écoute entre nous.", jour: "Dimanche 21 septembre 2025", heure: "17 h 00 – 19 h 00", lieu: "Salle Harmonie, Aix-en-Provence", date: "21 sept.", meta: "Dimanche 21 septembre · 17 h 00", tags: ["Répétition", "Équipe"], affiche: ASSET("events/repetition.png"), ratio: "1 / 1", unread: true },
  { id: "a1", title: "Talk Show 100% chrétien", body: "Et si Dieu répondait à toutes tes questions ? Une heure d'échange, deux fauteuils, un micro ouvert.", jour: "Dimanche 2 août 2026", heure: "17:00", lieu: "Saint-Charles", date: "2 août", meta: "Dimanche 2 août · 17:00", tags: ["Talk show", "Échange"], affiche: ASSET("events/talk-show.jpg"), unread: true },
  { id: "a2", title: "Food Festival", body: "Qui sera le meilleur couple spirituel ? Repas partagé au parc, jeux et louange en plein air.", jour: "Dimanche 9 août 2026", heure: "16 h 00", lieu: "Parc du 26ème Centenaire", date: "9 août", meta: "Dimanche 9 août · 16 h 00", tags: ["Festival", "Plein air"], affiche: ASSET("events/food-festival.jpg"), unread: true },
  { id: "a3", title: "1h dans sa présence", body: "Comment être sûr que l'Esprit de Dieu est avec moi ? Une heure de louange et d'adoration ensemble.", jour: "Jeudi 13 août 2026", heure: "18:45", lieu: "Saint-Charles", date: "13 août", meta: "Jeudi 13 août · 18:45", tags: ["Louange", "1h dans sa présence"], affiche: ASSET("events/1h-presence-13aout.jpg"), unread: false },
  { id: "a4", title: "Reconnexion avec Dieu", body: "Prenez une pause, revenez à l'essentiel : se reposer, se ressourcer, se reconnecter.", jour: "Mardi 18 août 2026", heure: "19 h 15", lieu: "En présentiel", date: "18 août", meta: "Mardi 18 août · 19 h 15", tags: ["Soirée", "Ressourcement"], affiche: ASSET("events/reconnexion.jpg"), unread: false },
  { id: "a5", title: "1 heure dans sa présence", body: "Dieu est-il réellement avec moi ? Rejoins-nous ce vendredi pour une heure de présence.", jour: "Vendredi 21 août 2026", heure: "18 h 45", lieu: "Saint-Charles", date: "21 août", meta: "Vendredi 21 août · 18 h 45", tags: ["Louange", "Vendredi"], affiche: ASSET("events/1heure-presence-21aout.jpg"), unread: false },
];

/** Vrai quand la fenêtre est trop étroite pour l'annonce en deux colonnes. */
function useEtroit() {
  const mq = "(max-width: 700px)";
  const [etroit, setEtroit] = React.useState(() => window.matchMedia(mq).matches);
  React.useEffect(() => {
    const m = window.matchMedia(mq);
    const suivi = (e) => setEtroit(e.matches);
    m.addEventListener("change", suivi);
    setEtroit(m.matches);
    return () => m.removeEventListener("change", suivi);
  }, []);
  return etroit;
}

/** Annonce d'événement : affiche entière à gauche, informations et actions à droite. */
function AnnonceCard({ a, onParticiper = () => {}, onVoirChants = () => {} }) {
  const [hover, setHover] = React.useState(false);
  const etroit = useMobile(700);
  const info = (icone, texte) => (
    <span style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--small)", color: hover ? "rgba(15,14,11,0.7)" : "var(--text-muted)" }}>
      <Icon name={icone} size={16} /> {texte}
    </span>
  );
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "grid", gridTemplateColumns: etroit ? "minmax(0,1fr)" : "clamp(170px, 34%, 300px) minmax(0,1fr)", alignItems: etroit ? "start" : "stretch", gap: "var(--s-5)", padding: "var(--s-4)", background: hover ? "linear-gradient(180deg,#F6DC8E 0%,#EFC968 38%,#E9B949 72%,#DDAC44 100%)" : "var(--surface-1)", border: "1px solid " + (hover ? "transparent" : "var(--line)"), borderRadius: "var(--r-panel)", boxShadow: hover ? "0 0 32px rgba(233,185,73,0.30), 0 20px 48px rgba(0,0,0,0.5)" : "none", transform: hover ? "translateY(-3px)" : "none", transition: "background var(--dur-hover) var(--ease), border-color var(--dur-hover) var(--ease), box-shadow var(--dur-hover) var(--ease), transform var(--dur-hover) var(--ease)" }}>
      <div style={{ position: "relative", width: "100%", minWidth: 0, maxWidth: etroit ? 300 : "none", justifySelf: etroit ? "center" : "stretch", aspectRatio: a.ratio || "3 / 4", alignSelf: etroit ? "start" : "stretch", height: etroit ? "auto" : "100%", borderRadius: "var(--r-card)", overflow: "hidden", background: "#0B0A08" }}>
        <img src={a.affiche} alt={"Affiche · " + a.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        {a.unread ? (
          <span style={{ position: "absolute", left: 10, top: 10, display: "flex", alignItems: "center", gap: 7, padding: "6px 13px", borderRadius: "var(--r-pill)", background: "rgba(20,14,4,0.72)", border: "1px solid rgba(233,185,73,0.45)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--caption)", color: "#FBE9A8" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold-500)" }} /> Nouveau
          </span>
        ) : null}
      </div>
      <div style={{ display: "grid", alignContent: "start", gap: "var(--s-3)", minWidth: 0, overflowWrap: "anywhere" }}>
        <div style={{ display: "flex", gap: "var(--s-2)", flexWrap: "wrap" }}>
          {a.tags.map((t) => (
            <span key={t} style={{ padding: "7px 15px", borderRadius: "var(--r-pill)", background: hover ? "rgba(15,14,11,0.07)" : "var(--surface-2)", border: "1px solid " + (hover ? "rgba(15,14,11,0.16)" : "var(--line)"), fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--small)", color: hover ? "#0F0E0B" : "var(--text)" }}>{t}</span>
          ))}
        </div>
        <h3 style={{ margin: 0, fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "var(--subtitle)", lineHeight: 1.15, color: hover ? "#0F0E0B" : "var(--text)", textWrap: "pretty" }}>{a.title}</h3>
        <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--small)", lineHeight: "var(--small-lh)", color: hover ? "rgba(15,14,11,0.7)" : "var(--text-muted)", textWrap: "pretty" }}>{a.body}</p>
        <div style={{ display: "grid", gap: "var(--s-3)", paddingTop: "var(--s-3)", borderTop: "1px solid " + (hover ? "rgba(15,14,11,0.16)" : "var(--line)") }}>
          {info("calendar", a.jour)}
          {info("clock", a.heure)}
          {info("map-pin", a.lieu)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", flexWrap: "wrap", rowGap: "var(--s-2)", marginTop: "var(--s-2)" }}>
          <button type="button" onClick={onParticiper}
            style={{ height: 44, padding: "0 20px", display: "flex", alignItems: "center", gap: 9, borderRadius: "var(--r-pill)", border: "none", background: hover ? "linear-gradient(135deg,#2A2A2E 0%,#121214 55%,#000000 100%)" : "linear-gradient(180deg,#F6DC8E 0%,#EFC968 40%,#E9B949 100%)", color: hover ? "#FFFFFF" : "#0F0E0B", boxShadow: hover ? "0 10px 26px rgba(0,0,0,0.45)" : "none", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", cursor: "pointer", whiteSpace: "nowrap", flex: "0 0 auto", transition: "box-shadow var(--dur-hover) var(--ease)" }}>
            <Icon name="check" size={17} /> Je participe
          </button>
          <button type="button" onClick={onVoirChants}
            style={{ height: 44, padding: "0 20px", display: "flex", alignItems: "center", borderRadius: "var(--r-pill)", border: "1px solid " + (hover ? "rgba(15,14,11,0.16)" : "var(--line)"), background: hover ? "linear-gradient(135deg,#FFFFFF 0%,#F4F2EC 55%,#DCD7CB 100%)" : "var(--surface-2)", color: hover ? "#0F0E0B" : "var(--text)", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--small)", cursor: "pointer", whiteSpace: "nowrap", flex: "0 0 auto" }}>
            Voir l'affiche
          </button>
        </div>
      </div>
    </article>
  );
}

/** Rangée d'annonces d'événements qui défile latéralement, sous le héro. */
function AnnonceBandeau({ onNav = () => {} }) {
  const rail = React.useRef(null);
  const [par, setPar] = React.useState(3);
  React.useEffect(() => {
    const r = rail.current;
    if (!r) return;
    const mesure = () => { const w = r.clientWidth; setPar(w >= 1120 ? 2 : 1); };
    mesure();
    const ro = new ResizeObserver(mesure);
    ro.observe(r);
    return () => ro.disconnect();
  }, []);
  const glisse = (dir) => {
    const r = rail.current;
    if (!r) return;
    const carte = r.firstElementChild;
    const gap = parseFloat(getComputedStyle(r).columnGap) || 0;
    const pas = carte ? carte.getBoundingClientRect().width + gap : r.clientWidth;
    r.scrollBy({ left: dir * pas, behavior: "smooth" });
  };
  const fleche = (dir) => (
    <button type="button" aria-label={dir < 0 ? "Annonces précédentes" : "Annonces suivantes"} onClick={() => glisse(dir)}
      style={{ width: 36, height: 36, display: "grid", placeItems: "center", borderRadius: "50%", cursor: "pointer", border: dir < 0 ? "1px solid var(--line)" : "none", background: dir < 0 ? "var(--surface-2)" : "var(--gold-gradient)", color: dir < 0 ? "var(--text-muted)" : "var(--on-accent)" }}>
      <Icon name={dir < 0 ? "chevron-left" : "chevron-right"} size={18} strokeWidth={2.5} />
    </button>
  );
  return (
    <section id="annonces" style={{ position: "relative", overflow: "hidden", background: "var(--bg-deep)", borderBottom: "1px solid var(--line)", padding: "var(--s-8) 0" }}>
      <Halo size={520} style={{ left: "18%", top: "-60%" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--s-6)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--s-5)", marginBottom: "var(--s-5)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "var(--s-2)", padding: "10px 22px", borderRadius: "var(--r-pill)", background: "var(--pill-bg)", border: "1px solid var(--pill-line)", boxShadow: "var(--pill-shadow)", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--lead)", color: "var(--pill-ink)" }}>
            <Icon name="megaphone" size={18} /> Annonces
          </span>
          <div style={{ display: "flex", gap: "var(--s-2)" }}>{fleche(-1)}{fleche(1)}</div>
        </div>
        <div ref={rail} style={{ scrollbarWidth: "none", display: "grid", gridAutoFlow: "column", gridAutoColumns: "calc((100% - " + (par - 1) + " * var(--gutter)) / " + par + ")", gap: "var(--gutter)", overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 4 }}>
          {ANNONCES.map((a) => <div key={a.id} style={{ scrollSnapAlign: "start" }}><AnnonceCard a={a} onParticiper={() => onNav("programmation")} onVoirChants={() => onNav("accueil", "liste")} /></div>)}
        </div>
      </div>
    </section>
  );
}

const EVENEMENTS = [
  { id: "e1", label: "Dimanche 7 sept.", court: "Dim. 7 sept.", ton: "clair", titre: "1h dans sa présence", heure: "10 h 30", lieu: "Église Saint-Cannat", resume: "Une heure de louange et d'adoration ensemble, sans programme serré.", affiche: ASSET("events/1h-presence-13aout.jpg"), songs: [0, 1, 2, 3, 4, 7], equipe: ["Claire Mbala", "Jonas Petit", "Awa Diop"] },
  { id: "e2", label: "Jeudi 11 sept.", court: "Jeu. 11 sept.", ton: "sombre", titre: "Répétition", heure: "19 h 30", lieu: "Salle Sainte-Anne", resume: "On travaille les nouveaux chants et les transitions du dimanche.", affiche: ASSET("events/repetition.png"), songs: [1, 5, 6, 9], equipe: ["Claire Mbala", "Marc Olivier"] },
  { id: "e3", label: "Samedi 20 sept.", court: "Sam. 20 sept.", ton: "clair", titre: "Holy stream", heure: "20 h 00", lieu: "Église Saint-Cannat", resume: "Soirée diffusée en direct : louange, témoignages et prière.", affiche: ASSET("hero-stairs.png"), songs: [2, 4, 6, 8, 9], equipe: ["Awa Diop", "Jonas Petit", "Léa Roux"] },
  { id: "e4", label: "Dimanche 28 sept.", court: "Dim. 28 sept.", ton: "clair", titre: "1h dans sa présence", heure: "10 h 30", lieu: "Église Saint-Cannat", resume: "Le rendez-vous du dimanche matin, ouvert à tous.", affiche: ASSET("events/talk-show.jpg"), songs: [0, 3, 5, 7], equipe: ["Claire Mbala", "Paul Ferrand"] },
];

/** Fiche verticale d'un événement : visuel, informations, trois repères, action. */
function FicheEvenement({ ev }) {
  const encre = "var(--ev-ink)";
  const encreDouce = "var(--ev-ink-soft)";
  const encreFaible = "var(--ev-ink-faint)";
  const filet = "var(--ev-line)";
  const fond = "var(--ev-bg)";
  const repere = (valeur, legende) => (
    <div style={{ display: "grid", gap: 2, minWidth: 0 }}>
      <span style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "var(--caption)", lineHeight: 1.3, overflowWrap: "anywhere", color: "var(--ev-ink-strong)" }}>{valeur}</span>
      <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 11, color: encreFaible }}>{legende}</span>
    </div>
  );
  return (
    <article key={ev.id} className="on-dark" style={{ display: "grid", gap: "var(--s-4)", padding: "var(--s-3)", background: fond, border: "1px solid " + filet, borderRadius: "var(--r-panel)", boxShadow: "var(--ev-shadow)", animation: "letterIn 450ms var(--ease)", height: "100%", gridTemplateRows: "auto 1fr" }}>
      <div style={{ position: "relative", height: 200, borderRadius: "var(--r-card)", overflow: "hidden", background: "var(--surface-2)" }}>
        <img src={ev.affiche} alt={"Affiche · " + ev.titre} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ display: "grid", gap: "var(--s-4)", padding: "0 var(--s-2) var(--s-2)", gridTemplateRows: "auto 1fr auto", alignContent: "stretch" }}>
        <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", gap: "var(--s-3)" }}>
          <div style={{ display: "grid", gap: 3, minWidth: 0 }}>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "var(--lead)", color: encre }}>{ev.titre}</span>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: encreDouce }}>{ev.lieu}</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>{ev.equipe.map((w, i) => <Avatar key={w} name={w} size={26} lead={i === 0} />)}</div>
        </div>
        <p style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--caption)", lineHeight: 1.55, color: encreDouce, textWrap: "pretty" }}>{ev.resume}</p>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.25fr) minmax(0,0.8fr) minmax(0,1fr)", gap: "var(--s-3)", paddingTop: "var(--s-2)", borderTop: "1px solid " + filet }}>
          {repere(ev.court || ev.label, "Date")}
          {repere(ev.heure, "Heure")}
          {repere(ev.songs.length + " chants", "Programme")}
        </div>
      </div>
    </article>
  );
}

/** Liste de chants qui change selon l'événement choisi. */
function ListeEvenement({ onOpenSong = () => {}, onPlay = () => {} }) {
  const mobile = useMobile();
  const [id, setId] = React.useState(EVENEMENTS[0].id);
  const ev = EVENEMENTS.find((e) => e.id === id);
  const songs = ev.songs.map((k) => window.CHANTS[k]);
  const minutes = songs.reduce((m, s) => m + parseInt(s.duration.split(":")[0], 10), 0);
  return (
    <section id="liste" style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--s-6) var(--s-6) var(--s-9)" }}>
      <Reveal>
        <SectionHead overline="Évents" title={ev.titre + " · " + ev.label} action="Ouvrir la liste" onAction={() => onOpenSong(songs[0])} />
        <div style={{ display: "flex", gap: "var(--s-2)", flexWrap: "wrap", marginBottom: "var(--s-5)" }}>
          {EVENEMENTS.map((e) => <FilterChip key={e.id} active={e.id === id} onClick={() => setId(e.id)}>{e.label}</FilterChip>)}
        </div>
        <div style={{ display: "grid", ...cols(mobile, "minmax(0,1fr)", "minmax(0,1fr) 330px"), gap: mobile ? "var(--s-6)" : "var(--s-8)", alignItems: "start" }}>
          <div key={ev.id} style={{ animation: "letterIn 450ms var(--ease)" }}>
            <div style={{ display: "grid", gap: "var(--s-3)" }}>
              {songs.map((s, i) => <SongRow key={s.id} variant="pill" index={i + 1} {...s} onClick={() => onOpenSong(s)} onPlay={() => onPlay(s)} />)}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", marginTop: "var(--s-4)", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)" }}>
              <span>{songs.length} chants</span><span className="hairline" /><span>environ {minutes} minutes</span><span className="hairline" /><span>mise à jour ce matin</span>
            </div>
          </div>
          <FicheEvenement ev={ev} />
        </div>
      </Reveal>
    </section>
  );
}

/** Page Programmation : dates, heures, équipes et confirmation de présence. */
function PageProgrammation() {
  const mobile = useMobile();
  const [reponses, setReponses] = React.useState({ e1: "oui" });
  const set = (id, v) => setReponses((r) => ({ ...r, [id]: v }));
  return (
    <>
      <PageHead gold overline="Programmation" title="Prochaines dates" info={["4 événements", "répétition le jeudi, 19 h 30", "confirmez avant le mercredi"]} />
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--s-6) var(--s-6) var(--s-9)", display: "grid", gap: "var(--s-5)" }}>
        {EVENEMENTS.map((ev) => {
          const r = reponses[ev.id];
          return (
            <Reveal key={ev.id}>
              <div className="on-dark" style={{ display: "grid", ...cols(mobile, "minmax(0,1fr)", "160px minmax(0,1fr) auto"), gap: mobile ? "var(--s-4)" : "var(--s-6)", alignItems: mobile ? "start" : "center", padding: "var(--s-5)", background: "var(--ev-bg)", border: "1px solid " + (r === "oui" ? "var(--gold-700)" : "var(--ev-line)"), borderRadius: "var(--r-card)", boxShadow: "var(--ev-shadow)", transition: "border-color var(--dur-hover) var(--ease)" }}>
                <div style={{ display: "grid", gap: 2 }}>
                  <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--text)" }}>{ev.label}</span>
                  <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--caption)", color: "var(--accent-text)" }}>{ev.heure}</span>
                </div>
                <div style={{ display: "grid", gap: "var(--s-2)", minWidth: 0 }}>
                  <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--lead)", color: "var(--text)" }}>{ev.titre}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-muted)" }}>
                    <span>{ev.lieu}</span><span className="hairline" /><span>{ev.songs.length} chants</span>
                  </span>
                  <div style={{ display: "flex", gap: 6, marginTop: 2 }}>{ev.equipe.map((w, i) => <Avatar key={w} name={w} size={26} lead={i === 0} />)}</div>
                </div>
                <div style={{ display: "grid", gap: "var(--s-2)", justifyItems: mobile ? "start" : "end", minWidth: 0 }}>
                  <div style={{ display: mobile ? "grid" : "flex", gridTemplateColumns: mobile ? "1fr 1fr" : undefined, width: mobile ? "100%" : undefined, gap: "var(--s-2)", flexWrap: "wrap" }}>
                    <button type="button" onClick={() => set(ev.id, "oui")}
                      style={{ minHeight: 40, padding: "0 16px", borderRadius: "var(--r-pill)", border: "1px solid " + (r === "oui" ? "transparent" : "var(--line)"), background: r === "oui" ? "var(--gold-gradient)" : "var(--surface-2)", color: r === "oui" ? "#000" : "var(--text-muted)", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, minWidth: 0 }}>
                      <Icon name="check" size={16} /> Je suis là
                    </button>
                    <button type="button" onClick={() => set(ev.id, "non")}
                      style={{ minHeight: 40, padding: "0 16px", borderRadius: "var(--r-pill)", border: "1px solid " + (r === "non" ? "var(--text-muted)" : "var(--line)"), background: r === "non" ? "var(--surface-2)" : "transparent", color: r === "non" ? "var(--text)" : "var(--text-muted)", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--small)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, minWidth: 0, textAlign: "center" }}>
                      <Icon name="x" size={16} /> Je ne suis pas là
                    </button>
                  </div>
                  <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)" }}>
                    {r === "oui" ? "Présence confirmée" : r === "non" ? "Absence signalée à Claire" : "En attente de votre réponse"}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
        <Reveal>
          <div style={{ display: "flex", flexDirection: mobile ? "column" : "row", alignItems: mobile ? "stretch" : "center", justifyContent: "space-between", gap: "var(--s-4)", padding: "var(--s-5)", background: "var(--bg-deep)", border: "1px solid var(--line)", borderRadius: "var(--r-card)" }}>
            <div style={{ display: "grid", gap: 4, minWidth: 0 }}>
              <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--text)" }}>Proposer une date</span>
              <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-muted)" }}>Les responsables reçoivent la proposition et programment l'équipe.</span>
            </div>
            <Button variant="secondary" iconLeft={<Icon name="calendar-plus" size={18} />}>Proposer une date</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/** Aperçu d'accueil : les trois prochains rendez-vous et un lien vers la page événements. */
function ApercuEvenements({ onVoirTout = () => {} }) {
  const mobile = useMobile();
  return (
    <section id="liste" style={{ maxWidth: "var(--content-max)", margin: "var(--s-9) auto 0", padding: "0 var(--s-6) var(--s-8)" }}>
      <Reveal>
        <SectionHead overline="Évents" title="Prochains rendez-vous" action="Voir tous les événements" onAction={onVoirTout} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--gutter)", alignItems: "stretch", ...scroller(mobile, "78%") }}>
          {EVENEMENTS.slice(0, 3).map((ev) => <FicheEvenement key={ev.id} ev={ev} />)}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--s-5)", flexWrap: "wrap", marginTop: "var(--s-7)" }}>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", rowGap: "var(--s-2)", gap: "var(--s-3)", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", lineHeight: 1.5, color: "var(--text-faint)" }}>
            <span style={{ whiteSpace: "nowrap" }}>{EVENEMENTS.length} événements à venir</span><span className="hairline" style={{ flex: "0 0 auto" }} /><span style={{ flex: "1 1 180px", minWidth: 0 }}>listes de chants et équipes sur la page événements</span>
          </div>
          <Button onClick={onVoirTout} iconRight={<Icon name="arrow-right" size={18} />}>Voir les événements</Button>
        </div>
      </Reveal>
    </section>
  );
}

/** Page Évents : liste de chants par événement. */
function PageEvenements({ onOpenSong = () => {}, onPlay = () => {} }) {
  return (
    <>
      <PageHead gold overline="Évents" title="Nos événements" info={[EVENEMENTS.length + " événements à venir", "listes de chants par date", "équipes programmées"]} />
      <ListeEvenement onOpenSong={onOpenSong} onPlay={onPlay} />
    </>
  );
}

Object.assign(window, { ApercuEvenements, PageEvenements, AnnonceBandeau, AnnonceCard, ListeEvenement, PageProgrammation, ANNONCES, EVENEMENTS });
