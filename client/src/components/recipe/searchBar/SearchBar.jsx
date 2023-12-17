import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { getRecipeName } from '../../..//redux/actions'

import s from './SearchBar.module.css'

import { useTranslation } from 'react-i18next'
import { Alerts } from '../../alerts/Alerts'

const SearchBar = ({setCurrentPage, setNameNotFound}) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [t] = useTranslation('global')
  const { wrong } = Alerts()

  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (name) {
      await dispatch(getRecipeName(name))
      setNameNotFound(name)
      setName('')
      setCurrentPage(1)      
    } else {
      let text = `${t('home.emptySearch')}`
      wrong(text)
    }
  }
  return (
    <div className={s.search}>
      <input 
        type="search" 
        placeholder={t('home.searchPlaceHolder')}
        value={name}
        onChange={(e) =>handleName(e)}
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >{t('home.search')}</button>
    </div>
  )
}

export default SearchBar