import React from 'react'
import s from './CardNotFound.module.css'

const CardNotFound = () => {

  return (
      <div className={s.cardContainer}>
        <h3 className={s.name}>Not Found</h3>
        <img src='iamgen'alt="nothing" className={s.img}/>
      </div>
  )
}

export default CardNotFound