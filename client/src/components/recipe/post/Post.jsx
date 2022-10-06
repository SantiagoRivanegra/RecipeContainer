import React, { useEffect } from 'react'

import { postRecipe } from '../../../redux/actions'

const Post = () => {

  const handleChange = (e) => {
    console.log(e.target.files[0])
  }

  const handleChangeText = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>Post
      <div>
        <form>
          <input onChange={handleChange} type="file" />
          <label>Title: </label> 
          <input onChange={handleChangeText} type="text" />
          <label>Instructions: </label> 
          <input onChange={handleChangeText} type="text" />
          <label>Ingredient1: </label> 
          <input onChange={handleChangeText} type="text" />
          <label>ingredient2: </label> 
          <input onChange={handleChangeText} type="text" />
          <label>Ingredient3: </label> 
          <input onChange={handleChangeText} type="text" />
          <label>Measure1: </label> 
          <input onChange={handleChangeText} type="text" />
          <label>Measure2: </label> 
          <input onChange={handleChangeText} type="text" />
          <label>Measure3: </label> 
          <input onChange={handleChangeText} type="text" />
          <label>Tags: </label> 
          <input onChange={handleChangeText} type="text" />  

        </form>
      </div>
    </div>
  )
}

export default Post