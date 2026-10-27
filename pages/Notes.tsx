// @ts-nocheck
// Page « Notes » — converted from the STINCT design (Notes.dc.html).
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
.st-ul:hover .st-ul-t{text-decoration:underline;text-underline-offset:3px}
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
.st-row-date,.st-row-stars{display:none !important}
}
`;

export default class Notes extends Component<any, any> {
  state: any = {};

  renderVals() {
    const st = this.state || {};
    const B = 'images/';
    const ON = '#1E1D1A';
    const OFF = '#CFC9BD';
    const menu = st.menu || null;
    const note = st.note || 0;
    const sort = st.sort || 'recent';
    const more = !!st.more;
    const N = [
      { rec: 1, cov: 'cover-maree-basse.jpg', title: 'Marée basse', meta: 'Lune Arnaud · 2026', note: 4, date: '6 oct.', review: true },
      { rec: 2, cov: 'cover-nuits-fauves.jpg', title: 'Nuits fauves', meta: 'Les Sables · 2026', note: 3, date: '4 oct.', review: false },
      { rec: 3, cov: 'cover-ciel-rose.jpg', title: 'Ciel rose', meta: 'Camille Dorée · 2026', note: 2, date: '1er oct.', review: false },
      { rec: 4, cov: 'cover-peripherique.jpg', title: 'Périphérique', meta: 'Saïd et Nour · 2026', note: 5, date: '29 sept.', review: true },
      { rec: 5, cov: 'cover-velours.jpg', title: 'Velours', meta: 'Lila Moreau · 2026', note: 1, date: '25 sept.', review: false },
      { rec: 6, cov: 'cover-verre-pile.jpg', title: 'Verre pilé', meta: 'Mira Valence · 2026', note: 3, date: '21 sept.', review: true },
      { rec: 7, cov: 'cover-asphalte-dore.jpg', title: 'Asphalte doré', meta: 'Yaya Bloom · 2026', note: 4, date: '16 sept.', review: false },
      { rec: 8, cov: 'cover-soleil-dhiver.jpg', title: 'Soleil d’hiver', meta: 'Odile Marchand · 2026', note: 4, date: '12 sept.', review: true },
      { rec: 9, cov: 'cover-beton-tendre.jpg', title: 'Béton tendre', meta: 'Kassim · 2026', note: 3, date: '3 sept.', review: true },
      { rec: 10, cov: 'cover-ecume.jpg', title: 'Écume', meta: 'Nils Ardent · 2025', note: 3, date: '30 août', review: false },
      { rec: 11, cov: 'cover-frequences.jpg', title: 'Fréquences', meta: 'Atelier Nova · 2026', note: 4, date: '27 août', review: true },
      { rec: 12, cov: 'cover-quartier-libre.jpg', title: 'Quartier libre', meta: 'Bakari · 2025', note: 5, date: '18 août', review: true },
      { rec: 13, cov: 'cover-heures-creuses.jpg', title: 'Les heures creuses', meta: 'Théo Valmont · 2025', note: 4, date: '14 août', review: false },
      { rec: 14, cov: 'cover-jardin-dombres.jpg', title: 'Jardin d’ombres', meta: 'Sève · 2025', note: 2, date: '9 août', review: true }
    ];
    const SORTS = [['recent', 'Plus récentes'], ['best', 'Mieux notées'], ['worst', 'Moins bien notées'], ['alpha', 'Titre (A → Z)']];
    const cmp = {
      recent: (a, b) => a.rec - b.rec,
      best: (a, b) => b.note - a.note || a.rec - b.rec,
      worst: (a, b) => a.note - b.note || a.rec - b.rec,
      alpha: (a, b) => a.title.localeCompare(b.title, 'fr')
    };
    const list = N.filter((x) => !note || x.note === note).sort(cmp[sort]);
    const shown = more ? list : list.slice(0, 10);
    const starWord = (n) => (n > 1 ? n + ' étoiles' : n + ' étoile');
    const rows = shown.map((x) => ({
      src: B + x.cov,
      title: x.title,
      meta: x.meta,
      date: x.date,
      aria: 'Note : ' + x.note + ' sur 5',
      s1: x.note >= 1 ? ON : OFF,
      s2: x.note >= 2 ? ON : OFF,
      s3: x.note >= 3 ? ON : OFF,
      s4: x.note >= 4 ? ON : OFF,
      s5: x.note >= 5 ? ON : OFF,
      review: x.review,
      noReview: !x.review,
      reviewAria: 'Lire l’avis de Sillon sur ' + x.title
    }));
    const setNote = (n) => this.setState({ note: note === n ? 0 : n, more: false });
    const pills = [0, 5, 4, 3, 2, 1].map((n) => ({
      label: n === 0 ? 'Toutes' : String(n),
      star: n !== 0,
      aria: n === 0 ? 'Toutes les notes' : starWord(n),
      on: note === n,
      bg: note === n ? '#D6D0C4' : '#E2DDD3',
      fw: note === n ? '700' : '500',
      pick: () => this.setState({ note: n, more: false })
    }));
    const DIST = [[5, 12, '32%'], [4, 38, '100%'], [3, 31, '82%'], [2, 14, '37%'], [1, 5, '13%']];
    const dist = DIST.map((d) => ({
      n: String(d[0]),
      pct: d[1] + ' %',
      w: d[2],
      on: note === d[0],
      bg: note === d[0] ? '#D6D0C4' : 'transparent',
      track: note === d[0] ? '#ECE8E0' : '#E2DDD3',
      aria: 'Filtrer les notes à ' + starWord(d[0]) + ', ' + d[1] + ' % de ses notes',
      pick: () => setNote(d[0])
    }));
    const n = list.length;
    return {
      countLabel: note ? (n === 0 ? 'Aucune note' : n + (n > 1 ? ' notes' : ' note')) + ' à ' + starWord(note) + ' parmi les ' + N.length + ' plus récentes' : '618 projets notés · moyenne 3,4',
      pills: pills,
      dist: dist,
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
      rows: rows,
      hasRows: n > 0,
      noRows: n === 0,
      emptyText: 'Aucune note à ' + starWord(note) + ' parmi les ' + N.length + ' plus récentes',
      allNotes: () => this.setState({ note: 0 }),
      canMore: n > 10,
      moreLabel: more ? 'Afficher moins' : 'Afficher plus de notes',
      toggleMore: () => this.setState({ more: !more })
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
              <div style={{ marginTop: "15px", paddingLeft: "8px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h1 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "700", letterSpacing: "-0.02em" }}>Notes de Sillon</h1>
                <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.countLabel}</p>
              </div>
              <section aria-label="Filtres" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ margin: "0", paddingLeft: "8px", fontSize: "14px", lineHeight: "18px", fontWeight: "600" }}>Filtrer par note :</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    {($v.pills || []).map((p, i1) => (
                      <button key={i1} className="st-h" type="button" aria-pressed={p.on} aria-label={p.aria} onClick={p.pick} style={{ height: "44px", padding: "0 18px", borderRadius: "999px", background: p.bg, display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: p.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                        <span>{p.label}</span>
                        {p.star ? (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#1E1D1A" aria-hidden="true">
                            <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                          </svg>
                        ) : null}
                      </button>
                    ))}
                  </div>
                  <div style={{ position: "relative" }}>
                    <button className="st-h" type="button" aria-haspopup="true" aria-expanded={$v.mS?.open} onClick={$v.mS?.toggle} style={{ height: "44px", padding: "0 18px 0 22px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", whiteSpace: "nowrap" }}>
                      <span style={{ fontWeight: "500", color: "#8C877D" }}>Trier par :</span>
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
              {$v.hasRows ? (
                <ul aria-label="Notes" style={{ margin: "28px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {($v.rows || []).map((n, i1) => (
                    <li key={i1} style={{ minHeight: "72px", padding: "10px 12px 10px 10px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", gap: "16px" }}>
                      <a className="st-cov st-ul" href="#/projet" style={{ flex: "1 1 220px", minWidth: "0", display: "flex", alignItems: "center", gap: "14px", color: "#1E1D1A" }}>
                        <img src={n.src} alt="" style={{ flex: "0 0 52px", width: "52px", height: "52px", borderRadius: "12px", objectFit: "cover" }} />
                        <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span className="st-ul-t" style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {n.title}
                          </span>
                          <span style={{ fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {n.meta}
                          </span>
                        </span>
                      </a>
                      <span className="st-row-stars" role="img" aria-label={n.aria} style={{ flex: "0 0 auto", display: "flex", alignItems: "center", gap: "3px" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill={n.s1} aria-hidden="true">
                          <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                        </svg>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill={n.s2} aria-hidden="true">
                          <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                        </svg>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill={n.s3} aria-hidden="true">
                          <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                        </svg>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill={n.s4} aria-hidden="true">
                          <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                        </svg>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill={n.s5} aria-hidden="true">
                          <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                        </svg>
                      </span>
                      <span className="st-row-date" style={{ flex: "0 0 72px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap" }}>
                        {n.date}
                      </span>
                      <span style={{ flex: "0 0 120px", display: "flex", justifyContent: "flex-end" }}>
                        {n.review ? (
                          <a className="st-h" href="#/avis" aria-label={n.reviewAria} style={{ height: "40px", padding: "0 16px", borderRadius: "999px", background: "#E2DDD3", display: "inline-flex", alignItems: "center", fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                            Lire l’avis
                          </a>
                        ) : null}
                        {n.noReview ? (
                          <span style={{ padding: "0 12px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap" }}>Note seule</span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {$v.canMore ? (
                <div style={{ marginTop: "24px", display: "flex", justifyContent: "center" }}>
                  <button className="st-h" type="button" onClick={$v.toggleMore} style={{ height: "48px", padding: "0 28px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }}>
                    {$v.moreLabel}
                  </button>
                </div>
              ) : null}
              {$v.noRows ? (
                <div style={{ marginTop: "28px", minHeight: "260px", borderRadius: "16px", background: "#ECE8E0", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", textAlign: "center" }}>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>{$v.emptyText}</p>
                  <button className="st-h" type="button" onClick={$v.allNotes} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                    Afficher toutes les notes
                  </button>
                </div>
              ) : null}
            </main>
            <aside className="st-right" aria-label="Statistiques de notation" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Moyenne donnée" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Moyenne donnée</span>
                    <span style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                      <span style={{ fontSize: "44px", lineHeight: "50px", fontWeight: "800", letterSpacing: "-0.03em" }}>3,4</span>
                      <span style={{ fontSize: "16px", lineHeight: "20px", fontWeight: "600", color: "#8C877D" }}>/5</span>
                    </span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Répartition de ses notes" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "30px 16px 16px", display: "flex", flexDirection: "column" }}>
                <h2 style={{ margin: "0 0 0 4px", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                  Répartition de ses notes
                </h2>
                <p style={{ margin: "6px 0 0 30px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Cliquez sur une note pour filtrer</p>
                <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  {($v.dist || []).map((d, i1) => (
                    <button key={i1} className="st-h" type="button" aria-pressed={d.on} aria-label={d.aria} onClick={d.pick} style={{ height: "40px", padding: "0 8px", borderRadius: "12px", background: d.bg, display: "flex", alignItems: "center", gap: "10px", transition: "background-color .2s ease" }}>
                      <span style={{ flex: "0 0 28px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>
                        <span>{d.n}</span>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="#1E1D1A" aria-hidden="true">
                          <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                        </svg>
                      </span>
                      <span aria-hidden="true" style={{ flex: "1 1 auto", height: "6px", borderRadius: "999px", background: d.track, overflow: "hidden" }}>
                        <span style={{ display: "block", width: d.w, height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                      </span>
                      <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{d.pct}</span>
                    </button>
                  ))}
                </div>
                <div aria-hidden="true" style={{ height: "1px", margin: "24px 4px 0", background: "#D6D0C4" }} />
                <h2 style={{ margin: "28px 0 0 4px", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 10v3" />
                    <path d="M6 6v11" />
                    <path d="M10 3v18" />
                    <path d="M14 8v7" />
                    <path d="M18 5v13" />
                    <path d="M22 10v3" />
                  </svg>
                  Genres favoris
                </h2>
                <p style={{ margin: "6px 0 0 30px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Rap, Jazz, Électro</p>
                <a className="st-h" href="#/profil" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                  Voir le profil
                </a>
              </section>
            </aside>
          </div>
        </div>
      </>
    );
  }
}
