import React, { useReducer, useEffect } from 'react';
import SubmarketChoropleth from './SubmarketChoropleth';
import StripPlots from './StripPlots';
import schema from '../../utils/stripPlotsSchema';

const MapChartWrapper = ({ data }) => {
  const initialState = {
    viewport: {
      latitude: 42.3653,
      longitude: -71.0834,
      zoom: 8.4,
    },
    chartView: 'mhi',
    choropleth: [],
    selectedTract: null,
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
      case 'setSelectedTract':
        return { ...state, selectedTract: action.tract };
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
      <div>
        <SubmarketChoropleth
          viewport={state.viewport}
          dispatch={dispatch}
          choropleth={state.choropleth}
        />
        <StripPlots
          data={data}
          field={state.chartView}
          domain={schema[state.chartView].domain}
          format={schema[state.chartView].format}
        />
      </div>
    </>
  );
};

export default MapChartWrapper;
