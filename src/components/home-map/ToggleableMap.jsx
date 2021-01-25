import React, { useReducer } from 'react';
import Map from './Map';
import Sidebar from './Sidebar';
import { css } from "@emotion/react";

const initialState = {
  viewport: {
    latitude: 42.337,
    longitude: -70.815,
    zoom: 9.12,
  },
  layerVisibility: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
  },
  activeLayer: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setViewport':
      return { ...state, viewport: action.viewport };
    case 'toggleLayer':
      return { ...state, layerVisibility: action.layerVisibility };
    case 'setActiveLayer':
      return { ...state, activeLayer: action.layer };
    default:
      return { state };
  }
}

const ToggleableMap = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div css={css`position: relative;`}>
      <Map viewport={state.viewport} dispatch={dispatch} data={data} layerVisibility={state.layerVisibility} />
      <Sidebar layerVisibility={state.layerVisibility} dispatch={dispatch} activeLayer={state.activeLayer} />
    </div>
  );
};

export default ToggleableMap;
