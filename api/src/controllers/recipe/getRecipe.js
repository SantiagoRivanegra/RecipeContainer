const axios = require('axios')
const { User, Recipe } = require('../../db')
const byArea = require('./apiData/byArea')
const byCategory = require('./apiData/byCategory')
const byId = require('./apiData/byId')
const byLetter = require('./apiData/byLetter')
const byMainIngredient = require('./apiData/byMainIngredient')
const byName = require('./apiData/byName')
const recipeRandom = require('./apiData/random')

const dbLetter = require('./dbData/dbLetter')

const getApiInfo = async() =>{
    const apiUrl = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    const apiInfo = await apiUrl.data.meals.map(r => {
      return {
        id: r.idMeal,
        name_recipe: r.strMeal,
        instructions: r.strInstructions,
        image: r.strMealThumb,
        videos: r.strYoutube,
        ingredients1: r.strIngredient1 ? r.strIngredient1 : "",
        ingredients2: r.strIngredient2 ? r.strIngredient2 : "",
        ingredients3: r.strIngredient3 ? r.strIngredient3 : "",
        ingredients4: r.strIngredient4 ? r.strIngredient4 : "",
        ingredients5: r.strIngredient5 ? r.strIngredient5 : "",
        ingredients6: r.strIngredient6 ? r.strIngredient6 : "",
        ingredients7: r.strIngredient7 ? r.strIngredient7 : "",
        ingredients8: r.strIngredient8 ? r.strIngredient8 : "",
        ingredients9: r.strIngredient9 ? r.strIngredient9 : "",
        ingredients10: r.strIngredient10 ? r.strIngredient10 : "",
        ingredients11: r.strIngredient11 ? r.strIngredient11 : "",
        ingredients12: r.strIngredient12 ? r.strIngredient12 : "",
        ingredients13: r.strIngredient13 ? r.strIngredient13 : "",
        ingredients14: r.strIngredient14 ? r.strIngredient14 : "",
        ingredients15: r.strIngredient15 ? r.strIngredient15 : "",
        ingredients16: r.strIngredient16 ? r.strIngredient16 : "",
        ingredients17: r.strIngredient17 ? r.strIngredient17 : "",
        ingredients18: r.strIngredient18 ? r.strIngredient18 : "",
        ingredients19: r.strIngredient19 ? r.strIngredient19 : "",
        ingredients20: r.strIngredient20 ? r.strIngredient20 : "",
        measure1: r.strMeasure1 ? r.strMeasure1 : "",
        area: r.strArea,
        category: r.strCategory,
        tags: r.strTags
      }
    })
    return apiInfo
}

const getDbInfo = async() => {
  return await Recipe.findAll({
  })
}

//Get recipes
const getRecipes = async(req, res) => {
  const apiInfo = await getApiInfo()
  const dbInfo = await getDbInfo()
  const recipes = apiInfo.concat(dbInfo)
  res.status(200).json(recipes)
  return recipes
}

//Get Random Recipe
const getRandomRecipe = async(req, res) => {
    const random = await recipeRandom()
     res.status(200).json(random)
}

//Get Recipe by Name
const getRecipeByName = async(req, res) => {
  const { name } = req.params
  const nameDb = name.toLowerCase()
  try {
    if(name){
      const recipeNameApi = await byName(name)
      const recipeDb = await Recipe.findAll({ 
        where: { name_recipe : nameDb }
      })
    recipeNameApi !== undefined ?
    res.status(200).json(recipeNameApi.concat(recipeDb)) :
    (recipeDb.length > 0 ? 
    res.status(200).json(recipeDb) :
    res.status(500).json("There are no recipes with that name"))
    }
  } catch (error) {
    console.log(error)
  }
}

//Get Recipe Detail
const getRecipeDetail = async(req, res) => {
  const { id } = req.params
  let idUuid = id.length
  console.log(idUuid)
  try {
    if(idUuid !== 36){
      const recipeIdApi = await byId(id)
      recipeIdApi ?
      res.status(200).json(recipeIdApi) :
      res.status(500).json("There are no recipes with this id.")
    } else if(idUuid === 36){
        const recipeIdDb = await Recipe.findAll({ 
        where: { id : id }
      })
      recipeIdDb.length > 0 ?
      res.status(200).json(recipeIdDb) :
      res.status(500).json("There are no recipes with this id.")
    }
  } catch (error) {
    console.log(error)
  }
}

//Get Recipe by First Letter
const getRecipeByFirstLetter = async(req, res) => {
  const { letter } = req.params
  try {
    if(letter){
      const recipeLetterApi = await byLetter(letter)
      const recipeDb = await dbLetter(letter)
      const recipeDbName = []
      let name = ""
      for (let i = 0; i < recipeDb.length; i++) {
        name = recipeDb[i].toLowerCase()
        const recipe = await Recipe.findAll({ 
          where: { name_recipe : name }
        })
        //recipeDbName = recipe.split('')
        // const recipe1 = []
        // recipe1.concat(recipe)
        recipeDbName.push(recipe)
        //console.log(recipeDbName[i])

      }
      recipeLetterApi !== undefined ?
      res.status(200).json(recipeLetterApi.concat(recipeDbName)) :
      (recipeDbName.length > 0 ? 
      res.status(200).json(recipeDbName) :
      res.status(500).json("There are no recipes with that letter"))
    }
  } catch (error) {
    console.log(error)
  }
}

//Get Recipe by Category
const getRecipeByCategory = async(req, res) => {
  const { category } = req.params
  const categoryDb = category.toLowerCase()
  try {
    if(category){
      const recipeCategoryApi = await byCategory(category)
      const recipeCategoryDb = await Recipe.findAll({ 
        where: { category : categoryDb }
      })
      recipeCategoryApi !== undefined ?
      res.status(200).json(recipeCategoryApi.concat(recipeCategoryDb)) :
      (recipeCategoryDb.length > 0 ? 
      res.status(200).json(recipeCategoryDb) :
      res.status(500).json("There are no recipes in this category."))
    }
  } catch (error) {
    console.log(error)
  }
}

//Get Recipe by Area
const getRecipeByArea = async(req, res) => {
  const { area } = req.params
  const areaDb = area.toLowerCase()
  try {
    if(area){
      const recipeAreaApi = await byArea(area)
      const recipeAreaDb = await Recipe.findAll({ 
        where: { area : areaDb }
      })
      recipeAreaApi !== undefined ?
      res.status(200).json(recipeAreaApi.concat(recipeAreaDb)) :
      (recipeAreaDb.length > 0 ? 
      res.status(200).json(recipeAreaDb) :
      res.status(500).json("There are no recipes in this area."))
    }
  } catch (error) {
    console.log(error)
  }
}

//Get Recipe by Ingredient
const getRecipeByIngredient = async(req, res) => {
  const { ingredient } = req.params
  try {
    if(ingredient){
      const recipeMainIngredientApi = await byMainIngredient(ingredient)
      const recipeMainIngredientDb = await Recipe.findAll({ 
        where: { ingredient1 : ingredient }
      })
      recipeMainIngredientApi !== undefined ?
      res.status(200).json(recipeMainIngredientApi.concat(recipeMainIngredientDb)) :
      (recipeMainIngredientDb.length > 0 ? 
      res.status(200).json(recipeMainIngredientDb) :
      res.status(500).json("There are no recipes whit this ingredient."))
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getRecipes,
  getRandomRecipe,
  getRecipeByName,
  getRecipeDetail,
  getRecipeByFirstLetter,
  getRecipeByCategory,
  getRecipeByArea,
  getRecipeByIngredient
}