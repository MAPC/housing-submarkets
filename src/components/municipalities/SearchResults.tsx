/** @jsx jsx */

import React from 'react';
import { Maybe, PostGraphile_HousSubmarketsCt } from './../../../types/gatsby-graphql';
import { css, jsx } from '@emotion/react';

type SearchResultsProps = {
  data: Maybe<Array<Pick<PostGraphile_HousSubmarketsCt, 'ct10Id' | 'muni' | 'submktId'>>>,
  selectedMuni: string|undefined,
}

function submarketBreakdown(data: Maybe<Array<Pick<PostGraphile_HousSubmarketsCt, 'ct10Id' | 'muni' | 'submktId'>>>, selectedMuni: string|undefined,) {
  if (selectedMuni && data) {
    return data.filter(datum => datum.muni === selectedMuni);
  } else {
    return 'Data n/a';
  }
}

const SearchResults: React.FC<SearchResultsProps> = ({ data, selectedMuni }) => {
  console.log(submarketBreakdown(data, selectedMuni));
  return (
    <p>
      {selectedMuni ? selectedMuni : 'Select a municipality'}
    </p>
  )
};

export default SearchResults;
export { submarketBreakdown };