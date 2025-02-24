const User = require('../models/User');

// GET all users
const getAllUsers = async (res) => {
  console.log('GET /users/all request received');
  let data = await User.find({});
  if (data.length > 0) {
    console.log('Users found:', data);
    res.json(data);
  } else {
    console.log('No users found');
    res.status(404).json({ message: "No data found" });
  }
};

// POST one user
const createUser = async (req, res) => {
  console.log('POST /users request received with body:', req.body);
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    console.log('User saved:', savedUser);
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error saving user:', error.message);
    res.status(400).json({ message: error.message });
  }
};

// DELETE one user
const deleteUser = async (req, res) => {
  console.log(`DELETE /users/${req.params.id} request received`);
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser) {
      console.log('User deleted:', deletedUser);
      res.json({ message: "User deleted successfully" });
    } else {
      console.log('No user found with id:', req.params.id);
      res.status(404).json({ message: "No data found" });
    }
  } catch (error) {
    console.error('Error deleting user:', error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser
};