import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/react";
import LayerButton from './LayerButton';

const LayerMenu = ({ activeLayer, dispatch }) => (
  <ul
    className="layer-menu"
    css={css`
      display: grid;
      grid-template-rows: repeat(7, 1fr);
      list-style: none;
      margin: 0;
      padding: 0;
    `}
  >
    <LayerButton layer={1} activeLayer={activeLayer} dispatch={dispatch} />
    <LayerButton layer={2} activeLayer={activeLayer} dispatch={dispatch} />
    <LayerButton layer={3} activeLayer={activeLayer} dispatch={dispatch} />
    <LayerButton layer={4} activeLayer={activeLayer} dispatch={dispatch} />
    <LayerButton layer={5} activeLayer={activeLayer} dispatch={dispatch} />
    <LayerButton layer={6} activeLayer={activeLayer} dispatch={dispatch} />
    <LayerButton layer={7} activeLayer={activeLayer} dispatch={dispatch} />
  </ul>
);

LayerMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activeLayer: PropTypes.number.isRequired,
};

export default LayerMenu;
