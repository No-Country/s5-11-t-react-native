const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
  {
    table: {
      type: Number,
      required: true,
      trim: true,
    },
    waiter: {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Waiter',
      required: true
    },
    turn: {
      type: String,
      enum: ['Mañana', 'Tarde', 'Noche'], // consultar al cliente
      required: true
    },
    items: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectID,
          ref: 'Item',
          required: true
        }
      }
    ],
    priceTotal: {
      type: Number,
      trim: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      enum: ['Pendiente', 'Pagado', 'Cancelado'],
      required: true,
      default: 'Pendiente'
    },
  }, {
  timestamps: true,
})

const Order = mongoose.model('Order', orderSchema)
module.exports = { Order }
