import React, { useState, useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'
import errorGif from '../assets/images/errorGif.gif'
import useSound from 'use-sound'
import errorSound from '../assets/sounds/error.mp3'
import { useTranslation } from 'react-i18next'

import s from './styles/Home.module.css'

import Card from './recipe/card/Card'
import Random from './recipe/random/Random'
import Paged from './Paged'
import CardNotFound from './recipe/card/CardNotFound'

import { getRecipeName, getAreaList, getAreaRecipe, getRecipe, firstLetter, getCategoryRecipe, getCategoryList, getIngredientList, getIngredientRecipe, getRandomRecipe } from '../redux/actions'
//import { getRecipeTags } from '../redux/actions'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allRecipes = useSelector((state) => state.recipe)
  const areaList = useSelector((state) => state.areaList)
  const categoryList = useSelector((state) => state.categoryList)
  const ingredientList = useSelector((state) => state.ingredientList)
  //const tags = useSelector((state) => state.tags)
  const [lang, setLang] = useState("")
  const [ error ] = useSound(errorSound, {
    volume: 0.1
  })
  
  const [t, i18n] = useTranslation('global')

  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage, setRecipesPerPage] = useState(8)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipe = allRecipes && allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  //SearchBar
  const [name, setName] = useState('')
  const handleName = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      dispatch(getRecipeName(name))
      setName('')
      setCurrentPage(1)      
    } else {
      Swal.fire({
        text: `${t('home.emptySearch')}`,
        width: '30%',
        imageUrl: errorGif,
        imageWidth: '25%',
        imageHeight: '60%',
        imageAlt: 'A tall image',
      })
      error()
    }
  }

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const letter = (e) => {
    dispatch(firstLetter(e.target.value))
    setCurrentPage(1)
  }

  const handleRandom = () => {
    dispatch(getRandomRecipe())
    setCurrentPage(1)
  }

  const handleArea = (e) => {
    dispatch(getAreaRecipe(e.target.value))
    setCurrentPage(1)
  }

  const handleCategory = (e) => {
    dispatch(getCategoryRecipe(e.target.value))
    setCurrentPage(1)
  }

  const handleIngredient = (e) => {
    dispatch(getIngredientRecipe(e.target.value))
    setCurrentPage(1)
  }

  // const handleTags = (e) => {
  //   dispatch(getAreaRecipe(e.target.value))
  //   setCurrentPage(1)
  // }

  const handleLanguage = (lang) => {
    if(lang.target.value === 'es') i18n.changeLanguage('es')
    if(lang.target.value === 'en') i18n.changeLanguage('en')
    if(lang.target.value === 'fr') i18n.changeLanguage('fr')
    if(lang.target.value === 'pt') i18n.changeLanguage('pt')
    setLang(lang.target.value)
    localStorage.setItem('lang', lang.target.value)
  }
  const idioma = localStorage.getItem('lang')

  useEffect(() => {
    dispatch(getRecipe())
    dispatch(getAreaList())
    dispatch(getCategoryList())
    dispatch(getIngredientList())
    //dispatch(getRecipeTags())
  }, [])
  
  return (
    <Fragment>
      <Helmet>
        <title>
        {t('helmet.home')}
        </title>
      </Helmet>
    <div className={s.bgHome}>
    <div>
        <section className={s.section1}>
          <div className={s.cardRandom}>
            <Random />
          </div>
          <div className={s.divButtons}>
            <button 
              onClick={() => navigate('/post')}
              className={s.btn}
            >{t('home.create')}</button>
            <button
              onClick={(handleRandom)}
              className={s.btn}
            >{t('home.random')}</button>            
          </div>
          <div className={s.search}>
            <input 
              type="search" 
              placeholder={t('home.searchPlaceHolder')}
              value={name}
              onChange={(e) =>handleName(e)}
            />
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >{t('home.search')}</button>
          </div>

          {/* <h4>Ver como poner en los selects los inputs que se puede escribir y poner opciones tambien</h4> */}
          <div className={s.filter}>
            <select onChange={(e) => handleArea(e)}>
              <option value="">{t('home.area')}</option>
              <option key='other' value='other'>other</option>
              {
                areaList ? areaList.map(area => {
                  return(
                    <option key={area.name_area} value={area.name_area}>
                      {area.name_area}
                    </option>
                  )
                }) : (
                  <div>
                    <h3>Loading...</h3>
                  </div>
                )
              }
            </select>
            <select onChange={(e) => handleCategory(e)}>
              <option value="">{t('home.category')}</option>
              <option key='other' value='other'>other</option>
              {
                categoryList ? categoryList.map(category => {
                  return(
                    <option key={category.name_category} value={category.name_category}>
                      {category.name_category}
                    </option>
                  )
                }) : (
                  <div>
                    <h3>Loading...</h3>
                  </div>
                )
              }
            </select>
            {/* <input type="text" placeholder='Search main ingredient'/> */}
            <select onChange={(e) => handleIngredient(e)}>
              <option value="">{t('home.ingredient')}</option>
              {
                ingredientList ? ingredientList.map(ingredient => {
                  return(
                    <option key={ingredient.name_ingredient} value={ingredient.name_ingredient}>
                      {ingredient.name_ingredient}
                    </option>
                  )
                }) : (
                  <div>
                    <h3>Loading...</h3>
                  </div>
                )
              }
            </select>
            {/* <select onChange={(e) => handleTags(e)}>
              <option value="">Tags</option>
              {
                tags && tags.map(tag => {
                  return(
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  )
                })
              }
            </select> */}
          </div>
          <div className={s.contactLang}>
            <a href="https://santiagorivanegra.netlify.app/" target="_blank" className={s.contact}>{t('home.contact')}</a>
            <b className={s.lang}>{t('home.language')}:</b>
            <select onChange={(e) => handleLanguage(e)} className={s.langSelect} defaultValue={idioma}>            
              <option value='en'>EN</option>
              <option value='es'>ES</option>
              <option value='fr'>FR</option>
              <option value='pt'>PT</option>
            </select>
          </div>
        </section>
        <section className={s.section2}>
          {/* <h3>Carrusel</h3> */}
          <div className={s.divLetter}>
            <button value="a" onClick={(e) => letter(e)}>a</button>
            <button value="b" onClick={(e) => letter(e)}>b</button>
            <button value="c" onClick={(e) => letter(e)}>c</button>
            <button value="d" onClick={(e) => letter(e)}>d</button>
            <button value="e" onClick={(e) => letter(e)}>e</button>
            <button value="f" onClick={(e) => letter(e)}>f</button>
            <button value="g" onClick={(e) => letter(e)}>g</button>
            <button value="h" onClick={(e) => letter(e)}>h</button>
            <button value="i" onClick={(e) => letter(e)}>i</button>
            <button value="j" onClick={(e) => letter(e)}>j</button>
            <button value="k" onClick={(e) => letter(e)}>k</button>
            <button value="l" onClick={(e) => letter(e)}>l</button>
            <button value="m" onClick={(e) => letter(e)}>m</button>
            <button value="n" onClick={(e) => letter(e)}>n</button>
            <button value="o" onClick={(e) => letter(e)}>o</button>
            <button value="p" onClick={(e) => letter(e)}>p</button>
            <button value="q" onClick={(e) => letter(e)}>q</button>
            <button value="r" onClick={(e) => letter(e)}>r</button>
            <button value="s" onClick={(e) => letter(e)}>s</button>
            <button value="t" onClick={(e) => letter(e)}>t</button>
            <button value="u" onClick={(e) => letter(e)}>u</button>
            <button value="v" onClick={(e) => letter(e)}>v</button>
            <button value="w" onClick={(e) => letter(e)}>w</button>
            <button value="x" onClick={(e) => letter(e)}>x</button>
            <button value="y" onClick={(e) => letter(e)}>y</button>
            <button value="z" onClick={(e) => letter(e)}>z</button>
          </div>
          <Paged 
            recipesPerPage = {recipesPerPage}
            allRecipes = {allRecipes && allRecipes.length}
            paged = {paged}
          />
        <div className={s.card}>
          {
            currentRecipe ? currentRecipe.map((r) =>{
              return(
                <Card key={r.id} id={r.id} name={r.name_recipe} img={r.image} userId={r.userId}/>
              )
            }) : (
              <div>
                <CardNotFound/>
                {/* <h3>Loading...</h3> */}
              </div>
            )
          }
        </div>
        </section>
        </div>
    </div>
    </Fragment>
  )
}

export default Home