export const FilterBar = ({ currentFilter, onFilterChange }) => {
  const options = [
    { label: 'Tous', value: 'all' },
    { label: 'Jeudi', value: 'Jeudi' },
    { label: 'Vendredi', value: 'Vendredi' },
    { label: 'Samedi', value: 'Samedi' },
    { label: 'Dimanche', value: 'Dimanche' },
    { label: 'Favoris', value: 'favorites' },
  ];

  return (
    <div className="filter-bar">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`filter-btn ${currentFilter === opt.value ? 'active' : ''}`}
          onClick={() => onFilterChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};