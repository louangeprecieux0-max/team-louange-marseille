const { SongCard, SongRow, AnnouncementCard, Avatar, Button, KeyTag, Icon } = window.ChantsDesignSystem_cafe14;

function Rows({ onOpen, onPlay, onOpenSong = () => {} }) {
  const mobile = useMobile();
  const songs = window.CHANTS;
  return (
    <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--s-6)", display: "grid", gap: "var(--row-gap)" }}>
      <Reveal>
        <SectionHead overline="Répertoire" title="Les plus repris cette saison" action="Tout voir" onAction={onOpen} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--gutter)", ...scroller(mobile, "48%") }}>
          {songs.slice(0, 5).map((s) => <SongCard key={s.id} {...s} onClick={() => onOpenSong(s)} onPlay={() => onPlay(s)} />)}
        </div>
      </Reveal>
      <Reveal>
        <SectionHead overline="Nouveautés" title="Ajoutés ce mois-ci" action="Tout voir" onAction={onOpen} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--gutter)", ...scroller(mobile, "48%") }}>
          {songs.slice(5, 10).map((s) => <SongCard key={s.id} {...s} onClick={() => onOpenSong(s)} onPlay={() => onPlay(s)} />)}
        </div>
      </Reveal>
    </div>
  );
}

function Recueils({ onOpen }) {
  const mobile = useMobile();
  const items = window.RECUEILS;
  return (
    <section id="recueils" style={{ position: "relative", padding: "var(--s-9) 0", overflow: "hidden" }}>
      <Halo size={680} style={{ left: "-16%", top: "10%" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--s-6)" }}>
        <Reveal>
          <SectionHead overline="Recueils" title="Rassemblés par temps liturgique" action="Tous les recueils" onAction={onOpen} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--gutter)", ...scroller(mobile, "54%") }}>
            {items.map((r, i) => (
              <button key={r.id} type="button" onClick={onOpen}
                style={{ position: "relative", textAlign: "left", padding: 0, border: "1px solid var(--line)", borderRadius: "var(--r-card)", overflow: "hidden", background: "var(--surface-1)", cursor: "pointer", aspectRatio: "3 / 4", display: "grid", gridTemplateColumns: "minmax(0,1fr)", alignContent: "end", gap: "var(--s-2)", transition: "transform var(--dur-hover) var(--ease), border-color var(--dur-hover) var(--ease)" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "var(--gold-700)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--line)"; }}>
                <span style={{ position: "absolute", inset: 0, background: "var(--gold-gradient-dim)", opacity: 0.9 - i * 0.12 }} />
                <span className="grain" />
                <span style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(5,5,6,0.92) 12%, rgba(5,5,6,0.25) 60%, transparent 100%)" }} />
                <span style={{ position: "relative", ...afficheStyle, fontSize: 22, lineHeight: "23px", color: "var(--white)", padding: "0 var(--s-4)", boxSizing: "border-box", minWidth: 0, overflowWrap: "break-word" }}>{r.title}</span>
                <span style={{ position: "relative", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-muted)", padding: "0 var(--s-4) var(--s-4)", boxSizing: "border-box", minWidth: 0 }}>{r.count} chants</span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Formate une date ISO ("2026-09-11") en repère court ("Jeudi 11 sept."). */
function formatRehearsalDate(iso) {
  try {
    const d = new Date(iso + "T00:00:00");
    const s = d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "short" });
    return s.charAt(0).toUpperCase() + s.slice(1);
  } catch (e) {
    return iso;
  }
}

const REHEARSALS_FALLBACK = [
  { id: "f1", d: "Jeudi 4 sept.", h: "19 h 30", l: "Salle Sainte-Anne", who: ["Claire Mbala", "Jonas Petit", "Awa Diop"] },
  { id: "f2", d: "Jeudi 11 sept.", h: "19 h 30", l: "Salle Sainte-Anne", who: ["Claire Mbala", "Marc Olivier"] },
  { id: "f3", d: "Samedi 20 sept.", h: "10 h 00", l: "Église, veillée", who: ["Awa Diop", "Jonas Petit", "Léa Roux"] },
];

/** Liste de répétitions : lecture pour tous, formation d'équipe éditable par l'admin. */
function Repetitions({ isAdmin = false }) {
  const [rows, setRows] = React.useState(REHEARSALS_FALLBACK);
  const [drafts, setDrafts] = React.useState({});
  const [busy, setBusy] = React.useState(null);

  const load = React.useCallback(() => {
    if (!window.Data) return;
    window.Data.rehearsals().then((data) => {
      if (!data || !data.length) return;
      setRows(data.map((r) => ({ id: r.id, d: formatRehearsalDate(r.rehearsal_date), h: r.rehearsal_time, l: r.place, who: r.team || [] })));
    });
  }, []);
  React.useEffect(() => { load(); }, [load]);

  const removeMember = async (row, name) => {
    const team = row.who.filter((w) => w !== name);
    setBusy(row.id);
    const { error } = await window.Data.updateRehearsalTeam(row.id, team);
    setBusy(null);
    if (!error) setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, who: team } : r)));
  };
  const addMember = async (row) => {
    const name = (drafts[row.id] || "").trim();
    if (!name) return;
    const team = [...row.who, name];
    setBusy(row.id);
    const { error } = await window.Data.updateRehearsalTeam(row.id, team);
    setBusy(null);
    if (!error) { setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, who: team } : r))); setDrafts((d) => ({ ...d, [row.id]: "" })); }
  };

  return (
    <div style={{ display: "grid", gap: "var(--s-4)", padding: "var(--s-5)", background: "var(--surface-1)", border: "1px solid var(--line)", borderRadius: "var(--r-card)" }}>
      <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--text)" }}>Répétitions à venir</span>
      {rows.map((r) => (
        <div key={r.id} style={{ display: "grid", gap: "var(--s-2)", paddingTop: "var(--s-4)", borderTop: "1px solid var(--line)" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--s-3)" }}>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "var(--small)", color: "var(--text)" }}>{r.d}</span>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--accent-text)" }}>{r.h}</span>
          </div>
          <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-muted)" }}>{r.l}</span>
          <div style={{ display: "flex", gap: 6, marginTop: 2, flexWrap: "wrap" }}>
            {r.who.map((w, i) => (
              <div key={w} style={{ position: "relative" }}>
                <Avatar name={w} size={26} lead={i === 0} />
                {isAdmin ? (
                  <button type="button" aria-label={"Retirer " + w} onClick={() => removeMember(r, w)} disabled={busy === r.id}
                    style={{ position: "absolute", top: -4, right: -4, width: 14, height: 14, borderRadius: "50%", border: "none", background: "var(--bg-deep)", color: "var(--text-faint)", fontSize: 9, lineHeight: "14px", padding: 0, cursor: "pointer" }}>×</button>
                ) : null}
              </div>
            ))}
          </div>
          {isAdmin ? (
            <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
              <input value={drafts[r.id] || ""} onChange={(e) => setDrafts((d) => ({ ...d, [r.id]: e.target.value }))}
                placeholder="Ajouter un nom" style={{ flex: 1, minWidth: 0, height: 32, padding: "0 10px", borderRadius: "var(--r-sm)", border: "1px solid var(--line)", background: "var(--surface-2)", color: "var(--text)", fontFamily: "var(--font-ui)", fontSize: "var(--caption)" }} />
              <Button variant="secondary" size="sm" onClick={() => addMember(r)} disabled={busy === r.id}>Ajouter</Button>
            </div>
          ) : null}
        </div>
      ))}
      {!isAdmin ? <Button variant="secondary" size="sm" style={{ marginTop: "var(--s-2)" }}>Je serai là</Button> : null}
    </div>
  );
}

function Dimanche({ onOpen, onPlay, onOpenSong = () => {}, isAdmin = false }) {
  const mobile = useMobile();
  const songs = window.CHANTS.slice(0, 6);
  return (
    <section id="dimanche" style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--s-6) var(--s-9)" }}>
      <Reveal>
        <div style={{ display: "grid", ...cols(mobile, "minmax(0,1fr)", "minmax(0,1.4fr) minmax(0,1fr)"), gap: mobile ? "var(--s-6)" : "var(--s-8)", alignItems: "start" }}>
          <div>
            <SectionHead overline="Liste du dimanche" title="Dimanche 7 septembre · messe de 10 h 30" action="Ouvrir la liste" onAction={onOpen} />
            <div>
              {songs.map((s, i) => <SongRow key={s.id} index={i + 1} {...s} onClick={() => onOpenSong(s)} onPlay={() => onPlay(s)} />)}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", marginTop: "var(--s-4)", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--caption)", color: "var(--text-faint)" }}>
              <span>6 chants</span><span className="hairline" /><span>26 minutes</span><span className="hairline" /><span>préparée par Claire</span>
            </div>
          </div>
          <Repetitions isAdmin={isAdmin} />
        </div>
      </Reveal>
    </section>
  );
}

function Annonces() {
  const mobile = useMobile();
  return (
    <section id="equipe" style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--s-6) var(--s-9)" }}>
      <Reveal>
        <SectionHead overline="Équipe" title="Annonces" />
        <div style={{ display: "grid", ...cols(mobile, "minmax(0,1fr)", "1fr 1fr"), gap: "var(--gutter)" }}>
          <AnnouncementCard unread title="Répétition déplacée à jeudi" body="Même salle, 19 h 30. Apportez les partitions du recueil de septembre." meta="Claire · 2 septembre" />
          <AnnouncementCard title="Trois chants transposés en Mi" body="Souffle imprévisible, Tu es là présent et Vienne ta paix passent en Mi pour la voix de Claire." meta="Jonas · 29 août" />
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { Rows, Recueils, Dimanche, Annonces });
