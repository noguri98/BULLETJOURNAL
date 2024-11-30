import { useState, createContext, useCallback } from 'react';
import './App.css';

import LeftPannel from '../modules/Left-Pannel/Left-Pannel';
import RightPannel from '../modules/Right-Pannel/Right-Pannel';
import Search from '../components/Search/Search';
import { detectDragDown } from '../logic/Gesture/Gesture';

export const SystemContext = createContext({
  category: "", 
  setCategory: () => {}
});

const App = () => {
  const [category, setCategory] = useState("");
  const [gestureState, setGestureState] = useState({
    isDragging: false,
    progress: 0
  });

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const result = detectDragDown(e);
    setGestureState(result);
  }, []);

  return (
    <SystemContext.Provider value={{category, setCategory}}>
      <div className='app' onWheel={handleWheel}>
        <LeftPannel />
        <RightPannel />
        <Search 
          isVisible={gestureState.isDragging}
          progress={gestureState.progress}
        />
      </div>
    </SystemContext.Provider>
  );
};

export default App;