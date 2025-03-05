const Vehicle = require('../models/Vehicle');

// GET all vehicles
const getAllVehicles = async (req, res) => {
  console.log('GET /vehicles/all request received');
  let data = await Vehicle.find({});
  if (data.length > 0) {
    //console.log('Vehicles found');
    res.json(data);
  } else {
    console.log('No vehicles found');
    res.status(404).json({ message: "No data found" });
  }
};

// GET one vehicle
const getVehicleById = async (req, res) => {
  console.log(`GET /vehicles/${req.params.id} request received`);
  try {
    let data = await Vehicle.findById(req.params.id);
    if (data) {
      console.log('Vehicle found');
      res.json(data);
    } else {
      console.log('No vehicle found with id:', req.params.id);
      res.status(404).json({ message: "No data found" });
    }
  } catch (error) {
    console.error('Error fetching vehicle:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// POST one vehicle
const createVehicle = async (req, res) => {
  console.log('POST /vehicles request received with body:', req.body);
  try {
    const newVehicle = new Vehicle(req.body);
    const savedVehicle = await newVehicle.save();
    console.log('Vehicle posted');
    res.status(201).json(savedVehicle);
  } catch (error) {
    console.error('Error saving vehicle:', error.message);
    res.status(400).json({ message: error.message });
  }
};

// DELETE one vehicle
const deleteVehicle = async (req, res) => {
  console.log(`DELETE /vehicles/${req.params.id} request received`);
  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (deletedVehicle) {
      console.log('Vehicle deleted');
      res.json({ message: "Vehicle deleted successfully" });
    } else {
      console.log('No vehicle found with id:', req.params.id);
      res.status(404).json({ message: "Vehicle not found" });
    }
  } catch (error) {
    console.error('Error deleting vehicle:', error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  deleteVehicle
};