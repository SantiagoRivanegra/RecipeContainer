const { Router } = require('express')
const { getUser } = require('../controllers/user/getUser')
const {} = require('../controllers/user/deleteUser') 
const { postUser } = require('../controllers/user/postUser') 
const {} = require('../controllers/user/putUser') 

const router = Router()

//Get Users for Admin
router.get('/', getUser)

// //Get User Profile
// router.get('/profile/:idUser', getUserProfile)

// //Get User Recipe
// router.get('/recipe/:idUser', getUserRecipe)

// //Get all Comments
// router.get('/commen/:idUser', getUserComment)

// //Get all Likes
// router.get('/likes/:idUser', getUserLike)

// //Delete User
// router.delete('/:idUser', deleteUser)

//Post User
router.post('/', postUser)

// //Put Password
// router.put('/password/:idUser', putPassword)

// //Put Username
// router.put('/username/:idUser', putUsername)

// //Put Avatar
// router.put('/avatar/:idUser', putAvatar)

module.exports = router;