import React from 'react'
import "./productlist.css"
import Product from "../product/product"


export const Productlist = () => {
  return (
    <div className='pl'>
      <div className='p-list'>
      <Product/>
      <Product/>
      </div>
      <div className='p-list'>
      <Product/>
      <Product/>
      </div>

    </div>
  )
}

export default Productlist