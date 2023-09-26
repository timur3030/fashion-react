import React, { useState } from "react";
import imgLogo from "./../../img/icons/logo.svg";
import "./header.css";
import Hamburger from "../hamburger/Hamburger";

function Header({ elements }) {
  const [active, setActive] = useState(false);
  const toggleActive = (current) => {
    setActive(!current);
  };

  function scrollTo(elem) {
    elem.scrollIntoView({ behavior: "smooth" });
  }

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
                <a
                  href="#!"
                  onClick={() => {
                    setActive(false);
                    scrollTo(elements.arrivals);
                  }}
                >
                  NEW ARRIVALS
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  onClick={() => {
                    setActive(false);
                    scrollTo(elements.sale);
                  }}
                >
                  SALE
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  onClick={() => {
                    setActive(false);
                    scrollTo(elements.favourite);
                  }}
                >
                  FAVOURITE
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  onClick={() => {
                    setActive(false);
                    scrollTo(elements.download);
                  }}
                >
                  DOWNLOAD
                </a>
              </li>
              <li className="li-btn">
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
