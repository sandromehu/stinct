// @ts-nocheck
// Page « Decouvrir » — converted from the STINCT design (Main.dc.html).
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
.st-sel:hover{box-shadow:inset 0 0 0 100vmax rgba(30,29,26,.035)}
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

export default class Decouvrir extends Component<any, any> {
  state: any = {};

  renderVals() {
    const st = this.state || {};
    const raw = parseInt(this.props.carteSelectionnee ?? '1', 10);
    const def = (raw >= 1 && raw <= 4 ? raw : 1) - 1;
    const sel = st.sel ?? def;
    const tab = st.tab || 'pop';
    const slide = st.slide || 0;
    const menu = st.menu || null;
    const period = st.period || 'oct';
    const fGenre = st.fGenre || 'all';
    const fYear = st.fYear || 'all';
    const fNote = st.fNote || 'all';
    const sort = st.sort || 'best';
    const play = st.play || null;
    const paused = !!st.paused;
    const seq = st.seq || 0;
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
    const periods = [
      ['week', 'Cette semaine', '312', '38'],
      ['oct', 'Octobre 2026', '1 284', '214'],
      ['sep', 'Septembre 2026', '1 156', '187'],
      ['aug', 'Août 2026', '978', '152'],
      ['year', 'Année 2026', '9 842', '1 406']
    ];
    const per = periods.find((p) => p[0] === period) || periods[1];
    const all = {
      maree: ['cover-maree-basse.jpg', 'Marée basse', 'Lune Arnaud'],
      nuits: ['cover-nuits-fauves.jpg', 'Nuits fauves', 'Les Sables'],
      beton: ['cover-beton-tendre.jpg', 'Béton tendre', 'Kassim'],
      soleil: ['cover-soleil-dhiver.jpg', 'Soleil d’hiver', 'Odile Marchand'],
      freq: ['cover-frequences.jpg', 'Fréquences', 'Atelier Nova'],
      ciel: ['cover-ciel-rose.jpg', 'Ciel rose', 'Camille Dorée'],
      peri: ['cover-peripherique.jpg', 'Périphérique', 'Saïd et Nour'],
      jardin: ['cover-jardin-dombres.jpg', 'Jardin d’ombres', 'Sève'],
      verre: ['cover-verre-pile.jpg', 'Verre pilé', 'Mira Valence'],
      heures: ['cover-heures-creuses.jpg', 'Les heures creuses', 'Théo Valmont'],
      asphalte: ['cover-asphalte-dore.jpg', 'Asphalte doré', 'Yaya Bloom'],
      ecume: ['cover-ecume.jpg', 'Écume', 'Nils Ardent'],
      velours: ['cover-velours.jpg', 'Velours', 'Lila Moreau'],
      quartier: ['cover-quartier-libre.jpg', 'Quartier libre', 'Bakari']
    };
    const lists = {
      pop: ['maree', 'nuits', 'freq', 'ciel', 'peri', 'asphalte', 'verre'],
      rec: ['beton', 'soleil', 'ecume', 'velours', 'quartier', 'jardin', 'heures']
    };
    const covers = lists[tab].map((k) => {
      const c = all[k];
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
    const cardsData = [
      { id: 0, avatar: B + 'avatar-sillon.jpg', pseudo: 'Sillon', role: 'Critique · 342 avis', note: 4, title: 'Marée basse', rest: ' — Lune Arnaud (2026)', genre: 'pop', year: '2026', avg: 'Moyenne 3,8 (2 322 notes)' },
      { id: 1, avatar: B + 'avatar-melodie.jpg', pseudo: 'Mélo.die', role: 'Mélomane · 87 avis', note: 5, title: 'Nuits fauves', rest: ' — Les Sables (2026)', genre: 'rock', year: '2026', avg: 'Moyenne 4,2 (1 104 notes)' },
      { id: 2, avatar: B + 'avatar-basse-continue.jpg', pseudo: 'Basse Continue', role: 'Critique · 129 avis', note: 3, title: 'Béton tendre', rest: ' — Kassim (2026)', genre: 'rap', year: '2026', avg: 'Moyenne 3,1 (842 notes)' },
      { id: 3, avatar: B + 'avatar-lou-vinyle.jpg', pseudo: 'Lou Vinyle', role: 'Mélomane · 56 avis', note: 4, title: 'Soleil d’hiver', rest: ' — Odile Marchand (2026)', genre: 'jazz', year: '2026', avg: 'Moyenne 4,0 (615 notes)' }
    ];
    const orders = { best: [1, 0, 3, 2], recent: [0, 1, 2, 3], worst: [2, 0, 3, 1] };
    const okNote = (n) => fNote === 'all' || (fNote === '5' ? n === 5 : n >= parseInt(fNote, 10));
    const cards = orders[sort]
      .map((i) => cardsData[i])
      .filter((c) => (fGenre === 'all' || c.genre === fGenre) && (fYear === 'all' || c.year === fYear) && okNote(c.note))
      .map((c) => ({
        avatar: c.avatar,
        pseudo: c.pseudo,
        role: c.role,
        note: String(c.note),
        title: c.title,
        rest: c.rest,
        avg: c.avg,
        bg: c.id === sel ? '#D6D0C4' : '#ECE8E0',
        btn: c.id === sel ? '#F5F2EC' : '#E2DDD3',
        on: c.id === sel,
        selLabel: 'Afficher l’aperçu de ' + c.pseudo,
        pick: () => this.setState({ sel: c.id })
      }));
    const genres = [['all', 'Tous les genres'], ['pop', 'Pop'], ['rock', 'Rock'], ['rap', 'Rap'], ['jazz', 'Jazz'], ['electro', 'Électro']];
    const years = [['all', 'Toutes les années'], ['2026', '2026'], ['2025', '2025']];
    const notes = [['all', 'Toutes les notes'], ['5', '5 étoiles'], ['4', '4 étoiles et plus'], ['3', '3 étoiles et plus']];
    const sorts = [['best', 'Mieux notés'], ['recent', 'Plus récents'], ['worst', 'Moins bien notés']];
    const v = {
      closeMenus: () => this.setState({ menu: null }),
      mPer: menuOf('per', periods.map((p) => [p[0], p[1]]), period, (x) => ({ period: x })),
      perLabel: per[1],
      results: per[2],
      rated: per[3],
      covers: covers,
      trackX: 'translateX(-' + (slide * 192) + 'px)',
      next: () => this.setState({ slide: (slide + 1) % 4 }),
      popOn: tab === 'pop',
      recOn: tab === 'rec',
      popBg: tab === 'pop' ? '#D6D0C4' : '#E2DDD3',
      recBg: tab === 'rec' ? '#D6D0C4' : '#E2DDD3',
      popFw: tab === 'pop' ? '700' : '600',
      recFw: tab === 'rec' ? '700' : '600',
      pickPop: () => this.setState({ tab: 'pop', slide: 0 }),
      pickRec: () => this.setState({ tab: 'rec', slide: 0 }),
      mG: menuOf('g', genres, fGenre, (x) => ({ fGenre: x })),
      mY: menuOf('y', years, fYear, (x) => ({ fYear: x })),
      mN: menuOf('n', notes, fNote, (x) => ({ fNote: x })),
      mS: menuOf('s', sorts, sort, (x) => ({ sort: x })),
      gLabel: fGenre === 'all' ? 'Genre' : lab(genres, fGenre),
      yLabel: fYear === 'all' ? 'Année' : fYear,
      nLabel: fNote === 'all' ? 'Note' : (fNote === '5' ? '5 étoiles' : fNote + ' et plus'),
      gBg: fGenre === 'all' ? '#E2DDD3' : '#D6D0C4',
      yBg: fYear === 'all' ? '#E2DDD3' : '#D6D0C4',
      nBg: fNote === 'all' ? '#E2DDD3' : '#D6D0C4',
      sortLabel: lab(sorts, sort),
      cards: cards,
      noCards: cards.length === 0,
      reset: () => this.setState({ fGenre: 'all', fYear: 'all', fNote: 'all' }),
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
    for (let i = 0; i < 4; i++) {
      v['p' + i] = i === sel;
    }
    for (let j = 0; j < 5; j++) {
      v['l' + j + 'bg'] = j === 1 ? '#D6D0C4' : '#E2DDD3';
    }
    return v;
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
                  <h1 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "700", letterSpacing: "-0.02em" }}>Découvrir des projets</h1>
                  <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>
                    <span>{$v.results}</span>
                    {" résultats"}
                  </p>
                </div>
                <a className="st-link" href="#/projets" style={{ marginTop: "-5px", padding: "13px 4px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D", textDecoration: "underline", textUnderlineOffset: "3px", whiteSpace: "nowrap" }}>
                  Tout voir
                </a>
              </div>
              <section className="st-feat" aria-label="Projets à la une" style={{ marginTop: "28px", height: "180px", display: "flex", gap: "16px" }}>
                <div className="st-feat-btns" style={{ flex: "0 0 180px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button className="st-h" type="button" aria-pressed={$v.popOn} onClick={$v.pickPop} style={{ flex: "1 1 0", borderRadius: "16px", background: $v.popBg, fontSize: "15px", fontWeight: $v.popFw, transition: "background-color .2s ease" }}>
                    Populaires
                  </button>
                  <button className="st-h" type="button" aria-pressed={$v.recOn} onClick={$v.pickRec} style={{ flex: "1 1 0", borderRadius: "16px", background: $v.recBg, fontSize: "15px", fontWeight: $v.recFw, transition: "background-color .2s ease" }}>
                    Récents
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
              <section aria-label="Avis récents" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: "20px" }}>
                {($v.cards || []).map((c, i1) => (
                  <article key={i1} style={{ position: "relative", minHeight: "190px", borderRadius: "16px", background: c.bg, transition: "background-color .2s ease", padding: "26px 28px 25px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px" }}>
                    <button className="st-sel" type="button" aria-pressed={c.on} aria-label={c.selLabel} onClick={c.pick} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", borderRadius: "16px", background: "transparent" }} />
                    <div style={{ position: "relative", pointerEvents: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "0" }}>
                        <img src={c.avatar} alt="" style={{ flex: "0 0 48px", width: "48px", height: "48px", borderRadius: "999px", objectFit: "cover" }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                          <h2 style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>{c.pseudo}</h2>
                          <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{c.role}</p>
                        </div>
                      </div>
                      <p style={{ margin: "0 10px 0 0", display: "flex", alignItems: "baseline", gap: "4px", whiteSpace: "nowrap" }}>
                        <span style={{ fontSize: "20px", lineHeight: "24px", fontWeight: "700" }}>{c.note}</span>
                        <span style={{ fontSize: "14px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>/5</span>
                      </p>
                    </div>
                    <div style={{ position: "relative", pointerEvents: "none", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "12px 16px" }}>
                      <div style={{ minWidth: "0", padding: "0 0 12px 8px", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <p style={{ margin: "0", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", lineHeight: "20px", fontWeight: "500" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 16px" }}>
                            <circle cx="12" cy="12" r="10" />
                            <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
                            <circle cx="12" cy="12" r="2" />
                            <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
                          </svg>
                          <span>
                            <span style={{ fontWeight: "700" }}>{c.title}</span>
                            <span>{c.rest}</span>
                          </span>
                        </p>
                        <p style={{ margin: "0", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", lineHeight: "20px", fontWeight: "500" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 16px" }}>
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
                          <span>{c.avg}</span>
                        </p>
                      </div>
                      <a className="st-h" href="#/avis" style={{ pointerEvents: "auto", flex: "0 0 auto", height: "44px", padding: "0 20px", borderRadius: "999px", background: c.btn, display: "inline-flex", alignItems: "center", fontSize: "13px", fontWeight: "600", color: "#1E1D1A", transition: "background-color .2s ease" }}>
                        Lire l’avis
                      </a>
                    </div>
                  </article>
                ))}
                {$v.noCards ? (
                  <div style={{ gridColumn: "1 / -1", minHeight: "190px", borderRadius: "16px", background: "#ECE8E0", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", textAlign: "center" }}>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>Aucun avis ne correspond à ces filtres</p>
                    <button className="st-h" type="button" onClick={$v.reset} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                      Réinitialiser les filtres
                    </button>
                  </div>
                ) : null}
              </section>
            </main>
            <aside className="st-right" aria-label="Aperçu" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Projets notés" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Projets notés</span>
                    <span style={{ fontSize: "44px", lineHeight: "50px", fontWeight: "800", letterSpacing: "-0.03em" }}>{$v.rated}</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Aperçu du membre sélectionné" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "37px 16px 16px", display: "flex", flexDirection: "column" }}>
                {$v.p0 ? (
                  <div style={{ flex: "1 1 auto", minHeight: "498px", display: "flex", flexDirection: "column" }}>
                    <a className="st-cov" href="#/profil" aria-label="Voir le profil de Sillon" style={{ alignSelf: "center", display: "block", width: "88px", height: "88px", borderRadius: "999px", overflow: "hidden" }}>
                      <img src="images/avatar-sillon.jpg" alt="" style={{ display: "block", width: "88px", height: "88px", objectFit: "cover" }} />
                    </a>
                    <h2 style={{ margin: "12px 0 0", textAlign: "center", fontSize: "18px", lineHeight: "24px", fontWeight: "700" }}>Sillon</h2>
                    <p style={{ margin: "6px 0 0", textAlign: "center", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Critique · Lyon</p>
                    <div aria-hidden="true" style={{ height: "1px", margin: "22px 4px 0", background: "#D6D0C4" }} />
                    <h3 style={{ margin: "34px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M2 10v3" />
                        <path d="M6 6v11" />
                        <path d="M10 3v18" />
                        <path d="M14 8v7" />
                        <path d="M18 5v13" />
                        <path d="M22 10v3" />
                      </svg>
                      Genres favoris
                    </h3>
                    <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Rap, Jazz, Électro</p>
                    <h3 style={{ margin: "30px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m16 6 4 14" />
                        <path d="M12 6v14" />
                        <path d="M8 8v12" />
                        <path d="M4 4v16" />
                      </svg>
                      Ses bibliothèques
                    </h3>
                    <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection Coups de cœur de Sillon" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l0bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        Coups de cœur
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection 2026 de Sillon" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l1bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        2026
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection Vinyles de Sillon" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l2bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        Vinyles
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection À réécouter de Sillon" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l3bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        À réécouter
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection Road trip de Sillon" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l4bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        Road trip
                      </a>
                    </div>
                    <a className="st-h" href="#/profil" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                      Voir le profil
                    </a>
                  </div>
                ) : null}
                {$v.p1 ? (
                  <div style={{ flex: "1 1 auto", minHeight: "498px", display: "flex", flexDirection: "column" }}>
                    <a className="st-cov" href="#/profil" aria-label="Voir le profil de Mélo.die" style={{ alignSelf: "center", display: "block", width: "88px", height: "88px", borderRadius: "999px", overflow: "hidden" }}>
                      <img src="images/avatar-melodie.jpg" alt="" style={{ display: "block", width: "88px", height: "88px", objectFit: "cover" }} />
                    </a>
                    <h2 style={{ margin: "12px 0 0", textAlign: "center", fontSize: "18px", lineHeight: "24px", fontWeight: "700" }}>Mélo.die</h2>
                    <p style={{ margin: "6px 0 0", textAlign: "center", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Mélomane · Nantes</p>
                    <div aria-hidden="true" style={{ height: "1px", margin: "22px 4px 0", background: "#D6D0C4" }} />
                    <h3 style={{ margin: "34px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M2 10v3" />
                        <path d="M6 6v11" />
                        <path d="M10 3v18" />
                        <path d="M14 8v7" />
                        <path d="M18 5v13" />
                        <path d="M22 10v3" />
                      </svg>
                      Genres favoris
                    </h3>
                    <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Rock, Indé, Pop</p>
                    <h3 style={{ margin: "30px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m16 6 4 14" />
                        <path d="M12 6v14" />
                        <path d="M8 8v12" />
                        <path d="M4 4v16" />
                      </svg>
                      Ses bibliothèques
                    </h3>
                    <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection Live de Mélo.die" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l0bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        Live
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection Guitares de Mélo.die" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l1bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        Guitares
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection Dimanche de Mélo.die" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l2bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        Dimanche
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection Coups de cœur de Mélo.die" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l3bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        Coups de cœur
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection 2026 de Mélo.die" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l4bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        2026
                      </a>
                    </div>
                    <a className="st-h" href="#/profil" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                      Voir le profil
                    </a>
                  </div>
                ) : null}
                {$v.p2 ? (
                  <div style={{ flex: "1 1 auto", minHeight: "498px", display: "flex", flexDirection: "column" }}>
                    <a className="st-cov" href="#/profil-prive" aria-label="Voir le profil de Basse Continue" style={{ alignSelf: "center", display: "block", width: "88px", height: "88px", borderRadius: "999px", overflow: "hidden" }}>
                      <img src="images/avatar-basse-continue.jpg" alt="" style={{ display: "block", width: "88px", height: "88px", objectFit: "cover" }} />
                    </a>
                    <h2 style={{ margin: "12px 0 0", textAlign: "center", fontSize: "18px", lineHeight: "24px", fontWeight: "700" }}>Basse Continue</h2>
                    <p style={{ margin: "6px 0 0", textAlign: "center", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Critique</p>
                    <div aria-hidden="true" style={{ height: "1px", margin: "22px 4px 0", background: "#D6D0C4" }} />
                    <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", padding: "24px 0" }}>
                      <span aria-hidden="true" style={{ width: "56px", height: "56px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </span>
                      <p style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>Profil privé</p>
                    </div>
                    <a className="st-h" href="#/profil-prive" style={{ height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                      Voir le profil
                    </a>
                  </div>
                ) : null}
                {$v.p3 ? (
                  <div style={{ flex: "1 1 auto", minHeight: "498px", display: "flex", flexDirection: "column" }}>
                    <a className="st-cov" href="#/profil" aria-label="Voir le profil de Lou Vinyle" style={{ alignSelf: "center", display: "block", width: "88px", height: "88px", borderRadius: "999px", overflow: "hidden" }}>
                      <img src="images/avatar-lou-vinyle.jpg" alt="" style={{ display: "block", width: "88px", height: "88px", objectFit: "cover" }} />
                    </a>
                    <h2 style={{ margin: "12px 0 0", textAlign: "center", fontSize: "18px", lineHeight: "24px", fontWeight: "700" }}>Lou Vinyle</h2>
                    <p style={{ margin: "6px 0 0", textAlign: "center", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Mélomane · Lille</p>
                    <div aria-hidden="true" style={{ height: "1px", margin: "22px 4px 0", background: "#D6D0C4" }} />
                    <h3 style={{ margin: "34px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M2 10v3" />
                        <path d="M6 6v11" />
                        <path d="M10 3v18" />
                        <path d="M14 8v7" />
                        <path d="M18 5v13" />
                        <path d="M22 10v3" />
                      </svg>
                      Genres favoris
                    </h3>
                    <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Jazz, Soul, Chanson</p>
                    <h3 style={{ margin: "30px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m16 6 4 14" />
                        <path d="M12 6v14" />
                        <path d="M8 8v12" />
                        <path d="M4 4v16" />
                      </svg>
                      Ses bibliothèques
                    </h3>
                    <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection Vinyles de Lou Vinyle" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l0bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        Vinyles
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection Jazz du soir de Lou Vinyle" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l1bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        Jazz du soir
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection 2026 de Lou Vinyle" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l2bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        2026
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection Cadeaux de Lou Vinyle" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l3bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        Cadeaux
                      </a>
                      <a className="st-h" href="#/profil/collection" aria-label="Collection À écouter de Lou Vinyle" style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: $v.l4bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                        À écouter
                      </a>
                    </div>
                    <a className="st-h" href="#/profil" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                      Voir le profil
                    </a>
                  </div>
                ) : null}
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
