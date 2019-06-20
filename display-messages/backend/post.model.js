const mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema
let Post = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
})

autoIncrement.initialize(mongoose.connection);
Post.plugin(autoIncrement.plugin, 'Post');
module.exports = mongoose.model('Post', Post)


