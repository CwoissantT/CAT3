import React from 'react';
import PhoenixEagle from '../images/Phoenix-Eagle.png';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-turquoise to-lightTurquoise text-black flex items-center justify-between h-screen px-8">
      {/* Left Side - Welcome Message */}
      <div className="w-1/2">
        <h1 className="text-4xl md:text-6xl font-lato font-bold leading-tight">
          Welcome to <br />
          Phoenix Mental Health Services
        </h1>
      </div>
      {/* Right Side - Phoenix Logo */}
      <div className="w-1/2 flex justify-center">
        <img src={PhoenixEagle} alt="Phoenix Logo" className="w-80 h-auto" />
      </div>
      {/* Scroll Down Icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button>
          <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;