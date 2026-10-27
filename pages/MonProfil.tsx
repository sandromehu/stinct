// @ts-nocheck
// Page « MonProfil » — converted from the STINCT design (Mon-profil.dc.html).
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
.st-avatar{width:120px !important;height:120px !important;flex-basis:120px !important}
}
`;

export default class MonProfil extends Component<any, any> {
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
    const plain = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const menu = st.menu || null;
    const tab = st.tab || 'avis';
    const sorts = st.sorts || {};
    const sort = sorts[tab] || 'recent';
    const visOv = st.visOv || {};
    const VIS_TXT = { 'Public': 'visible par tout le monde', 'Abonnés': 'réservé à vos abonnés', 'Privé': 'visible par vous seul' };

    const AVIS = [
      { rec: 1, cov: 'cover-asphalte-dore.jpg', title: 'Asphalte doré', meta: 'Yaya Bloom · 2026', note: 5, date: 'Publié le 3 octobre', vis: 'Public', text: 'Un disque de R&B qui prend son temps et ne rate jamais sa cible. Les voix sont posées au millimètre, les basses vous attrapent dès la première écoute.' },
      { rec: 2, cov: 'cover-ciel-rose.jpg', title: 'Ciel rose', meta: 'Camille Dorée · 2026', note: 4, date: 'Publié le 27 septembre', vis: 'Abonnés', text: 'Des refrains qui collent à la peau et une production pastel qui ne tombe jamais dans le sucre. Parfait pour les fins d’été.' },
      { rec: 3, cov: 'cover-velours.jpg', title: 'Velours', meta: 'Lila Moreau · 2026', note: 4, date: 'Publié le 19 septembre', vis: 'Public', text: 'Une voix de velours, littéralement. Le disque s’essouffle un peu sur la fin, mais les cinq premiers titres sont impeccables.' },
      { rec: 4, cov: 'cover-nuits-fauves.jpg', title: 'Nuits fauves', meta: 'Les Sables · 2026', note: 3, date: 'Publié le 8 septembre', vis: 'Privé', text: 'Le rock des Sables sonne plus grand que jamais, mais j’ai du mal à m’y attacher. Je garde ces notes pour moi en attendant de le réécouter.' },
      { rec: 5, cov: 'cover-soleil-dhiver.jpg', title: 'Soleil d’hiver', meta: 'Odile Marchand · 2026', note: 4, date: 'Publié le 30 août', vis: 'Public', text: 'Un piano, une contrebasse et beaucoup de place pour respirer. Mon disque du dimanche matin depuis un mois.' },
      { rec: 6, cov: 'cover-quartier-libre.jpg', title: 'Quartier libre', meta: 'Bakari · 2025', note: 3, date: 'Publié le 21 août', vis: 'Abonnés', text: 'Énergique et drôle, mais trop long : une mixtape qui gagnerait à perdre cinq titres.' }
    ];
    const COLS = [
      { rec: 1, name: 'Coups de cœur', n: 24, m: ['cover-nuits-fauves.jpg', 'cover-ciel-rose.jpg', 'cover-velours.jpg', 'cover-soleil-dhiver.jpg'] },
      { rec: 2, name: 'À réécouter', n: 12, m: ['cover-frequences.jpg', 'cover-ecume.jpg', 'cover-heures-creuses.jpg', 'cover-beton-tendre.jpg'] },
      { rec: 3, name: 'Road trip', n: 9, m: ['cover-peripherique.jpg', 'cover-ciel-rose.jpg', 'cover-nuits-fauves.jpg', 'cover-asphalte-dore.jpg'] },
      { rec: 4, name: 'Dimanche matin', n: 11, m: ['cover-soleil-dhiver.jpg', 'cover-heures-creuses.jpg', 'cover-jardin-dombres.jpg', 'cover-ecume.jpg'] },
      { rec: 5, name: 'Nuits d’automne', n: 7, m: ['cover-velours.jpg', 'cover-nuits-fauves.jpg', 'cover-peripherique.jpg', 'cover-verre-pile.jpg'] },
      { rec: 6, name: 'Découvertes', n: 16, m: ['cover-beton-tendre.jpg', 'cover-quartier-libre.jpg', 'cover-asphalte-dore.jpg', 'cover-maree-basse.jpg'] },
      { rec: 7, name: 'Vinyles', n: 18, m: ['cover-quartier-libre.jpg', 'cover-asphalte-dore.jpg', 'cover-jardin-dombres.jpg', 'cover-verre-pile.jpg'] },
      { rec: 8, name: '2025', n: 40, m: ['cover-heures-creuses.jpg', 'cover-ecume.jpg', 'cover-jardin-dombres.jpg', 'cover-quartier-libre.jpg'] }
    ];
    const RECOS = [
      { rec: 1, cov: 'cover-ciel-rose.jpg', title: 'Ciel rose', meta: 'Camille Dorée · 2026', text: '« Pour celles et ceux qui aiment la pop qui fait danser sans forcer. »' },
      { rec: 2, cov: 'cover-asphalte-dore.jpg', title: 'Asphalte doré', meta: 'Yaya Bloom · 2026', text: '« Le meilleur disque soul de l’année, à écouter au casque. »' },
      { rec: 3, cov: 'cover-soleil-dhiver.jpg', title: 'Soleil d’hiver', meta: 'Odile Marchand · 2026', text: '« Un jazz doux pour ralentir, idéal en fin de journée. »' },
      { rec: 4, cov: 'cover-ecume.jpg', title: 'Écume', meta: 'Nils Ardent · 2025', text: '« De l’ambient lumineuse, parfaite pour travailler. »' }
    ];
    const SORTS = {
      avis: [['recent', 'Récents'], ['best', 'Mieux notés'], ['worst', 'Moins bien notés']],
      cols: [['recent', 'Mises à jour'], ['alpha', 'Titre (A → Z)'], ['size', 'Nombre de projets']],
      reco: [['recent', 'Récentes'], ['alpha', 'Titre (A → Z)']]
    };
    const opts = SORTS[tab];
    const byRec = (a, b) => a.rec - b.rec;
    const cmp = {
      recent: byRec,
      best: (a, b) => b.note - a.note || byRec(a, b),
      worst: (a, b) => a.note - b.note || byRec(a, b),
      alpha: (a, b) => (a.title || a.name).localeCompare(b.title || b.name, 'fr'),
      size: (a, b) => b.n - a.n
    };
    const TABS = [['avis', 'Avis', '126'], ['cols', 'Collections', '8'], ['reco', 'Recommandations', '18']];

    const MEMBERS = {
      sillon: ['Sillon', 'Critique · 342 avis', 'avatar-sillon.jpg'],
      jade: ['Jade.wav', 'Mélomane · 64 avis', 'avatar-jade.jpg'],
      melodie: ['Mélo.die', 'Mélomane · 87 avis', 'avatar-melodie.jpg'],
      arthur: ['Arthur K.', 'Critique · 211 avis', 'avatar-arthur.jpg'],
      kenza: ['Kenza B.', 'Mélomane · 38 avis', 'avatar-kenza.jpg'],
      lou: ['Lou Vinyle', 'Mélomane · 56 avis', 'avatar-lou-vinyle.jpg'],
      dodiese: ['Do Dièse', 'Mélomane · 92 avis', 'avatar-do-diese.jpg'],
      remi: ['Rémi Platine', 'Critique · 156 avis', 'avatar-remi.jpg'],
      basse: ['Basse Continue', 'Critique · profil privé', 'avatar-basse-continue.jpg', true]
    };
    const LISTS = {
      followers: ['jade', 'melodie', 'kenza', 'lou', 'dodiese', 'remi'],
      following: ['sillon', 'jade', 'melodie', 'arthur', 'remi', 'basse']
    };
    const INIT = { sillon: true, jade: true, melodie: true, arthur: true, remi: true, basse: true };
    const follows = st.follows || INIT;
    const list = st.list || null;
    const lq = st.lq || '';
    const query = plain(lq.trim());
    const delta = Object.keys(MEMBERS).reduce((acc, id) => acc + (follows[id] === true ? 1 : 0) - (INIT[id] === true ? 1 : 0), 0);
    const followingTotal = 168 + delta;
    const rows = (list ? LISTS[list] : []).map((id) => {
      const mbr = MEMBERS[id];
      const priv = !!mbr[3];
      const s = follows[id] || false;
      const on = s === true;
      const req = s === 'req';
      return {
        name: mbr[0],
        role: mbr[1],
        src: B + mbr[2],
        isPub: !priv,
        isPriv: priv,
        profileLabel: 'Voir le profil de ' + mbr[0],
        on: on || req,
        btn: on ? 'Abonné' : req ? 'Demandé' : priv ? 'Demander' : 'Suivre',
        bg: on || req ? '#E2DDD3' : '#D6D0C4',
        fw: on || req ? '600' : '700',
        aria: (on ? 'Ne plus suivre ' : req ? 'Annuler la demande à ' : priv ? 'Demander à suivre ' : 'Suivre ') + mbr[0],
        toggle: () => {
          const next = Object.assign({}, follows);
          next[id] = on || req ? false : (priv ? 'req' : true);
          this.setState({ follows: next });
          say(on ? 'Vous ne suivez plus ' + mbr[0] : req ? 'Demande annulée' : priv ? 'Demande envoyée à ' + mbr[0] : 'Vous suivez ' + mbr[0]);
        }
      };
    });
    const shown = rows.filter((r) => !query || plain(r.name).indexOf(query) >= 0);
    const totals = { followers: 214, following: followingTotal };
    const rest = list ? totals[list] - rows.length : 0;

    return {
      followingCount: String(followingTotal),
      share: () => say('Lien de votre profil copié'),
      openFollowers: () => this.setState({ list: 'followers', lq: '', menu: null }),
      openFollowing: () => this.setState({ list: 'following', lq: '', menu: null }),
      closeList: () => this.setState({ list: null }),
      closeMenus: () => this.setState({ menu: null }),
      tabs: TABS.map((t) => ({
        label: t[1],
        count: t[2],
        on: tab === t[0],
        bg: tab === t[0] ? '#D6D0C4' : '#E2DDD3',
        fw: tab === t[0] ? '700' : '500',
        pick: () => this.setState({ tab: t[0], menu: null })
      })),
      tAvis: tab === 'avis',
      tCols: tab === 'cols',
      tReco: tab === 'reco',
      mS: {
        open: menu === 'sort',
        toggle: () => this.setState({ menu: menu === 'sort' ? null : 'sort' }),
        opts: opts.map((o) => ({
          label: o[1],
          on: o[0] === sort,
          fw: o[0] === sort ? '700' : '500',
          tick: o[0] === sort ? '1' : '0',
          pick: () => {
            const next = Object.assign({}, sorts);
            next[tab] = o[0];
            this.setState({ sorts: next, menu: null });
          }
        }))
      },
      sortLabel: (opts.find((o) => o[0] === sort) || opts[0])[1],
      avis: AVIS.slice().sort(cmp[sort] || byRec).slice(0, 4).map((a) => {
        const vis = visOv[a.rec] || a.vis;
        const id = 'vis' + a.rec;
        const setVis = (val) => () => {
          const next = Object.assign({}, visOv);
          next[a.rec] = val;
          this.setState({ visOv: next, menu: null });
          if (val !== vis) say('Avis sur « ' + a.title + ' » : ' + VIS_TXT[val]);
        };
        const item = {
          src: B + a.cov, title: a.title, meta: a.meta, note: String(a.note), date: a.date, vis: vis, text: a.text,
          aria: 'Modifier mon avis sur ' + a.title,
          visOpen: menu === id,
          visToggle: () => this.setState({ menu: menu === id ? null : id }),
          visAria: 'Visibilité de l’avis sur ' + a.title + ' : ' + vis,
          setPub: setVis('Public'),
          setAbo: setVis('Abonnés'),
          setPri: setVis('Privé')
        };
        [['pub', 'Public'], ['abo', 'Abonnés'], ['pri', 'Privé']].forEach((o) => {
          item[o[0] + 'On'] = vis === o[1];
          item[o[0] + 'Fw'] = vis === o[1] ? '700' : '500';
          item[o[0] + 'Tick'] = vis === o[1] ? '1' : '0';
        });
        return item;
      }),
      cols: COLS.slice().sort(cmp[sort] || byRec).map((c) => ({
        name: c.name, meta: c.n + ' projets', aria: 'Ouvrir la collection ' + c.name + ' dans ma bibliothèque',
        m1: B + c.m[0], m2: B + c.m[1], m3: B + c.m[2], m4: B + c.m[3]
      })),
      recos: RECOS.slice().sort(cmp[sort] || byRec).map((r) => ({
        src: B + r.cov, title: r.title, meta: r.meta, text: r.text, aria: 'Voir le projet ' + r.title
      })),
      mList: !!list,
      lTitle: list === 'following' ? 'Mes abonnements' : 'Mes abonnés',
      lTabs: [['followers', 'Abonnés'], ['following', 'Abonnements']].map((t) => ({
        label: t[1],
        count: String(totals[t[0]]),
        on: list === t[0],
        bg: list === t[0] ? '#D6D0C4' : 'transparent',
        fw: list === t[0] ? '700' : '500',
        pick: () => this.setState({ list: t[0], lq: '' })
      })),
      lq: lq,
      onLq: (e) => this.setState({ lq: e.target.value }),
      lRows: shown,
      lEmpty: shown.length === 0,
      lEmptyText: 'Aucun membre ne correspond à « ' + lq.trim() + ' »',
      lMore: query ? 'Recherche parmi les membres affichés' : 'Et ' + rest + ' autres membres',
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
              <a className="st-h" href="#/mon-profil" aria-label="Mes avis" aria-current="page" style={{ width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  <a className="st-tab" href="#/tendances" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Tendances
                  </a>
                  <a className="st-tab" href="#/bibliotheque" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Ma bibliothèque
                  </a>
                </nav>
              </header>
              <section aria-labelledby="pseudo" style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "28px" }}>
                <a className="st-avatar st-cov" href="#/parametres/profil" aria-label="Modifier ma photo de profil" style={{ flex: "0 0 180px", display: "block", width: "180px", height: "180px", borderRadius: "999px", overflow: "hidden" }}>
                  <img src="images/avatar-ninon.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                </a>
                <div style={{ flex: "1 1 360px", minWidth: "0", paddingTop: "6px", display: "flex", flexDirection: "column" }}>
                  <h1 id="pseudo" style={{ margin: "0", fontSize: "40px", lineHeight: "44px", fontWeight: "800", letterSpacing: "-0.03em" }}>ninon.fm</h1>
                  <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Mélomane · Bordeaux · Membre depuis 2024</p>
                  <p style={{ margin: "16px 0 0", maxWidth: "660px", fontSize: "15px", lineHeight: "24px", fontWeight: "500", textWrap: "pretty" }}>
                    Pop, soul et tout ce qui se danse. Je note vite, j’écris lentement, et je garde mes coups de cœur pour les disques qui tiennent la distance.
                  </p>
                  <div style={{ marginTop: "22px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "12px 28px" }}>
                    <button className="st-link" type="button" aria-haspopup="dialog" onClick={$v.openFollowers} style={{ display: "flex", alignItems: "baseline", gap: "6px", padding: "12px 0", color: "#1E1D1A" }}>
                      <span style={{ fontSize: "16px", lineHeight: "20px", fontWeight: "700" }}>214</span>
                      <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>abonnés</span>
                    </button>
                    <button className="st-link" type="button" aria-haspopup="dialog" onClick={$v.openFollowing} style={{ display: "flex", alignItems: "baseline", gap: "6px", padding: "12px 0", color: "#1E1D1A" }}>
                      <span style={{ fontSize: "16px", lineHeight: "20px", fontWeight: "700" }}>{$v.followingCount}</span>
                      <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>abonnements</span>
                    </button>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      <a className="st-h" href="#/parametres/profil" style={{ height: "48px", padding: "0 22px 0 18px", borderRadius: "999px", background: "#D6D0C4", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "700", color: "#1E1D1A" }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                          <path d="m15 5 4 4" />
                        </svg>
                        {" Modifier le profil"}
                      </a>
                      <button className="st-h" type="button" onClick={$v.share} style={{ height: "48px", padding: "0 22px 0 18px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600" }}>
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
                </div>
              </section>
              <div style={{ marginTop: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                <div role="group" aria-label="Contenus du profil" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {($v.tabs || []).map((tb, i1) => (
                    <button key={i1} className="st-h" type="button" aria-pressed={tb.on} onClick={tb.pick} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: tb.bg, display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: tb.fw, transition: "background-color .2s ease" }}>
                      <span>{tb.label}</span>
                      <span style={{ fontWeight: "500", color: "#8C877D" }}>{tb.count}</span>
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
              {$v.tAvis ? (
                <section aria-label="Mes avis" style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: "20px" }}>
                  {($v.avis || []).map((a, i1) => (
                    <article key={i1} style={{ minHeight: "220px", borderRadius: "16px", background: "#ECE8E0", padding: "26px 28px 24px 32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                        <a className="st-ul" href="#/projet" style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "0", color: "#1E1D1A" }}>
                          <img src={a.src} alt="" style={{ flex: "0 0 48px", width: "48px", height: "48px", borderRadius: "12px", objectFit: "cover" }} />
                          <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                            <h2 className="st-ul-t" style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>{a.title}</h2>
                            <span style={{ fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{a.meta}</span>
                          </div>
                        </a>
                        <p style={{ margin: "0 10px 0 0", display: "flex", alignItems: "baseline", gap: "4px", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "20px", lineHeight: "24px", fontWeight: "700" }}>{a.note}</span>
                          <span style={{ fontSize: "14px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>/5</span>
                        </p>
                      </div>
                      <p style={{ margin: "0", paddingLeft: "4px", fontSize: "14px", lineHeight: "22px", fontWeight: "500", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {a.text}
                      </p>
                      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                        <div style={{ paddingLeft: "4px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px 10px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>
                          <span>{a.date}</span>
                          <div style={{ position: "relative" }}>
                            <button className="st-h" type="button" aria-haspopup="true" aria-expanded={a.visOpen} aria-label={a.visAria} onClick={a.visToggle} style={{ height: "30px", padding: "0 8px 0 11px", borderRadius: "999px", background: "#E2DDD3", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "600", color: "#1E1D1A" }}>
                              <span>{a.vis}</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>
                            {" "}
                            {a.visOpen ? (
                              <>
                                <button className="st-scrim" type="button" tabIndex={-1} aria-label="Fermer le menu" onClick={$v.closeMenus} />
                                {" "}
                                <div className="st-menu" style={{ bottom: "38px", left: "0", color: "#1E1D1A" }}>
                                  <button className="st-opt" type="button" aria-pressed={a.pubOn} onClick={a.setPub} style={{ fontWeight: a.pubFw }}>
                                    <span>Public</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: a.pubTick }}>
                                      <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                  </button>
                                  {" "}
                                  <button className="st-opt" type="button" aria-pressed={a.aboOn} onClick={a.setAbo} style={{ fontWeight: a.aboFw }}>
                                    <span>Abonnés</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: a.aboTick }}>
                                      <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                  </button>
                                  {" "}
                                  <button className="st-opt" type="button" aria-pressed={a.priOn} onClick={a.setPri} style={{ fontWeight: a.priFw }}>
                                    <span>Privé</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: a.priTick }}>
                                      <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                  </button>
                                </div>
                              </>
                            ) : null}
                          </div>
                        </div>
                        <a className="st-h" href="#/projet" aria-label={a.aria} style={{ flex: "0 0 auto", height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", display: "inline-flex", alignItems: "center", fontSize: "13px", fontWeight: "600", color: "#1E1D1A" }}>
                          Modifier
                        </a>
                      </div>
                    </article>
                  ))}
                </section>
              ) : null}
              {$v.tCols ? (
                <section aria-label="Mes collections" style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(170px, 100%), 1fr))", gap: "20px" }}>
                  {($v.cols || []).map((c, i1) => (
                    <a key={i1} className="st-cov st-ul" href="#/bibliotheque" aria-label={c.aria} style={{ display: "flex", flexDirection: "column", gap: "10px", color: "#1E1D1A" }}>
                      <span aria-hidden="true" style={{ aspectRatio: "1 / 1", borderRadius: "16px", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gridTemplateRows: "repeat(2, minmax(0, 1fr))", gap: "2px", background: "#E2DDD3" }}>
                        <img src={c.m1} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                        <img src={c.m2} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                        <img src={c.m3} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                        <img src={c.m4} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                      </span>
                      <span style={{ paddingLeft: "4px", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span className="st-ul-t" style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "700" }}>{c.name}</span>
                        <span style={{ fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{c.meta}</span>
                      </span>
                    </a>
                  ))}
                </section>
              ) : null}
              {$v.tReco ? (
                <section aria-label="Mes recommandations" style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: "20px" }}>
                  {($v.recos || []).map((r, i1) => (
                    <article key={i1} style={{ minHeight: "190px", borderRadius: "16px", background: "#ECE8E0", padding: "26px 28px 24px 32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                      <a className="st-ul" href="#/projet" style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "14px", minWidth: "0", color: "#1E1D1A" }}>
                        <img src={r.src} alt="" style={{ flex: "0 0 48px", width: "48px", height: "48px", borderRadius: "12px", objectFit: "cover" }} />
                        <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                          <span className="st-ul-t" style={{ fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>{r.title}</span>
                          <span style={{ fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{r.meta}</span>
                        </span>
                      </a>
                      <p style={{ margin: "0", paddingLeft: "4px", fontSize: "14px", lineHeight: "22px", fontWeight: "500" }}>{r.text}</p>
                      <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
                        <a className="st-h" href="#/projet" aria-label={r.aria} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", display: "inline-flex", alignItems: "center", fontSize: "13px", fontWeight: "600", color: "#1E1D1A" }}>
                          Voir le projet
                        </a>
                      </div>
                    </article>
                  ))}
                </section>
              ) : null}
            </main>
            <aside className="st-right" aria-label="Aperçu de mon profil" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Abonnés" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Abonnés</span>
                    <span style={{ fontSize: "44px", lineHeight: "50px", fontWeight: "800", letterSpacing: "-0.03em" }}>214</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Visibilité de mon profil" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "30px 16px 16px", display: "flex", flexDirection: "column" }}>
                <h2 style={{ margin: "0 0 0 4px", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Qui voit quoi
                </h2>
                <p style={{ margin: "6px 0 0 30px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Vos réglages actuels</p>
                <ul style={{ margin: "18px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>
                    <a className="st-h" href="#/parametres/confidentialite" style={{ minHeight: "52px", padding: "8px 10px 8px 14px", borderRadius: "14px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", color: "#1E1D1A" }}>
                      <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>Profil</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>
                        Public
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="st-h" href="#/parametres/confidentialite" style={{ minHeight: "52px", padding: "8px 10px 8px 14px", borderRadius: "14px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", color: "#1E1D1A" }}>
                      <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>Avis et notes</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>
                        Public
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="st-h" href="#/parametres/confidentialite" style={{ minHeight: "52px", padding: "8px 10px 8px 14px", borderRadius: "14px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", color: "#1E1D1A" }}>
                      <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>Bibliothèque</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>
                        Abonnés
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="st-h" href="#/parametres/confidentialite" style={{ minHeight: "52px", padding: "8px 10px 8px 14px", borderRadius: "14px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", color: "#1E1D1A" }}>
                      <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>Recommandations</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>
                        Privé
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
                <a className="st-h" href="#/parametres/confidentialite" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                  Paramètres de confidentialité
                </a>
              </section>
            </aside>
          </div>
          {$v.mList ? (
            <div style={{ position: "fixed", inset: "0", zIndex: "50", overflowY: "auto", padding: "24px 16px", display: "flex", background: "rgba(30, 29, 26, 0.28)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}>
              <section role="dialog" aria-modal="true" aria-labelledby="titre-liste" style={{ margin: "auto", width: "100%", maxWidth: "480px", borderRadius: "24px", background: "#F5F2EC", padding: "28px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                  <h2 id="titre-liste" style={{ margin: "0", fontSize: "20px", lineHeight: "26px", fontWeight: "700", letterSpacing: "-0.01em" }}>{$v.lTitle}</h2>
                  <button className="st-h" type="button" aria-label="Fermer" onClick={$v.closeList} style={{ flex: "0 0 44px", width: "44px", height: "44px", margin: "-9px -9px 0 0", borderRadius: "999px", background: "#ECE8E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <div role="group" aria-label="Liste affichée" style={{ marginTop: "18px", height: "44px", borderRadius: "999px", background: "#ECE8E0", display: "flex" }}>
                  {($v.lTabs || []).map((s, i1) => (
                    <button key={i1} className="st-h" type="button" aria-pressed={s.on} onClick={s.pick} style={{ flex: "1 1 0", height: "44px", borderRadius: "999px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "13.5px", fontWeight: s.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                      <span>{s.label}</span>
                      <span style={{ fontWeight: "500", color: "#8C877D" }}>{s.count}</span>
                    </button>
                  ))}
                </div>
                <div style={{ position: "relative", marginTop: "12px" }}>
                  <label htmlFor="recherche-membre" className="st-sr">Rechercher un membre</label>
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8C877D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", left: "18px", top: "15px", pointerEvents: "none" }}>
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  {" "}
                  <input id="recherche-membre" type="text" autoComplete="off" placeholder="Rechercher un membre" value={$v.lq} onChange={$v.onLq} style={{ width: "100%", height: "48px", padding: "0 20px 0 46px", borderRadius: "999px", background: "#ECE8E0", fontSize: "14px", fontWeight: "500" }} />
                </div>
                <ul style={{ margin: "12px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "4px", maxHeight: "360px", overflowY: "auto" }}>
                  {($v.lRows || []).map((m, i1) => (
                    <li key={i1} style={{ minHeight: "60px", padding: "8px 4px 8px 6px", display: "flex", alignItems: "center", gap: "12px" }}>
                      {m.isPub ? (
                        <a className="st-cov" href="#/profil" aria-label={m.profileLabel} style={{ flex: "0 0 44px", display: "block", width: "44px", height: "44px", borderRadius: "999px", overflow: "hidden" }}>
                          <img src={m.src} alt="" style={{ display: "block", width: "44px", height: "44px", objectFit: "cover" }} />
                        </a>
                      ) : null}
                      {m.isPriv ? (
                        <a className="st-cov" href="#/profil-prive" aria-label={m.profileLabel} style={{ flex: "0 0 44px", display: "block", width: "44px", height: "44px", borderRadius: "999px", overflow: "hidden" }}>
                          <img src={m.src} alt="" style={{ display: "block", width: "44px", height: "44px", objectFit: "cover" }} />
                        </a>
                      ) : null}
                      <span style={{ flex: "1 1 auto", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {m.name}
                        </span>
                        <span style={{ fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {m.role}
                        </span>
                      </span>
                      <button className="st-h" type="button" aria-pressed={m.on} aria-label={m.aria} onClick={m.toggle} style={{ flex: "0 0 auto", minWidth: "104px", height: "40px", padding: "0 16px", borderRadius: "999px", background: m.bg, fontSize: "13px", fontWeight: m.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                        {m.btn}
                      </button>
                    </li>
                  ))}
                </ul>
                {$v.lEmpty ? (
                  <p style={{ margin: "12px 0 0", padding: "18px", borderRadius: "16px", background: "#ECE8E0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D", textAlign: "center" }}>
                    {$v.lEmptyText}
                  </p>
                ) : null}
                <p style={{ margin: "14px 0 0", textAlign: "center", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{$v.lMore}</p>
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
