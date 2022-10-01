const axios = require('axios')
const { User, Recipe } = require('../../db')

const deleteUser = async(req, res) => {
try {
  const { id } = req.params
  console.log(id)
  await User.destroy({
    where: {
      id : id
    }
  })
  res.status(204)
} catch (error) {
  res.status(500).json({ message: error.message })
}
}

module.exports = {
  deleteUser
}