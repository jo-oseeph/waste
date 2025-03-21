import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(data);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;