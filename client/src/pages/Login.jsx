// src/pages/Login.jsx
import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;