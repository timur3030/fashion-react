import React from "react";
import "./form.css";

function Form() {
  return (
    <section className="form">
      <h2 className="form__title">
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
      </h2>
      <div className="form__descr">
        Type your email down below and be young wild generation
      </div>
      <form action="" className="form__form">
        <div className="form__input">
          <input
            className=""
            type="text"
            placeholder="Add your email here"
          ></input>
          <button className="form__btn">SEND</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
