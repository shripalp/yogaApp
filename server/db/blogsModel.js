const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },

  content: { type: String, required: false },
});

module.exports = mongoose.model.Blog || mongoose.model("Blog", blogSchema);
