import React from 'react'
import "./Cards.css"

const Cards = ({product}) => {
  return (
    <div>
      <div className="mycard">
        <img src={product.thumbnail} alt="" />
        <div className="mycard-content">
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
