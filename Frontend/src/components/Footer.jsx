import React, { useState } from 'react';
import { Bug, KeyRound, MapPin } from 'lucide-react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { navItems } from '../constants';
import { Link } from 'react-router-dom';
import BugReport from './BugReport';

const Footer = () => {
  const [isBugReportOpen, setIsBugReportOpen] = useState(false);
  const [bugReport, setBugReport] = useState({ name: '', email: '', message: '' });

  const address = '2240 Mannheim Rd, Melrose Park, IL, 60164';
  const mapsLink = 'https://maps.app.goo.gl/CWsCpqBNpBhndztx7'; // lakes auto google page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBugReport({ ...bugReport, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to backend)
    alert('Bug report submitted successfully!');
    setIsBugReportOpen(false); // Close the BugReport after submission
    resetForm(); // Clear the form fields
  };

  const resetForm = () => {
    setBugReport({ name: '', email: '', message: '' });
  };

  const handleCloseBugReport = () => {
    setIsBugReportOpen(false);
    resetForm();
  };

  return (
    <footer className="bg-neutral-900 text-neutral-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        {/* dealer info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Lakes Auto Sales</h2>
          <p className="text-sm">{address}</p>
          <p className="text-sm">Phone: (847) 370-2940</p>
        </div>

        {/* routes */}
        <ul className="flex space-x-4 text-sm mb-4 md:mb-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* icons */}
        <div className="flex space-x-4">
          <a
            href={mapsLink}
            aria-label="Location on Google Maps"
            data-tooltip-id="mapsTip"
            data-tooltip-content="Location on Google Maps"
          >
            <MapPin className="hover:text-green-500" />
          </a>
          <ReactTooltip id="mapsTip" place="top" effect="solid" />

          <Link
            to="/login"
            aria-label="Login"
            data-tooltip-id="loginTip"
            data-tooltip-content="Login"
          >
            <KeyRound className="hover:text-blue-500" />
          </Link>
          <ReactTooltip id="loginTip" place="top" effect="solid" />

          <button
            aria-label="Report a bug"
            data-tooltip-id="bugTip"
            data-tooltip-content="Report a bug"
            onClick={() => setIsBugReportOpen(true)}
            className="hover:text-red-500"
          >
            <Bug />
          </button>
          <ReactTooltip id="bugTip" place="top" effect="solid" />
        </div>
      </div>

      {/* Bug Report Modal */}
      <BugReport isOpen={isBugReportOpen} onClose={handleCloseBugReport}>
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
      </BugReport>
    </footer>
  );
};

export default Footer;
