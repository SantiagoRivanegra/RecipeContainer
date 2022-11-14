const { Router } = require('express')
const { getUser, getUserById, getUserByEmail } = require('../controllers/user/getUser')
const { deleteUser } = require('../controllers/user/deleteUser') 
const { postUser } = require('../controllers/user/postUser') 
const { putUsername } = require('../controllers/user/putUser') 

const router = Router()

//Get Users for Admin
router.get('/', getUser)

//Get User by Id
router.get('/:id', getUserById)

//Get User by Email
router.get('/email/:email', getUserByEmail)

// //Get User Profile
// router.get('/profile/:id', getUserProfile)

// //Get User Recipe
// router.get('/recipe/:id', getUserRecipe)

// //Get all Comments
// router.get('/commen/:id', getUserComment)*

// //Get all Likes
// router.get('/likes/:id', getUserLike)*

//Delete User
router.delete('/:id', deleteUser)

//Post User
router.post('/', postUser)

// //Put Password
// router.put('/password/:id', putPassword)

// //Put CommentSend
// router.put('/comment/:id', putCommentSend)

//Put Username
router.put('/username/:id', putUsername)

// //Put Avatar
// router.put('/avatar/:id', putAvatar)*

module.exports = router;