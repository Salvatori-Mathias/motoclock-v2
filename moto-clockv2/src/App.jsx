  import { useState } from 'react';
  import { Header } from './components/layout/Header';
  import { NavBar } from './components/layout/NavBar';
  import {ConcertList} from './components/concerts/ConcertList'
  import { MapViewer } from './components/map/MapViewer';
  import { SurvivalKitList } from './components/kit/SurvivalKitList';
  import {SecurityInfo} from './components/SecurityInfo';

  function App() {
    const [currentScreen, setCurrentScreen] = useState('planning');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (screen) => {
    setCurrentScreen(screen);
    setIsMenuOpen(false);
  };

  return (
      <div className="app-container">
      
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <NavBar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen}
          onNavigate={handleNavigate} 
        />
        
      
        <div 
          className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <main>
          {currentScreen === 'planning' && <ConcertList />}
          {currentScreen === 'map' && <MapViewer />}
          {currentScreen === 'kit' && <SurvivalKitList />}
           {currentScreen === 'securite' && <SecurityInfo />}
        </main>
      </div>
    );
  }

  export default App;