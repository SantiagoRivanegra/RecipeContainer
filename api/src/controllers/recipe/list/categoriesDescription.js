const axios = require('axios')

const categoriesDescription = async(req, res) => {
  const categoriesDescriptionApi = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  if(categoriesDescriptionApi.data.categories){
  const categoriesDescription = await categoriesDescriptionApi.data.categories.map(r => {
    return {
      id: r.idCategory,
      name_category: r.strCategory,
      image: r.strCategoryThumb,
      description: r.strCategoryDescription,
    }
  })
  categoriesDescription ?
  res.status(200).json(categoriesDescription) :
  ""
}
}

module.exports = {categoriesDescription}