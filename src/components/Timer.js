import React from 'react';
// import styles.css
import './../styles.css';

const Timer = ({ timeLeft }) => {
  return <div className='timer'>Time Left: {timeLeft} seconds</div>;
};

export default Timer;
