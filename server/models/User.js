const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: String,
  address: String,
  password: {
    type: String,
    required: true,
  },
  consentHistoryId: { type: ObjectId, ref: "ConsentHistory" }, // Assuming 'ConsentHistory' is the name of the related model
  nomineeId: { type: ObjectId, ref: "Nominee" }, // Assuming 'Nominee' is the name of the related model
});

// Indexes
userSchema.index({ email: 1 }); // Indexing email field for faster lookups

// Create model
module.exports = mongoose.model("User", userSchema);
