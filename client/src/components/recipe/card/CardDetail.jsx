import React, { useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
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
    <Fragment>
      <Helmet>
        <title>
          {t('helmet.detail')}
        </title>
      </Helmet>
      <div className={s.container}>
        <h4 className={s.texto}>{t('detail.img')}</h4>
        <img src={recipeDetail.image} alt="nothing" className={s.img}/>

        <h4 className={s.texto}>{t('detail.name')}</h4>
        <h6 className={s.texto1}>{recipeDetail.name_recipe}</h6>

        <h4 className={s.texto}>{t('detail.instructions')}</h4>
        <h6 className={s.instructions}>{recipeDetail.instructions}</h6>

        <h4 className={s.texto}>{t('detail.area')}</h4>
        <h6 className={s.texto1}>{recipeDetail.area}</h6>

        <h4 className={s.texto}>{t('detail.category')}</h4>
        <h6 className={s.texto1}>{recipeDetail.category}</h6>

        {t('detail.ingredient')}
        {
          recipeDetail.ingredient1 ?
          <span>{recipeDetail.ingredient1}.......{recipeDetail.measure1}</span> :
          ""
        }        
        {
          recipeDetail.ingredient2 ?
          <span>{recipeDetail.ingredient2}.......{recipeDetail.measure2}</span> :
          ""
        }
        {
          recipeDetail.ingredient3 ?
          <span>{recipeDetail.ingredient3}.......{recipeDetail.measure3}</span> :
          ""
        }
        {
          recipeDetail.ingredient4 ?
          <span>{recipeDetail.ingredient4}.......{recipeDetail.measure4}</span> :
          ""
        }
        {
          recipeDetail.ingredient5 ?
          <span>{recipeDetail.ingredient5}.......{recipeDetail.measure5}</span> :
          ""
        }
        {
          recipeDetail.ingredient6 ?
          <span>{recipeDetail.ingredient6}.......{recipeDetail.measure6}</span> :
          ""
        }
        {
          recipeDetail.ingredient7 ?
          <span>{recipeDetail.ingredient7}.......{recipeDetail.measure7}</span> :
          ""
        }
        {
          recipeDetail.ingredient8 ?
          <span>{recipeDetail.ingredient8}.......{recipeDetail.measure8}</span> :
          ""
        }
        {
          recipeDetail.ingredient9 ?
          <span>{recipeDetail.ingredient9}.......{recipeDetail.measure9}</span> :
          ""
        }
        {
          recipeDetail.ingredient10 ?
          <span>{recipeDetail.ingredient10}.......{recipeDetail.measure10}</span> :
          ""
        }
        {
          recipeDetail.ingredient11 ?
          <span>{recipeDetail.ingredient11}.......{recipeDetail.measure11}</span> :
          ""
        }
        {
          recipeDetail.ingredient12 ?
          <span>{recipeDetail.ingredient12}.......{recipeDetail.measure12}</span> :
          ""
        }
        {
          recipeDetail.ingredient13 ?
          <span>{recipeDetail.ingredient13}.......{recipeDetail.measure13}</span> :
          ""
        }
        {
          recipeDetail.ingredient14 ?
          <span>{recipeDetail.ingredient14}.......{recipeDetail.measure14}</span> :
          ""
        }
        {
          recipeDetail.ingredient15 ?
          <span>{recipeDetail.ingredient15}.......{recipeDetail.measure15}</span> :
          ""
        }
        {
          recipeDetail.ingredient16 ?
          <span>{recipeDetail.ingredient16}.......{recipeDetail.measure16}</span> :
          ""
        }
        {
          recipeDetail.ingredient17 ?
          <span>{recipeDetail.ingredient17}.......{recipeDetail.measure17}</span> :
          ""
        }
        {
          recipeDetail.ingredient18 ?
          <span>{recipeDetail.ingredient18}.......{recipeDetail.measure18}</span> :
          ""
        }
        {
          recipeDetail.ingredient19 ?
          <span>{recipeDetail.ingredient19}.......{recipeDetail.measure19}</span> :
          ""
        }
        {
          recipeDetail.ingredient20 ?          
          <span>{recipeDetail.ingredient20}.......{recipeDetail.measure20}</span> :
          ""
        }
        {
          recipeDetail.userId ?
          <h6>{t('detail.userId')}  {recipeDetail.userId}</h6> :
          ""
        }
      </div>
    </Fragment>
)
}


export default CardDetail