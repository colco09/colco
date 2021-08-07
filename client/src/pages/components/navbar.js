import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="up">
        <div className="logo-img">
          <Link to="/home">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="search_form">
          <form action="">
            <input type="search" name="search" />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="acc_btns">
          <div className="acc_profile">
            <Link className="white-color" to="/profile">
              P
            </Link>
          </div>
          <div className="acc_logout">
            <Link className="white-color" to="/logout">
              L
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
