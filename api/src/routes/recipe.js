const { Router } = require('express')
const { getRecipes } = require('../controllers/recipe')

const router = Router()

//Get recipes
router.get('/', getRecipes)

module.exports = router;