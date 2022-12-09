const mongoose = require( "mongoose")

const usersSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true,
  },
  password: { // solo ADMIN
    type: String,
    require: false,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  token: {
    type: String,
  },
  userType: {
    type: String,
    enum : ['Client','Waiter', 'Admin'],
    default: 'Client'
  }
}, {
  timestamps: true,
})

const userCreated = mongoose.model("User", usersSchema)

module.exports = {userCreated}
