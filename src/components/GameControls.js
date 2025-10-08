import React from 'react';

/**
 * Component GameControls - Các nút điều khiển game
 * @param {boolean} isAscending - Có đang sắp xếp tăng dần không
 * @param {function} onToggleSort - Hàm xử lý toggle sort
 * @param {function} onReset - Hàm xử lý reset game
 * @param {string} position - Vị trí hiển thị ('top' hoặc 'bottom')
 */
function GameControls({ isAscending, onToggleSort, onReset, position = 'top' }) {
  if (position === 'bottom') {
    return (
      <button onClick={onReset} className="reset-button">
        🔄 Chơi lại
      </button>
    );
  }

  return (
    <button onClick={onToggleSort} className="sort-button">
      Sort: {isAscending ? 'Ascending ↑' : 'Descending ↓'}
    </button>
  );
}

export default GameControls;
