import React, { useState } from "react";
import "../login/styles.css";
import axios from "../../connector";
import Header from "../header";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/login", formData);

    const data = await response.data;
    const { status, message, payload = {} } = data;
    if (!status) {
      window.alert(message);
    }
    if (status) {
      localStorage.setItem("token", payload.token);
      const redirectUrl = payload.redirectUrl;
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
      console.log(formData);
    }
  };

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="page-background">
        <div className="login-container">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email </label>
              <input
                type="text"
                name="email"
                required
                onChange={updateFormData}
                value={formData.email}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label>Password </label>
              <input
                type="password"
                name="password"
                required
                onChange={updateFormData}
                value={formData.password}
                placeholder="Enter your password"
              />
            </div>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <button type="submit">Sign In</button>
          </form>
          <div className="separator">or Sign In with</div>
          <button className="google-button">Sign In with Google</button>
          <div className="no-account">
            Don't have an account? <Link to="/user/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
