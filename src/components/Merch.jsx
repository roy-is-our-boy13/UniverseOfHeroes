import React, { useMemo, useState } from 'react';
import '../App.css';
import merchItems from '../data/merchItems.json';

function Merch() {
  const menuItems = ['Men', 'Women', 'Kids', 'Toys', 'Games', 'Accessories'];
  const [activeMenu, setActiveMenu] = useState(null);

  const visibleItems = useMemo(() => {
    if (activeMenu === 'Toys') {
      return merchItems.filter((item) => item.tag === 'Figure');
    }
    return merchItems;
  }, [activeMenu]);

  return (
    <section className="merch-page">
      <header className="merch-top-nav">
        <nav aria-label="Merch categories" className="merch-top-nav-inner">
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
      </header>

      <div className="merch-main">
        <section className="merch-products-row" aria-label="Featured merch">
          {visibleItems.length === 0 ? (
            <p className="merch-empty-category">No products in this category yet.</p>
          ) : (
            visibleItems.map((item) => (
              <article key={item.name} className="merch-product-card">
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
              </article>
            ))
          )}
        </section>
      </div>
    </section>
  );
}

export default Merch;
