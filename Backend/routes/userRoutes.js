const express = require('express');
const { getAllUsers, createUser, deleteUser } = require('../controllers/userController');

const userRoutes = express.Router();

// GET all users
userRoutes.route('/users/all').get(getAllUsers);

// POST one user
userRoutes.route('/users').post(createUser);

// DELETE one user
userRoutes.route('/users/:id').delete(deleteUser);

module.exports = userRoutes;