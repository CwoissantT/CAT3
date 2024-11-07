import React from 'react';
import FamilyHouse from '../images/Family_House.png';
import LeftCard from './LeftCard';

const HelpSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 bg-background">
      <LeftCard
      headerText="Here to Help"
      paragraphText="A variety of services designed to address the different emotional and mental needs of my clients. Whether you need short-term support to overcome a specific challenge, or long-term therapy to work on deeper issues, I am here to help."
      />
      {/* Right Side - Image */}
      <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
        <img src={FamilyHouse} alt="Family in house" className="w-80 h-80" />
      </div>
    </section>
  );
};

export default HelpSection;

