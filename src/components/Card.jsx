import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

const Card = ({ title, text, img, route }) => {
  return (
    <div className="card">
      <img src={img}/>
      <div>
        <h2>{title}</h2>        
        <p>
          {text}
        </p>
        <Link to={route}><button>Leer más...</button></Link>
      </div>
    </div>
  )
}

export default Card