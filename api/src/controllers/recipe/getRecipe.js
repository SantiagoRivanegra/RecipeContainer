const axios = require('axios')
const { User, Recipe } = require('../../db')
const byName = require('./apiData/byName')
const byCategory = require('./apiData/byCategory')
const byArea = require('./apiData/byArea')

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
    // include:{
    //   model: User,
    //   attribute:['username'],
    //   through: {
    //     attributes: []
    //   }
    // }
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
    const apiUrl = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    const random = await apiUrl.data.meals.map(r => {
      return {
        id: r.idMeal,
        name_recipe: r.strMeal,
        category: r.strCategory,
        area: r.strArea,
        instructions: r.strInstructions,
        image: r.strMealThumb,
        tags: r.strTags,
        videos: r.strYoutube,
        ingredient1: r.strIngredient1 ? r.strIngredient1 : "",
        ingredient2: r.strIngredient2 ? r.strIngredient2 : "",
        ingredient3: r.strIngredient3 ? r.strIngredient3 : "",
        ingredient4: r.strIngredient4 ? r.strIngredient4 : "",
        ingredient5: r.strIngredient5 ? r.strIngredient5 : "",
        ingredient6: r.strIngredient6 ? r.strIngredient6 : "",
        ingredient7: r.strIngredient7 ? r.strIngredient7 : "",
        ingredient8: r.strIngredient8 ? r.strIngredient8 : "",
        ingredient9: r.strIngredient9 ? r.strIngredient9 : "",
        ingredient10: r.strIngredient10 ? r.strIngredient10 : "",
        ingredient11: r.strIngredient11 ? r.strIngredient11 : "",
        ingredient12: r.strIngredient12 ? r.strIngredient12 : "",
        ingredient13: r.strIngredient13 ? r.strIngredient13 : "",
        ingredient14: r.strIngredient14 ? r.strIngredient14 : "",
        ingredient15: r.strIngredient15 ? r.strIngredient15 : "",
        ingredient16: r.strIngredient16 ? r.strIngredient16 : "",
        ingredient17: r.strIngredient17 ? r.strIngredient17 : "",
        ingredient18: r.strIngredient18 ? r.strIngredient18 : "",
        ingredient19: r.strIngredient19 ? r.strIngredient19 : "",
        ingredient20: r.strIngredient20 ? r.strIngredient20 : "",
        measure1: r.strMeasure1 ? r.strMeasure1 : "",
        measure2: r.strMeasure2 ? r.strMeasure2 : "",
        measure3: r.strMeasure3 ? r.strMeasure3 : "",
        measure4: r.strMeasure4 ? r.strMeasure4 : "",
        measure5: r.strMeasure5 ? r.strMeasure5 : "",
        measure6: r.strMeasure6 ? r.strMeasure6 : "",
        measure7: r.strMeasure7 ? r.strMeasure7 : "",
        measure8: r.strMeasure8 ? r.strMeasure8 : "",
        measure9: r.strMeasure9 ? r.strMeasure9 : "",
        measure10: r.strMeasure10 ? r.strMeasure10 : "",
        measure11: r.strMeasure11 ? r.strMeasure11 : "",
        measure12: r.strMeasure12 ? r.strMeasure12 : "",
        measure13: r.strMeasure13 ? r.strMeasure13 : "",
        measure14: r.strMeasure14 ? r.strMeasure14 : "",
        measure15: r.strMeasure15 ? r.strMeasure15 : "",
        measure16: r.strMeasure16 ? r.strMeasure16 : "",
        measure17: r.strMeasure17 ? r.strMeasure17 : "",
        measure18: r.strMeasure18 ? r.strMeasure18 : "",
        measure19: r.strMeasure19 ? r.strMeasure19 : "",
        measure20: r.strMeasure20 ? r.strMeasure20 : "",
      }
    })
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
    } else {
    res.status(500).json("There are no recipes with that name")
    }
  } catch (error) {
    console.log(error)
  }
}

//Get Recipe Detail
const getRecipeDetail = async(req, res) => {
  const { id } = req.params
  try {
    if(id){
      const apiUrl = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      if(apiUrl.data.meals){
      const recipeId = await apiUrl.data.meals.map(r => {
        return {
          id: r.idMeal,
          name_recipe: r.strMeal,
          instructions: r.strInstructions,
        }
      })
      res.status(200).json(recipeId)    
    } else {
      res.status(500).send('This food does not exist')
    }
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
      const apiUrl = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      if(apiUrl.data.meals){
      const recipeLetter = await apiUrl.data.meals.map(r => {
        return {
          id: r.idMeal,
          name_recipe: r.strMeal,
          image: r.strMealThumb,
          instructions: r.strInstructions,
        }
      })
      res.status(200).json(recipeLetter)    
    } else {
      res.status(500).send(`There is no food with the letter ${letter}`)
    }
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
      const apiUrl = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      if(apiUrl.data.meals){
      const recipeIngredient = await apiUrl.data.meals.map(r => {
        return {
          id: r.idMeal,
          name_recipe: r.strMeal,
          image: r.strMealThumb,
        }
      })
      res.status(200).json(recipeIngredient)    
    } else {
      res.status(500).send(`No ingredient found`)
    }
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