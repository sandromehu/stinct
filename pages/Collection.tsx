// @ts-nocheck
// Page « Collection » — converted from the STINCT design (Collection.dc.html).
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
.st-app :focus-visible{outline:2px solid #1E1D1A;outline-offset:2px}
.st-sr{position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0 0 0 0) !important;white-space:nowrap !important}
.st-h{transition:box-shadow .15s ease}
.st-h:hover{box-shadow:inset 0 0 0 100vmax rgba(30,29,26,.05)}
.st-tab:hover,.st-link:hover{color:#1E1D1A !important}
.st-cov img{transition:filter .2s ease}
.st-cov:hover img{filter:brightness(.95)}
.st-menu{position:absolute;z-index:40;min-width:220px;padding:6px;border-radius:16px;background:#F5F2EC;box-shadow:0 18px 40px rgba(30,29,26,.12),0 2px 8px rgba(30,29,26,.06);display:flex;flex-direction:column;gap:2px}
.st-opt{height:40px;padding:0 12px 0 14px;border-radius:10px;display:flex;align-items:center;justify-content:space-between;gap:16px;font-size:14px;white-space:nowrap;text-align:left}
.st-opt:hover{background:#ECE8E0 !important}
.st-scrim{position:fixed;inset:0;z-index:30;cursor:default}
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

export default class Collection extends Component<any, any> {
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
    const P = {
      maree: ['cover-maree-basse.jpg', 'Marée basse', 'Lune Arnaud', 2026],
      nuits: ['cover-nuits-fauves.jpg', 'Nuits fauves', 'Les Sables', 2026],
      beton: ['cover-beton-tendre.jpg', 'Béton tendre', 'Kassim', 2026],
      soleil: ['cover-soleil-dhiver.jpg', 'Soleil d’hiver', 'Odile Marchand', 2026],
      freq: ['cover-frequences.jpg', 'Fréquences', 'Atelier Nova', 2026],
      ciel: ['cover-ciel-rose.jpg', 'Ciel rose', 'Camille Dorée', 2026],
      peri: ['cover-peripherique.jpg', 'Périphérique', 'Saïd et Nour', 2026],
      jardin: ['cover-jardin-dombres.jpg', 'Jardin d’ombres', 'Sève', 2025],
      verre: ['cover-verre-pile.jpg', 'Verre pilé', 'Mira Valence', 2026],
      heures: ['cover-heures-creuses.jpg', 'Les heures creuses', 'Théo Valmont', 2025],
      asphalte: ['cover-asphalte-dore.jpg', 'Asphalte doré', 'Yaya Bloom', 2026],
      ecume: ['cover-ecume.jpg', 'Écume', 'Nils Ardent', 2025],
      velours: ['cover-velours.jpg', 'Velours', 'Lila Moreau', 2026],
      quartier: ['cover-quartier-libre.jpg', 'Quartier libre', 'Bakari', 2025]
    };
    const C = [
      { id: 'cdc', name: 'Coups de cœur', n: 31, upd: '6 octobre', desc: 'Les disques qui ne quittent plus ma platine, toutes années confondues.', items: ['maree', 'peri', 'soleil', 'asphalte', 'quartier', 'freq', 'heures', 'velours', 'ecume', 'nuits', 'jardin', 'verre', 'ciel', 'beton'] },
      { id: 'y26', name: '2026', n: 54, upd: '6 octobre', desc: 'Mes sorties préférées de l’année, mises à jour chaque mois.', items: ['peri', 'verre', 'maree', 'beton', 'freq', 'nuits', 'soleil', 'asphalte', 'velours', 'ciel', 'ecume', 'quartier', 'heures', 'jardin'] },
      { id: 'vin', name: 'Vinyles', n: 22, upd: '28 septembre', desc: 'Ceux que j’ai achetés en vinyle après les avoir notés.', items: ['quartier', 'heures', 'jardin', 'velours', 'soleil', 'peri', 'maree', 'asphalte', 'ecume', 'freq', 'nuits', 'verre', 'beton', 'ciel'] },
      { id: 'are', name: 'À réécouter', n: 9, upd: '2 octobre', desc: 'Des disques à réécouter avant d’écrire un avis.', items: ['freq', 'ecume', 'nuits', 'ciel', 'velours', 'beton', 'jardin', 'heures', 'verre'] },
      { id: 'road', name: 'Road trip', n: 12, upd: '14 août', desc: 'Pour les longues routes de nuit, entre Lyon et la mer.', items: ['peri', 'asphalte', 'quartier', 'ciel', 'nuits', 'maree', 'freq', 'verre', 'beton', 'ecume', 'velours', 'soleil'] }
    ];
    const SORTS = [['curator', 'Ordre de Sillon'], ['title', 'Titre (A → Z)'], ['artist', 'Artiste (A → Z)'], ['year', 'Année (récentes d’abord)']];
    const menu = st.menu || null;
    const sel = st.sel || 'y26';
    const col = C.find((c) => c.id === sel) || C[1];
    const sort = st.sort || 'curator';
    const more = !!st.more;
    const savedMap = st.saved || {};
    const saved = !!savedMap[col.id];
    const follow = !!st.follow;
    const cmp = {
      title: (a, b) => P[a][1].localeCompare(P[b][1], 'fr'),
      artist: (a, b) => P[a][2].localeCompare(P[b][2], 'fr'),
      year: (a, b) => P[b][3] - P[a][3] || P[a][1].localeCompare(P[b][1], 'fr')
    };
    const ordered = sort === 'curator' ? col.items : col.items.slice().sort(cmp[sort]);
    const shown = more ? ordered : ordered.slice(0, 12);
    return {
      name: col.name,
      meta: 'Collection de Sillon · ' + col.n + ' projets · mise à jour le ' + col.upd,
      count: String(col.n),
      desc: col.desc,
      saved: saved,
      notSaved: !saved,
      saveBg: saved ? '#D6D0C4' : '#E2DDD3',
      saveLabel: saved ? 'Enregistrée' : 'Enregistrer',
      toggleSave: () => {
        const next = Object.assign({}, savedMap);
        next[col.id] = !saved;
        this.setState({ saved: next });
        say(saved ? 'Collection retirée de votre bibliothèque' : '« ' + col.name + ' » enregistrée dans votre bibliothèque');
      },
      share: () => say('Lien de la collection copié'),
      pills: C.map((c) => ({
        label: c.name,
        count: String(c.n),
        on: c.id === col.id,
        bg: c.id === col.id ? '#D6D0C4' : '#E2DDD3',
        fw: c.id === col.id ? '700' : '500',
        pick: () => this.setState({ sel: c.id, more: false })
      })),
      mS: {
        open: menu === 'sort',
        toggle: () => this.setState({ menu: menu === 'sort' ? null : 'sort' }),
        opts: SORTS.map((o) => ({
          label: o[1],
          on: o[0] === sort,
          fw: o[0] === sort ? '700' : '500',
          tick: o[0] === sort ? '1' : '0',
          pick: () => this.setState({ sort: o[0], menu: null })
        }))
      },
      sortLabel: (SORTS.find((o) => o[0] === sort) || SORTS[0])[1],
      closeMenus: () => this.setState({ menu: null }),
      listLabel: 'Projets de la collection ' + col.name,
      items: shown.map((k) => ({ src: B + P[k][0], title: P[k][1], artist: P[k][2], aria: P[k][1] + ' — ' + P[k][2] })),
      canMore: ordered.length > 12,
      moreLabel: more ? 'Afficher moins' : 'Afficher plus de projets',
      toggleMore: () => this.setState({ more: !more }),
      follow: follow,
      followBg: follow ? '#E2DDD3' : '#D6D0C4',
      followLabel: follow ? 'Abonné' : 'Suivre',
      toggleFollow: () => {
        this.setState({ follow: !follow });
        say(follow ? 'Vous ne suivez plus Sillon' : 'Vous suivez Sillon');
      },
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
              <a className="st-h" href="#/" aria-label="Accueil" aria-current="page" style={{ width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              <a className="st-h" href="#/parametres/confidentialite" aria-label="Paramètres" style={{ width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#8C877D" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                <nav aria-label="Rubriques" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0 36px" }}>
                  <a href="#/" aria-current="page" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "600", color: "#1E1D1A" }}>Découvrir</a>
                  <a className="st-tab" href="#/tendances" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Tendances
                  </a>
                  <a className="st-tab" href="#/bibliotheque" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Ma bibliothèque
                  </a>
                </nav>
                <a className="st-h" href="#/profil" style={{ height: "44px", padding: "0 20px 0 6px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                  <img src="images/avatar-sillon.jpg" alt="" style={{ width: "32px", height: "32px", borderRadius: "999px", objectFit: "cover" }} />
                  {" Profil de Sillon"}
                </a>
              </header>
              <div style={{ marginTop: "15px", paddingLeft: "8px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <h1 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "700", letterSpacing: "-0.02em" }}>{$v.name}</h1>
                  <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.meta}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                  <button className="st-h" type="button" aria-pressed={$v.saved} onClick={$v.toggleSave} style={{ height: "44px", padding: "0 20px 0 16px", borderRadius: "999px", background: $v.saveBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                    {$v.notSaved ? (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                      </svg>
                    ) : null}
                    {$v.saved ? (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        <path d="m9 10 2 2 4-4" />
                      </svg>
                    ) : null}
                    <span>{$v.saveLabel}</span>
                  </button>
                  <button className="st-h" type="button" onClick={$v.share} style={{ height: "44px", padding: "0 20px 0 16px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap" }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <path d="m8.59 13.51 6.83 3.98" />
                      <path d="m15.41 6.51-6.82 3.98" />
                    </svg>
                    {" Partager"}
                  </button>
                </div>
              </div>
              <section aria-label="Collections de Sillon" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ margin: "0", paddingLeft: "8px", fontSize: "14px", lineHeight: "18px", fontWeight: "600" }}>Ses collections :</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    {($v.pills || []).map((p, i1) => (
                      <button key={i1} className="st-h" type="button" aria-pressed={p.on} onClick={p.pick} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: p.bg, display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: p.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                        <span>{p.label}</span>
                        <span style={{ fontWeight: "500", color: "#8C877D" }}>{p.count}</span>
                      </button>
                    ))}
                  </div>
                  <div style={{ position: "relative" }}>
                    <button className="st-h" type="button" aria-haspopup="true" aria-expanded={$v.mS?.open} onClick={$v.mS?.toggle} style={{ height: "44px", padding: "0 18px 0 22px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", whiteSpace: "nowrap" }}>
                      <span style={{ fontWeight: "500", color: "#8C877D" }}>Ordre :</span>
                      <span style={{ fontWeight: "600" }}>{$v.sortLabel}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "4px" }}>
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {" "}
                    {$v.mS?.open ? (
                      <>
                        <button className="st-scrim" type="button" tabIndex={-1} aria-label="Fermer le menu" onClick={$v.closeMenus} />
                        {" "}
                        <div className="st-menu" style={{ top: "52px", right: "0" }}>
                          {($v.mS?.opts || []).map((o, i1) => (
                            <button key={i1} className="st-opt" type="button" aria-pressed={o.on} onClick={o.pick} style={{ fontWeight: o.fw }}>
                              <span>{o.label}</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: o.tick }}>
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </button>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </section>
              <ul aria-label={$v.listLabel} style={{ margin: "28px 0 0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(140px, 100%), 1fr))", gap: "16px 24px" }}>
                {($v.items || []).map((it, i1) => (
                  <li key={i1} style={{ minWidth: "0" }}>
                    <a className="st-cov" href="#/projet" aria-label={it.aria} style={{ display: "block", aspectRatio: "1 / 1", borderRadius: "16px", overflow: "hidden", background: "#E2DDD3" }}>
                      <img src={it.src} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                    </a>
                    {" "}
                    <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {it.title}
                    </p>
                    {" "}
                    <p style={{ margin: "0", fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {it.artist}
                    </p>
                  </li>
                ))}
              </ul>
              {$v.canMore ? (
                <div style={{ marginTop: "24px", display: "flex", justifyContent: "center" }}>
                  <button className="st-h" type="button" onClick={$v.toggleMore} style={{ height: "48px", padding: "0 28px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }}>
                    {$v.moreLabel}
                  </button>
                </div>
              ) : null}
            </main>
            <aside className="st-right" aria-label="À propos de la collection" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Projets dans la collection" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Projets</span>
                    <span style={{ fontSize: "44px", lineHeight: "50px", fontWeight: "800", letterSpacing: "-0.03em" }}>{$v.count}</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m16 6 4 14" />
                      <path d="M12 6v14" />
                      <path d="M8 8v12" />
                      <path d="M4 4v16" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Créateur de la collection" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "37px 16px 16px", display: "flex", flexDirection: "column" }}>
                <a className="st-cov" href="#/profil" aria-label="Voir le profil de Sillon" style={{ alignSelf: "center", display: "block", width: "88px", height: "88px", borderRadius: "999px", overflow: "hidden" }}>
                  <img src="images/avatar-sillon.jpg" alt="" style={{ display: "block", width: "88px", height: "88px", objectFit: "cover" }} />
                </a>
                <h2 style={{ margin: "12px 0 0", textAlign: "center", fontSize: "18px", lineHeight: "24px", fontWeight: "700" }}>Sillon</h2>
                <p style={{ margin: "6px 0 0", textAlign: "center", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Critique · 342 avis</p>
                <button className="st-h" type="button" aria-pressed={$v.follow} onClick={$v.toggleFollow} style={{ alignSelf: "center", marginTop: "16px", height: "44px", minWidth: "132px", padding: "0 20px", borderRadius: "999px", background: $v.followBg, fontSize: "14px", fontWeight: "700", transition: "background-color .2s ease" }}>
                  {$v.followLabel}
                </button>
                <div aria-hidden="true" style={{ height: "1px", margin: "22px 4px 0", background: "#D6D0C4" }} />
                <h3 style={{ margin: "28px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  À propos
                </h3>
                <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "19px", fontWeight: "500", color: "#8C877D" }}>{$v.desc}</p>
                <h3 style={{ margin: "26px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Visibilité
                </h3>
                <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Public · tout le monde</p>
                <a className="st-h" href="#/profil" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                  Voir le profil
                </a>
              </section>
            </aside>
          </div>
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
