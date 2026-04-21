import { useNavigate, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../styles/Characters.css'
import charactersPage from '../data/charactersPage.json';
import charactersTitle from '../assets/otherImages/CharactersTitle.png';
import characterPlaceholder from '../assets/imageIcon/Character.png';

const imagesCharacterUrlByFile = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/imagesCharacters/*.png', {
      eager: true,
      query: '?url',
      import: 'default',
    })
  ).map(([path, url]) => [path.split('/').pop(), url])
);

function Characters() 
{
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(urlSearch);

  useEffect(() => {
    setSearchTerm(urlSearch);
  }, [urlSearch]);

  const characterData = charactersPage.characters.map((c) => {
    if (!c.imageFile) {
      return { name: c.name, path: c.path, img: characterPlaceholder };
    }
    const img = imagesCharacterUrlByFile[c.imageFile];
    if (img == null) {
      throw new Error(`Characters page: missing asset imagesCharacters/${c.imageFile}`);
    }
    return { name: c.name, path: c.path, img };
  });

  // 2. Filter logic
  const filteredCharacters = characterData.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="characters-wrapper">
      <div className="characters-header">
        <img src={charactersTitle} alt="Characters title" className="characters-title-image" />
        
        <div className="search-container">
          <label htmlFor="characters-search" className="characters-search-label">
            Search characters
          </label>
          <div className="search-bar-field">
            <span className="search-icon" aria-hidden>
              🔍
            </span>
            <input
              id="characters-search"
              type="text"
              placeholder="SEARCH"
              className="search-input"
              autoComplete="off"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>
          <div className="search-stats">
            <span className="search-stats-results">
              {filteredCharacters.length} RESULTS
            </span>
            <span className="search-stats-sort">SORT BY A-Z v</span>
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