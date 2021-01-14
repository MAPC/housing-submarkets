import React, { useReducer } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import StripPlot from './StripPlot';
import submarketColors from '../utils/colors';

const MapChartWrapper = ({ data }) => {
  const allData = { allData: data };

  const reducedData = {
    1: data.filter((row) => +row.class === 1),
    2: data.filter((row) => +row.class === 2),
    3: data.filter((row) => +row.class === 3),
    4: data.filter((row) => +row.class === 4),
    5: data.filter((row) => +row.class === 5),
    6: data.filter((row) => +row.class === 6),
    7: data.filter((row) => +row.class === 7),
  };

  const initialState = {
    viewport: {
      latitude: 42.365386297918825,
      longitude: -71.08346183618282,
      zoom: 8.4,
    },
  };

  const colors = ['#f2f0f7', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#4a1486'];

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
      return colors[6];
    } if (value <= 50000) {
      return colors[5];
    } if (value <= 75000) {
      return colors[4];
    } if (value <= 100000) {
      return colors[3];
    } if (value <= 150000) {
      return colors[2];
    } if (value <= 200000) {
      return colors[1];
    } if (value <= 250000) {
      return colors[0];
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
        <StripPlot data={reducedData[1]} submarket={1} color={submarketColors[0]} />
        <StripPlot data={reducedData[2]} submarket={2} color={submarketColors[1]} />
        <StripPlot data={reducedData[3]} submarket={3} color={submarketColors[2]} />
        <StripPlot data={reducedData[4]} submarket={4} color={submarketColors[3]} />
        <StripPlot data={reducedData[5]} submarket={5} color={submarketColors[4]} />
        <StripPlot data={reducedData[6]} submarket={6} color={submarketColors[5]} />
        <StripPlot data={reducedData[7]} submarket={7} color={submarketColors[6]} />
      </div>
    </div>
  );
};

export default MapChartWrapper;
