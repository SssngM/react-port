import React from "react";
import "./skill.css";
import Skilllist from "../skilllist/skilllist";
import html5 from "../../imges/html.png";
import css from "../../imges/css.png";
import javascript from "../../imges/javascript-logo.png";
import reactlo from "../../imges/reactlogo.png";
import figma from "../../imges/figma.png";
import github from "../../imges/github.png";
import pythonlo from "../../imges/pythonlogo.png";
import flasklo from "../../imges/flask.png";
import email from "../../imges/email.png";
import linkedin from "../../imges/linkedin.png";
import vue from "../../imges/vue.png";
import githublo from "../../imges/github.png";
import gitlab from "../../imges/gitlab.png";
import vscode from "../../imges/vscode.png";
import sass from "../../imges/sass.png";
import storybook from "../../imges/storybook.png";
import Ai from "../../imges/Ai.png";

export const Skill = () => {
  return (

    <div className="k">
      <div className="port">SKILLS</div>
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
        <Skilllist img={gitlab} />
        <Skilllist img={sass} />
        <Skilllist img={vscode} />
        <Skilllist img={storybook} />
        <Skilllist img={Ai} />
      </div>
     
      <div className="port"> COLLABORATION</div >
      {/* <div className= "contact">Let's talk</div> */}
      <div className="k-contact">
        <a href="mailto:seungmyoo525@gmail.com" target="_blank" className="contact-list">
          {" "}
          <img src={email} />{" "}
        </a>
        <a href="https://www.linkedin.com/in/seungmin-yoo-01376932" target="_blank" className="contact-list">
          {" "}
          <img src={linkedin} />
        </a>
        <a href="https://github.com/SssngM" target="_blank" className="contact-list">
          {" "}
          <img src={githublo} />{" "}
        </a>
      </div>
    </div>
  );
};

export default Skill;
