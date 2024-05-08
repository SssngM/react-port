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
import compassProto from "../../imges/compassProto.mov";
import groupfive from "../../imges/groupfive.png";
import cover1 from "../../imges/cover1.jpg"
import comSign from "../../imges/comSign.jpg"

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


      <div className="p-list" style={{maxWidth: '100%',backgroundSize:'cover', backgroundRepeat: 'no-repeat',   overflow: 'hidden'}} >
       



       {/* <Product img={comSign} />  */}
       <Product2 compassProto={compassProto}/>

         <div className="p-des">
         
           <div className="p-title"> COMPASS </div>

           <ul className="p-li">
             <li> * SF School management platform</li>
             <li> * Individual education plans </li>
             <li> * Designed with team</li>
           </ul> 
           <div className="a-link">
           <a href="">Coming Soon</a>
           </div>
           {/* <div className="a-link"> */}
           {/* <a href="https://groupfive.co" target="_blank" rel="noopener noreferrer">
             {" "} GroupFive Intake Site{" "}
           </a> */}
           
           {/* </div> */}
         </div>
          {/* <a href={casestudy} target="_blank" style={{ maxWidth: '400%', maxHeight: '600%' }}> <Product img={groupfive} /> </a> */}
       </div>

{/* <hr/> */}

      <div className="p-list">
          <div className="p-des">
            <div className="p-title"> HABBLE  </div> 
            <ul className="p-li">
               <li> <div>  * Improve speaking skills with AI    {" "}   </div></li> 
              <li>  * Chat GPT API</li>
              <li> * Design Lead </li> 
            </ul>
            <div className="a-link">
         
            <Link to="/image2"> View Case Study</Link>
            </div> 
            <div className="a-link">
              <a href="https://habble-chat.vercel.app/" target="_blank">
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
          <Link to="/image2" className="custom-link">
          <Product img={cover1} />
          </Link>

        </div>

        {/* <hr/> */}

        <div className="p-list" style={{ maxWidth: '100%',backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} >
       
        <Link to="/image" className="custom-link">
        <Product img={groupfive} /> 
        </Link>
          <div className="p-des">
          
            <div className="p-title"> GROUP5</div>

            <ul className="p-li">
              <li> * Local Group Hangouts</li>
              <li> * Twilio API waitList system</li>
              <li> * Design Lead, co-founded</li>
            </ul> 
            <div className="a-link">
            <Link to="/image">View Case Study</Link>
            </div>
            <div className="a-link">
            <a href="https://groupfive.co" target="_blank" rel="noopener noreferrer">
              {" "} GroupFive Intake Site{" "}
            </a>
            
            </div>
          </div>
           {/* <a href={casestudy} target="_blank" style={{ maxWidth: '400%', maxHeight: '600%' }}> <Product img={groupfive} /> </a> */}
        </div>

        {/* <hr/> */}

        <div className="p-list" >
          <div className="p-des">
            <div className="p-title"> TGS</div>
            <ul className="p-li">
              <li> * Tech Girls Social</li>
              <li> * Organize 2500+ members </li>
              <li> * Buliding the web site</li>
              <li> * Designed & Engineered  </li>
            </ul>
            <div className="a-link">
            < a href="https://www.figma.com/file/RpLX82xFYIxrRlCgbRuanJ/tech-girls-social-wireframing?node-id=0%3A1" target="_blank">
              {" "}
              Figma Mockup
            </a>
            </div>
              <div className="a-link">  
              <a href="https://www.techgirlssocial.org" rel="external">
                {" "}
                Tech Girls Social Site
              </a>
              </div>
          </div>
          <Link to="https://www.techgirlssocial.org/"  target="_blank" className="custom-link">
          <Product 
          img={tech}  />
          </Link>
        </div>


{/* <hr/> */}




        <div className="p-list" style={{ maxWidth: '100%',backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
          <Product2 slprecoding={slprecoding}/>
          <div className="p-des">
            <div className="p-title"> GitLab, Intern </div>
            <ul className="p-li">
              <li> * Slippers(Pajamas)UI Design System</li>
              <li> * Completed tickets as a UX Engineer</li>
              <li> * Vue.js, SASS, Storybook  </li>
            </ul> 
            <div className="a-link">
            <a href="https://gitlab-com.gitlab.io/marketing/digital-experience/slippers-ui/?path=/story/intro--page" target="_blank" rel="noopener noreferrer">
              {" "}
              GitLab Design System
            </a>
            </div>
          </div>
        </div>
      </div>


      {/* <hr/> */}

      <div className="products2"> 
        <div className="p-list2">
        <Product3 img2={sweet} />
          <div className="p-des2">
            <h2 className="p-title2"> SWEET STORE PROJECT </h2>
            <div className="p-li2">
              <div> UX enginerring project  </div>
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
            <h2 className="p-title2"> HACKATON TEAM PROJECT </h2>
            <div className="p-li2">
              <div> Book Finder</div>
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
            <h2 className="p-title2"> TO DO LIST </h2>
            <div className="p-li2">
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
