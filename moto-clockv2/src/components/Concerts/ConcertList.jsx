import { useState, useEffect } from 'react';
import { concerts } from '../../data/concerts';
import { FilterBar } from './FilterBar';
import { ConcertCard } from './ConcertCard';

export const ConcertList = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [favoriteIds, setFavoriteIds] = useState([]);
  // État pour forcer la mise à jour des rappels chaque minute
  const [, setTick] = useState(0);

  // Gérer les favoris
  const toggleFavorite = (id) => {
    setFavoriteIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  // Mise à jour automatique pour vérifier les rappels toutes les minutes
  useEffect(() => {
    const timer = setInterval(() => setTick(t => t + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  // Logique de rappel (30 minutes avant le début)
  const getSoonFavorites = () => {
    const now = new Date();
    return concerts.filter(c => {
      const concertDate = new Date(c.time);
      const diffInMinutes = (concertDate - now) / 1000 / 60;
      return favoriteIds.includes(c.id) && diffInMinutes > 0 && diffInMinutes <= 30;
    });
  };

  const soonFavorites = getSoonFavorites();

  // Logique de traitement des concerts pour l'affichage
  const getProcessedConcerts = () => {
    let filtered = concerts;
    if (currentFilter === 'favorites') {
      filtered = concerts.filter(c => favoriteIds.includes(c.id));
    } else if (currentFilter !== 'all') {
      filtered = concerts.filter(c => c.day === currentFilter);
    }

    return filtered.reduce((acc, concert) => {
      if (!acc[concert.day]) acc[concert.day] = [];
      acc[concert.day].push(concert);
      return acc;
    }, {});
  };

  const grouped = getProcessedConcerts();
  const days = Object.keys(grouped);

  return (
    <section>
      <h2>Programmation</h2>
      
      {/* Bandeau de rappel des favoris */}
      {soonFavorites.length > 0 && (
        <div className="reminders-container">
          {soonFavorites.map(c => (
            <div key={c.id} className="reminder-alert">
              🔔 <strong>{c.name}</strong> commence bientôt !
            </div>
          ))}
        </div>
      )}

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
        )) : <p style={{textAlign: 'center', color: '#666'}}>Aucun concert trouvé</p>}
      </div>
    </section>
  );
};