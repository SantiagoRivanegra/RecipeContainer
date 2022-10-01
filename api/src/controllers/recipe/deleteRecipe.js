const axios = require('axios')
const { User, Recipe } = require('../../db')

const deleteRecipe = async(req, res, next) => {
  const { id } = req.params
  try {
    await Recipe.destroy({
      where: { id: id }
    })
    return res.status(200).send(`Recipe ${id} has been deleted`)
  } catch (error) {
    console.log(error + 'ControllerDeleteRecipe')
  }
}

module.exports = {
  deleteRecipe
}