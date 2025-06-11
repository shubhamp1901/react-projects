import React, { useState } from 'react';

const randomNum = Math.floor(Math.random() * 100) + 1;

function GuessTheNumber() {
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');

  // Function to handle guess checking
  const handleGuess = () => {
    const guess = Number(input);
    if (guess < 1 || guess > 100) {
      setMessage('Please enter a number between 1 and 100');
      setAttempts((prev) => prev + 1);
    } else if (randomNum > guess) {
      setMessage('Too low! Try again');
      setAttempts((prev) => prev + 1);
    } else if (randomNum < guess) {
      setMessage('Too high! Try again');
      setAttempts((prev) => prev + 1);
    } else {
      setMessage(
        `Congratulations! You guessed the number in ${attempts + 1} attempts.`,
      );
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setInput('');
    setAttempts(0);
    setMessage('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px 0',
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: '300px', padding: '5px' }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <button onClick={handleGuess}>Check guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <span className="output" style={{ marginTop: '1rem' }}></span>
    </div>
  );
}

export default GuessTheNumber;
