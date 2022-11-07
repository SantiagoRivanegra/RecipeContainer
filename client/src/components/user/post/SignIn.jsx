import React, { useState } from 'react'
import { UserAuth } from '../../firebase/context/AuthContext'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { signIn } = UserAuth()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }

  return (
    <div>
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