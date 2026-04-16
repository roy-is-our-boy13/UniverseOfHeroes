import React from 'react';
import '../../App.css';
import CharacterHeroImage from './CharacterHeroImage.jsx';
import wallpaper from '../../assets/otherImages/CharactersTitle.png';
import CharacterPhotoGallery from './CharacterPhotoGallery.jsx';
import galleryData from '../../data/characterGalleries/michael.json';

function Michael() {
  return (
    <div className="hero-character-page">
      <section className="hero-banner">
        <CharacterHeroImage characterId="michael" alt="Michael" />
        <div className="hero-banner-info">
          <div className="hero-banner-eyebrow">TITAN FORGE</div>
          <h1 className="hero-banner-name">MICHAEL</h1>
          <p className="hero-banner-subtitle">Celestial Guardian</p>
        </div>
      </section>

      <section className="hero-content">
        <main className="hero-center">
          <h2 className="hero-section-title">Biography</h2>
          <div className="hero-divider" />
          <div className="hero-bio">
            <p>
              Michael stands at the front line when darkness gathers. Calm under pressure and unwavering in
              conviction, he leads with discipline and a strategic mind.
            </p>
            <p>
              Full story and official art coming soon.
            </p>
          </div>
        </main>
        <aside className="hero-right">
          <dl className="hero-stats">
            <div className="hero-stat"><dt>Universe</dt><dd>New Universe</dd></div>
            <div className="hero-stat"><dt>Aliases</dt><dd>Michael</dd></div>
            <div className="hero-stat"><dt>Affiliation</dt><dd>Raven Van Guard Allies</dd></div>
            <div className="hero-stat"><dt>Place of Origin</dt><dd>Unknown</dd></div>
          </dl>
        </aside>
      </section>

      <section className="hero-bottom-gallery">
        <CharacterPhotoGallery images={galleryData.gallery} />
      </section>

      <div className="hero-page-bg" style={{ backgroundImage: `url(${wallpaper})` }} aria-hidden="true" />
    </div>
  );
}

export default Michael;
