const mongoose = require("mongoose");

const nomineeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contactDetails: {
    type: String,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const NomineeModel = mongoose.model("Nominee", nomineeSchema);

module.exports = NomineeModel;
