import { useState } from 'react';
import './AdDesigner.css'; // Make sure to create this CSS file for AdDesigner styling

const AdDesigner = () => {
  const [flavor, setFlavor] = useState<string>('Vanilla');
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(22); // Starting font size
  
  return (
    <div className="AdDesigner">
        <p>Ad Designer</p>
      <div className={`Ad ${isDarkTheme ? 'dark' : 'light'}`} style={{ fontSize: `${fontSize}px` }}>
        Vote For <br></br>{flavor}
      </div>
      <p>WHAT TO SUPPORT</p>
      <div className="buttons">
        {['Chocolate', 'Vanilla', 'Strawberry'].map((flav) => (
          <button
            key={flav}
            disabled={flavor === flav}
            onClick={() => setFlavor(flav)}
          >
            {flav}
          </button>
        ))}
      </div>
      <p>THEME</p>
      <div className="theme-buttons">
        <button
          disabled={!isDarkTheme}
          onClick={() => setIsDarkTheme(false)}
        >
          Light
        </button>
        <button
          disabled={isDarkTheme}
          onClick={() => setIsDarkTheme(true)}
        >
          Dark
        </button>
      </div>
      <p>FONT SIZE</p>
      <div className="font-size">
        <button onClick={() => setFontSize(fontSize - 2)}>Down</button>
        {fontSize}
        <button onClick={() => setFontSize(fontSize + 2)}>Up</button>
      </div>
    </div>
  );
};
export default AdDesigner;