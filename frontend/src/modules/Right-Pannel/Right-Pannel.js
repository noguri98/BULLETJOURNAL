import React from 'react';
import './Right-Pannel.css';

const RightPannel = () => {
    return (
        <div className='right'>
            <div className='content-header'>
                <div className='header-title'>
                    <span className='header-icon'>📝</span>
                    <h1>새로운 노트</h1>
                </div>
            </div>
            <div className='content-body'>
                <div className='empty-state'>
                    <span className='empty-icon'>📚</span>
                    <p>새로운 노트를 작성해보세요!</p>
                </div>
            </div>
        </div>
    );
};

export default RightPannel;