import React from 'react';
import PhoenixEagle from '../images/Phoenix-Eagle.png';

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 bg-background relative">
      {/* About Information Card */}
      <div className="w-full md:w-1/2 flex justify-start pl-10">
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg relative border border-darkGreen max-w-lg w-full">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">About</h2>
          <p className="text-black font-dmSans">
            I am Yermin Cristina Giraldo, a Mental Health Counselor. My goal is to help you overcome
            the emotional and mental challenges you face. Together, we can create strategies that
            allow you to live a more fulfilling and balanced life.
          </p>
        </div>
      </div>
      {/* Phoenix Image */}
      {/* absolute bottom-0 left-0 */}
      <div className="">
        <img
          src={PhoenixEagle}
          alt="Phoenix"
          className="w-40 h-40 md:w-48 md:h-48 " // adjust the size as needed
        />
      </div>
    </section>
  );
};

export default AboutSection;
