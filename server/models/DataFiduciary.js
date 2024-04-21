const mongoose = require("mongoose");

const fiduciarySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  industryType: String,
  contactDetails: String,
  dataPolicyId: mongoose.Schema.Types.ObjectId,
});

const DataFiduciaryModel = mongoose.model("DataFiduciary", fiduciarySchema);

module.exports = DataFiduciaryModel;
