import React from 'react';

function ButtonsPanel({ changeColor }) {
  return (
    <div>
      <button onClick={() => changeColor('red')}>Czerwony</button>
      <button onClick={() => changeColor('blue')}>Niebieski</button>
      <button onClick={() => changeColor('green')}>Zielony</button>
    </div>
  );
}

export default ButtonsPanel;
