import React from 'react';


const NormalCard = ({ headerText, paragraphText }) => {
  return (
    <div className="relative mx-auto mt-8 md:mt-0 px-10" style={{ maxWidth: '400px' }}>
      {/* Shadow Layer */}
      <div className="absolute top-3 left-10 bg-teal-700 rounded-lg w-[82%] h-[100%] z-0"></div>

      {/* Main Card */}
      <div className="relative bg-lightTurquoise rounded-lg p-8 shadow-lg border border-darkGreen z-10">
        <h2 className="text-2xl font-lato font-bold text-black mb-4">{headerText}</h2>
        <p className="text-black font-dmSans">{paragraphText}</p>

      </div>
    </div>
  );
};

export default NormalCard;
