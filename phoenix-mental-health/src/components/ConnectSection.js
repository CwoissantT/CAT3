import React from 'react';

const ConnectSection = () => {
  return (
    <section className="bg-background py-16">
      <h2 className="text-center text-2xl font-lato font-bold text-black mb-8">Connect with me</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen">
          {/* Placeholder for Social Media Icon */}
          <img src="/path/to/icon1.png" alt="Icon 1" className="w-16 h-16" />
        </div>
        {/* Repeat for other cards */}
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen">
          {/* Placeholder for Social Media Icon */}
          <img src="/path/to/icon1.png" alt="Icon 1" className="w-16 h-16" />
        </div>
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen">
          {/* Placeholder for Social Media Icon */}
          <img src="/path/to/icon1.png" alt="Icon 1" className="w-16 h-16" />
        </div>
        <br></br> {/* new line... */}
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen">
          {/* Placeholder for Social Media Icon */}
          <img src="/path/to/icon1.png" alt="Icon 1" className="w-16 h-16" />
        </div>
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen">
          {/* Placeholder for Social Media Icon */}
          <img src="/path/to/icon1.png" alt="Icon 1" className="w-16 h-16" />
        </div>
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen">
          {/* Placeholder for Social Media Icon */}
          <img src="/path/to/icon1.png" alt="Icon 1" className="w-16 h-16" />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;

