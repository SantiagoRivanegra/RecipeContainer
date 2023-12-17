const axios = require('axios')

const ingredients = async(req, res) => {
  const ingredientsApi = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  if(ingredientsApi.data.meals){
  const ingredientName = await ingredientsApi.data.meals.map(r => {
    return {
      id: r.idIngredient,
      name_ingredient: r.strIngredient,
      description: r.strDescription !== null ? r.strDescription : "",
      type: r.strType !== null ? r.strType : "",
    }
  })
  ingredientName ?
  res.status(200).json(ingredientName) :
  ""
}
}

module.exports = {ingredients}