import { useState } from "react";
import axios from "axios";
import { TextInput, Textarea, Button, Card } from "flowbite-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    carInquiry: "", // New optional field
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Handle input change
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
      await axios.post("http://localhost:5000/api/contacts", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", carInquiry: "", message: "" });
    } catch (error) {
      setError("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-gray-900 text-white p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Contact Information */}
        <div className="lg:w-1/2 space-y-4">
          <p className="text-lg">
            Have questions? Feel free to reach out to us using the form. 
            We're happy to help!
          </p>
          <p className="text-lg">📍 2240 Mannheim Rd, Melrose Park, IL 60164</p>
          <p className="text-lg">📞 (847) 370-2940</p>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-lg font-semibold">Name:</label>
              <TextInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="text-lg font-semibold">Email:</label>
              <TextInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="text-lg font-semibold">
                Car Inquiring About <span className="text-gray-400">(Optional)</span>:
              </label>
              <TextInput
                type="text"
                name="carInquiry"
                value={formData.carInquiry}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="e.g., 2021 Honda Civic EX"
              />
            </div>

            <div>
              <label className="text-lg font-semibold">Message:</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="mt-1"
                required
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <Button
              gradientMonochrome="info"
              className="w-full mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default ContactSection;
