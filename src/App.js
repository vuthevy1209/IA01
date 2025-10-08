import React from 'react';
import './App.css';
import Board from './components/Board';
import MoveHistory from './components/MoveHistory';
import GameControls from './components/GameControls';
import useGameState from './hooks/useGameState';
import { calculateWinner } from './utils/gameLogic';

/**
 * Component chính của game Tic-Tac-Toe
 */
export default function Game() {
  const {
    history,
    currentMove,
    isAscending,
    xIsNext,
    currentSquares,
    handlePlay,
    jumpTo,
    toggleSortOrder,
    resetGame,
  } = useGameState();

  // Tính toán winning line để highlight
  const { winningLine } = calculateWinner(currentSquares);

  // Sắp xếp moves theo thứ tự
  const displayHistory = isAscending ? history : [...history].reverse();

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          winningLine={winningLine}
        />
        <GameControls
          onReset={resetGame}
          position="bottom"
        />
      </div>

      <div className="game-info">
        <GameControls
          isAscending={isAscending}
          onToggleSort={toggleSortOrder}
          position="top"
        />
        <MoveHistory
          history={isAscending ? history : displayHistory}
          currentMove={currentMove}
          onJumpTo={jumpTo}
        />
      </div>
    </div>
  );
}
