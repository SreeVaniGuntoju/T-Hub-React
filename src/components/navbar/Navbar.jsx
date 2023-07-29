import React, { useState } from "react";

const Navbar = () => {
  return (
    <>
      <nav id="nav">
        <div className="container">
          <h2 className="banner">
            T-Hub</h2>
          <ul>
            <li>
              {" "}
              <a href="#hero">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#specials">Specials</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#work">Our Work</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#contact">Contact us</a>{" "}
            </li>
          </ul>
        </div>
      </nav>
  
    </>
  );
};

export default Navbar;
