import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRandomRecipe } from '../../../redux/actions'
import Card from '../card/Card'

import s from './Random.module.css'

const Random = () => {
  const dispatch = useDispatch()
  const random = useSelector((state) => state.randomRecipe)


  useEffect(() => {
    dispatch(getRandomRecipe())
  }, [])
  

  return (
    <div className={s.randomContainer}>
      {console.log(random)}
      {
        random ? random.map((r) => {
          return(
            <Card
              key={r.id} 
              name={r.name_recipe} 
              img={r.image}
            />
          )
        }) : (
          <div>
            <h3>Loading...</h3>
          </div>
        )
      }
      {/* <button>Other random Recipe</button> */}
    </div>
  )
}

export default Random