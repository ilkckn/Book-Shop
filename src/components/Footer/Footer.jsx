import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerBox">
        <div className="aboutUs">
          <div className="header">about us</div>
          <div className="links">
            <a href="">vision</a>
            <a href="/articles">Articles</a>
            <a href="">careers</a>
            <a href="">service terms</a>
            <a href="">donate</a>
          </div>
        </div>
        <div className="discover">
          <div className="header">discover</div>
          <div className="links">
            <a href="/">home</a>
            <a href="">books</a>
            <a href="">authors</a>
            <a href="">subjects</a>
            <a href="">advanced search</a>
          </div>
        </div>
        <div className="myAccounts">
          <div className="header">my account</div>
          <div className="links">
            <a href="">sign in</a>
            <a href="">Articles</a>
            <a href="">view cart</a>
            <a href="">my wishlist</a>
            <a href="">track my order</a>
          </div>
        </div>
        <div className="helps">
          <div className="header">helps</div>
          <div className="links">
            <a href="">help center</a>
            <a href="">report a problem</a>
            <a href="">view cart</a>
            <a href="">suggesting edits</a>
            <a href="/contact">contact us</a>
          </div>
        </div>
      </div>
      <div className="rightsAndReserved">
        <p>© 2024 MusaCekcen. All rights reserved.</p>
        <div className="socialPlatforms">
          <FaFacebookF className="platform" />
          <FaInstagram className="platform" />
          <FaXTwitter className="platform" />
          <FaLinkedin className="platform" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
