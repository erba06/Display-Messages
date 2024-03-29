const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const postRoutes = express.Router()
const PORT = 4000

let Post = require('./post.model')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true })
const connection = mongoose.connection
connection.once('open', function () {
    console.log('MongoDB database connection established successfully')
})

postRoutes.route('/').get(function (req, res) {
    Post.find(function (err, posts) {
        if (err) {
            console.log(err)
        } else {
            res.json(posts)
        }
    })
})

postRoutes.route('/add').post(function (req, res) {
    let post = new Post(req.body)
    post.save()
        .then(post => {
            res.status(200).json({ 'post': 'post added successfully' })
        })
        .catch(err => {
            res.status(400).send('adding new post failed')
        })
})
app.use('/posts', postRoutes)
app.listen(PORT, function () {
    console.log('Server is running on Port: ' + PORT)
})
