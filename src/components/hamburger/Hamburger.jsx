import React from "react";
import "./hamburger.css";

function Hamburger({ active, toggleActive }) {
  return (
    <div
      className={active ? "hamburger hamburger_active" : "hamburger"}
      onClick={() => toggleActive(active)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Hamburger;
