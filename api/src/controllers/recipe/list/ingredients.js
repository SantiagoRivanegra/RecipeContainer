const axios = require('axios')

const ingredients = async(req, res) => {
  const ingredients = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  if(ingredients.data.meals){
  const ingredientDetail = await ingredients.data.meals.map(r => {
    return {
      id: r.idIngredient,
      name_ingredient: r.strIngredient,
      description: r.strDescription !== null ? r.strDescription : "",
      type: r.strType !== null ? r.strType : "",
    }
  })
  ingredientDetail?
  res.status(200).json(ingredientDetail):
  ""
}
}

module.exports = {ingredients}