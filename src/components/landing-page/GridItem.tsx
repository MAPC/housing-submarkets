/** @jsx jsx */

import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from "@emotion/react";
import { fonts, themeColors, submarketColors } from '../../utils/theme';

type GridItemProps = {
  submarket: 1 | 2 | 3 | 4 | 5 | 6 | 7,
  image: string,
}

const imageStyle = css`
  background-position: center;
  background-size: cover;
  height: 35rem;
`;

const h3Style = css`
  color: ${themeColors.white};
  font-family: ${fonts.calibre};
  font-size: 2.8rem;
  font-weight: 600;
  margin: 2.5rem 3rem;
  padding: 2rem 4rem;
  position: absolute;
  top: 0;
  z-index: 10;
`;

const GridItem: React.FC<GridItemProps> = ({ submarket, image, ...props }) => {
  const [isActive, toggleActive] = useState(false);
  const overlayStyle = css`
    background-color: rgba(255, 255, 255, 0.15);
    height: 35rem;
    position: absolute;
    top: 0;
    width: 100%;
    ${isActive ? 'background-color: rgba(255, 255, 255, 0)' : ''}
  `;
  const summaryStyle = css`
    color: ${themeColors.white};
    display: none;
    margin: 2.5rem 3rem;
    padding: 2rem 4rem;
    position: absolute;
    top: 10rem;
    ${isActive ? 'display: inline;' : ''}
  `;
  return (
    <Link
      {...props}
      to={`/submarkets/${submarket}`}
      onFocus={(e) => toggleActive(true)}
      onBlur={(e) => toggleActive(false)}
      onMouseEnter={(e) => toggleActive(true)}
      onMouseLeave={(e) => toggleActive(false)}
    >
      <div css={css`
        ${imageStyle}
        background-image: url(${image});
      `}/>
      <div css={overlayStyle} />
      <h3 css={css`
        ${h3Style}
        background-color: ${submarketColors[submarket]};
      `}>
        {`Submarket ${submarket}`}
      </h3>
      <p
        css={css`
          ${summaryStyle}
          background-color: ${submarketColors[submarket]};
      `}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Link>
)};

export default GridItem;
