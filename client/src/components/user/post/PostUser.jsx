import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../../firebase/context/AuthContext'

import SignIn from './SignIn'

const PostUser = () => {
  const navigate = useNavigate()

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

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      {/* {logOut aca seria innecesario} */}
        <button onClick={() => navigate('/')}>Back to Home</button>
        <GoogleButton onClick={handleGoogleSignIn} />
        {user && user.displayName ? (
          <button onClick={handleSignOut}>Logout</button>
          ) : (
            ""
          )}

        <span>Already have an account yet? Sign In</span>

        <SignIn />
        <br />
        Or
        <br />
        <span>Don't have an account yet? <a href="/user/signup">Sign Up</a></span> 
        <br />
{/*<Google />*/}
{/*<Facebook />*/}
{/*<Mail&contraseña />*/}
{/*<ForgotPassword />*/}
{/*<CreateNewAccount />*/}
    </div>
  )
}

export default PostUser