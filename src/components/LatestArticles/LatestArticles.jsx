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
<div className="latestArticles">
        <div className="latestArticlesHeaders">
          <h4>read our articles</h4>
          <h1>latest articles</h1>
        </div>

        <div className="articles">
          <div className="articlesContainer">
            {articles.map((item, index) => (
              <>
                <div className="articlesBox">
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    key={index}
                    playsInline
                    loop
                  ></video>
                  <p>{item.date}</p>
                  <span>{item.text}</span>
                  <div className="inspiration">
                    <p>inspiration</p>
                    <div className="socialMedias">
                      <RiFacebookFill className="socialFace" />
                      <SlSocialInstagram className="socialInstagram" />
                      <FaXTwitter className="socialTwitter" />
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="readAllArticles">
            <NavLink to="/articles">
              <button>read all articles</button>
            </NavLink>
            <HiArrowLongRight className="readAllRightArrow" />
          </div>
        </div>
      </div>
  );
}

export default LatestArticles;
