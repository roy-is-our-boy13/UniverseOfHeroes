import React from 'react';
import '../App.css';
import cashCircuits from '../assets/Comics/Cash & Circuits_ Bank Heist Gone Rogue.pdf';
import shadowBlade from '../assets/Comics/Shadow Blade_ Ninja Hunter.pdf';
import brokenBadge from '../assets/Comics/Shadows of the Broken Badge.pdf';

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
    </section>
  );
}

export default Comics;
