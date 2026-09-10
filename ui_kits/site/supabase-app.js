// Connexion Supabase : authentification (email + mot de passe) et données partagées.
window.SUPABASE_URL = "https://tnhxobxmqpcpudiqfpgt.supabase.co";
window.SUPABASE_ANON_KEY = "sb_publishable_94_13_BvLDDmYeZvYdgAiQ_ysCspM_2";
window.sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);

window.Auth = {
  async signUp(email, password, displayName) {
    return window.sb.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName || email.split("@")[0] } },
    });
  },
  async signIn(email, password) {
    return window.sb.auth.signInWithPassword({ email, password });
  },
  async signOut() {
    return window.sb.auth.signOut();
  },
  async getSession() {
    const { data } = await window.sb.auth.getSession();
    return data.session || null;
  },
  async getProfile(userId) {
    const { data, error } = await window.sb.from("profiles").select("*").eq("id", userId).single();
    return { data: error ? null : data, error };
  },
  onChange(cb) {
    const { data } = window.sb.auth.onAuthStateChange((_event, session) => cb(session));
    return data.subscription;
  },
};

window.Data = {
  async rehearsals() {
    const { data, error } = await window.sb.from("rehearsals").select("*").order("rehearsal_date");
    return error ? [] : data;
  },
  async updateRehearsalTeam(id, team) {
    return window.sb.from("rehearsals").update({ team }).eq("id", id);
  },
};
