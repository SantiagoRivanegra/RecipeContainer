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