const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dbConnect = require("./config/dbConnection");
const UserModel = require("./models/User");
const AuditTrailModel = require("./models/AuditTrail");
const ConsentModel = require("./models/Consent");
const DataFiduciaryModel = require("./models/DataFiduciary");
const DataPolicyModel = require("./models/DataPolicy");
///const DataProcessingModel = require("./models/DataProcessing");
const GrievanceRedressalModel = require("./models/GrievanceRedressal");
const NomineeModel = require("./models/Nominee");
const TitleModel = require("./models/Titlelist");
const { sendCookie } = require("./utils/feauture");
const validator = require("validator");

dbConnect();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// // Registration route
// app.post("/api/users", async (req, res) => {
//   const { name, email, phone, address, password } = req.body;
//   try {
//     // Check if user already exists
//     let user = await UserModel.findOne({ email });
//     if (user)
//       return res.status(400).json({
//         success: false,
//         message: "User already exists",
//       });

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     user = await UserModel.create({
//       name,
//       email,
//       phone,
//       address,
//       password: hashedPassword,
//     });

//     // Send response
//     sendCookie(user, res, "Registered Successfully", 201);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// });

// // Login User
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find user by email
//     const user = await UserModel.findOne({ email });

//     // If user doesn't exist
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     // Compare passwords
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid password",
//       });
//     }

//     // If credentials are correct, send response
//     sendCookie(user, res, "Logged in successfully", 200);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// });

app.post("/api/users", (req, res) => {
  const { name, email, phone, address, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ name, email, phone, address, password: hash })
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message));
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign({ email: user.email }, "jwt-secret-key", {
            expiresIn: "1d",
          });
          res.cookie("token", token);
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      });
    } else {
      res.json("No Record Existed");
    }
  });
});

//NomineeForm
app.post("/api/nominees", async (req, res) => {
  try {
    const { userId, name, contactDetails, relationship, email, password } =
      req.body;

    // Check if email is valid
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Check if email and password match in the user schema
    const user = await UserModel.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // If user is found and credentials are valid, proceed with creating the nominee
    const nominee = await NomineeModel.create({
      userId,
      name,
      contactDetails,
      relationship,
      email,
      password,
    });

    res.json(nominee);
  } catch (error) {
    console.error("Error adding nominee:", error);
    res.status(500).json({ error: "Failed to add nominee" });
  }
});

// POST route to handle the form data
app.post("/api/title", async (req, res) => {
  try {
    const { title, listName, item } = req.body;

    // Create a new document using the Mongoose model
    const newTitle = await TitleModel.create({
      title,
      lists: [{ name: listName, items: [item] }],
    });

    // Send a success response
    res.status(201).json({ message: "Title submitted successfully", newTitle });
  } catch (error) {
    // Send an error response if something goes wrong
    console.error("Error submitting title:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
