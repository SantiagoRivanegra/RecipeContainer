const axios = require('axios')

const byArea = async(area) => {
  const byArea = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      if(byArea.data.meals){
      const recipeArea = await byArea.data.meals.map(r => {
        return {
          id: r.idMeal,
          name_recipe: r.strMeal,
          image: r.strMealThumb,
        }
      })
      return recipeArea
    }
  }

  module.exports = byArea;