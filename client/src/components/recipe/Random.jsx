import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRandomRecipe } from '../../redux/actions'
import Card from './Card'

import Box from '@material-ui/core/Box'

const Random = () => {
  const dispatch = useDispatch()
  const random = useSelector((state) => state.randomRecipe)


  useEffect(() => {
    dispatch(getRandomRecipe())
  }, [])
  

  return (
    <Box>
      {
        random && random.map((r) => {
          return(
            <Card key={r.recipe_id} name={r.name_recipe} img={r.image}/>
          )
        })
      }
    </Box>
  )
}

export default Random