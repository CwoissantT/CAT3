// src/components/MissionSection.jsx

import React from 'react';
import HeartHands from '../images/Holding_Heart.png';
// import FeatherIcon from '../images/feather-bottom.png';

const MissionSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 bg-background">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={HeartHands} alt="Hands holding heart" className="w-80 h-80" />
      </div>
      {/* Right Side - Card */}
      <div className="md:w-1/2 mt-8 md:mt-0 px-10">
        <div className="bg-lightTurquoise rounded-lg p-8 relative shadow-lg border border-darkGreen">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">My Mission</h2>
          <p className="text-black font-dmSans">
            I have dedicated myself to guiding people of all ages on their path to emotional
            well-being with an integrative approach, adapting the techniques to the needs of each
            client. My commitment is to offer a safe and judgment-free space where you can explore
            your feelings, thoughts, and experiences.
          </p>
          {/* Feather Icon */}
          {/* <img src={FeatherIcon} alt="Feather Icon" className="absolute bottom-4 right-4 w-8 h-8" /> */}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;


