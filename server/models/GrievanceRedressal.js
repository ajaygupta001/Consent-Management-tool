const mongoose = require("mongoose");

const grievanceRedressalSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  resolutionDetails: {
    type: String,
  },
  timestamp: {
    type: Date,
  },
});

const GrievanceRedressalModel = mongoose.model(
  "GrievanceRedressal",
  grievanceRedressalSchema
);

module.exports = GrievanceRedressalModel;
