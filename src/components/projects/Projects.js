import React from "react";

import "./projects.css";

import IMG1 from "../../assets/movie-list.jpg";
import IMG2 from "../../assets/contact-list.jpg";
import IMG3 from "../../assets/not-to-do-list.png";
import IMG4 from "../../assets/prank-calculator.png";
import IMG5 from "../../assets/counter.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "",
    github: "",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "",
    github: "",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "",
    github: "",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "",
    github: "",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "",
    github: "",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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

export default Projects;
