import React, { useState, useEffect } from 'react';
import './Monthly.css';

const Monthly = () => {
    const [calendarDays, setCalendarDays] = useState([]);
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        // 월 이름 설정
        setCurrentMonth(`${month + 1}월`);
        
        // 해당 월의 첫 날의 요일 구하기 (0: 일요일, 6: 토요일)
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        
        // 해당 월의 총 일수
        const totalDays = new Date(year, month + 1, 0).getDate();
        
        // 달력에 표시할 날짜 배열 생성
        const daysArray = [];
        
        // 첫 날 이전의 빈 칸 추가
        for (let i = 0; i < firstDayOfMonth; i++) {
            daysArray.push({ date: '', dayOfWeek: i });
        }
        
        // 실제 날짜 추가
        for (let i = 1; i <= totalDays; i++) {
            const date = new Date(year, month, i);
            const dayOfWeek = date.getDay();
            daysArray.push({
                date: i,
                dayOfWeek
            });
        }

        setCalendarDays(daysArray);
    }, []);

    const getDayColor = (dayOfWeek) => {
        if (dayOfWeek === 0) return 'red';    // 일요일
        if (dayOfWeek === 6) return 'blue';   // 토요일
        return 'white';                        // 평일
    };

    return (
        <div>
            <div className="month-title">{currentMonth}</div>
            <div className="days-grid">
                {calendarDays.map((day, index) => (
                    <button
                        key={index}
                        className={`day-button ${!day.date ? 'empty' : ''}`}
                        style={{ color: getDayColor(day.dayOfWeek) }}
                        disabled={!day.date}
                    >
                        {day.date}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Monthly;
