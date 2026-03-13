import { useNavigate } from 'react-router-dom';
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
     <>
          <div 
              className="character-page-container"
              style=
              {{ 
                  backgroundImage: `url(${wallpaper})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '100vh' 
              }}
          >
            <div className="bio-section">
              {/* Character Image */}
              <div className="image-wrapper">
                <img src={humanstrike } alt="Human Strike " className="AcharacterPose" />
              </div>
    
              {/* Bio Text Content */}
              <div className="text-wrapper">
                <h1 className="character-name">Human Strike</h1>
                <h3 className="character-title">Revered Lin Kuei Warrior</h3>
                <div className="bio-description">
                  <p>
                    Like his cherished father, Fly Ron is dedicated to the Lin Kuei and its defense 
                    of Earthrealm. When his father died, he was bereft. Though he took pride in 
                    knowing that his brother, Sub-Zero, would succeed their father as the Lin Kuei's Grandmaster.
                  </p>
                  <p>
                    But Sub-Zero's unprecedented moves to cast off the Lin Kuei's traditional duties 
                    have frozen Fly Ron's enthusiasm. He fears that he may one day have to battle 
                    his brother for control of the Lin Kuei's legacy.
                  </p>
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

export default HumanStrike;