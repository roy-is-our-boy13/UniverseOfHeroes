import { useEffect, useState } from 'react';
import '../styles/Gallery.css';
import '../styles/Stages.css';
import flyRonBackground from '../assets/Wallpaper/FlyRonBackground.png';
import wildWrathWallpaper from '../assets/Wallpaper/WildWrathWallpaper.png';
import morphoManBackground from '../assets/Wallpaper/MorphoManBackground.png';
import cristerBackground from '../assets/Wallpaper/CristerBackground.png';
import stageIcon from '../assets/imageIcon/Stage.png';

const stageItems = [
  { img: flyRonBackground },
  { img: wildWrathWallpaper },
  { img: morphoManBackground },
  { img: cristerBackground },
  { img: stageIcon },
];

const ITEMS_PER_PAGE = 9;

function Stages() {
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const totalPages = Math.ceil(stageItems.length / ITEMS_PER_PAGE) || 1;
  const start = page * ITEMS_PER_PAGE;
  const visibleItems = stageItems.slice(start, start + ITEMS_PER_PAGE);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft')
        setActiveIndex((i) => (i === null ? null : (i - 1 + stageItems.length) % stageItems.length));
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? null : (i + 1) % stageItems.length));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  const goLightboxPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + stageItems.length) % stageItems.length));
  const goLightboxNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % stageItems.length));

  return (
    <div className="column-gallery-wrapper">
      <h2 className="column-gallery-title">Stages</h2>
      <div className="column-gallery">
        {visibleItems.map((item, index) => (
          <div key={start + index} className="column-gallery-item">
            <button
              type="button"
              className="column-gallery-image-button"
              onClick={() => setActiveIndex(start + index)}
              aria-label="Open stage image"
            >
              <img src={item.img} alt="Stage" />
            </button>
          </div>
        ))}
      </div>
      <div className="column-gallery-arrows">
        <button
          className="arrow left"
          onClick={goPrev}
          disabled={page === 0}
          aria-label="Previous page"
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
          aria-label="Next page"
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
            src={stageItems[activeIndex]?.img}
            alt="Enlarged stage"
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

export default Stages;
