/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import GridItem from './GridItem';
import ReportCallout from './ReportCallout';
import SM1 from '../../images/SM1.png';
import SM2 from '../../images/SM2.png';
import SM3 from '../../images/SM3.png';
import SM4 from '../../images/SM4.png';
import SM5 from '../../images/SM5.png';
import SM6 from '../../images/SM6.png';
import SM7 from '../../images/SM7.png';
import { themeColors } from '../../utils/theme';

const gridStyle = css`
  column-gap: 1.6rem;
  display: grid;
  grid-template-columns: 40% 1fr 40%;
  grid-template-rows: repeat(4, 35rem);
  margin: 0 auto;
  padding-bottom: 15rem;
  max-width: 126.6rem;
  row-gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const activeLinkStyle = css`
  &:focus {
    border: 3px solid ${themeColors.buttonBorder};
  }
`;

const lefthandMobile = css`
  @media (max-width: 1000px) {
    grid-column: 1 / 2;
  }
`;

const righthandMobile = css`
  @media (max-width: 1000px) {
    grid-column: 2 / 3;
  }
`;

const SubmarketGrid = () => {
  return (
    <section css={gridStyle}>
      <GridItem
        submarket={1}
        image={SM1}
        css={css`
          ${activeLinkStyle}
          ${lefthandMobile}
          grid-column: 1 / 2;
          grid-row: 1;
          position: relative;
      `}/>
      <GridItem
        submarket={2}
        image={SM2}
        css={css`
          ${activeLinkStyle}
          ${righthandMobile}
          grid-column: 2 / 4;
          grid-row: 1;
          position: relative;
      `}
      />
      <GridItem
        submarket={3}
        image={SM3}
        css={css`
          ${activeLinkStyle}
          ${lefthandMobile}
          grid-column: 1 / 3;
          grid-row: 2;
          position: relative;
      `}
      />
      <GridItem
        submarket={4}
        image={SM4}
        css={css`
          ${activeLinkStyle}
          ${righthandMobile}
          grid-column: 3 / 4;
          grid-row: 2;
          position: relative;
      `}
      />
      <GridItem
        submarket={5}
        image={SM5}
        css={css`
          ${activeLinkStyle}
          ${lefthandMobile}
          grid-column: 1 / 2;
          grid-row: 3;
          position: relative;
      `}
      />
      <GridItem
        submarket={6}
        image={SM6}
        css={css`
          ${activeLinkStyle}
          ${righthandMobile}
          grid-column: 2 / 4;
          grid-row: 3;
          position: relative;
      `}
      />
      <GridItem
        submarket={7}
        image={SM7}
        css={css`
          ${activeLinkStyle}
          ${lefthandMobile}
          grid-column: 1 / 3;
          grid-row: 4;
          position: relative;
      `}
      />
      <ReportCallout
        css={css`
          ${righthandMobile}
          grid-column: 3 / 4;
          grid-row: 4;
        `}
      />
    </section>
  )
};

export default SubmarketGrid;
