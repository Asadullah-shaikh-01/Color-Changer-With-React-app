import { useState } from 'react';
import './index.css';

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3'>
        <div className='gap-5 shadow-lg bg-black px-5 py-4 rounded-3xl text-center text-white'>
          <button 
            onClick={() => setColor("yellow")}
            className="outline-none px-2 py-2"
            style={{ backgroundColor: "yellow" }}>
            YELLOW
          </button>
          <button 
            onClick={() => setColor("orange")}
            className='outline-none px-2 py-2'
            style={{ backgroundColor: "orange" }}>
            ORANGE
          </button>
          <button 
            onClick={() => setColor("Black")}
            className='outline-none px-2 py-2'
            style={{ backgroundColor: "Black" }}>
            Black
          </button>
          <button 
            onClick={() => setColor("gold")}
            className='outline-none px-2 py-2'
            style={{ backgroundColor: "gold" }}>
            Gold
          </button>
          <button 
            onClick={() => setColor("pink")}
            className='outline-none px-2 py-2'
            style={{ backgroundColor: "pink" }}>
            PINK
          </button>
          <button 
            onClick={() => setColor("skyblue")}
            className='outline-none px-2 py-2'
            style={{ backgroundColor: "skyblue" }}>
            SKYBLUE
          </button>
          <button 
            onClick={() => setColor("red")}
            className='outline-none px-2 py-2'
            style={{ backgroundColor: "red" }}>
            RED
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
