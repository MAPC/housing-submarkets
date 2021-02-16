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

const chartPlaceholder = css`
  align-items: center;
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
  children: Array<JSX.Element>,
}

const SectionWithChart: React.FC<SectionWithChartProps> = ({ children }) => (
  <section css={sectionStyle}>
      <div css={sectionWithChart}>
        <div>
          { children[0] }
        </div>
        <aside css={chartPlaceholder}>
          { children[1] }
        </aside>
      </div>
    </section>
);

export default SectionWithChart;
