import React from "react";
import "./About.css"
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="aboutContainer">
      <h1>404</h1>
      <h2>opps, this page is not found</h2>
      <button>
        <NavLink to="/">go to home</NavLink>
      </button>
    </div>
  );
}

export default About;
