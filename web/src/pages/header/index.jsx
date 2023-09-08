import React, { useState, useContext } from "react";
import "./header.css";
import { CurrentUserContext } from "../../index";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleNameHover = () => {
    setShowDropdown(true);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    window.location.href = "/user/login";
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
  };

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src="/logo.png" alt="Logo" style={{ width: 50 }} />
      </Link>
      {!currentUser?.name && (
        <Link
          to="/user/login"
          style={{
            backgroundColor: "white",
            color: "black",
            border: "none",
            padding: "8px 12px",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.2s",
            textDecoration: "none",
          }}
        >
          Login
        </Link>
      )}
      {currentUser?.name && (
        <div className="name" onMouseEnter={handleNameHover}>
          {currentUser?.name}
          {showDropdown && (
            <div className="dropdown" onMouseLeave={handleDropdownClose}>
              <button className="logout-button" onClick={handleLogoutClick}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
