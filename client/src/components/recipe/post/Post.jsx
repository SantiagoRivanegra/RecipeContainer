import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom' 

import s from './Post.module.css'
import { postRecipe, getAreaList, getCategoryList, getIngredientList, getRecipeTags } from '../../../redux/actions'

const Post = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const areaList = useSelector((state) => state.areaList)
  const categoryList = useSelector((state) => state.categoryList)
  const ingredientList = useSelector((state) => state.ingredientList)
  const tags = useSelector((state) => state.tags)

  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [recipe, setRecipe] = useState({
    name_recipe: "",
    instructions: "",
    category:"",
    area:"",
    video:"",
    likes:0,
    image: "",
    comments: "",
    tags:"",
    ingredient1:"",
    ingredient2:"",
    ingredient3:"",
    ingredient4:"",
    ingredient5:"",
    ingredient6:"",
    ingredient7:"",
    ingredient8:"",
    ingredient9:"",
    ingredient10:"",
    ingredient11:"",
    ingredient12:"",
    ingredient13:"",
    ingredient14:"",
    ingredient15:"",
    ingredient16:"",
    ingredient17:"",
    ingredient18:"",
    ingredient19:"",
    ingredient20:"",
    measure1:"",
    measure2:"",
    measure3:"",
    measure4:"",
    measure5:"",
    measure6:"",
    measure7:"",
    measure8:"",
    measure9:"",
    measure10:"",
    measure11:"",
    measure12:"",
    measure13:"",
    measure14:"",
    measure15:"",
    measure16:"",
    measure17:"",
    measure18:"",
    measure19:"",
    measure20:"",
    createdInD:true,
    userId: 1
});

function handleSubmit(e){
  e.preventDefault()
  console.log(recipe)
  dispatch(postRecipe(recipe))
  // if(image.length>0){
    //   alert('yes')
    //   
    //   } else {
      //     alert('no hay img')
      //   }
      setRecipe({
        name_recipe: "",
        instructions: "",
        category:"",
        area:"",
        video:"",
        likes:0,
        image: "",
        comments: "",
        tags:"",
        ingredient1:"",
        ingredient2:"",
        ingredient3:"",
        ingredient4:"",
        ingredient5:"",
        ingredient6:"",
        ingredient7:"",
        ingredient8:"",
        ingredient9:"",
        ingredient10:"",
        ingredient11:"",
        ingredient12:"",
        ingredient13:"",
        ingredient14:"",
        ingredient15:"",
        ingredient16:"",
        ingredient17:"",
        ingredient18:"",
        ingredient19:"",
        ingredient20:"",
        measure1:"",
        measure2:"",
        measure3:"",
        measure4:"",
        measure5:"",
        measure6:"",
        measure7:"",
        measure8:"",
        measure9:"",
        measure10:"",
        measure11:"",
        measure12:"",
        measure13:"",
        measure14:"",
        measure15:"",
        measure16:"",
        measure17:"",
        measure18:"",
        measure19:"",
        measure20:"",
        createdInD:true,
        userId: 1
  });
  navigate('/')
  }

  const uploadImage = async(e) => {
    console.log(e.target.files[0].name)
    const files = e.target.files
    const data = new FormData()

    data.append("file", files[0])
    data.append("upload_preset", "recipeContainer")
    setLoading(true)

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/santiriva/image/upload", { 
        method: "POST", 
        body: data 
      })
      const file = await res.json();
      console.log((file.secure_url).toString())
      setImage((file.secure_url).toString())
      recipe.image = file.secure_url
      setLoading(false)
  }

  function handleChange(e) {
    setRecipe({
      ...recipe,
      [e.target.name] : e.target.value,
    })
  }

  function handleChangeArea(e) {
    setRecipe({
      ...recipe,
      area: e.target.value,
    })
  }

  function handleChangeCategory(e) {
    setRecipe({
      ...recipe,
      category : e.target.value,
    })
  }

  function handleChangeTags(e) {
    setRecipe({
      ...recipe,
      tags: e.target.value,
    })
  }

  useEffect(() => {
    dispatch(getAreaList())
    dispatch(getCategoryList())
    dispatch(getIngredientList())
    dispatch(getRecipeTags())
  }, [])

  return (
    <div className={s.bgPost}>
      <div>
        <button onClick={() => navigate('/')}>Back to Home</button>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <input onChange={uploadImage} type="file" name="image"/>
          {
            loading ? <h5>Loading image...</h5> : <img src={image} style={{width:"40%"}}/>
          } */}
          <h6>(Soon you will be able to upload images and video from your PC/phone)</h6>
          <label>Image of Final Food: </label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.image} name="image" />
          <br />
          <label>Name of Recipe: </label> 
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
          {/* <input onChange={(e) => handleChange(e)} type="text" value={recipe.tags} name="tags"/> */}
          <select onChange={(e) => handleChangeTags(e)}>
            {
              tags.sort((a, b) => a.localeCompare(b))
              .map(tag => {
                return(
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                )
              })
            }
          </select>
          <br />
          <label>Area: </label> 
          <select onChange={(e) => handleChangeArea(e)}>
            {
              areaList.sort((a, b) => a.name_area.localeCompare(b.name_area))
              .map(area => {
                return(
                  <option key={area.name_area} value={area.name_area}>
                    {area.name_area}
                  </option>
                )
              })
            }
          </select>
          <br />
          <label>Category: </label> 
          <select onChange={(e) => handleChangeCategory(e)}>
            {
              categoryList.sort((a, b) => a.name_category.localeCompare(b.name_area))
              .map(category => {
                return(
                  <option key={category.name_category} value={category.name_category}>
                    {category.name_category}
                  </option>
                )
              })
            }
          </select>
          <br />
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </div>
  )
}

export default Post