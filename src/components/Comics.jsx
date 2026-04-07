import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
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
];

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

/** Three columns: titles in A–Z order, split evenly top-to-bottom per column. */
const SERIES_COLUMNS = chunkIntoColumns(SERIES_ALL);

function Comics() {
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

  return (
    <section className="comics-page">
      <h2 className="comics-page-title">Universe Of Heroes Comics</h2>

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
          <div className="comics-all-series-header">
            <span className="comics-all-series-accent" aria-hidden="true" />
            <h3 id="comics-all-series-heading" className="comics-all-series-title">
              All Series
            </h3>
          </div>
          <div className="comics-series-columns">
            {SERIES_COLUMNS.map((column, colIndex) => (
              <ul key={colIndex} className="comics-series-column">
                {column.map((name) => (
                  <li key={name}>
                    <Link to={`/comics/series/${seriesNameToSlug(name)}`} className="comics-series-link">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Comics;
