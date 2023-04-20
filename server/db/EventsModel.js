const mongoose = require("mongoose");

const Event = new mongoose.Schema({
  eventname: {
    type: String,
    required: [true, "Please provide eventname"],
    unique: false,
  },
  file: String,
});

//create a user table or collection if there is no table with that name already

module.exports = mongoose.model.Event || mongoose.model("Event", Event);
