import React, { useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom' 
import { useParams } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { getRecipeDetail } from '../../../redux/actions'

import s from './CardDetail.module.css'

const CardDetail = () => {
  const dispatch = useDispatch()
  const recipeDetail = useSelector((state) => state.recipeDetail)
  const navigate = useNavigate()

  
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
        {recipeDetail.recipeUsername}
        <button className={s.back} onClick={() => navigate(`/`)}>{t('post.back')}</button>
        <div className={s.containerSection1}>
        <div className={s.image}>
          <h4 className={s.texto}>{t('detail.img')}</h4>
          <img src={recipeDetail.image} alt="nothing" className={s.img}/>
        </div>
        <div className={s.attributes}>
          <ul>
            <h4 className={s.texto}>{t('detail.name')}&ensp;</h4>
            <h4 className={s.name}>{recipeDetail.name_recipe}</h4>
          </ul>

          <ul>
            <h4 className={s.texto}>{t('detail.area')}&ensp;</h4>
            <h6 className={s.area}>{recipeDetail.area}</h6>
          </ul>

          <ul>
              <h4 className={s.texto}>{t('detail.category')}&ensp;</h4>
              <h6 className={s.category}>{recipeDetail.category}</h6>
          </ul>
          </div>
        </div>

        <div className={s.intructionsIngredient}>
        <section className={s.section1}>
          <h4 className={s.texto}>{t('detail.instructions')}</h4>
          <h6 className={s.instructions}>{recipeDetail.instructions}</h6>
        </section>
        <h4 className={s.space}>¯</h4>
        <h4 className={s.texto}>{t('detail.ingredient')}</h4>
        <section className={s.section2}>
        {
          recipeDetail.ingredient1 ?
          <ul>{recipeDetail.ingredient1}.......{recipeDetail.measure1}</ul> :
          ""
        }        
        {
          recipeDetail.ingredient2 ?
          <ul>{recipeDetail.ingredient2}.......{recipeDetail.measure2}</ul> :
          ""
        }
        {
          recipeDetail.ingredient3 ?
          <ul>{recipeDetail.ingredient3}.......{recipeDetail.measure3}</ul> :
          ""
        }
        {
          recipeDetail.ingredient4 ?
          <ul>{recipeDetail.ingredient4}.......{recipeDetail.measure4}</ul> :
          ""
        }
        {
          recipeDetail.ingredient5 ?
          <ul>{recipeDetail.ingredient5}.......{recipeDetail.measure5}</ul> :
          ""
        }
        {
          recipeDetail.ingredient6 ?
          <ul>{recipeDetail.ingredient6}.......{recipeDetail.measure6}</ul> :
          ""
        }
        {
          recipeDetail.ingredient7 ?
          <ul>{recipeDetail.ingredient7}.......{recipeDetail.measure7}</ul> :
          ""
        }
        {
          recipeDetail.ingredient8 ?
          <ul>{recipeDetail.ingredient8}.......{recipeDetail.measure8}</ul> :
          ""
        }
        {
          recipeDetail.ingredient9 ?
          <ul>{recipeDetail.ingredient9}.......{recipeDetail.measure9}</ul> :
          ""
        }
        {
          recipeDetail.ingredient10 ?
          <ul>{recipeDetail.ingredient10}.......{recipeDetail.measure10}</ul> :
          ""
        }
        {
          recipeDetail.ingredient11 ?
          <ul>{recipeDetail.ingredient11}.......{recipeDetail.measure11}</ul> :
          ""
        }
        {
          recipeDetail.ingredient12 ?
          <ul>{recipeDetail.ingredient12}.......{recipeDetail.measure12}</ul> :
          ""
        }
        {
          recipeDetail.ingredient13 ?
          <ul>{recipeDetail.ingredient13}.......{recipeDetail.measure13}</ul> :
          ""
        }
        {
          recipeDetail.ingredient14 ?
          <ul>{recipeDetail.ingredient14}.......{recipeDetail.measure14}</ul> :
          ""
        }
        {
          recipeDetail.ingredient15 ?
          <ul>{recipeDetail.ingredient15}.......{recipeDetail.measure15}</ul> :
          ""
        }
        {
          recipeDetail.ingredient16 ?
          <ul>{recipeDetail.ingredient16}.......{recipeDetail.measure16}</ul> :
          ""
        }
        {
          recipeDetail.ingredient17 ?
          <ul>{recipeDetail.ingredient17}.......{recipeDetail.measure17}</ul> :
          ""
        }
        {
          recipeDetail.ingredient18 ?
          <ul>{recipeDetail.ingredient18}.......{recipeDetail.measure18}</ul> :
          ""
        }
        {
          recipeDetail.ingredient19 ?
          <ul>{recipeDetail.ingredient19}.......{recipeDetail.measure19}</ul> :
          ""
        }
        {
          recipeDetail.ingredient20 ?          
          <ul>{recipeDetail.ingredient20}.......{recipeDetail.measure20}</ul> :
          ""
        }
        </section>
        </div>
        {/* {
          recipeDetail.userId ?
          <h6>{t('detail.userId')}  {recipeDetail.userId}</h6> :
          ""
        } */}
      </div>
    </Fragment>
)
}


export default CardDetail