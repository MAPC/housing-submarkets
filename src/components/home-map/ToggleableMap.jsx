import React, { useReducer } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import SubmarketLayer from './SubmarketLayer';
import Sidebar from './Sidebar';

const initialState = {
  viewport: {
    latitude: 42.37,
    longitude: -70.944,
    zoom: 8.4,
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
    <div>
      <ReactMapGL
        {...state.viewport}
        width="700px"
        height="500px"
        onViewportChange={(viewport) => dispatch({ type: 'setViewport', viewport })}
        mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
        mapStyle="mapbox://styles/ihill/ckk4b7xz43i8a17mjm1u1r8xs"
      >
        <Source id="2010 Census Tracts" type="vector" url="mapbox://ihill.aw7gvvhk">
          <SubmarketLayer id={1} data={data} isVisible={state.layerVisibility['1']} />
          <SubmarketLayer id={2} data={data} isVisible={state.layerVisibility['2']} />
          <SubmarketLayer id={3} data={data} isVisible={state.layerVisibility['3']} />
          <SubmarketLayer id={4} data={data} isVisible={state.layerVisibility['4']} />
          <SubmarketLayer id={5} data={data} isVisible={state.layerVisibility['5']} />
          <SubmarketLayer id={6} data={data} isVisible={state.layerVisibility['6']} />
          <SubmarketLayer id={7} data={data} isVisible={state.layerVisibility['7']} />
        </Source>
        <Source id="MAPC borders" type="vector" url="mapbox://ihill.763lks2o">
          <Layer
            type="line"
            id="MAPC municipal borders"
            source="MAPC borders"
            source-layer="MAPC_borders-0im3ea"
          />
        </Source>
      </ReactMapGL>
      <Sidebar layerVisibility={state.layerVisibility} dispatch={dispatch} activeLayer={state.activeLayer} />
    </div>
  );
};

export default ToggleableMap;
