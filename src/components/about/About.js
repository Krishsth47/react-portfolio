import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";

import { FiAward } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 Months at Dented Code</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6 Months at Dented Code</small>
            </article>

            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Skills</h5>
              <small>Front End & BackEnd Development</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            veniam omnis perspiciatis aperiam fugiat voluptates quasi nostrum,
            exercitationem distinctio suscipit accusamus debitis eligendi ad
            tempore dignissimos reprehenderit nulla adipisci mollitia? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Quos, ut.
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
