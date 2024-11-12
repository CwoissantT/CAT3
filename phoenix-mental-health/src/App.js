import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Services from './pages/Services';  
import About from './pages/About';        
import Contact from './pages/Contact';   
import Navbar from './components/Navbar'; 
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

function App() {
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
      </Routes>
    </Router>
  );
}

export default App;
