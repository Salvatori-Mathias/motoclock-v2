export const NavBar = ({ isMenuOpen, setIsMenuOpen, onNavigate }) => {
  return (
    <nav className={`nav-bar ${isMenuOpen ? 'active' : ''}`}>
      <button 
        className="close-btn" 
        onClick={() => setIsMenuOpen(false)}
      >
        ×
      </button>

      <ul className="menu-links">
        <li onClick={() => { onNavigate('planning'); setIsMenuOpen(false); }}>Line-up</li>
        <li onClick={() => { onNavigate('map'); setIsMenuOpen(false); }}>Plan du Site</li>
        <li onClick={() => { onNavigate('kit'); setIsMenuOpen(false); }}>Survival-Kit</li>
          <li onClick={() => { onNavigate('securite'); setIsMenuOpen(false); }}>Objets autorisés/ interdis</li>
      </ul>
    </nav>
  );
};