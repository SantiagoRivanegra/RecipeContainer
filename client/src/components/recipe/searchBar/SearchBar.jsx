import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { getRecipeName } from '../../..//redux/actions'

import s from './SearchBar.module.css'

import Swal from 'sweetalert2'
import errorGif from '../../../assets/images/errorGif.gif'
import useSound from 'use-sound'
import errorSound from '../../../assets/sounds/error.mp3'
import { useTranslation } from 'react-i18next'

const SearchBar = ({setCurrentPage}) => {
  const [ error ] = useSound(errorSound, {
    volume: 0.1
  })
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [t] = useTranslation('global')

  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      dispatch(getRecipeName(name))
      setName('')
      setCurrentPage(1)      
    } else {
      Swal.fire({
        text: `${t('home.emptySearch')}`,
        width: '30%',
        imageUrl: errorGif,
        imageWidth: '25%',
        imageHeight: '60%',
        imageAlt: 'A tall image',
      })
      error()
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