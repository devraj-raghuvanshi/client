import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";
import Pen from "../img/pen.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <div className="categories">
          <Link className="link" to="/?cat=art">
            <h6><strong>ART</strong></h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6><strong>SCIENCE</strong></h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6><strong>TECHNOLOGY</strong></h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6><strong>CINEMA</strong></h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6><strong>DESIGN</strong></h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6><strong>FOOD</strong></h6>
          </Link>
          </div>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              +
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;