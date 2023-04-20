const mongoose = require("mongoose");

const Yogaclass = new mongoose.Schema({
  classname: {
    type: String,
    required: [true, "Please provide classname"],
    unique: false,
  },
  teacher: {
    type: String,
    required: false,
    unique: false,
  },
  location: {
    type: String,
    required: false,
    unique: false,
  },
  time: {
    type: String,
    required: false,
    unique: false,
  },
});

//create a classes table or collection if there is no table with that name already

module.exports = mongoose.model.Class || mongoose.model("Class", Yogaclass);
