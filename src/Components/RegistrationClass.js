// src/components/RegistrationClass.js
import React, { Component } from 'react';

class RegistrationClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', this.state);
  };

  render() {
    return (
      <div>
        <h2>Registration Form - Class Component</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationClass;
