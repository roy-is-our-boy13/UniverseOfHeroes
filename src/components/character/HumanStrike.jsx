import React, { useRef } from 'react';
import '../../App.css'
import humanstrike from '../../assets/imagePose/HumanStrikePose.png';
import wallpaper from '../../assets/Wallpaper/FlyRonBackground.png';


function PhotoGallery() 
{
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
  ];

  return (
    <div className="gallery-container">
      <button className="arrow left" onClick={scrollLeft}>
        ◀
      </button>

      <div className="gallery-wrapper" ref={scrollRef}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="gallery-image"
          />
        ))}
      </div>

      <button className="arrow right" onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
}

function HumanStrike() {
  return (
    <div className="hero-character-page">
      <section className="hero-banner">
        <div className="hero-banner-image">
          <img src={humanstrike} alt="Human Strike" />
        </div>
        <div className="hero-banner-info">
          <div className="hero-banner-eyebrow">TITAN FORGE</div>
          <h1 className="hero-banner-name">HUMAN STRIKE</h1>
          <p className="hero-banner-subtitle">Revered Lin Kuei Warrior</p>
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
              <dd>Human Strike</dd>
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
        <PhotoGallery />
      </section>

      <div className="hero-page-bg" style={{ backgroundImage: `url(${wallpaper})` }} aria-hidden="true" />
    </div>
  );
}

export default HumanStrike;