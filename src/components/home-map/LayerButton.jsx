import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

function updateLayer(layer, activeLayer, dispatch) {
  if (layer === activeLayer) {
    return;
  } else {
    dispatch({type: 'setActiveLayer', layer: layer });
  }
}

const ListItem = styled.li`
  align-items: center;
  border: 1px solid #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LayerButton = ({ layer, activeLayer, dispatch }) => (
  <ListItem>
    <button
      className="layer-menu__button"
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
  </ListItem>
);

LayerButton.propTypes = {
  layer: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  activeLayer: PropTypes.number.isRequired,
};

export default LayerButton;
export { updateLayer };
