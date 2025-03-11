const express = require('express');
const { getAllVehicles, getVehicleById, createVehicle, deleteVehicle, updateVehicleState, getVehiclesByState } = require('../controllers/vehicleController');

const vehicleRoutes = express.Router();

// GET all vehicles
vehicleRoutes.route('/vehicles/all').get(getAllVehicles);

// GET one vehicle
vehicleRoutes.route('/vehicles/:id').get(getVehicleById);

// POST one vehicle
vehicleRoutes.route('/vehicles').post(createVehicle);

// DELETE one vehicle
vehicleRoutes.route('/vehicles/:id').delete(deleteVehicle);

// Update vehicle state (e.g., drafted → active)
vehicleRoutes.put("/vehicles/:id/state", updateVehicleState);

// Get vehicles by state
vehicleRoutes.get("/vehicles/state/:state", getVehiclesByState);

module.exports = vehicleRoutes;