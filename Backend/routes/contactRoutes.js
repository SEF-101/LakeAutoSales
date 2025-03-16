const express = require('express');
const { getAllContacts, createContact, updateContact, deleteContact } = require('../controllers/contactController');

const contactRoutes = express.Router();

// GET all contact submissions
contactRoutes.route('/contacts').get(getAllContacts);

// POST a new contact submission
contactRoutes.route('/contacts').post(createContact);

// UPDATE a contact submission with a response
contactRoutes.route('/contacts/:id').patch(updateContact);

contactRoutes.route('/contacts/:id').delete(deleteContact);

module.exports = contactRoutes;