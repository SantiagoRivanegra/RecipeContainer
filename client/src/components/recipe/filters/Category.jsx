import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './Filters.module.css'

import { getCategoryRecipe } from '../../../redux/actions'

import { useTranslation } from 'react-i18next'

const Category = ({setCurrentPage}) => {
  const dispatch = useDispatch()
  const categoryList = useSelector((state) => state.categoryList)
  const [value, setValue] = useState("")

  const [t] = useTranslation('global')

  const handleCategory = async(e) => {
    if(e.target.value){
    await dispatch(getCategoryRecipe(e.target.value))
    setCurrentPage(1)
    setValue(e.target.value)
    } else {
      setValue("")
    }
  }

  return (
    <>
      <select onChange={(e) => handleCategory(e)} className={s.select}>
        <option value="">{t('home.category')}</option>
        <option key='other' value='other'>other</option>
        {
          categoryList ? categoryList.map(category => {
            return(
              <option key={category.name_category} value={category.name_category}>
                {category.name_category}
              </option>
            )
          }) : (
            <div>
              <h3>Loading...</h3>
            </div>
          )
        }
      </select>
      {/* <span className={s.target}>{value === "" ? "" : value}</span> */}
    </>
  )
}

export default Category