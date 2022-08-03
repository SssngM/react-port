import React from 'react'
import "./productlist.css"
import Product from "../product/product"
import { products } from "../../data";
import sweet from "../../img/sweet-store.png"
import todolist from "../../img/todolist.png"
import sketches from "../../img/sketches.jpg"



// console.log(products[0].img)
// const sweet = "../img/sweet-store.png"
// const todolist = "../img/todolist.png"




export const Productlist = () => {
  return (
    
    <div className='pl'>
      <h3 className= 'port'> PROJECTS </h3>
      <div className='p-list'>

      {/* {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))} */}
         {/* <a href="https://github.com/SssngM/TodoList-2022 " target="_blank" rel="noreferrer">
          <Product img={todolist}/>
        </a>
        <a href="https://github.com/SssngM/TodoList-2022 " target="_blank" rel="noreferrer">
          <Product img={sweet}/>
        </a> */}


          <Product img={todolist} />
        
          <div className ='p-des'>
              <h2 className = 'p-title'> "To Do List Project" </h2>
              <div>with Javscript, React.</div>
              <div>log in, add, edit, delete funtions</div>

              <a href="https://github.com/SssngM/TodoList-2022" rel="noopener noreferrer"> github code </a>
          </div>



      </div>

     <div className='p-list'>
     <div className ='p-des'>
     <h2 className = 'p-title'> "Sweet Store Project" </h2>
              <div>with Javscript, React.</div>
              <div> Router,Boostrap,Cart funtions</div>
              <a href="https://your-sweets.netlify.app" rel="noopener noreferrer"> site </a>
          </div>
          <Product img={sweet}/>

      </div>

      <div className='p-list'>
        <Product img={sketches}/>
     <div className ='p-des'>
     <h2 className = 'p-title'> "Design Thinking" </h2>
              <div> with Figma, </div>
              <div> Color pencils, Markers, Pen.</div>
          </div>


      </div>


    </div>
  )
}

export default Productlist