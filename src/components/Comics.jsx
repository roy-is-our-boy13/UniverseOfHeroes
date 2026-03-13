import React from 'react';
// Import the PDF files from your assets folder
import cashCircuits from '../assets/Comics/Cash & Circuits_ Bank Heist Gone Rogue.pdf';
import shadowBlade from '../assets/Comics/Shadow Blade_ Ninja Hunter.pdf';
import brokenBadge from '../assets/Comics/Shadows of the Broken Badge.pdf';

function Comics() {
    const comicFiles = [
        { name: "Cash & Circuits: Bank Heist Gone Rogue", file: cashCircuits },
        { name: "Shadow Blade: Ninja Hunter", file: shadowBlade },
        { name: "Shadows of the Broken Badge", file: brokenBadge }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2>Universe Of Heroes Comics</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {
                    comicFiles.map((comic, index) => (
                    <li key={index} style={{ marginBottom: '15px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>{comic.name}</span>
                            <a 
                                href={comic.file} 
                                target="_blank" 
                                rel="noreferrer"
                                style={{ textDecoration: 'none', background: '#007bff', color: 'white', padding: '5px 15px', borderRadius: '4px' }}
                            >
                                Open PDF
                            </a>
                        </div>
                    </li>))
                }
            </ul>
        </div>
    );
}

export default Comics;
