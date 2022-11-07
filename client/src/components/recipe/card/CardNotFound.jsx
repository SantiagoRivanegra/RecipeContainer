import React from 'react'
import s from './CardNotFound.module.css'

const CardNotFound = ({name}) => {

  return (
      <div className={s.cardContainer}>
        <h3 className={s.name}>{name}</h3>
        <h3 className={s.name}>Not Found</h3>
        <img src='imagen'alt="imgNotFound" className={s.img}/>
      </div>
  )
}

export default CardNotFound