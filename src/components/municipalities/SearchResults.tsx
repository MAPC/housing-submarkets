/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { Maybe, PostGraphile_HousSubmarketsCt } from './../../../types/gatsby-graphql';
import { css, jsx } from '@emotion/react';
import { VegaLite } from 'react-vega';
import { fonts } from '../../utils/theme';
import SubmarketBreakdown from './SubmarketBreakdown';

type SearchResultsProps = {
  data: Maybe<Array<Pick<PostGraphile_HousSubmarketsCt, 'ct10Id' | 'muni' | 'submktId'>>>,
  selectedMuni: string|undefined,
}

const searchResultWrapper = css`
  display: flex;
  flex-direction: column;
`;

const h3Style = css`
  font-family: ${fonts.calibre};
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0;
`;

function filterMunicipality(data: Maybe<Array<Pick<PostGraphile_HousSubmarketsCt, 'ct10Id' | 'muni' | 'submktId'>>>, selectedMuni: string|undefined,) {
  if (selectedMuni && data) {
    return data.filter(datum => datum.muni === selectedMuni);
  } else {
    return [];
  }
}

function submarketBreakdown(filteredData) {
  return filteredData.reduce((breakdown, datum) => {
    if (!breakdown.submarkets[datum.submktId]) {
      breakdown.submarkets[datum.submktId] = 1;
    } else {
      breakdown.submarkets[datum.submktId] += 1;
    }
    breakdown.total += 1;
    return breakdown;
  }, { total: 0, submarkets: {} });
}

const SearchResults: React.FC<SearchResultsProps> = ({ data, selectedMuni }) => {
  const [spec, setSpec] = useState({});
  const [muniData, setMuniData] = useState([]);
  const [submarketData, setSubmarketData] = useState();

  useEffect(() => {
    setMuniData(filterMunicipality(data, selectedMuni));
    setSpec({
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      data: { name: "muniData" },
      mark: "bar",
      height: 30,
      width: 350,
      encoding: {
        x: {
          aggregate: "count",
          field: "submktId",
          title: null,
          tickMinStep: 1,
          axis: { tickCount: 5 },
        },
        color: {
          legend: null,
          field: "submktId",
          type: 'nominal',
          "scale": {
            range: ['#C7024E',
            '#80CDC1',
            '#06614d',
            '#F37B74',
            '#BF812D',
            '#8C510A',
            '#6EA1C9'],
            domain: [1,2,3,4,5,6,7]
          }
        }
      }
    });
  }, [selectedMuni]);

  useEffect(() => {
    setSubmarketData(submarketBreakdown(muniData));
  }, [muniData])
  return (
    <article css={searchResultWrapper}>
      { selectedMuni ? <h3 css={h3Style}>{selectedMuni}</h3> : '' }
      { spec && selectedMuni ? <VegaLite spec={spec} data={{ muniData }} /> : '' }
      { submarketData ? <SubmarketBreakdown submarketData={submarketData} /> : '' }
    </article>
  )
};

export default SearchResults;
export { filterMunicipality };