import React from 'react';

/**
 * Component Square - Hiển thị một ô vuông trên bàn cờ
 * @param {string} value - Giá trị hiển thị ('X', 'O', hoặc null)
 * @param {function} onSquareClick - Hàm xử lý khi click vào ô
 * @param {boolean} isWinningSquare - Có phải ô thắng cuộc không
 */
function Square({ value, onSquareClick, isWinningSquare }) {
  return (
    <button
      className={`square ${isWinningSquare ? 'winning-square' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
