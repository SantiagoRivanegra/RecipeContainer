import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../firebase/context/AuthContext'

import { postUser } from '../../../redux/actions'

import { Alerts } from '../../alerts/Alerts'

import s from './PostUser.module.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [user, setUser] = useState({
    id:"",
    admin:false, 
    username:"", 
    email:"", 
    avatar:"", 
    like:"", 
    comment_received:"", 
    comment_send:""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { createUserEmailPassword } = UserAuth()
  const { correct, wrong } = Alerts()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
    setEmail(user.email)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    if(user.username !== ''){
      try {
        const userData = await createUserEmailPassword(email, password)
        user.id = userData.user.uid
        const usuarito = await dispatch(postUser(user))
        console.log(usuarito)
        window.localStorage.setItem('username', user.username)
        await correct('Registrado')
        setUser({
          id:"",
          admin:false, 
          username:"", 
          email:"", 
          avatar:"", 
          like:"", 
          comment_received:"", 
          comment_send:""
        })
        navigate('/')
      } catch (e) {
        setError(e.code)
        if(e.code === 'auth/missing-email'){
          const text = e.code 
          wrong(text)
        }
        if(e.code === 'auth/invalid-email'){
          const text = e.code 
          wrong(text)
        }
        if(e.code === 'auth/email-already-in-use'){
          const text = e.code 
          wrong(text)
        }
        if(e.code === 'auth/internal-error'){//cuando pondo email y no contraseña
          const text = e.code 
          wrong(text)
        }
        if(e.code === 'auth/weak-password'){
          const text = e.code 
          wrong(text)
        }
        console.log(e.code)
      }
    }   
    if(user.username === ''){
      const text = 'ingrese un username' 
      wrong(text)
    }
  }

  let datasuer = window.localStorage.getItem('username')
  if(!datasuer){
    return (
      <div className={s.container}>
        {/* 
          Este comp que no se pueda acceder mientars exista un usuario
        */}
        <button onClick={() => navigate('/user')}>Back to SignIn</button>
        <form 
          className={s.formSignUp}
          onSubmit={handleSubmit}
        >
  

          <label className={s.text}>Email: </label> 
          <input 
            onChange={(e) => handleChange(e)} 
            type="email" 
            value={user.email} 
            name="email"
          />
            <label className={s.text}>Password: </label>
            <input
              type= 'password'
              onChange={(e) => {setPassword(e.target.value)}}  
            />

          <label className={s.text}>Username: </label> 
            <input 
              onChange={(e) => handleChange(e)} 
              type="text" 
              value={user.username} 
              name="username" 
            />
          <br />
          <button>Sign Up</button>
        </form>
      </div>
    )
  } else {
    navigate('/')
  }
}

export default SignUp