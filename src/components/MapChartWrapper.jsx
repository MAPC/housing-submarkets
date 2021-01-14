import React, { useReducer, useEffect } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import StripPlots from './StripPlots';
import schema from '../utils/stripPlotsSchema';

const MapChartWrapper = ({ data }) => {
  const initialState = {
    viewport: {
      latitude: 42.3653,
      longitude: -71.0834,
      zoom: 8.4,
    },
    chartView: 'mhi',
    choropleth: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'setViewport':
        return { ...state, viewport: action.viewport };
      case 'setSpec':
        return { ...state, spec: action.spec };
      case 'setChartView':
        return { ...state, chartView: action.chartView };
      case 'setMapChoropleth':
        return { ...state, choropleth: action.choropleth };
      default:
        return { state };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let tempChoropleth = ['match', ['get', 'ct10_id']];
    data.forEach((row) => {
      tempChoropleth.push(row.ct10_id, row[state.chartView] ? schema[state.chartView].choroplethFunc(+row[state.chartView]) : 'rgba(0, 0, 0, 0)');
    });
    tempChoropleth.push('rgb(255, 255, 255)');
    dispatch({ type: 'setMapChoropleth', choropleth: tempChoropleth });
  }, [state.chartView]);
  return (
    <>
      <select onChange={(e) => dispatch({ type: 'setChartView', chartView: e.target.value })}>
        <option value="mhi">Median Household Income</option>
        <option value="ch_rhu_p">Change in % Rented Housing Units</option>
      </select>
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
              paint={{ 'fill-color': state.choropleth, 'fill-outline-color': '#231F20' }}
            />
          </Source>
        </ReactMapGL>
        <div>
          <StripPlots data={data} field={state.chartView} domain={schema[state.chartView].domain} format={schema[state.chartView].format} />
        </div>
      </div>
    </>
  );
};

export default MapChartWrapper;
