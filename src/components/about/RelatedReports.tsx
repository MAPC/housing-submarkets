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
`;

const RelatedReports = () => (
  <article css={relatedWrapperStyle}>
    <h3 css={h3Style}>Related Reports</h3>
    <div>
      <ReportButton
        url="https://www.regionalhousingsolutions.org/"
        title="Regional Housing Solutions"
      />
      <ReportButton
        url="https://metroatlhousing.org/"
        title="Metro Atlanta Housing Stategy"
      />
    </div>
  </article>
);

export default RelatedReports;
