import React from 'react'
import s from './Card.module.css'

const Card = ({ name, img }) => {

  return (
      <div>
        <h3 className="color-red-500">{name}</h3>
        <img src={img} alt="nothing" className={s.img}/>
      </div>
  )
}

export default Card