import React, { useState } from "react";
import axios from "../../connector"; // Import your axios instance
import Header from "../header";
import "./signup.css";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",

    // Add more fields for signup as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/signup", formData); // Adjust the endpoint to your server's signup route
      const data = response.data;
      if (data.status) {
        // Signup successful, you can redirect to the login page or perform other actions
        window.location.href = "/user/login"; // Redirect to the login page after successful signup
      } else {
        // Handle signup error, e.g., display an error message
        window.alert(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="page-background">
        <div className="signup-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {/* Add form fields for email, password, and other required information */}
            <div className="form-group">
              <label>Password </label>
              <input
                type="name"
                name="name"
                required
                onChange={updateFormData}
                value={formData.password}
                placeholder="Enter your name"
              />
            </div>
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
            <div className="form-group">
              <label>Password </label>
              <input
                type="password"
                name="confirmpassword"
                required
                onChange={updateFormData}
                value={formData.password}
                placeholder="Enter your confirmpassword"
              />
            </div>
            {/* Add more form fields as needed */}
            <button type="submit">Sign Up</button>
          </form>
          {/* You can add a link to the login page if needed */}
          <div className="already-have-account">
            Already have an account? <a href="/user/login">Sign In</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
