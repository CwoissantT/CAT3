import React from 'react';
import FamilyHouse from '../images/Family_House.png';

const HelpSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 bg-background">
      {/* Left Side - Card */}
      <div className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
        <div className="bg-lightTurquoise rounded-lg p-8 relative shadow-lg border border-darkGreen">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">Here to Help</h2>
          <p className="text-black font-dmSans">
          A variety of services designed to address the different emotional and mental needs of my clients. Whether you need short-term support to overcome a specific challenge, or long-term therapy to work on deeper issues, I am here to help.
          </p>
        </div>
      </div>
      {/* Right Side - Image */}
      <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
        <img src={FamilyHouse} alt="Family in house" className="w-80 h-80" />
      </div>
    </section>
  );
};

export default HelpSection;

