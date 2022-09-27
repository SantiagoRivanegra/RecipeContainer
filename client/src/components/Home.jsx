import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getRecipe } from '../redux/actions'

const Home = () => {
  const dispatch = useDispatch()
  const allRecipe = useSelector((state) => state.recipe)

  useEffect(() => {
    dispatch(getRecipe())
  }, [])
  
  return (
    <div>home
      <div>
        {
          allRecipe && allRecipe.map((r) =>{
            return(
            <div>
              <h3>{r.name_recipe}</h3>
              <img src={r.image} alt=''/>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home