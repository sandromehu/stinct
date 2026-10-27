// @ts-nocheck
// Page « Avis » — converted from the STINCT design (Avis.dc.html).
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
.st-sr{position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0 0 0 0) !important;white-space:nowrap !important}
.st-h{transition:box-shadow .15s ease}
.st-h:hover{box-shadow:inset 0 0 0 100vmax rgba(30,29,26,.05)}
.st-tab:hover,.st-link:hover{color:#1E1D1A !important}
.st-cov img{transition:filter .2s ease}
.st-cov:hover img{filter:brightness(.95)}
@media (max-width:975px){
.st-right{flex:1 1 100% !important;flex-direction:row !important;flex-wrap:wrap !important}
.st-right>*{flex:1 1 300px !important}
}
@media (max-width:720px){
.st-app{padding:8px !important;gap:12px !important}
.st-side{flex:1 1 100% !important;flex-direction:row !important;justify-content:space-between !important;padding:8px 12px !important}
.st-side-nav{flex-direction:row !important;margin:0 !important;gap:4px !important}
.st-side-out{margin:0 !important}
.st-review{padding:24px !important}
}
`;

export default class Avis extends Component<any, any> {
  state: any = {};

  componentWillUnmount() {
    clearTimeout(this._tt);
  }
  renderVals() {
    const st = this.state || {};
    const useful = !!st.useful;
    const follow = !!st.follow;
    const exp = st.exp || {};
    const say = (msg) => {
      clearTimeout(this._tt);
      this.setState({ toast: msg });
      this._tt = setTimeout(() => this.setState({ toast: null }), 2600);
    };
    const B = 'images/';
    const data = [
      ['jade', 'Jade.wav', 'Mélomane · 64 avis', 'avatar-jade.jpg', '5', 'Publié le 4 octobre', 'Un disque à écouter au casque, tard, fenêtre ouverte. Chaque morceau ressemble à une vague qui se retire : on en ressort lessivé, mais apaisé. J’ai rarement entendu une production aussi patiente, qui laisse autant de place au silence. « Grande marée » m’a littéralement scotchée sur le quai de la gare. Mon album de l’automne, sans hésiter.'],
      ['kenza', 'Kenza B.', 'Mélomane · 38 avis', 'avatar-kenza.jpg', '4', 'Publié le 28 septembre', 'Plus pop que le précédent, sans rien perdre de ce flou qui fait son charme. Les refrains sont plus évidents, les textes plus directs, et la voix ose enfin passer devant les synthés. « Laisse filer » a tout d’un futur classique. Je retire une étoile pour un milieu de disque un peu trop sage, mais la fin vaut largement le détour.']
    ];
    const others = data.map((d) => {
      const open = !!exp[d[0]];
      return {
        name: d[1],
        role: d[2],
        avatar: B + d[3],
        profileLabel: 'Voir le profil de ' + d[1],
        note: d[4],
        date: d[5],
        text: d[6],
        open: open,
        display: open ? 'block' : '-webkit-box',
        label: open ? 'Réduire' : 'Lire la suite',
        toggle: () => {
          const next = Object.assign({}, exp);
          next[d[0]] = !open;
          this.setState({ exp: next });
        }
      };
    });
    return {
      useful: useful,
      usefulBg: useful ? '#D6D0C4' : '#E2DDD3',
      usefulCount: useful ? '25' : '24',
      toggleUseful: () => this.setState({ useful: !useful }),
      share: () => say('Lien de l’avis copié'),
      others: others,
      follow: follow,
      followBg: follow ? '#E2DDD3' : '#D6D0C4',
      followLabel: follow ? 'Abonné' : 'Suivre Sillon',
      toggleFollow: () => {
        this.setState({ follow: !follow });
        say(follow ? 'Vous ne suivez plus Sillon' : 'Vous suivez désormais Sillon');
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
                <a className="st-h" href="#/projet" style={{ height: "44px", padding: "0 22px 0 18px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", color: "#1E1D1A", whiteSpace: "nowrap" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                  {" Retour au projet"}
                </a>
              </header>
              <section aria-labelledby="titre-avis" style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "28px" }}>
                <a className="st-cov" href="#/projet" aria-label="Ouvrir la page de Marée basse" style={{ flex: "0 0 180px", width: "180px", height: "180px", borderRadius: "16px", overflow: "hidden", background: "#E2DDD3" }}>
                  <img src="images/cover-maree-basse.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                </a>
                <div style={{ flex: "1 1 320px", minWidth: "0", paddingTop: "4px", display: "flex", flexDirection: "column" }}>
                  <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Avis de Sillon</p>
                  <h1 id="titre-avis" style={{ margin: "8px 0 0", fontSize: "40px", lineHeight: "44px", fontWeight: "800", letterSpacing: "-0.03em" }}>Marée basse</h1>
                  <p style={{ margin: "6px 0 0", fontSize: "16px", lineHeight: "22px", fontWeight: "600" }}>Lune Arnaud · 2026</p>
                  <p style={{ margin: "16px 0 0", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span aria-hidden="true" style={{ display: "flex", gap: "2px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E1D1A" stroke="#1E1D1A" strokeWidth="1.5" strokeLinejoin="round">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E1D1A" stroke="#1E1D1A" strokeWidth="1.5" strokeLinejoin="round">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E1D1A" stroke="#1E1D1A" strokeWidth="1.5" strokeLinejoin="round">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1E1D1A" stroke="#1E1D1A" strokeWidth="1.5" strokeLinejoin="round">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#CFC9BD" stroke="#CFC9BD" strokeWidth="1.5" strokeLinejoin="round">
                        <path d="M12 2.6l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.16l-5.7 3 1.09-6.35-4.62-4.5 6.38-.93z" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                      4
                      <span style={{ fontWeight: "500", color: "#8C877D" }}>/5</span>
                    </span>
                  </p>
                  <p style={{ margin: "12px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>
                    Publié le 6 octobre 2026 · 2 min de lecture
                  </p>
                </div>
              </section>
              <article className="st-review" aria-label="Texte de l’avis" style={{ marginTop: "28px", borderRadius: "16px", background: "#ECE8E0", padding: "32px 40px 34px 36px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "28px", fontWeight: "500", textWrap: "pretty" }}>
                  Il y a des disques qui arrivent comme une vague, et d’autres qui se retirent lentement en laissant derrière eux des choses qu’on n’avait pas vues. Marée basse appartient clairement à la seconde catégorie.
                </p>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "28px", fontWeight: "500", textWrap: "pretty" }}>
                  Lune Arnaud ralentit le tempo et ça lui réussit. Là où son premier album empilait les couches de synthés jusqu’à saturation, celui-ci respire : un pad, une basse ronde, une voix posée tout près du micro. On entend les respirations, les hésitations, le grain. La production joue la retenue, et c’est précisément ce qui donne leur poids aux rares montées, comme le final de « Phare », qui s’ouvre d’un coup après trois minutes de quasi-silence.
                </p>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "28px", fontWeight: "500", textWrap: "pretty" }}>
                  Le milieu du disque est plus inégal. « Sable mouillé » et « Nuit blanche » reprennent des formules déjà entendues, et l’on décroche un peu avant « Coefficient 110 », courte pièce instrumentale qui relance tout. La dernière partie, de « Basse mer » à « Grande marée », est en revanche superbe : les morceaux s’enchaînent sans coupure, comme une seule longue marée descendante.
                </p>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "28px", fontWeight: "500", textWrap: "pretty" }}>
                  Côté textes, Lune Arnaud gagne en précision. Moins d’images toutes faites, plus de détails concrets : un ticket de ferry, une veste trop grande, un message resté sans réponse. « Laisse filer », déjà sur toutes les playlists, en est le meilleur exemple : une chanson de rupture sans drame, presque soulagée.
                </p>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "28px", fontWeight: "500", textWrap: "pretty" }}>
                  Un disque à écouter d’une traite, de préférence tard et au casque. Il ne révolutionne rien, mais il installe une voix qu’on a très envie de suivre.
                </p>
              </article>
              <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <button className="st-h" type="button" aria-pressed={$v.useful} onClick={$v.toggleUseful} style={{ height: "44px", padding: "0 20px 0 16px", borderRadius: "999px", background: $v.usefulBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", transition: "background-color .2s ease" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 10v12" />
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                    </svg>
                    <span>Utile</span>
                    <span style={{ fontWeight: "500", color: "#8C877D" }}>{$v.usefulCount}</span>
                  </button>
                  <button className="st-h" type="button" onClick={$v.share} style={{ height: "44px", padding: "0 20px 0 16px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <path d="m8.59 13.51 6.83 3.98" />
                      <path d="m15.41 6.51-6.82 3.98" />
                    </svg>
                    {" Partager"}
                  </button>
                </div>
                <a className="st-h" href="#/projet" style={{ height: "44px", padding: "0 22px", borderRadius: "999px", background: "#E2DDD3", display: "inline-flex", alignItems: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                  Voir le projet
                </a>
              </div>
              <section aria-labelledby="titre-autres" style={{ marginTop: "40px" }}>
                <h2 id="titre-autres" style={{ margin: "0", paddingLeft: "8px", fontSize: "22px", lineHeight: "28px", fontWeight: "700", letterSpacing: "-0.01em" }}>
                  Autres avis sur Marée basse
                </h2>
                {" "}
                <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: "20px" }}>
                  {($v.others || []).map((o, i1) => (
                    <article key={i1} style={{ minHeight: "200px", borderRadius: "16px", background: "#ECE8E0", padding: "26px 28px 24px 32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "0" }}>
                          <a className="st-cov" href="#/profil" aria-label={o.profileLabel} style={{ flex: "0 0 48px", display: "block", width: "48px", height: "48px", borderRadius: "999px", overflow: "hidden" }}>
                            <img src={o.avatar} alt="" style={{ display: "block", width: "48px", height: "48px", objectFit: "cover" }} />
                          </a>
                          <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                            <h3 style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>{o.name}</h3>
                            <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{o.role}</p>
                          </div>
                        </div>
                        <p style={{ margin: "0 10px 0 0", display: "flex", alignItems: "baseline", gap: "4px", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "20px", lineHeight: "24px", fontWeight: "700" }}>{o.note}</span>
                          <span style={{ fontSize: "14px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>/5</span>
                        </p>
                      </div>
                      <p style={{ margin: "0", paddingLeft: "4px", fontSize: "14px", lineHeight: "22px", fontWeight: "500", display: o.display, WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {o.text}
                      </p>
                      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                        <p style={{ margin: "0", paddingLeft: "4px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{o.date}</p>
                        <button className="st-h" type="button" aria-expanded={o.open} onClick={o.toggle} style={{ flex: "0 0 auto", height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                          {o.label}
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </main>
            <aside className="st-right" aria-label="L’auteur de l’avis" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Note donnée" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Note de Sillon</span>
                    <span style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                      <span style={{ fontSize: "44px", lineHeight: "50px", fontWeight: "800", letterSpacing: "-0.03em" }}>4</span>
                      <span style={{ fontSize: "15px", lineHeight: "20px", fontWeight: "600", color: "#8C877D" }}>/5</span>
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
              <section aria-label="Sillon" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "37px 16px 16px", display: "flex", flexDirection: "column" }}>
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
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M13 8H7" />
                    <path d="M17 12H7" />
                  </svg>
                  Activité
                </h3>
                <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>342 avis · 618 notes</p>
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button className="st-h" type="button" aria-pressed={$v.follow} onClick={$v.toggleFollow} style={{ height: "48px", borderRadius: "999px", background: $v.followBg, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "14px", fontWeight: "700", transition: "background-color .2s ease" }}>
                    {$v.followLabel}
                  </button>
                  <a className="st-h" href="#/profil" style={{ height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                    Voir le profil
                  </a>
                </div>
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
