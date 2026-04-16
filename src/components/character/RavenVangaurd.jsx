import React from 'react';
import '../../App.css';
import CharacterHeroImage from './CharacterHeroImage.jsx';
import wallpaper from '../../assets/Wallpaper/FlyRonBackground.png';
import CharacterPhotoGallery from './CharacterPhotoGallery.jsx';
import galleryData from '../../data/characterGalleries/ravenvangaurd.json';

function RavenVangaurd() {
  return (
    <div className="hero-character-page">
      <section className="hero-banner">
        <CharacterHeroImage characterId="ravenvangaurd" alt="Raven Vanguard" />
        <div className="hero-banner-info">
          <div className="hero-banner-eyebrow">TITAN FORGE</div>
          <h1 className="hero-banner-name">RAVEN VANGUARD</h1>
          <p className="hero-banner-subtitle">Revered Lin Kuei Warrior</p>
        </div>
      </section>

      <section className="hero-content">
        <main className="hero-center">
          <h2 className="hero-section-title">Biography</h2>
          <div className="hero-divider" />
          <div className="hero-bio">
            <p>Here goes your character content...</p>
            <p>Add Raven Vanguard&apos;s bio and backstory here.</p>
          </div>
        </main>

        <aside className="hero-right">
          <dl className="hero-stats">
            <div className="hero-stat">
              <dt>Universe</dt>
              <dd>New Universe</dd>
            </div>
            <div className="hero-stat">
              <dt>Aliases</dt>
              <dd>Raven Vanguard</dd>
            </div>
            <div className="hero-stat">
              <dt>Affiliation</dt>
              <dd>Unknown</dd>
            </div>
            <div className="hero-stat">
              <dt>Place of Origin</dt>
              <dd>Unknown</dd>
            </div>
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

export default RavenVangaurd;
