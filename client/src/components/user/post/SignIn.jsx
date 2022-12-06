import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UserAuth } from '../../firebase/context/AuthContext'
import { Alerts } from '../../alerts/Alerts'

import { getUserByEmail, getUserByUsername } from '../../../redux/actions'

import s from './PostUser.module.css'

const SignIn = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { signIn } = UserAuth()
  const { correct, wrong } = Alerts()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      await correct('Sesion Iniciada')
      const userDb = await dispatch(getUserByEmail(email))
      await dispatch(getUserByUsername(userDb[0].username))
      window.localStorage.setItem('username', userDb[0].username)
    } catch (error) {
      setError(error.code)
      if(error.code === 'auth/wrong-password'){
        const text = error.code 
        wrong(text)
      }
      if(error.code === 'auth/user-not-found'){
        const text = error.code 
        wrong(text)
      }
    }
  }

  return (
    <div>
      {/* 
        Este comp que no se pueda acceder mientars exista un usuario
      */}
      {/* traer el boton del signin google y ejecutar la funct del postUser del action y guardar los sgtes datos
        username=user.displayName
        email=user.email
        avatr=user.photoURL
        ver login -> login de MyPC
      */}
      <form onSubmit={handleSubmit}>
      <div>
        <label className={s.text}>Email: </label>
        <input
          type= 'email'
          onChange={(e) => {setEmail(e.target.value)}}  
        />
      </div>
      <div>
        <label className={s.text}>Password: </label>
        <input
          type= 'password'
          onChange={(e) => {setPassword(e.target.value)}}  
        />
      </div>
      <button>Sign In</button>
    </form>
    </div>
  )
}

export default SignIn