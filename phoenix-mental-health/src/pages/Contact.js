import React from 'react';
import Footer from '../components/Footer'; 
import ContactSection from '../components/ContactSection'; 

const Contact = () => {
  return (
    <div className="font-sans bg-lightTeal text-deepTeal min-h-screen flex flex-col">
      {/* Main Section */}
      <div className="flex-grow bg-background">
        <ContactSection />
      </div>
    
      <Footer />
    </div>
  );
};

export default Contact;
