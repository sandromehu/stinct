// @ts-nocheck
// Page « ParametresProfil » — converted from the STINCT design (Parametres-profil.dc.html).
// renderVals() holds the page data and interactions; render() is the markup.
import { Component, Fragment } from 'react';

const CSS = `
body{margin:0;background:#F5F2EC}
a{color:#1E1D1A}
a:hover{color:#1E1D1A}
.st-app,.st-app *{box-sizing:border-box}
.st-app button,.st-app input,.st-app textarea{font:inherit;color:inherit}
.st-app button{border:0;margin:0;padding:0;cursor:pointer;background:none}
.st-app input,.st-app textarea{border:0;margin:0}
.st-app a{text-decoration:none}
.st-app ::placeholder{color:#8C877D;opacity:1}
.st-app :focus-visible{outline:2px solid #1E1D1A;outline-offset:2px}
.st-sr{position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0 0 0 0) !important;white-space:nowrap !important}
.st-h{transition:box-shadow .15s ease}
.st-h:hover{box-shadow:inset 0 0 0 100vmax rgba(30,29,26,.05)}
.st-tab:hover,.st-link:hover{color:#1E1D1A !important}
.st-pick img{transition:filter .2s ease}
.st-pick:hover img{filter:brightness(.95)}
@media (max-width:975px){
.st-right{flex:1 1 100% !important;flex-direction:row !important;flex-wrap:wrap !important}
.st-right>*{flex:1 1 300px !important}
}
@media (max-width:720px){
.st-app{padding:8px !important;gap:12px !important}
.st-side{flex:1 1 100% !important;flex-direction:row !important;justify-content:space-between !important;padding:8px 12px !important}
.st-side-nav{flex-direction:row !important;margin:0 !important;gap:4px !important}
.st-side-out{margin:0 !important}
}
`;

export default class ParametresProfil extends Component<any, any> {
  state: any = {};

  componentWillUnmount() {
    clearTimeout(this._tt);
  }
  renderVals() {
    const st = this.state || {};
    const B = 'images/';
    const say = (msg) => {
      clearTimeout(this._tt);
      this.setState({ toast: msg });
      this._tt = setTimeout(() => this.setState({ toast: null }), 2600);
    };
    const AV = [
      ['ninon', 'avatar-ninon.jpg', 'Ma photo'],
      ['ciel', 'cover-ciel-rose.jpg', 'Ciel rose'],
      ['velours', 'cover-velours.jpg', 'Velours'],
      ['asphalte', 'cover-asphalte-dore.jpg', 'Asphalte doré'],
      ['soleil', 'cover-soleil-dhiver.jpg', 'Soleil d’hiver'],
      ['ecume', 'cover-ecume.jpg', 'Écume']
    ];
    const ROLES = [['melomane', 'Mélomane'], ['critique', 'Critique'], ['artiste', 'Artiste']];
    const GENRES = [['pop', 'Pop'], ['rock', 'Rock'], ['rap', 'Rap'], ['jazz', 'Jazz'], ['electro', 'Électro'], ['soul', 'Soul'], ['ambient', 'Ambient'], ['chanson', 'Chanson']];
    const SAVED = {
      av: 'ninon', pseudo: 'ninon.fm', ville: 'Bordeaux', role: 'melomane',
      bio: 'Pop, soul et tout ce qui se danse. Je note vite, j’écris lentement, et je garde mes coups de cœur pour les disques qui tiennent la distance.',
      genres: ['pop', 'soul']
    };
    const saved = st.saved || SAVED;
    const d = Object.assign({}, saved, st.draft || {});
    const setD = (patch) => this.setState({ draft: Object.assign({}, st.draft || {}, patch) });
    const avRow = AV.find((a) => a[0] === d.av) || null;
    const lab = (list, val) => (list.find((x) => x[0] === val) || list[0])[1];
    const dirty = JSON.stringify(d) !== JSON.stringify(saved);
    const photoOpen = !!st.photos;
    const pick = st.pick || d.av || 'ninon';
    const done = [!!d.av, d.pseudo.trim().length >= 3, d.ville.trim().length > 0, d.bio.trim().length > 0, d.genres.length > 0].filter(Boolean).length;
    const pv = st.pv || 'draft';
    const P = pv === 'saved' ? saved : d;
    const pvAv = AV.find((a) => a[0] === P.av) || null;
    const name = P.pseudo.trim() || 'Votre pseudo';
    const meta = [lab(ROLES, P.role), P.ville.trim()].filter(Boolean).join(' · ');
    return {
      hasAv: !!avRow,
      noAv: !avRow,
      avSrc: avRow ? B + avRow[1] : '',
      initial: (d.pseudo.trim()[0] || '?').toUpperCase(),
      openPhotos: () => this.setState({ photos: true, pick: d.av || 'ninon' }),
      closePhotos: () => this.setState({ photos: false }),
      mPhotos: photoOpen,
      photoOpts: AV.map((a) => ({
        src: B + a[1],
        label: a[2],
        on: a[0] === pick,
        bg: a[0] === pick ? '#D6D0C4' : '#ECE8E0',
        fw: a[0] === pick ? '700' : '500',
        tick: a[0] === pick ? '1' : '0',
        pick: () => this.setState({ pick: a[0] })
      })),
      usePhoto: () => {
        this.setState({ photos: false, draft: Object.assign({}, st.draft || {}, { av: pick }) });
        say('Photo modifiée : pensez à enregistrer');
      },
      removeAv: () => {
        setD({ av: null });
        say('Photo retirée : pensez à enregistrer');
      },
      pseudo: d.pseudo,
      onPseudo: (e) => setD({ pseudo: e.target.value }),
      ville: d.ville,
      onVille: (e) => setD({ ville: e.target.value }),
      roles: ROLES.map((r) => ({
        label: r[1],
        on: d.role === r[0],
        bg: d.role === r[0] ? '#D6D0C4' : 'transparent',
        fw: d.role === r[0] ? '700' : '500',
        pick: () => setD({ role: r[0] })
      })),
      bio: d.bio,
      onBio: (e) => setD({ bio: e.target.value }),
      bioCount: d.bio.length + ' / 160 caractères',
      genreCount: d.genres.length + ' sur 3 maximum',
      genres: GENRES.map((g) => {
        const on = d.genres.indexOf(g[0]) >= 0;
        return {
          label: g[1],
          on: on,
          bg: on ? '#D6D0C4' : '#E2DDD3',
          fw: on ? '700' : '500',
          pick: () => {
            if (on) { setD({ genres: d.genres.filter((x) => x !== g[0]) }); return; }
            if (d.genres.length >= 3) { say('3 genres maximum : retirez-en un d’abord'); return; }
            setD({ genres: d.genres.concat([g[0]]) });
          }
        };
      }),
      dirty: dirty,
      cancel: () => {
        this.setState({ draft: {} });
        say(dirty ? 'Modifications annulées' : 'Aucune modification à annuler');
      },
      save: () => {
        if (d.pseudo.trim().length < 3) { say('Le pseudo doit contenir au moins 3 caractères'); return; }
        if (!dirty) { say('Aucune modification à enregistrer'); return; }
        this.setState({ saved: Object.assign({}, d, { pseudo: d.pseudo.trim(), ville: d.ville.trim() }), draft: {} });
        say('Profil mis à jour');
      },
      pct: (done * 20) + ' %',
      pvLabel: pv === 'saved' ? 'Version enregistrée' : 'Aperçu en direct',
      pvAria: pv === 'saved' ? 'Version enregistrée : revenir à l’aperçu en direct' : 'Aperçu en direct : afficher la version enregistrée',
      pvToggle: () => this.setState({ pv: pv === 'saved' ? 'draft' : 'saved' }),
      pvHasAv: !!pvAv,
      pvNoAv: !pvAv,
      pvAvSrc: pvAv ? B + pvAv[1] : '',
      pvInitial: (P.pseudo.trim()[0] || '?').toUpperCase(),
      previewName: name,
      previewMeta: meta,
      previewBio: P.bio.trim() || 'Aucune bio pour le moment.',
      previewGenres: P.genres.map((x) => ({ label: lab(GENRES, x), aria: 'Explorer le genre ' + lab(GENRES, x) + ' dans le catalogue' })),
      toastOn: !!st.toast,
      toast: st.toast || ''
    };
  }

  render() {
    const $v: any = this.renderVals();
    return (
      <>
        <style>{CSS}</style>
        <div className="st-app" style={{ minHeight: "100vh", padding: "12px", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "stretch", background: "#F5F2EC", color: "#1E1D1A", fontFamily: "'Plus Jakarta Sans', 'Avenir Next', 'Segoe UI', system-ui, sans-serif", WebkitFontSmoothing: "antialiased" }}>
          <nav className="st-side" aria-label="Navigation principale" style={{ flex: "0 0 72px", display: "flex", flexDirection: "column", alignItems: "center", padding: "34px 0 28px", background: "#ECE8E0", borderRadius: "24px" }}>
            <a href="#/" aria-label="STINCT, accueil" style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
              <svg width="30" height="30" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" aria-hidden="true">
                <path d="M19.2 5A6 6 0 1 0 14 14A6 6 0 1 1 8.8 23" />
              </svg>
            </a>
            <div className="st-side-nav" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "54px", marginTop: "115px" }}>
              <a className="st-h" href="#/" aria-label="Accueil" style={{ width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#8C877D" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              </a>
              <a className="st-h" href="#/bibliotheque" aria-label="Bibliothèque" style={{ width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#8C877D" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m16 6 4 14" />
                  <path d="M12 6v14" />
                  <path d="M8 8v12" />
                  <path d="M4 4v16" />
                </svg>
              </a>
              <a className="st-h" href="#/mon-profil" aria-label="Mes avis" style={{ width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#8C877D" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M13 8H7" />
                  <path d="M17 12H7" />
                </svg>
              </a>
              <a className="st-h" href="#/parametres/confidentialite" aria-label="Paramètres" aria-current="page" style={{ width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </a>
            </div>
            <a className="st-h st-side-out" href="#/connexion" aria-label="Déconnexion" style={{ marginTop: "auto", width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#8C877D" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m16 17 5-5-5-5" />
                <path d="M21 12H9" />
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              </svg>
            </a>
          </nav>
          <div className="st-body" style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "stretch" }}>
            <main className="st-center" style={{ flex: "1 1 560px", minWidth: "0", display: "flex", flexDirection: "column", paddingTop: "9px" }}>
              <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px 24px", minHeight: "44px", paddingLeft: "8px" }}>
                <nav aria-label="Paramètres" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0 36px" }}>
                  <a href="#/parametres/profil" aria-current="page" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "600", color: "#1E1D1A" }}>
                    Mon profil
                  </a>
                  <a className="st-tab" href="#/parametres/confidentialite" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Confidentialité
                  </a>
                  <a className="st-tab" href="#/parametres/compte" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Compte
                  </a>
                </nav>
              </header>
              <div style={{ marginTop: "15px", paddingLeft: "8px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h1 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "700", letterSpacing: "-0.02em" }}>Mon profil</h1>
                <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>
                  Ces informations apparaissent sur votre profil et à côté de chacun de vos avis.
                </p>
              </div>
              <section aria-label="Informations du profil" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ minHeight: "120px", padding: "20px 24px 20px 20px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px 20px" }}>
                  {$v.hasAv ? (
                    <button className="st-cov" type="button" aria-haspopup="dialog" aria-label="Changer la photo de profil" onClick={$v.openPhotos} style={{ flex: "0 0 80px", width: "80px", height: "80px", borderRadius: "999px", overflow: "hidden" }}>
                      <img src={$v.avSrc} alt="" style={{ display: "block", width: "80px", height: "80px", objectFit: "cover" }} />
                    </button>
                  ) : null}
                  {$v.noAv ? (
                    <button className="st-h" type="button" aria-haspopup="dialog" aria-label="Ajouter une photo de profil" onClick={$v.openPhotos} style={{ flex: "0 0 80px", width: "80px", height: "80px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", lineHeight: "32px", fontWeight: "800" }}>
                      {$v.initial}
                    </button>
                  ) : null}
                  <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                    <h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Photo de profil</h2>
                    {" "}
                    <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                      Une photo, ou l’une de vos pochettes préférées.
                    </p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <button className="st-h" type="button" aria-haspopup="dialog" onClick={$v.openPhotos} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#D6D0C4", fontSize: "14px", fontWeight: "700" }}>
                      Changer la photo
                    </button>
                    {$v.hasAv ? (
                      <button className="st-h" type="button" onClick={$v.removeAv} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }}>
                        Retirer
                      </button>
                    ) : null}
                  </div>
                </div>
                <div style={{ padding: "22px 24px 24px", borderRadius: "16px", background: "#ECE8E0", display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                    <div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <label htmlFor="pseudo" style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Pseudo</label>
                      <input id="pseudo" type="text" autoComplete="nickname" maxLength={20} value={$v.pseudo} onChange={$v.onPseudo} style={{ width: "100%", height: "48px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }} />
                    </div>
                    <div style={{ flex: "1 1 240px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <label htmlFor="ville" style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Ville</label>
                      <input id="ville" type="text" autoComplete="address-level2" maxLength={40} placeholder="Ex. : Lyon" value={$v.ville} onChange={$v.onVille} style={{ width: "100%", height: "48px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Vous êtes</p>
                    <div role="group" aria-label="Vous êtes" style={{ alignSelf: "flex-start", height: "52px", padding: "4px", borderRadius: "999px", background: "#E2DDD3", display: "flex", gap: "2px" }}>
                      {($v.roles || []).map((s, i1) => (
                        <button key={i1} className="st-h" type="button" aria-pressed={s.on} onClick={s.pick} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: s.bg, fontSize: "13.5px", fontWeight: s.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ padding: "22px 24px 20px", borderRadius: "16px", background: "#ECE8E0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <label htmlFor="bio" style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Bio</label>
                  <textarea id="bio" rows={3} maxLength={160} value={$v.bio} onChange={$v.onBio} placeholder="Quelques mots sur vos goûts musicaux" style={{ width: "100%", minHeight: "96px", padding: "14px 20px", borderRadius: "16px", background: "#E2DDD3", resize: "none", fontSize: "14px", lineHeight: "22px", fontWeight: "500" }} />
                  <p style={{ margin: "0", paddingLeft: "4px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{$v.bioCount}</p>
                </div>
                <div style={{ padding: "22px 24px 24px", borderRadius: "16px", background: "#ECE8E0", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                    <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Genres favoris</p>
                    <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{$v.genreCount}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {($v.genres || []).map((g, i1) => (
                      <button key={i1} className="st-h" type="button" aria-pressed={g.on} onClick={g.pick} style={{ height: "40px", padding: "0 16px", borderRadius: "999px", background: g.bg, fontSize: "13px", fontWeight: g.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>
              </section>
              <div style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "flex-end", flexWrap: "wrap", gap: "12px" }}>
                {$v.dirty ? (
                  <p style={{ margin: "0 auto 0 8px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Modifications non enregistrées</p>
                ) : null}
                <button className="st-h" type="button" onClick={$v.cancel} style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#ECE8E0", fontSize: "14px", fontWeight: "600" }}>
                  Annuler
                </button>
                <button className="st-h" type="button" onClick={$v.save} style={{ height: "48px", padding: "0 26px", borderRadius: "999px", background: "#D6D0C4", fontSize: "14px", fontWeight: "700" }}>
                  Enregistrer
                </button>
              </div>
            </main>
            <aside className="st-right" aria-label="Aperçu du profil" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Profil complété" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Profil complété</span>
                    <span style={{ fontSize: "40px", lineHeight: "48px", fontWeight: "800", letterSpacing: "-0.03em" }}>{$v.pct}</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 20a6 6 0 0 0-12 0" />
                      <circle cx="12" cy="10" r="4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Aperçu en direct" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "24px 16px 16px", display: "flex", flexDirection: "column" }}>
                <button className="st-h" type="button" aria-label={$v.pvAria} onClick={$v.pvToggle} style={{ alignSelf: "center", height: "30px", padding: "0 12px 0 14px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", lineHeight: "16px", fontWeight: "600" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>{$v.pvLabel}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "2px", color: "#8C877D" }}>
                    <path d="M8 3 4 7l4 4" />
                    <path d="M4 7h16" />
                    <path d="m16 21 4-4-4-4" />
                    <path d="M20 17H4" />
                  </svg>
                </button>
                {$v.pvHasAv ? (
                  <img src={$v.pvAvSrc} alt="" style={{ alignSelf: "center", marginTop: "20px", width: "88px", height: "88px", borderRadius: "999px", objectFit: "cover" }} />
                ) : null}
                {$v.pvNoAv ? (
                  <span aria-hidden="true" style={{ alignSelf: "center", marginTop: "20px", width: "88px", height: "88px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", lineHeight: "34px", fontWeight: "800" }}>
                    {$v.pvInitial}
                  </span>
                ) : null}
                <h2 style={{ margin: "12px 0 0", textAlign: "center", fontSize: "18px", lineHeight: "24px", fontWeight: "700", overflowWrap: "anywhere" }}>
                  {$v.previewName}
                </h2>
                <p style={{ margin: "6px 0 0", textAlign: "center", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.previewMeta}</p>
                <div aria-hidden="true" style={{ height: "1px", margin: "20px 4px 0", background: "#D6D0C4" }} />
                <p style={{ margin: "20px 4px 0", fontSize: "13px", lineHeight: "20px", fontWeight: "500", display: "-webkit-box", WebkitLineClamp: "5", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {$v.previewBio}
                </p>
                <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {($v.previewGenres || []).map((pg, i1) => (
                    <a key={i1} className="st-h" href="#/projets" aria-label={pg.aria} style={{ height: "30px", padding: "0 12px", borderRadius: "999px", background: "#E2DDD3", display: "inline-flex", alignItems: "center", fontSize: "12px", fontWeight: "600", color: "#1E1D1A" }}>
                      {pg.label}
                    </a>
                  ))}
                </div>
                <a className="st-h" href="#/mon-profil" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                  Voir mon profil
                </a>
              </section>
            </aside>
          </div>
          {$v.mPhotos ? (
            <div style={{ position: "fixed", inset: "0", zIndex: "50", overflowY: "auto", padding: "24px 16px", display: "flex", background: "rgba(30, 29, 26, 0.28)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}>
              <section role="dialog" aria-modal="true" aria-labelledby="titre-photo" style={{ margin: "auto", width: "100%", maxWidth: "480px", borderRadius: "24px", background: "#F5F2EC", padding: "28px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                  <h2 id="titre-photo" style={{ margin: "0", fontSize: "20px", lineHeight: "26px", fontWeight: "700", letterSpacing: "-0.01em" }}>Changer la photo</h2>
                  <button className="st-h" type="button" aria-label="Fermer" onClick={$v.closePhotos} style={{ flex: "0 0 44px", width: "44px", height: "44px", margin: "-9px -9px 0 0", borderRadius: "999px", background: "#ECE8E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "19px", fontWeight: "500", color: "#8C877D" }}>
                  Gardez votre photo ou affichez une pochette que vous avez notée.
                </p>
                <div role="group" aria-label="Photos disponibles" style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                  {($v.photoOpts || []).map((ph, i1) => (
                    <button key={i1} className="st-pick" type="button" aria-pressed={ph.on} aria-label={ph.label} onClick={ph.pick} style={{ position: "relative", padding: "10px 6px 12px", borderRadius: "16px", background: ph.bg, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", transition: "background-color .2s ease" }}>
                      <img src={ph.src} alt="" style={{ width: "72px", height: "72px", borderRadius: "999px", objectFit: "cover" }} />
                      <span style={{ maxWidth: "100%", fontSize: "12px", lineHeight: "16px", fontWeight: ph.fw, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {ph.label}
                      </span>
                      <span aria-hidden="true" style={{ position: "absolute", top: "8px", right: "8px", width: "24px", height: "24px", borderRadius: "999px", background: "#1E1D1A", color: "#F5F2EC", display: "flex", alignItems: "center", justifyContent: "center", opacity: ph.tick, transition: "opacity .15s ease" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                    </button>
                  ))}
                </div>
                <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end", flexWrap: "wrap", gap: "12px" }}>
                  <button className="st-h" type="button" onClick={$v.closePhotos} style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#ECE8E0", fontSize: "14px", fontWeight: "600" }}>
                    Annuler
                  </button>
                  <button className="st-h" type="button" onClick={$v.usePhoto} style={{ height: "48px", padding: "0 26px", borderRadius: "999px", background: "#D6D0C4", fontSize: "14px", fontWeight: "700" }}>
                    Utiliser cette photo
                  </button>
                </div>
              </section>
            </div>
          ) : null}
          <div role="status" aria-live="polite" style={{ position: "fixed", left: "50%", bottom: "24px", zIndex: "60", transform: "translateX(-50%)", pointerEvents: "none" }}>
            {$v.toastOn ? (
              <div style={{ minHeight: "48px", padding: "12px 22px 12px 16px", borderRadius: "999px", background: "#1E1D1A", color: "#F5F2EC", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", lineHeight: "20px", fontWeight: "600", whiteSpace: "nowrap", boxShadow: "0 18px 40px rgba(30, 29, 26, 0.16)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>{$v.toast}</span>
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
