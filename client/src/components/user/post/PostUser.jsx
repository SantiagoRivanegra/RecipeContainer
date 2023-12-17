import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../firebase/context/AuthContext'
import { Alerts } from '../../alerts/Alerts'

import { postUser, getUserByUsername, userExists } from '../../../redux/actions'

import SignIn from './SignIn'

import s from './PostUser.module.css'

const PostUser = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const {googleSignIn} = UserAuth()
  const { user } = UserAuth()
  const { correct } = Alerts()

  const handleGoogleSignIn = async () => {
    try {
      let data = await googleSignIn()
      let res = await dispatch(userExists(data.uid))
      await dispatch(getUserByUsername(data.displayName))
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
        dispatch(getUserByUsername(data.displayName))
      }
      await correct('Sesion Iniciada')
      window.localStorage.setItem('username', data.displayName)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(user !== null){
      navigate('/')
    }
  }, [user])

  return (
    <div className={s.container}>
        <button onClick={() => navigate('/')}>Back to Home</button>
        <span className={s.text}>Ya tienes una cuenta? Sign In</span>
        <GoogleButton 
          onClick={handleGoogleSignIn} 
        />
        <span className={s.text}>Or</span>
        <br />
        <SignIn />
        <br />
        <span className={s.text}>Todavia no tienes una cuenta?<a href="/user/signup">Sign Up</a></span> 
        <br />
{/*<Facebook />*/}
{/*<ForgotPassword />*/}
    </div>
  )
}

export default PostUser