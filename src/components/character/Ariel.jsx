import React from 'react';
import '../../App.css';
import placeholder from '../../assets/imageIcon/Character.png';
import wallpaper from '../../assets/otherImages/CharactersTitle.png';
import CharacterPhotoGallery from './CharacterPhotoGallery.jsx';
import galleryData from '../../data/characterGalleries/ariel.json';

function Ariel() {
  return (
    <div className="hero-character-page">
      <section className="hero-banner">
        <div className="hero-banner-image">
          <img src={placeholder} alt="Ariel" />
        </div>
        <div className="hero-banner-info">
          <div className="hero-banner-eyebrow">TITAN FORGE</div>
          <h1 className="hero-banner-name">ARIEL</h1>
          <p className="hero-banner-subtitle">Spirit of the Current</p>
        </div>
      </section>
      <section className="hero-content">
        <main className="hero-center">
          <h2 className="hero-section-title">Biography</h2>
          <div className="hero-divider" />
          <div className="hero-bio">
            <p>
              Ariel moves with speed and fluid precision, adapting mid-conflict and turning defensive moments into
              sudden breakthroughs.
            </p>
            <p>Full story and official art coming soon.</p>
          </div>
        </main>
        <aside className="hero-right">
          <dl className="hero-stats">
            <div className="hero-stat"><dt>Universe</dt><dd>New Universe</dd></div>
            <div className="hero-stat"><dt>Aliases</dt><dd>Ariel</dd></div>
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

export default Ariel;
