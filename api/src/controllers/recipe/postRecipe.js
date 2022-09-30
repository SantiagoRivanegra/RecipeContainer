const axios = require('axios')
const { User, Recipe } = require('../../db')

const postRecipe = async(req, res) => {
  const {
    name_recipe,
    instructions,
    image,
    video,
    ingredient1,
    ingredient2,
    ingredient3,
    measure1,
    measure2,
    measure3,
    area,
    category,
    likes,
    comments,
    tags,
    createdInD,
    username,
  } = req.body

  const recipeCreated = await Recipe.create({
    name_recipe,
    instructions,
    image,
    video,
    ingredient1,
    ingredient2,
    ingredient3,
    measure1,
    measure2,
    measure3,
    area,
    category,
    likes,
    comments,
    tags,
    createdInD,
  })
  console.log(username)

  const usernameDb = await User.findAll({
    where: { username: username }
  })

  recipeCreated.addUser(usernameDb)
  res.status(200).json(recipeCreated)
}

module.exports = {
  postRecipe
}