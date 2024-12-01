import React, { useState, useCallback, createContext } from 'react';
import './App.css';
import LeftPannel from '../modules/Left-Pannel/Left-Pannel';
import RightPannel from '../modules/Right-Pannel/Right-Pannel';
import Search from '../components/Search/Search';
import Create from '../components/Create/Create';
import { detectDragDown } from '../logic/Gesture/Gesture';

export const SystemContext = createContext({
  category: 'all',
  setCategory: () => {},
});

function App() {
  const [category, setCategory] = useState('all');
  const [gestureState, setGestureState] = useState({
    isDragging: false,
    progress: 0
  });
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setGestureState(detectDragDown(e));
  }, []);

  return (
    <SystemContext.Provider value={{category, setCategory}}>
      <div className='app' onWheel={handleWheel}>
        <LeftPannel />
        <RightPannel onCreateClick={() => setIsCreateOpen(true)} />
        <Search 
          isVisible={gestureState.isDragging}
          progress={gestureState.progress}
        />
        {isCreateOpen && (
          <Create onClose={() => setIsCreateOpen(false)} />
        )}
      </div>
    </SystemContext.Provider>
  );
}

export default App;