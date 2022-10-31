const axios = require('axios')

const areas = async(req, res) => {
  const areasApi = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  if(areasApi.data.meals){
  const areasName = await areasApi.data.meals.map(r => {
    return {
      name_area: r.strArea,
    }
  })
  areasName ?
  res.status(200).json(areasName) :
  ""
}
}

module.exports = {areas}