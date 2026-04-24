import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css'
import { seriesNameToSlug } from './components/Series/seriesSlugs.js';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Comics from './components/Comics.jsx';
import SeriesDetail from './components/Series/SeriesDetail.jsx';
import Characters from './components/characters.jsx';
import Stages from './components/Stages.jsx';
import Gallery from './components/Gallery.jsx';
import Merch from './components/Merch.jsx';

//Character Paths
import FlyRon from './components/character/FlyRon.jsx';
import Crister from './components/character/Crister.jsx';
import WildWrath from './components/character/WildWrath.jsx';
import HumanStrike from './components/character/HumanStrike.jsx';
import Reflector from './components/character/Reflector.jsx';
import ApolloRay from './components/character/ApolloRay.jsx';
import MorphoMan from './components/character/MorphoMan.jsx';
import FlitterMouse from './components/character/FlitterMouse.jsx';
import RoaringLion  from './components/character/RoaringLion.jsx';
import JungleTitian from './components/character/JungleTitian.jsx';
import HowlWolf from './components/character/HowlWolf.jsx';
import ScreamWave from './components/character/ScreamWave.jsx';
import RavenVangaurd from './components/character/RavenVangaurd.jsx'
import RedMan from './components/character/RedMan.jsx';
import AegisLuminar from './components/character/AegisLuminar.jsx';
import Michael from './components/character/Michael.jsx';
import Gabriel from './components/character/Gabriel.jsx';
import Raphael from './components/character/Raphael.jsx';
import Uriel from './components/character/Uriel.jsx';
import Ariel from './components/character/Ariel.jsx';
import Azrael from './components/character/Azrael.jsx';
import Chamuel from './components/character/Chamuel.jsx';
import TheMessenger from './components/character/TheMessenger.jsx';
import VividValleyMuse from './components/character/VividValleyMuse.jsx';

//Icons
import home from './assets/imageIcon/Home.png';
import comic from './assets/imageIcon/Comic.png';
import about from './assets/imageIcon/Icon.png';
import character from './assets/imageIcon/Character.png';
import stage  from './assets/imageIcon/Stage.png';
import gallery  from './assets/imageIcon/Gallery.png';
import merch from './assets/imageIcon/Merch.png';
import blueRevComicsTitle from './assets/MainTitle/BlueRevComics.png';

function NavigationMenu() 
{
  const comicSeriesTitles = [
    'Fly Ron',
    'Wild Wrath',
    'Wild Reign',
    'Red Man',
    'Raven Van Guard',
    'Human Strike',
    'Crister',
    'Terra Warriors',
    'Morpho Man',
    'Flitter Mouse',
    'Refector',
    'Apollo Ray',
    'Jungle Titan',
    'Aegis Luminar',
  ];

  const navItems = [
    { name: 'Home', path: '/', image: home },
    { name: 'About', path: '/about', image: about },
    { name: 'Characters', path: '/characters', image: character },
    { name: 'Comics', path: '/comics', image: comic, dropdownItems: comicSeriesTitles },
    { name: 'Stages', path: '/stages', image: stage },
    { name: 'Gallery', path: '/gallery', image: gallery },
    { name: 'Merch', path: '/merch', image: merch },
  ];

  return (
    <nav className="smash-nav" aria-label="Main">
      {navItems.map((item) => (
        <div key={item.name} className="nav-item">
          <Link to={item.path} className="nav-link">
            {item.image && <img src={item.image} alt="" className="nav-icon" />}
            <span className="nav-label">{item.name}</span>
            {item.dropdownItems && <span className="nav-dropdown-icon" aria-hidden>▾</span>}
          </Link>
          {item.dropdownItems && (
            <div className="nav-dropdown-menu">
              {item.dropdownItems.map((title) => (
                <Link
                  key={title}
                  to={`/comics/series/${seriesNameToSlug(title)}`}
                  className="nav-dropdown-link"
                >
                  {title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

const SITE_FOOTER_LINKS = [
  ['Terms of Use', '#terms-of-use'],
  ['Privacy Policy', '#privacy-policy'],
  ['Your US State Privacy Rights', '#state-privacy-rights'],
  ['Do Not Sell My Info', '#do-not-sell'],
  ["Children's Online Privacy Policy", '#childrens-privacy'],
  ['License Agreement', '#license'],
  ['Interest-Based Ads', '#interest-based-ads'],
];

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-bar">
        {SITE_FOOTER_LINKS.map(([label, href]) => (
          <a key={label} href={href} className="site-footer-link">
            {label}
          </a>
        ))}
        <span className="site-footer-copy">© {year} Blue Rev Comics</span>
      </div>
    </footer>
  );
}

function HeaderSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const urlSearch = searchParams.get('search') || '';
  const [value, setValue] = useState(urlSearch);

  useEffect(() => {
    if (location.pathname === '/characters') setValue(urlSearch);
  }, [location.pathname, urlSearch]);

  const runSearch = () => {
    const q = value.trim();
    if (!q) {
      navigate('/characters');
      return;
    }
    navigate(`/characters?search=${encodeURIComponent(q)}`);
  };

  return (
    <div className="menu-search">
      <span className="menu-search-icon" aria-hidden>
        🔍
      </span>
      <input
        type="text"
        className="menu-search-input"
        placeholder="Search"
        aria-label="Search characters"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') runSearch();
        }}
      />
    </div>
  );
}

function App() 
{
  const [count, setCount] = useState(0)

  return(
    <>
    <Router>
      <header className="site-header">
        <Link to="/" className="site-logo">
          <img
            src={blueRevComicsTitle}
            alt="Blue Rev Comics"
            className="site-logo-image"
          />
        </Link>
        <div className="site-header-nav-wrap">
          <NavigationMenu />
        </div>
        <HeaderSearch />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/series/:seriesSlug" element={<SeriesDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/merch" element={<Merch />} />

        <Route path ="/flyron" element={<FlyRon />} />
        <Route path ="/crister" element={<Crister />} />
        <Route path ="/wildwrath" element={<WildWrath />} />
        <Route path ="/humanstrike" element={<HumanStrike />} />
        <Route path ="/reflector" element={<Reflector />} />
        <Route path ="/apolloray" element={<ApolloRay />} />
        <Route path ="/morphoman" element={<MorphoMan />} />
        <Route path ="/flittermouse" element={<FlitterMouse />} />
        <Route path ="/roaringlion" element={<RoaringLion />} />
        <Route path ="/jungletitian" element={<JungleTitian />} />
        <Route path ="/howlwolf" element={<HowlWolf />} />
        <Route path ="/screamwave" element={<ScreamWave />} />
        <Route path ="/ravenvangaurd" element={<RavenVangaurd />} />
        <Route path ="/redman" element={<RedMan />} />
        <Route path ="/aegisluminar" element={<AegisLuminar />} />
        <Route path ="/michael" element={<Michael />} />
        <Route path ="/gabriel" element={<Gabriel />} />
        <Route path ="/raphael" element={<Raphael />} />
        <Route path ="/uriel" element={<Uriel />} />
        <Route path ="/ariel" element={<Ariel />} />
        <Route path ="/azrael" element={<Azrael />} />
        <Route path ="/chamuel" element={<Chamuel />} />
        <Route path ="/themessenger" element={<TheMessenger />} />
        <Route path ="/vividvalleymuse" element={<VividValleyMuse />} />
      </Routes>
      <SiteFooter />
      </Router>
    </>
  );
}

export default App