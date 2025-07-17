import React from 'react';

/**
 * MoveHistory shows clickable move history, current move is highlighted.
 * Optional for minimal UI.
 */
function MoveHistory({ history, jumpTo, stepNumber }) {
  return (
    <div className="ttt-history">
      <div className="ttt-history-title">Move History</div>
      <ol>
        {history.map((step, move) => {
          const desc = move
            ? `Go to move #${move} (${step.lastMove ? `row ${step.lastMove[0]+1}, col ${step.lastMove[1]+1}` : ''})`
            : 'Go to game start';
          return (
            <li key={move}>
              <button
                className={move === stepNumber ? 'ttt-history-current' : ''}
                onClick={() => jumpTo(move)}
                aria-label={desc}
              >
                {desc}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default MoveHistory;
