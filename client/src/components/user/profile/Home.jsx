import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUser } from '../../../redux/actions'

const Home = () => {
  const dispatch = useDispatch()
  const allUsers = useSelector((state) => state.user)
  const loggedUser = useSelector((state) => state.userLogged)

  useEffect(() => {
    dispatch(getUser())
  }, [])
  
  return (
    <div>
{
  allUsers && allUsers.map(user =>{
    return(
      <div>
        <h3>{user.username}</h3>
      </div>
    )
  })
}
    </div>
  )
}

export default Home