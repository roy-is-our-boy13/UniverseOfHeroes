import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../styles/SeriesDetail.css';
import { getSeriesBySlug } from './seriesData.js';

function isPdfHref(href) {
  return typeof href === 'string' && href.toLowerCase().endsWith('.pdf');
}

export default function SeriesDetail() {
  const { seriesSlug } = useParams();
  const series = getSeriesBySlug(seriesSlug);
  const [factionTab, setFactionTab] = useState('allies');

  if (!series) {
    return (
      <section className="series-detail-page" aria-labelledby="series-missing-heading">
        <div className="series-detail-inner">
          <h1 id="series-missing-heading" className="series-detail-title">
            Series not found
          </h1>
          <p className="series-detail-description">
            That series does not exist or the link may be out of date.
          </p>
          <Link to="/comics" className="series-detail-back-link">
            Back to Comics
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="series-detail-page">
      {series.showHero !== false && (
        <div className="series-detail-hero">
          <img
            src={series.heroImage}
            alt={series.title}
            className="series-detail-hero-img"
            style={series.heroObjectFit ? { objectFit: series.heroObjectFit } : undefined}
            decoding="async"
          />
        </div>
      )}

      <div className="series-detail-inner">
        <Link to="/comics" className="series-detail-back-link">
          ← Comics
        </Link>

        <h1 className="series-detail-title">{series.title}</h1>

        <p className="series-detail-description">{series.description}</p>

        <div className="series-detail-main">
          <section className="series-faction-tabs" aria-label="Alies and Villans">
            <div className="series-faction-tablist" role="tablist">
              <button
                type="button"
                role="tab"
                id="series-tab-alies"
                aria-selected={factionTab === 'allies'}
                aria-controls="series-panel-alies"
                className={`series-faction-tab${factionTab === 'allies' ? ' is-active' : ''}`}
                onClick={() => setFactionTab('allies')}
              >
                Alies
              </button>
              <button
                type="button"
                role="tab"
                id="series-tab-villans"
                aria-selected={factionTab === 'villains'}
                aria-controls="series-panel-villans"
                className={`series-faction-tab${factionTab === 'villains' ? ' is-active' : ''}`}
                onClick={() => setFactionTab('villains')}
              >
                Villans
              </button>
            </div>

            <div
              id="series-panel-alies"
              role="tabpanel"
              aria-labelledby="series-tab-alies"
              hidden={factionTab !== 'allies'}
              className="series-faction-panel"
            >
              {series.alliesLinks?.length ? (
                <ul className="series-faction-links">
                  {series.alliesLinks.map(({ name, path }) => (
                    <li key={path}>
                      <Link to={path} className="series-faction-character-link">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="series-faction-panel-text">
                  {series.alliesText ?? 'Ally profiles and team-ups for this series will appear here.'}
                </p>
              )}
            </div>
            <div
              id="series-panel-villans"
              role="tabpanel"
              aria-labelledby="series-tab-villans"
              hidden={factionTab !== 'villains'}
              className="series-faction-panel"
            >
              {series.villainsLinks?.length ? (
                <ul className="series-faction-links">
                  {series.villainsLinks.map(({ name, path }) => (
                    <li key={path}>
                      <Link to={path} className="series-faction-character-link">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="series-faction-panel-text">
                  {series.villainsText ?? 'Villains and rival factions for this series will appear here.'}
                </p>
              )}
            </div>
          </section>

          <h2 className="series-detail-section-heading">Comic Series</h2>

          <div className="series-editions-grid">
            {series.collectedEditions.map((item) => {
              const cover = (
                <img
                  src={item.coverImage}
                  alt=""
                  className="series-edition-cover-img"
                  decoding="async"
                />
              );

              const pdf = isPdfHref(item.href);
              const coverInner = item.href ? (
                <a
                  href={item.href}
                  className="series-edition-cover-frame series-edition-cover--linked"
                  {...(pdf ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {cover}
                </a>
              ) : (
                <div className="series-edition-cover-frame">{cover}</div>
              );

              const titleEl = item.href ? (
                <a
                  href={item.href}
                  className="series-edition-title"
                  {...(pdf ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {item.title}
                </a>
              ) : (
                <span className="series-edition-title series-edition-title--static">{item.title}</span>
              );

              return (
                <div key={item.title} className="series-edition-card">
                  {coverInner}
                  {titleEl}
                  <p className="series-edition-date">{item.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
