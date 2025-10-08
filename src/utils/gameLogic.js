/**
 * Utility functions cho game logic
 */

/**
 * Tính toán người thắng cuộc
 * @param {Array} squares - Mảng 9 phần tử chứa trạng thái bàn cờ
 * @returns {Object} - Object chứa winner, winningLine, và isDraw
 */
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // Hàng 1
    [3, 4, 5], // Hàng 2
    [6, 7, 8], // Hàng 3
    [0, 3, 6], // Cột 1
    [1, 4, 7], // Cột 2
    [2, 5, 8], // Cột 3
    [0, 4, 8], // Chéo chính
    [2, 4, 6], // Chéo phụ
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winningLine: lines[i],
        isDraw: false
      };
    }
  }

  // Check for draw (tất cả ô đã được điền, không có người thắng)
  const isDraw = squares.every(square => square !== null);

  return { winner: null, winningLine: null, isDraw };
}

/**
 * Tạo trạng thái game ban đầu
 * @returns {Object} - Object chứa squares rỗng và location null
 */
export function createInitialGameState() {
  return {
    squares: Array(9).fill(null),
    location: null
  };
}
