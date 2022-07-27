import "./product.css"
import React from 'react'


function Product({img, link}) {
  return (
        <div className="p">
            <div className="p-browser">
            <img src={img} />
            </div>
          
        </div>

  )
}

export default Product
