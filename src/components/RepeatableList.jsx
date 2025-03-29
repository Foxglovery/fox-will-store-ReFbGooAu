import React from 'react';

const RepeatableList = ({ itemsRepeatable }) => {
  return (
    <ul>
      {itemsRepeatable.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default RepeatableList;
