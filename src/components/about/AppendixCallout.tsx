/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import { fonts, themeColors } from '../../utils/theme';

const appendixWrapperStyle = css`
  background-color: ${themeColors.bgPurple};
  color: ${themeColors.white};
  padding-bottom: 9rem;
`;

const contentWrapperStyle = css`
  max-width: 136.6rem;
  margin: 0 auto;
  padding: 0 5rem;
`;

const paddingWrapperStyle = css`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0 13rem;
`;

const h3Style = css`
  font-family: ${fonts.calibre};
  font-size: 3.6rem;
  font-weight: 600;
  padding: 5rem 0 0 0;
  margin: 0;
`;

const buttonStyle = css`
  background-color: ${themeColors.white};
  color: ${themeColors.bgPurple};
  font-family: ${fonts.calibre};
  font-weight: 600;
  margin-top: 2rem;
  padding: 1rem 3.6rem;
  text-decoration: none;

  &:focus {
    border: 3px solid ${themeColors.buttonBorder};
  }
`;

const buttonRowStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 38rem;

  @media (max-width: 650px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const AppendixCallout = () => (
  <article css={appendixWrapperStyle}>
    <div css={contentWrapperStyle}>
      <div css={paddingWrapperStyle}>
        <h3 css={h3Style}>Data & Technical Appendix</h3>
        <p>
          To explore the data yourself and learn more about how this data was collected, you can download our full dataset and read the technical appendix below.
        </p>
        <div css={buttonRowStyle}>
          <a href="https://mapc365.sharepoint.com/:f:/s/DataServicesSP/Etzt4EdJjWZBhw_A3fN6qu4BH8kq0-nYbAx5cUGCjOfV4w" css={buttonStyle}>Download Data</a>
          <a href="https://mapc.gitbook.io/housing-submarket-technical-appendix/" css={buttonStyle}>Read Appendix</a>
        </div>
      </div>
    </div>
  </article>
);

export default AppendixCallout;
