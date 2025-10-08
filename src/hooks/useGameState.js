import { useState } from 'react';
import { createInitialGameState } from '../utils/gameLogic';

/**
 * Custom hook để quản lý state của game
 */
function useGameState() {
  const [history, setHistory] = useState([createInitialGameState()]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  /**
   * Xử lý khi người chơi đánh nước
   */
  const handlePlay = (nextSquares, location) => {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, location }
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  /**
   * Nhảy đến một nước đi cụ thể
   */
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  /**
   * Toggle thứ tự sắp xếp
   */
  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  /**
   * Reset game về trạng thái ban đầu
   */
  const resetGame = () => {
    setHistory([createInitialGameState()]);
    setCurrentMove(0);
  };

  return {
    history,
    currentMove,
    isAscending,
    xIsNext,
    currentSquares,
    handlePlay,
    jumpTo,
    toggleSortOrder,
    resetGame,
  };
}

export default useGameState;
