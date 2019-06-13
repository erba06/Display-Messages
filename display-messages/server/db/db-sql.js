const mysql = require('mysql2/promise')

const defaultUrl = 'mysql://root@localhost/myDB'

if (!process.env.DATABASE_URL) {
  console.warn(`'DATABASE_URL' environment variable is not set! -> fallback to default mysql default url: '${defaultUrl}'`)
}
const url = process.env.DATABASE_URL || defaultUrl
const pool = mysql.createPool(`${url}?waitForConnections=true&connectionLimit=10&queueLimit=0&namedPlaceholders=true`)

// Utils

const first = async q => (await q)[0]
const exec = (query, params) => {
  console.log('SQL - ', { query, params })
  return first(pool.execute(query, params))
}

// Posts

const getPosts = async () => exec(`SELECT * FROM posts;`)

const newPost = post => {
  return exec(`
    INSERT INTO posts
      (userId, title, body)
    VALUES
      (:userId, :title, :body)`,
  post)
}

module.exports = {
  getPosts,
  newPost
}
