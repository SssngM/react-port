import React from "react";
import "./intro.css";
import Introimg from "../../imges/intromac2.jpg";
import Intromc from "../../imges/intromc.svg";

function Intro(props) {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
        {/* <div className="i-hello">Hello! I am </div> */}
          <h2 className="i-name"> Seung Yoo</h2>
          <div className="i-title">
            <div className="title-item">Hello, I'm a Frontend Engineer </div>
            <div className="title-item">based in San Francisco. </div>
            <div className="title-item">
              Recently finished working at GitLab,
              <a href="https://design.gitlab.com/">Slippers[Pajamas]</a>
             <div> UI Design System.</div>  
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
