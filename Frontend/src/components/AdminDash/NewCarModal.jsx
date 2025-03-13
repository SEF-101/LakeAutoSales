import React, { useState } from "react";
import { Modal, Label, TextInput, Select, Textarea, Button, FileInput } from "flowbite-react";

const API_URL = "http://localhost:5000/api/vehicles"; // Change to your backend endpoint

const NewCarModal = ({ isOpen, onClose, onCarAdded }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    trim: "",
    year: "",
    price: "",
    mileage: "",
    color: "",
    description: "",
    vehicleType: "",
    transmission: "",
    state: "drafted",
    images: [],
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection (Placeholder)
  const handleImageChange = (e) => {
    const files = e.target.files;
    setFormData({ ...formData, images: [...files] });
  };

  return (
    <Modal show={isOpen} size="7xl" onClose={onClose}>
      <Modal.Header>Add a New Car</Modal.Header>
      <Modal.Body>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div>
            <Label htmlFor="make" value="Make" />
            <TextInput id="make" name="make" value={formData.make} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="model" value="Model" />
            <TextInput id="model" name="model" value={formData.model} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="trim" value="Trim" />
            <TextInput id="trim" name="trim" value={formData.trim} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="year" value="Year" />
            <TextInput type="number" id="year" name="year" value={formData.year} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="price" value="Price ($)" />
            <TextInput type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="mileage" value="Mileage" />
            <TextInput type="number" id="mileage" name="mileage" value={formData.mileage} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="color" value="Color" />
            <TextInput id="color" name="color" value={formData.color} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="vehicleType" value="Vehicle Type" />
            <Select id="vehicleType" name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Truck">Truck</option>
              <option value="Coupe">Coupe</option>
              <option value="Hatchback">Hatchback</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="transmission" value="Transmission" />
            <Select id="transmission" name="transmission" value={formData.transmission} onChange={handleChange} required>
              <option value="">Select Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="state" value="Listing State" />
            <Select id="state" name="state" value={formData.state} onChange={handleChange} required>
              <option value="drafted">Drafted</option>
              <option value="active">Active</option>
              <option value="past">Past</option>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="description" value="Description" />
            <Textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={4} required />
          </div>

          {/* Image Upload Box */}
          <div className="md:col-span-2">
            <Label htmlFor="images" value="Upload Car Images" />
            <FileInput id="images" name="images" onChange={handleImageChange} multiple accept="image/*" />
            {formData.images.length > 0 && (
              <p className="text-sm text-gray-600 mt-2">
                {formData.images.length} image(s) selected.
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end space-x-4">
            <Button color="gray" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" gradientMonochrome="info">
              Add Car
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default NewCarModal;
