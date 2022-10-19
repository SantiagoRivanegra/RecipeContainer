import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom' 
import { useTranslation } from 'react-i18next'

import s from './Post.module.css'
import { postRecipe, getAreaList, getCategoryList, getIngredientList, getRecipeTags } from '../../../redux/actions'

function validate(recipe) {
  let error = {}
  
  if(!recipe.image) error.image = 'Ingre un image a su Receta'

  if(recipe.name_recipe.length < 5 || recipe.name_recipe.length > 30) error.name_recipe = 'El nombre de ser entre 5 y 30 caracteres'
  if(!recipe.name_recipe) {error.name_recipe = 'Ingre un Nombre a su Receta'}
  
  if(!recipe.instructions) error.instructions = 'Ingre un instructions a su Receta'

  if(!recipe.ingredient1) error.ingredient1 = 'Ingre un ingredient1 a su Receta'
  if(!recipe.measure1) error.measure1 = 'Ingre un measure1 a su Receta'

  if(!recipe.ingredient2) error.ingredient2 = 'Ingre un ingredient2 a su Receta'
  if(!recipe.measure2) error.measure2 = 'Ingre un measure2 a su Receta'

  if(!recipe.ingredient3) error.ingredient3 = 'Ingre un ingredient3 a su Receta'
  if(!recipe.measure3) error.measure3 = 'Ingre un measure3 a su Receta'

  if(!recipe.area) error.area = 'Ingre un area a su Receta'

  if(!recipe.category) error.category = 'Ingre un category a su Receta'

  return error
}

const Post = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const areaList = useSelector((state) => state.areaList)
  const categoryList = useSelector((state) => state.categoryList)
  const ingredientList = useSelector((state) => state.ingredientList)
  const tags = useSelector((state) => state.tags)

  const [t, i18n] = useTranslation('global')

  const [error, setError] = useState({})
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
  if(error.image) alert(error.image)
  else if(error.name_recipe) alert(error.name_recipe)
  else if(error.instructions) alert(error.instructions)
  else if(error.ingredient1) alert(error.ingredient1)
  else if(error.measure1) alert(error.measure1)
  else if(error.ingredient2) alert(error.ingredient2)
  else if(error.measure2) alert(error.measure2)
  else if(error.ingredient3) alert(error.ingredient3)
  else if(error.measure3) alert(error.measure3)
  else if(error.area) alert(error.area)
  else if(error.category) alert(error.category)
  else{
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
    setError(validate({
      ...recipe,
      [e.target.name] : e.target.value
    }))
  }

  function handleChangeArea(e) {
    setRecipe({
      ...recipe,
      area: e.target.value,
    })
    setError(validate({
      ...recipe,
      area: e.target.value,
    }))
  }

  function handleChangeCategory(e) {
    setRecipe({
      ...recipe,
      category : e.target.value,
    })
    setError(validate({
      ...recipe,
      category: e.target.value,
    }))
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
        <button onClick={() => navigate('/')}>{t('post.back')}</button>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input onChange={uploadImage} type="file" name="image"/>
          {
            loading ? <h5>Loading image...</h5> : <img src={image} style={{width:"40%"}}/>
          }
          {/* <h6>{t('post.imgSoon')}</h6>
          <label className={s.redLabel}>* </label><label>{t('post.img')}</label> 
          <input onChange={(e) => handleChange(e)} type="url" value={recipe.image} name="image" /> */}
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.name')}</label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.name_recipe} name="name_recipe"/>
          {/* {error.name_recipe && (<p className={s.redLabel}>{error.name_recipe}</p>)} */}
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.instructions')}</label> 
          <textarea onChange={(e) => handleChange(e)} type="text" value={recipe.instructions} name="instructions"></textarea>
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.ingredient')}</label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.ingredient1} name="ingredient1"/>
          <label className={s.redLabel}>* </label><label>{t('post.measure')}</label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.measure1} name="measure1"/>
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.ingredient')}</label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.ingredient2} name="ingredient2"/>
          <label className={s.redLabel}>* </label><label>{t('post.measure')}</label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.measure2} name="measure2"/>
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.ingredient')}</label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.ingredient3} name="ingredient3"/>
          <label className={s.redLabel}>* </label><label>{t('post.measure')}</label> 
          <input onChange={(e) => handleChange(e)} type="text" value={recipe.measure3} name="measure3"/>
          <br />
          <label>{t('post.tag')}</label> 
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
          <label className={s.redLabel}>* </label><label>{t('post.area')}</label> 
          <select onChange={(e) => handleChangeArea(e)}>
          <option>aaaa</option>
          <option key='other' value='other'>other</option>
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
          <label className={s.redLabel}>* </label><label>{t('post.category')}</label> 
          <select onChange={(e) => handleChangeCategory(e)}>
          <option>aaaa</option>
          <option key='other' value='other'>other</option>
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
          {
            !recipe.image ||
            !recipe.name_recipe ||
            !recipe.instructions ||
            !recipe.ingredient1 ||
            !recipe.ingredient2 ||
            !recipe.ingredient3 ||
            !recipe.measure1 ||
            !recipe.measure2 ||
            !recipe.measure3 ||
            !recipe.area ||
            !recipe.category ?
            <button type="submit" disabled>Create Recipe</button>:
            <button type="submit">Create Recipe</button>

          }
        </form>
      </div>
    </div>
  )
}

export default Post