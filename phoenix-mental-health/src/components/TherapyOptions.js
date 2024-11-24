import React from 'react';
import NormalCard from './NormalCard';

const TherapyOptions = () => {
  return (
    <section className="flex flex-col items-center py-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 max-w-7xl">

      <div className="relative mx-auto mt-8 md:mt-0 px-10" style={{ maxWidth: '400px' }}>
        {/* Shadow Layer */}
        <div className="absolute top-3 left-10 bg-teal-700 rounded-lg w-[82%] h-[100%] z-0"></div>

        {/* Main Card */}
        <div className="w-[100%] h-[100%] relative bg-lightTurquoise rounded-lg p-8 shadow-lg border border-darkGreen z-10">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">Individual Therapy</h2>
          <p className="text-black font-dmSans">One-on-one meeting to address mental health concerns.<br/></p>

        </div>
      </div>

      <div className="relative mx-auto mt-8 md:mt-0 px-10" style={{ maxWidth: '400px' }}>
        {/* Shadow Layer */}
        <div className="absolute top-3 left-10 bg-teal-700 rounded-lg w-[82%] h-[100%] z-0"></div>

        {/* Main Card */}
        <div className="w-[100%] h-[100%] relative bg-lightTurquoise rounded-lg p-8 shadow-lg border border-darkGreen z-10">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">Couple Therapy</h2>
          <p className="text-black font-dmSans">Help couples improve their relationship.</p>

        </div>
      </div>

      <div className="relative mx-auto mt-8 md:mt-0 px-10" style={{ maxWidth: '400px' }}>
        {/* Shadow Layer */}
        <div className="absolute top-3 left-10 bg-teal-700 rounded-lg w-[82%] h-[100%] z-0"></div>

        {/* Main Card */}
        <div className="w-[100%] h-[100%] relative bg-lightTurquoise rounded-lg p-8 shadow-lg border border-darkGreen z-10">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">Family Therapy</h2>
          <p className="text-black font-dmSans">Help families improve their relationships and behaviors.</p>

        </div>
      </div>
      </div>
    </section>
  );
};

export default TherapyOptions;
