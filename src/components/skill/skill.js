import React from 'react'
import "./skill.css"
import Skilllist from "../skilllist/skilllist"
import html5  from "../../img/html.png"
import css from "../../img/css.png"
import javascript from "../../img/javascript-logo.png"
import reactlo from "../../img/reactlogo.png"
import figma from "../../img/figma.png"
import github from "../../img/git.png"
import pythonlo from "../../img/pythonlogo.png"
import flasklo from "../../img/flask.png"
import email from "../../img/email.png"
import linkedin from "../../img/linkedin.png"
import githublo from "../../img/github.png"


export const Skill = () => {
  return (
    <div className="k">
    <div className="k-title">SKILLS</div>
    <div className="k-img">
    <Skilllist img={html5} />
    <Skilllist img={css} />
    <Skilllist img={javascript} />
    <Skilllist img={reactlo} />
    <Skilllist img={pythonlo} />
    <Skilllist img={flasklo} />
    <Skilllist img={figma} />
    <Skilllist img={github} />
    </div>
    <div className="k-title">GET IN TOUCH</div>
    <div className="k-contact"> 
     <a href="mailto:seungmyoo525@gmail.com" >  <img src ={email}/> </a> 
     <a href="https://www.linkedin.com/in/seungmin-yoo-01376932">  <img src ={linkedin}/></a>
     <a href="https://github.com/SssngM"> <img src ={githublo}/> </a>
    </div>
    </div>
  )
}


export default Skill