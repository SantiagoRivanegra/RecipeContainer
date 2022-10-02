import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRandomRecipe } from '../../redux/actions'
import Card from './Card'

const Random = () => {
  const dispatch = useDispatch()
  const random = useSelector((state) => state.randomRecipe)


  useEffect(() => {
    dispatch(getRandomRecipe())
  }, [])
  

  return (
    <div>
      {
        random && random.map((r) => {
          return(
            <Card key={r.id} name={r.name_recipe} img={r.image}/>
          )
        })
      }
    </div>
  )
}

export default Random