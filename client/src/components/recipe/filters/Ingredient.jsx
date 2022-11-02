import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './Filters.module.css'

import { getIngredientRecipe } from '../../../redux/actions'

import { useTranslation } from 'react-i18next'

const Ingredient = ({setCurrentPage}) => {
  const dispatch = useDispatch()
  const ingredientList = useSelector((state) => state.ingredientList)
  const [value, setValue] = useState("")

  const [t] = useTranslation('global')

  const handleIngredient = (e) => {
    if(e.target.value){
    dispatch(getIngredientRecipe(e.target.value))
    setCurrentPage(1)
    setValue(e.target.value)
    e.target.value = ""
  } else {
    setValue("")
    console.log(value)
  }
  }

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
    <b>{value === "" ? "" : value}</b>
  </>
  )
}

export default Ingredient