import React, { useEffect, useMemo, useState } from 'react';
import '../App.css';
import merchItems from '../data/merchItems.json';

/** Shown as an extra gallery slide when `morePhotos` is true on an item (see `getPdpImages`). */
const MORE_PHOTOS_IMAGE_URL =
  'https://res.cloudinary.com/dlwqeqsev/image/upload/v1774381255/samples/food/spices.jpg';

function getPdpImages(item) {
  if (item?.imageUrls?.length) {
    return item.imageUrls.filter(Boolean);
  }
  const primary = item?.imageUrl;
  const urls = primary ? [primary] : [];
  if (item?.morePhotos) {
    if (MORE_PHOTOS_IMAGE_URL !== primary) {
      urls.push(MORE_PHOTOS_IMAGE_URL);
    }
  }
  return urls;
}

function Merch() {
  const menuItems = ['Men', 'Women', 'Kids', 'Toys', 'Games', 'Accessories'];
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [pdpImageIndex, setPdpImageIndex] = useState(0);

  useEffect(() => {
    setPdpImageIndex(0);
  }, [selectedItem]);

  useEffect(() => {
    if (!selectedItem) return;
    const images = getPdpImages(selectedItem);
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedItem(null);
      if (images.length <= 1) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setPdpImageIndex((i) => (i + 1) % images.length);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setPdpImageIndex((i) => (i - 1 + images.length) % images.length);
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedItem]);

  const visibleItems = useMemo(() => {
    if (activeMenu === 'Men') {
      return merchItems.filter((item) => item.tag === 'Shirt');
    }
    if (activeMenu === 'Toys') {
      return merchItems.filter((item) => item.tag === 'Figure');
    }
    return merchItems;
  }, [activeMenu]);

  const pdpImages = useMemo(
    () => (selectedItem ? getPdpImages(selectedItem) : []),
    [selectedItem],
  );
  const pdpImageSrc = pdpImages[pdpImageIndex] ?? pdpImages[0];
  const pdpHasMultipleImages = pdpImages.length > 1;

  return (
    <section className="merch-page">
      <header className="merch-top-nav">
        <div className="merch-top-nav-inner">
          <div className="merch-top-nav-row">
            <nav aria-label="Merch categories" className="merch-top-nav-categories">
              <ul className="merch-top-menu-list">
                {menuItems.map((item) => (
                  <li key={item} className="merch-top-menu-item">
                    <button
                      type="button"
                      className={`merch-top-menu-link${activeMenu === item ? ' merch-top-menu-link--active' : ''}`}
                      onClick={() => setActiveMenu(item)}
                      aria-current={activeMenu === item ? 'true' : undefined}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <button type="button" className="merch-top-cart-btn" aria-label="Shopping cart">
              <svg className="merch-top-cart-icon" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-12.83-2h12.35c.75 0 1.41-.42 1.73-1.06l3.57-7.01a1 1 0 0 0-.05-.96L20.48 2H4.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.13 4h12l1.64 3H7.4L6.13 4z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="merch-main">
        <section className="merch-products-row" aria-label="Featured merch">
          {visibleItems.length === 0 ? (
            <p className="merch-empty-category">No products in this category yet.</p>
          ) : (
            visibleItems.map((item) => (
              <article key={item.name} className="merch-product-card">
                <button
                  type="button"
                  className="merch-product-card-button"
                  onClick={() => setSelectedItem(item)}
                  aria-haspopup="dialog"
                  aria-label={`View details: ${item.name}`}
                >
                  <div
                    className={`merch-product-image${item.imageUrl ? ' merch-product-image--photo' : ''}`}
                    aria-hidden
                  >
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="merch-product-image-img"
                        loading="lazy"
                      />
                    )}
                    <span className="merch-product-image-label">{item.tag}</span>
                  </div>
                  <h3 className="merch-product-title">{item.name}</h3>
                  <p className="merch-product-price">
                    {item.price}
                    {item.oldPrice && <span className="merch-product-price-old">{item.oldPrice}</span>}
                  </p>
                </button>
              </article>
            ))
          )}
        </section>
      </div>

      {selectedItem && (
        <div
          className="merch-pdp-overlay"
          role="presentation"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="merch-pdp"
            role="dialog"
            aria-modal="true"
            aria-labelledby="merch-pdp-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="merch-pdp-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close product details"
            >
              ×
            </button>

            <div className="merch-pdp-layout">
              <div className="merch-pdp-image-column">
                <div className="merch-pdp-image-frame">
                  <div className="merch-pdp-image-actions">
                    <button type="button" className="merch-pdp-icon-btn" aria-label="Share product">
                      <svg className="merch-pdp-icon-svg" viewBox="0 0 24 24" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92z"
                        />
                      </svg>
                    </button>
                    <button type="button" className="merch-pdp-icon-btn" aria-label="Add to wishlist">
                      <svg className="merch-pdp-icon-svg" viewBox="0 0 24 24" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                        />
                      </svg>
                    </button>
                    <button type="button" className="merch-pdp-icon-btn" aria-label="Zoom image">
                      <svg className="merch-pdp-icon-svg" viewBox="0 0 24 24" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm4.5-4h-2V7.5H10V6h4V2h1.5v4H20v1.5h-6z"
                        />
                      </svg>
                    </button>
                  </div>
                  {pdpImageSrc ? (
                    <img
                      src={pdpImageSrc}
                      alt=""
                      className="merch-pdp-image"
                    />
                  ) : (
                    <div className="merch-pdp-image-placeholder" aria-hidden />
                  )}
                  {pdpHasMultipleImages && (
                    <>
                      <button
                        type="button"
                        className="merch-pdp-carousel-prev"
                        onClick={() =>
                          setPdpImageIndex((i) => (i - 1 + pdpImages.length) % pdpImages.length)
                        }
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        className="merch-pdp-carousel-next"
                        onClick={() =>
                          setPdpImageIndex((i) => (i + 1) % pdpImages.length)
                        }
                        aria-label="Next image"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="merch-pdp-title-column">
                <h2 id="merch-pdp-title" className="merch-pdp-title">
                  {selectedItem.name}
                </h2>
                <p className="merch-pdp-tag">{selectedItem.tag}</p>
              </div>

              <aside className="merch-pdp-sidebar" aria-label="Purchase options">
                <p className="merch-pdp-sidebar-price">
                  {selectedItem.price}
                  {selectedItem.oldPrice && (
                    <span className="merch-pdp-sidebar-price-old">{selectedItem.oldPrice}</span>
                  )}
                </p>
                <button type="button" className="merch-pdp-add-cart">
                  Add to cart
                </button>
              </aside>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Merch;
