export const MapViewer = () => {
  return (
    <section className="map-section">
      <h2>Plan du Festival</h2>
      <div className="map-container">
        {/* Assure-toi que le fichier est bien dans public/images/map.png */}
        <img 
          src="/assets/plan.webp" 
          alt="Plan du festival" 
          className="map-image"
        />
      </div>
    </section>
  );
};