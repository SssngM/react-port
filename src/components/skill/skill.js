import React from "react";
import "./skill.css";
import Skilllist from "../skilllist/skilllist";
import html5 from "../../imges/html.png";
import css from "../../imges/css.png";
import javascript from "../../imges/javascript-logo.png";
import reactlo from "../../imges/reactlogo.png";
import figma from "../../imges/figma.png";
import github from "../../imges/git.png";
import pythonlo from "../../imges/pythonlogo.png";
import flasklo from "../../imges/flask.png";
import email from "../../imges/email.png";
import linkedin from "../../imges/linkedin.png";
import vue from "../../imges/vue.png";
import githublo from "../../imges/github.png";

export const Skill = () => {
  return (
    <div className="k">
      <div className="k-title">SKILLS</div>
      <div className="k-img">
        <Skilllist img={html5} />
        <Skilllist img={css} />
        <Skilllist img={javascript} />
        <Skilllist img={reactlo} />
        <Skilllist img={vue} />
        <Skilllist img={pythonlo} />
        <Skilllist img={flasklo} />
        <Skilllist img={figma} />
        <Skilllist img={github} />
      </div>
      <div className="k-title">Let’s work together</div>
      <div className="contact" > Contact me </div >
      <div className="k-contact">
        <a href="mailto:seungmyoo525@gmail.com">
          {" "}
          <img src={email} />{" "}
        </a>
        <a href="https://www.linkedin.com/in/seungmin-yoo-01376932">
          {" "}
          <img src={linkedin} />
        </a>
        <a href="https://github.com/SssngM">
          {" "}
          <img src={githublo} />{" "}
        </a>
      </div>
    </div>
  );
};

export default Skill;
