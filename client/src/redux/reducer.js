const initialState = {
  recipe: [],
  allRecipe: [],
  recipeDetail: [],
  randomRecipe: [],
  areaList: [],
  categoryList: [],
  ingredientList: [],
  tags: [],
  user: [],
  userId: [],
  userLogged: []
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

    case 'GET_RECIPE_TAGS':
      return{
        ...state,
        tags: payload
      }

    case 'GET_RECIPE_DETAIL':
      return{
        ...state,
        recipeDetail: payload
      }

    case 'GET_NAME_RECIPE':
      return{
        ...state,
        recipe: payload
      } 

    case 'GET_AREA_LIST':
      return{
        ...state,
        areaList: payload
      }

    case 'GET_AREA_RECIPE':
      return{
        ...state,
        recipe: payload
      }
      
    case 'GET_CATEGORY_LIST':
      return{
        ...state,
        categoryList: payload
      }

    case 'GET_CATEGORY_RECIPE':
      return{
        ...state,
        recipe: payload
      }

    case 'GET_INGREDIENT_LIST':
      return{
        ...state,
        ingredientList: payload
      }

    case 'GET_INGREDIENT_RECIPE':
      return{
        ...state,
        recipe: payload
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

    case 'GET_USER':
      return{
        ...state,
        user: payload
      } 

    case 'POST_USER':
      return{
        ...state,
      }
       
    case 'GET_USER_ID':
      return{
        ...state,
        userId: payload
      }
      
    case 'GET_USER_LOGGED':
      return{
        ...state,
        userLogged: payload
      } 

    default: return state
  }

}

export default reducer