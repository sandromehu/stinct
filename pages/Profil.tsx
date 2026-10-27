// @ts-nocheck
// Page « Profil » — converted from the STINCT design (Profil.dc.html).
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

export default class Profil extends Component<any, any> {
  state: any = {};

  componentWillUnmount() {
    clearTimeout(this._tt);
  }
  renderVals() {
    const st = this.state || {};
    const B = 'images/';
    const NB = ' ';
    const say = (msg) => {
      clearTimeout(this._tt);
      this.setState({ toast: msg });
      this._tt = setTimeout(() => this.setState({ toast: null }), 2600);
    };
    const plain = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const menu = st.menu || null;
    const tab = st.tab || 'avis';
    const suivi = !!st.suivi;
    const sorts = st.sorts || {};
    const sort = sorts[tab] || 'recent';

    const AVIS = [
      { rec: 1, cov: 'cover-maree-basse.jpg', title: 'Marée basse', meta: 'Lune Arnaud · 2026', note: 4, date: 'Publié le 6 octobre', text: 'Lune Arnaud ralentit le tempo et ça lui réussit. Les synthés respirent, la voix n’a jamais été aussi proche.' },
      { rec: 2, cov: 'cover-peripherique.jpg', title: 'Périphérique', meta: 'Saïd et Nour · 2026', note: 5, date: 'Publié le 29 septembre', text: 'Le disque rap de l’année, sans discussion. Une écriture au cordeau et des prods nocturnes qui roulent comme le périph’ à trois heures du matin.' },
      { rec: 3, cov: 'cover-verre-pile.jpg', title: 'Verre pilé', meta: 'Mira Valence · 2026', note: 3, date: 'Publié le 21 septembre', text: 'Des textures superbes, mais un EP qui s’écoute plus qu’il ne se vit. Il manque le morceau qui ferait vraiment danser.' },
      { rec: 4, cov: 'cover-soleil-dhiver.jpg', title: 'Soleil d’hiver', meta: 'Odile Marchand · 2026', note: 4, date: 'Publié le 12 septembre', text: 'Un jazz de chambre lumineux et pudique. Le piano laisse toute la place au silence, et c’est précisément là que tout se joue.' },
      { rec: 5, cov: 'cover-beton-tendre.jpg', title: 'Béton tendre', meta: 'Kassim · 2026', note: 3, date: 'Publié le 3 septembre', text: 'Kassim a la plume, mais les productions tournent en rond. Trois titres sortent du lot, dont le morceau-titre, sobre et tranchant.' },
      { rec: 6, cov: 'cover-frequences.jpg', title: 'Fréquences', meta: 'Atelier Nova · 2026', note: 4, date: 'Publié le 27 août', text: 'Une électro de club qui pense à la maison : les montées sont patientes, les basses énormes, et rien n’est gratuit.' },
      { rec: 7, cov: 'cover-quartier-libre.jpg', title: 'Quartier libre', meta: 'Bakari · 2025', note: 5, date: 'Publié le 18 août', text: 'Une mixtape généreuse, pleine d’humour et de colère, qui sonne comme une ville entière. Bakari n’a jamais été aussi libre.' },
      { rec: 8, cov: 'cover-jardin-dombres.jpg', title: 'Jardin d’ombres', meta: 'Sève · 2025', note: 2, date: 'Publié le 9 août', text: 'Joli mais trop sage : ces nappes ambient restent à la surface et ne m’ont jamais vraiment emporté.' }
    ];
    const COLS = [
      { rec: 1, name: 'Coups de cœur', n: 31, m: ['cover-maree-basse.jpg', 'cover-peripherique.jpg', 'cover-soleil-dhiver.jpg', 'cover-asphalte-dore.jpg'] },
      { rec: 2, name: '2026', n: 54, m: ['cover-peripherique.jpg', 'cover-verre-pile.jpg', 'cover-maree-basse.jpg', 'cover-beton-tendre.jpg'] },
      { rec: 3, name: 'Vinyles', n: 22, m: ['cover-quartier-libre.jpg', 'cover-heures-creuses.jpg', 'cover-jardin-dombres.jpg', 'cover-velours.jpg'] },
      { rec: 4, name: 'À réécouter', n: 9, m: ['cover-frequences.jpg', 'cover-ecume.jpg', 'cover-nuits-fauves.jpg', 'cover-ciel-rose.jpg'] },
      { rec: 5, name: 'Road trip', n: 12, m: ['cover-peripherique.jpg', 'cover-asphalte-dore.jpg', 'cover-quartier-libre.jpg', 'cover-ciel-rose.jpg'] }
    ];
    const RECOS = [
      { rec: 1, cov: 'cover-frequences.jpg', title: 'Fréquences', meta: 'Atelier Nova · 2026', text: '« Pour les fans de Mira Valence : plus brut, et nettement plus dansant. »' },
      { rec: 2, cov: 'cover-heures-creuses.jpg', title: 'Les heures creuses', meta: 'Théo Valmont · 2025', text: '« Le disque idéal pour les fins de dimanche, quand la lumière baisse. »' },
      { rec: 3, cov: 'cover-asphalte-dore.jpg', title: 'Asphalte doré', meta: 'Yaya Bloom · 2026', text: '« Du R&B soyeux, produit avec une précision folle. À écouter fort. »' },
      { rec: 4, cov: 'cover-quartier-libre.jpg', title: 'Quartier libre', meta: 'Bakari · 2025', text: '« La mixtape qui m’a réconcilié avec le rap de quartier. »' }
    ];
    const SORTS = {
      avis: [['recent', 'Récents'], ['best', 'Mieux notés'], ['worst', 'Moins bien notés']],
      bib: [['recent', 'Mises à jour'], ['alpha', 'Titre (A → Z)'], ['size', 'Nombre de projets']],
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
    const avis = AVIS.slice().sort(cmp[sort] || byRec).slice(0, 4).map((a) => ({
      src: B + a.cov,
      title: a.title,
      meta: a.meta,
      note: String(a.note),
      date: a.date,
      text: a.text,
      aria: 'Lire l’avis de Sillon sur ' + a.title
    }));
    const cols = COLS.slice().sort(cmp[sort] || byRec).map((c) => ({
      name: c.name,
      meta: c.n + ' projets',
      aria: 'Collection ' + c.name + ', ' + c.n + ' projets',
      m1: B + c.m[0],
      m2: B + c.m[1],
      m3: B + c.m[2],
      m4: B + c.m[3]
    }));
    const recos = RECOS.slice().sort(cmp[sort] || byRec).map((r) => ({
      src: B + r.cov,
      title: r.title,
      meta: r.meta,
      text: r.text,
      aria: 'Voir le projet ' + r.title
    }));
    const TABS = [['avis', 'Avis', '342'], ['bib', 'Bibliothèque', '5'], ['reco', 'Recommandations', '18']];
    const tabs = TABS.map((t) => ({
      label: t[1],
      count: t[2],
      on: tab === t[0],
      bg: tab === t[0] ? '#D6D0C4' : '#E2DDD3',
      fw: tab === t[0] ? '700' : '500',
      pick: () => this.setState({ tab: t[0], menu: null })
    }));
    const mS = {
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
    };

    const MEMBERS = {
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
      followers: ['jade', 'melodie', 'arthur', 'kenza', 'lou', 'dodiese', 'remi', 'basse'],
      following: ['remi', 'arthur', 'basse', 'melodie', 'lou', 'jade']
    };
    const list = st.list || null;
    const lq = st.lq || '';
    const follows = st.follows || { jade: true, melodie: true };
    const query = plain(lq.trim());
    let ids = list ? LISTS[list] : [];
    let rows = ids.map((id) => {
      const mbr = MEMBERS[id];
      const priv = !!mbr[3];
      const on = !!follows[id];
      return {
        name: mbr[0],
        role: mbr[1],
        src: B + mbr[2],
        lkPub: !priv,
        lkPriv: priv,
        profileLabel: 'Voir le profil de ' + mbr[0],
        me: false,
        other: true,
        on: on,
        btn: priv ? (on ? 'Demandé' : 'Demander') : (on ? 'Abonné' : 'Suivre'),
        bg: on ? '#E2DDD3' : '#D6D0C4',
        fw: on ? '600' : '700',
        aria: (priv ? (on ? 'Annuler la demande à ' : 'Demander à suivre ') : (on ? 'Ne plus suivre ' : 'Suivre ')) + mbr[0],
        toggle: () => {
          const next = Object.assign({}, follows);
          next[id] = !on;
          this.setState({ follows: next });
          say(priv ? (on ? 'Demande annulée' : 'Demande envoyée à ' + mbr[0]) : (on ? 'Vous ne suivez plus ' + mbr[0] : 'Vous suivez ' + mbr[0]));
        }
      };
    });
    if (list === 'followers' && suivi) {
      rows = [{ name: 'ninon.fm', role: 'Vous suivez Sillon', src: B + 'avatar-ninon.jpg', lkPub: false, lkPriv: false, profileLabel: 'Voir mon profil', me: true, other: false, on: false, btn: '', bg: '', fw: '', aria: '', toggle: () => {} }].concat(rows);
    }
    const shown = rows.filter((r) => !query || plain(r.name).indexOf(query) >= 0);
    const totals = { followers: suivi ? 1249 : 1248, following: 312 };
    const fmt = (n) => n.toLocaleString('fr-FR').replace(/[  ]/g, NB);
    const lTabs = [['followers', 'Abonnés'], ['following', 'Abonnements']].map((t) => ({
      label: t[1],
      count: fmt(totals[t[0]]),
      on: list === t[0],
      bg: list === t[0] ? '#D6D0C4' : 'transparent',
      fw: list === t[0] ? '700' : '500',
      pick: () => this.setState({ list: t[0], lq: '' })
    }));
    const rest = list ? totals[list] - rows.length : 0;

    return {
      abonnes: fmt(totals.followers),
      suivi: suivi,
      pasSuivi: !suivi,
      suivreBg: suivi ? '#E2DDD3' : '#D6D0C4',
      toggleSuivi: () => {
        this.setState({ suivi: !suivi });
        say(suivi ? 'Vous ne suivez plus Sillon' : 'Vous suivez Sillon');
      },
      openFollowers: () => this.setState({ list: 'followers', lq: '', menu: null }),
      openFollowing: () => this.setState({ list: 'following', lq: '', menu: null }),
      closeList: () => this.setState({ list: null }),
      closeMenus: () => this.setState({ menu: null }),
      tabs: tabs,
      tAvis: tab === 'avis',
      tBib: tab === 'bib',
      tReco: tab === 'reco',
      mS: mS,
      sortLabel: (opts.find((o) => o[0] === sort) || opts[0])[1],
      avis: avis,
      cols: cols,
      recos: recos,
      mList: !!list,
      lTitle: list === 'following' ? 'Abonnements de Sillon' : 'Abonnés de Sillon',
      lTabs: lTabs,
      lq: lq,
      onLq: (e) => this.setState({ lq: e.target.value }),
      lRows: shown,
      lEmpty: shown.length === 0,
      lEmptyText: 'Aucun membre ne correspond à « ' + lq.trim() + ' »',
      lMore: query ? 'Recherche parmi les membres affichés' : 'Et ' + fmt(rest) + ' autres membres',
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
              </header>
              <section aria-labelledby="pseudo" style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "28px" }}>
                <img className="st-avatar" src="images/avatar-sillon.jpg" alt="Photo de profil de Sillon" style={{ flex: "0 0 180px", width: "180px", height: "180px", borderRadius: "999px", objectFit: "cover" }} />
                <div style={{ flex: "1 1 360px", minWidth: "0", paddingTop: "6px", display: "flex", flexDirection: "column" }}>
                  <h1 id="pseudo" style={{ margin: "0", fontSize: "40px", lineHeight: "44px", fontWeight: "800", letterSpacing: "-0.03em" }}>Sillon</h1>
                  <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Critique · Lyon · Membre depuis 2021</p>
                  <p style={{ margin: "16px 0 0", maxWidth: "660px", fontSize: "15px", lineHeight: "24px", fontWeight: "500", textWrap: "pretty" }}>
                    Chroniques rap, jazz et électro depuis Lyon. J’écoute chaque disque deux fois en entier avant d’écrire une ligne. Notes sévères, coups de cœur sincères.
                  </p>
                  <div style={{ marginTop: "22px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "12px 28px" }}>
                    <button className="st-link" type="button" aria-haspopup="dialog" onClick={$v.openFollowers} style={{ display: "flex", alignItems: "baseline", gap: "6px", padding: "12px 0", color: "#1E1D1A" }}>
                      <span style={{ fontSize: "16px", lineHeight: "20px", fontWeight: "700" }}>{$v.abonnes}</span>
                      <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>abonnés</span>
                    </button>
                    <button className="st-link" type="button" aria-haspopup="dialog" onClick={$v.openFollowing} style={{ display: "flex", alignItems: "baseline", gap: "6px", padding: "12px 0", color: "#1E1D1A" }}>
                      <span style={{ fontSize: "16px", lineHeight: "20px", fontWeight: "700" }}>312</span>
                      <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>abonnements</span>
                    </button>
                    <button className="st-h" type="button" aria-pressed={$v.suivi} onClick={$v.toggleSuivi} style={{ height: "48px", padding: "0 24px 0 20px", borderRadius: "999px", background: $v.suivreBg, display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "700", transition: "background-color .2s ease" }}>
                      {$v.pasSuivi ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M19 8v6" />
                            <path d="M22 11h-6" />
                          </svg>
                          <span>Suivre</span>
                        </>
                      ) : null}
                      {$v.suivi ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span>Abonné</span>
                        </>
                      ) : null}
                    </button>
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
                <section aria-label="Avis de Sillon" style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: "20px" }}>
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
                        <p style={{ margin: "0", paddingLeft: "4px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{a.date}</p>
                        <a className="st-h" href="#/avis" aria-label={a.aria} style={{ flex: "0 0 auto", height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", display: "inline-flex", alignItems: "center", fontSize: "13px", fontWeight: "600", color: "#1E1D1A" }}>
                          Lire l’avis
                        </a>
                      </div>
                    </article>
                  ))}
                </section>
              ) : null}
              {$v.tBib ? (
                <section aria-label="Bibliothèque de Sillon" style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(170px, 100%), 1fr))", gap: "20px" }}>
                  {($v.cols || []).map((c, i1) => (
                    <a key={i1} className="st-cov st-ul" href="#/profil/collection" aria-label={c.aria} style={{ display: "flex", flexDirection: "column", gap: "10px", color: "#1E1D1A" }}>
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
                <section aria-label="Recommandations de Sillon" style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: "20px" }}>
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
            <aside className="st-right" aria-label="Statistiques de Sillon" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Projets notés" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Projets notés</span>
                    <span style={{ fontSize: "44px", lineHeight: "50px", fontWeight: "800", letterSpacing: "-0.03em" }}>618</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Répartition de ses notes" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "30px 20px 16px", display: "flex", flexDirection: "column" }}>
                <h2 style={{ margin: "0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                  Répartition de ses notes
                </h2>
                <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Moyenne donnée : 3,4</p>
                <ul style={{ margin: "20px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ flex: "0 0 28px", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>
                      5
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="#1E1D1A" aria-hidden="true">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                      <span className="st-sr">étoiles</span>
                    </span>
                    <span aria-hidden="true" style={{ flex: "1 1 auto", height: "6px", borderRadius: "999px", background: "#E2DDD3", overflow: "hidden" }}>
                      <span style={{ display: "block", width: "32%", height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                    </span>
                    <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>12 %</span>
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
                      <span style={{ display: "block", width: "100%", height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                    </span>
                    <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>38 %</span>
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
                      <span style={{ display: "block", width: "82%", height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                    </span>
                    <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>31 %</span>
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
                      <span style={{ display: "block", width: "37%", height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                    </span>
                    <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>14 %</span>
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
                      <span style={{ display: "block", width: "13%", height: "100%", borderRadius: "999px", background: "#1E1D1A" }} />
                    </span>
                    <span style={{ flex: "0 0 40px", textAlign: "right", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>5 %</span>
                  </li>
                </ul>
                <div aria-hidden="true" style={{ height: "1px", margin: "28px 4px 0", background: "#D6D0C4" }} />
                <h2 style={{ margin: "30px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
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
                <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Rap, Jazz, Électro</p>
                <a className="st-h" href="#/profil/notes" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                  Voir toutes ses notes
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
                      {m.lkPub ? (
                        <a className="st-cov" href="#/profil" aria-label={m.profileLabel} style={{ flex: "0 0 44px", display: "block", width: "44px", height: "44px", borderRadius: "999px", overflow: "hidden" }}>
                          <img src={m.src} alt="" style={{ display: "block", width: "44px", height: "44px", objectFit: "cover" }} />
                        </a>
                      ) : null}
                      {m.lkPriv ? (
                        <a className="st-cov" href="#/profil-prive" aria-label={m.profileLabel} style={{ flex: "0 0 44px", display: "block", width: "44px", height: "44px", borderRadius: "999px", overflow: "hidden" }}>
                          <img src={m.src} alt="" style={{ display: "block", width: "44px", height: "44px", objectFit: "cover" }} />
                        </a>
                      ) : null}
                      {m.me ? (
                        <a className="st-cov" href="#/mon-profil" aria-label="Voir mon profil" style={{ flex: "0 0 44px", display: "block", width: "44px", height: "44px", borderRadius: "999px", overflow: "hidden" }}>
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
                      {m.other ? (
                        <button className="st-h" type="button" aria-pressed={m.on} aria-label={m.aria} onClick={m.toggle} style={{ flex: "0 0 auto", minWidth: "104px", height: "40px", padding: "0 16px", borderRadius: "999px", background: m.bg, fontSize: "13px", fontWeight: m.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                          {m.btn}
                        </button>
                      ) : null}
                      {m.me ? (
                        <span style={{ flex: "0 0 auto", padding: "0 12px", fontSize: "13px", fontWeight: "600", color: "#8C877D" }}>Vous</span>
                      ) : null}
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
