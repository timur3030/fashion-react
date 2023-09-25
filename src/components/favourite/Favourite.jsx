import React from "react";
import "./favourite.css";
import Card from "../card/Card";

import imgCard01 from "./../../img/images/promo-01.jpg";
import imgCard02 from "./../../img/images/promo-02.jpg";

function Favourite() {
  return (
    <section className="favourite">
      <div className="container">
        <div className="favourite__header">
          <h2 className="favourite__title">Young's Favourite</h2>
        </div>
        <div className="favourite__cards">
          <Card title={"Trending on instagram"} img={imgCard01} />
          <Card title={"All Under $40"} img={imgCard02} />
        </div>
      </div>
    </section>
  );
}

export default Favourite;
