import axios from 'axios'

export function getRecipe(){
  return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/recipe`)
    return dispatch({
      type: 'GET_RECIPE',
      payload: json.data
    })
  }
}

export function getRandomRecipe(){
  return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/recipe/random`)
    return dispatch({
      type: 'GET_RANDOM_RECIPE',
      payload: json.data
    })
  }
}

export function getRecipeTags(){
  return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/recipe/tags`)
    return dispatch({
      type: 'GET_RECIPE_TAGS',
      payload: json.data
    })
  }
}

export function getRecipeDetail(id){
  console.log(id)
  return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/recipe/detail/${id}`)
    console.log(json)
    return dispatch({
      type: 'GET_RECIPE_DETAIL',
      payload: json.data[0]
    })
  }
}

export function getRecipeName(name){
  return async function(dispatch){
    try {
      let json = await axios.get(`http://localhost:3001/recipe/name/${name}`)
      return dispatch({
        type: 'GET_NAME_RECIPE',
        payload: json.data
      })      
    } catch (error) {
      alert('This food no existe')
    }
  }
}

export function getAreaRecipe(area){
  return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/recipe/area/${area}`)
    return dispatch({
      type: 'GET_AREA_RECIPE',
      payload: json.data
    })
  }
}

export function getAreaList(){
  return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/recipe/areas`)
    return dispatch({
      type: 'GET_AREA_LIST',
      payload: json.data
    })
  }
}

export function getCategoryRecipe(category){
  return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/recipe/category/${category}`)
    return dispatch({
      type: 'GET_CATEGORY_RECIPE',
      payload: json.data
    })
  }
}

export function getCategoryList(){
  return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/recipe/categories`)
    return dispatch({
      type: 'GET_CATEGORY_LIST',
      payload: json.data
    })
  }
}

export function getIngredientRecipe(ingredient){
  return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/recipe/ingredient/main/${ingredient}`)
    return dispatch({
      type: 'GET_INGREDIENT_RECIPE',
      payload: json.data
    })
  }
}

export function getIngredientList(){
  return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/recipe/ingredients`)
    return dispatch({
      type: 'GET_INGREDIENT_LIST',
      payload: json.data
    })
  }
}

export function firstLetter(letter){
  return async function(dispatch){
    try {
      console.log(letter)
      let json = await axios.get(`http://localhost:3001/recipe/letter/${letter}`)
      return dispatch({
        type: 'GET_RECIPE_LETTER',
        payload: json.data
      })      
    } catch (error) {
      alert('His food does not exist')
    }
  }
}

export function postRecipe(payload){
  return async () => {
    let res = await axios.post("http://localhost:3001/recipe", payload)
    console.log(res)
    return res
  }
}