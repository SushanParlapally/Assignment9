
import React, { useState } from 'react';
import WelcomeProps from './WelcomeProps';

const LoginProps = () => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setUsername('User123'); // Hardcoded username for simplicity
  };

  return (
    <div>
      <h2>Login Component</h2>
      <button onClick={handleLogin}>Login</button>
      <WelcomeProps username={username} />
    </div>
  );
};

export default LoginProps;
