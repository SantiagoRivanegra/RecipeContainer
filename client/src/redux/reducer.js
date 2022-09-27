const initialState = {
  recipe: [],
  allRecipe: []
}

function reducer(state = initialState, { type, payload }){
  switch(type){
    case 'GET_RECIPE':
      return{
        ...state,
        recipe: payload,
        allRecipe: payload
      }
      default: return state
  }

}

export default reducer