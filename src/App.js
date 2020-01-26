import React from 'react';
import { convertIconData } from './convertIconData';
import { Logo } from './Logo';
import { FaBeer } from 'react-icons/fa';

import './App.css';


function App() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  return (
    <div className="App">
      <div>
        <FaBeer size={40}/>
        <Logo size={40}/>
        <FaBeer size={40}/>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const iconJson = await convertIconData(input);
            setOutput(iconJson);
          } catch (e) {
            console.error(e);
          }
        }}
      >
        <div style={{ display: 'flex' }}>
        <textarea placeholder="Paste in raw svg here" style={{ flex: 1, height: '90vh' }} name="input-field" value={input} onChange={e => { setInput(e.target.value); }} />
        <textarea placeholder="react-icons friendly json will print out here" style={{ flex: 1, height: '90vh' }} name="output-field" value={output ? JSON.stringify(output) : ''} />
        </div>
        <input type="submit" value="generate icon json" />
      </form>
    </div>
  );
}

export default App;
