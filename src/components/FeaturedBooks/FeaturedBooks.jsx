import React from "react";
import Slider from "react-slick";
import "./FeaturedBooks.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredBooks } from "../../../data/booksFeatured.js";

function FeaturedBooks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="featuredBooks slider-container">
      <div className="featuredBooksHeaders">
        <h3>some quality items</h3>
        <h1>featured books</h1>
      </div>
      <Slider {...settings}>
        {featuredBooks.map((item, index) => (
          <div className="featuredBooksBoxWrapper" key={index}>
            <div className="featuredBooksBox">
              <div className="images">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="booksInfo">
                <h2>{item.title}</h2>
                <span>{item.author}</span>
                <p>{item.price}€</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedBooks;
