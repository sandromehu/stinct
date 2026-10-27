// @ts-nocheck
// Page « Projet » — converted from the STINCT design (Projet.dc.html).
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
.st-play{transition:background-color .15s ease,opacity .15s ease}
.st-play:hover{background:rgba(245,242,236,.82) !important}
.st-cov:hover .st-play,.st-play:focus-visible,.st-play[aria-pressed="true"]{opacity:1 !important}
.st-star{transition:background-color .15s ease}
.st-star:hover{background:rgba(30,29,26,.05)}
.st-star:focus-within{outline:2px solid #1E1D1A;outline-offset:0}
.st-track{transition:background-color .15s ease}
.st-track:hover{background:#E2DDD3 !important}
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
.st-hero-title{font-size:38px !important;line-height:42px !important}
}
`;

export default class Projet extends Component<any, any> {
  state: any = {};

  componentWillUnmount() {
    clearTimeout(this._tt);
  }
  renderVals() {
    const st = this.state || {};
    const B = 'images/';
    const COVER = B + 'cover-maree-basse.jpg';
    const menu = st.menu || null;
    const note = st.note ?? 4;
    const text = st.text ?? '';
    const vis = st.vis || 'public';
    const sort = st.sort || 'useful';
    const exp = st.exp || {};
    const liked = st.liked || {};
    const mine = st.mine || null;
    const saved = st.saved || {};
    const inLib = Object.keys(saved).some((k) => saved[k]);
    const modal = st.modal ?? (this.props.modaleOuverte ?? false);
    const draft = st.draft || (inLib ? saved : { cdc: true });
    const extra = st.extra || [];
    const newName = st.newName ?? '';
    const play = st.play || null;
    const paused = !!st.paused;
    const seq = st.seq || 0;
    const say = (msg) => {
      clearTimeout(this._tt);
      this.setState({ toast: msg });
      this._tt = setTimeout(() => this.setState({ toast: null }), 2600);
    };
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
    const startPlay = (title) => {
      if (play && play.title === title) this.setState({ paused: !paused });
      else this.setState({ play: { src: COVER, title: title, artist: 'Lune Arnaud' }, paused: false, seq: seq + 1 });
    };
    const coverOn = !!play && play.title === 'Marée basse' && !paused;
    const T = [['Sel', '3:12'], ['Marée basse', '4:05'], ['Phare', '3:48'], ['Laisse filer', '3:31'], ['Sable mouillé', '3:57'], ['Nuit blanche', '4:20'], ['Coefficient 110', '2:58'], ['Les mouettes', '3:40'], ['Basse mer', '4:12'], ['Retour', '3:29'], ['Grande marée', '4:58']];
    const tracks = T.map((t, i) => {
      const cur = !!play && play.title === t[0];
      const on = cur && !paused;
      return {
        n: String(i + 1),
        title: t[0],
        dur: t[1],
        isOn: on,
        isOff: !on,
        fw: cur ? '700' : '500',
        bg: cur ? '#E2DDD3' : 'transparent',
        label: (on ? 'Mettre en pause ' : 'Écouter l’extrait de ') + t[0],
        toggle: () => startPlay(t[0])
      };
    });
    const stars = [1, 2, 3, 4, 5].map((n) => ({
      value: String(n),
      on: n === note,
      fill: n <= note ? '#1E1D1A' : '#CFC9BD',
      label: n === 1 ? '1 étoile' : n + ' étoiles',
      pick: () => this.setState({ note: n })
    }));
    const R = [
      { id: 'sillon', name: 'Sillon', role: 'Critique · 342 avis', av: 'avatar-sillon.jpg', note: 4, date: 'Publié le 6 octobre', rec: 1, useful: 24, text: 'Lune Arnaud ralentit le tempo et ça lui réussit. Les synthés respirent, la voix n’a jamais été aussi proche. Un léger creux au milieu du disque, mais « Phare » et « Laisse filer » restent en tête des jours entiers. La dernière partie, de « Basse mer » à « Grande marée », s’écoute d’une traite, comme une seule longue marée descendante.' },
      { id: 'jade', name: 'Jade.wav', role: 'Mélomane · 64 avis', av: 'avatar-jade.jpg', note: 5, date: 'Publié le 4 octobre', rec: 2, useful: 31, text: 'Un disque à écouter au casque, tard, fenêtre ouverte. Chaque morceau ressemble à une vague qui se retire : on en ressort lessivé, mais apaisé. J’ai rarement entendu une production aussi patiente, qui laisse autant de place au silence. Mon album de l’automne, sans hésiter.' },
      { id: 'arthur', name: 'Arthur K.', role: 'Critique · 211 avis', av: 'avatar-arthur.jpg', note: 3, date: 'Publié le 1er octobre', rec: 3, useful: 9, text: 'Très belle production, mais l’ensemble manque de relief : passé la moitié, les titres finissent par se ressembler. Je garde « Marée basse » et « Sel » pour mes dimanches, et j’attends de voir ce que ces chansons donneront sur scène.' },
      { id: 'kenza', name: 'Kenza B.', role: 'Mélomane · 38 avis', av: 'avatar-kenza.jpg', note: 4, date: 'Publié le 28 septembre', rec: 4, useful: 17, text: 'Plus pop que le précédent, sans rien perdre de ce flou qui fait son charme. Les refrains sont plus évidents, les textes plus directs. « Laisse filer » a tout d’un futur classique. Une étoile en moins pour un milieu de disque un peu sage.' }
    ];
    const cmp = {
      useful: (a, b) => b.useful - a.useful,
      recent: (a, b) => a.rec - b.rec,
      best: (a, b) => b.note - a.note || a.rec - b.rec,
      worst: (a, b) => a.note - b.note || a.rec - b.rec
    };
    let list = R.slice().sort(cmp[sort]);
    if (mine) {
      list = [{ id: 'mine', name: 'ninon.fm', role: 'Votre avis · ' + lab([['public', 'Public'], ['abonnes', 'Abonnés'], ['prive', 'Privé']], mine.vis), av: 'avatar-ninon.jpg', note: mine.note, date: 'Publié à l’instant', rec: 0, useful: 0, text: mine.text, mine: true }].concat(list);
    }
    const reviews = list.map((r) => {
      const open = !!exp[r.id];
      const on = !!liked[r.id];
      return {
        name: r.name,
        role: r.role,
        avatar: B + r.av,
        profileLabel: 'Voir le profil de ' + r.name,
        note: String(r.note),
        date: r.date,
        text: r.text,
        bg: r.mine ? '#E2DDD3' : '#ECE8E0',
        display: open ? 'block' : '-webkit-box',
        open: open,
        moreLabel: open ? 'Réduire' : 'Lire la suite',
        toggle: () => {
          const next = Object.assign({}, exp);
          next[r.id] = !open;
          this.setState({ exp: next });
        },
        isMine: !!r.mine,
        notMine: !r.mine,
        usefulOn: on,
        usefulBg: on ? '#D6D0C4' : '#E2DDD3',
        usefulCount: String(r.useful + (on ? 1 : 0)),
        usefulAria: (on ? 'Retirer « utile » de l’avis de ' : 'Marquer comme utile l’avis de ') + r.name,
        toggleUseful: () => {
          const next = Object.assign({}, liked);
          next[r.id] = !on;
          this.setState({ liked: next });
        },
        remove: () => {
          this.setState({ mine: null });
          say('Votre avis a été supprimé');
        }
      };
    });
    const visOpts = [['public', 'Public'], ['abonnes', 'Abonnés'], ['prive', 'Privé']];
    const sortOpts = [['useful', 'Plus utiles'], ['recent', 'Plus récents'], ['best', 'Mieux notés'], ['worst', 'Moins bien notés']];
    const base = [
      { id: 'cdc', name: 'Coups de cœur', meta: '24 projets · Écoutes 2026', m: ['cover-nuits-fauves.jpg', 'cover-ciel-rose.jpg', 'cover-velours.jpg', 'cover-soleil-dhiver.jpg'] },
      { id: 'are', name: 'À réécouter', meta: '12 projets · Écoutes 2026', m: ['cover-frequences.jpg', 'cover-ecume.jpg', 'cover-heures-creuses.jpg', 'cover-beton-tendre.jpg'] },
      { id: 'vin', name: 'Vinyles', meta: '18 projets · Archives', m: ['cover-quartier-libre.jpg', 'cover-asphalte-dore.jpg', 'cover-jardin-dombres.jpg', 'cover-verre-pile.jpg'] },
      { id: 'road', name: 'Road trip', meta: '9 projets · Écoutes 2026', m: ['cover-peripherique.jpg', 'cover-ciel-rose.jpg', 'cover-nuits-fauves.jpg', 'cover-asphalte-dore.jpg'] }
    ];
    const allCols = base.concat(extra);
    const cols = allCols.map((c) => {
      const on = !!draft[c.id];
      return {
        name: c.name,
        meta: c.meta,
        on: on,
        bg: on ? '#D6D0C4' : '#ECE8E0',
        dot: on ? '#1E1D1A' : '#E2DDD3',
        tick: on ? '1' : '0',
        rest: c.fresh ? '0' : '1',
        m1: B + c.m[0],
        m2: B + c.m[1],
        m3: B + c.m[2],
        m4: B + c.m[3],
        toggle: () => {
          const next = Object.assign({}, draft);
          next[c.id] = !on;
          this.setState({ draft: next });
        }
      };
    });
    return {
      closeMenus: () => this.setState({ menu: null }),
      coverOn: coverOn,
      coverOff: !coverOn,
      coverLabel: coverOn ? 'Mettre en pause l’extrait' : 'Écouter un extrait de Marée basse',
      playCover: () => startPlay('Marée basse'),
      tracks: tracks,
      inLib: inLib,
      notInLib: !inLib,
      libBg: inLib ? '#D6D0C4' : '#E2DDD3',
      libLabel: inLib ? 'Dans ma bibliothèque' : 'Ajouter à ma bibliothèque',
      stars: stars,
      noteLabel: note + ' sur 5',
      text: text,
      count: String(text.length),
      onText: (e) => this.setState({ text: e.target.value }),
      mVis: menuOf('vis', visOpts, vis, (x) => ({ vis: x })),
      visLabel: lab(visOpts, vis),
      publishLabel: mine ? 'Mettre à jour l’avis' : 'Publier l’avis',
      publish: () => {
        const t = text.trim();
        if (!t) {
          say('Écrivez quelques mots avant de publier');
          return;
        }
        const wasMine = !!mine;
        this.setState({ mine: { note: note, text: t, vis: vis }, text: '' });
        say(wasMine ? 'Votre avis a été mis à jour' : 'Avis publié');
      },
      reviewCount: (mine ? '419' : '418') + ' avis',
      mSort: menuOf('sort', sortOpts, sort, (x) => ({ sort: x })),
      sortLabel: lab(sortOpts, sort),
      reviews: reviews,
      modal: modal,
      openModal: () => this.setState({ modal: true, draft: inLib ? saved : { cdc: true }, newName: '' }),
      closeModal: () => this.setState({ modal: false, draft: null }),
      saveModal: () => {
        const chosen = allCols.filter((c) => draft[c.id]);
        this.setState({ saved: draft, modal: false, draft: null });
        if (chosen.length === 0) say('Retiré de votre bibliothèque');
        else if (chosen.length === 1) say('Ajouté à « ' + chosen[0].name + ' »');
        else say('Ajouté à ' + chosen.length + ' collections');
      },
      cols: cols,
      newName: newName,
      onNewName: (e) => this.setState({ newName: e.target.value }),
      create: () => {
        const name = newName.trim();
        if (!name) {
          say('Donnez un nom à la collection');
          return;
        }
        const id = 'n' + extra.length;
        const next = Object.assign({}, draft);
        next[id] = true;
        this.setState({
          extra: extra.concat([{ id: id, name: name, meta: 'Nouvelle collection · 1 projet', fresh: true, m: ['cover-maree-basse.jpg', 'cover-maree-basse.jpg', 'cover-maree-basse.jpg', 'cover-maree-basse.jpg'] }]),
          draft: next,
          newName: ''
        });
      },
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
      pClose: () => this.setState({ play: null, paused: false }),
      toastOn: !!st.toast,
      toast: st.toast || '',
      toastBottom: play ? '100px' : '24px'
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
              </header>
              <section aria-labelledby="titre-projet" style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "28px" }}>
                <div className="st-cov" style={{ position: "relative", flex: "0 0 288px", width: "288px", height: "288px", borderRadius: "16px", overflow: "hidden", background: "#E2DDD3" }}>
                  <img src="images/cover-maree-basse.jpg" alt="Pochette de Marée basse, de Lune Arnaud" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                  {" "}
                  <button className="st-play" type="button" aria-label={$v.coverLabel} aria-pressed={$v.coverOn} onClick={$v.playCover} style={{ position: "absolute", left: "112px", top: "112px", width: "64px", height: "64px", borderRadius: "999px", background: "rgba(245, 242, 236, 0.55)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A", opacity: "0" }}>
                    {$v.coverOff ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7.5 4.6v14.8a1 1 0 0 0 1.53.85l11.6-7.4a1 1 0 0 0 0-1.7L9.03 3.75A1 1 0 0 0 7.5 4.6z" />
                      </svg>
                    ) : null}
                    {$v.coverOn ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <rect x="6" y="4.5" width="4.2" height="15" rx="1.3" />
                        <rect x="13.8" y="4.5" width="4.2" height="15" rx="1.3" />
                      </svg>
                    ) : null}
                  </button>
                </div>
                <div style={{ flex: "1 1 320px", minWidth: "0", minHeight: "288px", padding: "6px 0 0 4px", display: "flex", flexDirection: "column" }}>
                  <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Album · 2026</p>
                  <h1 id="titre-projet" className="st-hero-title" style={{ margin: "10px 0 0", fontSize: "52px", lineHeight: "56px", fontWeight: "800", letterSpacing: "-0.035em" }}>
                    Marée basse
                  </h1>
                  <p style={{ margin: "8px 0 0", fontSize: "18px", lineHeight: "24px", fontWeight: "600" }}>Lune Arnaud</p>
                  <ul aria-label="Genres" style={{ margin: "20px 0 0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <li>
                      <a className="st-h" href="#/projets" style={{ height: "36px", padding: "0 16px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", fontSize: "13px", fontWeight: "500", color: "#1E1D1A" }}>
                        Pop
                      </a>
                    </li>
                    <li>
                      <a className="st-h" href="#/projets" style={{ height: "36px", padding: "0 16px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", fontSize: "13px", fontWeight: "500", color: "#1E1D1A" }}>
                        Électro
                      </a>
                    </li>
                    <li>
                      <a className="st-h" href="#/projets" style={{ height: "36px", padding: "0 16px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", fontSize: "13px", fontWeight: "500", color: "#1E1D1A" }}>
                        Dream pop
                      </a>
                    </li>
                  </ul>
                  <p style={{ margin: "14px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>
                    11 titres · 42 min · Sorti le 12 septembre 2026
                  </p>
                  <div style={{ marginTop: "auto", paddingTop: "20px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    <button className="st-h" type="button" aria-haspopup="dialog" onClick={$v.openModal} style={{ height: "48px", padding: "0 24px 0 18px", borderRadius: "999px", background: $v.libBg, display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600", transition: "background-color .2s ease" }}>
                      {$v.notInLib ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                          <path d="M12 7v6" />
                          <path d="M15 10H9" />
                        </svg>
                      ) : null}
                      {$v.inLib ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
                          <path d="m9 10 2 2 4-4" />
                        </svg>
                      ) : null}
                      <span>{$v.libLabel}</span>
                    </button>
                  </div>
                </div>
              </section>
              <section aria-labelledby="titre-votre-avis" style={{ marginTop: "28px", borderRadius: "16px", background: "#ECE8E0", padding: "26px 28px 24px 32px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px 24px" }}>
                  <h2 id="titre-votre-avis" style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Votre avis</h2>
                  <fieldset style={{ margin: "0", padding: "0", border: "0", minWidth: "0" }}>
                    <legend className="st-sr">Votre note sur 5</legend>
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span aria-hidden="true" style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>Votre note</span>
                      <div style={{ display: "flex", gap: "2px" }}>
                        {($v.stars || []).map((s, i1) => (
                          <label key={i1} className="st-star" style={{ position: "relative", width: "40px", height: "40px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <input type="radio" name="note" value={s.value} checked={s.on} onChange={s.pick} aria-label={s.label} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                            <svg width="28" height="28" viewBox="0 0 24 24" fill={s.fill} stroke={s.fill} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                            </svg>
                          </label>
                        ))}
                      </div>
                      <span style={{ minWidth: "56px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.noteLabel}</span>
                    </div>
                  </fieldset>
                </div>
                <label htmlFor="avis-texte" className="st-sr">Votre avis sur Marée basse</label>
                <textarea id="avis-texte" rows={5} maxLength={2000} placeholder="Qu’avez-vous pensé de Marée basse ? L’ambiance, les morceaux qui vous ont marqué, la production…" value={$v.text} onChange={$v.onText} style={{ display: "block", width: "100%", minHeight: "132px", resize: "vertical", borderRadius: "16px", background: "#F5F2EC", padding: "16px 18px", fontSize: "14px", lineHeight: "22px", fontWeight: "500" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px 16px" }}>
                  <p style={{ margin: "0", paddingLeft: "4px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>
                    <span>{$v.count}</span>
                    {" / 2 000 caractères"}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    <div style={{ position: "relative" }}>
                      <button className="st-h" type="button" aria-haspopup="true" aria-expanded={$v.mVis?.open} onClick={$v.mVis?.toggle} style={{ height: "44px", padding: "0 16px 0 18px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", whiteSpace: "nowrap" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                        <span style={{ fontWeight: "500", color: "#8C877D" }}>Visible par :</span>
                        <span style={{ fontWeight: "600" }}>{$v.visLabel}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      {" "}
                      {$v.mVis?.open ? (
                        <>
                          <button className="st-scrim" type="button" tabIndex={-1} aria-label="Fermer le menu" onClick={$v.closeMenus} />
                          {" "}
                          <div className="st-menu" style={{ top: "52px", right: "0" }}>
                            {($v.mVis?.opts || []).map((o, i1) => (
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
                    <button className="st-h" type="button" onClick={$v.publish} style={{ height: "44px", padding: "0 24px", borderRadius: "999px", background: "#D6D0C4", fontSize: "13px", fontWeight: "700" }}>
                      {$v.publishLabel}
                    </button>
                  </div>
                </div>
              </section>
              <section aria-labelledby="titre-avis-membres" style={{ marginTop: "40px" }}>
                <div style={{ paddingLeft: "8px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px 16px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                    <h2 id="titre-avis-membres" style={{ margin: "0", fontSize: "22px", lineHeight: "28px", fontWeight: "700", letterSpacing: "-0.01em" }}>
                      Avis des membres
                    </h2>
                    <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.reviewCount}</span>
                  </div>
                  <div style={{ position: "relative" }}>
                    <button className="st-h" type="button" aria-haspopup="true" aria-expanded={$v.mSort?.open} onClick={$v.mSort?.toggle} style={{ height: "44px", padding: "0 18px 0 22px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", whiteSpace: "nowrap" }}>
                      <span style={{ fontWeight: "500", color: "#8C877D" }}>Trier par :</span>
                      <span style={{ fontWeight: "600" }}>{$v.sortLabel}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "4px" }}>
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {" "}
                    {$v.mSort?.open ? (
                      <>
                        <button className="st-scrim" type="button" tabIndex={-1} aria-label="Fermer le menu" onClick={$v.closeMenus} />
                        {" "}
                        <div className="st-menu" style={{ top: "52px", right: "0" }}>
                          {($v.mSort?.opts || []).map((o, i1) => (
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
                {" "}
                <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: "20px" }}>
                  {($v.reviews || []).map((r, i1) => (
                    <article key={i1} style={{ minHeight: "240px", borderRadius: "16px", background: r.bg, padding: "26px 28px 24px 36px", display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "0" }}>
                          {r.notMine ? (
                            <a className="st-cov" href="#/profil" aria-label={r.profileLabel} style={{ flex: "0 0 48px", display: "block", width: "48px", height: "48px", borderRadius: "999px", overflow: "hidden" }}>
                              <img src={r.avatar} alt="" style={{ display: "block", width: "48px", height: "48px", objectFit: "cover" }} />
                            </a>
                          ) : null}
                          {r.isMine ? (
                            <a className="st-cov" href="#/mon-profil" aria-label="Voir mon profil" style={{ flex: "0 0 48px", display: "block", width: "48px", height: "48px", borderRadius: "999px", overflow: "hidden" }}>
                              <img src={r.avatar} alt="" style={{ display: "block", width: "48px", height: "48px", objectFit: "cover" }} />
                            </a>
                          ) : null}
                          <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                            <h3 style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>{r.name}</h3>
                            <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{r.role}</p>
                          </div>
                        </div>
                        <p style={{ margin: "0 10px 0 0", display: "flex", alignItems: "baseline", gap: "4px", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "20px", lineHeight: "24px", fontWeight: "700" }}>{r.note}</span>
                          <span style={{ fontSize: "14px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>/5</span>
                        </p>
                      </div>
                      <p style={{ margin: "0", paddingLeft: "8px", fontSize: "14px", lineHeight: "22px", fontWeight: "500", display: r.display, WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {r.text}
                      </p>
                      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                        <p style={{ margin: "0", paddingLeft: "8px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{r.date}</p>
                        <div style={{ display: "flex", gap: "8px" }}>
                          {r.notMine ? (
                            <button className="st-h" type="button" aria-pressed={r.usefulOn} aria-label={r.usefulAria} onClick={r.toggleUseful} style={{ height: "44px", padding: "0 16px 0 14px", borderRadius: "999px", background: r.usefulBg, display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "600", transition: "background-color .2s ease" }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M7 10v12" />
                                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                              </svg>
                              <span>{r.usefulCount}</span>
                            </button>
                          ) : null}
                          {r.isMine ? (
                            <button className="st-h" type="button" onClick={r.remove} style={{ height: "44px", padding: "0 18px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                              Supprimer
                            </button>
                          ) : null}
                          <button className="st-h" type="button" aria-expanded={r.open} onClick={r.toggle} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                            {r.moreLabel}
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </main>
            <aside className="st-right" aria-label="À propos du projet" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Note moyenne" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Note moyenne</span>
                    <span style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                      <span style={{ fontSize: "44px", lineHeight: "50px", fontWeight: "800", letterSpacing: "-0.03em" }}>3,8</span>
                      <span style={{ fontSize: "15px", lineHeight: "20px", fontWeight: "600", color: "#8C877D" }}>/5</span>
                    </span>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>2 322 notes</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Répartition des notes et tracklist" style={{ flex: "0 0 auto", borderRadius: "24px", background: "#ECE8E0", padding: "28px 16px 18px", display: "flex", flexDirection: "column" }}>
                <h2 style={{ margin: "0 0 0 4px", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                  Répartition des notes
                </h2>
                <ul style={{ margin: "18px 0 0", padding: "0 4px", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ flex: "0 0 28px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>
                      5
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="#1E1D1A" aria-hidden="true">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                      <span className="st-sr">étoiles</span>
                    </span>
                    <span aria-hidden="true" style={{ flex: "1 1 auto", height: "6px", borderRadius: "999px", background: "#E2DDD3", overflow: "hidden" }}>
                      <span style={{ display: "block", width: "100%", height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                    </span>
                    <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>34 %</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ flex: "0 0 28px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>
                      4
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="#1E1D1A" aria-hidden="true">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                      <span className="st-sr">étoiles</span>
                    </span>
                    <span aria-hidden="true" style={{ flex: "1 1 auto", height: "6px", borderRadius: "999px", background: "#E2DDD3", overflow: "hidden" }}>
                      <span style={{ display: "block", width: "91%", height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                    </span>
                    <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>31 %</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ flex: "0 0 28px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>
                      3
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="#1E1D1A" aria-hidden="true">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                      <span className="st-sr">étoiles</span>
                    </span>
                    <span aria-hidden="true" style={{ flex: "1 1 auto", height: "6px", borderRadius: "999px", background: "#E2DDD3", overflow: "hidden" }}>
                      <span style={{ display: "block", width: "59%", height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                    </span>
                    <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>20 %</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ flex: "0 0 28px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>
                      2
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="#1E1D1A" aria-hidden="true">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                      <span className="st-sr">étoiles</span>
                    </span>
                    <span aria-hidden="true" style={{ flex: "1 1 auto", height: "6px", borderRadius: "999px", background: "#E2DDD3", overflow: "hidden" }}>
                      <span style={{ display: "block", width: "26%", height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                    </span>
                    <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>9 %</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ flex: "0 0 28px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>
                      1
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="#1E1D1A" aria-hidden="true">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                      <span className="st-sr">étoile</span>
                    </span>
                    <span aria-hidden="true" style={{ flex: "1 1 auto", height: "6px", borderRadius: "999px", background: "#E2DDD3", overflow: "hidden" }}>
                      <span style={{ display: "block", width: "18%", height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                    </span>
                    <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>6 %</span>
                  </li>
                </ul>
                <div aria-hidden="true" style={{ height: "1px", margin: "24px 4px", background: "#D6D0C4" }} />
                <div style={{ padding: "0 4px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                  <h2 style={{ margin: "0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15V6" />
                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M12 12H3" />
                      <path d="M16 6H3" />
                      <path d="M12 18H3" />
                    </svg>
                    Tracklist
                  </h2>
                  <span style={{ fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>42 min</span>
                </div>
                <ol style={{ margin: "10px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
                  {($v.tracks || []).map((t, i1) => (
                    <li key={i1}>
                      <button className="st-track" type="button" aria-label={t.label} aria-pressed={t.isOn} onClick={t.toggle} style={{ width: "100%", height: "44px", padding: "0 8px", borderRadius: "12px", background: t.bg, display: "flex", alignItems: "center", gap: "12px", textAlign: "left", fontSize: "13.5px", lineHeight: "18px" }}>
                        <span style={{ flex: "0 0 20px", display: "flex", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "#8C877D", fontVariantNumeric: "tabular-nums" }}>
                          {t.isOff ? (
                            <span>{t.n}</span>
                          ) : null}
                          {t.isOn ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1E1D1A" aria-hidden="true">
                              <rect x="6" y="4.5" width="4.2" height="15" rx="1.3" />
                              <rect x="13.8" y="4.5" width="4.2" height="15" rx="1.3" />
                            </svg>
                          ) : null}
                        </span>
                        <span style={{ flex: "1 1 auto", minWidth: "0", fontWeight: t.fw, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.title}</span>
                        <span style={{ fontSize: "12.5px", fontWeight: "500", color: "#8C877D", fontVariantNumeric: "tabular-nums" }}>{t.dur}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </section>
            </aside>
          </div>
          {$v.modal ? (
            <div style={{ position: "fixed", inset: "0", zIndex: "50", overflowY: "auto", padding: "24px 16px", display: "flex", background: "rgba(30, 29, 26, 0.28)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}>
              <section role="dialog" aria-modal="true" aria-labelledby="titre-modale" style={{ margin: "auto", width: "100%", maxWidth: "480px", borderRadius: "24px", background: "#F5F2EC", padding: "28px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                  <h2 id="titre-modale" style={{ margin: "0", fontSize: "20px", lineHeight: "26px", fontWeight: "700", letterSpacing: "-0.01em" }}>
                    Ajouter à ma bibliothèque
                  </h2>
                  <button className="st-h" type="button" aria-label="Fermer" onClick={$v.closeModal} style={{ flex: "0 0 44px", width: "44px", height: "44px", margin: "-9px -9px 0 0", borderRadius: "999px", background: "#ECE8E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "14px" }}>
                  <img src="images/cover-maree-basse.jpg" alt="" style={{ flex: "0 0 48px", width: "48px", height: "48px", borderRadius: "12px", objectFit: "cover" }} />
                  <div style={{ minWidth: "0" }}>
                    <p style={{ margin: "0", fontSize: "14px", lineHeight: "20px", fontWeight: "700" }}>Marée basse</p>
                    {" "}
                    <p style={{ margin: "2px 0 0", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Lune Arnaud · 2026</p>
                  </div>
                </div>
                <p style={{ margin: "24px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Choisir une ou plusieurs collections</p>
                <ul style={{ margin: "12px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {($v.cols || []).map((c, i1) => (
                    <li key={i1}>
                      <button className="st-h" type="button" aria-pressed={c.on} onClick={c.toggle} style={{ width: "100%", minHeight: "64px", padding: "10px 16px 10px 10px", borderRadius: "16px", background: c.bg, display: "flex", alignItems: "center", gap: "14px", textAlign: "left", transition: "background-color .2s ease" }}>
                        <span aria-hidden="true" style={{ flex: "0 0 44px", width: "44px", height: "44px", borderRadius: "10px", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1px", background: "#E2DDD3" }}>
                          <img src={c.m1} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                          <img src={c.m2} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", opacity: c.rest }} />
                          <img src={c.m3} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", opacity: c.rest }} />
                          <img src={c.m4} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", opacity: c.rest }} />
                        </span>
                        <span style={{ flex: "1 1 auto", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>{c.name}</span>
                          <span style={{ fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{c.meta}</span>
                        </span>
                        <span aria-hidden="true" style={{ flex: "0 0 24px", width: "24px", height: "24px", borderRadius: "999px", background: c.dot, color: "#F5F2EC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: c.tick }}>
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "8px", minHeight: "64px", padding: "10px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", gap: "14px" }}>
                  <span aria-hidden="true" style={{ flex: "0 0 44px", width: "44px", height: "44px", borderRadius: "10px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                  <label htmlFor="nouvelle-collection" className="st-sr">Nom de la nouvelle collection</label>
                  <input id="nouvelle-collection" type="text" placeholder="Nouvelle collection" value={$v.newName} onChange={$v.onNewName} style={{ flex: "1 1 auto", minWidth: "0", height: "44px", background: "transparent", fontSize: "14px", fontWeight: "600" }} />
                  <button className="st-h" type="button" onClick={$v.create} style={{ flex: "0 0 auto", height: "44px", padding: "0 18px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                    Créer
                  </button>
                </div>
                <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end", flexWrap: "wrap", gap: "12px" }}>
                  <button className="st-h" type="button" onClick={$v.closeModal} style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#ECE8E0", fontSize: "14px", fontWeight: "600" }}>
                    Annuler
                  </button>
                  <button className="st-h" type="button" onClick={$v.saveModal} style={{ height: "48px", padding: "0 26px", borderRadius: "999px", background: "#D6D0C4", fontSize: "14px", fontWeight: "700" }}>
                    Enregistrer
                  </button>
                </div>
              </section>
            </div>
          ) : null}
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
          <div role="status" aria-live="polite" style={{ position: "fixed", left: "50%", bottom: $v.toastBottom, zIndex: "60", transform: "translateX(-50%)", pointerEvents: "none" }}>
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
