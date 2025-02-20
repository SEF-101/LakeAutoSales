const mongoose = require('mongoose');
require('dotenv').config({ path: "./config.env" });

const connectToServer = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log('Connected to MongoDB using Mongoose');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = { connectToServer };