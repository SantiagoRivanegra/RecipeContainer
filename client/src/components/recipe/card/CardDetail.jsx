import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getRecipeDetail } from '../../../redux/actions'

import s from './CardDetail.module.css'

const CardDetail = () => {
  const dispatch = useDispatch()
  const recipeDetail = useSelector((state) => state.recipeDetail)

  const {id} = useParams()
  console.log(id.toString())

  useEffect(() => {
    dispatch(getRecipeDetail(id))
  }, [])

  return (
    <div className={s.container}>
      <img src={recipeDetail.image} alt="nothing" className={s.img}/>
      <h6>{recipeDetail.name_recipe}</h6>
      <h6>{recipeDetail.instructions}</h6>
      <h6>{recipeDetail.area}</h6>
      <h6>{recipeDetail.category}</h6>
      {
        recipeDetail.ingredient1 ?
        <h6>{recipeDetail.ingredient1}</h6> :
        ""
      }
      {
        recipeDetail.ingredient20 ?
        <h6>{recipeDetail.ingredient20}</h6> :
        ""
      }
      {
        recipeDetail.userId ?
        <h6>{recipeDetail.userId}</h6> :
        ""
      }
    </div>
)
}


export default CardDetail