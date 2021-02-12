/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react'
import { themeColors } from '../../utils/theme';

type SearchBarProps = {
  containerRef: React.MutableRefObject<HTMLInputElement>,
}

const SearchbarStyle = css`
  background-color: ${themeColors.warmGray};
`;

const SearchBar: React.FC<SearchBarProps> = ({ containerRef }) => (
  <div ref={containerRef} css={SearchbarStyle} />
)

export default SearchBar;
