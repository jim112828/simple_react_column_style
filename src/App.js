// App.js
import React, { useState } from 'react';
import './styles.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const targetElement = document.getElementById(color);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <nav className="nav">
        <button className="red" onClick={() => handleColorChange('red')}>
          紅
        </button>
        <button className="orange" onClick={() => handleColorChange('orange')}>
          澄
        </button>
        <button className="yellow" onClick={() => handleColorChange('yellow')}>
          黃
        </button>
        <button className="green" onClick={() => handleColorChange('green')}>
          綠
        </button>
      </nav>
      <div id="red" className={`content red`}></div>
      <div id="orange" className={`content orange`}></div>
      <div id="yellow" className={`content yellow`}></div>
      <div id="green" className={`content green`}></div>
    </div>
  );
}

export default App;
