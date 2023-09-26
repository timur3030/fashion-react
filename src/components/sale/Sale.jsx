import React, { useEffect, useRef } from "react";
import "./sale.css";
import imgSale from "./../../img/images/promo-img.jpg";

function Sale({ getSale }) {
  const ref = useRef();

  useEffect(() => getSale(ref.current));

  return (
    <section className="sale">
      <div className="sale__content">
        <div className="sale__img">
          <img src={imgSale} alt="Sale img" />
        </div>
        <div className="sale__text" ref={ref}>
          <h2 className="sale__title">
            <span className="highlight">
              <span>PAYDAY</span>
            </span>
            SALE NOW
          </h2>
          <div className="sale__descr">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </div>
          <div className="sale__dates">1 June - 10 June 2021</div>
          <div className="sale__descr">*Terms & Conditions apply</div>
          <a className="btn" href="#!">
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sale;
