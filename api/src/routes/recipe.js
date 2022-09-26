const { Router } = require('express')
const { getRecipes, getRandomRecipe, getRecipeByName } = require('../controllers/recipe')

const router = Router()

//Get recipes
router.get('/', getRecipes)

//Get Random
router.get('/random', getRandomRecipe)

//Get by Name
router.get('/name/:name', getRecipeByName)

module.exports = router;