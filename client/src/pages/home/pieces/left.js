import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import avatar from "../../images/avatar.jpg";

export const Left = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState("");

  const parseJwt = async function () {
    const token = localStorage.getItem("authToken");
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const data = JSON.parse(atob(base64));
    setId(data._id);
    const res = await axios.get("/auth/user/" + data._id);
    setUser(res.data);
  }

  useState(() => {
    parseJwt();
  }, []);

  console.log(id);
  console.log(user);

  return (
    <div className="left-content-box">
      <div className="left-options">
        <div className="side-profile">
          <img src={avatar} alt="Avatar" />
          <span>
            <a href="/my-profile">Annukul</a>
          </span>
        </div>
        <ul>
          <li>
            <Link to="/home">
              <i class="fas fa-home"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fas fa-university"></i>
              <span>College</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fas fa-exclamation-circle"></i>
              <span>Alerts</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fas fa-flag"></i>
              <span>Notices</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fas fa-project-diagram"></i>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fas fa-print"></i>
              <span>Exams</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <i className="fas fa-snowman"></i>
              <span>Holidays</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer">
        <ul>
          <li>
            <Link to="">Contact -</Link>
          </li>
          <li>
            <Link to="">Report -</Link>
          </li>
          <li>
            <Link to="">API -</Link>
          </li>
          <li>
            <Link to="">FAQs -</Link>
          </li>
          <li>
            <Link to="">Ask</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left;
