// @ts-nocheck
// Page « Tendances » — converted from the STINCT design (Tendances.dc.html).
// renderVals() holds the page data and interactions; render() is the markup.
import { Component, Fragment } from 'react';

const CSS = `
body{margin:0;background:#F5F2EC}
a{color:#1E1D1A}
a:hover{color:#1E1D1A}
.st-app,.st-app *{box-sizing:border-box}
.st-app button,.st-app input,.st-app textarea{font:inherit;color:inherit}
.st-app button{border:0;margin:0;padding:0;cursor:pointer;background:none}
.st-app a{text-decoration:none}
.st-app :focus-visible{outline:2px solid #1E1D1A;outline-offset:2px}
.st-h{transition:box-shadow .15s ease}
.st-h:hover{box-shadow:inset 0 0 0 100vmax rgba(30,29,26,.05)}
.st-tab:hover,.st-link:hover{color:#1E1D1A !important}
.st-cov img{transition:filter .2s ease}
.st-cov:hover img{filter:brightness(.95)}
.st-play{transition:background-color .15s ease,opacity .15s ease}
.st-play:hover{background:rgba(245,242,236,.82) !important}
.st-cov:hover .st-play,.st-play:focus-visible,.st-play[aria-pressed="true"]{opacity:1 !important}
.st-next{transition:background-color .15s ease}
.st-next:hover{background:rgba(226,221,211,.88) !important}
.st-menu{position:absolute;z-index:40;min-width:220px;padding:6px;border-radius:16px;background:#F5F2EC;box-shadow:0 18px 40px rgba(30,29,26,.12),0 2px 8px rgba(30,29,26,.06);display:flex;flex-direction:column;gap:2px}
.st-opt{height:40px;padding:0 12px 0 14px;border-radius:10px;display:flex;align-items:center;justify-content:space-between;gap:16px;font-size:14px;white-space:nowrap;text-align:left}
.st-opt:hover{background:#ECE8E0 !important}
.st-scrim{position:fixed;inset:0;z-index:30;cursor:default}
@keyframes st-prog-0{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes st-prog-1{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@media (max-width:975px){
.st-right{flex:1 1 100% !important;flex-direction:row !important;flex-wrap:wrap !important}
.st-right>*{flex:1 1 300px !important}
}
@media (max-width:720px){
.st-app{padding:8px !important;gap:12px !important}
.st-side{flex:1 1 100% !important;flex-direction:row !important;justify-content:space-between !important;padding:8px 12px !important}
.st-side-nav{flex-direction:row !important;margin:0 !important;gap:4px !important}
.st-side-out{margin:0 !important}
.st-feat{flex-direction:column !important;height:auto !important}
.st-feat-btns{flex:0 0 64px !important;flex-direction:row !important}
.st-feat-car{flex:0 0 180px !important}
}
`;

export default class Tendances extends Component<any, any> {
  state: any = {};

  renderVals() {
    const st = this.state || {};
    const menu = st.menu || null;
    const period = st.period || 'week';
    const tab = st.tab || 'up';
    const slide = st.slide || 0;
    const genre = st.genre || 'all';
    const sort = st.sort || 'notes';
    const rot = st.rot || 0;
    const follow = st.follow || {};
    const play = st.play || null;
    const paused = !!st.paused;
    const seq = st.seq || 0;
    const B = 'images/';
    const fmt = (n) => Math.round(n).toLocaleString('fr-FR').replace(/[  ]/g, ' ');
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
    const periods = [
      ['day', 'Aujourd’hui', 0.16, 'aujourd’hui', 'en un jour'],
      ['week', 'Cette semaine', 1, 'cette semaine', 'en une semaine'],
      ['month', 'Ce mois-ci', 4.3, 'ce mois-ci', 'en un mois'],
      ['year', 'Cette année', 41, 'cette année', 'en un an']
    ];
    const per = periods.find((p) => p[0] === period) || periods[1];
    const P = {
      nuits: ['cover-nuits-fauves.jpg', 'Nuits fauves', 'Les Sables', 'rock', 'Rock', 4.2, 1104, 32],
      peri: ['cover-peripherique.jpg', 'Périphérique', 'Saïd et Nour', 'rap', 'Rap', 4.4, 986, 18],
      maree: ['cover-maree-basse.jpg', 'Marée basse', 'Lune Arnaud', 'pop', 'Pop', 3.8, 912, 9],
      asphalte: ['cover-asphalte-dore.jpg', 'Asphalte doré', 'Yaya Bloom', 'soul', 'Soul', 4.3, 744, 41],
      verre: ['cover-verre-pile.jpg', 'Verre pilé', 'Mira Valence', 'electro', 'Électro', 3.5, 610, -4],
      soleil: ['cover-soleil-dhiver.jpg', 'Soleil d’hiver', 'Odile Marchand', 'jazz', 'Jazz', 4.0, 588, 12],
      ciel: ['cover-ciel-rose.jpg', 'Ciel rose', 'Camille Dorée', 'pop', 'Pop', 3.4, 402, 27],
      quartier: ['cover-quartier-libre.jpg', 'Quartier libre', 'Bakari', 'rap', 'Rap', 4.0, 377, -8],
      freq: ['cover-frequences.jpg', 'Fréquences', 'Atelier Nova', 'electro', 'Électro', 3.6, 352, 6],
      jardin: ['cover-jardin-dombres.jpg', 'Jardin d’ombres', 'Sève', 'ambient', 'Ambient', 3.9, 214, 3],
      heures: ['cover-heures-creuses.jpg', 'Les heures creuses', 'Théo Valmont', 'chanson', 'Chanson', 4.1, 198, 15],
      ecume: ['cover-ecume.jpg', 'Écume', 'Nils Ardent', 'ambient', 'Ambient', 3.7, 160, -2],
      velours: ['cover-velours.jpg', 'Velours', 'Lila Moreau', 'soul', 'Soul', 3.9, 151, 22],
      beton: ['cover-beton-tendre.jpg', 'Béton tendre', 'Kassim', 'rap', 'Rap', 3.1, 140, -11]
    };
    const lists = {
      up: ['asphalte', 'nuits', 'peri', 'ciel', 'velours', 'heures', 'soleil'],
      new: ['quartier', 'jardin', 'heures', 'ecume', 'velours', 'beton', 'freq']
    };
    const covers = lists[tab].map((k) => {
      const c = P[k];
      const mine = !!play && play.title === c[1];
      const on = mine && !paused;
      return {
        src: B + c[0],
        label: c[1] + ' — ' + c[2],
        playLabel: (on ? 'Mettre en pause l’extrait de ' : 'Écouter un extrait de ') + c[1],
        isOn: on,
        isOff: !on,
        toggle: () => {
          if (mine) this.setState({ paused: !paused });
          else this.setState({ play: { src: B + c[0], title: c[1], artist: c[2] }, paused: false, seq: seq + 1 });
        }
      };
    });
    const genres = [['all', 'Tous les genres'], ['pop', 'Pop'], ['rock', 'Rock'], ['rap', 'Rap'], ['jazz', 'Jazz'], ['electro', 'Électro'], ['soul', 'Soul'], ['ambient', 'Ambient'], ['chanson', 'Chanson']];
    const sorts = [['notes', 'Nombre de notes'], ['avg', 'Moyenne'], ['prog', 'Progression']];
    const idx = { notes: 6, avg: 5, prog: 7 };
    const keys = Object.keys(P)
      .filter((k) => genre === 'all' || P[k][3] === genre)
      .sort((a, b) => P[b][idx[sort]] - P[a][idx[sort]]);
    const ranks = keys.slice(0, 4).map((k, i) => {
      const c = P[k];
      const pct = c[7];
      return {
        rank: (i + 1 < 10 ? '0' : '') + (i + 1),
        src: B + c[0],
        title: c[1],
        openLabel: 'Ouvrir ' + c[1] + ', de ' + c[2],
        sub: c[2] + ' · ' + c[4],
        avg: c[5].toFixed(1).replace('.', ','),
        count: fmt(c[6] * per[2]) + ' notes ' + per[3],
        prog: (pct >= 0 ? '+' : '−') + Math.abs(pct) + ' % ' + per[4]
      };
    });
    const people = [
      ['arthur', 'Arthur K.', 'Critique · 211 avis', 'avatar-arthur.jpg'],
      ['kenza', 'Kenza B.', 'Mélomane · 38 avis', 'avatar-kenza.jpg'],
      ['jade', 'Jade.wav', 'Mélomane · 64 avis', 'avatar-jade.jpg'],
      ['remi', 'Rémi Platine', 'Critique · 156 avis', 'avatar-remi.jpg'],
      ['dodiese', 'Do Dièse', 'Mélomane · 92 avis', 'avatar-do-diese.jpg'],
      ['melodie', 'Mélo.die', 'Mélomane · 87 avis', 'avatar-melodie.jpg']
    ];
    const members = [0, 1, 2, 3].map((i) => {
      const p = people[(i + rot * 2) % people.length];
      const on = !!follow[p[0]];
      return {
        avatar: B + p[3],
        profileLabel: 'Voir le profil de ' + p[1],
        name: p[1],
        role: p[2],
        on: on,
        bg: on ? '#D6D0C4' : '#E2DDD3',
        label: on ? 'Suivi' : 'Suivre',
        aria: (on ? 'Ne plus suivre ' : 'Suivre ') + p[1],
        toggle: () => {
          const next = Object.assign({}, follow);
          next[p[0]] = !on;
          this.setState({ follow: next });
        }
      };
    });
    const totals = { day: '1 806', week: '12 480', month: '52 316', year: '474 120' };
    return {
      closeMenus: () => this.setState({ menu: null }),
      mPer: menuOf('per', periods.map((p) => [p[0], p[1]]), period, (x) => ({ period: x })),
      perLabel: per[1],
      total: totals[period],
      totalSuffix: per[3],
      upOn: tab === 'up',
      newOn: tab === 'new',
      upBg: tab === 'up' ? '#D6D0C4' : '#E2DDD3',
      newBg: tab === 'new' ? '#D6D0C4' : '#E2DDD3',
      upFw: tab === 'up' ? '700' : '600',
      newFw: tab === 'new' ? '700' : '600',
      pickUp: () => this.setState({ tab: 'up', slide: 0 }),
      pickNew: () => this.setState({ tab: 'new', slide: 0 }),
      covers: covers,
      trackX: 'translateX(-' + (slide * 192) + 'px)',
      next: () => this.setState({ slide: (slide + 1) % 4 }),
      mG: menuOf('g', genres, genre, (x) => ({ genre: x })),
      mS: menuOf('s', sorts, sort, (x) => ({ sort: x })),
      gLabel: genre === 'all' ? 'Genre' : lab(genres, genre),
      gBg: genre === 'all' ? '#E2DDD3' : '#D6D0C4',
      sortLabel: lab(sorts, sort),
      ranks: ranks,
      noRanks: ranks.length === 0,
      reset: () => this.setState({ genre: 'all' }),
      members: members,
      shuffle: () => this.setState({ rot: (rot + 1) % 3 }),
      playing: !!play,
      pSrc: play ? play.src : '',
      pTitle: play ? play.title : '',
      pArtist: play ? ' · ' + play.artist : '',
      pAnim: 'st-prog-' + (seq % 2),
      pState: paused ? 'paused' : 'running',
      pRunning: !paused,
      pPaused: paused,
      pLabel: paused ? 'Reprendre la lecture' : 'Mettre en pause',
      pToggle: () => this.setState({ paused: !paused }),
      pClose: () => this.setState({ play: null, paused: false })
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
                  <a className="st-tab" href="#/" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>Découvrir</a>
                  <a href="#/tendances" aria-current="page" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "600", color: "#1E1D1A" }}>
                    Tendances
                  </a>
                  <a className="st-tab" href="#/bibliotheque" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Ma bibliothèque
                  </a>
                </nav>
                <div style={{ position: "relative" }}>
                  <button className="st-h" type="button" aria-haspopup="true" aria-expanded={$v.mPer?.open} onClick={$v.mPer?.toggle} style={{ height: "44px", padding: "0 18px 0 22px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", whiteSpace: "nowrap" }}>
                    <span style={{ fontWeight: "500", color: "#8C877D" }}>Période :</span>
                    <span style={{ fontWeight: "600" }}>{$v.perLabel}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "4px" }}>
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {" "}
                  {$v.mPer?.open ? (
                    <>
                      <button className="st-scrim" type="button" tabIndex={-1} aria-label="Fermer le menu" onClick={$v.closeMenus} />
                      {" "}
                      <div className="st-menu" style={{ top: "52px", right: "0" }}>
                        {($v.mPer?.opts || []).map((o, i1) => (
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
              </header>
              <div style={{ marginTop: "15px", paddingLeft: "8px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <h1 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "700", letterSpacing: "-0.02em" }}>Tendances</h1>
                  <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Les projets qui font parler la communauté</p>
                </div>
                <a className="st-link" href="#/projets" style={{ marginTop: "-5px", padding: "13px 4px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D", textDecoration: "underline", textUnderlineOffset: "3px", whiteSpace: "nowrap" }}>
                  Tout voir
                </a>
              </div>
              <section className="st-feat" aria-label="Projets en vue" style={{ marginTop: "28px", height: "180px", display: "flex", gap: "16px" }}>
                <div className="st-feat-btns" style={{ flex: "0 0 180px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button className="st-h" type="button" aria-pressed={$v.upOn} onClick={$v.pickUp} style={{ flex: "1 1 0", borderRadius: "16px", background: $v.upBg, fontSize: "15px", fontWeight: $v.upFw, transition: "background-color .2s ease" }}>
                    En hausse
                  </button>
                  <button className="st-h" type="button" aria-pressed={$v.newOn} onClick={$v.pickNew} style={{ flex: "1 1 0", borderRadius: "16px", background: $v.newBg, fontSize: "15px", fontWeight: $v.newFw, transition: "background-color .2s ease" }}>
                    Nouveautés
                  </button>
                </div>
                <div className="st-feat-car" style={{ flex: "1 1 0", minWidth: "0", position: "relative", overflow: "hidden", borderRadius: "16px" }}>
                  <div style={{ height: "180px", display: "flex", gap: "12px", transform: $v.trackX, transition: "transform .45s cubic-bezier(.2, .7, .2, 1)" }}>
                    {($v.covers || []).map((c, i1) => (
                      <div key={i1} className="st-cov" style={{ position: "relative", flex: "0 0 180px", width: "180px", height: "180px", borderRadius: "16px", overflow: "hidden", background: "#E2DDD3" }}>
                        <a href="#/projet" aria-label={c.label} style={{ display: "block", width: "100%", height: "100%" }}>
                          <img src={c.src} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                        </a>
                        {" "}
                        <button className="st-play" type="button" aria-label={c.playLabel} aria-pressed={c.isOn} onClick={c.toggle} style={{ position: "absolute", left: "66px", top: "66px", width: "48px", height: "48px", borderRadius: "999px", background: "rgba(245, 242, 236, 0.55)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A", opacity: "0" }}>
                          {c.isOff ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                              <path d="M7.5 4.6v14.8a1 1 0 0 0 1.53.85l11.6-7.4a1 1 0 0 0 0-1.7L9.03 3.75A1 1 0 0 0 7.5 4.6z" />
                            </svg>
                          ) : null}
                          {c.isOn ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <rect x="6" y="4.5" width="4.2" height="15" rx="1.3" />
                              <rect x="13.8" y="4.5" width="4.2" height="15" rx="1.3" />
                            </svg>
                          ) : null}
                        </button>
                      </div>
                    ))}
                  </div>
                  {" "}
                  <button className="st-next" type="button" aria-label="Voir plus de projets" onClick={$v.next} style={{ position: "absolute", top: "0", right: "0", bottom: "0", width: "60px", borderRadius: "16px", background: "rgba(236, 232, 224, 0.74)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </section>
              <section aria-label="Filtres" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ margin: "0", paddingLeft: "8px", fontSize: "14px", lineHeight: "18px", fontWeight: "600" }}>Filtrer par :</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
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
              <section aria-label="Classement" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: "20px" }}>
                {($v.ranks || []).map((r, i1) => (
                  <article key={i1} style={{ minHeight: "190px", borderRadius: "16px", background: "#ECE8E0", padding: "26px 28px 25px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "0" }}>
                        <span style={{ flex: "0 0 30px", fontSize: "20px", lineHeight: "24px", fontWeight: "800", letterSpacing: "-0.02em", color: "#8C877D", fontVariantNumeric: "tabular-nums" }}>
                          {r.rank}
                        </span>
                        <a className="st-cov" href="#/projet" aria-label={r.openLabel} style={{ flex: "0 0 48px", display: "block", width: "48px", height: "48px", borderRadius: "12px", overflow: "hidden" }}>
                          <img src={r.src} alt="" style={{ display: "block", width: "48px", height: "48px", objectFit: "cover" }} />
                        </a>
                        <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                          <h2 style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>{r.title}</h2>
                          <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{r.sub}</p>
                        </div>
                      </div>
                      <p style={{ margin: "0 10px 0 0", display: "flex", alignItems: "baseline", gap: "4px", whiteSpace: "nowrap" }}>
                        <span style={{ fontSize: "20px", lineHeight: "24px", fontWeight: "700" }}>{r.avg}</span>
                        <span style={{ fontSize: "14px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>/5</span>
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "12px 16px" }}>
                      <div style={{ minWidth: "0", padding: "0 0 12px 8px", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <p style={{ margin: "0", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", lineHeight: "20px", fontWeight: "500" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 16px" }}>
                            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                            <path d="M18 17V9" />
                            <path d="M13 17V5" />
                            <path d="M8 17v-3" />
                          </svg>
                          <span>{r.count}</span>
                        </p>
                        <p style={{ margin: "0", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", lineHeight: "20px", fontWeight: "500" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 16px" }}>
                            <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
                            <path d="M16 7h6v6" />
                          </svg>
                          <span>{r.prog}</span>
                        </p>
                      </div>
                      <a className="st-h" href="#/projet" style={{ flex: "0 0 auto", height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", display: "inline-flex", alignItems: "center", fontSize: "13px", fontWeight: "600", color: "#1E1D1A" }}>
                        Voir le projet
                      </a>
                    </div>
                  </article>
                ))}
                {$v.noRanks ? (
                  <div style={{ gridColumn: "1 / -1", minHeight: "190px", borderRadius: "16px", background: "#ECE8E0", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", textAlign: "center" }}>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>Aucun projet de ce genre en tendance</p>
                    <button className="st-h" type="button" onClick={$v.reset} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                      Voir tous les genres
                    </button>
                  </div>
                ) : null}
              </section>
            </main>
            <aside className="st-right" aria-label="Activité de la communauté" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Notes publiées" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Notes publiées</span>
                    <span style={{ fontSize: "32px", lineHeight: "42px", fontWeight: "800", letterSpacing: "-0.03em" }}>{$v.total}</span>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{$v.totalSuffix}</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
                      <path d="M16 7h6v6" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Membres à suivre" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "30px 16px 16px", display: "flex", flexDirection: "column" }}>
                <h2 style={{ margin: "0 0 0 4px", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Membres à suivre
                </h2>
                <p style={{ margin: "6px 0 0 30px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Actifs cette semaine</p>
                <ul style={{ margin: "22px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "18px" }}>
                  {($v.members || []).map((m, i1) => (
                    <li key={i1} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <a className="st-cov" href="#/profil" aria-label={m.profileLabel} style={{ flex: "0 0 44px", display: "block", width: "44px", height: "44px", borderRadius: "999px", overflow: "hidden" }}>
                        <img src={m.avatar} alt="" style={{ display: "block", width: "44px", height: "44px", objectFit: "cover" }} />
                      </a>
                      <div style={{ flex: "1 1 auto", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "14px", lineHeight: "18px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {m.name}
                        </span>
                        <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {m.role}
                        </span>
                      </div>
                      <button className="st-h" type="button" aria-pressed={m.on} aria-label={m.aria} onClick={m.toggle} style={{ flex: "0 0 auto", height: "40px", padding: "0 14px", borderRadius: "999px", background: m.bg, fontSize: "12.5px", fontWeight: "700", whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                        {m.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="st-h" type="button" onClick={$v.shuffle} style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                  {" Autres suggestions"}
                </button>
              </section>
            </aside>
          </div>
          {$v.playing ? (
            <section aria-label="Lecteur d’extrait" style={{ position: "fixed", left: "50%", bottom: "24px", zIndex: "55", transform: "translateX(-50%)", width: "460px", maxWidth: "calc(100vw - 32px)", padding: "8px", borderRadius: "24px", background: "rgba(236, 232, 224, 0.94)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", boxShadow: "0 18px 40px rgba(30, 29, 26, 0.12)", display: "flex", alignItems: "center", gap: "12px" }}>
              <img src={$v.pSrc} alt="" style={{ flex: "0 0 48px", width: "48px", height: "48px", borderRadius: "16px", objectFit: "cover" }} />
              <div style={{ flex: "1 1 auto", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ margin: "0", fontSize: "13px", lineHeight: "16px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  <span style={{ fontWeight: "700" }}>{$v.pTitle}</span>
                  <span style={{ fontWeight: "500", color: "#8C877D" }}>{$v.pArtist}</span>
                </p>
                <div aria-hidden="true" style={{ height: "4px", borderRadius: "999px", background: "#D6D0C4", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: "999px", background: "#1E1D1A", transformOrigin: "left center", animation: `${$v.pAnim} 30s linear forwards ${$v.pState}` }} />
                </div>
              </div>
              <button className="st-h" type="button" aria-label={$v.pLabel} onClick={$v.pToggle} style={{ flex: "0 0 44px", width: "44px", height: "44px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {$v.pRunning ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="4.5" width="4.2" height="15" rx="1.3" />
                    <rect x="13.8" y="4.5" width="4.2" height="15" rx="1.3" />
                  </svg>
                ) : null}
                {$v.pPaused ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7.5 4.6v14.8a1 1 0 0 0 1.53.85l11.6-7.4a1 1 0 0 0 0-1.7L9.03 3.75A1 1 0 0 0 7.5 4.6z" />
                  </svg>
                ) : null}
              </button>
              <button className="st-h" type="button" aria-label="Fermer le lecteur" onClick={$v.pClose} style={{ flex: "0 0 44px", width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </section>
          ) : null}
        </div>
      </>
    );
  }
}
