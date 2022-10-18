import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { postUser } from '../../../redux/actions'

const PostUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    admin:false, 
    username:"", 
    email:"", 
    avatar:"", 
    like:"", 
    comment_received:"", 
    comment_send:""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
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
  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div>
        <button onClick={() => navigate('/')}>Back to Home</button>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Username: </label> 
          <input onChange={(e) => handleChange(e)} type="text" value={user.username} name="username" />
          <br />
          <label>email: </label> 
          <input onChange={(e) => handleChange(e)} type="email" value={user.email} name="email"/>
          <br />
          <br />
          <button type="submit">Create Recipe</button>
        </form>
    </div>
  )
}

export default PostUser