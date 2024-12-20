import React from 'react';
import FeatherIcon from '../images/feather-bottom.png';

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-[10%] bg-background justify-center">
      {/* Contact Information Card */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative mx-auto mt-8 md:mt-0 px-10 max-w-lg">

        <div className="absolute top-3 left-10 bg-teal-700 rounded-lg w-[86.5%] h-[100%] z-0"></div>


        <div className="relative bg-lightTurquoise rounded-lg p-8 pr-20 w-[102.5%] h-[100%] shadow-lg border border-darkGreen z-10">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">Contact</h2>
          <p className="text-black font-dmSans">
              Miami, FL <br />
            </p>
            <p className="text-black font-dmSans my-4">
              (786) 613-9498<br />
              phoenixplusllc@icloud.com
            </p>


          <img
            src={FeatherIcon}
            alt="Feather Icon"
            className="absolute bottom-[-80px] right-[-70px] w-50 h-44 z-0 transform transition-transform duration-300"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
