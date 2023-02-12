import React from "react";
import "./about.css";
import Me from "../../assets/about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5 className="">Get to know</h5>
      <h2 className="">About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__para">
          <p>
            Hi, I am Jatin. I am a designer & a full-stack web developer.
            <br /> I define myself by the work I want to do. Skills can be
            taught, but personality is inherent. I prefer to keep learning,
            continue challenging myself, and do exciting things that matter.
            <br /> I'm easily inspired and more than willing to follow my
            fascinations wherever they take me. I'm a passionate expressive,
            multi-talented spirit with a natural ability to entertain and
            inspire. I'm never satisfied with just coming up with ideas.
            Instead, I have an almost impulsive need to act on them.
            <br /> My abundant energy fuels me in the pursuit of many interests,
            hobbies, areas of study, and artistic endeavors. I'm a fast learner,
            able to pick up new skills and juggle different projects and roles
            with relative ease. I like to develop expertise in a number of areas
            over the course of my life and career.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
