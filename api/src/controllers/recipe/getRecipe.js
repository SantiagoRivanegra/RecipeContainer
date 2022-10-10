const axios = require('axios')
const { User, Recipe } = require('../../db')
const byName = require('./apiData/byName')

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
  try {
    if(name){
      const recipeNameApi = await byName(name)
      const recipeDb = await Recipe.findAll({ 
        where: { name_recipe : name }
      })
      if(recipeDb){
        const recipeNameDb = await recipeDb.map(r => {
          if((name) === r.name_recipe){
            return {
              id: r.id,
              name_recipe: r.name_recipe,
              instructions: r.instructions,
              image: r.image,
              video: r.video,
              ingredient1: r.ingredient1,
              ingredient2: r.ingredient2,
              ingredient3: r.ingredient3,
              ingredient4: r.ingredient4,
              ingredient5: r.ingredient5,
              ingredient6: r.ingredient6,
              ingredient7: r.ingredient7,
              ingredient8: r.ingredient8,
              ingredient9: r.ingredient9,
              ingredient10: r.ingredient10,
              ingredient11: r.ingredient11,
              ingredient12: r.ingredient12,
              ingredient13: r.ingredient13,
              ingredient14: r.ingredient14,
              ingredient15: r.ingredient15,
              ingredient16: r.ingredient16,
              ingredient17: r.ingredient17,
              ingredient18: r.ingredient18,
              ingredient19: r.ingredient19,
              ingredient20: r.ingredient20,
              measure1: r.measure1,
              measure2: r.measure2,
              measure3: r.measure3,
              measure4: r.measure4, 
              measure5: r.measure5, 
              measure6: r.measure6, 
              measure7: r.measure7, 
              measure8: r.measure8, 
              measure9: r.measure9, 
              measure10: r.measure10,
              measure11: r.measure11,
              measure12: r.measure12,
              measure13: r.measure13,
              measure14: r.measure14,
              measure15: r.measure15,
              measure16: r.measure16,
              measure17: r.measure17,
              measure18: r.measure18,
              measure19: r.measure19,
              measure20: r.measure20,
              area: r.area,
              category: r.category,
              likes: r.likes,
              comments: r.comments,
              tags: r.tags,
              createdInDb: r.createdInDb,
            }
          }
        })
        recipeNameApi !== undefined ? res.status(200).json(recipeNameApi.concat(recipeNameDb)) : res.status(200).json(recipeNameDb)
    } else {
      res.status(404).send('This food does not exist')
    }
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
      res.status(404).send('This food does not exist')
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
      res.status(404).send(`There is no food with the letter ${letter}`)
    }
    }
  } catch (error) {
    console.log(error)
  }
}

//Get Recipe by Category
const getRecipeByCategory = async(req, res) => {
  const { category } = req.params
  try {
    if(category){
      const apiUrl = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      if(apiUrl.data.meals){
      const recipeCategory = await apiUrl.data.meals.map(r => {
        return {
          id: r.idMeal,
          name_recipe: r.strMeal,
          image: r.strMealThumb,
        }
      })
      res.status(200).json(recipeCategory)    
    } else {
      res.status(404).send(`No category found`)
    }
    }
  } catch (error) {
    console.log(error)
  }
}

//Get Recipe by Area
const getRecipeByArea = async(req, res) => {
  const { area } = req.params
  try {
    if(area){
      const apiUrl = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      if(apiUrl.data.meals){
      const recipeArea = await apiUrl.data.meals.map(r => {
        return {
          id: r.idMeal,
          name_recipe: r.strMeal,
          image: r.strMealThumb,
        }
      })
      res.status(200).json(recipeArea)    
    } else {
      res.status(404).send(`No Area found`)
    }
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
      res.status(404).send(`No ingredient found`)
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