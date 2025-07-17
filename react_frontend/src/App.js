import React, { useState, useEffect } from 'react';
import './App.css';
import Game from './TicTacToe/Game';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'unset', background: 'none', boxShadow: 'none' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <div style={{ margin: 'auto', width: '100%', maxWidth: 420, paddingTop: 32 }}>
          <h1 style={{ color: 'var(--primary-color, #1976d2)', letterSpacing: '0.04em', fontWeight: 700, fontSize: 32, marginBottom: 8 }}>
            Tic Tac Toe
          </h1>
          <h2 style={{
            color: 'var(--accent-color, #ff9800)',
            fontSize: 15,
            fontWeight: 400,
            margin: 0,
            letterSpacing: '0.04em'
          }}>
            Classic. Modern. Minimal.
          </h2>
          <Game />
        </div>
        <div style={{ marginTop: 'auto', padding: 10, fontSize: 12, color: '#999' }}>
          &copy; {new Date().getFullYear()} Kavia Tic Tac Toe
        </div>
      </header>
    </div>
  );
}

export default App;
