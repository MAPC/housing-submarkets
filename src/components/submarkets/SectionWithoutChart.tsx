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

const h3Style = css`
  color: ${themeColors.bgPurple};
  font-family: ${fonts.calibre};
  font-size: 2.8rem;
  font-weight: 600;
`;

type SectionWithoutChartProps = {
  title: string,
}

const SectionWithoutChart: React.FC<SectionWithoutChartProps> = ({ children, title }) => (
  <section css={sectionWithoutChart}>
    <h3 css={h3Style}>{title}</h3>
    { children }
  </section>
);

export default SectionWithoutChart;
