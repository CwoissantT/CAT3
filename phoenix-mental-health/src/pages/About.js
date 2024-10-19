import React from 'react';
import Footer from '../components/Footer'; // Assuming you have the footer component ready
import AboutSection from '../components/AboutSection'; // Top section
import AboutMission from '../components/AboutMission'; // Bottom section

const About = () => {
  return (
    <div className="font-sans bg-lightTeal text-deepTeal min-h-screen flex flex-col">
      {/* Main Section */}
      <div className="flex-grow">
        <AboutSection /> {/* Upper Section */}
        <AboutMission /> {/* Lower Section */}
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
};

export default About;
