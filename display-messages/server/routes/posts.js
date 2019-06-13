const express = require('express')
const router = express.Router()
//const db = require('../db/db-sql.js')

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

module.exports = router
