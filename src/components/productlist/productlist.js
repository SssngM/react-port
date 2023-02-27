import React from "react";
import "./productlist.css";
import Product from "../product/product";
import { products } from "../../data";
import sweet from "../../imges/sweet-store.png";
import todolist from "../../imges/todolist.png";
import tech from "../../imges/tech.png";
import Vueport from "../../imges/vue-port.png";

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
            <div> with Drawing, Figma, React. </div>
            <div> building this website </div>
            <div> as ux/ui and front-end role.</div>

            <a href="https://www.figma.com/file/RpLX82xFYIxrRlCgbRuanJ/tech-girls-social-wireframing?node-id=0%3A1">
              {" "}
              Figma Mockup
            </a>
            <div>
              <a href="https://www.techgirlssocial.org">
                {" "}
                Tech Girls Social Site
              </a>
            </div>
          </div>
        </div>

        <div className="p-list">
          <div className="p-des">
            <h2 className="p-title"> "Sweet Store Project" </h2>
            <div>with Javscript, React,</div>
            <div> Router,Boostrap,Cart funtions</div>
            <a href="https://your-sweets.netlify.app" rel="noopener noreferrer">
              {" "}
              Sweet Store Site{" "}
            </a>
          </div>
          <Product img={sweet} />
        </div>


        <div className="p-list">
          <Product img={Vueport}/>
          <div className="p-des">
            <h2 className="p-title"> "Hackathon Team project" </h2>
            <div> With Vue.js, SCSS, </div>
            <div> Use google book API, </div>
            <div> Team project</div>

            <a href="https://github.com/SssngM/hackathon-tour">
              {" "}
              GitHub Code
            </a>
          </div>
        </div>

        <div className="p-list">
          <div className="p-des">
            <h2 className="p-title"> "To Do List Project" </h2>
            <div>with Javscript, React.</div>
            <div>log in, add, edit, delete funtions</div>

            <a
              href="https://github.com/SssngM/TodoList-2022"
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
