import React, { useState } from 'react';
// import styles.css
import './../styles.css';

const UserInput = () => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send user's answer to backend for validation
  };

  return (
    <div className='user-input'>

    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        placeholder="Enter your answer"
      />
      <button type="submit">Submit Answer</button>
    </form>
    </div>
  );
};

export default UserInput;
