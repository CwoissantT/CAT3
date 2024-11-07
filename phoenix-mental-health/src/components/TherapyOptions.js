import React from 'react';
import NormalCard from './NormalCard';

const TherapyOptions = () => {
  return (
    <section className="flex flex-col items-center py-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 max-w-7xl">
        <NormalCard
        headerText="Individual Therapy"
        paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. "
        />

        <NormalCard
        headerText="Couple Therapy"
        paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent."
        />

        <NormalCard
        headerText="Family Therapy"
        paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. "
        />
      </div>
    </section>
  );
};

export default TherapyOptions;
