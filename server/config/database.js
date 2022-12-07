const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

const DB_URI = process.env.DATABASE_URI

const connectDB = () => {
  const db = mongoose.connection
  mongoose.connect('mongodb://mongo:oBxFqZRPPA5cGjCiUZn8@containers-us-west-146.railway.app:6961', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  db.once('open', () => console.log('Connection to Mongoose DB: SUCCESSFUL'))
  db.on('error', error => console.error(error))
}

module.exports = { connectDB }
