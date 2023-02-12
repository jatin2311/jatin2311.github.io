import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href={"/"} className="footer__logo">
        Jatin Agrahari
      </a>

      <ul className="permalinks">
        <li>
          <a href={"/"}>Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/jatin2311" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/jatin.23__/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/jatinagrahari23"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/jatin-agrahari2311/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; All rights reserved. Made by <span> Jatin </span>from 🤍
        </small>
      </div>
    </footer>
  );
};

export default Footer;
