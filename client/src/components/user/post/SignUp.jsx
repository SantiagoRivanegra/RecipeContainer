import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../firebase/context/AuthContext'
import { GoogleButton } from 'react-google-button'

import { postUser, getUserById, userExists } from '../../../redux/actions'

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

  const { createUserEmailPassword, googleSignIn } = UserAuth()

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
      const userData = await createUserEmailPassword(email, password)
      user.id = userData.user.uid
      dispatch(postUser(user))
      window.localStorage.setItem('username', user.username)
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
      setError(e.message)
      console.log(e.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      let data = await googleSignIn()
      let res = await dispatch(userExists(data.uid))
      // await dispatch(getUserById(data.uid))
      if(res.length === 0) {
        await dispatch(postUser({
          admin:false, 
          id:data.uid,
          username:data.displayName,
          email:data.email,
          avatar:data.photoURL,
          like:"", 
          comment_received:"", 
          comment_send:""
        }))
        //dispatch(getUserById(data.uid))
      }
      window.localStorage.setItem('username', data.displayName)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {/* 
        Este comp que no se pueda acceder mientars exista un usuario
      */}
      <button onClick={() => navigate('/user')}>Back to Home</button>
      <GoogleButton onClick={handleGoogleSignIn} />
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