import React from 'react';
import "./BestSellingBooks.css"
import { data } from "../../../data/booksDataShort.js";
import { NavLink } from 'react-router-dom';

function BestSellingBooks() {
  return (
    <div className="bestSelling">
        <div className="bestSellingBookImage">
          <img src={data[1].image} alt="book" />
        </div>
        <div className="bestSellingInfos">
          <div className="header">
            <h1>best selling</h1>
          </div>
          <div className="info">
            <h3>{data[1].author}</h3>
            <h2>{data[1].title}</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              hic, nesciunt blanditiis consequatur eius incidunt cum est nobis
              non. Asperiores necessitatibus nostrum harum iusto nulla
              perferendis hic, alias eaque officia!
            </p>
            <span>{data[2].price}€</span>
            <div className="buttons">
              <button>buy now</button>
              <button><NavLink to="/shop">see more</NavLink></button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BestSellingBooks