import React from 'react';

/**
 * Component GameStatus - Hiển thị trạng thái game
 * @param {string} winner - Người thắng ('X', 'O', hoặc null)
 * @param {boolean} isDraw - Game có hòa không
 * @param {boolean} xIsNext - Lượt tiếp theo có phải X không
 */
function GameStatus({ winner, isDraw, xIsNext }) {
  let status;
  let statusClass = '';

  if (winner) {
    status = `🎉 ${winner} chiến thắng! 🎉`;
    statusClass = 'status-winner';
  } else if (isDraw) {
    status = '🤝 Hòa! Không ai thắng.';
    statusClass = 'status-draw';
  } else {
    status = 'Lượt tiếp theo: ' + (xIsNext ? 'X' : 'O');
  }

  return <div className={`status ${statusClass}`}>{status}</div>;
}

export default GameStatus;
