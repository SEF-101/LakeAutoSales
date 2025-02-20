let otpStorage = {}; // In-memory storage (use Redis or DB for production)

// Generate a random 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Store OTP for the email
const storeOTP = (email, otp) => {
  otpStorage[email] = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000, // Expiry: 5 minutes
  };
};

// Verify the OTP
const verifyOTP = (email, otp) => {
  if (!otpStorage[email]) return { valid: false, message: "No OTP found for this email" };

  const { otp: storedOTP, expiresAt } = otpStorage[email];

  if (Date.now() > expiresAt) {
    delete otpStorage[email];
    return { valid: false, message: "OTP has expired" };
  }

  if (otp !== storedOTP) return { valid: false, message: "Invalid OTP" };

  delete otpStorage[email]; // OTP verified, remove it
  return { valid: true, message: "OTP verified successfully" };
};

module.exports = {
  generateOTP,
  storeOTP,
  verifyOTP,
};
