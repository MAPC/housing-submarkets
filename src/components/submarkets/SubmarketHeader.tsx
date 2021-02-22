/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import InfoCard from './InfoCard';
import { themeColors } from '../../utils/theme';
import SM1 from '../../images/SM1.jpg';
import SM2 from '../../images/SM2.png';
import SM3 from '../../images/SM3.png';
import SM4 from '../../images/SM4.png';
import SM5 from '../../images/SM5.jpg';
import SM6 from '../../images/SM6.png';
import SM7 from '../../images/SM7.png';

const submarketHeaderWrapper = css`
  height: 60rem;
  position: relative;

  @media (max-width: 700px) {
    height: unset;
  }
`;

const purpleExtension = css`
  background-color: ${themeColors.bgPurple};
  height: 30rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

const articleImageWrapper = css`
  margin: 0 auto;
  max-width: 136.6rem;
  padding: 0 5rem;
  position: relative;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 3.5rem;
  }
`;


const submarketImage = {
  1: SM1,
  2: SM2,
  3: SM3,
  4: SM4,
  5: SM5,
  6: SM6,
  7: SM7
}

const SubmarketHeader = ({ submarket }: { submarket: number }) => {
  const imageStyle = css`
    background-image: url(${submarketImage[submarket]});
    background-position: center;
    background-size: cover;
    height: 60rem;
    margin-top: 3.5rem;
    margin-right: 5rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 100rem;

    @media (max-width: 1100px) {
      max-width: 60rem;
    }

    @media (max-width: 700px) {
      margin: 0;
      padding: 0;
      position: unset;
      width: 100%;
    }
  `;
  return (
    <div css={submarketHeaderWrapper}>
      <div css={articleImageWrapper}>
        <InfoCard submarket={submarket} />
        <div css={imageStyle} />
      </div>
      <div css={purpleExtension} />
    </div>
  )
};

export default SubmarketHeader;
