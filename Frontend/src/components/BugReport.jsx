import React, { useState } from 'react';

const BugReport = ({ isOpen, onClose }) => {
  const [bugReport, setBugReport] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBugReport({ ...bugReport, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to backend)
    alert('Bug report submitted successfully!');
    onClose(); // Close the BugReport after submission
    resetForm(); // Clear the form fields
  };

  const resetForm = () => {
    setBugReport({ name: '', email: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-black rounded-lg p-4 w-full max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Report a Bug</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="text-lg font-semibold">Name:</span>
            <input
              type="text"
              name="name"
              value={bugReport.name}
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
              value={bugReport.email}
              onChange={handleInputChange}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-semibold">Message:</span>
            <textarea
              name="message"
              value={bugReport.message}
              onChange={handleInputChange}
              rows="5"
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BugReport;