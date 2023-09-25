import React, { useState } from "react";
import imgLogo from "./../../img/icons/logo.svg";
import "./header.css";
import Hamburger from "../hamburger/Hamburger";

function Header() {
  const [active, setActive] = useState(false);
  const toggleActive = (current) => {
    setActive(!current);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={imgLogo} alt="LOGO" />
            <span>FASHION</span>
          </div>
          <nav
            className={
              active ? "header__nav header__nav_active" : "header__nav"
            }
          >
            <ul>
              <li>
                <a href="#!" onClick={() => setActive(false)}>
                  CATALOGUE
                </a>
              </li>
              <li>
                <a href="#!" onClick={() => setActive(false)}>
                  FASHION
                </a>
              </li>
              <li>
                <a href="#!" onClick={() => setActive(false)}>
                  FAVOURITE
                </a>
              </li>
              <li>
                <a href="#!" onClick={() => setActive(false)}>
                  LIFESTYLE
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="header__nav-btn"
                  onClick={() => setActive(false)}
                >
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
          <Hamburger active={active} toggleActive={toggleActive} />
        </div>
      </div>
    </div>
  );
}

export default Header;
