import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './Filters.module.css'

import { getIngredientRecipe } from '../../../redux/actions'

import { useTranslation } from 'react-i18next'

const Ingredient = ({setCurrentPage, refresh}) => {
  const dispatch = useDispatch()
  const ingredientList = useSelector((state) => state.ingredientList)
  const [value, setValue] = useState("")

  const [t] = useTranslation('global')

  const handleIngredient = async(e) => {
    if(e.target.value){
    await dispatch(getIngredientRecipe(e.target.value))
    setCurrentPage(1)
    setValue(e.target.value)
    e.target.value = ""
  } else {
    setValue("")
  }
  }

  useEffect(() => {
    setValue("")
  }, [refresh])

  return (
  <>
    <select onChange={(e) => handleIngredient(e)} className={s.select}>
      <option value="">{t('home.ingredient')}</option>
      {
        ingredientList ? ingredientList.map(ingredient => {
          return(
            <option key={ingredient.name_ingredient} value={ingredient.name_ingredient}>
              {ingredient.name_ingredient}
            </option>
          )
        }) : (
          <div>
            <h3>Loading...</h3>
          </div>
        )
      }
    </select>
    <span className={s.target}>{value === "" ? "" : value}</span> 
  </>
  )
}

export default Ingredient