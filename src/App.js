import React, { useState } from "react"
import './App.css';
import Title from './Title.js'; 
import ButtonsPanel from './ButtonsPanel.jsx';

const App = () => {
  const [color, setColor] = useState('black');

  const changeColor = (action) => {
    console.log("działa onClick " + action); 
  
    let newColor = "";
  
    if (action === "red") {
      newColor = "red";
    } 
    if (action === "green") {
      newColor = "green";
    }
    if (action === "blue") { 
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