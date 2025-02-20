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
    features: {
        type: [String],
        enum: [
            'Air Conditioning', 'Power Windows', 'Power Locks', 'Power Steering', 'Tilt Wheel', 
            'AM/FM CD', 'AM/FM CD/MP3', 'Satellite', 'Immobilizer', 'Keyless Entry', 
            'Alarm', 'Daytime Running Lights', 'Dual Air Bags Front and Sides', 'Active Belts', 
            'All Wheel ABS', 'Backup Camera', 'Bluetooth', 'Cruise Control', 'Navigation System', 
            'Remote Start', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Alloy Wheels', 
            'Fog Lights', 'Parking Sensors', 'Third Row Seating', 'Tow Package'
        ]
    }
}, {collection: 'vehicles'});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;