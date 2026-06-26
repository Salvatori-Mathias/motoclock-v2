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
  <li className="menu-item" onClick={() => { onNavigate('planning'); setIsMenuOpen(false); }}>Line-up</li>
  <li className="menu-item" onClick={() => { onNavigate('map'); setIsMenuOpen(false); }}>Plan du Site</li>
  <li className="menu-item" onClick={() => { onNavigate('kit'); setIsMenuOpen(false); }}>Survival-Kit</li>
  <li className="menu-item" onClick={() => { onNavigate('securite'); setIsMenuOpen(false); }}>Objets autorisés/ interdis</li>
</ul>
    </nav>
  );
};