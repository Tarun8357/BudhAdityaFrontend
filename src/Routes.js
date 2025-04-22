// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './components/card/Card';
import CustomForm from './components/form/CustomForm';
import CustomButton from './components/button/CustomButton';
import HomePage from './pages/HomePage'; // import the new homepage

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card" element={<Card title="Card Page" text="This is the card component." />} />
      <Route path="/form" element={<CustomForm />} />
      <Route path="/button" element={<CustomButton label="Click Me" onClick={() => alert("Clicked!")} />} />
    </Routes>
  );
}

export default AppRoutes;
