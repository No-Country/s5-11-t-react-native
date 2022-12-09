const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

const DB_URI = process.env.DATABASE_URI

const connectDB = () => {
  const db = mongoose.connection
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  db.once('open', () => console.log('Connection to Mongoose DB: SUCCESSFUL'))
  db.on('error', error => console.error(error))
}

module.exports = { connectDB }
