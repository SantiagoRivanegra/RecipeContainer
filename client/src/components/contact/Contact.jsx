import React from 'react'

import { useTranslation } from 'react-i18next'

import s from './Contact.module.css'

const Contact = () => {
  const [t] = useTranslation('global')
  return (
    <a href="https://santiagorivanegra.netlify.app/" target="_blank" className={s.contact}>{t('home.contact')}</a>
  )
}

export default Contact