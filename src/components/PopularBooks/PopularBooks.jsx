import React from "react";
import "./PopularBooks.css"
import Filters from "../Filters/Filters";

function PopularBooks() {

  return (
    <div className="popularBooksContainer">
      <div className="popularBooksHeaders">
        <h3>some quality items</h3>
        <h1>Popular books</h1>
      </div>
      <Filters />
    </div>
  );
}

export default PopularBooks;
