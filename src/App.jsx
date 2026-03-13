import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css'

import Home from './components/Home.jsx';
// Comcis
import About from './components/About.jsx';
import Comics from './components/Comics.jsx';
import Characters from './components/characters.jsx';
import Stages from './components/Stages.jsx';
import Gallery from './components/Gallery.jsx';

//Chacter Paths
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

//Icons
import home from './assets/imageIcon/Home.png';
import comic from './assets/imageIcon/Comic.png';
import about from './assets/imageIcon/Icon.png';
import character from './assets/imageIcon/Character.png';
import stage  from './assets/imageIcon/Stage.png';
import gallery  from './assets/imageIcon/Gallery.png';


function NavigationMenu() 
{
  const navItems = [
    { name: 'Home', path: '/', image: home, color: '#81cad9' },
    { name: 'About', path: '/about', image: about, color: '#ff0000' },
    { name: 'Characters', path: '/characters', image: character, color: '#00ff00' },
    { name: 'Comics', path: '/comics', image: comic, color: '#a765d3', dropdown: true },
    { name: 'Stages', path: '/stages', image: stage, color: '#ffaa00' },
    { name: 'Gallery', path: '/gallery', image: gallery, color: '#ffaa00' },
  ];

  return (
    <nav className="smash-nav">
      {navItems.map((item) => (
        <Link key={item.name} to={item.path} className="nav-link" style={{ '--accent': item.color }}>
          {item.image && <img src={item.image} alt={`${item.name} icon`} className="nav-icon" />}
          <span className="nav-label">{item.name}</span>
          {item.dropdown && <span className="nav-dropdown-icon" aria-hidden>▼</span>}
        </Link>
      ))}
    </nav>
  );
}

function CopyRights()
{
  return (
    <div>
      <p>
        All characters depicted are properties of their respective owners.
      </p>
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
          <h1>Titan Forge</h1>
        </Link>
        <NavigationMenu />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/gallery" element={<Gallery />} />

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
      </Routes>
        <div>
          <CopyRights />
        </div>
      </Router>
    </>
  );
}

export default App