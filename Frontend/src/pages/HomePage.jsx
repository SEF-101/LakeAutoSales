import React from "react";
import HeroSection from "../components/HeroSection";
import Helmet from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Lakes Auto Sales</title>
      </Helmet>
      <HeroSection />
    </>
  );
};

export default HomePage;
