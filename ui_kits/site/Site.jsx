const { Player } = window.ChantsDesignSystem_cafe14;

// Le site public n'affiche pas les tonalités.
window.CHANTS = window.CHANTS.map(({ songKey, ...reste }) => reste);

function Site() {
  const mobile = useMobile();
  const [entre, setEntre] = React.useState(false);
  const [view, setView] = React.useState("accueil");
  const [song, setSong] = React.useState(null);
  const [now, setNow] = React.useState(null);
  const [playing, setPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [pending, setPending] = React.useState(null);
  const [session, setSession] = React.useState(null);
  const [profile, setProfile] = React.useState(null);
  const isAdmin = profile?.role === "admin";
  const play = (s) => { setNow(s); setPlaying(true); setProgress(4); };
  const go = (v, hash) => { setView(v); if (hash) setPending(hash); else window.scrollTo({ top: 0 }); };
  const openSong = (s) => { setSong(s); go("chant"); };
  const loadProfile = async (s) => {
    if (!s) { setProfile(null); return; }
    const { data } = await window.Auth.getProfile(s.user.id);
    setProfile(data);
  };
  React.useEffect(() => {
    if (!window.Auth) return;
    window.Auth.getSession().then((s) => { setSession(s); loadProfile(s); });
    const sub = window.Auth.onChange((s) => { setSession(s); loadProfile(s); });
    return () => sub && sub.unsubscribe();
  }, []);
  React.useEffect(() => {
    if (!pending) return;
    let tries = 0;
    const tick = () => {
      const el = document.getElementById(pending);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: tries ? "smooth" : "auto" });
      if (++tries < 6) requestAnimationFrame(tick); else setPending(null);
    };
    requestAnimationFrame(tick);
  }, [pending, view]);
  React.useEffect(() => {
    if (!now || !playing) return;
    const t = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 0.6)), 400);
    return () => clearInterval(t);
  }, [now, playing]);
  if (mobile && !entre) return <MobileWelcome onEnter={() => setEntre(true)} />;
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "var(--bg)" }}>
      <SiteHeader view={view} onNav={go} notifs={window.ANNONCES} session={session} profile={profile} />
      <main key={view} className="view-in">
      {view === "accueil" ? (
        <>
          <SiteHero onPlay={play} onOpenApp={() => go("repertoire")} />
          <AnnonceBandeau onNav={go} />
          <WeekBanner onPlay={play} onOpenSong={openSong} />
          <Rows onOpen={() => go("repertoire")} onPlay={play} onOpenSong={openSong} />
          <Dimanche onOpen={() => go("repertoire")} onPlay={play} onOpenSong={openSong} isAdmin={isAdmin} />
          <ApercuEvenements onVoirTout={() => go("events")} />
          <Tutos onOpenTuto={() => go("tutos")} onAll={() => go("tutos")} />
          <Chiffres />
          <Connexion session={session} profile={profile} />
        </>
      ) : null}
      {view === "repertoire" ? <PageRepertoire onOpenSong={openSong} onPlay={play} /> : null}
      {view === "chant" && song && song.title ? <PageChant song={song} onPlay={play} onBack={() => go("repertoire")} /> : null}
      {view === "tutos" ? <PageTutos onOpenTuto={() => {}} /> : null}
      {view === "events" ? <PageEvenements onOpenSong={openSong} onPlay={play} /> : null}
      {view === "programmation" ? <PageProgrammation /> : null}
      </main>
      <SiteFooter onNav={go} />
      {mobile ? <TabBar view={view} onNav={go} /> : null}
      {now ? (
        <Player title={now.title} author={now.author} duration={now.duration} progress={progress}
          playing={playing} onToggle={() => setPlaying(!playing)} onClose={() => setNow(null)}
          mobile={mobile}
          style={{ position: "fixed", left: "50%", transform: "translateX(-50%)", right: "auto", width: mobile ? "calc(100% - 2 * var(--mobile-margin))" : "min(720px, calc(100% - 48px))", bottom: mobile ? "calc(var(--tabbar-h) + env(safe-area-inset-bottom) + 8px)" : "var(--s-5)", zIndex: 55 }} />
      ) : null}
    </div>
  );
}

Object.assign(window, { Site });
