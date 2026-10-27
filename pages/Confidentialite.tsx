// @ts-nocheck
// Page « Confidentialite » — converted from the STINCT design (Confidentialite.dc.html).
// renderVals() holds the page data and interactions; render() is the markup.
import { Component, Fragment } from 'react';

const CSS = `
body{margin:0;background:#F5F2EC}
a{color:#1E1D1A}
a:hover{color:#1E1D1A}
.st-app,.st-app *{box-sizing:border-box}
.st-app button,.st-app input{font:inherit;color:inherit}
.st-app button{border:0;margin:0;padding:0;cursor:pointer;background:none}
.st-app a{text-decoration:none}
.st-menu{position:absolute;z-index:40;min-width:220px;padding:6px;border-radius:16px;background:#F5F2EC;box-shadow:0 18px 40px rgba(30,29,26,.12),0 2px 8px rgba(30,29,26,.06);display:flex;flex-direction:column;gap:2px}
.st-opt{min-height:40px;padding:8px 12px 8px 14px;border-radius:10px;display:flex;align-items:center;justify-content:space-between;gap:16px;font-size:14px;white-space:nowrap;text-align:left}
.st-opt:hover{background:#ECE8E0 !important}
.st-scrim{position:fixed;inset:0;z-index:30;cursor:default}
.st-app :focus-visible{outline:2px solid #1E1D1A;outline-offset:2px}
.st-sr{position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0 0 0 0) !important;white-space:nowrap !important}
.st-h{transition:box-shadow .15s ease}
.st-h:hover{box-shadow:inset 0 0 0 100vmax rgba(30,29,26,.05)}
.st-tab:hover{color:#1E1D1A !important}
.st-seg{transition:background-color .2s ease, box-shadow .15s ease}
.st-seg:hover{box-shadow:inset 0 0 0 100vmax rgba(30,29,26,.04)}
.st-seg:has(input:focus-visible){outline:2px solid #1E1D1A;outline-offset:-2px}
@media (max-width:975px){
.st-right{flex:1 1 100% !important;flex-direction:row !important;flex-wrap:wrap !important}
.st-right>*{flex:1 1 300px !important}
}
@media (max-width:720px){
.st-app{padding:8px !important;gap:12px !important}
.st-side{flex:1 1 100% !important;flex-direction:row !important;justify-content:space-between !important;padding:8px 12px !important}
.st-side-nav{flex-direction:row !important;margin:0 !important;gap:4px !important}
.st-side-out{margin:0 !important}
.st-segs{flex:1 1 100% !important}
.st-seg{flex:1 1 0 !important;justify-content:center !important;padding:0 10px !important}
}
`;

export default class Confidentialite extends Component<any, any> {
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
    const lv = Object.assign({ p: 'pub', a: 'pub', b: 'abo', r: 'pri' }, st.lv || {});
    const viewer = st.viewer ?? 'visiteur';
    const menu = st.menu || null;
    const v = {};
    const opts = { Pub: 'pub', Abo: 'abo', Pri: 'pri' };
    const SECTION = { p: 'Profil', a: 'Avis', b: 'Bibliothèque', r: 'Recommandations' };
    const LEVEL = { pub: 'visible par tout le monde', abo: 'réservé à vos abonnés', pri: 'visible par vous seul' };
    ['p', 'a', 'b', 'r'].forEach((s) => {
      Object.keys(opts).forEach((O) => {
        const on = lv[s] === opts[O];
        v[s + O + 'On'] = on;
        v[s + O + 'Bg'] = on ? '#D6D0C4' : 'transparent';
        v[s + O + 'Fw'] = on ? '700' : '500';
        v[s + O + 'Set'] = () => {
          if (lv[s] === opts[O]) return;
          const next = Object.assign({}, lv);
          next[s] = opts[O];
          this.setState({ lv: next });
          say(SECTION[s] + ' : ' + LEVEL[opts[O]]);
        };
      });
    });
    const VIEWERS = [['visiteur', 'Visiteur', 'Un membre qui ne vous suit pas'], ['abonne', 'Abonné', 'Un membre qui vous suit']];
    v.mV = {
      open: menu === 'viewer',
      toggle: () => this.setState({ menu: menu === 'viewer' ? null : 'viewer' }),
      opts: VIEWERS.map((o) => ({
        label: o[1],
        hint: o[2],
        on: o[0] === viewer,
        fw: o[0] === viewer ? '700' : '500',
        tick: o[0] === viewer ? '1' : '0',
        pick: () => this.setState({ viewer: o[0], menu: null })
      }))
    };
    v.closeMenus = () => this.setState({ menu: null });
    v.toastOn = !!st.toast;
    v.toast = st.toast || '';
    const canSee = (level) => level === 'pub' || (level === 'abo' && viewer === 'abonne');
    const why = (level) => (level === 'pri' ? 'Privé' : 'Réservé à vos abonnés');
    const profilVisible = canSee(lv.p);
    v.statut = { pub: 'Public', abo: 'Abonnés', pri: 'Privé' }[lv.p];
    v.stPub = lv.p === 'pub';
    v.stAbo = lv.p === 'abo';
    v.stPri = lv.p === 'pri';
    v.viewerLabel = viewer === 'visiteur' ? 'Visiteur' : 'Abonné';
    v.apercu = viewer === 'visiteur' ? 'Vu par un visiteur' : 'Vu par un abonné';
    v.swapLabel = v.apercu + ' : passer à l’aperçu ' + (viewer === 'visiteur' ? 'abonné' : 'visiteur');
    v.swapViewer = () => this.setState({ viewer: viewer === 'visiteur' ? 'abonne' : 'visiteur', menu: null });
    v.profilVisible = profilVisible;
    v.profilMasque = !profilVisible;
    v.masqueTexte = lv.p === 'abo' ? 'Profil réservé aux abonnés' : 'Profil privé';
    v.avisOk = canSee(lv.a);
    v.avisKo = !v.avisOk;
    v.avisWhy = why(lv.a);
    v.bibOk = canSee(lv.b);
    v.bibKo = !v.bibOk;
    v.bibWhy = why(lv.b);
    v.recoOk = canSee(lv.r);
    v.recoKo = !v.recoOk;
    v.recoWhy = why(lv.r);
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
                  <a className="st-tab" href="#/parametres/profil" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Mon profil
                  </a>
                  <a href="#/parametres/confidentialite" aria-current="page" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "600", color: "#1E1D1A" }}>
                    Confidentialité
                  </a>
                  <a className="st-tab" href="#/parametres/compte" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Compte
                  </a>
                </nav>
                <div style={{ position: "relative" }}>
                  <button className="st-h" type="button" aria-haspopup="true" aria-expanded={$v.mV?.open} onClick={$v.mV?.toggle} style={{ height: "44px", padding: "0 18px 0 22px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", whiteSpace: "nowrap" }}>
                    <span style={{ fontWeight: "500", color: "#8C877D" }}>Aperçu en tant que :</span>
                    <span style={{ fontWeight: "600" }}>{$v.viewerLabel}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "4px" }}>
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {" "}
                  {$v.mV?.open ? (
                    <>
                      <button className="st-scrim" type="button" tabIndex={-1} aria-label="Fermer le menu" onClick={$v.closeMenus} />
                      {" "}
                      <div className="st-menu" style={{ top: "52px", right: "0", minWidth: "260px" }}>
                        {($v.mV?.opts || []).map((o, i1) => (
                          <button key={i1} className="st-opt" type="button" aria-pressed={o.on} onClick={o.pick} style={{ fontWeight: o.fw }}>
                            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                              <span>{o.label}</span>
                              <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "normal" }}>{o.hint}</span>
                            </span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 16px", opacity: o.tick }}>
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              </header>
              <div style={{ marginTop: "15px", paddingLeft: "8px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h1 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "700", letterSpacing: "-0.02em" }}>Confidentialité</h1>
                <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>
                  Choisissez qui peut voir chaque partie de votre activité.
                </p>
              </div>
              <section aria-label="Réglages de visibilité" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <fieldset style={{ margin: "0", minWidth: "0", border: "0", padding: "40px 24px 40px 28px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px 24px" }}>
                  <legend className="st-sr">Visibilité du profil</legend>
                  <span aria-hidden="true" style={{ flex: "0 0 52px", width: "52px", height: "52px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 20a6 6 0 0 0-12 0" />
                      <circle cx="12" cy="10" r="4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </span>
                  <div style={{ flex: "1 1 260px", minWidth: "0" }}>
                    <h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Profil</h2>
                    {" "}
                    <p style={{ margin: "6px 0 0", maxWidth: "440px", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                      Votre photo, votre bio, vos abonnés et vos statistiques d’écoute.
                    </p>
                  </div>
                  <div className="st-segs" style={{ flex: "0 0 auto", height: "52px", padding: "4px", borderRadius: "999px", background: "#E2DDD3", display: "flex", gap: "2px" }}>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.pPubBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.pPubFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-profil" value="public" checked={$v.pPubOn} onChange={$v.pPubSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      Public
                    </label>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.pAboBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.pAboFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-profil" value="abonnes" checked={$v.pAboOn} onChange={$v.pAboSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Abonnés
                    </label>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.pPriBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.pPriFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-profil" value="prive" checked={$v.pPriOn} onChange={$v.pPriSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Privé
                    </label>
                  </div>
                </fieldset>
                <fieldset style={{ margin: "0", minWidth: "0", border: "0", padding: "40px 24px 40px 28px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px 24px" }}>
                  <legend className="st-sr">Visibilité des avis</legend>
                  <span aria-hidden="true" style={{ flex: "0 0 52px", width: "52px", height: "52px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <path d="M13 8H7" />
                      <path d="M17 12H7" />
                    </svg>
                  </span>
                  <div style={{ flex: "1 1 260px", minWidth: "0" }}>
                    <h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Avis</h2>
                    {" "}
                    <p style={{ margin: "6px 0 0", maxWidth: "440px", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                      Vos 126 avis publiés et les notes qui les accompagnent.
                    </p>
                  </div>
                  <div className="st-segs" style={{ flex: "0 0 auto", height: "52px", padding: "4px", borderRadius: "999px", background: "#E2DDD3", display: "flex", gap: "2px" }}>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.aPubBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.aPubFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-avis" value="public" checked={$v.aPubOn} onChange={$v.aPubSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      Public
                    </label>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.aAboBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.aAboFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-avis" value="abonnes" checked={$v.aAboOn} onChange={$v.aAboSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Abonnés
                    </label>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.aPriBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.aPriFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-avis" value="prive" checked={$v.aPriOn} onChange={$v.aPriSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Privé
                    </label>
                  </div>
                </fieldset>
                <fieldset style={{ margin: "0", minWidth: "0", border: "0", padding: "40px 24px 40px 28px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px 24px" }}>
                  <legend className="st-sr">Visibilité de la bibliothèque</legend>
                  <span aria-hidden="true" style={{ flex: "0 0 52px", width: "52px", height: "52px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m16 6 4 14" />
                      <path d="M12 6v14" />
                      <path d="M8 8v12" />
                      <path d="M4 4v16" />
                    </svg>
                  </span>
                  <div style={{ flex: "1 1 260px", minWidth: "0" }}>
                    <h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Bibliothèque</h2>
                    {" "}
                    <p style={{ margin: "6px 0 0", maxWidth: "440px", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                      Vos 8 collections et leurs étiquettes. Chaque collection peut aussi avoir sa propre visibilité.
                    </p>
                  </div>
                  <div className="st-segs" style={{ flex: "0 0 auto", height: "52px", padding: "4px", borderRadius: "999px", background: "#E2DDD3", display: "flex", gap: "2px" }}>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.bPubBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.bPubFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-bibliotheque" value="public" checked={$v.bPubOn} onChange={$v.bPubSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      Public
                    </label>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.bAboBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.bAboFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-bibliotheque" value="abonnes" checked={$v.bAboOn} onChange={$v.bAboSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Abonnés
                    </label>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.bPriBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.bPriFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-bibliotheque" value="prive" checked={$v.bPriOn} onChange={$v.bPriSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Privé
                    </label>
                  </div>
                </fieldset>
                <fieldset style={{ margin: "0", minWidth: "0", border: "0", padding: "40px 24px 40px 28px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px 24px" }}>
                  <legend className="st-sr">Visibilité des recommandations</legend>
                  <span aria-hidden="true" style={{ flex: "0 0 52px", width: "52px", height: "52px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 10v12" />
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                    </svg>
                  </span>
                  <div style={{ flex: "1 1 260px", minWidth: "0" }}>
                    <h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Recommandations</h2>
                    {" "}
                    <p style={{ margin: "6px 0 0", maxWidth: "440px", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                      Les projets que vous recommandez depuis votre profil.
                    </p>
                  </div>
                  <div className="st-segs" style={{ flex: "0 0 auto", height: "52px", padding: "4px", borderRadius: "999px", background: "#E2DDD3", display: "flex", gap: "2px" }}>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.rPubBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.rPubFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-recommandations" value="public" checked={$v.rPubOn} onChange={$v.rPubSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      Public
                    </label>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.rAboBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.rAboFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-recommandations" value="abonnes" checked={$v.rAboOn} onChange={$v.rAboSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Abonnés
                    </label>
                    <label className="st-seg" style={{ position: "relative", height: "44px", padding: "0 18px", borderRadius: "999px", background: $v.rPriBg, display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: $v.rPriFw, cursor: "pointer" }}>
                      <input type="radio" name="vis-recommandations" value="prive" checked={$v.rPriOn} onChange={$v.rPriSet} style={{ position: "absolute", opacity: "0", width: "1px", height: "1px" }} />
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Privé
                    </label>
                  </div>
                </fieldset>
              </section>
            </main>
            <aside className="st-right" aria-label="Aperçu de votre profil" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Statut du profil" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Votre profil est</span>
                    <span style={{ fontSize: "26px", lineHeight: "32px", fontWeight: "800", letterSpacing: "-0.02em" }}>{$v.statut}</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    {$v.stPub ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    ) : null}
                    {$v.stAbo ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ) : null}
                    {$v.stPri ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    ) : null}
                  </span>
                </div>
              </section>
              <section aria-label="Aperçu de votre profil pour les autres membres" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "24px 16px 16px", display: "flex", flexDirection: "column" }}>
                <button className="st-h" type="button" aria-label={$v.swapLabel} onClick={$v.swapViewer} style={{ alignSelf: "center", height: "30px", padding: "0 12px 0 14px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", lineHeight: "16px", fontWeight: "600" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>{$v.apercu}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "2px", color: "#8C877D" }}>
                    <path d="M8 3 4 7l4 4" />
                    <path d="M4 7h16" />
                    <path d="m16 21 4-4-4-4" />
                    <path d="M20 17H4" />
                  </svg>
                </button>
                <a className="st-cov" href="#/mon-profil" aria-label="Voir mon profil" style={{ alignSelf: "center", marginTop: "20px", display: "block", width: "88px", height: "88px", borderRadius: "999px", overflow: "hidden" }}>
                  <img src="images/avatar-ninon.jpg" alt="" style={{ display: "block", width: "88px", height: "88px", objectFit: "cover" }} />
                </a>
                <h2 style={{ margin: "12px 0 0", textAlign: "center", fontSize: "18px", lineHeight: "24px", fontWeight: "700" }}>ninon.fm</h2>
                <p style={{ margin: "6px 0 0", textAlign: "center", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Mélomane · Bordeaux</p>
                <div aria-hidden="true" style={{ height: "1px", margin: "22px 4px 0", background: "#D6D0C4" }} />
                {$v.profilVisible ? (
                  <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", gap: "26px", paddingTop: "28px" }}>
                    <div>
                      <h3 style={{ margin: "0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          <path d="M13 8H7" />
                          <path d="M17 12H7" />
                        </svg>
                        Avis
                      </h3>
                      {" "}
                      {$v.avisOk ? (
                        <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>126 avis visibles</p>
                      ) : null}
                      {" "}
                      {$v.avisKo ? (
                        <p style={{ margin: "6px 0 0 26px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          {$v.avisWhy}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <h3 style={{ margin: "0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m16 6 4 14" />
                          <path d="M12 6v14" />
                          <path d="M8 8v12" />
                          <path d="M4 4v16" />
                        </svg>
                        Bibliothèque
                      </h3>
                      {" "}
                      {$v.bibOk ? (
                        <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>8 collections visibles</p>
                      ) : null}
                      {" "}
                      {$v.bibKo ? (
                        <p style={{ margin: "6px 0 0 26px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          {$v.bibWhy}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <h3 style={{ margin: "0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 10v12" />
                          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                        </svg>
                        Recommandations
                      </h3>
                      {" "}
                      {$v.recoOk ? (
                        <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>18 recommandations visibles</p>
                      ) : null}
                      {" "}
                      {$v.recoKo ? (
                        <p style={{ margin: "6px 0 0 26px", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          {$v.recoWhy}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ) : null}
                {$v.profilMasque ? (
                  <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", padding: "24px 0" }}>
                    <span aria-hidden="true" style={{ width: "56px", height: "56px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </span>
                    <p style={{ margin: "0", textAlign: "center", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>{$v.masqueTexte}</p>
                  </div>
                ) : null}
                <a className="st-h" href="#/mon-profil" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                  Voir mon profil
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
