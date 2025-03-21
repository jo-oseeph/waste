import React from 'react';
import { useState } from 'react';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const RegisterUser = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", data);

    // Add validation
    if (!data.name || !data.email || !data.password) {
      console.error("All fields are required!");
      return;
    }

    // Handle registration logic here (e.g., API call)
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={RegisterUser}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;