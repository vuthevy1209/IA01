import React from 'react';
import Square from './Square';
import GameStatus from './GameStatus';
import { calculateWinner } from '../utils/gameLogic';

/**
 * Component Board - Hiển thị bàn cờ 3x3
 * @param {boolean} xIsNext - Lượt tiếp theo có phải X không
 * @param {Array} squares - Mảng 9 phần tử chứa trạng thái bàn cờ
 * @param {function} onPlay - Hàm xử lý khi người chơi đánh nước
 * @param {Array} winningLine - Mảng các index của 3 ô thắng cuộc
 */
function Board({ xIsNext, squares, onPlay, winningLine }) {
  const handleClick = (i) => {
    // Không cho click nếu đã có người thắng hoặc ô đã được đánh
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';

    // Tính toán vị trí (row, col) từ index
    const row = Math.floor(i / 3);
    const col = i % 3;

    onPlay(nextSquares, { row, col });
  };

  const { winner, isDraw } = calculateWinner(squares);

  // Render một ô vuông
  const renderSquare = (i) => {
    const isWinning = winningLine && winningLine.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onSquareClick={() => handleClick(i)}
        isWinningSquare={isWinning}
      />
    );
  };

  // Sử dụng 2 loops để tạo board (3x3)
  const rows = [];
  for (let row = 0; row < 3; row++) {
    const rowSquares = [];
    for (let col = 0; col < 3; col++) {
      rowSquares.push(renderSquare(row * 3 + col));
    }
    rows.push(
      <div key={row} className="board-row">
        {rowSquares}
      </div>
    );
  }

  return (
    <>
      <GameStatus winner={winner} isDraw={isDraw} xIsNext={xIsNext} />
      {rows}
    </>
  );
}

export default Board;
