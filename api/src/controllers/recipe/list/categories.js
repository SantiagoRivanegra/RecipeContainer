const axios = require('axios')

const categories = async(req, res) => {
  const categories = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
  if(categories.data.meals){
  const categoriesDetail = await categories.data.meals.map(r => {
    return {
      name_category: r.strCategory,
    }
  })
  categoriesDetail?
  res.status(200).json(categoriesDetail):
  ""
}
}

module.exports = {categories}