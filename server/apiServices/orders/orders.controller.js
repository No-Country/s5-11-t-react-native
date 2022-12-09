const { handleHttpError } = require('../../utils/handleError')
const { Order } = require('./orders.model')
const { projection } = require('../../utils/utils')

const getOrders = async (req, res) => {
  try {
    const orderList = await Order
      .find({}, projection)
      .populate('waiter', projection)
      .populate('items')
      .populate({
        path: 'items',
        populate: {
          path: 'item',
          select: projection
        }
      })
    res.json(orderList)
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ORDERS', 500)
  }
}

const addOrder = async (req, res) => {
  try {
    const newOrder = new Order(
      req.body
    )
    const orderCreated = await newOrder.save()
    res.status(201).json(orderCreated)
  } catch (error) {
    handleHttpError(res, error, 500)
  }
}

const detailOrder = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order
      .findById(id, projection)
      .populate('waiter', projection)
      .populate('items')
      .populate({
        path: 'items',
        populate: {
          path: 'item',
          select: projection
        }
      })

    if (!order) {
      const error = new Error('No se encontró la orden')
      return res.status(404).json({ msg: error.message })
    }

    res.json(order)
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ORDER_BY_ID', 500)
  }
}

const updateOrder = async (req, res) => {
  res.json({ msg: 'funciona' })
}

const deleteOrder = async (req, res) => {
  try {
    const ID = req.params.id
    const order = await Order
      .findOneAndDelete({ _id: ID })
    res.json({ order })
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ORDER', 500)
  }
}

module.exports = {
  getOrders,
  addOrder,
  detailOrder,
  updateOrder,
  deleteOrder
}
