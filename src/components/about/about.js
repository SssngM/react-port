import React from "react";
import "./about.css";
import Aboutme from "../../imges/about.jpg";

export default function About() {
  return (
    <div className="a">
      <div className="port">ABOUT ME</div>
      <div className="all">
        <div className="a-left">
          <div className="a-left-title"> Community Builder</div> 
          <div div className="a-left-wrapper">
            
          Co-organizing and networking
            <div>at the local SF tech communities</div>
          </div>
          {/* <div className="a-left-wrapper">
            with diversity equity & inclusion
          </div> */}
          <div className="a-left-title">Design Thinker </div>
          <div className="a-left-wrapper"> 
          <div> Problem solver who enjoys creative thinking</div>
          Experienced in visual design with a passion for new features.
          </div> 

          <div className="a-left-title">Frontend Coding Skills</div>
          <div className="a-left-wrapper">
        <div> Enjoy delving into details</div>
        <div> Clear vision for making things happen.</div>
        </div>
        </div>

        <div className="a-right">
          <img src={Aboutme} className="image" />
        </div>
      </div>
      <div>
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
