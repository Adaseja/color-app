import React, { useState } from "react"
import './App.css';
import Title from './Title.js'; 
import ButtonsPanel from './ButtonsPanel.jsx';

const App = () => {
  const [color, setColor] = useState('black');

  const changeColor = (action) => {
    console.log("dziala onClick " + action); 

    let newColor = "";
    if (action === "red") {
      newColor = "red";
    } else if (action === "green") {
      newColor = "green";
    } else {
      newColor = "blue";
    }

    setColor(newColor); 
  };

  return (
    <div className="App">
      <Title color={color} colorMethod={changeColor} />
      <ButtonsPanel changeColor={changeColor} />
    </div>
  );
}

export default App;