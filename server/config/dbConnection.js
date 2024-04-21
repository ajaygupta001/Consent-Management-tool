const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ajaygupta9504:ajaygupta9504@cluster0.113rmqb.mongodb.net/consentmanagement"
    );
    console.log("Connected to mongodb Database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
