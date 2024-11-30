import React, { useState, useCallback } from 'react';
import './Right-Pannel.css';
import { detectDragDown } from '../../logic/Gesture/Gesture';
import Search from '../../components/Search/Search';

const RightPannel = () => {
    const [gestureState, setGestureState] = useState({
        isDragging: false,
        progress: 0
    });

    const handleWheel = useCallback((e) => {
        const result = detectDragDown(e);
        setGestureState(result);
        
        if (result.isThresholdMet) {
            // 여기서 새 노트 생성 로직 실행
            console.log('새 노트 생성!');
        }
    }, []);

    return (
        <div className='right' onWheel={handleWheel}>
            <div className='content-header'>
                <div className='header-title'>
                    <span className='header-icon'>📝</span>
                    <h1>새로운 노트</h1>
                </div>
                <div className='header-actions'>
                    <button className='action-button'>
                        <span>✨</span>
                        새로 만들기
                    </button>
                </div>
            </div>
            <div className='content-body'>
                <div className='empty-state'>
                    <span className='empty-icon'>📚</span>
                    <p>새로운 노트를 작성해보세요!</p>
                </div>
            </div>
            <Search 
                isVisible={gestureState.isDragging}
                progress={gestureState.progress}
            />
        </div>
    );
};

export default RightPannel;