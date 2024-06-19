import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo/LogoLetter.png";
import { PiUser } from "react-icons/pi";
import { CgShoppingBag } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../Modal/Modal";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const closeModal = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setLoginError("");
    setRegisterError("");
    setUsername("");
    setPassword("");
  };

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === "" || password === "") {
      setLoginError("You cannot leave this field empty.");
    } else if (username !== storedUsername || password !== storedPassword) {
      setLoginError("Incorrect username or password.");
    } else {
      setIsLoggedIn(true);
      setLoggedInUser(username);
      closeModal();
      navigate("/");
    }
  };

  const handleRegister = () => {
    if (username === "" || password === "") {
      setRegisterError("You cannot leave this field empty.");
    } else {
      // Kullanıcı bilgilerini localStorage'a kaydet
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      openLogin();
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser("");
    navigate("/");
  };

  return (
    <div className="navbarContainer">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="rightBar">
        <div className={`links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/articles">Articles</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="user-cart">
        {isLoggedIn && <span className="username">{loggedInUser}</span>}
        {isLoggedIn ? (
          <button className="logout" onClick={handleLogout}>Logout</button>
        ) : (
          <PiUser className="user" onClick={openLogin} />
        )}
        <CgShoppingBag className="cart" />
        {isMenuOpen ? (
          <AiOutlineClose className="burger-menu" onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu className="burger-menu" onClick={toggleMenu} />
        )}
      </div>

      <Modal isOpen={isLoginOpen} onClose={closeModal}>
        <div className="modalContent">
          <h2>Login</h2>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={handleLogin}>Login</button>
          {loginError && <p className="errorMessage">{loginError}</p>}
          <p>If you don't have an account, <span onClick={openRegister} className="modalLink">register</span>.</p>
        </div>
      </Modal>

      <Modal isOpen={isRegisterOpen} onClose={closeModal}>
        <div className="modalContent">
          <h2>Register</h2>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={handleRegister}>Register</button>
          {registerError && <p className="errorMessage">{registerError}</p>}
          <p>If you already have an account, <span onClick={openLogin} className="modalLink">login</span>.</p>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
