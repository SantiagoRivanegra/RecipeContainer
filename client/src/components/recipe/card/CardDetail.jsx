import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { getRecipeDetail } from '../../../redux/actions'

import s from './CardDetail.module.css'

const CardDetail = () => {
  const dispatch = useDispatch()
  const recipeDetail = useSelector((state) => state.recipeDetail)
  
  const [t] = useTranslation('global')
  
  const {id} = useParams()
  
  useEffect(() => {
    dispatch(getRecipeDetail(id))
  }, [])
  
  return (
    <div className={s.container}>
      {t('detail.img')}
      <img src={recipeDetail.image} alt="nothing" className={s.img}/>
      {t('detail.name')}
      <h6>{recipeDetail.name_recipe}</h6>
      {t('detail.instructions')}
      <h6>{recipeDetail.instructions}</h6>
      {t('detail.area')}
      <h6>{recipeDetail.area}</h6>
      {t('detail.category')}
      <h6>{recipeDetail.category}</h6>
      {t('detail.ingredient')}
      {
        recipeDetail.ingredient1 ?
        <h6>{recipeDetail.ingredient1}</h6> :
        ""
      }
      {
        recipeDetail.ingredient20 ?
        
        <h6> {t('detail.ingredient')} {recipeDetail.ingredient20}</h6> :
        ""
      }
      {
        recipeDetail.userId ?
        <h6>{t('detail.userId')}  {recipeDetail.userId}</h6> :
        ""
      }
      {
        recipeDetail.userId ?
        <h6>{t('detail.userId')}  {recipeDetail.userId}</h6> :
        ""
      }
    </div>
)
}


export default CardDetail