import React from 'react';

const TherapyOptions = () => {
  return (
    <section className="flex flex-col items-center py-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 max-w-7xl">
        <div className="bg-lightTurquoise rounded-lg p-6 shadow-lg border border-darkGreen">
          <h2 className="text-xl font-lato font-bold text-black mb-4">Individual Therapy</h2>
          <p className="text-black font-dmSans">
            Lorem ipsum odor amet, consectetur adipiscing elit. Volutpat eget habitasse...
          </p>
        </div>
        <div className="bg-lightTurquoise rounded-lg p-6 shadow-lg border border-darkGreen">
          <h2 className="text-xl font-lato font-bold text-black mb-4">Couple Therapy</h2>
          <p className="text-black font-dmSans">
            Lorem ipsum odor amet, consectetur adipiscing elit. Volutpat eget habitasse...
          </p>
        </div>
        <div className="bg-lightTurquoise rounded-lg p-6 shadow-lg border border-darkGreen">
          <h2 className="text-xl font-lato font-bold text-black mb-4">Family Therapy</h2>
          <p className="text-black font-dmSans">
            Lorem ipsum odor amet, consectetur adipiscing elit. Volutpat eget habitasse...
          </p>
        </div>
      </div>
    </section>
  );
};

export default TherapyOptions;
