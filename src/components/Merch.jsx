import React from 'react';
import '../App.css';

function Merch() {
  const menuItems = [
    'Cothes',
    'Toys',
  ];
  const merchItems = [
    { name: 'Spawn Power Meter T-Shirt Black MTS Exclusive', price: '$24.99 - $29.99', tag: 'Shirt' },
    { name: 'Spawn #12 Skull Orb T-Shirt Black MTS Exclusive', price: '$24.99 - $29.99', tag: 'Shirt' },
    { name: 'Spawn Negative Corner Box T-Shirt Black MTS Exclusive', price: '$24.99 - $29.99', tag: 'Shirt' },
    { name: 'Batwing (The Flash Movie) Gold Label Vehicle', price: '$179.99', oldPrice: '$249.99', tag: 'Vehicle' },
  ];

  return (
    <section className="merch-page">
      <aside className="merch-sidebar">
        <nav aria-label="Merch categories">
          <ul className="merch-menu-list">
            {menuItems.map((item) => (
              <li key={item} className="merch-menu-item">
                <a href="#" className="merch-menu-link">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="merch-main">
        <section className="merch-products-row" aria-label="Featured merch">
          {merchItems.map((item) => (
            <article key={item.name} className="merch-product-card">
              <div className="merch-product-image" aria-hidden>
                <span className="merch-product-image-label">{item.tag}</span>
              </div>
              <h3 className="merch-product-title">{item.name}</h3>
              <p className="merch-product-price">
                {item.price}
                {item.oldPrice && <span className="merch-product-price-old">{item.oldPrice}</span>}
              </p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Merch;
