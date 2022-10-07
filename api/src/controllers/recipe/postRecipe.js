const axios = require('axios')
const { User, Recipe } = require('../../db')

const postRecipe = async(req, res) => {
  try {
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
      createdInDb,
      userId,
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
      createdInDb,
      userId
    })
    res.json(recipeCreated)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message})
  }
}

module.exports = {
  postRecipe
}