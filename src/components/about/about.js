import React from "react";
import "./about.css";
import Aboutme from "../../imges/about.jpg";

export default function About() {
  return (
    <div className="a">
      <h3 className="port">ABOUT ME</h3>
      <div className="all">
        <div className="a-left">
          <div className="a-left-title"> Community Builder</div>
          <div div className="a-left-wrapper">
            
            organize local community in tech
            <div>Launching non-profit as co-organizer</div>
          </div>
          {/* <div className="a-left-wrapper">
            with diversity equity & inclusion
          </div> */}
          <div className="a-left-title">Design Thinker </div>
          <div className="a-left-wrapper"> 
          <div> Problems solver, happily creatively </div>
          Passion for new feature 
          </div> 

          <div className="a-left-title">Frontend coding skills</div>
          <div className="a-left-wrapper">
        <div> Dive into details</div>
        <div> Vision for how to make things happen</div>
        </div>
        </div>

        <div className="a-right">
          <img src={Aboutme} className="image" />
        </div>
      </div>
      <div className="a-desc">
        {" "}
        {/* <div> * Was in design and education indutry for years and currently exploring front-end
        engineering. * Love meeting people, learning something new and collaborating with
        others.  * Set up study groups multiple times for React, Data structure
        algorithm and toy projects. * Currently building a website for the Tech
        Girls Social group as a volunteer.{" "} </div> */}
      </div>
    </div>
  );
}
