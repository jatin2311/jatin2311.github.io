import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/jatin-agrahari2311/" target="blank">
        <BsLinkedin />{" "}
      </a>
      <a href="https://github.com/jatin2311" target="blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/jatin.23__/" target="blank">
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
