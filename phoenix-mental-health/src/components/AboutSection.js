import React from 'react';
import PhoenixEagle from '../images/Phoenix-Eagle.png';
import LeftCard from './LeftCard';

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 bg-background relative">
      {/* About Information Card
      <div className="w-full md:w-1/2 flex justify-start pl-10">
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg relative border border-darkGreen max-w-lg w-full">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">About</h2>
          <p className="text-black font-dmSans">
            I am Yermin Cristina Giraldo, a Mental Health Counselor. My goal is to help you overcome
            the emotional and mental challenges you face. Together, we can create strategies that
            allow you to live a more fulfilling and balanced life.
          </p>
        </div>
      </div> */}
      <div className="w-full md:w-1/2 flex justify-start pl-10">
      <LeftCard
      headerText="About"
      paragraphText="I am Yermin Cristina Giraldo, a Mental Health Counselor. My goal is to help you overcome
      the emotional and mental challenges you face. Together, we can create strategies that
      allow you to live a more fulfilling and balanced life."
      />
      </div>


    {/* <div className="w-full md:w-1/2 flex justify-start pl-10">
      <div className="relative mx-auto mt-8 md:mt-0 px-10 max-w-lg">

        <div className="absolute -top-4 -right-1111 border-2 border-darkGreen w-[75%] h-[95%] z-20 rounded-lg pointer-events-none"></div>


        <div className="relative bg-lightTurquoise rounded-lg p-8 shadow-lg border border-darkGreen z-10">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">"About"</h2>
          <p className="text-black font-dmSans">
            "I am Yermin Cristina Giraldo, a Mental Health Counselor. My goal is to help you overcome the emotional and mental challenges you face. Together, we can create strategies that allow you to live a more fulfilling and balanced life."
          </p>
        </div>

        <img
          src={PhoenixEagle} // Replace with the actual path to your phoenix image
          alt="Phoenix"
          className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-24 h-auto z-20"
        />
      </div>
    </div> */}



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
