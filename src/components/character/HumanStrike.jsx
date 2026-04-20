import React from 'react';
import '../../App.css';
import CharacterHeroImage from './CharacterHeroImage.jsx';
import wallpaper from '../../assets/Wallpaper/FlyRonBackground.png';
import CharacterPhotoGallery from './CharacterPhotoGallery.jsx';
import galleryData from '../../data/characterGalleries/humanstrike.json';

function HumanStrike() {
  return (
    <div className="hero-character-page">
      <section className="hero-banner">
        <CharacterHeroImage characterId="humanstrike" alt="Human Strike" />
        <div className="hero-banner-info">
          <div className="hero-banner-eyebrow">Isamu Tsao</div>
          <h1 className="hero-banner-name">HUMAN STRIKE</h1>
        </div>
      </section>

      <section className="hero-content">
        <main className="hero-center">
          <h2 className="hero-section-title">Biography</h2>
          <div className="hero-divider" />
          <div className="hero-bio">
            <p>
              Like his cherished father, Fly Ron is dedicated to the Lin Kuei and its defense of Earthrealm. When his
              father died, he was bereft. Though he took pride in knowing that his brother, Sub-Zero, would succeed
              their father as the Lin Kuei&apos;s Grandmaster.
            </p>
            <p>
              But Sub-Zero&apos;s unprecedented moves to cast off the Lin Kuei&apos;s traditional duties have frozen Fly
              Ron&apos;s enthusiasm. He fears that he may one day have to battle his brother for control of the Lin
              Kuei&apos;s legacy.
            </p>
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
              <dd>The Samurai</dd>
            </div>
            <div className="hero-stat">
              <dt>Affiliation</dt>
              <dd>Terra Warriors</dd>
            </div>
            <div className="hero-stat">
              <dt>Place of Origin</dt>
              <dd>Tokyo, Japan</dd>
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

export default HumanStrike;