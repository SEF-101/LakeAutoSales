const express = require('express');
const { getAllVehicles, getVehicleById, createVehicle, deleteVehicle } = require('../controllers/vehicleController');

const vehicleRoutes = express.Router();

// GET all vehicles
vehicleRoutes.route('/vehicles/all').get(getAllVehicles);

// GET one vehicle
vehicleRoutes.route('/vehicles/:id').get(getVehicleById);

// POST one vehicle
vehicleRoutes.route('/vehicles').post(createVehicle);

// DELETE one vehicle
vehicleRoutes.route('/vehicles/:id').delete(deleteVehicle);

module.exports = vehicleRoutes;