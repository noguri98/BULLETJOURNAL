import React, { useState } from 'react';
import './Create.css';

const Create = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: 노트 생성 로직
        console.log('Creating note:', { title, content });
        onClose();
    };

    return (
        <div className="create">
            <div className="create-content">
                <div className="create-header">
                    <h2>새로운 노트</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="title-input"
                    />
                    <textarea
                        placeholder="내용을 입력하세요"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="content-input"
                    />
                    <div className="create-actions">
                        <button type="button" onClick={onClose} className="cancel-button">
                            취소
                        </button>
                        <button type="submit" className="submit-button">
                            생성
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
