import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { fonts, themeColors, submarketColors } from '../../utils/theme';

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

const Button = styled.button((props) => ({
  background: (props.layer === props.activeLayer ? themeColors.white : themeColors.warmGray),
  border: 'none',
  color: (props.layer === props.activeLayer ? submarketColors[props.layer] : 'rgba(122, 122, 122, .5)'),
  fontFamily: fonts.calibre,
  fontSize: '2.8rem',
  height: '100%',
  minWidth: '5rem',
  padding: '.8rem',
  transition: 'color .2s ease-out',
  WebkitTransition: 'color .2s ease-out',
  width: '100%',

  '&:hover': {
    color: (props.layer === props.activeLayer ? submarketColors[props.layer] : themeColors.fontGray),
    transition: 'color .2s ease-out',
    WebkitTransition: 'color .2s ease-out',
  },

  '@media (max-width: 768px)': {
    minWidth: 0,
  }
}));

const LayerButton = ({ layer, activeLayer, dispatch }) => (
  <ListItem>
    <Button
      layer={layer}
      activeLayer={activeLayer}
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
    </Button>
  </ListItem>
);

LayerButton.propTypes = {
  layer: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  activeLayer: PropTypes.number.isRequired,
};

export default LayerButton;
export { updateLayer };
