import React from "react";
import "./download.css";
import imgDownload from "./../../img/images/vouchers-img.png";
import imgAppstore from "./../../img/icons/app-store.png";
import imgPlaymarket from "./../../img/icons/google-play.png";

function Download() {
  return (
    <section className="download">
      <div className="download__content">
        <div className="download__text">
          <h2 className="download__title">DOWNLOAD APP & GET THE VOUCHER!</h2>
          <div className="download__descr">
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </div>
          <div className="download__links">
            <a className="" href="#!">
              <img src={imgAppstore} alt="Appstore" />
            </a>
            <a className="" href="#!">
              <img src={imgPlaymarket} alt="Playmarket" />
            </a>
          </div>
        </div>
        <div className="download__img">
          <img src={imgDownload} alt="download img" />
        </div>
      </div>
    </section>
  );
}

export default Download;
