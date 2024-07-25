// src/components/RegistrationFunction.js
import React, { useState } from 'react';

const RegistrationFunction = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', { fullName, email });
  };

  return (
    <div>
      <h2>Registration Form - Function Component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationFunction;
