import React from "react";
import "./Top.css";
import logo from "../image/logo.svg";

const Top = () => {
  return (
    <div className="topAll">
      <div className="allTop">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="topLink">
          <div className="firstLink">
            <ul>
              <li>Products</li>
              <li>Features</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="lastLink">
            <ul>
              <li>Login</li>
              <li style={{ color: "gray" }}>|</li>
              <li>
                <button>Register</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
