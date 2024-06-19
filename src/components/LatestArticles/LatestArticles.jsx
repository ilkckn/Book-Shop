import React from "react";
import "./LatestArticles.css";
import { NavLink } from "react-router-dom";
import { articles } from "../../../data/Articles.js";
import { HiArrowLongRight } from "react-icons/hi2";
import { RiFacebookFill } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

function LatestArticles() {
  return (
    <div className="latestArticlesContainer">
      <div className="latestArticlesHeaders">
        <h3>read our articles</h3>
        <h1>latest articles</h1>
      </div>
      <div className="articlesBoxes">
        {articles.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.image} alt={item.text} />
            <p className="date">{item.date}</p>
            <p className="title">{item.text}</p>
            <div className="inspiration-socialMedia">
              <p className="inspiration">inspiration</p>
              <div className="socialMedia">
                <RiFacebookFill className="socialIcon" />
                <SlSocialInstagram className="socialIcon" />
                <FaXTwitter className="socialIcon" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="readAllArticles">
        <button>
          read all articles
          <HiArrowLongRight className="arrow" />
        </button>
      </div>
    </div>
  );
}

export default LatestArticles;
