import React from 'react';
import PropTypes from 'prop-types';
import LayerButton from './LayerButton';

const LayerMenu = ({ activeLayer, dispatch }) => (
  <ul className="layer-menu">
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
