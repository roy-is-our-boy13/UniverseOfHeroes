import { useEffect, useRef, useState } from 'react'
import '../styles/Home.css';
import '../styles/Gallery.css';
import flyRon1 from '../assets/otherImages/FlyRon1.png';
import morphoMan1 from '../assets/otherImages/MorphoMan1.png';
import humanStrike1 from '../assets/otherImages/HumanStrike1.png';
import crsiter1 from '../assets/otherImages/Crsiter1.png';
import wildWrath1 from '../assets/otherImages/WildWrath1.png';
import flitterMouse1 from '../assets/otherImages/FlitterMouse1.png';
import redMan1 from '../assets/otherImages/RedMan1.png';
import aegisLuminar1 from '../assets/otherImages/AegisLuminar1.png';
import jungleTitian1 from '../assets/otherImages/JungleTitian1.png';
import messangerPic from '../assets/otherImages/MessangerPic.png';
import apolloRayArt from '../assets/otherImages/ApolloRayArt.png';
import ravenComic from '../assets/otherImages/RavenVanguardComicPage.png';
import apolloRayFight from '../assets/OtherVideos/ApolloRayFight.mp4';
import apolloRayFights from '../assets/OtherVideos/ApolloRayFights.mp4';
import morphoManAnime from '../assets/OtherVideos/MorphoManAnime.mp4';
import flyRonandApolloRay from '../assets/OtherVideos/FlyRonandApolloRay.mp4';

const WHATS_NEW_SLIDES = [
  {
    covers: [flyRon1, morphoMan1, humanStrike1, crsiter1],
    hero: wildWrath1,
    dateDisplay: '4 / 6 / 2 6',
    tagline: 'Discover new comics hitting shelves this week for #NewComicsDay!',
  },
  {
    covers: [wildWrath1, redMan1, flitterMouse1, aegisLuminar1],
    hero: morphoMan1,
    dateDisplay: '3 / 29 / 2 6',
    tagline: 'Fresh issues from Universe Of Heroes land every New Comics Day—don’t miss the drop.',
  },
  {
    covers: [jungleTitian1, crsiter1, humanStrike1, flyRon1],
    hero: redMan1,
    dateDisplay: '3 / 15 / 2 6',
    tagline: 'Catch up on fan-favorite series and new debuts in this week’s spotlight.',
  },
  {
    covers: [aegisLuminar1, morphoMan1, flitterMouse1, messangerPic],
    hero: apolloRayArt,
    dateDisplay: '3 / 8 / 2 6',
    tagline: 'New covers, new chapters—scroll the carousel and jump into the next adventure.',
  },
  {
    covers: [messangerPic, ravenComic, jungleTitian1, wildWrath1],
    hero: flyRon1,
    dateDisplay: '2 / 22 / 2 6',
    tagline: 'Universe Of Heroes celebrates #NewComicsDay with stories worth rereading.',
  },
];

function WhatsNewCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const n = WHATS_NEW_SLIDES.length;
  const slide = WHATS_NEW_SLIDES[slideIndex];
  const goPrev = () => setSlideIndex((i) => (i - 1 + n) % n);
  const goNext = () => setSlideIndex((i) => (i + 1) % n);

  return (
    <section className="whats-new" aria-labelledby="whats-new-heading">
      <div className="whats-new-banner">
        <div className="whats-new-chevron whats-new-chevron--a" aria-hidden="true" />
        <div className="whats-new-chevron whats-new-chevron--b" aria-hidden="true" />

        <div className="whats-new-banner-grid">
          <div className="whats-new-left">
            <div className="whats-new-covers">
              {slide.covers.map((src, idx) => (
                <img
                  key={`${slideIndex}-${idx}`}
                  src={src}
                  alt=""
                  className="whats-new-cover"
                  decoding="async"
                />
              ))}
            </div>
            <div className="whats-new-heading-row">
              <h2 id="whats-new-heading" className="whats-new-title">
                What&apos;s New?
              </h2>
              <div className="whats-new-date-bar" aria-label="Spotlight date">
                <span className="whats-new-date-text">{slide.dateDisplay}</span>
              </div>
            </div>
          </div>
          <div className="whats-new-hero-wrap">
            <img
              src={slide.hero}
              alt=""
              className="whats-new-hero"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="whats-new-controls">
        <button
          type="button"
          className="whats-new-arrow"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          <span className="whats-new-arrow-icon whats-new-arrow-icon--left" aria-hidden="true" />
        </button>
        <p className="whats-new-tagline">{slide.tagline}</p>
        <button
          type="button"
          className="whats-new-arrow"
          onClick={goNext}
          aria-label="Next slide"
        >
          <span className="whats-new-arrow-icon whats-new-arrow-icon--right" aria-hidden="true" />
        </button>
      </div>

      <div className="whats-new-dots" role="tablist" aria-label="Carousel pages">
        {WHATS_NEW_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === slideIndex}
            className={`whats-new-dot${i === slideIndex ? ' is-active' : ''}`}
            onClick={() => setSlideIndex(i)}
            aria-label={`Slide ${i + 1} of ${n}`}
          />
        ))}
      </div>
    </section>
  );
}

//Photo Gallert for characters
function PhotoGallery() 
{
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

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
      messangerPic,
  ];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIndex(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  return (
    <section className="home-feature-section" aria-labelledby="featured-comics-heading">
      <h2 id="featured-comics-heading" className="home-feature-heading">
        Featured Comics
      </h2>
      <div className="home-feature-panel">
        <button
          type="button"
          className="home-feature-nav home-feature-nav--prev"
          onClick={scrollLeft}
          aria-label="Scroll featured comics left"
        >
          <span className="home-feature-nav-triangle home-feature-nav-triangle--left" aria-hidden />
        </button>
        <button
          type="button"
          className="home-feature-nav home-feature-nav--next"
          onClick={scrollRight}
          aria-label="Scroll featured comics right"
        >
          <span className="home-feature-nav-triangle home-feature-nav-triangle--right" aria-hidden />
        </button>
        <div className="gallery-wrapper home-feature-track" ref={scrollRef}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Featured comic ${index + 1}`}
              className="gallery-image"
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <img
            className="gallery-lightbox-image"
            src={images[activeIndex]}
            alt={`Enlarged gallery ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
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
    <section className="home-feature-section" aria-labelledby="featured-videos-heading">
      <h2 id="featured-videos-heading" className="home-feature-heading">
        Featured Videos
      </h2>
      <div className="home-feature-panel">
        <button
          type="button"
          className="home-feature-nav home-feature-nav--prev"
          onClick={scrollLeft}
          aria-label="Scroll featured videos left"
        >
          <span className="home-feature-nav-triangle home-feature-nav-triangle--left" aria-hidden />
        </button>
        <button
          type="button"
          className="home-feature-nav home-feature-nav--next"
          onClick={scrollRight}
          aria-label="Scroll featured videos right"
        >
          <span className="home-feature-nav-triangle home-feature-nav-triangle--right" aria-hidden />
        </button>
        <div className="gallery-wrapper home-feature-track" ref={scrollRef}>
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
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
    <div className="home-page">
      <WhatsNewCarousel />
      <PhotoGallery />
      <VideoGallery />
    </div>
    </>
  );
}

export default Home;