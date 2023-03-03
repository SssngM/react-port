import React from "react";
import "./productlist.css";
import Product from "../product/product";
import Product2 from "../product2/product2";
import { products } from "../../data";
import sweet from "../../imges/sweet-store.png";
import todolist from "../../imges/todolist.png";
import tech from "../../imges/tech.png";
import Vueport from "../../imges/vue-port.png";
import slprecoding from "../../imges/slprecoding.mov";
import groupfive from "../../imges/groupfive.png";

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
          <Product img={tech}/>
          <div className="p-des">
            <h2 className="p-title"> "Tech Girls Social" </h2>
            <div>(Processing for non-profit in SF, </div> <div>Supporting Women's NetWork and Mentorship)</div>
            <br></br>
            <div> Volunteering Design/Front-end</div>
            <div> with Figma, React.js for UI. </div>
            <br></br>
            <a href="https://www.figma.com/file/RpLX82xFYIxrRlCgbRuanJ/tech-girls-social-wireframing?node-id=0%3A1" target="_blank">
              {" "}
              Figma Mockup
            </a>
            <div>
              <a href="https://www.techgirlssocial.org" target="_blank">
                {" "}
                Tech Girls Social Site
              </a>
            </div>
          </div>
        </div>

        <div className="p-list">
          <div className="p-des">
            <h2 className="p-title"> "Group Five" </h2>
            <div> (Local Group Meeting, </div> <div> Automatic WaitList System)</div>
            <br></br>
            <div>Freelancing as UX Design/Front-end</div>
            <div>With Figma, Javscript, React</div>
            <br></br>
            <a href="https://groupfive.co" target="_blank" rel="noopener noreferrer">
              {" "}
              GroupFive Intake{" "}
            </a>
            <div>
            {/* <a href="https://github.com/SssngM/sweets_store" target="_blank" rel="noopener noreferrer">
              {" "}
              Figma Mockup{" "}
            </a> */}
            </div>
          </div>
          <Product img={groupfive} />
        </div>



        <div className="p-list">
          <Product2 slprecoding={slprecoding}/>
          <div className="p-des">
            <h2 className="p-title"> "Slippers UI Design System, GitLab" </h2>
            <div>Implement and iterate UI components</div>
            <div>Internship as a Frontend Engineer  </div>
            <div>With Vue.js, SASS, Storybook </div>
            <br></br>
            <a href="   https://gitlab.com/SssngM/slippers-ui" target="_blank" rel="noopener noreferrer">
              {" "}
              GitLab Code
            </a>
          </div>
        </div>

        <div className="p-list">
          <div className="p-des">
            <h2 className="p-title"> "Sweet Store Project" </h2>
            <div>Personal Toy project with Javscript, React,</div>
            <div> Router,Boostrap,Cart funtions</div>
            <br></br>
            <a href="https://your-sweets.netlify.app" target="_blank" rel="noopener noreferrer">
              {" "}
              Sweet Store Site{" "}
            </a>
            <div>
            <a href="https://github.com/SssngM/sweets_store" target="_blank" rel="noopener noreferrer">
              {" "}
              GitHub Code{" "}
            </a>
            </div>
          </div>
          <Product img={sweet} />
        </div>

        <div className="p-list">
          <Product img={Vueport}/>
          <div className="p-des">
            <h2 className="p-title"> <div> "Book Finder,</div>Hackathon Team Project" </h2>
            <div> With Vue.js, SCSS, </div>
            <div> Use google book API, </div>
            <br></br>

            <a href="https://github.com/SssngM/hackathon-tour" target="_blank">
              {" "}
              GitHub Code
            </a>
          </div>
        </div>

        <div className="p-list">
          <div className="p-des">
            <h2 className="p-title"> "To Do List Project" </h2>
            <div>With Javscript, React.</div>
            <div>log in, add, edit, delete funtions</div>
            <br></br>
            <a
              href="https://github.com/SssngM/TodoList-2022" target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              github code{" "}
            </a>
          </div>
          <Product img={todolist} />
        </div>
      </div>
    </div>
  );
};

export default Productlist;
