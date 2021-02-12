/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react'
import { themeColors, fonts } from '../../utils/theme';

type SearchBarProps = {
  containerRef: React.RefObject<HTMLInputElement>,
}

const SearchWrapperStyle = css`
  align-items: center;
  background-color: ${themeColors.warmGray};
  display: flex;
  flex-direction: column;
  height: 15rem;
  justify-content: center;
`;

const h2Style = css`
  color: ${themeColors.bgPurple};
  font-family: ${fonts.calibre};
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 4.4rem;
  margin: 0 0 1.6rem 0;
`;

const SearchBarStyle = css`
  .mapboxgl-ctrl-geocoder {
    width: 40rem;
  }
`;

const SearchBar: React.FC<SearchBarProps> = ({ containerRef }) => (
  <div css={SearchWrapperStyle}>
    <h2 css={h2Style}>Search for a municipality</h2>
    <div css={SearchBarStyle} ref={containerRef} />
  </div>
)

export default SearchBar;
