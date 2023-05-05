import React from "react";
import Logo from "../../elements/logo/Logo";
import Nav from "./Nav";
import { FiX } from "react-icons/fi";

const MobileMenu = ({ show, onClose }) => {
  return (
    <div
      style={{ background: "#ececec" }}
      className={`popup-mobile-menu ${show ? "active" : ""}`}
    >
      <div style={{ background: "#f5f8fa" }} className="inner">
        <div style={{ background: "#f5f8fa" }} className="header-top">
          <Logo
            image={
              "https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/Logo%2Flogo1.png?alt=media&token=900c69b4-2000-4a51-8db7-76a40886772a"
            }
            image2={
              "https://firebasestorage.googleapis.com/v0/b/sport-cars-luxury.appspot.com/o/Logo%2Flogo1.png?alt=media&token=900c69b4-2000-4a51-8db7-76a40886772a"
            }
          />
          <div style={{ background: "#fff" }} className="close-menu">
            <span className="close-button" onClick={onClose}>
              <FiX />
            </span>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};
export default MobileMenu;
