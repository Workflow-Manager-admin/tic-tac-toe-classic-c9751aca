import React from 'react';

/**
 * Square component for Tic Tac Toe grid.
 * @param {string} value - 'X', 'O', or null
 * @param {Function} onClick
 * @param {boolean} highlight - true if should highlight (winner)
 */
function Square({ value, onClick, highlight }) {
  return (
    <button
      className={`ttt-square${highlight ? ' ttt-square-highlight' : ''}`}
      onClick={onClick}
      aria-label={value ? `Square ${value}` : 'Empty square'}
      tabIndex={0}
    >
      {value}
    </button>
  );
}

export default Square;
