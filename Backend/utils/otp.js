let otpStorage = {}; // In-memory storage (use Redis or DB for production)

// Generate a random 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Store OTP for the email
const storeOTP = (email, otp) => {
  otpStorage[email] = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000, // make it expure in 5 min
  };
};

// verify the code
const verifyOTP = (email, otp) => {
  console.log(`Verifying OTP for email: ${email}`);

  if (!otpStorage[email]) {
    console.log(`No OTP found for email: ${email}`);
    return { valid: false, message: "No OTP found for this email" };
  }

  const { otp: storedOTP, expiresAt } = otpStorage[email];

  if (Date.now() > expiresAt) {
    console.log(`OTP for email: ${email} has expired`);
    delete otpStorage[email];
    return { valid: false, message: "OTP has expired" };
  }

  if (otp !== storedOTP) {
    console.log(`Invalid OTP for email: ${email}`);
    return { valid: false, message: "Invalid OTP" };
  }

  console.log(`OTP for email: ${email} verified successfully`);
  delete otpStorage[email];
  return { valid: true, message: "OTP verified successfully" };
};

module.exports = {
  generateOTP,
  storeOTP,
  verifyOTP,
};
