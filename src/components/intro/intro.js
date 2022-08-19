import React from 'react'
import "./intro.css"
import Introimg from "../../img/intro.jpg"


function Intro(props) {
  return (
    <div className='i'>
        <div className="i-left"> 
            <div className="i-left-wrapper">
                <h1 className='i-name'> Seung Yoo</h1>
                <div className="i-title"> 
                 <div className="title-item">Based in San Francisco, </div>
                 <div className="title-item">a UI & Front-end Engineer. </div>
                </div>
         
        </div>
        </div>
        <div className="i-right"> 
        <img src = {Introimg}  className = "intro-img"/>
        </div>
    </div>
  )
}


export default Intro
