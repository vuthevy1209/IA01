import React from 'react';

/**
 * Component MoveHistory - Hiển thị lịch sử các nước đi
 * @param {Array} history - Mảng lịch sử các trạng thái game
 * @param {number} currentMove - Nước đi hiện tại
 * @param {function} onJumpTo - Hàm xử lý khi nhảy đến một nước đi
 */
function MoveHistory({ history, currentMove, onJumpTo }) {
  const moves = history.map((step, move) => {
    let description;

    // Hiển thị text cho move hiện tại thay vì button
    if (move === currentMove) {
      description = move > 0
        ? `You are at move #${move}`
        : 'You are at game start';

      // Thêm location vào description
      if (move > 0 && step.location) {
        description += ` (${step.location.row}, ${step.location.col})`;
      }

      return (
        <li key={move}>
          <strong>{description}</strong>
        </li>
      );
    } else {
      if (move > 0) {
        // Hiển thị location (row, col) trong move history
        description = step.location
          ? `Go to move #${move} (${step.location.row}, ${step.location.col})`
          : `Go to move #${move}`;
      } else {
        description = 'Go to game start';
      }

      return (
        <li key={move}>
          <button onClick={() => onJumpTo(move)}>{description}</button>
        </li>
      );
    }
  });

  return <ol>{moves}</ol>;
}

export default MoveHistory;
