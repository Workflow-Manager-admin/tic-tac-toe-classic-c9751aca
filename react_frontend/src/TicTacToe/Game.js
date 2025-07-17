import React, { useState } from 'react';
import Board from './Board';
import MoveHistory from './MoveHistory';
import './ttt.css';

// PUBLIC_INTERFACE
/**
 * Main game controller component for Tic Tac Toe.
 * Handles state, win/draw logic, and controls for the game.
 */
function Game() {
  // history: [{squares: Array(9), lastMove: [row, col]}]
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), lastMove: null },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winnerInfo = calculateWinner(current.squares);

  // PUBLIC_INTERFACE
  function handleClick(i) {
    if (winnerInfo || current.squares[i]) return;
    const slice = history.slice(0, stepNumber + 1);
    const squares = current.squares.slice();
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(slice.concat([{ squares, lastMove: [Math.floor(i/3), i%3] }]));
    setStepNumber(slice.length);
    setXIsNext(!xIsNext);
  }

  // PUBLIC_INTERFACE
  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  // PUBLIC_INTERFACE
  function startNewGame() {
    setHistory([{ squares: Array(9).fill(null), lastMove: null }]);
    setStepNumber(0);
    setXIsNext(true);
  }

  let status;
  if (winnerInfo) {
    status =
      winnerInfo.winner === 'draw'
        ? "It's a draw! 🤝"
        : `Winner: ${winnerInfo.winner} 🎉`;
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="ttt-container">
      <div className="ttt-status">{status}</div>
      <Board
        squares={current.squares}
        onClick={handleClick}
        winnerLine={winnerInfo && winnerInfo.line}
      />
      <div className="ttt-buttons">
        <button className="ttt-btn-accent" onClick={startNewGame}>Start New Game</button>
      </div>
      <MoveHistory
        history={history}
        jumpTo={jumpTo}
        stepNumber={stepNumber}
      />
    </div>
  );
}

// Helper to determine winner
function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // columns
    [0,4,8],[2,4,6],         // diags
  ];
  for (let i = 0; i < lines.length; ++i) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return { winner: squares[a], line: [a, b, c] };
  }
  if (squares.every(Boolean)) return { winner: 'draw', line: null };
  return null;
}

export default Game;
