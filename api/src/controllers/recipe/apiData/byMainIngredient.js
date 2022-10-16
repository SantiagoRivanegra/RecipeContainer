const axios = require('axios')

const byMainIngredient = async(ingredient) => {
  const byMainIngredient = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      if(byMainIngredient.data.meals){
      const recipeMainIngredient = await byMainIngredient.data.meals.map(r => {
        return {
          id: r.idMeal,
          name_recipe: r.strMeal,
          image: r.strMealThumb,
                  
        }
      })
      return recipeMainIngredient
    }
  }

  module.exports = byMainIngredient;