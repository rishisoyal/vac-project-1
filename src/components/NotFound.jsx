import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="main">
        <div style={{display: "flex", flexDirection: "column"}} className="content">
          <h1>404!</h1>
          <p style={{paddingBottom: "20px"}}>The page you are looking for could not be found.</p>
          <NavLink to="/">
            <button>Back To Home</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NotFound;
