const initialState = {
  recipe: [],
  allRecipe: [],
  randomRecipe: []
}

function reducer(state = initialState, { type, payload }){
  switch(type){
    case 'GET_RECIPE':
      return{
        ...state,
        recipe: payload,
        allRecipe: payload
      }
    
    case 'GET_RANDOM_RECIPE':
      return{
        ...state,
        randomRecipe: payload
      }

    case 'GET_RECIPE_LETTER':
      return{
        ...state,
        recipe: payload
      }
      
    case 'POST_RECIPE':
      return{
        ...state,
      }   

    default: return state
  }

}

export default reducer