import "./product2.css"
import React from 'react'

function Product2({slprecoding}) {
  return (
        <div className="p-video">
            <div className="p-browser">
            <video controls autoPlay loop muted>
            <source src={slprecoding} type="video/mp4"></source>
            </video>
            </div>
        </div>

  )
}

export default Product2
