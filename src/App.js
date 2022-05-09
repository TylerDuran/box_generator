
import './App.css'; 

import { useState } from 'react';
import ColorForm from './components/ColorForm';
import Display from './components/Display';

function App() {

  const [ boxes, setBoxes] = useState(["red", "blue", "purple"]);
  
  const addBox = (newBox) => {
    setBoxes([...boxes, newBox])
  }
  

  return (
    <div className="App">
      <ColorForm addBox={addBox}/>
      <Display boxes={boxes} />
      <div>
        {JSON.stringify(boxes)}
      </div>
    </div>
  );
}

export default App;
