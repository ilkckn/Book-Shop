import React from "react";
import "./Shop.css"
import { NavLink } from "react-router-dom";

function Shop() {
  return (
    <div className="shopContainer">
      <h1>404</h1>
      <h2>opps, this page is not found</h2>
      <button>
        <NavLink to="/">go to home</NavLink>
      </button>
    </div>
  );
}

export default Shop;
