import React from 'react';
import '../../App.css';
import CharacterHeroImage from './CharacterHeroImage.jsx';
import wallpaper from '../../assets/otherImages/CharactersTitle.png';
import CharacterPhotoGallery from './CharacterPhotoGallery.jsx';
import galleryData from '../../data/characterGalleries/chamuel.json';

function Chamuel() {
  return (
    <div className="hero-character-page">
      <section className="hero-banner">
        <CharacterHeroImage characterId="chamuel" alt="Chamuel" />
        <div className="hero-banner-info">
          <div className="hero-banner-eyebrow">TITAN FORGE</div>
          <h1 className="hero-banner-name">CHAMUEL</h1>
          <p className="hero-banner-subtitle">Keeper of Resolve</p>
        </div>
      </section>
      <section className="hero-content">
        <main className="hero-center">
          <h2 className="hero-section-title">Biography</h2>
          <div className="hero-divider" />
          <div className="hero-bio">
            <p>
              Chamuel carries unshakeable patience and purpose, helping allies endure long conflicts and recover after
              heavy losses.
            </p>
            <p>Full story and official art coming soon.</p>
          </div>
        </main>
        <aside className="hero-right">
          <dl className="hero-stats">
            <div className="hero-stat"><dt>Universe</dt><dd>New Universe</dd></div>
            <div className="hero-stat"><dt>Aliases</dt><dd>Chamuel</dd></div>
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

export default Chamuel;
