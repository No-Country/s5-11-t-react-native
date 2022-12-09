const express = require('express')
const { viewsRouter } = require('../apiServices/views/views.routes')
const { itemRouter } = require('../apiServices/items/items.routes')
const { userRouter } = require('../apiServices/users/users.routes')
const { waiterRouter } = require('../apiServices/waiters/waiters.routes')
const { orderRouter } = require('../apiServices/orders/orders.routes')
const { categoryRouter } = require('../apiServices/categories/categories.routes')

const router = express.Router()

//Endpoints
router.use('/auth', userRouter)
router.use('/item', itemRouter)
router.use('/waiter', waiterRouter)
router.use('/order', orderRouter)
router.use('/categories', categoryRouter)

// for rendering the public folder
router.use('/', viewsRouter)

module.exports = { router }
