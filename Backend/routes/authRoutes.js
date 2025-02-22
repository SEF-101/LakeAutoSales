const express = require("express");
const sendOTP = require("../utils/sendEmail");
const { generateOTP, storeOTP, verifyOTP } = require("../utils/otp");

const authRouter = express.Router();

// sends OTP
authRouter.post("/send-otp", async (req, res) => {
  const {email} = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const otp = generateOTP();
  storeOTP(email, otp);

  await sendOTP(email, otp);
  res.json({ message: "OTP sent to" + email });
});

// verifies otp
authRouter.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  const verificationResult = verifyOTP(email, otp);

  if (!verificationResult.valid) {
    return res.status(400).json({ error: verificationResult.message });
  }

  res.json({ message: verificationResult.message });
});

module.exports = authRouter;
