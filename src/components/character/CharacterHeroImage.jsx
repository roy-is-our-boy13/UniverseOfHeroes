import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getCharacterHeroImageUrl } from '../../utils/characterHeroImage.js';
import '../../styles/Gallery.css';

/**
 * Hero banner portrait with click-to-expand lightbox (full-size view).
 */
export default function CharacterHeroImage({ characterId, alt }) {
  const [open, setOpen] = useState(false);
  const src = getCharacterHeroImageUrl(characterId);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const lightbox =
    open ? (
      <div
        className="gallery-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Full size portrait"
        onClick={() => setOpen(false)}
      >
        <img
          className="gallery-lightbox-image"
          src={src}
          alt={alt}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    ) : null;

  return (
    <>
      <div className="hero-banner-image">
        <button
          type="button"
          className="hero-banner-image-button"
          onClick={() => setOpen(true)}
          aria-label={`View full size: ${alt}`}
        >
          <img src={src} alt={alt} />
        </button>
      </div>
      {typeof document !== 'undefined' && lightbox ? createPortal(lightbox, document.body) : null}
    </>
  );
}
