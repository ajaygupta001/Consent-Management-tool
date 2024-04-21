const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema for DataPolicy
const DataPolicySchema = new Schema({
  policyDetails: {
    type: String,
    required: true,
  },
  complianceStatus: {
    type: Boolean,
    default: false,
  },
  dataRetentionPeriod: {
    type: Number,
    required: true,
  },
  securityMeasures: {
    type: String,
    required: true,
  },
});

// Create model for DataPolicy
const DataPolicyModel = mongoose.model("DataPolicy", DataPolicySchema);

module.exports = DataPolicyModel;
