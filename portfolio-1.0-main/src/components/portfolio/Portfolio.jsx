import React from "react";
import "./portfolio.css";
import Fade from "../../assets/fade.png";
import Astra from "../../assets/astra.jpeg";
import Paytm from "../../assets/paytm.jpeg";
import Shopify from "../../assets/shopify.jpeg";
import Rode from "../../assets/rode.jpeg";
import Resume from "../../assets/resumehub.jpeg";

const Data = [
  {
    id: "1",
    image: Fade,
    title: "The Fade E-commerce store",
    github: "",
    demo: "https://www.google.com",
  },
  {
    id: "2",
    image: Resume,
    title: "Resume Hub | Resume Builder",
    github: "https://github.com/jatin2311/Resume-Hub-Resume-Builder-",
    demo: "https://resumebuilderhub.netlify.app/",
  },
  {
    id: "3",
    image: Astra,
    title: "Astra Music | Player",
    github: "https://github.com/jatin2311/Astra-Music_Player",
    demo: "https://astramusicplayer.netlify.app/",
  },
  {
    id: "4",
    image: Shopify,
    title: "Rode | clone",
    github: "https://github.com/jatin2311/rode-clone",
    demo: "https://rode-0.netlify.app/",
  },
  {
    id: "5",
    image: Rode,
    title: "shopify | clone",
    github: "https://github.com/jatin2311/shopify-clone",
    demo: "https://shopify-0.netlify.app/",
  },
  {
    id: "6",
    image: Paytm,
    title: "Paytm | clone",
    github: "https://github.com/jatin2311/Paytm-clone",
    demo: "https://paytm-clone-0.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {Data.map((e) => {
          return (
            <article key={e.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={e.image} alt="" />
              </div>
              <h3>{e.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={e.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={e.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
