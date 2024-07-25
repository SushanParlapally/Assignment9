// src/components/WelcomeRef.js
import React from 'react';

const WelcomeRef = ({ username }) => {
  return (
    <div>
      <h2>Welcome Component using Ref</h2>
      {username && <p>Welcome, {username}!</p>}
    </div>
  );
};

export default WelcomeRef;
