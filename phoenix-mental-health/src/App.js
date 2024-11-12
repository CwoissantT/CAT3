import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Services from './pages/Services';  
import About from './pages/About';        
import Contact from './pages/Contact';   
import Navbar from './components/Navbar'; 
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import UserPortal from './pages/UserPortal';
import AdminPortal from './pages/AdminPortal';
// import React, { useState, useEffect } from 'react';

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('/api/user/session');
        const data = await response.json();

        if (data.logged_in) {
          setRole(data.role);
        }
      } catch (error) {
        console.error('Failed to check session:', error);
      }
    };

    checkSession();
  }, []);

  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />           
        <Route path="/Services" element={<Services />} />  
        <Route path="/About" element={<About />} /> 
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Portal" element={role === 2 ? <AdminPortal /> : <UserPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
