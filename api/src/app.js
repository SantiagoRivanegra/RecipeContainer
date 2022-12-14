const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const userRoute = require('./routes/user')
const recipeRoute = require('./routes/recipe')
const Redis = require('ioredis')

require('./db')

const server = express()
const cors = require('cors')

server.name = 'API'

server.use(cors())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}))
server.use(bodyParser.json({ limit: '50mb' }))
server.use(cookieParser())
server.use(morgan('dev'))
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

// // const redis = new Redis({
// //   port: 6379,
// //   host: '127.0.0.1',
// // })

server.use('/user', userRoute)
server.use('/recipe', recipeRoute)

server.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || err
  console.log(err)
  res.status(status).send(message)
})

module.exports = server