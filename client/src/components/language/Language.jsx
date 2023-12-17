import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'

import s from './Language.module.css'

const Language = () => {
  const [lang, setLang] = useState("")
  
  const [t, i18n] = useTranslation('global')

  const handleLanguage = (language) => {
    if(language.target.value === 'es') i18n.changeLanguage('es')
    if(language.target.value === 'en') i18n.changeLanguage('en')
    if(language.target.value === 'fr') i18n.changeLanguage('fr')
    if(language.target.value === 'pt') i18n.changeLanguage('pt')
    setLang(language.target.value)
    console.log(lang)
    localStorage.setItem('lang', language.target.value)
  }
  const idioma = localStorage.getItem('lang')

  return (
    <>
      <b className={s.lang}>{t('home.language')}:</b>
      <select onChange={(e) => handleLanguage(e)} className={s.langSelect} defaultValue={idioma}>            
        <option value='en'>EN</option>
        <option value='es'>ES</option>
        <option value='fr'>FR</option>
        <option value='pt'>PT</option>
      </select>
    </>
  )
}

export default Language