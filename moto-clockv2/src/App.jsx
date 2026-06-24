  import { useState } from 'react';
  import { Header } from './components/Layout/Header';
  import { NavBar } from './components/Layout/NavBar';
  import {ConcertList} from './components/Concerts/ConcertList'
  import { MapViewer } from './components/Map/MapViewer';
  import { SurvivalKitList } from './components/Kit/SurvivalKitList';
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