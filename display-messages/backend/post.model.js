const mongoose = require('mongoose')
const Schema = mongoose.Schema
let Post = new Schema({
  post_title: {
    type: String
  },
  post_text: {
    type: String
  }
})
module.exports = mongoose.model('Post', Post)
