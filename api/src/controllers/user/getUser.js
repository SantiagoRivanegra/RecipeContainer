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
    res.status(500).json("No anda") 

  }
}

const getUserById = async(req, res) => {
  const {id} = req.params
  try {
    const users = await User.findAll({
      where: { id: id }
    })
    //const users = await User.findByPk(id)
    res.status(200).json(users) 
  } catch (error) {
    console.log(error)
    res.status(500).json("No anda")
  }
}

const getUserByEmail = async(req, res) => {
  const {email} = req.params
  try {
    const users = await User.findAll({
      where: { email: email }
    })
    //const users = await User.findByPk(id)
    res.status(200).json(users) 
  } catch (error) {
    console.log(error)
    res.status(500).json("No anda")
  }
}

const getUserByUsername = async(req, res) => {
  const {username} = req.params
  try {
    const users = await User.findAll({
      where: { username: username }
    })
    //const users = await User.findByPk(id)
    res.status(200).json(users) 
  } catch (error) {
    console.log(error)
    res.status(500).json("No anda")
  }
}

module.exports = {
  getUser,
  getUserById,
  getUserByEmail,
  getUserByUsername
}