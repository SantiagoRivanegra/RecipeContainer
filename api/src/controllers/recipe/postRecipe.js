const axios = require('axios')
const { User, Recipe } = require('../../db')

const postRecipe = async(req, res) => {
  const {
    name_recipe,
    description,
    image,
    video,
    ingredients,
    steps,
    area,
    category,
    likes,
    comments,
    tags,
    createdInD,
    username
  } = req.body

  const recipeCreated = await Recipe.create({
    name_recipe,
    description,
    image,
    video,
    ingredients,
    steps,
    area,
    category,
    likes,
    comments,
    tags,
    createdInD,
  })

  const usernameDb = await User.findAll({
    where: { username: username }
  })

  // recipeCreated.addUser(usernameDb)
  res.status(200).json(recipeCreated)
}

module.exports = {
  postRecipe
}