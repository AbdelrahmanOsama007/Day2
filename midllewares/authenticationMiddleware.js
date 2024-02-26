require("dotenv").config();
const jwt = require("jsonwebtoken");

// Function to generate a JWT token for a teacher
function generateToken(teacher) {
  return jwt.sign({ id: teacher.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
}

// Middleware to verify a token and protect routes
function verifyToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    console.log("process.env.JWT_SECRET :>> ", process.env.JWT_SECRET);
    console.log("token :>> ", token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
}

module.exports = { generateToken, verifyToken };
