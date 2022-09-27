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