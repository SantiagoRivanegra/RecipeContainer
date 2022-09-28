import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  h3:{
    color:'red'
  },
  img:{
    width:100,
    height:75
  }
})
const Card = ({ name, img }) => {
  const classes = useStyle()

  return (
      <div>
        <h3 className={classes.h3}>{name}</h3>
        <img src={img} alt="nothing" className={classes.img}/>
      </div>
  )
}

export default Card