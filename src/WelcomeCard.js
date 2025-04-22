// src/WelcomeCard.js
import React from 'react';

function WelcomeCard() {
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title">Welcome to BudhAditya</h3>
          <p className="card-text">This is a simple React component using Bootstrap.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;
