import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import Decouvrir from './pages/Decouvrir';
import Tendances from './pages/Tendances';
import TousLesProjets from './pages/TousLesProjets';
import Projet from './pages/Projet';
import Avis from './pages/Avis';
import Bibliotheque from './pages/Bibliotheque';
import Profil from './pages/Profil';
import ProfilPrive from './pages/ProfilPrive';
import Notes from './pages/Notes';
import Collection from './pages/Collection';
import MonProfil from './pages/MonProfil';
import Confidentialite from './pages/Confidentialite';
import ParametresProfil from './pages/ParametresProfil';
import ParametresCompte from './pages/ParametresCompte';
import Connexion from './pages/Connexion';

type Route = {
  path: string;
  title: string;
  page: ComponentType<any>;
  props?: Record<string, unknown>;
};

// One route per screen of the design. Links inside the pages point to these paths (href="#/…").
export const ROUTES: Route[] = [
  { path: '/', title: 'STINCT — Découvrir', page: Decouvrir, props: { carteSelectionnee: '1' } },
  { path: '/decouvrir/profil-prive', title: 'STINCT — Découvrir, profil privé', page: Decouvrir, props: { carteSelectionnee: '3' } },
  { path: '/tendances', title: 'STINCT — Tendances', page: Tendances },
  { path: '/projets', title: 'STINCT — Tous les projets', page: TousLesProjets },
  { path: '/projet', title: 'STINCT — Marée basse, Lune Arnaud', page: Projet, props: { modaleOuverte: false } },
  { path: '/projet/ajouter', title: 'STINCT — Ajouter Marée basse à ma bibliothèque', page: Projet, props: { modaleOuverte: true } },
  { path: '/avis', title: 'STINCT — Avis de Sillon sur Marée basse', page: Avis },
  { path: '/bibliotheque', title: 'STINCT — Ma bibliothèque', page: Bibliotheque },
  { path: '/profil', title: 'STINCT — Profil de Sillon', page: Profil },
  { path: '/profil-prive', title: 'STINCT — Profil privé de Basse Continue', page: ProfilPrive },
  { path: '/profil/notes', title: 'STINCT — Toutes les notes de Sillon', page: Notes },
  { path: '/profil/collection', title: 'STINCT — Collection 2026 de Sillon', page: Collection },
  { path: '/mon-profil', title: 'STINCT — Mon profil', page: MonProfil },
  { path: '/parametres/confidentialite', title: 'STINCT — Confidentialité', page: Confidentialite },
  { path: '/parametres/profil', title: 'STINCT — Paramètres du profil', page: ParametresProfil },
  { path: '/parametres/compte', title: 'STINCT — Paramètres du compte', page: ParametresCompte },
  { path: '/connexion', title: 'STINCT — Connexion', page: Connexion, props: { mode: 'connexion' } },
];

function currentRoute(): Route {
  const path = window.location.hash.replace(/^#/, '') || '/';
  return ROUTES.find((route) => route.path === path) ?? ROUTES[0];
}

export default function App() {
  const [route, setRoute] = useState<Route>(currentRoute);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(currentRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = route.title;
  }, [route]);

  const Page = route.page;
  // The key resets the screen's state when moving between two routes that share a page.
  return <Page key={route.path} {...route.props} />;
}
