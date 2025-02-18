const express = require('express')
const database = require('./connect')
const Vehicle = require('./models/Vehicle')

let vehicleRoutes = express.Router()


// GET all vehicles
vehicleRoutes.route('/vehicles/all').get(async (req, res) => {
    let data = await Vehicle.find({})
    if(data.length > 0){
        res.json(data)
    }else{
        res.status(404).json({ message: "No data found" });
    }
})
// GET one vehicle
vehicleRoutes.route('/vehicles/:id').get(async (req, res) => {
    try {
      let data = await Vehicle.findById(req.params.id);
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: "No data found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // POST one vehicle
  vehicleRoutes.route('/vehicles').post(async (req, res) => {
    try {
      const newVehicle = new Vehicle(req.body);
      const savedVehicle = await newVehicle.save();
      res.status(201).json(savedVehicle);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // DELETE one vehicle
  vehicleRoutes.route('/vehicles/:id').delete(async (req, res) => {
    try {
      const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
      if (deletedVehicle) {
        res.json({ message: "Vehicle deleted successfully" });
      } else {
        res.status(404).json({ message: "Vehicle not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = vehicleRoutes;