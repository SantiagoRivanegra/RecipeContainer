const initialState = {
  recipe: [],
  allRecipe: [],
  letter: []
}

function reducer(state = initialState, { type, payload }){
  switch(type){
    case 'GET_RECIPE':
      return{
        ...state,
        recipe: payload,
        allRecipe: payload
      }
    
    case 'GET_RECIPE_LETTER':
      return{
        ...state,
        recipe: payload
      }  

    default: return state
  }

}

export default reducer