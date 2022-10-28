const axios = require('axios')

const categories = async(req, res) => {
  const categoriesApi = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
  if(categoriesApi.data.meals){
  const categoriesName = await categoriesApi.data.meals.map(r => {
    return {
      name_category: r.strCategory,
    }
  })
  categoriesName ?
  res.status(200).json(categoriesName) :
  ""
}
}

module.exports = {categories}