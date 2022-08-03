import React from 'react'
import "./skill.css"
import Skilllist from "../skilllist/skilllist"
import html5  from "../../img/html5-logo.png"
import css from "../../img/csslogo.png"
import javascript from "../../img/javascript-logo.png"
import reactlo from "../../img/reactlogo.png"
import figma from "../../img/figma.png"
import github from "../../img/github.png"
import pythonlo from "../../img/python.png"


export default function Skill() {
  return (
    <div className="k">
    <div className="k-title">SKILLS</div>
    <div className="k-img">
    <Skilllist img={html5} />
    <Skilllist img={css} />
    <Skilllist img={javascript} />
    <Skilllist img={reactlo} />
    <Skilllist img={pythonlo} />
    <Skilllist img={figma} />
    <Skilllist img={github} />
    </div>
    </div>
  )
}
