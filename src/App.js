import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRoutes from './Routes';
import Navbar from './components/navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ScrollAwareRoutes() {
  const location = useLocation();

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh(); // Refresh animations when route changes
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <AppRoutes />
      </div>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,   // allows animations on scroll back as well
      mirror: true,  // animate when scrolling up
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollAwareRoutes />
    </BrowserRouter>
  );
}

export default App;
