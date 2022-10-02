import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './recipe/Card.module.css'

import Card from './recipe/Card'
import Random from './recipe/Random'
import Paged from './Paged'

import { getRecipe, firstLetter } from '../redux/actions'

const Home = () => {
  const dispatch = useDispatch()
  const allRecipes = useSelector((state) => state.recipe)

  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage, setRecipesPerPage] = useState(8)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipe = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  const paged = (pageNumber) => {
    setCurrentPage(pageNumber)
    console.log(setCurrentPage)
  }

  const letter = (e) => {
    dispatch(firstLetter(e.target.value))
  }

  useEffect(() => {
    dispatch(getRecipe())
  }, [])
  
  return (
    <div className={s.bgHome}>AppBar - SearchBar SignUp LogIn -- SearchBar Likes Comments LogOut Profile
      <div>
        <Random />
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
      <div className="flex flex-row bg-blue-500">
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
    </div>
  )
}

export default Home