// LoginPage.jsx
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./LoginPage.css"; // Import the CSS file
import logo from "../Images/Logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === "mcusawaiver@gmail.com" && password === "Mobile1985") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/excel-form" />;
  }

  return (
    <div className="container">
      <a className="logo" target="_blank">
        <img src={logo} alt="" />
      </a>
      <h2>Login</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
