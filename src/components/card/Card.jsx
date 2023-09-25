import React from "react";
import classes from "./Card.module.css";

import imgArrow from "./../../img/icons/arrow.svg";

function Card({ title, img }) {
  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={img} alt="Card img" />
      <div className={classes.card__body}>
        <div className={classes.card__text}>
          <div className={classes.card__title}>{title}</div>
          <div className={classes.card__descr}>Explore Now!</div>
        </div>
        <div className={classes.card__icon}>
          <img src={imgArrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Card;
