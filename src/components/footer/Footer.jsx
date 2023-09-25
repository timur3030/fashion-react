import React from "react";
import "./footer.css";
import imgFb from "./../../img/socials/fb.svg";
import imgInst from "./../../img/socials/inst.svg";
import imgTw from "./../../img/socials/tw.svg";
import imgIn from "./../../img/socials/in.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__social">
            <div className="footer__social-title">FASHION</div>
            <div className="footer__social-descr">
              Complete your style with awesome clothes from us.
            </div>
            <div className="footer__social-list">
              <a className="footer__social-link" href="#!">
                <img src={imgFb} alt="Facebook" />
              </a>
              <a className="footer__social-link" href="#!">
                <img src={imgInst} alt="Instagram" />
              </a>
              <a className="footer__social-link" href="#!">
                <img src={imgTw} alt="Twitter" />
              </a>
              <a className="footer__social-link" href="#!">
                <img src={imgIn} alt="In" />
              </a>
            </div>
          </div>
          <div className="footer__text">
            <div className="footer__list">
              <div className="footer__list-title">Company</div>
              <ul>
                <li><a href="#!">About</a></li>
                <li><a href="#!">Contact us</a></li>
                <li><a href="#!">Support</a></li>
                <li><a href="#!">Careers</a></li>
              </ul>
            </div>
            <div className="footer__list">
              <div className="footer__list-title">Quick Link</div>
              <ul>
                <li><a href="#!">Share Location</a></li>
                <li><a href="#!">Orders Tracking</a></li>
                <li><a href="#!">Size Guide</a></li>
                <li><a href="#!">FAQs</a></li>
              </ul>
            </div>
            <div className="footer__list">
              <div className="footer__list-title">Legal</div>
              <ul>
                <li><a href="#!">Terms & conditions</a></li>
                <li><a href="#!">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
