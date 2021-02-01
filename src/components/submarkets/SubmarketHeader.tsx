/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import InfoCard from './InfoCard';
import { themeColors } from '../../utils/theme';
import submarketImage from '../../images/submarket1.png';

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

const SubmarketHeader = () => (
  <div css={submarketHeaderWrapper}>
    <div css={purpleExtension} />
    <div css={articleImageWrapper}>
      <InfoCard />
      <img src={submarketImage} css={imageStyle} />
    </div>
  </div>
);

export default SubmarketHeader;
