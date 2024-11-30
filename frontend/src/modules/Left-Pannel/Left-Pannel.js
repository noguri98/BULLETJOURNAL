import React from 'react';
import './Left-Pannel.css';
import Monthly from '../Monthly/Monthly';

const LeftPannel = () => {
    return (
        <div className='left'>
            <div className='profile'>
                <div className='profile-image'>
                    👤
                </div>
                <div className='profile-info'>
                    <div className='username'>noguri</div>
                    <div className='status'>모든 노트 페이지</div>
                </div>
            </div>
            <div className='divider'></div>
            <div className='monthly'>
                <Monthly />
            </div>
            <div className='divider'></div>
            <div className='widgets'>
                <div className='widget'>
                    <div className='widget-header'>
                        <div className='widget-left'>
                            <span className='widget-icon'>📚</span>
                            <span className='widget-title'>모든 노트</span>
                        </div>
                        <div className='widget-count'> - </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftPannel;