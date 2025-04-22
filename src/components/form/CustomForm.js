import React from 'react';

function CustomForm() {
  return (
    <form className="m-3">
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
}

export default CustomForm;
