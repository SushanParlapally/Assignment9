
import React from 'react';

const WelcomeProps = ({ username }) => {
  return (
    <div>
      <h2>Welcome Component</h2>
      {username && <p>Welcome, {username}!</p>}
    </div>
  );
};

export default WelcomeProps;
