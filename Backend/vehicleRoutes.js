const express = require('express')
const Vehicle = require('./models/Vehicle')

let vehicleRoutes = express.Router()

// GET all vehicles
vehicleRoutes.route('/vehicles/all').get(async (req, res) => {
  console.log('GET /vehicles/all request received');
  let data = await Vehicle.find({})
  if(data.length > 0){
    console.log('Vehicles found:', data);
    res.json(data)
  }else{
    console.log('No vehicles found');
    res.status(404).json({ message: "No data found" });
  }
})

// GET one vehicle
vehicleRoutes.route('/vehicles/:id').get(async (req, res) => {
  console.log(`GET /vehicles/${req.params.id} request received`);
  try {
    let data = await Vehicle.findById(req.params.id);
    if (data) {
    console.log('Vehicle found:', data);
    res.json(data);
    } else {
    console.log('No vehicle found with id:', req.params.id);
    res.status(404).json({ message: "No data found" });
    }
  } catch (error) {
    console.error('Error fetching vehicle:', error.message);
    res.status(500).json({ message: error.message });
  }
  });
  
  // POST one vehicle
  vehicleRoutes.route('/vehicles').post(async (req, res) => {
  console.log('POST /vehicles request received with body:', req.body);
  try {
    const newVehicle = new Vehicle(req.body);
    const savedVehicle = await newVehicle.save();
    console.log('Vehicle saved:', savedVehicle);
    res.status(201).json(savedVehicle);
  } catch (error) {
    console.error('Error saving vehicle:', error.message);
    res.status(400).json({ message: error.message });
  }
  });
  
  // DELETE one vehicle
  vehicleRoutes.route('/vehicles/:id').delete(async (req, res) => {
  console.log(`DELETE /vehicles/${req.params.id} request received`);
  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (deletedVehicle) {
    console.log('Vehicle deleted:', deletedVehicle);
    res.json({ message: "Vehicle deleted successfully" });
    } else {
    console.log('No vehicle found with id:', req.params.id);
    res.status(404).json({ message: "Vehicle not found" });
    }
  } catch (error) {
    console.error('Error deleting vehicle:', error.message);
    res.status(500).json({ message: error.message });
  }
  });

module.exports = vehicleRoutes;