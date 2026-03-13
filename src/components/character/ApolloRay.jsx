import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import '../../App.css'
import apolloray from '../../assets/imagesCharacters/ApolloRay.png';
import wallpaper from '../../assets/Wallpaper/FlyRonBackground.png';

function PhotoGallery() {
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

function ApolloRay() {
  return (
    <>
      <div
        className="character-page-container"
        style={{
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      >
        <div className="bio-section">
          <div className="image-wrapper">
            <img src={apolloray} alt="Apollo Ray" className="AcharacterPose" />
          </div>

          <div className="text-wrapper">
            <h1 className="character-name">APOLLO RAY</h1>
            <h3 className="character-title">Revered Lin Kuei Warrior</h3>
            <div className="bio-description">
              <p>Here goes your character content...</p>
              <p>Add Apollo Ray's bio and backstory here.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PhotoGallery />
      </div>
    </>
  );
}

export default ApolloRay;
