import React from 'react';

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-16 bg-background justify-end">
      {/* Contact Information Card */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg relative border border-darkGreen max-w-lg w-full">
          <h2 className="text-2xl font-lato font-bold text-black mb-4">Contact</h2>
          <p className="text-black font-dmSans">
            1234 East Orchard Road<br />
            Greenyard Village, FL 12345
          </p>
          <p className="text-black font-dmSans my-4">
            (xxx) xxx-xxxx<br />
            abc@gmail.com
          </p>
          {/* Optional Feather Icon */}
          {/* <img src={FeatherIcon} alt="Feather Icon" className="absolute bottom-4 right-4 w-8 h-8" /> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
