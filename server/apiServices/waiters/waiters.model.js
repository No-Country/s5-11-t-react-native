const mongoose = require('mongoose')

const waitersSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

const Waiter = mongoose.model('Waiter', waitersSchema)

module.exports = { Waiter }
