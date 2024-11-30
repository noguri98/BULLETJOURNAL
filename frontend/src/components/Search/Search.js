import React, { useRef, useEffect } from 'react';
import './Search.css';

const Search = ({ isVisible, progress }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isVisible && progress === 100) {
            inputRef.current?.focus();
        }
    }, [isVisible, progress]);

    return (
        <div className={`search ${isVisible ? 'visible' : ''}`}
             style={{ '--progress': `${progress}%` }}>
            <div className="search-content">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input 
                        ref={inputRef}
                        type="text" 
                        placeholder="검색어를 입력하세요..."
                        className="search-input"
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;
