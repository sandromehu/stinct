// @ts-nocheck
// Page « TousLesProjets » — converted from the STINCT design (Catalogue.dc.html).
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
.st-search{width:100% !important}
}
`;

export default class TousLesProjets extends Component<any, any> {
  state: any = {};

  componentWillUnmount() {
    clearTimeout(this._tt);
  }
  renderVals() {
    const st = this.state || {};
    const say = (msg) => {
      clearTimeout(this._tt);
      this.setState({ toast: msg });
      this._tt = setTimeout(() => this.setState({ toast: null }), 2600);
    };
    const menu = st.menu || null;
    const genre = st.genre || 'all';
    const year = st.year || 'all';
    const note = st.note || 'all';
    const sort = st.sort || 'best';
    const q = st.q || '';
    const more = !!st.more;
    const B = 'images/';
    const menuOf = (id, opts, cur, onPick) => ({
      open: menu === id,
      toggle: () => this.setState({ menu: menu === id ? null : id }),
      opts: opts.map((o) => ({
        label: o[1],
        on: o[0] === cur,
        fw: o[0] === cur ? '700' : '500',
        tick: o[0] === cur ? '1' : '0',
        pick: () => this.setState(Object.assign({ menu: null }, onPick(o[0])))
      }))
    });
    const lab = (list, val) => (list.find((x) => x[0] === val) || list[0])[1];
    const plain = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const P = [
      ['cover-maree-basse.jpg', 'Marée basse', 'Lune Arnaud', 'pop', '2026', 3.8, 2322],
      ['cover-nuits-fauves.jpg', 'Nuits fauves', 'Les Sables', 'rock', '2026', 4.2, 1104],
      ['cover-beton-tendre.jpg', 'Béton tendre', 'Kassim', 'rap', '2026', 3.1, 842],
      ['cover-soleil-dhiver.jpg', 'Soleil d’hiver', 'Odile Marchand', 'jazz', '2026', 4.0, 615],
      ['cover-frequences.jpg', 'Fréquences', 'Atelier Nova', 'electro', '2026', 3.6, 1408],
      ['cover-ciel-rose.jpg', 'Ciel rose', 'Camille Dorée', 'pop', '2026', 3.4, 506],
      ['cover-peripherique.jpg', 'Périphérique', 'Saïd et Nour', 'rap', '2026', 4.4, 1986],
      ['cover-jardin-dombres.jpg', 'Jardin d’ombres', 'Sève', 'ambient', '2025', 3.9, 388],
      ['cover-verre-pile.jpg', 'Verre pilé', 'Mira Valence', 'electro', '2026', 3.5, 731],
      ['cover-heures-creuses.jpg', 'Les heures creuses', 'Théo Valmont', 'chanson', '2025', 4.1, 902],
      ['cover-asphalte-dore.jpg', 'Asphalte doré', 'Yaya Bloom', 'soul', '2026', 4.3, 1288],
      ['cover-ecume.jpg', 'Écume', 'Nils Ardent', 'ambient', '2025', 3.7, 274],
      ['cover-velours.jpg', 'Velours', 'Lila Moreau', 'soul', '2026', 3.9, 660],
      ['cover-quartier-libre.jpg', 'Quartier libre', 'Bakari', 'rap', '2025', 4.0, 1150]
    ];
    const genres = [['all', 'Tous les genres'], ['pop', 'Pop'], ['rock', 'Rock'], ['rap', 'Rap'], ['jazz', 'Jazz'], ['electro', 'Électro'], ['soul', 'Soul'], ['ambient', 'Ambient'], ['chanson', 'Chanson']];
    const years = [['all', 'Toutes les années'], ['2026', '2026'], ['2025', '2025']];
    const notes = [['all', 'Toutes les notes'], ['4', '4 et plus'], ['3.5', '3,5 et plus'], ['3', '3 et plus']];
    const sorts = [['best', 'Mieux notés'], ['popular', 'Plus notés'], ['recent', 'Plus récents'], ['alpha', 'Titre (A → Z)']];
    const query = plain(q.trim());
    let list = P.filter((p) =>
      (genre === 'all' || p[3] === genre) &&
      (year === 'all' || p[4] === year) &&
      (note === 'all' || p[5] >= parseFloat(note)) &&
      (!query || plain(p[1]).indexOf(query) >= 0 || plain(p[2]).indexOf(query) >= 0));
    if (sort === 'best') list = list.slice().sort((a, b) => b[5] - a[5]);
    if (sort === 'popular') list = list.slice().sort((a, b) => b[6] - a[6]);
    if (sort === 'recent') list = list.slice().sort((a, b) => b[4].localeCompare(a[4]));
    if (sort === 'alpha') list = list.slice().sort((a, b) => a[1].localeCompare(b[1], 'fr'));
    const shown = more ? list : list.slice(0, 12);
    const items = shown.map((p) => ({
      src: B + p[0],
      title: p[1],
      meta: p[2] + ' · ' + p[5].toFixed(1).replace('.', ',') + '/5',
      label: p[1] + ' — ' + p[2]
    }));
    const filtered = genre !== 'all' || year !== 'all' || note !== 'all' || !!query;
    const n = list.length;
    return {
      closeMenus: () => this.setState({ menu: null }),
      q: q,
      hasQ: q.length > 0,
      onQ: (e) => this.setState({ q: e.target.value }),
      clearQ: () => this.setState({ q: '' }),
      countLabel: filtered ? n + (n > 1 ? ' résultats' : ' résultat') : '1 284 projets',
      mG: menuOf('g', genres, genre, (x) => ({ genre: x })),
      mY: menuOf('y', years, year, (x) => ({ year: x })),
      mN: menuOf('n', notes, note, (x) => ({ note: x })),
      mS: menuOf('s', sorts, sort, (x) => ({ sort: x })),
      gLabel: genre === 'all' ? 'Genre' : lab(genres, genre),
      yLabel: year === 'all' ? 'Année' : year,
      nLabel: note === 'all' ? 'Note' : lab(notes, note),
      gBg: genre === 'all' ? '#E2DDD3' : '#D6D0C4',
      yBg: year === 'all' ? '#E2DDD3' : '#D6D0C4',
      nBg: note === 'all' ? '#E2DDD3' : '#D6D0C4',
      sortLabel: lab(sorts, sort),
      items: items,
      hasItems: n > 0,
      noItems: n === 0,
      canMore: n > 12,
      moreLabel: more ? 'Afficher moins' : 'Charger plus de projets',
      toggleMore: () => this.setState({ more: !more }),
      genrePills: genres.slice(1).map((g) => ({
        label: g[1],
        on: genre === g[0],
        bg: genre === g[0] ? '#D6D0C4' : '#E2DDD3',
        fw: genre === g[0] ? '700' : '600',
        pick: () => this.setState({ genre: genre === g[0] ? 'all' : g[0] })
      })),
      yearPills: years.slice(1).map((y) => ({
        label: y[1],
        on: year === y[0],
        bg: year === y[0] ? '#D6D0C4' : '#E2DDD3',
        fw: year === y[0] ? '700' : '600',
        pick: () => this.setState({ year: year === y[0] ? 'all' : y[0] })
      })),
      resetAll: () => {
        if (!filtered) {
          say('Aucun filtre actif pour l’instant');
          return;
        }
        this.setState({ genre: 'all', year: 'all', note: 'all', q: '', more: false });
        say('Filtres réinitialisés');
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
                <div className="st-search" style={{ position: "relative", width: "320px" }}>
                  <label htmlFor="recherche" className="st-sr">Rechercher un projet ou un artiste</label>
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8C877D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", left: "18px", top: "13px", pointerEvents: "none" }}>
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  {" "}
                  <input id="recherche" type="text" autoComplete="off" placeholder="Rechercher un projet, un artiste…" value={$v.q} onChange={$v.onQ} style={{ width: "100%", height: "44px", padding: "0 48px 0 46px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "500" }} />
                  {" "}
                  {$v.hasQ ? (
                    <button className="st-h" type="button" aria-label="Effacer la recherche" onClick={$v.clearQ} style={{ position: "absolute", right: "0", top: "0", width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  ) : null}
                </div>
              </header>
              <div style={{ marginTop: "15px", paddingLeft: "8px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <h1 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "700", letterSpacing: "-0.02em" }}>Tous les projets</h1>
                  <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.countLabel}</p>
                </div>
                <a className="st-link" href="#/" style={{ marginTop: "-5px", padding: "13px 4px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D", textDecoration: "underline", textUnderlineOffset: "3px", whiteSpace: "nowrap" }}>
                  Retour à Découvrir
                </a>
              </div>
              <section aria-label="Filtres" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ margin: "0", paddingLeft: "8px", fontSize: "14px", lineHeight: "18px", fontWeight: "600" }}>Filtrer par :</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                    <div style={{ position: "relative" }}>
                      <button className="st-h" type="button" aria-haspopup="true" aria-expanded={$v.mG?.open} onClick={$v.mG?.toggle} style={{ height: "44px", minWidth: "128px", padding: "0 16px 0 20px", borderRadius: "999px", background: $v.gBg, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", fontSize: "14px", fontWeight: "500" }}>
                        <span>{$v.gLabel}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      {" "}
                      {$v.mG?.open ? (
                        <>
                          <button className="st-scrim" type="button" tabIndex={-1} aria-label="Fermer le menu" onClick={$v.closeMenus} />
                          {" "}
                          <div className="st-menu" style={{ top: "52px", left: "0" }}>
                            {($v.mG?.opts || []).map((o, i1) => (
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
                    <div style={{ position: "relative" }}>
                      <button className="st-h" type="button" aria-haspopup="true" aria-expanded={$v.mY?.open} onClick={$v.mY?.toggle} style={{ height: "44px", minWidth: "128px", padding: "0 16px 0 20px", borderRadius: "999px", background: $v.yBg, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", fontSize: "14px", fontWeight: "500" }}>
                        <span>{$v.yLabel}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      {" "}
                      {$v.mY?.open ? (
                        <>
                          <button className="st-scrim" type="button" tabIndex={-1} aria-label="Fermer le menu" onClick={$v.closeMenus} />
                          {" "}
                          <div className="st-menu" style={{ top: "52px", left: "0" }}>
                            {($v.mY?.opts || []).map((o, i1) => (
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
                    <div style={{ position: "relative" }}>
                      <button className="st-h" type="button" aria-haspopup="true" aria-expanded={$v.mN?.open} onClick={$v.mN?.toggle} style={{ height: "44px", minWidth: "128px", padding: "0 16px 0 20px", borderRadius: "999px", background: $v.nBg, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", fontSize: "14px", fontWeight: "500" }}>
                        <span>{$v.nLabel}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      {" "}
                      {$v.mN?.open ? (
                        <>
                          <button className="st-scrim" type="button" tabIndex={-1} aria-label="Fermer le menu" onClick={$v.closeMenus} />
                          {" "}
                          <div className="st-menu" style={{ top: "52px", left: "0" }}>
                            {($v.mN?.opts || []).map((o, i1) => (
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
              {$v.hasItems ? (
                <ul aria-label="Projets" style={{ margin: "28px 0 0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(140px, 100%), 1fr))", gap: "16px 24px" }}>
                  {($v.items || []).map((it, i1) => (
                    <li key={i1} style={{ minWidth: "0" }}>
                      <a className="st-cov" href="#/projet" aria-label={it.label} style={{ display: "block", aspectRatio: "1 / 1", borderRadius: "16px", overflow: "hidden", background: "#E2DDD3" }}>
                        <img src={it.src} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                      </a>
                      {" "}
                      <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {it.title}
                      </p>
                      {" "}
                      <p style={{ margin: "0", fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {it.meta}
                      </p>
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
              {$v.noItems ? (
                <div style={{ marginTop: "28px", minHeight: "260px", borderRadius: "16px", background: "#ECE8E0", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", textAlign: "center" }}>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>Aucun projet ne correspond à votre recherche</p>
                  <button className="st-h" type="button" onClick={$v.resetAll} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                    Réinitialiser la recherche et les filtres
                  </button>
                </div>
              ) : null}
            </main>
            <aside className="st-right" aria-label="Affiner" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Projets au catalogue" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Projets</span>
                    <span style={{ fontSize: "40px", lineHeight: "48px", fontWeight: "800", letterSpacing: "-0.03em" }}>1 284</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Affiner par genre et par année" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "30px 16px 16px", display: "flex", flexDirection: "column" }}>
                <h2 style={{ margin: "0 0 0 4px", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 10v3" />
                    <path d="M6 6v11" />
                    <path d="M10 3v18" />
                    <path d="M14 8v7" />
                    <path d="M18 5v13" />
                    <path d="M22 10v3" />
                  </svg>
                  Genres
                </h2>
                <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {($v.genrePills || []).map((gp, i1) => (
                    <button key={i1} className="st-h" type="button" aria-pressed={gp.on} onClick={gp.pick} style={{ flex: "1 1 auto", height: "40px", padding: "0 12px", borderRadius: "999px", background: gp.bg, fontSize: "12.5px", fontWeight: gp.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                      {gp.label}
                    </button>
                  ))}
                </div>
                <h2 style={{ margin: "30px 0 0 4px", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  Années
                </h2>
                <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {($v.yearPills || []).map((yp, i1) => (
                    <button key={i1} className="st-h" type="button" aria-pressed={yp.on} onClick={yp.pick} style={{ flex: "1 1 auto", height: "40px", padding: "0 12px", borderRadius: "999px", background: yp.bg, fontSize: "12.5px", fontWeight: yp.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                      {yp.label}
                    </button>
                  ))}
                </div>
                <button className="st-h" type="button" onClick={$v.resetAll} style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }}>
                  Réinitialiser les filtres
                </button>
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
