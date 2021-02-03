/** @jsx jsx */

import React, { useReducer, useEffect } from 'react';
import { DataCsv } from '../../../types/gatsby-graphql';
import { css, jsx } from "@emotion/react";
import SubmarketChoropleth from './SubmarketChoropleth';
import StripPlots from './StripPlots';
import ViewSelector from './ViewSelector';
import { viewData } from '../../utils/submarketViews';
import { themeColors } from '../../utils/theme';

const MapChartWrapper = ({ data }: { data: Array<Pick<DataCsv, 'ct10_id' | 'class' | 'mhi' | 'ch_rhu_p' | 'rhu_p'>> }) => {
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
    const tempChoropleth = ['match', ['get', 'ct10_id']];
    data.forEach((row) => {
      tempChoropleth.push(row.ct10_id, row[state.chartView] ? viewData[state.chartView].choroplethFunc(+row[state.chartView]) : 'rgba(0, 0, 0, 0)');
    });
    tempChoropleth.push('rgb(255, 255, 255)');
    dispatch({ type: 'setMapChoropleth', choropleth: tempChoropleth });
  }, [state.chartView]);

  return (
    <div
      css={css`
        background-color: ${themeColors.accentPurple};
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2.5rem 0 3.6rem;
      `}
    >
      <ViewSelector dispatch={dispatch} />
      <div css={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 5rem;

        @media(max-width: 1200px) {
          align-items: center;
          flex-direction: column;
        }
      `}>
        <SubmarketChoropleth
          viewport={state.viewport}
          dispatch={dispatch}
          choropleth={state.choropleth}
          selectedTract={state.selectedTract}
        />
        <StripPlots
          data={data}
          field={state.chartView}
          domain={viewData[state.chartView].domain}
          format={viewData[state.chartView].format}
          selectedTract={state.selectedTract}
        />
      </div>
    </div>
  );
};

export default MapChartWrapper;
