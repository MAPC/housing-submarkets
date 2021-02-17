/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import { CaretLeft, CaretRight } from 'phosphor-react'
import { css, jsx } from "@emotion/react";
import { fonts, themeColors } from '../../utils/theme';

type SubmarketNavigationProps = {
  submarket: number
}

const submarketNavWrapper = css`
  margin: 0 auto;
  max-width: 136.6rem;
`;
const submarketNav = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 12.5rem 10rem;

  @media (max-width: 1000px) {
    padding: 0 5rem 10rem;
  }
`;

const linkStyles = css`
  align-items: center;
  color: ${themeColors.bgPurple};
  display: flex;
  font-family: ${fonts.calibre};
  font-size: 2.4rem;
  line-height: 2.4rem;
  text-decoration: none;

  @media (max-width: 500px) {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`;

const SubmarketNavigation: React.FC<SubmarketNavigationProps> = ({ submarket }) => {
  const backButton = (
    <Link
      to={`/submarkets/${submarket - 1}`}
      css={css`
        ${linkStyles}
        grid-column: 1 / 2;
        justify-self: start;
      `}
    >
      <CaretLeft size='3.6rem' weight='bold' />
      <span>
        {` Submarket ${submarket - 1}`}
      </span>
    </Link>
  )

  const nextButton = (
    <Link
      to={`/submarkets/${submarket + 1}`}
      css={css`
        ${linkStyles}
        grid-column: 2 / 3;
        justify-self: end;
      `}
    >
      {`Submarket ${submarket + 1} `}
      <CaretRight size='3.6rem' weight='bold' />
    </Link>
  )

  return (
    <div css={submarketNavWrapper}>
      <nav css={submarketNav}>
        {submarket > 1 ? backButton : ''}
        {submarket < 7 ? nextButton : ''}
      </nav>
    </div>
  )
};

export default SubmarketNavigation;
