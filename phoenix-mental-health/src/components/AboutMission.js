import React from 'react';

const AboutMission = () => {
  return (
    <section className="flex justify-center py-16 px-4 bg-background">
      <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg border border-darkGreen w-full max-w-4xl text-center">
        <p className="text-black font-dmSans text-lg mb-8">
          With more than 10 years of experience as a Mental Health Counselor, I have dedicated myself to
          guiding people of all ages on their path to emotional well-being with an integrative approach,
          adapting the techniques to the needs of each client. I am a licensed Mental Health Counselor
          and have worked with adolescents, adults, couples, and families. My mission is to provide you
          with the tools you need to effectively manage your mental health.
        </p>
        <p className="text-black font-dmSans text-lg mb-8">
          Take charge of your life and schedule your first appointment.
        </p>
        <button className="bg-deepTeal text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-800 transition">
          REQUEST FREE CONSULTATION
        </button>
      </div>
    </section>
  );
};

export default AboutMission;
