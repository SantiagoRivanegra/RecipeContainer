import React, { useState, useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import s from './styles/Home.module.css'

import SearchBar from './recipe/searchBar/SearchBar'
import Area from './recipe/filters/Area'
import Category from './recipe/filters/Category'
import Ingredient from './recipe/filters/Ingredient'
import Language from './language/Language'
import Letters from './recipe/filters/Letters'
import Card from './recipe/card/Card'
import Random from './recipe/random/Random'
import Paged from './Paged'
import CardNotFound from './recipe/card/CardNotFound'

import { getAreaList, getRecipe, getCategoryList, getIngredientList, getRandomRecipe } from '../redux/actions'
//import { getRecipeTags } from '../redux/actions'

import { UserAuth } from './firebase/context/AuthContext'
import Contact from './contact/Contact'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allRecipes = useSelector((state) => state.recipe)

  const [nameNotFound, setNameNotFound] = useState('')
  
  const [t] = useTranslation('global')

  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage, setRecipesPerPage] = useState(8)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipe = allRecipes && allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  const {user, logOut} = UserAuth()

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleRandom = () => {
    dispatch(getRandomRecipe())
  }

  const handleSignIn = async () => {
    navigate('/user')
  }

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(getRecipe())
    dispatch(getAreaList())
    dispatch(getCategoryList())
    dispatch(getIngredientList())
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

        <SearchBar 
          setCurrentPage = {setCurrentPage}
          setNameNotFound = {setNameNotFound}
        />

        {/* <h4>Ver como poner en los selects los inputs que se puede escribir y poner opciones tambien</h4> */}
        <div className={s.filter}>
          <Area 
            setCurrentPage = {setCurrentPage}
            refresh = {allRecipes}
          />
          <Category 
            setCurrentPage = {setCurrentPage}
            refresh = {allRecipes}
          />
          <Ingredient 
            setCurrentPage = {setCurrentPage}
            refresh = {allRecipes}
          />
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
          {/* <a href="https://santiagorivanegra.netlify.app/" target="_blank" className={s.contact}>{t('home.contact')}</a> */}
          <Contact />
          <Language />

        </div>
      </section>
          {user ? (
            <span className={s.user}>Welcome {user.displayName}<button onClick={handleSignOut}>Logout</button></span>
          ): <span className={s.user}><button onClick={handleSignIn}>SignIn</button></span>}

        <section className={s.section2}>
        {/* {user !== null ? console.log(user.displayName) : console.log(user)} */}
          {/* <h3>Carrusel</h3> */}

          <Letters 
            setCurrentPage = {setCurrentPage}
          />

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
                <CardNotFound 
                  name = {nameNotFound}
                />
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