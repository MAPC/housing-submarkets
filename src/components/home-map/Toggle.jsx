import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/react";
import submarketColors, { themeColors } from '../../utils/colors';

const toggleColor = (activeLayer) => (css`
  &:checked + .toggle__circle {
    background-color: ${submarketColors[activeLayer-1]};
  }

  &:focus {
    border: 1px solid red;
    padding: 5px;
  }
  `);


const Toggle = ({ activeLayer, layerVisibility, dispatch }) => (
  <label
    className="toggle__switch"
    css={css`&:focus-within {
      border: 2px solid ${themeColors.accentPurple};
    }`}
  >
    <input
      tabIndex={0}
      type="checkbox"
      className="toggle__input toggle__input--point"
      autoComplete="off"
      checked={layerVisibility[activeLayer]}
      onChange={() => dispatch({ type: 'toggleLayer', layerVisibility: { ...layerVisibility, [activeLayer]: !layerVisibility[activeLayer] } })}
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
