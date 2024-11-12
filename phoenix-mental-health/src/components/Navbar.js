import React, { useState, useEffect } from 'react';
import PhoenixLogo from '../images/Phoenix-Nav-Logo.png';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUser } from 'react-icons/fa';

const Navbar = () => {

  const [session, setSession] = useState(null);

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
    <nav className="bg-background flex items-center justify-center px-8 py-2 space-x-8">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={PhoenixLogo} alt="Phoenix Logo" className="h-20 w-auto" />
          </Link>
        </div>
        {/* English Button */}
        <button className="flex items-center border border-darkGreen text-darkGreen px-3 py-1 rounded-full text-sm font-openSans uppercase font-lato hover:bg-darkGreen hover:text-white transition duration-300">
          <FaGlobe className="h-4 w-4 mr-2" />
          English
        </button>
      </div>
      {/* Right Side */}
      <div className="flex items-center space-x-6 ml-auto font-lato">
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
        {/* Request Appointment Button */}
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
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => window.location.href = '/login'}
            className="flex items-center border border-darkGreen text-darkGreen px-3 py-1 rounded-full text-sm uppercase hover:bg-darkGreen hover:text-white transition duration-300"
          >
            <FaUser className="h-4 w-4 mr-2" />
            Login
          </button>
        )}




        {/* Login Button
        <button className="flex items-center border border-darkGreen text-darkGreen px-3 py-1 rounded-full text-sm uppercase hover:bg-darkGreen hover:text-white transition duration-300">
          <FaUser className="h-4 w-4 mr-2" />
          Login
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;

