const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema({
  eventname: {
    type: String,
    required: [true, "Please provide eventname"],
    unique: false,
  },
});

//create a user table or collection if there is no table with that name already

module.exports =
  mongoose.model.Events || mongoose.model("Events", EventsSchema);
