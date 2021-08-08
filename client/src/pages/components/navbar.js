import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("authToken");

  const logout = () => {
    if (token) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
  }

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

        {token &&
          <div className="acc_btns">
            <button onClick={logout} className="acc_logout">Logout</button>
          </div>
        }
      </div>
    </header>
  );
};

export default Navbar;
