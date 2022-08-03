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
          <div className="a-left-wrapper" > skech and design </div>
          <div className="a-left-title">Front-end Engineer </div> 
          <div className="a-left-wrapper" > wireframe for user  </div>
          </div>
 
          <div className="a-right"> 
             <img src={Aboutme} className="imgme"/>
          </div>
        </div>    
    </div>
  )
}
