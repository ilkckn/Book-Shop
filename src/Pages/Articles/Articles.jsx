import React from "react";
import "./Articles.css"
import { NavLink } from "react-router-dom";

function Articles() {
  return (
    <div className="articlesContainer">
      <h1>404</h1>
      <h2>opps, this page is not found</h2>
      <button>
        <NavLink to="/">go to home</NavLink>
      </button>
    </div>
  );
}

export default Articles;
