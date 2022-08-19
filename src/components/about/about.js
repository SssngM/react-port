import React from 'react'
import "./about.css"
import Aboutme  from "../../img/about.jpg"

export default function About() {
  return (


    <div className="a">
        <h3>ABOUT ME</h3>
        <div className="all"> 
          <div className="a-left"> 
           <div className="a-left-title">  Orgarnazer </div> 
            <div >  of Tech Girls Social (in SF) </div>                
            <div className="a-left-wrapper">with diversity equity & inclusion</div>
          <div className="a-left-title">Design Thinker </div> 
          <div className="a-left-wrapper" > Hand Drawing and design </div>
          <div className="a-left-title">Front-end Engineer </div> 
          <div className="a-left-wrapper" > wireframe for users  </div>
           </div>
 
          <div className="a-right"> 
             <img src={Aboutme} className="imgme"/>
          </div>
        </div>  
        <div className="a-desc" > Previous job was a content designer and switching to be an front-end engineer.  Like meeting, learning,   studying  and collaborating with others. Set up study groups multiple times for React, Data structure algorithm and toy projects. Currently building a website for the Tech Girls Social group as volunteer work. </div>
           
    </div>
  )
}
