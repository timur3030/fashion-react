import React, { useState } from "react";
import "./scrollToUp.css";
import imgUp from "./../../img/icons/up.svg";

function ScrollToUp() {
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={active ? "scrollToUp scrollToUp_active" : "scrollToUp"}
      onClick={toTop}
    >
      <img src={imgUp} alt="Top" />
    </div>
  );
}

export default ScrollToUp;
