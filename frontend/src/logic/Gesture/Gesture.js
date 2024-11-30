export const detectDragDown = (event) => {
    const deltaY = event.deltaY;
    
    // 아래로 드래그하는 경우 deltaY는 음수
    if (deltaY < 0) {
        return {
            isDragging: true,
            progress: Math.abs(deltaY)
        };
    }

    return {
        isDragging: false,
        progress: 0
    };
};