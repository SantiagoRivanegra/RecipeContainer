const axios = require('axios')
const { User, Recipe } = require('../db')

const getApiInfo = async() =>{
    const apiUrl = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    const apiInfo = await apiUrl.data.meals.map(r => {
      return {
        recipe_id: r.idMeal,
        name_recipe: r.strMeal,
        description: r.strInstructions,
        image: r.strMealThumb,
        videos: r.strYoutube,
        ingredients: r.strIngredient1,
        area: r.area,
        category: r.strCategory,
        tags: r.strTags
      }
    })
    return apiInfo
}

const getDbInfo = async() => {
  return await Recipe.findAll({
    // include:{
    //   model: User,
    //   attribute:['username'],
    //   through: {
    //     attributes: []
    //   }
    // }
  })
}

const getRecipes = async(req, res) => {
  const apiInfo = await getApiInfo()
  const dbInfo = await getDbInfo()
  const recipes = apiInfo.concat(dbInfo)
  res.status(200).send(recipes)
  return recipes
}

module.exports = {
  getRecipes,
}