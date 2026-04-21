import { useEffect, useState } from 'react';
import '../styles/Gallery.css';
import galleryTitleLogo from '../assets/PageTitles/GalleryTitleLogo.png';
import mainGalleryData from '../data/mainGallery.json';

const otherImageUrlByFile = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/otherImages/*.png', {
      eager: true,
      query: '?url',
      import: 'default',
    })
  ).map(([path, url]) => [path.split('/').pop(), url])
);

const galleryItems = mainGalleryData.gallery.map((item) => {
  if (item.src.startsWith('http://') || item.src.startsWith('https://')) {
    return { img: item.src, alt: item.alt };
  }
  const file = item.src.replace(/^.*\//, '');
  const img = otherImageUrlByFile[file];
  if (img == null) {
    throw new Error(`Gallery: missing asset otherImages/${file}`);
  }
  return { img, alt: item.alt };
});

const ITEMS_PER_PAGE = 9;

function Gallery() {
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE) || 1;
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
      if (e.key === 'ArrowRight')
        setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  const goLightboxPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
  const goLightboxNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));

  return (
    <div className="gallery-page">
      <div className="gallery-page-inner">
        <img
          src={galleryTitleLogo}
          alt="Gallery"
          className="gallery-page-title-image"
        />
        <div className="gallery-grid gallery-page-grid">
          {visibleItems.map((item, index) => (
            <div key={start + index} className="gallery-grid-item gallery-page-grid-item">
              <button
                type="button"
                className="gallery-page-thumb-btn"
                onClick={() => setActiveIndex(start + index)}
                aria-label={`Open image: ${item.alt}`}
              >
                <img src={item.img} alt={item.alt} />
              </button>
            </div>
          ))}
        </div>
        <div className="gallery-page-pagination">
          <button
            type="button"
            className="gallery-page-nav-btn"
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous page of photos"
          >
            ◀
          </button>
          <span className="gallery-page-page-info">
            {page + 1} / {totalPages}
          </span>
          <button
            type="button"
            className="gallery-page-nav-btn"
            onClick={goNext}
            disabled={page >= totalPages - 1}
            aria-label="Next page of photos"
          >
            ▶
          </button>
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
            src={galleryItems[activeIndex]?.img}
            alt={galleryItems[activeIndex]?.alt ?? 'Gallery image'}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="gallery-lightbox-controls" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox-arrow"
              onClick={goLightboxPrev}
              aria-label="Previous image"
            >
              ◀
            </button>
            <button
              type="button"
              className="gallery-lightbox-arrow"
              onClick={goLightboxNext}
              aria-label="Next image"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
