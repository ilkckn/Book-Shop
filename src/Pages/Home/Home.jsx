import React from "react";
import { companyData } from "../../../data/bookCompanies.js";
import "./Home.css";
import HomeSlider1 from "../../components/HomeSlider1/HomeSlider1.jsx";
import FeaturedBooks from "../../components/FeaturedBooks/FeaturedBooks.jsx";
import BestSellingBooks from "../../components/BestSellingBooks/BestSellingBooks.jsx";
import PopularBooks from "../../components/PopularBooks/PopularBooks.jsx";
import Quotes from "../../components/Quotes/Quotes.jsx";
import LatestArticles from "../../components/LatestArticles/LatestArticles.jsx";

function Home() {
  return (
    <div className="homeContainer">
      <HomeSlider1 />
      <div className="bookCompaniesBox">
        <div className="companies">
          {companyData.map((item, index) => (
            <img src={item.image} alt="" key={index} />
          ))}
        </div>
      </div>
      <FeaturedBooks />
      <BestSellingBooks />
      <PopularBooks />
      <Quotes />
      <LatestArticles />
    </div>
  );
}

export default Home;
