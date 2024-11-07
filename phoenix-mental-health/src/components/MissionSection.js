// src/components/MissionSection.jsx

import React from 'react';
import HeartHands from '../images/Holding_Heart.png';
import RightCard from './RightCard';
// import FeatherIcon from '../images/feather-bottom.png';

const MissionSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 bg-background">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={HeartHands} alt="Hands holding heart" className="w-80 h-80" />
      </div>
      <RightCard
      headerText="My Mission"
      paragraphText="I have dedicated myself to guiding people of all ages on their path to emotional
      well-being with an integrative approach, adapting the techniques to the needs of each
      client. My commitment is to offer a safe and judgment-free space where you can explore
      your feelings, thoughts, and experiences."
      />


    </section>
  );
};

export default MissionSection;


