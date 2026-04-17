import React from 'react';
import '../../App.css';
import CharacterHeroImage from './CharacterHeroImage.jsx';
import wallpaper from '../../assets/otherImages/CharactersTitle.png';
import CharacterPhotoGallery from './CharacterPhotoGallery.jsx';
import galleryData from '../../data/characterGalleries/themessenger.json';

function TheMessenger() {
  return (
    <div className="hero-character-page">
      <section className="hero-banner">
        <CharacterHeroImage characterId="themessenger" alt="The Messenger" />
        <div className="hero-banner-info">
          <div className="hero-banner-eyebrow">TITAN FORGE</div>
          <h1 className="hero-banner-name">THE MESSENGER</h1>
          <p className="hero-banner-subtitle">Bearer of Word</p>
        </div>
      </section>

      <section className="hero-content">
        <main className="hero-center">
          <h2 className="hero-section-title">Biography</h2>
          <div className="hero-divider" />
          <div className="hero-bio">
            <p>
              The Messenger moves between silence and signal, carrying truth where it is hardest to hear and binding
              scattered allies with a single, clear voice.
            </p>
            <p>Full story and official art coming soon.</p>
          </div>
        </main>
        <aside className="hero-right">
          <dl className="hero-stats">
            <div className="hero-stat"><dt>Universe</dt><dd>New Universe</dd></div>
            <div className="hero-stat"><dt>Aliases</dt><dd>The Messenger</dd></div>
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

export default TheMessenger;
