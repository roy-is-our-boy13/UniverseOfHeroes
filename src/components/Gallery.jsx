import { useEffect, useState } from 'react';
import '../App.css';
import apollorayart from '../assets/otherImages/ApolloRayArt.png';
import cristerart from '../assets/otherImages/CristerArt.png';
import flyronart from '../assets/otherImages/FlyRonArt.png';

const galleryItems = [
  { img: apollorayart },
  { img: cristerart },
  { img: flyronart },
];

const ITEMS_PER_PAGE = 9;

function Gallery() {
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE;
  const visibleItems = galleryItems.slice(start, start + ITEMS_PER_PAGE);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft')
        setActiveIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  const goLightboxPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
  const goLightboxNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));

  return (
    <div className="column-gallery-wrapper">
      <h2 className="column-gallery-title">Gallery</h2>
      <div className="column-gallery">
        {visibleItems.map((item, index) => (
          <div key={start + index} className="column-gallery-item">
            <button
              type="button"
              className="column-gallery-image-button"
              onClick={() => setActiveIndex(start + index)}
              aria-label="Open image"
            >
              <img src={item.img} alt="Gallery item" />
            </button>
          </div>
        ))}
      </div>
      <div className="column-gallery-arrows">
        <button
          className="arrow left"
          onClick={goPrev}
          disabled={page === 0}
          aria-label="Previous photos"
        >
          ◀
        </button>
        <span className="column-gallery-page-info">
          {page + 1} / {totalPages}
        </span>
        <button
          className="arrow right"
          onClick={goNext}
          disabled={page >= totalPages - 1}
          aria-label="Next photos"
        >
          ▶
        </button>
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
            src={galleryItems[activeIndex]?.img}
            alt="Enlarged gallery item"
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
      )}
    </div>
  );
}

export default Gallery;