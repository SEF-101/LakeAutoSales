import React from "react";
import Helmet from "react-helmet";
import ContactSection from "../components/ContactSection";
import { Card, Button } from "flowbite-react";

const AboutUs = () => {
  const mapsLink =
    "https://maps.google.com/maps?q=2240%20Mannheim%20Rd,%20Melrose%20Park,%20IL,%2060164&t=&z=13&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="p-6 space-y-12">
      <Helmet>
        <title>Lakes Auto Sales | About Us</title>
      </Helmet>

      {/* About Section */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-8">
        {/* About Us Text*/}
        <Card className="w-full lg:w-1/2 bg-white dark:bg-gray-800 shadow-lg p-6 min-h-[600px] flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
              Welcome to Lakes Auto Sales!
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              We are a trusted and reliable provider of high-quality vehicles.
              With years of experience in the automotive industry, we take pride
              in offering a wide selection of cars, trucks, and SUVs to meet the
              diverse needs of our customers.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Visit our dealership today and experience our exceptional service
              and quality vehicles. We look forward to serving you and helping
              you find your dream car!
            </p>
          </div>

        </Card>

        {/* Google Maps Embed*/}
        <Card className="w-full lg:w-1/2 overflow-hidden shadow-lg min-h-[600px] flex items-center justify-center">
          <iframe
            className="w-full h-full rounded-md min-h-[550px] min-w-[500px]" 
            src={mapsLink}
            allowFullScreen
          ></iframe>
        </Card>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default AboutUs;
