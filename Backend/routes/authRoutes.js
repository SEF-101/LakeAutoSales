const express = require("express");
const { sendOtp, verifyOtp } = require("../controllers/authController");

const authRouter = express.Router();

// Send OTP
authRouter.post("/send-otp", sendOtp);

// Verify OTP
authRouter.post("/verify-otp", verifyOtp);

module.exports = authRouter;