import React from 'react'
import './card.css'

const Card = ({ title, text, img }) => {
  return (
    <div className="card">
      <img src={img}/>
      <div>
        <h2>{title}</h2>        
        <p>
          {text}
        </p>
        <button><a href="">Leer más...</a></button>
      </div>
    </div>
  )
}

export default Card