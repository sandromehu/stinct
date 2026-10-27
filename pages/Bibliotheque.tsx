// @ts-nocheck
// Page « Bibliotheque » — converted from the STINCT design (Bibliotheque.dc.html).
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
.st-ul:hover .st-ul-t{text-decoration:underline;text-underline-offset:3px}
.st-cov img{transition:filter .2s ease}
.st-cov:hover img{filter:brightness(.95)}
.st-grip span{transition:background-color .15s ease}
.st-grip:hover span{background:rgba(245,242,236,.92) !important}
.st-next{transition:background-color .15s ease}
.st-next:hover{background:rgba(226,221,211,.88) !important}
.st-drag{cursor:grab}
.st-drag:active{cursor:grabbing}
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
.st-feat{flex-direction:column !important;height:auto !important}
.st-feat-btns{flex:0 0 72px !important;flex-direction:row !important}
.st-feat-car{flex:0 0 180px !important}
.st-row-tags{display:none !important}
}
`;

export default class Bibliotheque extends Component<any, any> {
  state: any = {};

  componentWillUnmount() {
    clearTimeout(this._tt);
  }
  renderVals() {
    const st = this.state || {};
    const B = 'images/';
    const P = {
      maree: ['cover-maree-basse.jpg', 'Marée basse', 'Lune Arnaud', 2026, ['Été', 'Nocturne']],
      nuits: ['cover-nuits-fauves.jpg', 'Nuits fauves', 'Les Sables', 2026, ['Nocturne']],
      beton: ['cover-beton-tendre.jpg', 'Béton tendre', 'Kassim', 2026, ['Mélancolique']],
      soleil: ['cover-soleil-dhiver.jpg', 'Soleil d’hiver', 'Odile Marchand', 2026, ['Instrumental', 'Mélancolique']],
      freq: ['cover-frequences.jpg', 'Fréquences', 'Atelier Nova', 2026, ['Instrumental', 'Nocturne']],
      ciel: ['cover-ciel-rose.jpg', 'Ciel rose', 'Camille Dorée', 2026, ['Été']],
      peri: ['cover-peripherique.jpg', 'Périphérique', 'Saïd et Nour', 2026, ['Nocturne']],
      jardin: ['cover-jardin-dombres.jpg', 'Jardin d’ombres', 'Sève', 2025, ['Instrumental', 'Mélancolique']],
      verre: ['cover-verre-pile.jpg', 'Verre pilé', 'Mira Valence', 2026, ['Nocturne', 'Instrumental']],
      heures: ['cover-heures-creuses.jpg', 'Les heures creuses', 'Théo Valmont', 2025, ['Mélancolique']],
      asphalte: ['cover-asphalte-dore.jpg', 'Asphalte doré', 'Yaya Bloom', 2026, ['Été', 'Nocturne']],
      ecume: ['cover-ecume.jpg', 'Écume', 'Nils Ardent', 2025, ['Instrumental', 'Été']],
      velours: ['cover-velours.jpg', 'Velours', 'Lila Moreau', 2026, ['Nocturne', 'Mélancolique']],
      quartier: ['cover-quartier-libre.jpg', 'Quartier libre', 'Bakari', 2025, ['Été']]
    };
    const FOLDERS = [['ecoutes', 'Écoutes 2026', 'are'], ['archives', 'Archives', 'vin']];
    const BASE = [
      { id: 'cdc', folder: 'ecoutes', name: 'Coups de cœur', count: 24, vis: 'Public', tags: ['Nocturne', 'Été', 'Mélancolique'], items: ['nuits', 'ciel', 'velours', 'soleil', 'maree', 'asphalte', 'freq', 'ecume', 'heures', 'jardin', 'peri', 'verre'] },
      { id: 'are', folder: 'ecoutes', name: 'À réécouter', count: 12, vis: 'Abonnés', tags: ['Nocturne', 'Mélancolique', 'Instrumental'], items: ['freq', 'ecume', 'heures', 'beton', 'velours', 'quartier', 'verre', 'jardin', 'soleil', 'peri', 'asphalte', 'ciel'] },
      { id: 'road', folder: 'ecoutes', name: 'Road trip', count: 9, vis: 'Public', tags: ['Été', 'Nocturne'], items: ['peri', 'ciel', 'nuits', 'asphalte', 'quartier', 'maree', 'beton', 'verre', 'ecume'] },
      { id: 'dim', folder: 'ecoutes', name: 'Dimanche matin', count: 11, vis: 'Privé', tags: ['Instrumental', 'Mélancolique'], items: ['soleil', 'heures', 'jardin', 'ecume', 'ciel', 'velours', 'maree', 'freq', 'verre', 'nuits', 'quartier'] },
      { id: 'nuit', folder: 'ecoutes', name: 'Nuits d’automne', count: 7, vis: 'Abonnés', tags: ['Nocturne', 'Mélancolique'], items: ['velours', 'nuits', 'peri', 'verre', 'freq', 'jardin', 'heures'] },
      { id: 'dec', folder: 'ecoutes', name: 'Découvertes', count: 16, vis: 'Public', tags: ['Été', 'Instrumental', 'Nocturne'], items: ['beton', 'quartier', 'asphalte', 'maree', 'ciel', 'soleil', 'ecume', 'nuits', 'peri', 'velours', 'verre', 'jardin'] },
      { id: 'vin', folder: 'archives', name: 'Vinyles', count: 18, vis: 'Public', tags: ['Instrumental', 'Nocturne'], items: ['quartier', 'asphalte', 'jardin', 'verre', 'soleil', 'heures', 'velours', 'beton', 'nuits', 'ecume', 'freq', 'ciel'] },
      { id: 'y25', folder: 'archives', name: '2025', count: 40, vis: 'Abonnés', tags: ['Mélancolique', 'Été'], items: ['heures', 'ecume', 'jardin', 'quartier', 'beton', 'soleil', 'velours', 'freq', 'verre', 'peri', 'ciel', 'nuits'] }
    ];
    const TAG_COUNTS = { 'Nocturne': 31, 'Mélancolique': 24, 'Instrumental': 18, 'Été': 15 };
    const VIS = [
      ['Public', 'Public', 'Public · tout le monde', 'Visible par tout le monde, y compris sur votre profil public.'],
      ['Abonnés', 'Abonnés', 'Abonnés · vos abonnés uniquement', 'Visible uniquement par les membres qui vous suivent.'],
      ['Privé', 'Privé', 'Privé · vous seul', 'Visible uniquement par vous.']
    ];
    const ORDERS = [['custom', 'Personnalisé'], ['title', 'Titre (A → Z)'], ['artist', 'Artiste (A → Z)'], ['year', 'Année (récentes d’abord)']];
    const PROP_MODAL = { 'nouvelle-collection': 'new', etiquettes: 'tags', modifier: 'edit' };

    const say = (msg) => {
      clearTimeout(this._tt);
      this.setState({ toast: msg });
      this._tt = setTimeout(() => this.setState({ toast: null }), 2600);
    };
    const nProj = (n) => (n === 0 ? 'Aucun projet' : n === 1 ? '1 projet' : n + ' projets');
    const nCol = (n) => (n === 0 ? 'Aucune collection' : n === 1 ? '1 collection' : n + ' collections');
    const folderLabel = (id) => (FOLDERS.find((f) => f[0] === id) || FOLDERS[0])[1];
    const visRow = (v) => VIS.find((x) => x[0] === v) || VIS[0];

    const menu = st.menu || null;
    const extra = st.extra || [];
    const edits = st.edits || {};
    const gone = st.gone || {};
    const tags = st.tags || ['Nocturne', 'Mélancolique', 'Instrumental', 'Été'];
    const orders = st.orders || {};
    const all = extra.concat(BASE).filter((c) => !gone[c.id]).map((c) => Object.assign({}, c, edits[c.id] || {}));

    const folder = st.folder || 'ecoutes';
    const fInfo = FOLDERS.find((f) => f[0] === folder) || FOLDERS[0];
    const fcols = all.filter((c) => c.folder === folder);
    const inFolder = (id) => fcols.some((c) => c.id === id);
    const selId = st.sel && inFolder(st.sel) ? st.sel : (inFolder(fInfo[2]) ? fInfo[2] : (fcols[0] ? fcols[0].id : null));
    const col = fcols.find((c) => c.id === selId) || null;
    const tag = st.tag && tags.indexOf(st.tag) >= 0 ? st.tag : 'Toutes';
    const view = st.view || 'grid';
    const sortMode = st.sortMode || 'custom';

    const sorters = {
      title: (a, b) => P[a][1].localeCompare(P[b][1], 'fr'),
      artist: (a, b) => P[a][2].localeCompare(P[b][2], 'fr') || P[a][1].localeCompare(P[b][1], 'fr'),
      year: (a, b) => P[b][3] - P[a][3] || P[a][1].localeCompare(P[b][1], 'fr')
    };
    const custom = col ? (orders[col.id] || col.items) : [];
    const order = sortMode === 'custom' ? custom : custom.slice().sort(sorters[sortMode]);
    const tagsOf = (k) => P[k][4].filter((t) => tags.indexOf(t) >= 0);
    const visible = order.filter((k) => tag === 'Toutes' || tagsOf(k).indexOf(tag) >= 0);

    const drag = st.drag || null;
    const over = st.over || null;
    const save = (arr) => {
      const next = Object.assign({}, orders);
      next[col.id] = arr;
      this.setState({ orders: next, drag: null, over: null, sortMode: 'custom' });
      if (sortMode !== 'custom') say('Ordre personnalisé enregistré');
    };
    const moveTo = (from, to) => {
      const arr = order.slice();
      const i = arr.indexOf(from);
      const j = arr.indexOf(to);
      if (i < 0 || j < 0 || i === j) { this.setState({ drag: null, over: null }); return; }
      arr.splice(i, 1);
      arr.splice(j, 0, from);
      save(arr);
    };
    const shift = (k, d) => {
      const arr = order.slice();
      const i = arr.indexOf(k);
      const j = i + d;
      if (i < 0 || j < 0 || j >= arr.length) return;
      arr.splice(i, 1);
      arr.splice(j, 0, k);
      save(arr);
    };
    const items = visible.map((k) => {
      const target = over === k && drag && drag !== k;
      return {
        src: B + P[k][0],
        title: P[k][1],
        artist: P[k][2],
        year: String(P[k][3]),
        tags: tagsOf(k).join(' · '),
        open: P[k][1] + ' — ' + P[k][2],
        move: 'Déplacer ' + P[k][1] + ' : glisser, ou flèches du clavier',
        fade: drag === k ? '0.35' : '1',
        ring: target ? '0 0 0 4px #BFB7A6' : 'none',
        rowBg: target ? '#D6D0C4' : '#ECE8E0',
        hint: () => say('Glissez la pochette ou utilisez les flèches pour la déplacer'),
        start: (e) => {
          if (e && e.dataTransfer) {
            e.dataTransfer.effectAllowed = 'move';
            try { e.dataTransfer.setData('text/plain', k); } catch (err) {}
          }
          this.setState({ drag: k });
        },
        over: (e) => {
          e.preventDefault();
          if (over !== k) this.setState({ over: k });
        },
        drop: (e) => {
          e.preventDefault();
          if (drag) moveTo(drag, k);
        },
        end: () => this.setState({ drag: null, over: null }),
        keys: (e) => {
          if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); shift(k, -1); }
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); shift(k, 1); }
        }
      };
    });

    const slide = st.slide || 0;
    const maxSlide = Math.max(0, fcols.length - 4);
    const cur = Math.min(slide, maxSlide);
    const tiles = fcols.map((c) => {
      const m = orders[c.id] || c.items;
      const full = m.length >= 4;
      return {
        name: c.name,
        count: String(c.count),
        full: full,
        blank: !full,
        m1: full ? B + P[m[0]][0] : '',
        m2: full ? B + P[m[1]][0] : '',
        m3: full ? B + P[m[2]][0] : '',
        m4: full ? B + P[m[3]][0] : '',
        on: c.id === selId,
        check: c.id === selId ? '1' : '0',
        label: 'Afficher la collection ' + c.name + ', ' + nProj(c.count).toLowerCase(),
        pick: () => this.setState({ sel: c.id, tag: 'Toutes', drag: null, over: null })
      };
    });
    const folders = FOLDERS.map((f) => {
      const n = all.filter((c) => c.folder === f[0]).length;
      return {
        label: f[1],
        meta: nCol(n),
        on: folder === f[0],
        bg: folder === f[0] ? '#D6D0C4' : '#E2DDD3',
        fw: folder === f[0] ? '700' : '600',
        pick: () => this.setState({ folder: f[0], sel: null, slide: 0, tag: 'Toutes', drag: null, over: null })
      };
    });
    const tagPills = ['Toutes'].concat(tags).map((t) => ({
      name: t,
      on: t === tag,
      bg: t === tag ? '#D6D0C4' : '#E2DDD3',
      fw: t === tag ? '700' : '500',
      pick: () => this.setState({ tag: t })
    }));
    const mO = {
      open: menu === 'order',
      toggle: () => this.setState({ menu: menu === 'order' ? null : 'order' }),
      opts: ORDERS.map((o) => ({
        label: o[1],
        on: o[0] === sortMode,
        fw: o[0] === sortMode ? '700' : '500',
        tick: o[0] === sortMode ? '1' : '0',
        pick: () => this.setState({ menu: null, sortMode: o[0] })
      }))
    };

    let modal = st.modal || PROP_MODAL[this.props.modale] || 'none';
    if (modal === 'edit' && !col) modal = 'none';
    const nName = st.nName ?? '';
    const nFolder = st.nFolder || folder;
    const nVis = st.nVis || 'Public';
    const eName = st.eName ?? (col ? col.name : '');
    const eFolder = st.eFolder || (col ? col.folder : folder);
    const eVis = st.eVis || (col ? col.vis : 'Public');
    const confirmDel = !!st.confirmDel;
    const newTag = st.newTag ?? '';
    const uid = st.uid || 0;
    const seg = (list, curVal, key) => list.map((o) => ({
      label: o[1],
      on: o[0] === curVal,
      bg: o[0] === curVal ? '#D6D0C4' : 'transparent',
      fw: o[0] === curVal ? '700' : '500',
      pick: () => {
        const s = {};
        s[key] = o[0];
        this.setState(s);
      }
    }));
    const taken = (name, except) => all.some((c) => c.id !== except && c.name.toLowerCase() === name.toLowerCase());
    const create = () => {
      const name = nName.trim();
      if (!name) { say('Donnez un nom à votre collection'); return; }
      if (taken(name, null)) { say('Une collection porte déjà ce nom'); return; }
      const id = 'n' + (uid + 1);
      this.setState({
        extra: [{ id: id, folder: nFolder, name: name, count: 0, vis: nVis, tags: [], items: [] }].concat(extra),
        uid: uid + 1, folder: nFolder, sel: id, slide: 0, tag: 'Toutes', modal: 'none', nName: '', menu: null
      });
      say('Collection « ' + name + ' » créée');
    };
    const saveEdit = () => {
      if (!col) return;
      const name = eName.trim();
      if (!name) { say('Le nom ne peut pas être vide'); return; }
      if (taken(name, col.id)) { say('Une collection porte déjà ce nom'); return; }
      const next = Object.assign({}, edits);
      next[col.id] = { name: name, vis: eVis, folder: eFolder };
      const moved = eFolder !== col.folder;
      this.setState({ edits: next, modal: 'none', confirmDel: false, folder: eFolder, sel: col.id, slide: moved ? 0 : cur });
      say(moved ? '« ' + name + ' » déplacée dans ' + folderLabel(eFolder) : 'Collection mise à jour');
    };
    const doDelete = () => {
      if (!col) return;
      const next = Object.assign({}, gone);
      next[col.id] = true;
      this.setState({ gone: next, modal: 'none', confirmDel: false, sel: null, slide: 0, tag: 'Toutes' });
      say('Collection « ' + col.name + ' » supprimée');
    };
    const addTag = () => {
      const t = newTag.trim();
      if (!t) { say('Saisissez le nom de l’étiquette'); return; }
      if (t.toLowerCase() === 'toutes' || tags.some((x) => x.toLowerCase() === t.toLowerCase())) { say('Cette étiquette existe déjà'); return; }
      this.setState({ tags: tags.concat([t]), newTag: '' });
      say('Étiquette « ' + t + ' » ajoutée');
    };
    const tagRows = tags.map((t) => ({
      name: t,
      meta: nProj(TAG_COUNTS[t] || 0),
      del: 'Supprimer l’étiquette ' + t,
      remove: () => {
        this.setState({ tags: tags.filter((x) => x !== t), tag: tag === t ? 'Toutes' : tag });
        say('Étiquette « ' + t + ' » supprimée');
      }
    }));
    const openNew = () => this.setState({ modal: 'new', nName: '', nFolder: folder, nVis: 'Public', menu: null });
    const colTagList = col ? col.tags.filter((t) => tags.indexOf(t) >= 0) : [];

    return {
      summary: '86 projets · ' + nCol(all.length).toLowerCase() + ' · 2 dossiers',
      openNew: openNew,
      openTags: () => this.setState({ modal: 'tags', newTag: '', menu: null }),
      openEdit: () => {
        if (!col) return;
        this.setState({ modal: 'edit', eName: col.name, eFolder: col.folder, eVis: col.vis, confirmDel: false, menu: null });
      },
      closeModal: () => this.setState({ modal: 'none', confirmDel: false }),
      closeMenus: () => this.setState({ menu: null }),
      folders: folders,
      tiles: tiles,
      folderEmpty: fcols.length === 0,
      trackX: 'translateX(-' + (cur * 192) + 'px)',
      showNext: fcols.length > 4,
      nextLabel: cur >= maxSlide ? 'Revenir au début des collections' : 'Voir plus de collections',
      nextFlip: cur >= maxSlide ? 'rotate(180deg)' : 'none',
      next: () => this.setState({ slide: cur >= maxSlide ? 0 : cur + 1 }),
      tagPills: tagPills,
      gridOn: view === 'grid',
      listOn: view === 'list',
      gridBg: view === 'grid' ? '#D6D0C4' : 'transparent',
      listBg: view === 'list' ? '#D6D0C4' : 'transparent',
      toGrid: () => this.setState({ view: 'grid' }),
      toList: () => this.setState({ view: 'list' }),
      mO: mO,
      orderLabel: (ORDERS.find((o) => o[0] === sortMode) || ORDERS[0])[1],
      isGrid: view === 'grid' && visible.length > 0,
      isList: view === 'list' && visible.length > 0,
      items: items,
      listLabel: col ? 'Projets de la collection ' + col.name : 'Projets',
      emptyTag: !!col && order.length > 0 && visible.length === 0,
      emptyTagText: 'Aucun projet de cette collection ne porte l’étiquette « ' + tag + ' »',
      allTags: () => this.setState({ tag: 'Toutes' }),
      emptyCol: !!col && order.length === 0,
      emptyFolder: !col,
      hasCol: !!col,
      noCol: !col,
      colFull: !!col && order.length >= 4,
      colBlank: !col || order.length < 4,
      colM1: col && order.length >= 4 ? B + P[order[0]][0] : '',
      colM2: col && order.length >= 4 ? B + P[order[1]][0] : '',
      colM3: col && order.length >= 4 ? B + P[order[2]][0] : '',
      colM4: col && order.length >= 4 ? B + P[order[3]][0] : '',
      colName: col ? col.name : 'Aucune collection',
      colMeta: col ? nProj(col.count) + ' · ' + folderLabel(col.folder) : folderLabel(folder) + ' est vide',
      colVis: col ? visRow(col.vis)[2] : '',
      hasColTags: colTagList.length > 0,
      noColTags: colTagList.length === 0,
      colTags: colTagList.map((t) => ({
        name: t,
        on: t === tag,
        bg: t === tag ? '#D6D0C4' : '#E2DDD3',
        fw: t === tag ? '700' : '600',
        pick: () => this.setState({ tag: t === tag ? 'Toutes' : t })
      })),
      mNew: modal === 'new',
      mTags: modal === 'tags',
      mEdit: modal === 'edit',
      nName: nName,
      onNName: (e) => this.setState({ nName: e.target.value }),
      nKeys: (e) => { if (e.key === 'Enter') { e.preventDefault(); create(); } },
      nFolderSeg: seg(FOLDERS, nFolder, 'nFolder'),
      nVisSeg: seg(VIS, nVis, 'nVis'),
      nVisHint: visRow(nVis)[3],
      create: create,
      hasTags: tags.length > 0,
      noTags: tags.length === 0,
      tagRows: tagRows,
      newTag: newTag,
      onNewTag: (e) => this.setState({ newTag: e.target.value }),
      tagKeys: (e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } },
      addTag: addTag,
      eName: eName,
      onEName: (e) => this.setState({ eName: e.target.value }),
      eKeys: (e) => { if (e.key === 'Enter') { e.preventDefault(); saveEdit(); } },
      eFolderSeg: seg(FOLDERS, eFolder, 'eFolder'),
      eVisSeg: seg(VIS, eVis, 'eVis'),
      eVisHint: visRow(eVis)[3],
      saveEdit: saveEdit,
      noConfirm: !confirmDel,
      confirmDel: confirmDel,
      delText: col ? 'Supprimer « ' + col.name + ' » ?' : '',
      askDelete: () => this.setState({ confirmDel: true }),
      cancelDelete: () => this.setState({ confirmDel: false }),
      doDelete: doDelete,
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
              <a className="st-h" href="#/bibliotheque" aria-label="Bibliothèque" aria-current="page" style={{ width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  <a className="st-tab" href="#/tendances" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "500", color: "#8C877D" }}>
                    Tendances
                  </a>
                  <a href="#/bibliotheque" aria-current="page" style={{ padding: "12px 0", fontSize: "15px", lineHeight: "20px", fontWeight: "600", color: "#1E1D1A" }}>
                    Ma bibliothèque
                  </a>
                </nav>
                <button className="st-h" type="button" aria-haspopup="dialog" onClick={$v.openNew} style={{ height: "44px", padding: "0 22px 0 18px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  {" Nouvelle collection"}
                </button>
              </header>
              <div style={{ marginTop: "15px", paddingLeft: "8px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "0" }}>
                  <h1 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "700", letterSpacing: "-0.02em" }}>Ma bibliothèque</h1>
                  <p style={{ margin: "0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.summary}</p>
                </div>
                <button className="st-link" type="button" aria-haspopup="dialog" onClick={$v.openTags} style={{ marginTop: "-5px", padding: "13px 4px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D", textDecoration: "underline", textUnderlineOffset: "3px", whiteSpace: "nowrap" }}>
                  Gérer les étiquettes
                </button>
              </div>
              <section className="st-feat" aria-label="Dossiers et collections" style={{ marginTop: "28px", height: "180px", display: "flex", gap: "16px" }}>
                <div className="st-feat-btns" style={{ flex: "0 0 180px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {($v.folders || []).map((f, i1) => (
                    <button key={i1} className="st-h" type="button" aria-pressed={f.on} onClick={f.pick} style={{ flex: "1 1 0", borderRadius: "16px", background: f.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", transition: "background-color .2s ease" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: f.fw }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                        </svg>
                        <span>{f.label}</span>
                      </span>
                      <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{f.meta}</span>
                    </button>
                  ))}
                </div>
                <div className="st-feat-car" style={{ flex: "1 1 0", minWidth: "0", position: "relative", overflow: "hidden", borderRadius: "16px" }}>
                  <div style={{ height: "180px", display: "flex", gap: "12px", transform: $v.trackX, transition: "transform .45s cubic-bezier(.2, .7, .2, 1)" }}>
                    {($v.tiles || []).map((t, i1) => (
                      <button key={i1} className="st-cov" type="button" aria-pressed={t.on} aria-label={t.label} onClick={t.pick} style={{ position: "relative", flex: "0 0 180px", width: "180px", height: "180px", borderRadius: "16px", overflow: "hidden", background: "#E2DDD3", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gridTemplateRows: "repeat(2, minmax(0, 1fr))", gap: "2px" }}>
                        {t.full ? (
                          <>
                            <img src={t.m1} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                            <img src={t.m2} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                            <img src={t.m3} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                            <img src={t.m4} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                          </>
                        ) : null}
                        {t.blank ? (
                          <span aria-hidden="true" style={{ gridColumn: "1 / -1", gridRow: "1 / -1", paddingBottom: "34px", display: "flex", alignItems: "center", justifyContent: "center", color: "#8C877D" }}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 18V5l12-2v13" />
                              <circle cx="6" cy="18" r="3" />
                              <circle cx="18" cy="16" r="3" />
                            </svg>
                          </span>
                        ) : null}
                        <span style={{ position: "absolute", left: "10px", bottom: "10px", maxWidth: "160px", height: "32px", padding: "0 12px", borderRadius: "999px", background: "rgba(245, 242, 236, 0.8)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", lineHeight: "16px", whiteSpace: "nowrap", color: "#1E1D1A" }}>
                          <span style={{ fontWeight: "700", overflow: "hidden", textOverflow: "ellipsis" }}>{t.name}</span>
                          <span style={{ fontWeight: "500", color: "#8C877D" }}>{t.count}</span>
                        </span>
                        <span aria-hidden="true" style={{ position: "absolute", top: "10px", right: "10px", width: "28px", height: "28px", borderRadius: "999px", background: "#1E1D1A", color: "#F5F2EC", display: "flex", alignItems: "center", justifyContent: "center", opacity: t.check, transition: "opacity .15s ease" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                      </button>
                    ))}
                    {$v.folderEmpty ? (
                      <button className="st-h" type="button" aria-haspopup="dialog" onClick={$v.openNew} style={{ flex: "0 0 180px", width: "180px", height: "180px", borderRadius: "16px", background: "#E2DDD3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", fontSize: "13px", lineHeight: "18px", fontWeight: "600" }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        {" Créer une collection"}
                      </button>
                    ) : null}
                  </div>
                  {" "}
                  {$v.showNext ? (
                    <button className="st-next" type="button" aria-label={$v.nextLabel} onClick={$v.next} style={{ position: "absolute", top: "0", right: "0", bottom: "0", width: "60px", borderRadius: "16px", background: "rgba(236, 232, 224, 0.74)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: $v.nextFlip, transition: "transform .2s ease" }}>
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  ) : null}
                </div>
              </section>
              <section aria-label="Étiquettes et affichage" style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ margin: "0", paddingLeft: "8px", fontSize: "14px", lineHeight: "18px", fontWeight: "600" }}>Étiquettes :</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    {($v.tagPills || []).map((tp, i1) => (
                      <button key={i1} className="st-h" type="button" aria-pressed={tp.on} onClick={tp.pick} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: tp.bg, fontSize: "14px", fontWeight: tp.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                        {tp.name}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                    <div style={{ height: "44px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center" }}>
                      <button type="button" aria-label="Vue en grille" aria-pressed={$v.gridOn} onClick={$v.toGrid} style={{ width: "52px", height: "44px", borderRadius: "999px", background: $v.gridBg, display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color .2s ease" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="7" height="7" x="3" y="3" rx="1" />
                          <rect width="7" height="7" x="14" y="3" rx="1" />
                          <rect width="7" height="7" x="14" y="14" rx="1" />
                          <rect width="7" height="7" x="3" y="14" rx="1" />
                        </svg>
                      </button>
                      <button type="button" aria-label="Vue en liste" aria-pressed={$v.listOn} onClick={$v.toList} style={{ width: "52px", height: "44px", borderRadius: "999px", background: $v.listBg, display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color .2s ease" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 12h.01" />
                          <path d="M3 18h.01" />
                          <path d="M3 6h.01" />
                          <path d="M8 12h13" />
                          <path d="M8 18h13" />
                          <path d="M8 6h13" />
                        </svg>
                      </button>
                    </div>
                    <div style={{ position: "relative" }}>
                      <button className="st-h" type="button" aria-haspopup="true" aria-expanded={$v.mO?.open} onClick={$v.mO?.toggle} style={{ height: "44px", padding: "0 18px 0 22px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", whiteSpace: "nowrap" }}>
                        <span style={{ fontWeight: "500", color: "#8C877D" }}>Ordre :</span>
                        <span style={{ fontWeight: "600" }}>{$v.orderLabel}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "4px" }}>
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      {" "}
                      {$v.mO?.open ? (
                        <>
                          <button className="st-scrim" type="button" tabIndex={-1} aria-label="Fermer le menu" onClick={$v.closeMenus} />
                          {" "}
                          <div className="st-menu" style={{ top: "52px", right: "0" }}>
                            {($v.mO?.opts || []).map((o, i1) => (
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
                </div>
              </section>
              {$v.isGrid ? (
                <ul aria-label={$v.listLabel} style={{ margin: "28px 0 0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(140px, 100%), 1fr))", gap: "16px 24px" }}>
                  {($v.items || []).map((it, i1) => (
                    <li key={i1} className="st-drag" draggable="true" onDragStart={it.start} onDragOver={it.over} onDrop={it.drop} onDragEnd={it.end} style={{ minWidth: "0", opacity: it.fade, transition: "opacity .15s ease" }}>
                      <div className="st-cov" style={{ position: "relative", aspectRatio: "1 / 1", borderRadius: "16px", overflow: "hidden", background: "#E2DDD3", boxShadow: it.ring, transition: "box-shadow .15s ease" }}>
                        <a href="#/projet" aria-label={it.open} draggable="false" style={{ display: "block", width: "100%", height: "100%" }}>
                          <img src={it.src} alt="" draggable="false" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                        </a>
                        {" "}
                        <button className="st-grip" type="button" aria-label={it.move} onClick={it.hint} onKeyDown={it.keys} style={{ position: "absolute", top: "0", left: "0", width: "44px", height: "44px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "grab" }}>
                          <span style={{ width: "28px", height: "28px", borderRadius: "999px", background: "rgba(245, 242, 236, 0.72)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                              <circle cx="9" cy="5" r="1.4" />
                              <circle cx="9" cy="12" r="1.4" />
                              <circle cx="9" cy="19" r="1.4" />
                              <circle cx="15" cy="5" r="1.4" />
                              <circle cx="15" cy="12" r="1.4" />
                              <circle cx="15" cy="19" r="1.4" />
                            </svg>
                          </span>
                        </button>
                      </div>
                      {" "}
                      <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {it.title}
                      </p>
                      {" "}
                      <p style={{ margin: "0", fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {it.artist}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
              {$v.isList ? (
                <ul aria-label={$v.listLabel} style={{ margin: "28px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {($v.items || []).map((it, i1) => (
                    <li key={i1} className="st-drag" draggable="true" onDragStart={it.start} onDragOver={it.over} onDrop={it.drop} onDragEnd={it.end} style={{ minHeight: "64px", padding: "8px 20px 8px 6px", borderRadius: "16px", background: it.rowBg, display: "flex", alignItems: "center", gap: "12px", opacity: it.fade, transition: "background-color .15s ease, opacity .15s ease" }}>
                      <button className="st-h" type="button" aria-label={it.move} onClick={it.hint} onKeyDown={it.keys} style={{ flex: "0 0 36px", width: "36px", height: "44px", borderRadius: "999px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: "#8C877D", cursor: "grab" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <circle cx="9" cy="5" r="1.4" />
                          <circle cx="9" cy="12" r="1.4" />
                          <circle cx="9" cy="19" r="1.4" />
                          <circle cx="15" cy="5" r="1.4" />
                          <circle cx="15" cy="12" r="1.4" />
                          <circle cx="15" cy="19" r="1.4" />
                        </svg>
                      </button>
                      <a className="st-ul" href="#/projet" draggable="false" style={{ flex: "1 1 260px", minWidth: "0", display: "flex", alignItems: "center", gap: "12px" }}>
                        <img src={it.src} alt="" draggable="false" style={{ flex: "0 0 48px", width: "48px", height: "48px", borderRadius: "12px", objectFit: "cover" }} />
                        <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span className="st-ul-t" style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {it.title}
                          </span>
                          <span style={{ fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {it.artist}
                          </span>
                        </span>
                      </a>
                      <span className="st-row-tags" style={{ flex: "0 1 240px", minWidth: "0", fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {it.tags}
                      </span>
                      <span style={{ flex: "0 0 44px", textAlign: "right", fontSize: "13px", lineHeight: "18px", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                        {it.year}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {$v.emptyTag ? (
                <div style={{ marginTop: "28px", minHeight: "240px", borderRadius: "16px", background: "#ECE8E0", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", textAlign: "center" }}>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>{$v.emptyTagText}</p>
                  <button className="st-h" type="button" onClick={$v.allTags} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                    Afficher tous les projets
                  </button>
                </div>
              ) : null}
              {$v.emptyCol ? (
                <div style={{ marginTop: "28px", minHeight: "240px", borderRadius: "16px", background: "#ECE8E0", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", textAlign: "center" }}>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>Cette collection est vide pour l’instant</p>
                  <p style={{ margin: "0", maxWidth: "380px", fontSize: "13px", lineHeight: "19px", fontWeight: "500", color: "#8C877D" }}>
                    Ajoutez des projets depuis leur page avec le bouton « Ajouter à ma bibliothèque ».
                  </p>
                  <a className="st-h" href="#/projets" style={{ marginTop: "6px", height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", display: "flex", alignItems: "center", fontSize: "13px", fontWeight: "600" }}>
                    Parcourir le catalogue
                  </a>
                </div>
              ) : null}
              {$v.emptyFolder ? (
                <div style={{ marginTop: "28px", minHeight: "240px", borderRadius: "16px", background: "#ECE8E0", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", textAlign: "center" }}>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>Ce dossier ne contient aucune collection</p>
                  <button className="st-h" type="button" aria-haspopup="dialog" onClick={$v.openNew} style={{ height: "44px", padding: "0 20px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                    Créer une collection
                  </button>
                </div>
              ) : null}
            </main>
            <aside className="st-right" aria-label="Aperçu" style={{ flex: "0 0 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <section aria-label="Projets enregistrés" style={{ flex: "0 0 auto", minHeight: "305px", borderRadius: "24px", background: "#ECE8E0", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "62px" }}>
                <div style={{ position: "relative", width: "196px", height: "196px" }}>
                  <div aria-hidden="true" style={{ position: "absolute", inset: "-4px", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)", filter: "blur(16px)", opacity: "0.45" }} />
                  {" "}
                  <div aria-hidden="true" style={{ position: "absolute", inset: "0", borderRadius: "999px", background: "conic-gradient(from 30deg, #E2DDD3, #BFB7A6 50%, #E2DDD3)" }} />
                  {" "}
                  <div style={{ position: "absolute", inset: "30px", borderRadius: "999px", background: "#F5F2EC", boxShadow: "0 0 0 6px rgba(245, 242, 236, 0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>Projets enregistrés</span>
                    <span style={{ fontSize: "44px", lineHeight: "50px", fontWeight: "800", letterSpacing: "-0.03em" }}>86</span>
                  </div>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "72px", top: "156px", width: "52px", height: "52px", borderRadius: "16px", background: "rgba(245, 242, 236, 0.66)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1E1D1A" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m16 6 4 14" />
                      <path d="M12 6v14" />
                      <path d="M8 8v12" />
                      <path d="M4 4v16" />
                    </svg>
                  </span>
                </div>
              </section>
              <section aria-label="Collection sélectionnée" style={{ flex: "1 1 auto", minHeight: "551px", borderRadius: "24px", background: "#ECE8E0", padding: "37px 16px 16px", display: "flex", flexDirection: "column" }}>
                <span aria-hidden="true" style={{ alignSelf: "center", width: "88px", height: "88px", borderRadius: "16px", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gridTemplateRows: "repeat(2, minmax(0, 1fr))", gap: "2px", background: "#E2DDD3" }}>
                  {$v.colFull ? (
                    <>
                      <img src={$v.colM1} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                      <img src={$v.colM2} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                      <img src={$v.colM3} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                      <img src={$v.colM4} alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                    </>
                  ) : null}
                  {$v.colBlank ? (
                    <span style={{ gridColumn: "1 / -1", gridRow: "1 / -1", display: "flex", alignItems: "center", justifyContent: "center", color: "#8C877D" }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    </span>
                  ) : null}
                </span>
                <h2 style={{ margin: "12px 0 0", textAlign: "center", fontSize: "18px", lineHeight: "24px", fontWeight: "700" }}>{$v.colName}</h2>
                <p style={{ margin: "6px 0 0", textAlign: "center", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.colMeta}</p>
                <div aria-hidden="true" style={{ height: "1px", margin: "22px 4px 0", background: "#D6D0C4" }} />
                {$v.hasCol ? (
                  <>
                    <h3 style={{ margin: "34px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Visibilité
                    </h3>
                    <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>{$v.colVis}</p>
                    <h3 style={{ margin: "30px 0 0", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", lineHeight: "20px", fontWeight: "700" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Étiquettes
                    </h3>
                    {$v.hasColTags ? (
                      <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {($v.colTags || []).map((ct, i1) => (
                          <button key={i1} className="st-h" type="button" aria-pressed={ct.on} onClick={ct.pick} style={{ flex: "1 1 auto", height: "40px", padding: "0 11px", borderRadius: "999px", background: ct.bg, fontSize: "12px", fontWeight: ct.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                            {ct.name}
                          </button>
                        ))}
                      </div>
                    ) : null}
                    {$v.noColTags ? (
                      <p style={{ margin: "6px 0 0 26px", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>Aucune étiquette pour l’instant</p>
                    ) : null}
                  </>
                ) : null}
                {$v.hasCol ? (
                  <button className="st-h" type="button" aria-haspopup="dialog" onClick={$v.openEdit} style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }}>
                    Modifier la collection
                  </button>
                ) : null}
                {$v.noCol ? (
                  <button className="st-h" type="button" aria-haspopup="dialog" onClick={$v.openNew} style={{ marginTop: "auto", height: "48px", borderRadius: "999px", background: "#E2DDD3", fontSize: "14px", fontWeight: "600" }}>
                    Créer une collection
                  </button>
                ) : null}
              </section>
            </aside>
          </div>
          {$v.mNew ? (
            <div style={{ position: "fixed", inset: "0", zIndex: "50", overflowY: "auto", padding: "24px 16px", display: "flex", background: "rgba(30, 29, 26, 0.28)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}>
              <section role="dialog" aria-modal="true" aria-labelledby="titre-nouvelle" style={{ margin: "auto", width: "100%", maxWidth: "480px", borderRadius: "24px", background: "#F5F2EC", padding: "28px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                  <h2 id="titre-nouvelle" style={{ margin: "0", fontSize: "20px", lineHeight: "26px", fontWeight: "700", letterSpacing: "-0.01em" }}>
                    Nouvelle collection
                  </h2>
                  <button className="st-h" type="button" aria-label="Fermer" onClick={$v.closeModal} style={{ flex: "0 0 44px", width: "44px", height: "44px", margin: "-9px -9px 0 0", borderRadius: "999px", background: "#ECE8E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <label htmlFor="nom-collection" style={{ marginTop: "20px", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Nom</label>
                <input id="nom-collection" type="text" autoComplete="off" maxLength={40} placeholder="Ex. : Ambiances du soir" value={$v.nName} onChange={$v.onNName} onKeyDown={$v.nKeys} style={{ marginTop: "10px", width: "100%", height: "48px", padding: "0 20px", borderRadius: "999px", background: "#ECE8E0", fontSize: "14px", fontWeight: "600" }} />
                <p style={{ margin: "22px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Dossier</p>
                <div role="group" aria-label="Dossier" style={{ marginTop: "10px", height: "44px", borderRadius: "999px", background: "#ECE8E0", display: "flex" }}>
                  {($v.nFolderSeg || []).map((s, i1) => (
                    <button key={i1} className="st-h" type="button" aria-pressed={s.on} onClick={s.pick} style={{ flex: "1 1 0", height: "44px", borderRadius: "999px", background: s.bg, fontSize: "13.5px", fontWeight: s.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                      {s.label}
                    </button>
                  ))}
                </div>
                <p style={{ margin: "22px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Visibilité</p>
                <div role="group" aria-label="Visibilité" style={{ marginTop: "10px", height: "44px", borderRadius: "999px", background: "#ECE8E0", display: "flex" }}>
                  {($v.nVisSeg || []).map((s, i1) => (
                    <button key={i1} className="st-h" type="button" aria-pressed={s.on} onClick={s.pick} style={{ flex: "1 1 0", height: "44px", borderRadius: "999px", background: s.bg, fontSize: "13.5px", fontWeight: s.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                      {s.label}
                    </button>
                  ))}
                </div>
                <p style={{ margin: "10px 0 0 4px", fontSize: "12.5px", lineHeight: "17px", fontWeight: "500", color: "#8C877D" }}>{$v.nVisHint}</p>
                <div style={{ marginTop: "28px", display: "flex", justifyContent: "flex-end", flexWrap: "wrap", gap: "12px" }}>
                  <button className="st-h" type="button" onClick={$v.closeModal} style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#ECE8E0", fontSize: "14px", fontWeight: "600" }}>
                    Annuler
                  </button>
                  <button className="st-h" type="button" onClick={$v.create} style={{ height: "48px", padding: "0 26px", borderRadius: "999px", background: "#D6D0C4", fontSize: "14px", fontWeight: "700" }}>
                    Créer la collection
                  </button>
                </div>
              </section>
            </div>
          ) : null}
          {$v.mTags ? (
            <div style={{ position: "fixed", inset: "0", zIndex: "50", overflowY: "auto", padding: "24px 16px", display: "flex", background: "rgba(30, 29, 26, 0.28)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}>
              <section role="dialog" aria-modal="true" aria-labelledby="titre-etiquettes" style={{ margin: "auto", width: "100%", maxWidth: "480px", borderRadius: "24px", background: "#F5F2EC", padding: "28px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                  <h2 id="titre-etiquettes" style={{ margin: "0", fontSize: "20px", lineHeight: "26px", fontWeight: "700", letterSpacing: "-0.01em" }}>
                    Gérer les étiquettes
                  </h2>
                  <button className="st-h" type="button" aria-label="Fermer" onClick={$v.closeModal} style={{ flex: "0 0 44px", width: "44px", height: "44px", margin: "-9px -9px 0 0", borderRadius: "999px", background: "#ECE8E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "19px", fontWeight: "500", color: "#8C877D" }}>
                  Les étiquettes servent à filtrer vos projets par ambiance, dans toutes vos collections.
                </p>
                {$v.hasTags ? (
                  <ul style={{ margin: "20px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {($v.tagRows || []).map((r, i1) => (
                      <li key={i1} style={{ minHeight: "56px", padding: "6px 6px 6px 18px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ flex: "1 1 auto", minWidth: "0", display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "2px 10px" }}>
                          <span style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}>{r.name}</span>
                          <span style={{ fontSize: "12.5px", lineHeight: "16px", fontWeight: "500", color: "#8C877D" }}>{r.meta}</span>
                        </span>
                        <button className="st-h" type="button" aria-label={r.del} onClick={r.remove} style={{ flex: "0 0 44px", width: "44px", height: "44px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {$v.noTags ? (
                  <p style={{ margin: "20px 0 0", padding: "18px", borderRadius: "16px", background: "#ECE8E0", fontSize: "13px", lineHeight: "18px", fontWeight: "500", color: "#8C877D", textAlign: "center" }}>
                    Aucune étiquette pour le moment
                  </p>
                ) : null}
                <div style={{ marginTop: "8px", minHeight: "64px", padding: "10px", borderRadius: "16px", background: "#ECE8E0", display: "flex", alignItems: "center", gap: "14px" }}>
                  <span aria-hidden="true" style={{ flex: "0 0 44px", width: "44px", height: "44px", borderRadius: "10px", background: "#E2DDD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                  <label htmlFor="nouvelle-etiquette" className="st-sr">Nom de la nouvelle étiquette</label>
                  <input id="nouvelle-etiquette" type="text" autoComplete="off" maxLength={24} placeholder="Nouvelle étiquette" value={$v.newTag} onChange={$v.onNewTag} onKeyDown={$v.tagKeys} style={{ flex: "1 1 auto", minWidth: "0", height: "44px", borderRadius: "10px", background: "transparent", fontSize: "14px", fontWeight: "600" }} />
                  <button className="st-h" type="button" onClick={$v.addTag} style={{ flex: "0 0 auto", height: "44px", padding: "0 18px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                    Ajouter
                  </button>
                </div>
                <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
                  <button className="st-h" type="button" onClick={$v.closeModal} style={{ height: "48px", padding: "0 26px", borderRadius: "999px", background: "#D6D0C4", fontSize: "14px", fontWeight: "700" }}>
                    Terminé
                  </button>
                </div>
              </section>
            </div>
          ) : null}
          {$v.mEdit ? (
            <div style={{ position: "fixed", inset: "0", zIndex: "50", overflowY: "auto", padding: "24px 16px", display: "flex", background: "rgba(30, 29, 26, 0.28)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}>
              <section role="dialog" aria-modal="true" aria-labelledby="titre-modifier" style={{ margin: "auto", width: "100%", maxWidth: "480px", borderRadius: "24px", background: "#F5F2EC", padding: "28px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                  <h2 id="titre-modifier" style={{ margin: "0", fontSize: "20px", lineHeight: "26px", fontWeight: "700", letterSpacing: "-0.01em" }}>
                    Modifier la collection
                  </h2>
                  <button className="st-h" type="button" aria-label="Fermer" onClick={$v.closeModal} style={{ flex: "0 0 44px", width: "44px", height: "44px", margin: "-9px -9px 0 0", borderRadius: "999px", background: "#ECE8E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <label htmlFor="nom-modifier" style={{ marginTop: "20px", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Nom</label>
                <input id="nom-modifier" type="text" autoComplete="off" maxLength={40} value={$v.eName} onChange={$v.onEName} onKeyDown={$v.eKeys} style={{ marginTop: "10px", width: "100%", height: "48px", padding: "0 20px", borderRadius: "999px", background: "#ECE8E0", fontSize: "14px", fontWeight: "600" }} />
                <p style={{ margin: "22px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Dossier</p>
                <div role="group" aria-label="Dossier" style={{ marginTop: "10px", height: "44px", borderRadius: "999px", background: "#ECE8E0", display: "flex" }}>
                  {($v.eFolderSeg || []).map((s, i1) => (
                    <button key={i1} className="st-h" type="button" aria-pressed={s.on} onClick={s.pick} style={{ flex: "1 1 0", height: "44px", borderRadius: "999px", background: s.bg, fontSize: "13.5px", fontWeight: s.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                      {s.label}
                    </button>
                  ))}
                </div>
                <p style={{ margin: "22px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#8C877D" }}>Visibilité</p>
                <div role="group" aria-label="Visibilité" style={{ marginTop: "10px", height: "44px", borderRadius: "999px", background: "#ECE8E0", display: "flex" }}>
                  {($v.eVisSeg || []).map((s, i1) => (
                    <button key={i1} className="st-h" type="button" aria-pressed={s.on} onClick={s.pick} style={{ flex: "1 1 0", height: "44px", borderRadius: "999px", background: s.bg, fontSize: "13.5px", fontWeight: s.fw, whiteSpace: "nowrap", transition: "background-color .2s ease" }}>
                      {s.label}
                    </button>
                  ))}
                </div>
                <p style={{ margin: "10px 0 0 4px", fontSize: "12.5px", lineHeight: "17px", fontWeight: "500", color: "#8C877D" }}>{$v.eVisHint}</p>
                {$v.noConfirm ? (
                  <div style={{ marginTop: "28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                    <button className="st-h" type="button" onClick={$v.askDelete} style={{ height: "48px", padding: "0 18px 0 14px", borderRadius: "999px", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                      {" Supprimer"}
                    </button>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      <button className="st-h" type="button" onClick={$v.closeModal} style={{ height: "48px", padding: "0 22px", borderRadius: "999px", background: "#ECE8E0", fontSize: "14px", fontWeight: "600" }}>
                        Annuler
                      </button>
                      <button className="st-h" type="button" onClick={$v.saveEdit} style={{ height: "48px", padding: "0 26px", borderRadius: "999px", background: "#D6D0C4", fontSize: "14px", fontWeight: "700" }}>
                        Enregistrer
                      </button>
                    </div>
                  </div>
                ) : null}
                {$v.confirmDel ? (
                  <div role="alert" style={{ marginTop: "28px", padding: "18px", borderRadius: "16px", background: "#ECE8E0", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <p style={{ margin: "0", fontSize: "14px", lineHeight: "20px", fontWeight: "700" }}>{$v.delText}</p>
                    <p style={{ margin: "0", fontSize: "12.5px", lineHeight: "18px", fontWeight: "500", color: "#8C877D" }}>
                      Les projets qu’elle contient resteront dans votre bibliothèque.
                    </p>
                    <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end", flexWrap: "wrap", gap: "8px" }}>
                      <button className="st-h" type="button" onClick={$v.cancelDelete} style={{ height: "44px", padding: "0 18px", borderRadius: "999px", background: "#E2DDD3", fontSize: "13px", fontWeight: "600" }}>
                        Garder la collection
                      </button>
                      <button className="st-ink" type="button" onClick={$v.doDelete} style={{ height: "44px", padding: "0 18px", borderRadius: "999px", background: "#1E1D1A", color: "#F5F2EC", fontSize: "13px", fontWeight: "700" }}>
                        Supprimer définitivement
                      </button>
                    </div>
                  </div>
                ) : null}
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
