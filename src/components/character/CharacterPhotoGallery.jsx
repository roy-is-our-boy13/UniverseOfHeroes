import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import '../../styles/Home.css';
import '../../styles/Gallery.css';

/**
 * Horizontal image gallery driven by JSON: { gallery: [{ src, alt }, ...] }
 * Thumbnails open a full-size lightbox; Escape / backdrop click closes; arrows step images.
 */
function CharacterPhotoGallery({ images = [] }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft')
        setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
      if (e.key === 'ArrowRight')
        setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length]);

  const goLightboxPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const goLightboxNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  if (!images.length) return null;

  const lightbox =
    activeIndex !== null ? (
      <div
        className="gallery-lightbox"
        role="dialog"
        aria-modal="true"
        onClick={() => setActiveIndex(null)}
      >
        <img
          className="gallery-lightbox-image"
          src={images[activeIndex]?.src}
          alt={images[activeIndex]?.alt ?? 'Gallery image'}
          onClick={(e) => e.stopPropagation()}
        />
        <div className="gallery-lightbox-controls" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="gallery-lightbox-arrow" onClick={goLightboxPrev} aria-label="Previous image">
            ◀
          </button>
          <button type="button" className="gallery-lightbox-arrow" onClick={goLightboxNext} aria-label="Next image">
            ▶
          </button>
        </div>
      </div>
    ) : null;

  return (
    <div className="gallery-container">
      <button type="button" className="arrow left" onClick={scrollLeft} aria-label="Scroll gallery left">
        ◀
      </button>

      <div className="gallery-wrapper" ref={scrollRef}>
        {images.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className="character-gallery-thumb-btn"
            onClick={() => setActiveIndex(index)}
            aria-label={item.alt ? `View full size: ${item.alt}` : `Open gallery image ${index + 1}`}
          >
            <img
              src={item.src}
              alt={item.alt || `Gallery ${index + 1}`}
              className="gallery-image"
            />
          </button>
        ))}
      </div>

      <button type="button" className="arrow right" onClick={scrollRight} aria-label="Scroll gallery right">
        ▶
      </button>

      {typeof document !== 'undefined' && lightbox ? createPortal(lightbox, document.body) : null}
    </div>
  );
}

export default CharacterPhotoGallery;
