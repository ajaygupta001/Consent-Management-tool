const jwt = require("jsonwebtoken");

const sendCookie = (user, req, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, "jwt-secret-key");

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000, // Corrected typo: "mexAge" to "maxAge"
    })
    .json({
      success: true,
      message,
    });
};

module.exports = sendCookie; // Corrected export statement
