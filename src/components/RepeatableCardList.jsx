import React, { useState } from 'react';

const RepeatableCardList = ({ itemsRepeatable }) => {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {itemsRepeatable.map((item, index) => (
        <ItemCard key={index} title={item} />
      ))}
    </div>
  );
};

const ItemCard = ({ title }) => {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setListItems([...listItems, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '1rem', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
      <h2>{title}</h2>
      <input
        type="text"
        placeholder={`Add to ${title}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul style={{ marginTop: '1rem' }}>
        {listItems.map((entry, idx) => (
          <li key={idx}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepeatableCardList;
