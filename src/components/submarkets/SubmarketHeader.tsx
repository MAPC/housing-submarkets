/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { fonts, themeColors, submarketColors } from '../../utils/theme';
import submarketImage from '../../images/submarket1.png';

const submarketHeaderWrapper = css`
  height: 64rem;
  position: relative;
`;

const purpleExtension = css`
  background-color: ${themeColors.bgPurple};
  height: 30rem;
`;

const articleImageWrapper = css`
  margin: 0 auto;
  max-width: 136.6rem;
  padding: 0 5rem;
`;

const h2Style = css`
  font-family: ${fonts.calibre};
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 4.4rem;
  margin: 0;
`;

const articleStyle = css`
  background-color: ${submarketColors[0]};
  color: ${themeColors.white};
  height: 46.5rem;
  margin-top: 3.5rem;
  max-width: 52rem;
  padding: 3rem 4rem;
  position: absolute;
  top: 3.5rem;
  z-index: 10;
`;

const imageStyle = css`
  margin-top: 3.5rem;
  max-width: 100rem;
  padding-right: 5rem;
  position: absolute;
  right: 0;
  top: 0;
`;

const SubmarketHeader = () => (
  <div css={submarketHeaderWrapper}>
    <div css={purpleExtension} />
    <div css={articleImageWrapper}>
      <article css={articleStyle}>
        <h2 css={h2Style}>Submarket 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
      <img src={submarketImage} css={imageStyle} />
    </div>
  </div>
);

export default SubmarketHeader;
