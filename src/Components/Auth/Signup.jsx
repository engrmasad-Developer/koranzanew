import React from "react";
import AuthLayout from "./AuthLayout";
import { Leaf } from "lucide-react";

const SignupPage = ({ onSwitch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSwitch();
  };

  return (
    <AuthLayout>
      <div className="auth-header">
        <div className="auth-logo-icon">
          <Leaf size={32} />
        </div>
        <h2 className="auth-title">Join Koreanza</h2>
        <p className="auth-subtitle-italic">Begin your journey to luminous skin.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-input" 
            placeholder="Evelyn Rose" 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input 
            type="email" 
            className="form-input" 
            placeholder="hello@ritual.com" 
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••" 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Confirm</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••" 
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Create Account</button>
      </form>

      <div className="auth-footer">
        Already have an account? <span className="auth-footer-link" onClick={onSwitch}>Sign In</span>
      </div>

      <div className="bottom-decoration">
        <div className="decor-line"></div>
        <span className="decor-icon">✧</span>
        <div className="decor-line"></div>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
