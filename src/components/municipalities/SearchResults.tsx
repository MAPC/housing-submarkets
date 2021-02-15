/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { Maybe, PostGraphile_HousSubmarketsCt } from './../../../types/gatsby-graphql';
import { css, jsx } from '@emotion/react';
import { VegaLite } from 'react-vega';
import { submarketColors } from '../../utils/theme';

type SearchResultsProps = {
  data: Maybe<Array<Pick<PostGraphile_HousSubmarketsCt, 'ct10Id' | 'muni' | 'submktId'>>>,
  selectedMuni: string|undefined,
}

function submarketBreakdown(data: Maybe<Array<Pick<PostGraphile_HousSubmarketsCt, 'ct10Id' | 'muni' | 'submktId'>>>, selectedMuni: string|undefined,) {
  if (selectedMuni && data) {
    return data.filter(datum => datum.muni === selectedMuni);
    // return data.reduce((submarkets, datum) => {
    //   if (datum.muni === selectedMuni) {
    //     const temp = datum;
    //     temp.color = submarketColors[datum.submktId];
    //     submarkets.push({temp});
    //   }
    //   return submarkets;
    // }, []);
  } else {
    return 'Data n/a';
  }
}

const SearchResults: React.FC<SearchResultsProps> = ({ data, selectedMuni }) => {
  const [spec, setSpec] = useState({});
  const [muniData, setData] = useState({});

  useEffect(() => {
    setData(submarketBreakdown(data, selectedMuni));
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
  return (
    <React.Fragment>
      { selectedMuni ? <p>{selectedMuni}</p> : '' }
      { spec && selectedMuni ? <VegaLite spec={spec} data={{ muniData }} /> : '' }
    </React.Fragment>
  )
};

export default SearchResults;
export { submarketBreakdown };