const axios = require('axios')

const categoriesDescription = async(req, res) => {
  const categories = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  if(categories.data.categories){
  const categoriesDetail = await categories.data.categories.map(r => {
    return {
      id: r.idCategory,
      name_category: r.strCategory,
      image: r.strCategoryThumb,
      description: r.strCategoryDescription,
    }
  })
  categoriesDetail?
  res.status(200).json(categoriesDetail):
  ""
}
}

module.exports = {categoriesDescription}