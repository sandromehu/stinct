// @ts-nocheck
// Page « ParametresCompte » — converted from the STINCT design (Parametres-compte.dc.html).
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
.st-ink{transition:background-color .15s ease}
.st-ink:hover{background:#3A3833 !important}
.st-tab:hover,.st-link:hover{color:#1E1D1A !important}
.st-sw span{transition:transform .2s ease, background-color .2s ease}
@media (max-width:975px){
.st-right{flex:1 1 100% !important;flex-direction:row !important;flex-wrap:wrap !important}
.st-right>*{flex:1 1 300px !important}
}
@media (max-width:720px){
.st-app{padding:8px !important;gap:12px !important}
.st-side{flex:1 1 100% !important;flex-direction:row !important;justify-content:space-between !important;padding:8px 12px !important}
.st-side-nav{flex-direction:row !important;margin:0 !important;gap:4px !important}
.st-side-out{margin:0 !important}
}
`;

export default class ParametresCompte extends Component<any, any> {
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
    const email = st.email || 'ninon@exemple.fr';
    const emailEdit = !!st.emailEdit;
    const emailDraft = st.emailDraft ?? email;
    const saveEmail = () => {
      const val = emailDraft.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) { say('Adresse e-mail invalide'); return; }
      if (val === email) { this.setState({ emailEdit: false }); say('Aucune modification'); return; }
      this.setState({ email: val, emailEdit: false });
      say('Un lien de confirmation a été envoyé à ' + val);
    };
    const pwdEdit = !!st.pwdEdit;
    const pwdOld = st.pwdOld || '';
    const pwdNew = st.pwdNew || '';
    const pwdShown = !!st.pwdShown;
    const pwdChanged = !!st.pwdChanged;
    const savePwd = () => {
      if (!pwdOld) { say('Saisissez votre mot de passe actuel'); return; }
      if (pwdNew.length < 8) { say('Le nouveau mot de passe doit faire 8 caractères minimum'); return; }
      this.setState({ pwdEdit: false, pwdOld: '', pwdNew: '', pwdShown: false, pwdChanged: true });
      say('Mot de passe modifié');
    };
    const lang = st.lang || 'fr';
    const LANGS = [['fr', 'Français'], ['en', 'English']];
    const NOTIFS = [
      ['n-abonnes', 'abonnes', 'Nouveaux abonnés'],
      ['n-utile', 'utile', 'Vos avis jugés « utiles »'],
      ['n-sorties', 'sorties', 'Sorties des artistes que vous notez'],
      ['n-lettre', 'lettre', 'Lettre hebdomadaire de STINCT']
    ];
    const notif = Object.assign({ abonnes: true, utile: true, sorties: false, lettre: true }, st.notif || {});
    const DEVICES = [
      ['mac', 'MacBook Air', 'Bordeaux · en ligne', true],
      ['iphone', 'iPhone 15', 'Bordeaux · il y a 2 h', false],
      ['ipad', 'iPad', 'Paris · il y a 3 jours', false]
    ];
    const gone = st.gone || {};
    const devices = DEVICES.filter((x) => !gone[x[0]]);
    const exported = !!st.exported;
    const ack = !!st.ack;
    return {
      email: email,
      emailIdle: !emailEdit,
      emailEdit: emailEdit,
      emailDraft: emailDraft,
      editEmail: () => this.setState({ emailEdit: true, emailDraft: email }),
      cancelEmail: () => this.setState({ emailEdit: false }),
      onEmail: (e) => this.setState({ emailDraft: e.target.value }),
      emailKeys: (e) => { if (e.key === 'Enter') { e.preventDefault(); saveEmail(); } },
      saveEmail: saveEmail,
      pwdInfo: pwdChanged ? 'Modifié à l’instant' : 'Modifié il y a 3 mois',
      pwdIdle: !pwdEdit,
      pwdEdit: pwdEdit,
      editPwd: () => this.setState({ pwdEdit: true, pwdOld: '', pwdNew: '', pwdShown: false }),
      cancelPwd: () => this.setState({ pwdEdit: false, pwdOld: '', pwdNew: '' }),
      pwdOld: pwdOld,
      pwdNew: pwdNew,
      onPwdOld: (e) => this.setState({ pwdOld: e.target.value }),
      onPwdNew: (e) => this.setState({ pwdNew: e.target.value }),
      pwdKeys: (e) => { if (e.key === 'Enter') { e.preventDefault(); savePwd(); } },
      pwdType: pwdShown ? 'text' : 'password',
      pwdShown: pwdShown,
      pwdShowLabel: pwdShown ? 'Masquer' : 'Afficher',
      togglePwdShown: () => this.setState({ pwdShown: !pwdShown }),
      savePwd: savePwd,
      langs: LANGS.map((l) => ({
        label: l[1],
        on: lang === l[0],
        bg: lang === l[0] ? '#D6D0C4' : 'transparent',
        fw: lang === l[0] ? '700' : '500',
        pick: () => {
          if (lang === l[0]) return;
          this.setState({ lang: l[0] });
          say(l[0] === 'fr' ? 'Langue : français' : 'Language: English');
        }
      })),
      notifs: NOTIFS.map((n) => {
        const on = !!notif[n[1]];
        return {
          id: n[0],
          label: n[2],
          on: on,
          track: on ? '#1E1D1A' : '#D6D0C4',
          knob: on ? 'translateX(20px)' : 'translateX(0)',
          toggle: () => {
            const next = Object.assign({}, notif);
            next[n[1]] = !on;
            this.setState({ notif: next });
            say((on ? 'Désactivé : ' : 'Activé : ') + n[2].charAt(0).toLowerCase() + n[2].slice(1));
          }
        };
      }),
      exportLabel: exported ? 'Export demandé' : 'Exporter mes données',
      exportData: () => {
        this.setState({ exported: true });
        say(exported ? 'Export déjà en préparation' : 'Export en préparation : lien envoyé par e-mail');
      },
      mDelete: !!st.del,
      openDelete: () => this.setState({ del: true, ack: false }),
      closeDelete: () => this.setState({ del: false, ack: false }),
      ack: ack,
      noAck: !ack,
      ackBg: ack ? '#1E1D1A' : '#D6D0C4',
      ackTick: ack ? '1' : '0',
      toggleAck: () => this.setState({ ack: !ack }),
      needAck: () => say('Cochez la case pour confirmer'),
      deviceCount: devices.length + (devices.length > 1 ? ' sessions actives' : ' session active'),
      devices: devices.map((x) => ({
        name: x[1],
        meta: x[2],
        current: x[3],
        other: !x[3],
        aria: 'Déconnecter ' + x[1],
        revoke: () => {
          const next = Object.assign({}, gone);
          next[x[0]] = true;
          this.setState({ gone: next });
          say(x[1] + ' a été déconnecté');
        }
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
                  <a className="st-tab" href="#/parametres/confidentialite" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Confidentialité
                  </a>
                  <a href="#/parametres/compte" aria-current="page" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "600", color: "#1E1D1A" }}>
                    Compte
                  </a>
                </nav>
              </header>
              <div style={{ marginTop: "15px", paddingLeft: "8px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h1 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "700", letterSpacing: "-0.02em" }}>Compte</h1>
                <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>
                  Connexion, préférences et données de votre compte STINCT.
                </p>
              </div>
              <section aria-label="Réglages du compte" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ padding: "20px 24px 20px 20px", borderRadius: "16px", background: "#ECE8E0", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px 20px" }}>
                    <span aria-hidden="true" style={{ flex: "0 0 52px", width: "52px", height: "52px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                      <h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Adresse e-mail</h2>
                      {" "}
                      <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>{$v.email}</p>
                    </div>
                    {$v.emailIdle ? (
                      <button className="st-h" type="button" onClick={$v.editEmail} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }}>
                        Modifier
                      </button>
                    ) : null}
                  </div>
                  {$v.emailEdit ? (
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", paddingLeft: "72px" }}>
                      <label htmlFor="nouvel-email" className="st-sr">Nouvelle adresse e-mail</label>
                      <input id="nouvel-email" type="email" autoComplete="email" value={$v.emailDraft} onChange={$v.onEmail} onKeyDown={$v.emailKeys} style={{ flex: "1 1 260px", minWidth: "0", height: "48px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }} />
                      <button className="st-h" type="button" onClick={$v.cancelEmail} style={{ height: "48px", padding: "0 20px", borderRadius: "999px", background: "#F5F2EC", fontSize: "14px", fontWeight: "600" }}>
                        Annuler
                      </button>
                      <button className="st-h" type="button" onClick={$v.saveEmail} style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#D6D0C4", fontSize: "14px", fontWeight: "700" }}>
                        Enregistrer
                      </button>
                    </div>
                  ) : null}
                </div>
                <div style={{ padding: "20px 24px 20px 20px", borderRadius: "16px", background: "#ECE8E0", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px 20px" }}>
                    <span aria-hidden="true" style={{ flex: "0 0 52px", width: "52px", height: "52px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="7.5" cy="15.5" r="5.5" />
                        <path d="m21 2-9.6 9.6" />
                        <path d="m15.5 7.5 3 3L22 7l-3-3" />
                      </svg>
                    </span>
                    <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                      <h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Mot de passe</h2>
                      {" "}
                      <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>{$v.pwdInfo}</p>
                    </div>
                    {$v.pwdIdle ? (
                      <button className="st-h" type="button" onClick={$v.editPwd} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }}>
                        Modifier
                      </button>
                    ) : null}
                  </div>
                  {$v.pwdEdit ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "72px" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        <label htmlFor="mdp-actuel" className="st-sr">Mot de passe actuel</label>
                        <input id="mdp-actuel" type={$v.pwdType} autoComplete="current-password" placeholder="Mot de passe actuel" value={$v.pwdOld} onChange={$v.onPwdOld} style={{ flex: "1 1 200px", minWidth: "0", height: "48px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }} />
                        <label htmlFor="mdp-nouveau" className="st-sr">Nouveau mot de passe, 8 caractères minimum</label>
                        <input id="mdp-nouveau" type={$v.pwdType} autoComplete="new-password" placeholder="Nouveau (8 caractères min.)" value={$v.pwdNew} onChange={$v.onPwdNew} onKeyDown={$v.pwdKeys} style={{ flex: "1 1 200px", minWidth: "0", height: "48px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                        <button className="st-h" type="button" aria-pressed={$v.pwdShown} onClick={$v.togglePwdShown} style={{ marginRight: "auto", height: "44px", padding: "0 16px 0 12px", borderRadius: "999px", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600" }}>
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          <span>{$v.pwdShowLabel}</span>
                        </button>
                        <button className="st-h" type="button" onClick={$v.cancelPwd} style={{ height: "48px", padding: "0 20px", borderRadius: "999px", background: "#F5F2EC", fontSize: "14px", fontWeight: "600" }}>
                          Annuler
                        </button>
                        <button className="st-h" type="button" onClick={$v.savePwd} style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#D6D0C4", fontSize: "14px", fontWeight: "700" }}>
                          Enregistrer
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div style={{ padding: "20px 24px 20px 20px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px 20px" }}>
                  <span aria-hidden="true" style={{ flex: "0 0 52px", width: "52px", height: "52px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </span>
                  <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                    <h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Langue</h2>
                    {" "}
                    <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>Langue de l’interface et des e-mails.</p>
                  </div>
                  <div role="group" aria-label="Langue" style={{ height: "52px", padding: "4px", borderRadius: "999px", background: "#E2DDD3", display: "flex", gap: "2px" }}>
                    {($v.langs || []).map((s, i1) => (
                      <button key={i1} className="st-h" type="button" aria-pressed={s.on} onClick={s.pick} style={{ height: "44px", padding: "0 18px", borderRadius: "999px", background: s.bg, fontSize: "13.5px", fontWeight: s.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "20px 24px 14px 20px", borderRadius: "16px", background: "#ECE8E0", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <span aria-hidden="true" style={{ flex: "0 0 52px", width: "52px", height: "52px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                      </svg>
                    </span>
                    <div style={{ flex: "1 1 auto", minWidth: "0" }}>
                      <h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Notifications</h2>
                      {" "}
                      <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                        Choisissez ce qui mérite de vous déranger.
                      </p>
                    </div>
                  </div>
                  <ul style={{ margin: "6px 0 0 72px", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
                    {($v.notifs || []).map((n, i1) => (
                      <li key={i1} style={{ minHeight: "52px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                        <span id={n.id} style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "500" }}>{n.label}</span>
                        <button className="st-sw" type="button" role="switch" aria-checked={n.on} aria-labelledby={n.id} onClick={n.toggle} style={{ flex: "0 0 52px", width: "52px", height: "32px", padding: "4px", borderRadius: "999px", background: n.track, display: "flex", alignItems: "center", transition: "background-color .2s ease" }}>
                          <span style={{ width: "24px", height: "24px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 1px 3px rgba(30, 29, 26, 0.18)", transform: n.knob }} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: "20px 24px 20px 20px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px 20px" }}>
                  <span aria-hidden="true" style={{ flex: "0 0 52px", width: "52px", height: "52px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                      <path d="M3 12A9 3 0 0 0 21 12" />
                    </svg>
                  </span>
                  <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                    <h2 style={{ margin: "0", fontSize: "16px", lineHeight: "22px", fontWeight: "700" }}>Vos données</h2>
                    {" "}
                    <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                      Téléchargez vos notes, avis et collections, ou supprimez votre compte.
                    </p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <button className="st-h" type="button" onClick={$v.exportData} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }}>
                      {$v.exportLabel}
                    </button>
                    <button className="st-h" type="button" aria-haspopup="dialog" onClick={$v.openDelete} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", fontSize: "14px", fontWeight: "600" }}>
                      Supprimer mon compte
                    </button>
                  </div>
                </div>
              </section>
            </main>
            <aside className="st-right" aria-label="Sécurité du compte" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Ancienneté" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Membre depuis</span>
                    <span style={{ fontSize: "40px", lineHeight: "48px", fontWeight: "800", letterSpacing: "-0.03em" }}>2024</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Appareils connectés" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "30px 16px 16px", display: "flex", flexDirection: "column" }}>
                <h2 style={{ margin: "0 0 0 4px", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                  </svg>
                  Appareils connectés
                </h2>
                <p style={{ margin: "6px 0 0 30px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.deviceCount}</p>
                <ul style={{ margin: "18px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {($v.devices || []).map((dv, i1) => (
                    <li key={i1} style={{ minHeight: "64px", padding: "10px 8px 10px 14px", borderRadius: "14px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ flex: "1 1 auto", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {dv.name}
                        </span>
                        <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {dv.meta}
                        </span>
                      </span>
                      {dv.current ? (
                        <span style={{ flex: "0 0 auto", padding: "0 8px", fontSize: "12px", lineHeight: "16px", fontWeight: "600", color: "#8C877D" }}>Cet appareil</span>
                      ) : null}
                      {dv.other ? (
                        <button className="st-h" type="button" aria-label={dv.aria} onClick={dv.revoke} style={{ flex: "0 0 auto", height: "40px", padding: "0 14px", borderRadius: "999px", background: "#D6D0C4", fontSize: "12.5px", fontWeight: "600" }}>
                          Déconnecter
                        </button>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <a className="st-h" href="#/connexion" style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#1E1D1A" }}>
                  Se déconnecter partout
                </a>
              </section>
            </aside>
          </div>
          {$v.mDelete ? (
            <div style={{ position: "fixed", inset: "0", zIndex: "50", overflowY: "auto", padding: "24px 16px", display: "flex", background: "rgba(30, 29, 26, 0.28)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}>
              <section role="dialog" aria-modal="true" aria-labelledby="titre-suppression" style={{ margin: "auto", width: "100%", maxWidth: "480px", borderRadius: "24px", background: "#F5F2EC", padding: "28px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                  <h2 id="titre-suppression" style={{ margin: "0", fontSize: "20px", lineHeight: "26px", fontWeight: "700", letterSpacing: "-0.01em" }}>
                    Supprimer votre compte ?
                  </h2>
                  <button className="st-h" type="button" aria-label="Fermer" onClick={$v.closeDelete} style={{ flex: "0 0 44px", width: "44px", height: "44px", margin: "-9px -9px 0 0", borderRadius: "999px", background: "#ECE8E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <p style={{ margin: "12px 0 0", fontSize: "14px", lineHeight: "22px", fontWeight: "500" }}>
                  Vos 126 avis, vos notes, vos 8 collections et vos abonnements seront définitivement effacés.
                </p>
                <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                  Pensez à exporter vos données avant de partir.
                </p>
                <button type="button" role="checkbox" aria-checked={$v.ack} onClick={$v.toggleAck} style={{ marginTop: "20px", minHeight: "56px", padding: "10px 16px 10px 12px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", gap: "12px", textAlign: "left", fontSize: "13.5px", lineHeight: "19px", fontWeight: "600" }}>
                  <span aria-hidden="true" style={{ flex: "0 0 24px", width: "24px", height: "24px", borderRadius: "8px", background: $v.ackBg, color: "#F5F2EC", display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color .2s ease" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: $v.ackTick }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {" Je comprends que cette action est irréversible"}
                </button>
                <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end", flexWrap: "wrap", gap: "12px" }}>
                  <button className="st-h" type="button" onClick={$v.closeDelete} style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#ECE8E0", fontSize: "14px", fontWeight: "600" }}>
                    Garder mon compte
                  </button>
                  {$v.ack ? (
                    <a className="st-ink" href="#/connexion" style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#1E1D1A", display: "inline-flex", alignItems: "center", fontSize: "14px", fontWeight: "700", color: "#F5F2EC" }}>
                      Supprimer définitivement
                    </a>
                  ) : null}
                  {$v.noAck ? (
                    <button type="button" onClick={$v.needAck} style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#1E1D1A", color: "#F5F2EC", opacity: "0.45", fontSize: "14px", fontWeight: "700" }}>
                      Supprimer définitivement
                    </button>
                  ) : null}
                </div>
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
