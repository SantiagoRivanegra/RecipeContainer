const { Recipe } = require('../../db')

const cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const postRecipe = async(req, res) => {
  try {
    // const image = req.body.image
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
      userId
    } = req.body

    // let arr = []
    // const img = req.body.image
    // img.map(async (image) => {
    //   await cloudinary.uploader.upload(image, (result) => {
    //     arr.push(result.url)
    //   })
    //   console.log(arr + 'arr img')
    // })

    // const arr = []
    // arr.push(image)


    console.log(image)
  
    const recipeCreated = await Recipe.create({
      name_recipe: name_recipe.toLowerCase(),
      instructions,
      image,
      video,
      ingredient1,
      ingredient2,
      ingredient3,
      measure1,
      measure2,
      measure3,
      area: area.toLowerCase(),
      category: category.toLowerCase(),
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