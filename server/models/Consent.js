const mongoose = require("mongoose");

const consentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  dataFiduciaryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  consentStatus: {
    type: String,
    required: true,
  },
  consentType: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  withdrawalInfo: {
    type: String,
  },
});

const ConsentModel = mongoose.model("Consent", consentSchema);

module.exports = ConsentModel;
