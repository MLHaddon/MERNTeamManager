const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is a required Input"],
    minlength: [3, "First Name should be at least 3 characters."]
  },
  lastName: {
    type: String,
    required: [true, "Last Name is a required input"],
    minlength: [3, "Last Name should be at least 3 characters."]
  },
  preferredPos: {
    type: String,
    required: [true, "A position should be preferred."]
  }
}, {timestamps: true})

module.exports.Players = mongoose.model("Player", PlayerSchema);