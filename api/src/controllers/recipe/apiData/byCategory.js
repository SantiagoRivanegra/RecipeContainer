const axios = require('axios')

const byCategory = async(category) => {
  const byCategory = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      if(byCategory.data.meals){
      const recipeCategory = await byCategory.data.meals.map(r => {
        return {
          id: r.idMeal,
          name_recipe: r.strMeal,
          image: r.strMealThumb,
        }
      })
      return recipeCategory
    }
  }

  module.exports = byCategory;