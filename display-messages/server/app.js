const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTION')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

const postsRouter = require('./routes/posts.js')

// const port = process.env.PORT || console.info('missing PORT env variable -> fallback to 3001') || 3001

// Middlewares
// Logger middleware
// app.use((req, res, next) => {
//   console.log(req.method, req.url)
//   next()
// })

app.get('/', (req, res) => {
  res.send('Vous êtes connecté au serveur ;-)')
})

app.get('/user/:id', (request, response) => {
  response.send(`user #${request.params.id}`)
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.listen(3001, function () {
  console.log('listening on 3001')
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

// app.listen(port, () => {
//   console.log(`listening on port: ${port}`)
// })
module.exports = app