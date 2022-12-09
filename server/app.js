const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const { router } = require('./routes')
const { json } = require('express')
const { handleHttpError } = require('./utils/handleError')

// Init express

const app = express()

//Api config
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Serving static files /fixthis later
app.use(express.static(path.join(__dirname, 'public')))

// Set template engine 
app.set('view engine', 'pug')
app.set('services', path.join(__dirname, "./services/emails','template-engine'"))


//Index Router

app.use('/api', router)


// Error endpoint not found 
app.all('*',(req,res,next) => {
  handleHttpError(res,`${req.method} ${req.url} not found in this server`,404)
})

module.exports = { app }
