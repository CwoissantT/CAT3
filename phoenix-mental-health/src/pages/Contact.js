import React from 'react';
import Footer from '../components/Footer'; // already coded
import ContactSection from '../components/ContactSection'; // new component

const Contact = () => {
  return (
    <div className="font-sans bg-lightTeal text-deepTeal min-h-screen flex flex-col">
      {/* Main Section */}
      {/* REMOVE py-1 just helping me see seperation */}
      <div className="flex-grow py-1">
        <ContactSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
