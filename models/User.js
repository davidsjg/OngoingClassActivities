const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  notes: [
    {
    type: Shema.Types.ObjectID,
    ref: "Note"
    }
  ]
})

const User = mongoose.model('User', UserSchema)

module.exports = User


