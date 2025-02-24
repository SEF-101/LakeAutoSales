import { useState } from "react";
import Helmet from 'react-helmet';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Update form data state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/contacts', formData); // remove local host
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setError("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-md">
      <Helmet>
        <title>Lakes Auto Sales | Contact Us</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col">
          <span className="text-lg font-semibold">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="text-lg font-semibold">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="text-lg font-semibold">Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            required
          ></textarea>
        </label>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;