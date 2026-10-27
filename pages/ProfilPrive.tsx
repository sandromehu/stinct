// @ts-nocheck
// Page « ProfilPrive » — converted from the STINCT design (Profil-prive.dc.html).
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

export default class ProfilPrive extends Component<any, any> {
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
    const sent = st.sent ?? (this.props.demandeEnvoyee ?? false);
    const tab = st.tab || 'avis';
    const TABS = [
      ['avis', 'Avis', '129', 'Ses avis et ses notes sont réservés à ses abonnés.'],
      ['bib', 'Bibliothèque', '6', 'Sa bibliothèque et ses collections sont réservées à ses abonnés.'],
      ['reco', 'Recommandations', '11', 'Ses recommandations sont réservées à ses abonnés.']
    ];
    const cur = TABS.find((t) => t[0] === tab) || TABS[0];
    const tabs = TABS.map((t) => ({
      label: t[1],
      count: t[2],
      on: t[0] === tab,
      bg: t[0] === tab ? '#D6D0C4' : '#E2DDD3',
      fw: t[0] === tab ? '700' : '500',
      pick: () => this.setState({ tab: t[0] })
    }));
    const SEEN = [
      ['Pseudo et photo', true], ['Bio', true], ['Nombre d’abonnés', true],
      ['Avis et notes', false], ['Bibliothèque', false], ['Recommandations', false]
    ];
    return {
      sent: sent,
      notSent: !sent,
      ctaBg: sent ? '#E2DDD3' : '#D6D0C4',
      blockCta: sent ? 'Annuler la demande' : 'Demander à suivre',
      toggleRequest: () => {
        this.setState({ sent: !sent });
        say(sent ? 'Demande annulée' : 'Demande envoyée à Basse Continue');
      },
      lockedList: () => say('Liste visible uniquement par ses abonnés'),
      explainPrivate: () => say(sent ? 'Demande en attente : accès dès qu’elle sera acceptée' : 'Ses avis, notes et collections sont réservés à ses abonnés'),
      tabs: tabs,
      privText: cur[3] + (sent ? ' Votre demande est en attente : vous aurez accès dès qu’elle sera acceptée.' : ' Envoyez une demande pour y accéder.'),
      visNote: sent ? 'Demande en attente de validation' : 'En tant que non-abonné',
      seen: SEEN.map((s) => ({
        label: s[0], ok: s[1], locked: !s[1], bg: s[1] ? '#E2DDD3' : 'transparent',
        explain: () => say(s[1] ? s[0] + ' : visible par tous les membres' : s[0] + ' : réservé à ses abonnés' + (sent ? ', demande en attente' : '')),
      })),
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
                <img className="st-avatar" src="images/avatar-basse-continue.jpg" alt="Photo de profil de Basse Continue" style={{ flex: "0 0 180px", width: "180px", height: "180px", borderRadius: "999px", objectFit: "cover" }} />
                <div style={{ flex: "1 1 360px", minWidth: "0", paddingTop: "6px", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px 16px" }}>
                    <h1 id="pseudo" style={{ margin: "0", fontSize: "40px", lineHeight: "44px", fontWeight: "800", letterSpacing: "-0.03em" }}>Basse Continue</h1>
                    <button className="st-h" type="button" onClick={$v.explainPrivate} style={{ height: "32px", padding: "0 14px 0 11px", borderRadius: "999px", background: "#E2DDD3", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "600", whiteSpace: "nowrap" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Profil privé
                    </button>
                  </div>
                  <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Critique · Marseille · Membre depuis 2022</p>
                  <p style={{ margin: "16px 0 0", maxWidth: "660px", fontSize: "15px", lineHeight: "24px", fontWeight: "500", textWrap: "pretty" }}>
                    Funk, soul et groove sous toutes ses formes. Je réserve mes avis à mes abonnés : demandez, je réponds toujours.
                  </p>
                  <div style={{ marginTop: "22px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "12px 28px" }}>
                    <button className="st-link" type="button" onClick={$v.lockedList} style={{ display: "flex", alignItems: "baseline", gap: "6px", padding: "12px 0", color: "#1E1D1A" }}>
                      <span style={{ fontSize: "16px", lineHeight: "20px", fontWeight: "700" }}>864</span>
                      <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>abonnés</span>
                    </button>
                    <button className="st-link" type="button" onClick={$v.lockedList} style={{ display: "flex", alignItems: "baseline", gap: "6px", padding: "12px 0", color: "#1E1D1A" }}>
                      <span style={{ fontSize: "16px", lineHeight: "20px", fontWeight: "700" }}>201</span>
                      <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>abonnements</span>
                    </button>
                    <button className="st-h" type="button" aria-pressed={$v.sent} onClick={$v.toggleRequest} style={{ height: "48px", padding: "0 24px 0 20px", borderRadius: "999px", background: $v.ctaBg, display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "700", transition: "background-color .2s ease" }}>
                      {$v.notSent ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M19 8v6" />
                            <path d="M22 11h-6" />
                          </svg>
                          <span>Demander à suivre</span>
                        </>
                      ) : null}
                      {$v.sent ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          <span>Demande envoyée</span>
                        </>
                      ) : null}
                    </button>
                  </div>
                </div>
              </section>
              <div role="group" aria-label="Contenus du profil" style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {($v.tabs || []).map((tb, i1) => (
                  <button key={i1} className="st-h" type="button" aria-pressed={tb.on} onClick={tb.pick} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: tb.bg, display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: tb.fw, transition: "background-color .2s ease" }}>
                    <span>{tb.label}</span>
                    <span style={{ fontWeight: "500", color: "#8C877D" }}>{tb.count}</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8C877D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </button>
                ))}
              </div>
              <section aria-label="Contenu réservé aux abonnés" style={{ marginTop: "24px", minHeight: "460px", borderRadius: "16px", background: "#ECE8E0", padding: "40px 32px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                <span aria-hidden="true" style={{ width: "72px", height: "72px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <h2 style={{ margin: "20px 0 0", fontSize: "20px", lineHeight: "26px", fontWeight: "700", letterSpacing: "-0.01em" }}>Ce profil est privé</h2>
                <p style={{ margin: "10px 0 0", maxWidth: "440px", fontSize: "14px", lineHeight: "22px", fontWeight: "500", color: "#8C877D" }}>{$v.privText}</p>
                <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
                  <button className="st-h" type="button" aria-pressed={$v.sent} onClick={$v.toggleRequest} style={{ height: "48px", padding: "0 24px", borderRadius: "999px", background: $v.ctaBg, fontSize: "14px", fontWeight: "700", transition: "background-color .2s ease" }}>
                    {$v.blockCta}
                  </button>
                  <a className="st-h" href="#/tendances" style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#E2DDD3", display: "inline-flex", alignItems: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                    Découvrir d’autres membres
                  </a>
                </div>
              </section>
            </main>
            <aside className="st-right" aria-label="À propos de ce profil" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Projets notés" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Projets notés</span>
                    <span style={{ fontSize: "44px", lineHeight: "50px", fontWeight: "800", letterSpacing: "-0.03em" }}>402</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Ce que vous pouvez voir" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "30px 20px 16px", display: "flex", flexDirection: "column" }}>
                <h2 style={{ margin: "0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Ce que vous pouvez voir
                </h2>
                <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.visNote}</p>
                <ul style={{ margin: "20px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {($v.seen || []).map((s, i1) => (
                    <li key={i1}>
                      <button className="st-h" type="button" onClick={s.explain} style={{ width: "100%", minHeight: "44px", padding: "0 14px", borderRadius: "12px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", textAlign: "left", fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>
                        <span>{s.label}</span>
                        {s.ok ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-label="Visible" role="img">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        ) : null}
                        {s.locked ? (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8C877D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Réservé aux abonnés" role="img">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        ) : null}
                      </button>
                    </li>
                  ))}
                </ul>
                <a className="st-h" href="#/tendances" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                  Membres à suivre
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
