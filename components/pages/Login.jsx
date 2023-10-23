import React from 'react';
import '../../../src/components/login.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Login() {
  const onSignIn = (googleUser) => {
    // Handle the Google Sign-In data
    // This function is called when a user successfully signs in with Google
  };

  return (
    <div id ="form-container">
      <h1>Login</h1>
      <form id="loginForm">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required /><br /><br />
        <input type="submit" value="Login" />
      </form>
      <p>Not an Existing User? <Link to="/create">Sign Up</Link> </p>
      <div className="g-signin2" data-onsuccess={onSignIn}></div>
    </div>
  );
}

export default Login;
