import React, { useReducer } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import StripPlots from './StripPlots';
import { choroplethColors } from '../utils/colors';

const MapChartWrapper = ({ data }) => {
  const initialState = {
    viewport: {
      latitude: 42.365386297918825,
      longitude: -71.08346183618282,
      zoom: 8.4,
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'setViewport':
        return { ...state, viewport: action.viewport };
      case 'setSpec':
        return { ...state, spec: action.spec };
      default:
        return { state };
    }
  }

  function choroplethColor(value) {
    if (value <= 35000) {
      return choroplethColors[6];
    } if (value <= 50000) {
      return choroplethColors[5];
    } if (value <= 75000) {
      return choroplethColors[4];
    } if (value <= 100000) {
      return choroplethColors[3];
    } if (value <= 150000) {
      return choroplethColors[2];
    } if (value <= 200000) {
      return choroplethColors[1];
    } if (value <= 250000) {
      return choroplethColors[0];
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const choropleth = ['match', ['get', 'ct10_id']];
  data.forEach((row) => {
    choropleth.push(row.ct10_id, +row.mhi ? choroplethColor(+row.mhi) : 'rgba(0, 0, 0, 0)');
  });
  choropleth.push('rgb(255, 255, 255)');

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ReactMapGL
        {...state.viewport}
        width="600px"
        height="550px"
        onViewportChange={(viewport) => dispatch({ type: 'setViewport', viewport })}
        mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
        mapStyle="mapbox://styles/ihill/ckjn5vkva2jbv19oxvi39hc66"
        style={{ flexShrink: 0 }}
      >
        <Source id="2010 Census Tracts" type="vector" url="mapbox://ihill.aw7gvvhk">
          <Layer
            type="fill"
            id="Tract choropleth"
            source="2010 Census Tracts"
            source-layer="Tracts-2jsl06"
            paint={{ 'fill-color': choropleth, 'fill-outline-color': '#231F20' }}
          />
        </Source>
      </ReactMapGL>
      <div>
        <StripPlots data={data} field="mhi" domain={[0, 250000]} format="$,f" />
      </div>
    </div>
  );
};

export default MapChartWrapper;
