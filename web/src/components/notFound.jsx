import React from "react";
import { Link } from "react-router-dom";
import Header from "../pages/header";
const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Link to="/">
          <button>Go Back Home</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
