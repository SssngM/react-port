import React from 'react'
import "./productlist.css"
import Product from "../product/product"
import { products } from "../../data";
import sweet from "../../img/sweet-store.png"
import todolist from "../../img/todolist.png"


// console.log(products[0].img)
// const sweet = "../img/sweet-store.png"
// const todolist = "../img/todolist.png"




export const Productlist = () => {
  return (
    <div className='pl'>
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


          <Product img={todolist} src="https://github.com/SssngM/TodoList-2022 "/>
          <Product img={sweet}/>

      </div>
      {/* <div className='p-list2'>
      <Product/> 

      </div> */}

    </div>
  )
}

export default Productlist