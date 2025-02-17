const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    trim: {
        type: String
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    vin: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    vehicleType: {
        type: String,
        required: true,
        enum: ['Sedan', 'SUV', 'Van', 'Pickup Truck', 'Truck', 'Hatchback']
    },
    transmission: {
        type: String,
        required: true,
        enum: ['Automatic', 'Manual']
    },
    
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;