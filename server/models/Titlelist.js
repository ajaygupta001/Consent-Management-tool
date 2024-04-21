const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  items: [
    {
      type: String,
    },
  ],
});

const titleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  lists: [listSchema],
});

const TitleModel = mongoose.model("Title", titleSchema);

module.exports = TitleModel;
