import React from 'react';

const Toggle = ({ label }) => (
  <div className="toggle__wrapper">
    <label className="toggle__switch">
      <input type="checkbox" className="toggle__input toggle__input--point" autoComplete="off" defaultChecked />
      <span className="toggle__circle" />
    </label>
    <legend className="legend__subtitle">{label}</legend>
  </div>
);

export default Toggle;
