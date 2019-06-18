const express = require('express')
const router = express.Router()

const db = require('../db/db-sql.js')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

/** Get posts from DB **/
router.get('/posts', (req, res, next) => {
  db.getPosts()
    .then(posts => res.json(posts))
    .catch(next)
})

/** Post new post to DB **/
router.post('/posts', (req, res, next) => {
  const post = req.body

  db.newPost(post)
    .then(() => res.json('ok'))
    .catch(next)
})

router.post('/posts', (req, res, next) => {
  const query = connection.query('INSERT INTO users(email, password, name, lastname) VALUE (?,?,?,?)',
    [req.body.userId, req.body.title, req.body.body], (error, results, fields) => {
      if (error)
        res.status(500)
      else
        res.status(200)
    })
})
module.exports = router
