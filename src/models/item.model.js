const { boolean } = require("joi");
const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    maxlength: 200,
  },
  price: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
