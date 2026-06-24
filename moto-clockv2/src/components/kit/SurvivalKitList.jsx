import { useState, useEffect } from 'react';
import { SurvivalKitItem } from './SurvivalKitItem';

export const SurvivalKitList = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('survivalKitItems');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Bouteille d\'eau', checked: false },
      { id: 2, name: 'Bouchons d\'oreilles', checked: false },
    ];
  });

  const [showInput, setShowInput] = useState(false);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    localStorage.setItem('survivalKitItems', JSON.stringify(items));
  }, [items]);

  const toggleItem = (id) => {
    setItems(items.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
  };

  const deleteItem = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    setItems([...items, { id: Date.now(), name: newItem, checked: false }]);
    setNewItem('');
    setShowInput(false);
  };

  return (
    <div className="survival-kit-container">
      <h2>Survival Kit</h2>

     {!showInput ? (
  <button className="btn-add-trigger" onClick={() => setShowInput(true)}>
    +
  </button>
) : (
  <form onSubmit={addItem} className="add-item-form">
    <input 
      autoFocus 
      type="text" 
      placeholder="Nom de l'objet..."
      value={newItem} 
      onChange={(e) => setNewItem(e.target.value)}
      onBlur={() => !newItem && setShowInput(false)}
    />
  </form>
)}

      <div className="items-list">
        {items.map(item => (
          <SurvivalKitItem 
            key={item.id} 
            item={item} 
            onToggle={() => toggleItem(item.id)}
            onDelete={() => deleteItem(item.id)} 
          />
        ))}
      </div>
    </div>
  );
};