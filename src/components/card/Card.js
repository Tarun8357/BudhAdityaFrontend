import React from 'react';

function Card({ title, text }) {
  return (
    <div className="card m-3 shadow" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  );
}

export default Card;
