const { Router } = require('express')
const { getRecipes, getRandomRecipe, getRecipeByName, getRecipeDetail, getRecipeByFirstLetter, getRecipeByCategory, getRecipeByArea, getRecipeByIngredient } = require('../controllers/recipe/getRecipe')
const { deleteRecipe } = require('../controllers/recipe/deleteRecipe')
const { postRecipe } = require('../controllers/recipe/postRecipe')
const {  } = require('../controllers/recipe/putRecipe')

const { ingredients } = require('../controllers/recipe/list/ingredients.js')
const { categories } = require('../controllers/recipe/list/categories.js')
const { categoriesDescription } = require('../controllers/recipe/list/categoriesDescription.js')
const { areas } = require('../controllers/recipe/list/areas.js')

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

//Get List of Categories
router.get('/categories', categories)

//Get List of Categories Description
router.get('/categories/description', categoriesDescription)

//Get Recipe by Category
router.get('/category/:category', getRecipeByCategory)

//Get List of Areas
router.get('/areas', areas)

//Get Recipe by Area
router.get('/area/:area', getRecipeByArea)

//Get List of Ingredients
router.get('/ingredients/', ingredients)

//Get Recipe by Main Ingredient
router.get('/ingredient/main/:ingredient', getRecipeByIngredient)

//List of All categories(have descirption - /categories.php)
//List of area(/list.php?a=list)
//List of ingredient(/list.php?i=list)

//Delete Recipe
router.delete('/:id', deleteRecipe)

//Post Recipe
router.post('/', postRecipe)

module.exports = router;