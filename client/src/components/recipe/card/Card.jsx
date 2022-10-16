import React from 'react'
import s from './Card.module.css'
import { useNavigate } from 'react-router-dom' 

const Card = ({ name, img, id }) => {
  const navigate = useNavigate()

  return (
      <div className={s.cardContainer}>
        <h3>{name}</h3>
        <img src={img} alt="nothing" className={s.img} onClick={() => navigate(`/detail/${id}`)}/>
      </div>
  )
}

export default Card