import React, { useState } from 'react'
import { UserAuth } from '../../firebase/context/AuthContext'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { createUserEmailPassword } = UserAuth()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    try {
      await createUserEmailPassword(email, password)
    } catch (e) {
      setError(e.message)
      console.log(e.message)
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
      <button>Sign Up</button>
    </form>
  </div>
  )
}

export default SignUp