let otpStorage = {}; // in memory storage, probably need redis or db for prod

// create random 6 digit code
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// store it in memeory
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
