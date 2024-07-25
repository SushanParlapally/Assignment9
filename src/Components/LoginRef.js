// src/components/LoginRef.js
import React, { useRef, useState } from 'react';
import WelcomeRef from './WelcomeRef';

const LoginRef = () => {
  const usernameRef = useRef();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setUsername(usernameRef.current.value);
  };

  return (
    <div>
      <h2>Login Component using Ref</h2>
      <input type="text" ref={usernameRef} />
      <button onClick={handleLogin}>Login</button>
      <WelcomeRef username={username} />
    </div>
  );
};

export default LoginRef;
