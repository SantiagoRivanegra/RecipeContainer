const axios = require('axios')

const tags = async(req, res) => {
  const differentTabelsNotYetSeparated = []
  for (let i = 65; i < 91; i++) {   
    let letter = String.fromCodePoint(i).toLowerCase()
    const recipesByLetter = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    if(recipesByLetter.data.meals && recipesByLetter.data.meals !== null){
      const allTagsOfRecipes = await recipesByLetter.data.meals.map(r => {
        return {
          tags: r.strTags,
        }
      })
      const set = new Set()
      for (let i = 0; i < allTagsOfRecipes.length; i++)
      if(allTagsOfRecipes[i].tags !== null && allTagsOfRecipes[i].tags !== ''){
        if(set.has(allTagsOfRecipes[i].tags) === false){
          set.add(allTagsOfRecipes[i].tags)
       }
      }
      for (let tagOfOneRecipe of set){
      differentTabelsNotYetSeparated.push(tagOfOneRecipe)
      }
    }
  }
  const set123 = new Set()
  for (let i = 0; i < differentTabelsNotYetSeparated.length; i++) {
    allTags = differentTabelsNotYetSeparated[i].split(',')
    for (let i = 0; i < allTags.length; i++) {
      if(set123.has(allTags[i]) === false){
        set123.add(allTags[i])
    }      
    }    
  }
  const containerDifferentTags = []
  for (let tag of set123){
    containerDifferentTags.push(tag)
  }
  res.status(200).json(containerDifferentTags)
}

module.exports = {
  tags
}