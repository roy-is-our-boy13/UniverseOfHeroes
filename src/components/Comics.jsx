import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Comics.css';
import comicsLogoTitle from '../assets/PageTitles/ComicsLogoTitle.png';
import { seriesNameToSlug } from './Series/seriesSlugs.js';
import cashCircuits from '../assets/Comics/Cash & Circuits_ Bank Heist Gone Rogue.pdf';
import shadowBlade from '../assets/Comics/Shadow Blade_ Ninja Hunter.pdf';
import brokenBadge from '../assets/Comics/Shadows of the Broken Badge.pdf';

const SERIES_ALL = [
  'Fly Ron',
  'Wild Wrath',
  'Red Man',
  'Raven Van Guard',
  'Human Strike',
  'Crister',
  'Terra Warriors',
  'Morpho Man',
  'Flitter Mouse',
  'Refector',
  'Apollo Ray',
  'Jungle Titan',
  'Aegis Luminar',
  'Wild Reign',
  'The Messenger',
];

function seriesListLinkPath(name) {
  return `/comics/series/${seriesNameToSlug(name)}`;
}

function chunkIntoColumns(items, columnCount = 3) {
  const n = items.length;
  if (n === 0) return Array.from({ length: columnCount }, () => []);
  const base = Math.floor(n / columnCount);
  const remainder = n % columnCount;
  const sorted = [...items].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
  const cols = [];
  let start = 0;
  for (let c = 0; c < columnCount; c++) {
    const size = c < remainder ? base + 1 : base;
    cols.push(sorted.slice(start, start + size));
    start += size;
  }
  return cols;
}

function Comics() {
  const [seriesSearch, setSeriesSearch] = useState('');
  const [activeLetter, setActiveLetter] = useState('');

  const comicFiles = [
    {
      title: 'Cash & Circuits',
      subtitle: 'Bank Heist Gone Rogue',
      creators: 'Universe Of Heroes',
      file: cashCircuits
    },
    {
      title: 'Shadow Blade',
      subtitle: 'Ninja Hunter',
      creators: 'Universe Of Heroes',
      file: shadowBlade
    },
    {
      title: 'Shadows of the Broken Badge',
      subtitle: 'Issue #1',
      creators: 'Universe Of Heroes',
      file: brokenBadge
    }
  ];

  const filteredSeries = useMemo(() => {
    const query = seriesSearch.trim().toLowerCase();
    const afterSearch = !query ? SERIES_ALL : SERIES_ALL.filter((name) => name.toLowerCase().includes(query));

    if (!activeLetter) return afterSearch;
    if (activeLetter === '#') return afterSearch;

    return afterSearch.filter((name) => name.toUpperCase().startsWith(activeLetter));
  }, [seriesSearch, activeLetter]);

  const seriesColumns = useMemo(() => chunkIntoColumns(filteredSeries), [filteredSeries]);

  const alphabetChars = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), '1', '2', '3'];

  return (
    <section className="comics-page">
      <img
        src={comicsLogoTitle}
        alt="Universe Of Heroes Comics"
        className="comics-page-title-image"
      />

      <div className="comics-row">
        {comicFiles.map((comic, index) => (
          <article key={index} className="comic-card">
            <a
              href={comic.file}
              target="_blank"
              rel="noreferrer"
              className="comic-cover-link"
              aria-label={`Open ${comic.title} PDF`}
            >
              <iframe
                src={`${comic.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title={`${comic.title} preview`}
                className="comic-cover-preview"
              />
            </a>

            <h3 className="comic-title">
              {comic.title}
              <span className="comic-subtitle">{comic.subtitle}</span>
            </h3>
            <p className="comic-creators">{comic.creators}</p>

            <a href={comic.file} target="_blank" rel="noreferrer" className="comic-read-button">
              Read PDF
            </a>
          </article>
        ))}
      </div>

      <section className="comics-all-series" aria-labelledby="comics-all-series-heading">
        <div className="comics-all-series-inner">
          <div className="comics-series-index-card">
            <h3 className="comics-series-index-title">Series Index A-Z</h3>
            <label htmlFor="series-search-input" className="comics-series-search-label">
              Search All Series
            </label>
            <div className="comics-series-search-wrap">
              <span className="comics-series-search-icon" aria-hidden>
                🔍
              </span>
              <input
                id="series-search-input"
                type="text"
                className="comics-series-search-input"
                placeholder="Search"
                value={seriesSearch}
                onChange={(e) => setSeriesSearch(e.target.value)}
              />
            </div>
            <div className="comics-series-alpha-row" aria-hidden>
              <span className="comics-series-alpha-nav is-disabled"></span>
              {alphabetChars.map((ch) => (
                <button
                  key={ch}
                  type="button"
                  className={`comics-series-alpha-char${activeLetter === ch ? ' is-active' : ''}`}
                  onClick={() => setActiveLetter((prev) => (prev === ch ? '' : ch))}
                >
                  {ch}
                </button>
              ))}
              <span className="comics-series-alpha-nav is-disabled"></span>
            </div>
          </div>

          <div className="comics-all-series-header">
            <span className="comics-all-series-accent" aria-hidden="true" />
            <h3 id="comics-all-series-heading" className="comics-all-series-title">
              All Series
            </h3>
          </div>
          <div className="comics-series-columns">
            {seriesColumns.map((column, colIndex) => (
              <ul key={colIndex} className="comics-series-column">
                {column.map((name) => (
                  <li key={name}>
                    <Link to={seriesListLinkPath(name)} className="comics-series-link">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          {filteredSeries.length === 0 && (
            <p className="comics-series-empty">No series match your search.</p>
          )}
        </div>
      </section>
    </section>
  );
}

export default Comics;
