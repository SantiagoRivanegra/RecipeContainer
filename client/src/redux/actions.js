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