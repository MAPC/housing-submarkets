/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import ReportButton from './ReportButton';
import { fonts, themeColors } from '../../utils/theme';

const relatedWrapperStyle = css`
  background-color: ${themeColors.white};
  max-width: 136.6rem;
  margin: 0 auto;
  padding: 0 5rem;
`;

const h3Style = css`
  color: ${themeColors.darkPurple};
  font-family: ${fonts.calibre};
  font-size: 3.6rem;
  font-weight: 600;
  margin: 5rem 0 2rem;
`;

const reportsRowStyle = css`
  display: flex;
  flex-direction: row;
  margin-bottom: 6.4rem;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const RelatedReports = () => (
  <section css={relatedWrapperStyle}>
    <div css={css`padding: 0 13rem;`}>
      <h3 css={h3Style}>Related Research</h3>
      <div css={reportsRowStyle}>
        <ReportButton
          url="https://www.regionalhousingsolutions.org/"
          title="Regional Housing Solutions"
        />
        <ReportButton
          url="https://metroatlhousing.org/"
          title="Metro Atlanta Housing Stategy"
        />
      </div>
    </div>
  </section>
);

export default RelatedReports;
