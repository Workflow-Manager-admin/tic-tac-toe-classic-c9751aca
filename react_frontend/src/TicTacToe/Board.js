import React from 'react';
import Square from './Square';

// PUBLIC_INTERFACE
/**
 * Board component for rendering 3x3 game grid.
 * Highlights winning line if winnerLine given.
 */
function Board({ squares, onClick, winnerLine }) {
  // Render a single Square
  function renderSquare(i) {
    const isWinSquare = winnerLine && winnerLine.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onClick(i)}
        highlight={isWinSquare}
      />
    );
  }

  // 3x3 grid
  const grid = [0,1,2].map(row =>
    <div className="ttt-board-row" key={row}>
      {[0,1,2].map(col => renderSquare(row * 3 + col))}
    </div>
  );

  return <div className="ttt-board">{grid}</div>;
}

export default Board;
