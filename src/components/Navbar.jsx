import React from "react";
import github_logo from "../resources/icons/GitHub_logo.png";

import "../resources/css/components/Navbar.css";

import { useMessage } from "../hooks/useMessage.js";

function Navbar({ onChangeLocale }) {
  const msg = useMessage();

  function onClickHome() {
    window.scrollTo(0, 0);
  }

  return (
    <nav id="home" className="navbar">
      <div className="nav nav-left">
        <a href="#home" onClick={onClickHome}>
          Dave Shin
        </a>
      </div>
      <div className="nav nav-center">
        <a href="#about_section">About</a>
        <a href="#skills_section">Skills</a>
        <a href="#details_section">Details</a>
      </div>
      <div className="nav nav-right">
        <a
          href="https://github.com/songi255/portfolio/tree/master"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="github-logo" src={github_logo} alt="github logo" />
        </a>
        <button className="btn-translate" onClick={onChangeLocale}>
          {msg.navbar.btn_translate}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
