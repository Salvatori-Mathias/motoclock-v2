import { useState } from 'react';

// --- Icônes ---
const CampingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M56.886 34.956v-2.273c1.019.292 2.151.732 2.151.732c2.516 0 3.654-1.822 2.528-4.049l-1.592-3.15c.787-.566.996-1.592.4-2.771l-1.846-3.651c.873-.344 1.18-1.229.653-2.271l-2.349-4.646c-.673-1.336-1.775-1.336-2.45 0l-2.35 4.646c-.526 1.041-.22 1.928.654 2.271l-1.846 3.651c-.596 1.18-.385 2.205.399 2.771l-1.591 3.15c-1.126 2.227.012 4.049 2.527 4.049c0 0 1.134-.44 2.152-.732v1.934a28.354 28.354 0 0 1-5.273-1.518c-2.302-.915-6.169-2.443-9.557-2.467c-.025 0-12.577-12.092-12.577-12.092L11.908 4.749L2 10.886v22.652c3.18 1.174 10.812 2.842 17.85 2.842c3.809 0 7.549-.496 11.117-1.477c.889-.245 1.759-.566 2.681-.905c1.857-.685 3.778-1.392 5.776-1.392h.064c3.071.021 6.725 1.473 8.906 2.339c1.702.677 3.672 1.3 5.936 1.655v3.904h2.556V36.85c1.584.086 3.277.045 5.114-.213V34.83a23.262 23.262 0 0 1-5.114.126M16.883 14.433v2.73l-2.688-1.461l-3.08 1.622l-.929-2.87l-4.19 1.559l1.097-3.152l-2.828-.987l7.516-4.723l8.423 7.929l-3.321-.647" fill="currentColor"/>
    <path d="M22 9.898h6.537A4.01 4.01 0 0 0 32 11.873h4c2.205 0 4-1.771 4-3.949c0-2.177-1.795-3.949-4-3.949h-.537A4.01 4.01 0 0 0 32 2H22c-2.205 0-4 1.772-4 3.949c0 2.178 1.795 3.949 4 3.949m0-5.923h10c1.104 0 2 .884 2 1.975h2c1.104 0 2 .884 2 1.975c0 1.091-.896 1.975-2 1.975h-4c-1.104 0-2-.884-2-1.975h-8c-1.104 0-2-.884-2-1.975c0 1.091.896-1.975 2-1.975" fill="currentColor"/>
    <path d="M32 15.822c0 2.178 1.795 3.949 4 3.949h4c2.205 0 4-1.771 4-3.949c0-.687-.194-1.321-.507-1.884a3.998 3.998 0 0 0 2.507.896h4c2.205 0 4-1.771 4-3.949c0-2.177-1.795-3.949-4-3.949h-4c-2.205 0-4 1.772-4 3.949c0 .686.194 1.322.507 1.885A3.993 3.993 0 0 0 40 11.873h-4c-2.205 0-4 1.773-4 3.949m14-6.911h4c1.104 0 2 .884 2 1.975c0 1.091-.896 1.975-2 1.975h-4c-1.104 0-2-.884-2-1.975c0-1.091.896-1.975 2-1.975m-10 4.937h4c1.104 0 2 .884 2 1.975s-.896 1.975-2 1.975h-4c-1.104 0-2-.884-2-1.975s.896-1.975 2-1.975M18.875 41.492a3.54 3.54 0 0 0-1.047.175c-.725-2.391-2.851-4.124-5.36-4.124a5.42 5.42 0 0 0-3.474 1.272c-.509-.768-1.349-1.272-2.307-1.272c-1.555 0-2.813 1.325-2.813 2.962c0 .49.124.944.322 1.351C2.903 42.479 2 43.846 2 45.442c0 2.18 1.679 3.948 3.751 3.948c1.204 0 2.263-.608 2.949-1.536c.997.951 2.316 1.536 3.768 1.536a5.44 5.44 0 0 0 3.592-1.366c.688.83 1.688 1.366 2.815 1.366c2.071 0 3.75-1.769 3.75-3.949s-1.679-3.949-3.75-3.949m11.833-4.69l-7.313 14.256l1.278 6.514L37.871 62l15.601-2.707l1.489-8.163l-6.976-14.328H30.708m-3.323 20.115l-1.405-.471l-1.015-5.172l5.574-10.863c-1.354 5.297-4.114 13.406-4.114 13.406l.96 3.1m9.877 3.314l-3.891-1.305l1.121-4.358c-1.512-3.349-2.582-10.839-3.054-14.669l2.603 5.605l3.769 8.113l-.548 6.614m14.919-2.217l-13.423 2.329l.515-6.209l.76-.109l13.225-1.908l-1.077 5.897M39.84 52.556l-.818.117l-3.915-8.429l-2.769-5.961h14.704l6.02 12.364l-13.222 1.909" fill="currentColor"/>
  </svg>
);

const ConcertIcon = () => (
  <svg width="32" height="32" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M69.66 119.47s-1.62.82-4.56.04l-9.24-2.13l-.2-61.49L76.99 28.5l13.69 4.09l4.8 9.95l-1.96 56l-23.86 20.93z" fill="#2f2f2f"/>
    <path d="M125.97 40.64c.01-.01.02 0 .03-.02c0 0-4.88-27.14-29.25-28.16c-5.08-.21-8.94.61-11.87 1.8C82.13 7.2 73.72 1.96 66.33 2.62c-.59.05-1.17.14-1.74.27c-3.02.68-7.1 2.33-9.47 4.36c-1.54 1.32-2.98 2.85-4.07 4.56c-.07.11-.23.4-.42.75c-4.34-.73-8.67-1.09-12.86-.84c-5.11.31-11.03 1.74-15.48 4.38c-5.1 3.03-10.66 8.22-13.74 13.33C2.34 39.76 1.11 52.63.7 64.49c-.35 9.76-.29 19.47.64 29.2c.36 3.73.45 7.73 1.9 11.25c2.33 5.7 8.68 8.11 13.95 10.26c7.07 2.88 14.42 4.86 21.68 7.2c4.78 1.55 9.64 3.45 14.75 2.95c2.03-.2 3.98-.96 5.34-2.57c3.08-3.63 1.68-10.28 1.55-14.65c-.18-5.79-.38-11.59-.27-17.38c.2-11.63 1.5-23.39 5.86-34.24c1.95-4.84 4.64-9.37 8.03-13.31c2.88-3.36 8.28-6.71 12.81-6.73c7.07-.03 6.01 7.84 5.52 14.07l-9.99 3.72s-10.37 3.03-13.4 8.29c-3.08 5.33-3.08 15.62-3.08 15.62s.01 32.92.01 37.23c0 6.16 5.12 3.61 5.12 3.61l27.8-13.84c15.43-6.77 24.57-23.82 27.5-39.71c1.23-6.59 1.81-16.29-.45-24.82zm-27.06 7.5c.07-5.73-.43-11.48-3.4-16.44l.07-.16c.28-1.44 1.05-2.36 2.05-2.97c4.72 2.22 8.8 4.79 10.77 9.73c3.29 8.24 2.67 17.77 1.96 22.84c-1.15 8.23-5.6 18.14-11.43 24.39l-.02-37.39z" fill="#ed6c30"/>
    <path d="M77.16 20.31c-2.9-1.05-5.91-2.12-8.96-3.13c1-2.13 3-4.19 5.36-4.4c3.11-.27 4.91 2 6.2 4.57c-1.42 1.23-2.24 2.37-2.6 2.96zm44.96 44.98c-2.26 13.53-10.07 27.26-23.19 34.68v-8.71c8.73-6.94 13.65-19.01 15.25-28.92c1.08-6.71.75-14.12-.67-20.8c-.1-.45-.21-.89-.34-1.33c-1.31-4.55-4-8.15-7.84-10.78c-.13-.21-.39-.41-.45-.61c-.43-1.36 2.76-.86 4.64-.48h.01c.21.05.4.08.57.12c1.57.42 3.03 1.15 4.48 1.88c2.47 1.78 3.9 3.4 4.12 3.67c5.6 8.54 5.02 21.72 3.42 31.28zM13.4 102.98c-.44.73-1.12 1.23-2.12 1.28c-4.34.19-4.47-5.88-2.87-8.59c.8-1.35 2.71-1.78 3.86-.58c1.53 1.6 2.29 5.95 1.13 7.89zm36.49 12.42c-.48.8-1.22 1.34-2.31 1.39c-4.73.21-4.86-6.4-3.12-9.34c.88-1.47 2.95-1.94 4.19-.64c1.67 1.75 2.5 6.49 1.24 8.59zM28.68 26.31l-6.94-2.01a39.049 39.049 0 0 0-4.73 4.52l7.06 2.04c1.65-2.06 3.27-3.54 4.61-4.55zm-8 9.81L13.36 34c-3.34 6.13-4.88 13.34-5.63 20.79l7.88 2.28c.44-9.27 2.51-16.06 5.07-20.95z" fill="#fff"/>
  </svg>
);

export const SecurityInfo = () => {
  const [activeTabCamping, setActiveTabCamping] = useState('allowed');
  const [activeTabConcert, setActiveTabConcert] = useState('allowed');

  return (
    <section className="security-section">
      <h2>Infos Pratiques</h2>

      {/* SECTION CAMPING */}
      <h3 className="section-title"><CampingIcon /> Camping</h3>
      <div className="tabs-container">
        <div className="tab-buttons">
          <button className={activeTabCamping === 'allowed' ? 'active' : ''} onClick={() => setActiveTabCamping('allowed')}>✅ Autorisés</button>
          <button className={activeTabCamping === 'forbidden' ? 'active' : ''} onClick={() => setActiveTabCamping('forbidden')}>🚫 Interdits</button>
        </div>
        <div className="tab-content">
          {activeTabCamping === 'allowed' ? (
            <ul>
              <li>Tentes, Matelas gonflables, Sacs de couchage</li>
              <li>Glacières, Chaises de camping</li>
              <li>Lampes torches et lanternes (non inflammables)</li>
              <li>Couverts en plastique</li>
              <li>Canettes, Gourdes</li>
              <li>Bouteilles en plastique (sans alcool)</li>
              <li>Caddies et chariots en toile</li>
              <li>Nourriture</li>
            </ul>
          ) : (
            <ul>
              <li>Armes, Produits illicites ou dangereux</li>
              <li>Feux d'artifice, explosifs, objets pyrotechniques</li>
              <li>Barbecue, grills, réchauds à gaz, bouteilles de gaz</li>
              <li>Générateurs, Enceintes, Mégaphones</li>
              <li>Lasers, Drones, Objets tranchants, Rasoirs</li>
              <li>Vélos, scooters, Casques</li>
              <li>Outils (sauf maillets plastiques), Contenants en verre</li>
              <li>Hampes rigides, Banderoles, Bougies, lampions</li>
              <li>Aérosols, Selfie sticks, Instruments de musique</li>
              <li>Appareils photo (sauf accréditation presse)</li>
              <li>Symboles NSBM</li>
              <li><strong>Animaux interdits sur tout le site</strong></li>
            </ul>
          )}
        </div>
      </div>

      {/* SECTION CONCERT */}
      <h3 className="section-title"><ConcertIcon /> Site Concert</h3>
      <div className="tabs-container">
        <div className="tab-buttons">
          <button className={activeTabConcert === 'allowed' ? 'active' : ''} onClick={() => setActiveTabConcert('allowed')}>✅ Autorisés</button>
          <button className={activeTabConcert === 'forbidden' ? 'active' : ''} onClick={() => setActiveTabConcert('forbidden')}>🚫 Interdits</button>
        </div>
        <div className="tab-content">
          {activeTabConcert === 'allowed' ? (
            <ul>
              <li>Petits sacs à dos et sacs à main</li>
              <li>Crèmes solaires (lotion uniquement)</li>
              <li>Déodorants à bille</li>
              <li>Appareils photo compacts (sans objectifs amovibles)</li>
              <li>Parapluies compacts (sans pointe)</li>
              <li>Power banks</li>
              <li>Gourdes</li>
            </ul>
          ) : (
            <ul>
              <li>Objets dangereux (tranchants, contondants, armes, pyrotechnie, etc.)</li>
              <li>Outils, Marteaux, Masses, Maillets, Générateurs</li>
              <li>Barbecue, grills, réchauds à gaz, bouteilles de gaz</li>
              <li>Lasers, Drones, Rasoirs, Casques</li>
              <li>Contenants en verre, Bouteilles, Alcool, Nourriture</li>
              <li>Hampes rigides, Banderoles, Bougies, lampions, Mégaphones</li>
              <li>Aérosols, Selfie sticks, Instruments de musique</li>
              <li>Lamzacs (gonflables encombrant), Parapluies avec pointe</li>
              <li>Trépieds (max 60x10cm)</li>
              <li>Appareils photo (sauf accréditation), Symboles NSBM</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};