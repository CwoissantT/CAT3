import React from 'react';

const ServiceCard = ({ title, content, alignRight = false }) => {
  return (
    <section
      className={`flex flex-col md:flex-row ${
        alignRight ? 'md:flex-row-reverse' : ''
      } items-center justify-between py-8 px-4 bg-background`}
    >
      {/* Card Content */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-lightTurquoise rounded-lg p-6 shadow-lg relative border border-darkGreen max-w-lg w-full">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">{title}</h2>
          <p className="text-black font-dmSans">
            {content}
          </p>
        </div>
      </div>
      {/* Optional Feather Icon */}
      {/* <div className="hidden md:block md:w-1/2 flex justify-center">
        <img
          src="PATH_TO_YOUR_FEATHER_ICON" // Replace with actual path
          alt="Feather Icon"
          className="w-12 h-12"
        />
      </div> */}
    </section>
  );
};

export default ServiceCard;
