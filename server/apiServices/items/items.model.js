const mongoose = require('mongoose')

const itemsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: false,
    },
    image: {
      type: String,
      trim: true,
      required: false,
    },
    inMenu: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  {
    timestamps: true,
  }
)

const itemCreated = mongoose.model('Item', itemsSchema)

module.exports = {itemCreated}
