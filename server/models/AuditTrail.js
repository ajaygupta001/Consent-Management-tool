const mongoose = require("mongoose");
const { Schema } = mongoose;

const auditTrailSchema = new Schema({
  activityID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  changeDetails: {
    type: String,
    required: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const AuditTrailModel = mongoose.model("AuditTrail", auditTrailSchema);

module.exports = AuditTrailModel;
