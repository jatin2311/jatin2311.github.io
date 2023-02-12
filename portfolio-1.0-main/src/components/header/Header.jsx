import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/jj.png";
import HeaderSocial from "./HeaderSocial";
// import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jatin Agrahari</h1>
        <h5 className="text-light">Fullstack Javascript Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="" className="jj__image" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
