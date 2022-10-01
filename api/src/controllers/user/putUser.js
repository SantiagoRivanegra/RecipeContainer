const axios = require('axios')
const { User, Recipe } = require('../../db')

const putUsername = async(req, res) => {
try {
  const { id } = req.params
  const { username } = req.body

  const user = await User.findByPk(id)
  user.username = username
  await user.save()

  res.status(200).json(user)
} catch (error) {
  res.status(500).send({ message: error.message })
}
}

module.exports = {
  putUsername
}