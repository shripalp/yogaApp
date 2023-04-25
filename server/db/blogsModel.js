const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String },
    author: { type: String },
    content: { type: String },
    image: { type: String },
    url: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model.Blog || mongoose.model("Blog", blogSchema);
