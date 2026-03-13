import { useRef } from 'react'
import '../App.css'
import flyRon1 from '../assets/otherImages/FlyRon1.png';
import morphoMan1 from '../assets/otherImages/MorphoMan1.png';
import humanStrike1 from '../assets/otherImages/HumanStrike1.png';
import crsiter1 from '../assets/otherImages/Crsiter1.png';
import wildWrath1 from '../assets/otherImages/WildWrath1.png';
import flitterMouse1 from '../assets/otherImages/FlitterMouse1.png';
import redMan1 from '../assets/otherImages/RedMan1.png';
import aegisLuminar1 from '../assets/otherImages/AegisLuminar1.png';
import jungleTitian1 from '../assets/otherImages/JungleTitian1.png';
import apolloRayFight from '../assets/OtherVideos/ApolloRayFight.mp4';
import apolloRayFights from '../assets/OtherVideos/ApolloRayFights.mp4';
import morphoManAnime from '../assets/OtherVideos/MorphoManAnime.mp4';
import flyRonandApolloRay from '../assets/OtherVideos/FlyRonandApolloRay.mp4';

//Photo Gallert for characters
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
      flyRon1,
      morphoMan1,
      humanStrike1,
      crsiter1,
      wildWrath1,
      flitterMouse1,
      redMan1,
      aegisLuminar1,
      jungleTitian1,
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



function VideoGallery() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  const videos = [
    apolloRayFight,
    apolloRayFights,
    morphoManAnime,
    flyRonandApolloRay,
  ];

  return (
    <div className="gallery-container">
      <button className="arrow left" onClick={scrollLeft}>
        ◀
      </button>

      <div className="gallery-wrapper" ref={scrollRef}>
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            controls
            preload="metadata"
            className="gallery-video"
          />
        ))}
      </div>

      <button className="arrow right" onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
}

function Home() {
  return (
    <>
    
    <div>
      <PhotoGallery />
      <VideoGallery />
    </div>
    </>
  );
}

export default Home;