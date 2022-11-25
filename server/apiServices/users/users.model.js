const mongoose = require( "mongoose")

const usersSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
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
  admin: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
})

const userCreated = mongoose.model("User", usersSchema)

module.exports = {userCreated}
