import React from "react";
import "./intro.css";
import Introimg from "../../imges/intromac2.jpg";

function Intro(props) {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-name"> Seung Yoo</h1>
          <div className="i-title">
            <div className="title-item">Based in San Francisco. </div>
            <div className="title-item">A UI & Front-end Engineer. </div>
            <div className="title-item">
              Currently working on{" "}
              <a href="https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui">
                Slippers Design System
              </a>{" "}
              at GitLab
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Introimg} className="intro-img" />
      </div>
    </div>
  );
}

export default Intro;
