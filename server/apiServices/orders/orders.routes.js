const express = require('express')
const {
  getOrders,
  addOrder,
  detailOrder,
  updateOrder,
  deleteOrder
} = require('./orders.controller')
const orderRouter = express.Router()

orderRouter
  .route('/')
  .get(getOrders)
  .post(addOrder)

orderRouter
  .route('/:id')
  .get(detailOrder)
  .patch(updateOrder)
  .delete(deleteOrder)

module.exports = { orderRouter }
