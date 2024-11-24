import React from 'react';
import { Link } from 'react-router-dom';
import FooterMap from '../images/footer_map.png';
import InstaSVG from '../images/Instagram.svg';
import FbSVG from '../images/Facebook.svg';

const Footer = () => {
  return (
    <footer className="bg-background py-8 shadow-top">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-center text-left space-y-8 md:space-y-0">
        
        {/* Map Section
        <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-8 md:mb-0 md:mr-10">
          <img
            src={FooterMap} 
            alt="Map location"
            className="border border-darkGreen rounded-md"
          />
        </div> */}

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 mr-20">
          <h2 className="text-black font-bold mb-4">Quick Links</h2>
          <ul className="text-green-800 font-dmSans space-y-2">
            <Link to="/"><li>Home</li></Link>
            <Link to="/Services"><li>Services</li></Link>
            <Link to="/About"><li>About</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
            <Link to="/Portal"><li>Request Appointment</li></Link>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4 mr">
          <h2 className="text-black font-bold mb-4">Contact</h2>
          <p className="text-black font-dmSans">Miami, FL</p>
          <p className="text-black font-dmSans"></p>
          <p className="text-black font-dmSans mt-4">(786) 613-9498</p>
          <p className="text-black font-dmSans">phoenixplusllc@icloud.com</p>
        </div>

        {/* Follow Section
        <div className="w-full md:w-1/4">
          <h2 className="text-black font-bold mb-4">Follow</h2>
          <ul className="text-green-800 font-dmSans space-y-4">
            <li className="flex items-center space-x-2">
              <img src={InstaSVG} alt="Instagram" className="w-6 h-6" />
              <span>Instagram</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src={FbSVG} alt="Instagram" className="w-6 h-6" />
              <span>Facebook</span>
            </li>
          </ul>
        </div> */}
      </div>

      {/* Footer Bottom Text */}
      <div className="container mx-auto text-center mt-8">
        <p className="text-black font-dmSans">
          © Copyright 2024. Phoenix Mental Health Services. Site created by a team of University of Central Florida students.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
