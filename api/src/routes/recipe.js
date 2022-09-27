const { Router } = require('express')
const { getRecipes, getRandomRecipe, getRecipeByName, getRecipeDetail, getRecipeByFirstLetter, getRecipeByCategory, getRecipeByArea, getRecipeByIngredient } = require('../controllers/recipe/getRecipe')
const {  } = require('../controllers/recipe/deleteRecipe')
const {  } = require('../controllers/recipe/postRecipe')
const {  } = require('../controllers/recipe/putRecipe')

const router = Router()

//Get Recipes
router.get('/', getRecipes)

//Get Random
router.get('/random', getRandomRecipe)

//Get Recipe by Name
router.get('/name/:name', getRecipeByName)

//Get Recipe detail
router.get('/detail/:id', getRecipeDetail)

//Get Recipe by First Letter
router.get('/letter/:letter', getRecipeByFirstLetter)

//Get Recipe by Category
router.get('/category/:category', getRecipeByCategory)

//Get Recipe by Area
router.get('/area/:area', getRecipeByArea)

//Get Recipe by Ingredient
router.get('/ingredient/:ingredient', getRecipeByIngredient)

//List of All categories(have descirption - /categories.php)
//List of area(/list.php?a=list)
//List of ingredient(/list.php?i=list)

module.exports = router;