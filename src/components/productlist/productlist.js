import React from "react";
import "./productlist.css";
// import { BiBarChartSquare } from "react-icons/ai";

import Product from "../product/product";
import Product2 from "../product2/product2";
import Product3 from "../product3/product3";
import FullSizeImage from '../FullSizeImage/FullSizeImage';
import { Link} from 'react-router-dom';

import { products } from "../../data";
import sweet from "../../imges/sweet-store.png";
import todolist from "../../imges/todolist.png";
import tech from "../../imges/tech.png";
import Vueport from "../../imges/vue-port.png";
import slprecoding from "../../imges/slprecoding.mov";
import groupfive from "../../imges/groupfive.png";
import cover1 from "../../imges/cover1.jpg"

import mesh from "../../imges/mesh.jpg"
// import GroupFive2 from "../../imges/GroupFive2.jpg";





// import designthinking from "../../img/Techgirls2.png"

// console.log(products[0].img)
// const sweet = "../img/sweet-store.png"
// const todolist = "../img/todolist.png"

export const Productlist = () => {


  
  return (
    <div className="pl">
      <h3 className="port"> PROJECTS </h3>
      <div className="products">

      <div className="p-list">
          <div className="p-des">
            <h2 className="p-title"> Habble  </h2> 
            <ul className="p-li">
               <li> <div>  AI-powered language learning program </div></li> 
              <li> Chat GPT API</li>
              <li> Designed by me </li> 
            </ul>
            <div className="a-link">
         
            <Link to="/image2"> View Case Study</Link>
            </div> 
            <div className="a-link">
              <a href="https://habble.vercel.app/" target="_blank">
                {" "}
                Habble Site
              </a>
            </div>
            <div className="a-link">
              <a href="https://www.joincolab.io/product/habble" target="_blank">
                {" "}
                Habble portfolio, CoLab
              </a>
            </div>

          </div>
          <Product img={cover1} />
        </div>


        <div className="p-list" style={{ backgroundImage:`url(${mesh})`, maxWidth: '100%',backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} >
        <Product img={groupfive} /> 
          <div className="p-des">
          
            <h2 className="p-title"> Group Five </h2>

            <ul className="p-li">
              <li> Local Small Group Hangouts</li>
              <li> Twilio API waitList system</li>
              <li> Designed and co-founded by me </li>
            </ul> 
            <div className="a-link">
            <Link to="/image">View Case Study</Link>
            </div>
            <div className="a-link">
            <a href="https://groupfive.co" target="_blank" rel="noopener noreferrer">
              {" "}
              GroupFive Intake Site{" "}
            </a>
            
            </div>
          </div>
           {/* <a href={casestudy} target="_blank" style={{ maxWidth: '400%', maxHeight: '600%' }}> <Product img={groupfive} /> </a> */}
        </div>

        <div className="p-list" >
          <div className="p-des">
            <h2 className="p-title"> Tech Girls Social </h2>
            <ul className="p-li">
              <li> Launching non-profit in SF</li>
              <li>Organize 2000+ members </li>
              <li> Buliding the web site</li>
              <li> Designed & Engineered by me </li>
            </ul>
            <div className="a-link">
            < a href="https://www.figma.com/file/RpLX82xFYIxrRlCgbRuanJ/tech-girls-social-wireframing?node-id=0%3A1" target="_blank">
              {" "}
              Figma Mockup
            </a>
            </div>
              <div className="a-link">  
              <a href="https://www.techgirlssocial.org" target="_blank">
                {" "}
                Tech Girls Social Site
              </a>
              </div>
          </div>
          <Product img={tech} />
        </div>







        <div className="p-list" style={{ backgroundImage:`url(${mesh})`, maxWidth: '100%',backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
          <Product2 slprecoding={slprecoding}/>
          <div className="p-des">
            <h2 className="p-title"> GitLab </h2>
            <ul className="p-li">
              <li> Slippers(Pajamas)UI Design System</li>
              <li> Completed tickets as a Frontend Engineer</li>
              <li> Vue.js, SASS, Storybook  </li>
            </ul> 
            <div className="a-link">
            <a href="https://gitlab.com/SssngM/slippers-ui" target="_blank" rel="noopener noreferrer">
              {" "}
              GitLab Code
            </a>
            </div>
          </div>
        </div>
      </div>

      <div className="products2"> 
        <div className="p-list2">
        <Product3 img2={sweet} />
          <div className="p-des2">
            <h2 className="p-title2"> Sweet Store Project </h2>
            <div className="p-li2">
              <div> Personal toy project  </div>
              <div> Javscript, React, Router, Boostrap</div>
            </div> 

            <br></br>
            
            <a href="https://your-sweets.netlify.app" target="_blank" rel="noopener noreferrer" className="p-li3">
              {" "}
              Sweet Store Site{" "}
            </a>
            {/* <div>
            <a href="https://github.com/SssngM/sweets_store" target="_blank" rel="noopener noreferrer" className="p-li3">
              {" "}
              GitHub Code{" "}
            </a>
            </div> */}
          </div>
        </div>

        <div className="p-list2">
          <Product3 img2={Vueport} className="p2"/>
          <div className="p-des2">
            <h2 className="p-title2"> <div> Book Finder,</div>Hackathon Team Project </h2>
            <div className="p-li2">
              <div> Team project </div>
              <div> Vue.js, SCSS, Google book API</div>
            </div> 
            <br></br>
            <a href="https://github.com/SssngM/hackathon-tour" target="_blank" className="p-li3">
              {" "}
              GitHub Code
            </a>
          </div>
        </div>

        <div className="p-list2">
        <Product3 img2={todolist} className="p2"/>
          <div className="p-des2">
            <h2 className="p-title2"> To Do List Project </h2>
            <div className="p-li2">
              <div> Personal project </div>
              <div> Javscript, React </div>
              <div>log in, add, edit, delete functions</div>
            </div>   
            <br></br>
            <a
              href="https://github.com/SssngM/TodoList-2022" target="_blank"
              rel="noopener noreferrer" className="p-li3">
              {" "}
              github code{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
