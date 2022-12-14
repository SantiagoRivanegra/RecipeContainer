import axios from 'axios'

export function getRecipe(){
  return async function(dispatch){
    let json = await axios.get(`/recipe`)
    return dispatch({
      type: 'GET_RECIPE',
      payload: json.data
    })
  }
}

export function getRandomRecipe(){
  return async function(dispatch){
    let json = await axios.get(`/recipe/random`)
    return dispatch({
      type: 'GET_RANDOM_RECIPE',
      payload: json.data
    })
  }
}

export function getRecipeTags(){
  return async function(dispatch){
    let json = await axios.get(`/recipe/tags`)
    return dispatch({
      type: 'GET_RECIPE_TAGS',
      payload: json.data
    })
  }
}

export function getRecipeDetail(id){
  return async function(dispatch){
    let json = await axios.get(`/recipe/detail/${id}`)
    return dispatch({
      type: 'GET_RECIPE_DETAIL',
      payload: json.data[0]
    })
  }
}

export function getRecipeName(name){
  return async function(dispatch){
    try {
      let json = await axios.get(`/recipe/name/${name}`)
      return dispatch({
        type: 'GET_NAME_RECIPE',
        payload: json.data
      })      
    } catch (error) {
      // alert('No existen recetas con este nombre: ' + name)
      return dispatch({
        type: 'GET_NAME_RECIPE'
      }) 
    }
  }
}

export function getAreaRecipe(area){
  return async function(dispatch){
    let json = await axios.get(`/recipe/area/${area}`)
    return dispatch({
      type: 'GET_AREA_RECIPE',
      payload: json.data
    })
  }
}

export function getAreaList(){
  return async function(dispatch){
    let json = await axios.get(`/recipe/areas`)
    return dispatch({
      type: 'GET_AREA_LIST',
      payload: json.data
    })
  }
}

export function getCategoryRecipe(category){
  return async function(dispatch){
    let json = await axios.get(`/recipe/category/${category}`)
    return dispatch({
      type: 'GET_CATEGORY_RECIPE',
      payload: json.data
    })
  }
}

export function getCategoryList(){
  return async function(dispatch){
    let json = await axios.get(`/recipe/categories`)
    return dispatch({
      type: 'GET_CATEGORY_LIST',
      payload: json.data
    })
  }
}

export function getIngredientRecipe(ingredient){
  return async function(dispatch){
    let json = await axios.get(`/recipe/ingredient/main/${ingredient}`)
    return dispatch({
      type: 'GET_INGREDIENT_RECIPE',
      payload: json.data
    })
  }
}

export function getIngredientList(){
  return async function(dispatch){
    let json = await axios.get(`/recipe/ingredients`)
    return dispatch({
      type: 'GET_INGREDIENT_LIST',
      payload: json.data
    })
  }
}

export function firstLetter(letter){
  
  return async function(dispatch){
    try {
      let json = await axios.get(`/recipe/letter/${letter}`)
      return dispatch({
        type: 'GET_RECIPE_LETTER',
        payload: json.data
      })      
    } catch (error) {
      return dispatch({
        type: 'GET_RECIPE_LETTER'
      }) 
    }
  }
}

export function postRecipe(payload){
  return async () => {
    let res = await axios.post("/recipe", payload)
    console.log(res)
    return res
  }
}

export function getUser(){
  return async function(dispatch){
    let json = await axios.get(`/user`)
    return dispatch({
      type: 'GET_USER',
      payload: json.data
    })
  }
}

export function postUser(payload){
  return async () => {
    let res = await axios.post("/user", payload)
    console.log(res)
    return res
  }
}

export function userExists(id){
  return async function(dispatch){
    try {
      let json = await axios.get(`/user/${id}`)
      return json.data
    } catch (error) {
      console.log(error)
    }
  }
}

export function getUserById(id){
  return async function(dispatch){
    let json = await axios.get(`/user/${id}`)
    return dispatch({
      type: 'GET_USER_ID',
      payload: json.data
    })
  }
}

export function getUserByUsername(username){
  return async function(dispatch){
    let json = await axios.get(`/user/username/${username}`)
    return dispatch({
      type: 'GET_USER_LOGGED',
      payload: json.data
    })
  }
}

export function getUserByEmail(email){
  return async function(dispatch){
    let json = await axios.get(`/user/email/${email}`)
    return json.data
  }
}