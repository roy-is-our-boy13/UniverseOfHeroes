import React from 'react';
import '../../App.css';
import CharacterHeroImage from './CharacterHeroImage.jsx';
import wallpaper from '../../assets/otherImages/CharactersTitle.png';
import CharacterPhotoGallery from './CharacterPhotoGallery.jsx';
import galleryData from '../../data/characterGalleries/gabriel.json';

function Gabriel() {
  return (
    <div className="hero-character-page">
      <section className="hero-banner">
        <CharacterHeroImage characterId="gabriel" alt="Gabriel" />
        <div className="hero-banner-info">
          <div className="hero-banner-eyebrow">Blue Rev Comics</div>
          <h1 className="hero-banner-name">GABRIEL</h1>
          <p className="hero-banner-subtitle">Herald of Hope</p>
        </div>
      </section>

      <section className="hero-content">
        <main className="hero-center">
          <h2 className="hero-section-title">Biography</h2>
          <div className="hero-divider" />
          <div className="hero-bio">
            <p>
              Gabriel is the voice that cuts through chaos, delivering warnings and inspiration when the team needs
              both clarity and courage.
            </p>
            <p>Full story and official art coming soon.</p>
          </div>
        </main>
        <aside className="hero-right">
          <dl className="hero-stats">
            <div className="hero-stat"><dt>Universe</dt><dd>New Universe</dd></div>
            <div className="hero-stat"><dt>Aliases</dt><dd>Gabriel</dd></div>
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

export default Gabriel;
