const Contact = require('../models/Contact');

// GET all contact submissions
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new contact submission
const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    console.log('Contact posted');
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE a contact submission with a response
const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    console.log("Updating contact with ID:", id);

    // Ensure at least one field is provided for update
    if (!updates || Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "No updates provided" });
    }

    const updatedContact = await Contact.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  getAllContacts,
  createContact,
  updateContact,
};