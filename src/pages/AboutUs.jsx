import React from "react";
import Helmet from "react-helmet";

const AboutUs = () => {
  const mapsLink =
    "https://maps.google.com/maps?q=2240%20Mannheim%20Rd,%20Melrose%20Park,%20IL,%2060164&t=&z=13&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="flex flex-wrap lg:flex-nowrap bg-black p-6">
      <Helmet>
        <title>Lakes Auto Sales | About Us</title>
      </Helmet>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
        <iframe
          className="w-full h-64 lg:w-96 lg:h-80 rounded shadow-md"
          src={mapsLink}
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full lg:w-1/2 p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-black">
          Welcome to Lakes Auto Sales!
        </h1>
        <p className="mb-4 text-black">
          Welcome to our dealership! We are a trusted and reliable provider of
          high-quality vehicles. With years of experience in the automotive
          industry, we take pride in offering a wide selection of cars, trucks,
          and SUVs to meet the diverse needs of our customers. At our
          dealership, customer satisfaction is our top priority. Our
          knowledgeable and friendly sales team is dedicated to helping you find
          the perfect vehicle that suits your preferences and budget. We strive
          to provide a hassle-free buying experience, ensuring that you feel
          comfortable and confident throughout the entire process. In addition
          to our extensive inventory, we also offer comprehensive financing
          options to make your car-buying journey seamless. Our finance experts
          will work closely with you to find the best loan or lease terms that
          fit your financial situation. When it comes to servicing your vehicle,
          our skilled technicians are here to provide top-notch maintenance and
          repairs. We use state-of-the-art equipment and genuine parts to ensure
          the longevity and performance of your vehicle. Visit our dealership
          today and experience the exceptional service and quality vehicles we
          have to offer. We look forward to serving you and helping you find
          your dream car!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
