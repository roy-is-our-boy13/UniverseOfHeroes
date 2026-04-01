import React, { useRef } from 'react';
import '../../App.css';

/**
 * Horizontal image gallery driven by JSON: { gallery: [{ src, alt }, ...] }
 */
function CharacterPhotoGallery({ images = [] }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  if (!images.length) return null;

  return (
    <div className="gallery-container">
      <button type="button" className="arrow left" onClick={scrollLeft} aria-label="Scroll gallery left">
        ◀
      </button>

      <div className="gallery-wrapper" ref={scrollRef}>
        {images.map((item, index) => (
          <img
            key={`${item.src}-${index}`}
            src={item.src}
            alt={item.alt || `Gallery ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>

      <button type="button" className="arrow right" onClick={scrollRight} aria-label="Scroll gallery right">
        ▶
      </button>
    </div>
  );
}

export default CharacterPhotoGallery;
