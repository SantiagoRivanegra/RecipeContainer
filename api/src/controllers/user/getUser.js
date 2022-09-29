const axios = require('axios')
const { User, Recipe } = require('../../db')

const getUser = async(req, res) => {
  try {
    const users = await User.findAll({
      // include: {
      //   model: Recipe
      // }
    })
    res.status(200).json(users) 
  } catch (error) {
    console.log(error)
    res.status(404).json("No anda") 

  }
}

module.exports = {
  getUser
}