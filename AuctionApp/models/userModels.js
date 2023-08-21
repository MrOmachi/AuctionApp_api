const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },
  password: {
    type: String,
    require: [true],
  },
});

module.exports = mongoose.model("User", userSchema);
