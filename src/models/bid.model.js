const mongoose = require("mongoose");

const bidSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Item,
    required: true,
  },
  countdown: {
    type: Date,
    default: () => new Date(Date.now() + 30 * 1000),
  },
});

const Bid = mongoose.model("Bid", bidSchema);
module.exports = Bid;
