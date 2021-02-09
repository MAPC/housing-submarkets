import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/react";
import { submarketColors, themeColors } from '../../utils/theme';

const toggleSwitchSyle = css`
  display: inline-block;
  height: 2rem;
  position: relative;
  width: 4rem;

  &:focus-within {
    border: 2px solid ${themeColors.accentPurple};
  }
`;

const toggleCircleStyle = css`
  background-color: #ccc;
  border-radius: 14px;
  bottom: 0;
  cursor: pointer;
  height: 1.6rem;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
  width: 3.2rem;

  &::before {
    background-color: white;
    border-radius: 50%;
    bottom: 3px;
    content: '';
    height: 10px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 10px;
  }
`;


const Toggle = ({ activeLayer, layerVisibility, dispatch }) => {
  const toggleInputStyle = css`
    height: 0;
    opacity: 0;
    width: 0;
    &:checked + span {
      background-color: ${submarketColors[activeLayer]};
    }

    &:checked + span:before {
      transform: translateX(12px);
    }

    &:focus {
      border: 1px solid red;
      padding: 5px;
    }
  `;
  return (
    <label css={toggleSwitchSyle}>
      <input
        tabIndex={0}
        type="checkbox"
        className="toggle__input"
        autoComplete="off"
        checked={layerVisibility[activeLayer]}
        onChange={() => dispatch({ type: 'toggleLayer', layerVisibility: { ...layerVisibility, [activeLayer]: !layerVisibility[activeLayer] } })}
        css={toggleInputStyle}
      />
      <span className="toggle__circle" css={toggleCircleStyle} />
    </label>
  )
};

Toggle.propTypes = {
  activeLayer: PropTypes.number.isRequired,
  layerVisibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Toggle;
