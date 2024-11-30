export const detectDragDown = (event) => {
    const deltaY = event.deltaY;
    const deltaX = Math.abs(event.deltaX);
    const sensitivity = 0.5;
    
    // deltaX가 크면 수평 스와이프로 간주하고 무시
    if (deltaX > Math.abs(deltaY)) {
        return {
            isDragging: false,
            progress: 0
        };
    }
    
    // 아래로 드래그하는 경우 deltaY는 음수
    if (deltaY < 0) {
        return {
            isDragging: true,
            progress: Math.abs(deltaY * sensitivity)
        };
    }

    return {
        isDragging: false,
        progress: 0
    };
};