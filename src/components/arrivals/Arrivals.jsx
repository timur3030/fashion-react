import React from "react";
import "./arrivals.css";

import Card from "../card/Card";
import imgCard01 from "./../../img/categories/cat-01.jpg";
import imgCard02 from "./../../img/categories/cat-02.jpg";
import imgCard03 from "./../../img/categories/cat-03.jpg";

function Arrivals() {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="arrivals__title">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals__cards">
          <Card title={"Hoodies & Sweetshirt"} img={imgCard01} />
          <Card title={"Coats & Parkas"} img={imgCard02} />
          <Card title={"Tees & T-Shirt"} img={imgCard03} />
        </div>
      </div>
    </section>
  );
}

export default Arrivals;
