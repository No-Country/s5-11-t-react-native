const express = require('express')
const { addWaiter, getWaiters, waiterDetail, deleteWaiter } = require('./waiters.controller')

const waiterRouter = express.Router()

waiterRouter
  .route('/')
  .get(getWaiters)
  .post(addWaiter)
  
  waiterRouter
  .route('/:id')
  .get(waiterDetail)
  .delete(deleteWaiter)

module.exports = { waiterRouter }
