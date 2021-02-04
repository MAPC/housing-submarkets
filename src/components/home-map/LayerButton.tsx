/** @jsx jsx */

import React, { Dispatch, SetStateAction } from 'react';
import { css, jsx } from "@emotion/react";
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { fonts, themeColors, submarketColors } from '../../utils/theme';

function updateLayer(layer: number, activeLayer: number, dispatch: Dispatch<SetStateAction<number>>) {
  if (layer === activeLayer) {
    return;
  } else {
    dispatch({type: 'setActiveLayer', layer: layer });
  }
}

const listItemStyles = css`
  align-items: center;
  border: 1px solid ${themeColors.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

type LayerButtonProps = {
  layer: number,
  activeLayer: number,
  dispatch: Dispatch<SetStateAction<number>>,
}

const LayerButton: React.FC<LayerButtonProps> = ({ layer, activeLayer, dispatch }) => {
  const buttonStyles = css`
    background: ${layer === activeLayer ? themeColors.white : themeColors.warmGray};
    border: none;
    border-left: ${layer === activeLayer ? `4px solid ${themeColors.white}` : `4px solid ${submarketColors[layer]}`};
    color: ${layer === activeLayer ?  submarketColors[layer] : 'rgba(122, 122, 122, .5)'};
    font-family: ${fonts.calibre};
    font-size: 2.8rem;
    height: 100%;
    min-width: 5rem;
    padding: .8rem;
    transition: color .2s ease-out;
    width: 100%;

    &:hover {
      color: ${layer === activeLayer ?  submarketColors[layer] : themeColors.fontGray };
      transition: 'color .2s ease-out';
    }

    @media (max-width: 768px) {
      border-bottom: ${layer === activeLayer ? `4px solid ${themeColors.white}` : `4px solid ${submarketColors[layer]}`};
      border-left: none;
      min-width: 0;
    }
  `;
  return (
    <li css={listItemStyles}>
      <button
        css={buttonStyles}
        tabIndex={0}
        role="button"
        onClick={() => updateLayer(layer, activeLayer, dispatch)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            updateLayer(layer, activeLayer, dispatch);
          }
        }}
      >
        { layer }
      </button>
    </li>
)};

LayerButton.propTypes = {
  layer: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  activeLayer: PropTypes.number.isRequired,
};

export default LayerButton;
export { updateLayer };
