import React from "react";
import "./intro.css";
import Introimg from "../../imges/intromac2.jpg";
import Ani from "../../imges/port_ani.gif"

function Intro(props) {
  return (
    <div>
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
        {/* <div className="i-hello">Hello! I am </div> */}
          <h2 className="i-name"> Seung Yoo</h2>
          <div className="i-title">
            <div className="title-item">Hello, I'm a Frontend Engineer </div>
            <div className="title-item">based in San Francisco. </div>
            <div className="title-item">
              Recently finished working at GitLab,  {" "}
            <div>{" "}<a href="https://design.gitlab.com/">Slippers(Pajamas)</a>UI Design System. </div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        {/* <img src={Introimg} className="intro-img" /> */}
        {/* <video controls autoPlay loop muted>
          <source src={myVideo} type="video/mp4"></source>
        </video> */}
        {/* <img src={Ani} alt="loading..." /> */}
      </div>
    </div>
    <div className="i-lines">
      <div className="intro-line"></div>
      <div className="intro-line0"></div>
      <div className="intro-line1"></div>
      <div className="intro-line2"></div>
      <div className="intro-line3"></div>
    </div>
    </div>
  );
}

export default Intro;
