const mongoose = require('mongoose')

const workDaysSchema = mongoose.Schema({
  weekDay: { // día de la semana
    type: String,
    require: true,
    trim: true,
  },
  day: {
    type: Number,
    require: false,
    trim: true,
  },
  month: {
    type: Number,
    require: false,
    trim: true,
  },
  year: {
    type: Number,
    require: false,
    trim: true,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }
  ],
  totalIncome: {
    type: Number,
    trim: true,
  },
}, {
  timestamps: true,
})

const workdayCreated = mongoose.model('Workday', workDaysSchema)
export default workdayCreated
