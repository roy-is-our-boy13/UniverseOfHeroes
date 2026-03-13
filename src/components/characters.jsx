import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../App.css'
import flyron from '../assets/imagesCharacters/FlyRon.png';
import crister from '../assets/imagesCharacters/Crister.png';
import wildwrath from '../assets/imagesCharacters/WildWrath.png';
import humanstrike from  '../assets/imagesCharacters/HumanStrike.png';
import reflector from '../assets/imagesCharacters/Reflector.png';
import apolloray from '../assets/imagesCharacters/ApolloRay.png';
import morphoman from '../assets/imagesCharacters/MorphoMan.png';
import flittermouse from '../assets/imagesCharacters/FlitterMouse.png';
import roaringlion from '../assets/imagesCharacters/RoaringLion.png';
import jungletitan from '../assets/imagesCharacters/JungleTitan.png';
import howlwolf from '../assets/imagesCharacters/HowlWolf.png';
import screamwave from '../assets/imagesCharacters/ScreamWave.png';
import ravenvangaurd from '../assets/imagesCharacters/RavenVangaurd.png';
import redman from '../assets/imagesCharacters/RedMan.png';
import aegisluminar from '../assets/imagesCharacters/Aegis Luminar.png';

function Characters() 
{
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Centralize your data
  const characterData = [
    { name: "Fly Ron", img: flyron, path: "/flyron" },
    { name: "Crister", img: crister, path: "/crister" },
    { name: "Wild Wrath", img: wildwrath, path: "/wildwrath" },
    { name: "Human Strike", img: humanstrike, path: "/humanstrike" },
    { name: "Reflector", img: reflector, path: "/reflector" },
    { name: "Apollo Ray", img: apolloray, path: "/apolloray" },
    { name: "Morpho Man", img: morphoman, path: "/morphoman" },
    { name: "Flitter Mouse", img: flittermouse, path: "/flittermouse" },
    { name: "Roaring Lion", img: roaringlion, path: "/roaringlion" },
    { name: "Jungle Titan", img: jungletitan, path: "/jungletitan" },
    { name: "Howl Wolf", img: howlwolf, path: "/howlwolf" },
    { name: "Scream Wave", img: screamwave, path: "/screamwave" },
    { name: "Raven Vanguard", img: ravenvangaurd, path: "/ravenvangaurd" },
    { name: "Red Man", img: redman, path: "/redman" },
    { name: "Aegis Luminar", img: aegisluminar, path: "/aegisluminar" },
  ];

  // 2. Filter logic
  const filteredCharacters = characterData.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="characters-wrapper">
      <div className="characters-header">
        <h2>Characters</h2>
        
        {/* 3. The Search Bar */}
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="SEARCH"
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-stats">
            <span>{filteredCharacters.length} RESULTS</span>
            <span>SORT BY A-Z ∨</span>
          </div>
        </div>
      </div>

      {/* 4. Dynamic Grid */}
      <div className="grid-container">
        {filteredCharacters.map((char, index) => (
          <div className="grid-item" key={index}>
            <button onClick={() => navigate(char.path)} style={{ cursor: 'pointer' }}>
              <img src={char.img} alt={char.name} className="imageOfACharacter" />
              <p>{char.name}</p> {/* Optional: helps user see names while searching */}
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Characters;