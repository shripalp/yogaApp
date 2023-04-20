const mongoose = require("mongoose");

const User = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

//create a user table or collection if there is no table with that name already

module.exports = mongoose.model.User || mongoose.model("User", User);
