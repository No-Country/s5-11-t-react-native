const mongoose = require('mongoose')

const monthsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    year: {
      type: Number,
      trim: true,
      required: true,
    },
    workDays: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WorkDay',
        required: true
      }
    ]
  },
  {
    timestamps: true,
  }
)

const monthCreated = mongoose.model('Month', monthsSchema)
export default monthCreated
