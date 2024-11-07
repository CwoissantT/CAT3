import React from 'react';

// Feather icon import or path (update this path as needed)
import FeatherIcon from '../images/feather-bottom.png'; // Adjust the path as needed

const RightCard = ({ headerText, paragraphText }) => {
  return (
    <div className="relative mx-auto mt-8 md:mt-0 px-10 max-w-lg">
      {/* Shadow Layer */}
      <div className="absolute top-3 left-10 bg-teal-700 rounded-lg w-[86.5%] h-[100%] z-0"></div>

      {/* Main Card */}
      <div className="relative bg-lightTurquoise rounded-lg p-8 shadow-lg border border-darkGreen z-10">
        <h2 className="text-2xl font-lato font-bold text-black mb-4">{headerText}</h2>
        <p className="text-black font-dmSans">{paragraphText}</p>

        {/* Feather Icon */}
        <img
          src={FeatherIcon}
          alt="Feather Icon"
          className="absolute bottom-[-80px] right-[-70px] w-50 h-44 z-0 transform transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default RightCard;
