import React from 'react';

function CustomButton({ label, onClick }) {
  return (
    <button className="btn btn-outline-primary m-2" onClick={onClick}>
      {label}
    </button>
  );
}

export default CustomButton;
