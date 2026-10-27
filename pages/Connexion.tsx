// @ts-nocheck
// Page « Connexion » — converted from the STINCT design (Connexion.dc.html).
// renderVals() holds the page data and interactions; render() is the markup.
import { Component, Fragment } from 'react';

const CSS = `
body{margin:0;background:#F5F2EC}
a{color:#1E1D1A}
a:hover{color:#1E1D1A}
.st-app,.st-app *{box-sizing:border-box}
.st-app button,.st-app input{font:inherit;color:inherit}
.st-app button{border:0;margin:0;padding:0;cursor:pointer;background:none}
.st-app input{border:0;margin:0}
.st-app a{text-decoration:none}
.st-app ::placeholder{color:#8C877D;opacity:1}
.st-app :focus-visible{outline:2px solid #1E1D1A;outline-offset:2px}
.st-sr{position:absolute !important;width:1px !important;height:1px !important;overflow:hidden !important;clip:rect(0 0 0 0) !important;white-space:nowrap !important}
.st-h{transition:box-shadow .15s ease}
.st-h:hover{box-shadow:inset 0 0 0 100vmax rgba(30,29,26,.05)}
.st-link:hover{color:#1E1D1A !important}
@media (max-width:975px){
.st-hero{flex:1 1 100% !important;min-height:420px !important}
.st-form{flex:1 1 100% !important}
}
@media (max-width:720px){
.st-app{padding:8px !important;gap:12px !important}
.st-covers{grid-template-columns:repeat(3, minmax(0, 1fr)) !important}
}
`;

export default class Connexion extends Component<any, any> {
  state: any = {};

  renderVals() {
    const st = this.state || {};
    const B = 'images/';
    const mode = st.mode || (this.props.mode === 'inscription' ? 'signup' : 'login');
    const login = mode === 'login';
    const email = st.email ?? (login ? 'ninon@exemple.fr' : '');
    const pwd = st.pwd ?? (login ? 'vinyle-2026' : '');
    const pseudo = st.pseudo ?? '';
    const shown = !!st.shown;
    const terms = !!st.terms;
    const note = st.note || '';
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    const valid = login ? okEmail && pwd.length > 0 : pseudo.trim().length >= 3 && okEmail && pwd.length >= 8 && terms;
    const problem = () => {
      if (!login && pseudo.trim().length < 3) return 'Choisissez un pseudo d’au moins 3 caractères.';
      if (!okEmail) return 'Saisissez une adresse e-mail valide.';
      if (login && !pwd) return 'Saisissez votre mot de passe.';
      if (!login && pwd.length < 8) return 'Votre mot de passe doit faire 8 caractères minimum.';
      if (!login && !terms) return 'Acceptez les conditions d’utilisation pour continuer.';
      return '';
    };
    const COVERS = ['cover-maree-basse.jpg', 'cover-nuits-fauves.jpg', 'cover-ciel-rose.jpg', 'cover-asphalte-dore.jpg',
      'cover-frequences.jpg', 'cover-soleil-dhiver.jpg', 'cover-peripherique.jpg', 'cover-velours.jpg',
      'cover-ecume.jpg', 'cover-quartier-libre.jpg', 'cover-verre-pile.jpg', 'cover-heures-creuses.jpg'];
    const setMode = (m) => this.setState({ mode: m, note: '', shown: false, email: m === 'login' ? 'ninon@exemple.fr' : '', pwd: m === 'login' ? 'vinyle-2026' : '', pseudo: '', terms: false });
    return {
      covers: COVERS.map((id) => ({ src: B + id })),
      modes: [['login', 'Se connecter'], ['signup', 'Créer un compte']].map((m) => ({
        label: m[1],
        on: mode === m[0],
        bg: mode === m[0] ? '#D6D0C4' : 'transparent',
        fw: mode === m[0] ? '700' : '500',
        pick: () => { if (mode !== m[0]) setMode(m[0]); }
      })),
      isLogin: login,
      isSignup: !login,
      title: login ? 'Bon retour parmi nous' : 'Créer un compte',
      subtitle: login ? 'Connectez-vous pour retrouver vos notes, vos avis et vos collections.' : 'Rejoignez les mélomanes qui notent et chroniquent leurs écoutes.',
      pseudo: pseudo,
      onPseudo: (e) => this.setState({ pseudo: e.target.value, note: '' }),
      email: email,
      onEmail: (e) => this.setState({ email: e.target.value, note: '' }),
      pwd: pwd,
      onPwd: (e) => this.setState({ pwd: e.target.value, note: '' }),
      pwdType: shown ? 'text' : 'password',
      pwdAuto: login ? 'current-password' : 'new-password',
      pwdPlaceholder: login ? 'Votre mot de passe' : '8 caractères minimum',
      shown: shown,
      hidden: !shown,
      eyeLabel: shown ? 'Masquer le mot de passe' : 'Afficher le mot de passe',
      toggleShown: () => this.setState({ shown: !shown }),
      terms: terms,
      termsBg: terms ? '#1E1D1A' : '#D6D0C4',
      termsTick: terms ? '1' : '0',
      toggleTerms: () => this.setState({ terms: !terms, note: '' }),
      forgot: () => this.setState({ note: okEmail ? 'Un lien de réinitialisation a été envoyé à ' + email.trim() + '.' : 'Saisissez d’abord votre adresse e-mail, puis cliquez à nouveau.' }),
      magic: () => this.setState({ note: okEmail ? 'Lien de connexion envoyé à ' + email.trim() + ' : il est valable 15 minutes.' : 'Saisissez une adresse e-mail valide pour recevoir le lien.' }),
      hasNote: !!note,
      note: note,
      valid: valid,
      invalid: !valid,
      cta: login ? 'Se connecter' : 'Créer mon compte',
      explain: () => this.setState({ note: problem() }),
      enter: (e) => { if (e.key === 'Enter' && !valid) { e.preventDefault(); this.setState({ note: problem() }); } },
      switchText: login ? 'Pas encore de compte ?' : 'Déjà membre ?',
      switchCta: login ? 'Créer un compte' : 'Se connecter',
      switchMode: () => setMode(login ? 'signup' : 'login')
    };
  }

  render() {
    const $v: any = this.renderVals();
    return (
      <>
        <style>{CSS}</style>
        <div className="st-app" style={{ minHeight: "100vh", padding: "12px", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "stretch", background: "#F5F2EC", color: "#1E1D1A", fontFamily: "'Plus Jakarta Sans', 'Avenir Next', 'Segoe UI', system-ui, sans-serif", WebkitFontSmoothing: "antialiased" }}>
          <section className="st-hero" aria-label="STINCT" style={{ flex: "1 1 560px", minWidth: "0", borderRadius: "24px", background: "#ECE8E0", padding: "36px 40px 40px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="30" height="30" viewBox="0 0 28 28" fill="none" stroke="#1E1D1A" strokeWidth="3.4" strokeLinecap="round" aria-hidden="true">
                <path d="M19.2 5A6 6 0 1 0 14 14A6 6 0 1 1 8.8 23" />
              </svg>
              <span style={{ fontSize: "18px", lineHeight: "24px", fontWeight: "800", letterSpacing: "0.12em" }}>STINCT</span>
            </div>
            <div className="st-covers" aria-hidden="true" style={{ margin: "auto 0", padding: "32px 0", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "14px" }}>
              {($v.covers || []).map((c, i1) => (
                <img key={i1} src={c.src} alt="" style={{ display: "block", width: "100%", aspectRatio: "1 / 1", borderRadius: "16px", objectFit: "cover" }} />
              ))}
            </div>
            <h2 style={{ margin: "0", maxWidth: "520px", fontSize: "32px", lineHeight: "38px", fontWeight: "800", letterSpacing: "-0.02em" }}>
              Notez, chroniquez et rangez la musique que vous aimez.
            </h2>
            <p style={{ margin: "12px 0 0", fontSize: "14px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
              1 284 projets notés cette semaine par la communauté.
            </p>
          </section>
          <main className="st-form" style={{ flex: "0 0 520px", minWidth: "0", borderRadius: "24px", background: "#ECE8E0", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "400px", margin: "0 auto" }}>
              <div role="group" aria-label="Choisir" style={{ height: "52px", padding: "4px", borderRadius: "999px", background: "#E2DDD3", display: "flex", gap: "2px" }}>
                {($v.modes || []).map((m, i1) => (
                  <button key={i1} className="st-h" type="button" aria-pressed={m.on} onClick={m.pick} style={{ flex: "1 1 0", height: "44px", borderRadius: "999px", background: m.bg, fontSize: "14px", fontWeight: m.fw, transition: "background-color .2s ease" }}>
                    {m.label}
                  </button>
                ))}
              </div>
              <h1 style={{ margin: "32px 0 0", fontSize: "28px", lineHeight: "34px", fontWeight: "700", letterSpacing: "-0.02em" }}>{$v.title}</h1>
              <p style={{ margin: "10px 0 0", fontSize: "14px", lineHeight: "21px", fontWeight: "500", color: "#8C877D" }}>{$v.subtitle}</p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                {$v.isSignup ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label htmlFor="pseudo" style={{ paddingLeft: "4px", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Pseudo</label>
                    <input id="pseudo" type="text" autoComplete="nickname" maxLength={20} placeholder="Ex. : ninon.fm" value={$v.pseudo} onChange={$v.onPseudo} onKeyDown={$v.enter} style={{ width: "100%", height: "52px", padding: "0 22px", borderRadius: "999px", background: "#F5F2EC", fontSize: "14px", fontWeight: "600" }} />
                  </div>
                ) : null}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="email" style={{ paddingLeft: "4px", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Adresse e-mail</label>
                  <input id="email" type="email" autoComplete="email" placeholder="vous@exemple.fr" value={$v.email} onChange={$v.onEmail} onKeyDown={$v.enter} style={{ width: "100%", height: "52px", padding: "0 22px", borderRadius: "999px", background: "#F5F2EC", fontSize: "14px", fontWeight: "600" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingLeft: "4px" }}>
                    <label htmlFor="mot-de-passe" style={{ fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Mot de passe</label>
                    {$v.isLogin ? (
                      <button className="st-link" type="button" onClick={$v.forgot} style={{ padding: "4px 4px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                        Mot de passe oublié ?
                      </button>
                    ) : null}
                  </div>
                  <div style={{ position: "relative" }}>
                    <input id="mot-de-passe" type={$v.pwdType} autoComplete={$v.pwdAuto} placeholder={$v.pwdPlaceholder} value={$v.pwd} onChange={$v.onPwd} onKeyDown={$v.enter} style={{ width: "100%", height: "52px", padding: "0 64px 0 22px", borderRadius: "999px", background: "#F5F2EC", fontSize: "14px", fontWeight: "600" }} />
                    {" "}
                    <button className="st-h" type="button" aria-label={$v.eyeLabel} aria-pressed={$v.shown} onClick={$v.toggleShown} style={{ position: "absolute", right: "4px", top: "4px", width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {$v.hidden ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : null}
                      {$v.shown ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                          <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                          <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                          <path d="m2 2 20 20" />
                        </svg>
                      ) : null}
                    </button>
                  </div>
                </div>
                {$v.isSignup ? (
                  <button type="button" role="checkbox" aria-checked={$v.terms} onClick={$v.toggleTerms} style={{ minHeight: "48px", padding: "8px 4px", display: "flex", alignItems: "center", gap: "12px", textAlign: "left", fontSize: "13.5px", lineHeight: "19px", fontWeight: "500" }}>
                    <span aria-hidden="true" style={{ flex: "0 0 24px", width: "24px", height: "24px", borderRadius: "8px", background: $v.termsBg, color: "#F5F2EC", display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color .2s ease" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: $v.termsTick }}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {" J’accepte les conditions d’utilisation et la politique de confidentialité"}
                  </button>
                ) : null}
              </div>
              <div role="status" aria-live="polite">
                {$v.hasNote ? (
                  <p style={{ margin: "16px 0 0", padding: "12px 16px", borderRadius: "16px", background: "#E2DDD3", fontSize: "13px", lineHeight: "19px", fontWeight: "600" }}>
                    {$v.note}
                  </p>
                ) : null}
              </div>
              <div style={{ marginTop: "24px" }}>
                {$v.valid ? (
                  <a className="st-h" href="#/" style={{ height: "52px", borderRadius: "999px", background: "#D6D0C4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "700", color: "#1E1D1A" }}>
                    {$v.cta}
                  </a>
                ) : null}
                {" "}
                {$v.invalid ? (
                  <button className="st-h" type="button" onClick={$v.explain} style={{ width: "100%", height: "52px", borderRadius: "999px", background: "#D6D0C4", fontSize: "15px", fontWeight: "700" }}>
                    {$v.cta}
                  </button>
                ) : null}
              </div>
              {$v.isLogin ? (
                <>
                  <div aria-hidden="true" style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "12px", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>
                    <span style={{ flex: "1 1 auto", height: "1px", background: "#D6D0C4" }} />
                    ou
                    <span style={{ flex: "1 1 auto", height: "1px", background: "#D6D0C4" }} />
                  </div>
                  <button className="st-h" type="button" onClick={$v.magic} style={{ marginTop: "20px", width: "100%", height: "52px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", fontSize: "14px", fontWeight: "600" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    {" Recevoir un lien de connexion par e-mail"}
                  </button>
                </>
              ) : null}
              <p style={{ margin: "28px 0 0", textAlign: "center", fontSize: "13.5px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                <span>{$v.switchText}</span>
                {" "}
                <button className="st-link" type="button" onClick={$v.switchMode} style={{ padding: "4px 2px", fontWeight: "700", color: "#1E1D1A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  {$v.switchCta}
                </button>
              </p>
            </div>
          </main>
        </div>
      </>
    );
  }
}
