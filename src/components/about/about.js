import React from "react";
import "./about.css";
import Aboutme from "../../imges/about.jpg";

export default function About() {
  return (
    <div className="a">
      <h3>ABOUT ME</h3>
      <div className="all">
        <div className="a-left">
          <div className="a-left-title"> Co-organizer </div>
          <div div className="a-left-wrapper">
            {" "}
            of Tech Girls Social (in SF) {""}
          </div>
          {/* <div className="a-left-wrapper">
            with diversity equity & inclusion
          </div> */}
          <div className="a-left-title">Design Thinker </div>
          <div className="a-left-wrapper"> Hand Drawing and design </div>
          <div className="a-left-title">Frontend Engineer </div>
          <div className="a-left-wrapper"> Understand experience users </div>
        </div>

        <div className="a-right">
          <img src={Aboutme} className="image" />
        </div>
      </div>
      <div className="a-desc">
        {" "}
        <div> * Was in design and education indutry for years and currently exploring front-end
        engineering. * Love meeting people, learning something new and collaborating with
        others.  * Set up study groups multiple times for React, Data structure
        algorithm and toy projects. * Currently building a website for the Tech
        Girls Social group as a volunteer.{" "} </div>
      </div>
    </div>
  );
}
