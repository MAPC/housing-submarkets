/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { fonts, themeColors, submarketColors } from '../../utils/theme';

const articleStyle = css`
  color: ${themeColors.white};
  height: auto;
  margin-top: 3.5rem;
  max-width: 52rem;
  padding: 3rem 4rem;
  position: absolute;
  top: 3.5rem;
  z-index: 10;

  @media (max-width: 700px) {
    height: 100%;
    position: unset;
  }
`;

const h2Style = css`
  font-family: ${fonts.calibre};
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 4.4rem;
  margin: 0;
`;

const h3Style = css`
  color: ${themeColors.white};
  font-family: ${fonts.calibre};
  font-size: 2.8rem;
  font-weight: 600;
`;

const listStyle = css`
  padding: 0;
  list-style: none;
`;

const listItemStyle = css`
  font-family: ${fonts.swiftNeueLtPro};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
  margin: 1rem 0;
`;

const boldItemStyle = css`
  font-family: ${fonts.calibre};
  font-weight: 600;
`;

const InfoCard = ({ submarket }: { submarket: number }) => (
  <article css={css`
    ${articleStyle}
    background-color: ${submarketColors[submarket]};
  `}>
    <h2 css={h2Style}>{`Submarket ${submarket}`}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h3 css={h3Style}>Key Policies</h3>
    <ul css={listStyle}>
      <li css={listItemStyle}>
        <span css={boldItemStyle}>Key Policy One</span>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li css={listItemStyle}>
        <span css={boldItemStyle}>Key Policy Two</span>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li css={listItemStyle}>
        <span css={boldItemStyle}>Key Policy Three</span>:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
    </ul>
  </article>
);

export default InfoCard;
