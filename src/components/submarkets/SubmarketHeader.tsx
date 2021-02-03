/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import InfoCard from './InfoCard';
import { themeColors } from '../../utils/theme';
import SM1 from '../../images/SM1.png';
import SM2 from '../../images/SM2.png';
import SM3 from '../../images/SM3.png';
import SM4 from '../../images/SM4.png';
import SM5 from '../../images/SM5.png';
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

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 3.5rem;
  }
`;

const imageStyle = css`
  height: 60rem;
  margin-top: 3.5rem;
  max-width: 100rem;
  padding-right: 5rem;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 1100px) {
    max-width: 60rem;
  }

  @media (max-width: 700px) {
    height: auto;
    margin: 0;
    padding: 0;
    position: unset;
    width: 100%;
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

const SubmarketHeader = ({ submarket }: { submarket: number }) => (
  <div css={submarketHeaderWrapper}>
    <div css={purpleExtension} />
    <div css={articleImageWrapper}>
      <InfoCard submarket={submarket} />
      <img src={submarketImage[submarket]} css={imageStyle} />
    </div>
  </div>
);

export default SubmarketHeader;
