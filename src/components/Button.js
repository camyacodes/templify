// Button.js
import React from 'react';

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="btn btn-primary">
    {children}
  </button>
);

export default Button;
