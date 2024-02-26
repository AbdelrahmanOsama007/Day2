require("dotenv").config(); // Ensure this is at the top of your file to load environment variables
const jwt = require("jsonwebtoken");
const Teacher = require("../model/Teacher"); // Adjust the path as necessary
const bcrypt = require("bcrypt");

const secretKey = process.env.JWT_SECRET; // Use a more descriptive variable name

exports.hashedLogin = (req, res, next) => {
  const { email, password } = req.body; // Destructure for cleaner access
  if (email === process.env.Admin && password === process.env.password) {
    const token = jwt.sign({ id: email, role: "admin" }, secretKey, {
      expiresIn: "1h",
    }); // Optional: add expiration
    return res.status(200).json({ token: token });
  } else {
    console.log("email :>> ", email);
    Teacher.findOne({ email: email })
      .then((teacher) => {
        if (!teacher) {
          // If no teacher is found with the provided email
          return res.status(401).json({ message: "Incorrect Email" });
        }

        // Compare provided password with hashed password
        bcrypt
          .compare(password, teacher.password)
          .then((isMatch) => {
            if (!isMatch) {
              // If the password doesn't match
              return res.status(401).json({ message: "Incorrect Password" });
            }

            // Password matches, sign the token
            const token = jwt.sign(
              { id: teacher._id, role: "teacher" },
              secretKey,
              { expiresIn: "1h" }
            ); // Optional: add expiration
            res.status(200).json({ token: token });
          })
          .catch((err) => {
            // Handle bcrypt error
            console.error(err);
            res
              .status(500)
              .json({ message: "Server error during authentication" });
          });
      })
      .catch((err) => {
        // Handle error in finding teacher
        console.error(err);
        res.status(500).json({ message: "Server error during authentication" });
      });
  }
};
