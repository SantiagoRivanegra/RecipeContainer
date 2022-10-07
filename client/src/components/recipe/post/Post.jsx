import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom' 

import { postRecipe } from '../../../redux/actions'

const Post = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState({
    name_recipe: "",
    instructions: "",
    category:"",
    area:"",
    video:"",
    likes:0,
    image: [],
    comments: ["com"],
    tags:"",
    ingredient1:"",
    ingredient2:"",
    ingredient3:"",
    measure1:"",
    measure2:"",
    measure3:"",
    createdInDb:true,
    userId: 1
});

  function handleSubmit(e){
    e.preventDefault()
    console.log(recipe)
    dispatch(postRecipe(recipe))
    alert('yes')
    setRecipe({
      name_recipe: "",
      instructions: "",
      category:"",
      area:"",
      video:"",
      likes:0,
      image: [],
      comments: ["com"],
      tags:"",
      ingredient1:"",
      ingredient2:"",
      ingredient3:"",
      measure1:"",
      measure2:"",
      measure3:"",
      createdInDb:true,
      userId: 1
  });
  //navigate('/')
  }

  // function handleChangeImage(e){
  //   console.log(e.target.files[0].name)
  // }

  function handleChange(e) {
    setRecipe({
      ...recipe,
      [e.target.name] : e.target.value,
     // [e.target.image] : e.target.files[0].name
    })
  }

  return (
    <div>Post
      <div>
        <button onClick={() => navigate('/')}>Back to Home</button>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input onChange={(e) => handleChange(e)} type="file" name="image"/>
          <br />
          <label>Title: </label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.name_recipe} name="name_recipe"/>
          <br />
          <label>Instructions: </label> 
          <textarea onChange={(e) => handleChange(e)} type="text" value={recipe.instructions} name="instructions"></textarea>
          <br />
          <label>Ingredient1: </label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.ingredient1} name="ingredient1"/>
          <label>Measure1: </label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.measure1} name="measure1"/>
          <br />
          <label>ingredient2: </label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.ingredient2} name="ingredient2"/>
          <label>Measure2: </label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.measure2} name="measure2"/>
          <br />
          <label>Ingredient3: </label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.ingredient3} name="ingredient3"/>
          <label>Measure3: </label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.measure3} name="measure3"/>
          <br />
          <label>Tags: puedo traerlos por ruta</label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.tags} name="tags"/>

          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </div>
  )
}

export default Post