import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../firebase/context/AuthContext'

import { postUser, getUserById } from '../../../redux/actions'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [user, setUser] = useState({
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
    try {
      await createUserEmailPassword(email, password)
      dispatch(postUser(user))
      setUser({
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
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div>
      {/* 
        Este comp que no se pueda acceder mientars exista un usuario
      */}
      <button onClick={() => navigate('/user')}>Back to Home</button>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label>Email: </label>
          <input
            type= 'email'
            onChange={(e) => {setEmail(e.target.value)}} 
          /> */}
        </div>
        <div>
          <label>Password: </label>
          <input
            type= 'password'
            onChange={(e) => {setPassword(e.target.value)}}  
          />
        </div>
        <label>Username: </label> 
        <input onChange={(e) => handleChange(e)} type="text" value={user.username} name="username" />
        <br />
        <label>email: </label> 
        <input onChange={(e) => handleChange(e)} type="email" value={user.email} name="email"/>
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp