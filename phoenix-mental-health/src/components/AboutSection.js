import React from 'react';
import PhoenixEagle from '../images/Phoenix-Eagle.png';
import LeftCard from './LeftCard';

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 bg-background relative">
      <div className="w-full md:w-1/2 flex justify-center pl-10">
      <LeftCard
      headerText="About"
      paragraphText="I am Yermin Cristina Giraldo, a Mental Health Counselor. My goal is to help you overcome
      the emotional and mental challenges you face. Together, we can create strategies that
      allow you to live a more fulfilling and balanced life."
      />
      </div>



      {/* Phoenix Image
      {/* absolute bottom-0 left-0 */}
      { <div className="absolute right-40">
        <img
          src={PhoenixEagle}
          alt="Phoenix"
          className="w-64 h-64 md:w-auto md:h-96 " 
        />
      </div> } 
    </section>
  );
};

export default AboutSection;
