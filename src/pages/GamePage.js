import React, { useState, useEffect } from 'react';
import Timer from './../components/Timer'
import Question from './../components/Question';
import UserInput from './../components/UserInput';
// import styles.css
import './../styles.css';

const GamePage = () => {
  const [question, setQuestion] = useState(''); // Current question
  const [timeLeft, setTimeLeft] = useState(30); // Time left in seconds

  // Fetch question and start timer when component mounts
  useEffect(() => {
    // Fetch question from backend and update state
    setQuestion('What is the capital of France?');

    // Start timer countdown
    const timerInterval = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="game-container">
      <h1 className="title">Family Feud Game</h1>
      <Timer className = "timer" timeLeft={timeLeft} />
      <Question className="question" question={question} />
      <UserInput className="user-input" />
    </div>
  );
};

export default GamePage;
