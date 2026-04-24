import React from 'react';
import '../../App.css';
import CharacterHeroImage from './CharacterHeroImage.jsx';
import wallpaper from '../../assets/otherImages/CharactersTitle.png';
import CharacterPhotoGallery from './CharacterPhotoGallery.jsx';
import galleryData from '../../data/characterGalleries/vividvalleymuse.json';

function VividValleyMuse() {
  return (
    <div className="hero-character-page">
      <section className="hero-banner">
        <CharacterHeroImage characterId="vividvalleymuse" alt="Vivid Valley Muse" />
        <div className="hero-banner-info">
          <div className="hero-banner-eyebrow">Blue Rev Comics</div>
          <h1 className="hero-banner-name">VIVID VALLEY MUSE</h1>
        </div>
      </section>

      <section className="hero-content">
        <main className="hero-center">
          <h2 className="hero-section-title">Biography</h2>
          <div className="hero-divider" />
          <div className="hero-bio">
            <p>Add Vivid Valley Muse&apos;s bio and backstory here.</p>
            <p>Full story and official art can be added when ready.</p>
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
              <dd>Vivid Valley Muse</dd>
            </div>
            <div className="hero-stat">
              <dt>Affiliation</dt>
              <dd>TBA</dd>
            </div>
            <div className="hero-stat">
              <dt>Place of Origin</dt>
              <dd>TBA</dd>
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

export default VividValleyMuse;
