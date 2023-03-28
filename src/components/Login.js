//import React, { useState } from "react";
//import Register from "./Register";

import "../components/login.css";
import axios from 'axios'

import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('/users/login', { email, password })
      .then((response) => {
        // Save the authentication token to localStorage
        localStorage.setItem('authToken', response.data.token);
        // Redirect to the todo card landing page
        window.location.href = '/todos';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;
