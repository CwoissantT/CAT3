import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import HelpSection from '../components/HelpSection';
import QuoteSection from '../components/QuoteSection';
import ConnectSection from '../components/ConnectSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans bg-lightTeal text-deepTeal">
      {/* <Navbar /> */}
      <HeroSection />
      <MissionSection />
      <QuoteSection />
      <HelpSection />
      {/* <ConnectSection /> */}
      <Footer />
    </div>
  );
};

export default Home;
