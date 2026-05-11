import React, { useState } from "react";
import AuthLayout from "./AuthLayout";

const Login = ({ onSwitch, onForgot }) => {
  return (
    <AuthLayout>
      <div className="auth-header">
        <h1 className="auth-logo-text">KOREANZA</h1>
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Step into your sanctuary of self-care.</p>
      </div>

      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input 
            type="email" 
            className="form-input" 
            placeholder="your@email.com" 
          />
        </div>

        <div className="form-group">
          <div className="label-row">
            <label className="form-label">Password</label>
            <span className="forgot-link-small" onClick={onForgot}>*Forgot?</span>
          </div>
          <input 
            type="password" 
            className="form-input" 
            placeholder="••••••••" 
          />
        </div>

        <button type="submit" className="submit-btn">SIGN IN</button>
      </form>

      <div className="divider-container">
        <div className="divider-line"></div>
        <span className="divider-text">or continue with</span>
        <div className="divider-line"></div>
      </div>

      <div className="social-grid">
        <button className="social-btn">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/0.png" alt="Google" className="social-icon" />
          GOOGLE
        </button>
        <button className="social-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="social-icon" />
          APPLE
        </button>
      </div>

      <div className="auth-footer">
        New? <span className="auth-footer-link" onClick={onSwitch}>Join the Koreanza</span>
      </div>
    </AuthLayout>
  );
};

export default Login;
