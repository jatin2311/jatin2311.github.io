import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_x1gdbaj",
      "template_1xpq57f",
      form.current,
      "xEuYkw9ZUVHdl8bMF"
    );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>strangerguy.2311@gmail.com</h5>
            <a
              href="mailto:strangerguy.2311@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>jatin.23__</h5>
            <a
              href="https://www.instagram.com/jatin.23__/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Jatin Agrahari</h5>
            <a
              href="https://www.linkedin.com/in/jatin-agrahari2311/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* end of options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full  Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email  "
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
