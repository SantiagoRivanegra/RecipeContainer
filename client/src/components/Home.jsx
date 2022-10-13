import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './styles/Home.module.css'

import Card from './recipe/card/Card'
import Random from './recipe/random/Random'
import Paged from './Paged'

import { getRecipeName, getAreaList, getAreaRecipe, getRecipe, firstLetter, getCategoryRecipe, getCategoryList, getIngredientList, getIngredientRecipe } from '../redux/actions'

const Home = () => {
  const dispatch = useDispatch()
  const allRecipes = useSelector((state) => state.recipe)
  const areaList = useSelector((state) => state.areaList)
  const categoryList = useSelector((state) => state.categoryList)
  const ingredientList = useSelector((state) => state.ingredientList)

  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage, setRecipesPerPage] = useState(8)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipe = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  //SearchBar
  const [name, setName] = useState('')
  const handleName = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setName(e.target.value)
  }
  const handleSubmit = () => {
    dispatch(getRecipeName(name))
    setName('')
    setCurrentPage(1)
  }

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
    console.log(setCurrentPage)
  }

  const letter = (e) => {
    dispatch(firstLetter(e.target.value))    
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

  useEffect(() => {
    dispatch(getRecipe())
    dispatch(getAreaList())
    dispatch(getCategoryList())
    dispatch(getIngredientList())
  }, [])
  
  return (
    <div className={s.bgHome}>
    <div>
        <section className={s.section1}>
          <div className={s.cardRandom}>
            <Random/>
          </div>

          <input 
            type="search" 
            placeholder='Search food'
            value={name}
            onChange={(e) =>handleName(e)}
          />
          <button
            type="submit"
            onClick={handleSubmit}
          >Search</button>

          <h4>Ver como poner en los selects los inputs que se puede escribir y poner opciones tambien</h4>
          <select onChange={(e) => handleArea(e)}>
            <option value="">Area</option>
            {
              areaList && areaList.map(area => {
                return(
                  <option key={area.name_area} value={area.name_area}>
                    {area.name_area}
                  </option>
                )
              })
            }
          </select>
          <select onChange={(e) => handleCategory(e)}>
            <option value="">Category</option>
            {
              categoryList && categoryList.map(category => {
                return(
                  <option key={category.name_category} value={category.name_category}>
                    {category.name_category}
                  </option>
                )
              })
            }
          </select>
          {/* <input type="text" placeholder='Search main ingredient'/> */}
          <select onChange={(e) => handleIngredient(e)}>
            <option value="">Ingredient</option>
            {
              ingredientList && ingredientList.map(ingredient => {
                return(
                  <option key={ingredient.name_ingredient} value={ingredient.name_ingredient}>
                    {ingredient.name_ingredient}
                  </option>
                )
              })
            }
          </select>
          
        </section>
        <section className={s.section2}>
          <h3>Carrusel</h3>
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
            allRecipes = {allRecipes.length}
            paged = {paged}
          />
        <div className={s.card}>
          {
            currentRecipe && currentRecipe.map((r) =>{
              return(
                <Card key={r.id} name={r.name_recipe} img={r.image}/>
              // <div>
              //   <h3>{r.name_recipe}</h3>
              //   <img src={r.image} alt=''/>
              // </div>
              )
            })
          }
        </div>
        </section>
        </div>
    </div>
  )
}

export default Home