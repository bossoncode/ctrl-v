const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "link",
  },
});

module.exports = mongoose.model("Link", LinkSchema);
