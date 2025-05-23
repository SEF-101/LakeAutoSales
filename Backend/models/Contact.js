const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    responded: {
        type: Boolean,
        default: false
    }
}, { collection: 'contacts'});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;