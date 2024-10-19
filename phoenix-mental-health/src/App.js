import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import Home from './pages/Home';
import Services from './pages/Services';  // Import your Services component
import About from './pages/About';        // Import your About component
import Contact from './pages/Contact';    // Import your Contact component
import Navbar from './components/Navbar'; // Import your Navbar component

function App() {
  return (
    <Router>
      <Navbar />  {/* Place Navbar inside Router so Link components work */}
      <Routes>
        <Route path="/" element={<Home />} />           {/* Define Home route */}
        <Route path="/Services" element={<Services />} />  {/* Define Services route */}
        <Route path="/About" element={<About />} />     Define About route
        <Route path="/Contact" element={<Contact />} /> Define Contact route
      </Routes>
    </Router>
  );
}

export default App;
