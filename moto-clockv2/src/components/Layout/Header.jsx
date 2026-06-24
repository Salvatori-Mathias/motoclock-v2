export const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src="/assets/logo.webp" alt="MOTO'CLOCK" className="logo-img" />
        <h1>MOTO'CLOCK</h1>
      </div>

      {/* Le bouton ne s'affiche que si isMenuOpen est FAUX */}
      {!isMenuOpen && (
        <button 
          className="burger-btn" 
          onClick={() => setIsMenuOpen(true)} 
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      )}
    </header>
  );
};