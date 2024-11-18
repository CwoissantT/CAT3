import React, { useState, useEffect } from 'react';
import PhoenixLogo from '../images/Phoenix-Nav-Logo.png';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [session, setSession] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch('/api/user/session');
        const data = await response.json();
        setSession(data);
      } catch (error) {
        console.error('Failed to fetch session:', error);
      }
    };

    fetchSession();
  }, []);

  const handleSignOut = async () => {
    try {
      await fetch('/api/user/logout', { method: 'POST' });
      setSession({ logged_in: false });
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="bg-background md:flex md:items-center md:justify-center px-8 py-2 space-x-8 shadow-lg">
      {/* Navbar container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
      <div className={`w-full md:w-auto flex justify-center md:pl-0 pl-14 `}>
        <Link to="/">
          <img src={PhoenixLogo} alt="Phoenix Logo" className="h-20 w-auto mx-auto md:mx-0" />
        </Link>
      </div>

        {/* Hamburger Menu Toggle */}
        <button
          className="md:hidden text-darkGreen"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Regular Menu - Hidden on Mobile */}
        <div className="hidden md:flex items-center space-x-8 font-lato">
          {/* English Button */}
          <button className="flex items-center border border-darkGreen text-darkGreen px-3 py-1 rounded-full text-sm uppercase hover:bg-darkGreen hover:text-white transition duration-300">
            <FaGlobe className="h-4 w-4 mr-2" />
            English
          </button>
          
          {/* Navigation Links */}
          <Link to='/Services' className="text-darkGreen hover:text-turquoise text-sm uppercase">
            Services
          </Link>
          <Link to="/About" className="text-darkGreen hover:text-turquoise text-sm uppercase">
            About
          </Link>
          <Link to="/Contact" className="text-darkGreen hover:text-turquoise text-sm uppercase">
            Contact
          </Link>
          <Link to="/Portal" className="bg-darkGreen text-white px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-darkGreenHover transition duration-300">
            Request Appointment
          </Link>

          {session?.logged_in ? (
            <div className="flex items-center space-x-2">
              <span className="text-darkGreen text-sm font-medium">
                Welcome, {session.email}
              </span>
              <button
                onClick={handleSignOut}
                className="flex items-center border border-darkGreen text-darkGreen px-3 py-1 rounded-full text-sm uppercase hover:bg-darkGreen hover:text-white transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => window.location.href = '/Login'}
              className="flex items-center border border-darkGreen text-darkGreen px-3 py-1 rounded-full text-sm uppercase hover:bg-darkGreen hover:text-white transition duration-300"
            >
              <FaUser className="h-4 w-4 mr-2" />
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu - Visible on Mobile Only */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 font-lato py-3">
          <button className="flex items-center border border-darkGreen text-darkGreen px-3 py-1 rounded-full text-sm uppercase hover:bg-darkGreen hover:text-white transition duration-300">
            <FaGlobe className="h-4 w-4 mr-2" />
            English
          </button>
          <Link to='/Services' className="text-darkGreen hover:text-turquoise text-sm uppercase">
            Services
          </Link>
          <Link to="/About" className="text-darkGreen hover:text-turquoise text-sm uppercase">
            About
          </Link>
          <Link to="/Contact" className="text-darkGreen hover:text-turquoise text-sm uppercase">
            Contact
          </Link>
          <Link to="/Portal" className="bg-darkGreen text-white px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-darkGreenHover transition duration-300">
            Request Appointment
          </Link>

          {session?.logged_in ? (
            <div className="flex flex-col items-center">
              <span className="text-darkGreen text-sm font-medium">
                Welcome, {session.email}
              </span>
              <button
                onClick={handleSignOut}
                className="flex items-center border border-darkGreen text-darkGreen px-3 py-1 rounded-full text-sm uppercase hover:bg-darkGreen hover:text-white transition duration-300 mt-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => window.location.href = '/Login'}
              className="flex items-center border border-darkGreen text-darkGreen px-3 py-1 rounded-full text-sm uppercase hover:bg-darkGreen hover:text-white transition duration-300"
            >
              <FaUser className="h-4 w-4 mr-2" />
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
