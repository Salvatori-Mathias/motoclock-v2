import { useState, useEffect } from 'react';
import { concerts } from '../../data/concerts';
import { FilterBar } from './FilterBar';
import { ConcertCard } from './ConcertCard';

export const ConcertList = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const saved = localStorage.getItem('myFavorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [, setTick] = useState(0);

  useEffect(() => {
    localStorage.setItem('myFavorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    const timer = setInterval(() => setTick(t => t + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  // Gestion de la vibration lors d'une nouvelle alerte
  const getSoonFavorites = () => {
    const now = new Date();
    return concerts.filter(c => {
      const startTime = c.time.split(' - ')[0]; 
      const [hours, minutes] = startTime.split('H').map(Number);
      const concertDate = new Date();
      concertDate.setHours(hours, minutes, 0, 0);
      const diffInMinutes = (concertDate - now) / 1000 / 60;
      return favoriteIds.includes(c.id) && diffInMinutes > 0 && diffInMinutes <= 30;
    });
  };

  const soonFavorites = getSoonFavorites();

  useEffect(() => {
    if (soonFavorites.length > 0 && "vibrate" in navigator) {
      navigator.vibrate([200, 100, 200]);
    }
  }, [soonFavorites.length]);

  const toggleFavorite = (id) => {
    setFavoriteIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const getProcessedConcerts = () => {
    let filtered = currentFilter === 'favorites' 
      ? concerts.filter(c => favoriteIds.includes(c.id))
      : (currentFilter !== 'all' ? concerts.filter(c => c.day === currentFilter) : concerts);

    return filtered.reduce((acc, concert) => {
      if (!acc[concert.day]) acc[concert.day] = [];
      acc[concert.day].push(concert);
      return acc;
    }, {});
  };

  const grouped = getProcessedConcerts();
  const days = Object.keys(grouped);

  return (
    <section className="concert-list">
      <h2>Programmation</h2>
      
      {/* Alerte moderne */}
      <div className="reminders-container">
        {soonFavorites.map(c => (
          <div key={c.id} className="reminder-alert">
            <div className="alert-icon">🔔</div>
            <div className="alert-text">
              <strong>{c.title}</strong>
              <span>Début imminent !</span>
            </div>
          </div>
        ))}
      </div>

      <FilterBar currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
      
      <div className="concerts-container">
        {days.length > 0 ? days.map(day => (
          <div key={day} className="day-section">
            <h3>{day}</h3>
            {grouped[day].map(c => (
              <ConcertCard 
                key={c.id} 
                concert={c} 
                isFavorite={favoriteIds.includes(c.id)}
                onToggleFavorite={() => toggleFavorite(c.id)}
              />
            ))}
          </div>
        )) : <p style={{textAlign: 'center', color: '#666', marginTop: '20px'}}>Aucun concert trouvé</p>}
      </div>
    </section>
  );
};