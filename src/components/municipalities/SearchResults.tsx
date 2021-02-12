/** @jsx jsx */

import React from 'react';
import { Maybe, PostGraphile_HousSubmarketsCt } from './../../../types/gatsby-graphql';
import { css, jsx } from '@emotion/react';

type SearchResultsProps = {
  data: Maybe<Array<Pick<PostGraphile_HousSubmarketsCt, 'ct10Id' | 'muni' | 'submktId'>>>,
  selectedMuni: string|undefined,
}

const SearchResults: React.FC<SearchResultsProps> = ({ data, selectedMuni }) => (
  <p>
    {selectedMuni ? selectedMuni : 'Select a municipality'}
  </p>
);

export default SearchResults;
