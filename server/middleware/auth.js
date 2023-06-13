// //isStudent is login
const jwt = require("jsonwebtoken");
require("dotenv").config();
const isTransporter = (req, res, next) => {
  try {
    if (req.user.role !== "Transporter") {
      return res.status(401).json({
        success: true,
        message: "this is a protected route for students",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User Role is not matching",
    });
  }
};

// //isAdmin is login
const isManufacturer = (req, res, next) => {
  try {
    if (req.user.role !== "Manufacturer") {
      return res.status(401).json({
        success: true,
        message: "this is a protected route for Admin",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User Role is not matching",
    });
  }
};

const auth = (req, res, next) => {
  try {
    // Extract JWT token
    const token =
      req.body.token ||
      req.cookies.jwttoken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }

    // Verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying the token",
    });
  }
};

module.exports = {
  auth,
  isTransporter,
  isManufacturer,
};
