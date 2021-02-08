/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { themeColors, fonts } from './../../utils/theme';


const sectionStyle = css`
  padding: 0 5rem;
`;

const sectionWithChart = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

const h3Style = css`
  color: ${themeColors.bgPurple};
  font-family: ${fonts.calibre};
  font-size: 2.8rem;
  font-weight: 600;
`;

const chartPlaceholder = css`
  align-items: center;
  background-color: ${themeColors.accentPurple};
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: center;
  height: 40rem;
  margin-left: 4rem;
  width: 50rem;

  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

type SectionWithChartProps = {
  title: string,
}

const SectionWithChart: React.FC<SectionWithChartProps> = ({ children, title }) => (
  <section css={sectionStyle}>
      <h3 css={h3Style}>{title}</h3>
      <div css={sectionWithChart}>
        <div>
          { children }
        </div>
        <aside css={chartPlaceholder}>Chart</aside>
      </div>
    </section>
);

export default SectionWithChart;
