import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../firebase/context/AuthContext'

import { signInWithGoogle } from '../../firebase/firebase-services'

import { postUser, getUserById } from '../../../redux/actions'

const PostUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const [user, setUser] = useState({
  //   admin:false, 
  //   username:"", 
  //   email:"", 
  //   avatar:"", 
  //   like:"", 
  //   comment_received:"", 
  //   comment_send:""
  // })

   const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(postUser(user))
  //   setUser({
  //     admin:false, 
  //     username:"", 
  //     email:"", 
  //     avatar:"", 
  //     like:"", 
  //     comment_received:"", 
  //     comment_send:""
  //   })
  //   navigate('/')
   }

  const handleChange = (e) => {
    // setUser({
    //   ...user,
    //   [e.target.name] : e.target.value
    // })
  }

  // const [signup, setSignup] = useState(true)
  // const login = ()=>{
  //   signup === true ?
  //   setSignup(false) : setSignup(true)
  // }

  // async function handleSignInGoogle() {
  //   let data = await signInWithGoogle()
  //   let res = await dispatch(getUserById(data.uid))
  //   if(!res){
  //     await dispatch(postUser({
  //       admin:false, 
  //       username:data.displayName, 
  //       email:data.email, 
  //       avatar:"", 
  //       like:"", 
  //       comment_received:"", 
  //       comment_send:""
  //     }))
  //     dispatch(getUserById(data.uid))
  //   }
  // }

  const {googleSignIn} = UserAuth()
  const { user, logOut } = UserAuth()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(user !== null){
      navigate('/')
    }
  }, [user])

  // const { user, logOut } = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
        <button onClick={() => navigate('/')}>Back to Home</button>
        <GoogleButton onClick={handleGoogleSignIn} />

        {user && user.displayName ? (
          <button onClick={handleSignOut}>Logout</button>
          ) : (
            <button onClick={() => navigate('/')}>Back to Home</button>
          )}


        {/* <form onSubmit={(e) => handleSubmit(e)}>
          <label>Username: </label> 
          <input onChange={(e) => handleChange(e)} type="text" value={user.username} name="username" />
          <br />
          <label>email: </label> 
          <input onChange={(e) => handleChange(e)} type="email" value={user.email} name="email"/>
          <br />
          <a href='#'>SignIn</a>

          <br />
          <button onClick={login}><a href='#'>SignUp</a></button>
          <input type='password' hidden={signup}/>
          <input type="text" hidden={signup}/>
          <br />
          <a href='#'>LogOut</a>
          <br />
          <button onClick={handleSignInGoogle}>Google</button>
          <br />
          <br />
          <button type="submit">Create Recipe</button>
        </form> */}
    </div>
  )
}

export default PostUser