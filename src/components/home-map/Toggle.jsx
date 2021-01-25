import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/react";
import submarketColors from '../../utils/colors';

const toggleColor = (activeLayer) => (css`
  &:checked + .toggle__circle {
    background-color: ${submarketColors[activeLayer-1]};
  }`);


const Toggle = ({ activeLayer, layerVisibility, dispatch }) => (
  <label className="toggle__switch">
    <input
      type="checkbox"
      className="toggle__input toggle__input--point"
      autoComplete="off"
      checked={layerVisibility[activeLayer]}
      onClick={() => dispatch({ type: 'toggleLayer', layerVisibility: { ...layerVisibility, [activeLayer]: !layerVisibility[activeLayer] } })}
      css={toggleColor(activeLayer)}
    />
    <span className="toggle__circle" />
  </label>
);

Toggle.propTypes = {
  activeLayer: PropTypes.number.isRequired,
  layerVisibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Toggle;
