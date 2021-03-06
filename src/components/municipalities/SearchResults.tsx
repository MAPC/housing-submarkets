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
  margin: 0 5rem;
`;

const h3Style = css`
  font-family: ${fonts.calibre};
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0 0 1.6rem 0;
`;

const vegaStyle = css`
  margin: 0 0 1.6rem 0;
  width: 40rem;
`;

function filterMunicipality(data: Maybe<Array<Pick<PostGraphile_HousSubmarketsCt, 'ct10Id' | 'muni' | 'submktId' | 'ht'>>>, selectedMuni: string|undefined,) {
  if (selectedMuni && data) {
    return data.filter(datum => datum.muni === selectedMuni);
  } else {
    return [];
  }
}

function submarketBreakdown(filteredData: Array<{ muni: string, submktId: number, ct10Id: number, hh: number, }>) {
  return filteredData.reduce((breakdown, datum) => {
    if (!breakdown.submarkets[datum.submktId]) {
      breakdown.submarkets[datum.submktId] = datum.hh;
    } else {
      breakdown.submarkets[datum.submktId] += datum.hh;
    }
    breakdown.total += datum.hh;
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
      mark: { type: "bar" },
      height: 40,
      width: 350,
      encoding: {
        x: {
          aggregate: "sum",
          field: "hh",
          title: null,
          tickMinStep: 1,
          format: ','
        },
        color: {
          legend: null,
          field: "submktId",
          type: 'nominal',
          scale: {
            range: ['#C7024E',
            '#80CDC1',
            '#06614d',
            '#F37B74',
            '#BF812D',
            '#8C510A',
            '#6EA1C9'],
            domain: [1,2,3,4,5,6,7]
          }
        },
        tooltip: [
          { field: "submktId", type: "nominal", title: "Submarket" },
          { field: "sum_hh", type: "quantitative", title: "Households", format: ',' }
        ],
      }
    });
  }, [selectedMuni]);

  useEffect(() => {
    setSubmarketData(submarketBreakdown(muniData));
  }, [muniData])
  return (
    <article css={searchResultWrapper}>
      { selectedMuni ? <h3 css={h3Style}>{selectedMuni}</h3> : <h3 css={h3Style}>Search above or click into the map to begin</h3> }
      { spec && selectedMuni ? <VegaLite spec={spec} data={{ muniData }} css={vegaStyle} /> : '' }
      { submarketData ? <SubmarketBreakdown submarketData={submarketData} /> : '' }
    </article>
  )
};

export default SearchResults;
export { filterMunicipality };