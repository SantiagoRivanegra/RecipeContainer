const axios = require('axios')
const { User, Recipe } = require('../../db')

const postUser = async(req, res) => {
  try {
    const { admin, username, email, avatar, like, comment_received, comment_send } = req.body
  
    const userCreated = await User.create({
      admin, username, email, avatar, like, comment_received, comment_send
    })
    res.status(200).json(userCreated)    
  } catch (error) {
    console.log(error)
    res.status(404).send("nope")
  }
}

module.exports = {
  postUser
}