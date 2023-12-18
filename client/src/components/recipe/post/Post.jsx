import React, { useState, useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom' 
import { useTranslation } from 'react-i18next'

import { Alerts } from '../../alerts/Alerts'

import { IoClose } from 'react-icons/io5'
import { FcCheckmark } from 'react-icons/fc'

import s from './Post.module.css'
import { postRecipe, getAreaList, getCategoryList, getIngredientList, getRecipeTags } from '../../../redux/actions'

function validate(recipe) {
  let error = {}
  
   if(!recipe.image) error.image = 'Ingre un image a su Receta'

  if(recipe.name_recipe.length < 5 || recipe.name_recipe.length > 30) error.name_recipe = 'El nombre de ser entre 5 y 30 caracteres'
  if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(recipe.name_recipe)) error.name_recipe = 'Para el nombre ingrese solo letras, por favor'
  // if(!recipe.name_recipe) {error.name_recipe = 'Ingre un Nombre a su Receta'}
  
  if(recipe.instructions.length < 50 || recipe.instructions.length > 500) error.instructions = 'Las instructions deben tener al menos  entre 50 y 500 caracteres'
  // if(!recipe.instructions) error.instructions = 'Ingre un instructions a su Receta'

  if(recipe.ingredient1.length < 3 || recipe.ingredient1.length > 20) error.ingredient1 = 'Los inrgredientes deben tener al menos  entre 3 y 20 caracteres'
  // if(!recipe.ingredient1) error.ingredient1 = 'Ingre un ingredient1 a su Receta'
  if(!recipe.measure1) error.measure1 = 'Ingre un measure1 a su Receta'

  if(recipe.ingredient2.length < 3 || recipe.ingredient2.length > 20) error.ingredient2 = 'Los inrgredientes deben tener al menos  entre 3 y 20 caracteres'
  // if(!recipe.ingredient2) error.ingredient2 = 'Ingre un ingredient2 a su Receta'
  if(!recipe.measure2) error.measure2 = 'Ingre un measure2 a su Receta'

  if(recipe.ingredient3.length < 3 || recipe.ingredient3.length > 20) error.ingredient3 = 'Los inrgredientes deben tener al menos  entre 3 y 20 caracteres'
  // if(!recipe.ingredient3) error.ingredient3 = 'Ingre un ingredient3 a su Receta'
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
  const { correct, wrong } = Alerts()

  const [t] = useTranslation('global')

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
    recipeUsername: 'SantiRiva'
});

function handleSubmit(e){
  e.preventDefault()
  if(error.image) 
    {
      let text= `${t('postError.image')}`
      wrong(text)
    }
  else if(recipe.name_recipe.length < 5 || recipe.name_recipe.length > 30)
    {
      let text = `${t('postError.nameLength')}`
      wrong(text)
    }
  else if((!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(recipe.name_recipe)))
    {
      let text = `${t('postError.nameAlphabet')}`
      wrong(text)
    }
  else if(error.instructions) 
    {
      let text = `${t('postError.instructions')}`
      wrong(text)
    }
  else if(error.ingredient1 || error.ingredient2 || error.ingredient3) 
    {
      let text = `${t('postError.ing1')}` 
      wrong(text)
    }
  
  else if(error.measure1 || error.measure2 || error.measure3) 
    {
      let text= `${t('postError.meas1')}`
      wrong(text)
    }
  else if(error.area) 
    {
      let text = `${t('postError.area')}`
      wrong(text)
    }
  else if(error.category) 
    {
      let text = `${t('postError.category')}`
      wrong(text)
    }
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
      let text = `${t('post.created')}`
      correct(text)
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

  const handleDeleteImg = () => {
    console.log('click')
    setImage("")
    setRecipe({
      ...recipe,
      image: "",
    })
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
    //dispatch(getRecipeTags())
  }, [])

  return (
    <Fragment>
      <Helmet>
        <title>
          {t('helmet.post')}
        </title>
      </Helmet>
    <div className={s.bgPost}>
      <div>
        {/* <button onClick={() => navigate('/')}>{t('post.back')}</button> */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={s.redLabel}>* </label><span className={s.required}>{t('post.required')}</span>
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.img')}</label>
          <input onChange={uploadImage} type="file" name="image"/>
          { !recipe.image || error.image ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.image')}
            /> : 
            <FcCheckmark/> 
          }
          <br />
          {
          image ? <button onClick={handleDeleteImg} className={s.imgDelete}>{t('post.imgDelete')}</button> : "" 
          }
          {/* <h6>{t('post.imgSoon')}</h6>
          <label className={s.redLabel}>* </label><label>{t('post.img')}</label> 
        <input onChange={(e) => handleChange(e)} type="url" value={recipe.image} name="image" /> */}
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.name')}</label> 
          <input
            maxlength="30" 
            onChange={(e) => handleChange(e)} 
            type="text" 
            value={recipe.name_recipe} 
            name="name_recipe"
          />
          { recipe.name_recipe.length > 30 || recipe.name_recipe.length < 5 ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.nameLength')}
            /> : 
            ((!error.name_recipe) ? 
            <FcCheckmark /> : 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.nameAlphabet')}
            />) 
          }
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.instructions')}</label><br />
          <textarea
            maxlength="500" 
            placeholder="Intructions..." 
            onChange={(e) => handleChange(e)} 
            type="text" 
            value={recipe.instructions} 
            name="instructions"
          ></textarea>
          { recipe.instructions.length === 0 || error.instructions ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.instructions')}
            /> : 
            <FcCheckmark/> 
          }
          <span>{recipe.instructions.length} / 500</span>
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.ingredient')}</label> 
          <input maxlength="20" onChange={(e) => handleChange(e)} type="text" value={recipe.ingredient1} name="ingredient1"/>
          { !recipe.ingredient1 || error.ingredient1 ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.ing1')}
            /> : 
            <FcCheckmark/> 
          }
          <label className={s.redLabel}>* </label><label>{t('post.measure')}</label> 
          <input maxlength="10" onChange={(e) => handleChange(e)} type="text" value={recipe.measure1} name="measure1"/>
          { !recipe.measure1 || error.measure1 ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.meas1')}
            /> : 
            <FcCheckmark/> 
          }
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.ingredient')}</label> 
          <input maxlength="20" onChange={(e) => handleChange(e)} type="text" value={recipe.ingredient2} name="ingredient2"/>
          { !recipe.ingredient2 || error.ingredient2 ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.ing2')}
            /> : 
            <FcCheckmark/> 
          }
          <label className={s.redLabel}>* </label><label>{t('post.measure')}</label> 
          <input maxlength="10"onChange={(e) => handleChange(e)} type="text" value={recipe.measure2} name="measure2"/>
          { !recipe.measure2 || error.measure2 ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.meas2')}
            /> : 
            <FcCheckmark/> 
          }
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.ingredient')}</label> 
          <input maxlength="20" onChange={(e) => handleChange(e)} type="text" value={recipe.ingredient3} name="ingredient3"/>
          { !recipe.ingredient3 || error.ingredient3 ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.ing3')}
            /> : 
            <FcCheckmark/> 
          }
          <label className={s.redLabel}>* </label><label>{t('post.measure')}</label> 
          <input maxlength="10"onChange={(e) => handleChange(e)} type="text" value={recipe.measure3} name="measure3"/>
          { !recipe.measure3 || error.measure3 ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.meas3')}
            /> : 
            <FcCheckmark/> 
          }
          <br />
          <button
            className={s.info}
            data-bs-toggle="tooltip" 
            data-bs-placement="right" 
            title={t('post.info')}
          >i</button>
          {/* <br />
          <label>{t('post.tag')}</label> 
           <input onChange={(e) => handleChange(e)} type="text" value={recipe.tags} name="tags"/> 
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
          </select> */}
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.area')}</label> 
          <select onChange={(e) => handleChangeArea(e)}>
          <option hidden selected>----</option>
          <option key='other' value='other'>{t('post.other')}</option>
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
          { !recipe.area || error.area ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.area')}
            /> : 
            <FcCheckmark/> 
          }
          <br />
          <label className={s.redLabel}>* </label><label>{t('post.category')}</label> 
          <select onChange={(e) => handleChangeCategory(e)}>
          <option hidden selected>----</option>
          <option key='other' value='other'>{t('post.other')}</option>
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
          { !recipe.category || error.category ? 
            <IoClose 
              data-bs-toggle="tooltip" 
              data-bs-placement="right" 
              title={t('postError.category')}
            /> : 
            <FcCheckmark/> 
          }
          <br />
          <br />
          <br />
          <button onClick={() => navigate('/')} className={s.back}>{t('post.back')}</button>
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
            <button type="submit" disabled>{t('post.create')}</button>:
            <button type="submit">{t('post.create')}</button>

          }
        </form>
      </div>
      <div className={s.containerImg}>
        {
          loading ? <h5>Loading image...</h5> : (<img src={image} alt={t('post.imgAlt')} className={s.img}/>
          )
        }
      </div>
    </div>
    </Fragment>
  )
}

export default Post