import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './Filters.module.css'

import { getAreaRecipe } from '../../../redux/actions'

import { useTranslation } from 'react-i18next'

const Area = ({setCurrentPage}) => {
  const dispatch = useDispatch()
  const areaList = useSelector((state) => state.areaList)
  const [value, setValue] = useState("")

  const [t] = useTranslation('global')

  const handleArea = (e) => {
    if(e.target.value){
      dispatch(getAreaRecipe(e.target.value))
      setCurrentPage(1)
      setValue(e.target.value)
      console.log(value)
      //e.target.value = ""
    } else {
      setValue("")
      console.log(value)
    }
  }

  return (
  <>
    <select onChange={(e) => handleArea(e)} className={s.select}>
      <option value="">{t('home.area')}</option>
      <option key='other' value='other'>other</option>
      {
        areaList ? areaList.map(area => {
          return(
            <option key={area.name_area} value={area.name_area}>
              {area.name_area}
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

export default Area