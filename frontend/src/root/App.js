
import { useState, createContext } from 'react';
import './App.css';

import LeftPannel from '../modules/Left-Pannel/Left-Pannel';

export const SystemContext = createContext({

  category: "", setCategory: () => {}

});

const App = () => {

  const [ category, setCategory ] = useState("");

  return (
    <SystemContext.Provider value={{category, setCategory}}>
      <div className='app'>
        <LeftPannel />
      </div>
    </SystemContext.Provider>
   
  );
}

export default App;