/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { themeColors, fonts } from './../../utils/theme';

const sectionStyle = css`
  padding: 0 5rem;
`;

const sectionWithoutChart = css`
  ${sectionStyle}
  max-width: 100rem;
`;

type SectionWithoutChartProps = {
  children: React.HTMLAttributes<HTMLParagraphElement>,
}

const SectionWithoutChart: React.FC<SectionWithoutChartProps> = ({ children }) => (
  <div css={sectionWithoutChart}>
    { children }
  </div>
);

export default SectionWithoutChart;
