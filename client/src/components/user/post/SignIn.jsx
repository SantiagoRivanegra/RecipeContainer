import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UserAuth } from '../../firebase/context/AuthContext'

import { getUserByEmail } from '../../../redux/actions'

const SignIn = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { signIn } = UserAuth()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      const userDb = await dispatch(getUserByEmail(email.toString()))
      window.localStorage.setItem('username', userDb[0].username)
    } catch (error) {
      setError(error.message)
      console.log(error.message)
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
        <label>Email: </label>
        <input
          type= 'email'
          onChange={(e) => {setEmail(e.target.value)}}  
        />
      </div>
      <div>
        <label>Password: </label>
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