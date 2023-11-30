import "./product.css"
import React from 'react'
import { Link } from 'react-router-dom';

function Product({img,productLink}) {
  return (
        <div className="p">
            <div className="p-browser">
            <img src={img} />
            <Link to={productLink} />
            </div>
          
        </div>

  )
}

export default Product
