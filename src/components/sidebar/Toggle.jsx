import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ id, layerVisibility, dispatch }) => (
  <div className="toggle__wrapper">
    <label className="toggle__switch">
      <input
        type="checkbox"
        className="toggle__input toggle__input--point"
        autoComplete="off"
        defaultChecked
        onClick={() => dispatch({ type: 'toggleLayer', layerVisibility: { ...layerVisibility, [id]: !layerVisibility[id] } })}
      />
      <span className="toggle__circle" />
    </label>
    <legend className="legend__subtitle">{`Submarket ${id}`}</legend>
  </div>
);

Toggle.propTypes = {
  id: PropTypes.number.isRequired,
  layerVisibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Toggle;
