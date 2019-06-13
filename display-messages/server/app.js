const express = require('express')
const app = express()
const postsRouter = require('./routes/posts.js')
const bodyParser = require('body-parser')
const port = process.env.PORT || console.info('missing PORT env variable -> fallback to 3001') || 3001

// Middlewares

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTION')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

// Logger middleware
app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.get('/', (req, res) => {
  res.send('Vous êtes connecté au serveur ;-)')
})

app.use('/', postsRouter)

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Errors handling
app.use((err, req, res, next) => {
  if (err) {
    res.json({ error: err.message })
    return console.error(err)
  }

  next()
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

module.exports = app
