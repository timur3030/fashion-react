import React from "react";
import "./promo.css";
import imgPromo from "./../../img/images/header-img.jpg";

function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <h1 className="promo__title">
              <span className="highlight">
                <span>LET'S</span>
              </span>
              EXPLORE
              <span className="highlight highlight-_yellow">
                <span>UNIQUE </span>
              </span>
              CLOTHES.
            </h1>
            <div className="promo__descr">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <a href="#!" className="btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={imgPromo} alt="Promo Img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
