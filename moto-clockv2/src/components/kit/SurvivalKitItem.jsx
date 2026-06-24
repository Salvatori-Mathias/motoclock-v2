export const SurvivalKitItem = ({ item, onToggle, onDelete }) => {
  return (
    <div className={`kit-item ${item.checked ? 'checked' : ''}`}>
      <div className="item-content" onClick={onToggle}>
        <div className={`custom-checkbox ${item.checked ? 'active' : ''}`}>
          {item.checked && "✓"}
        </div>
        <span>{item.name}</span>
      </div>
      
      <button 
        className="btn-delete" 
        onClick={(e) => { e.stopPropagation(); onDelete(); }}
        aria-label="Supprimer l'objet"
      >
        ×
      </button>
    </div>
  );
};