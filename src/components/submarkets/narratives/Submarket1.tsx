/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import SectionWithoutChart from '../SectionWithoutChart';
import SectionWithChart from '../SectionWithChart';
import HoverablePhrase from '../../HoverablePhrase';
import HigherEducation from '../visualizations/HigherEducation';
import { themeColors, fonts } from '../../../utils/theme';

const h3Style = css`
  color: ${themeColors.bgPurple};
  font-family: ${fonts.calibre};
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0;
`;

const linkStyle = css`
  color: ${themeColors.bgPurple};
`;

const SubmarketOneNarrative = () => (
  <section>
    <SectionWithoutChart>
      <h3 css={h3Style}>People, Conditions, and Context</h3>
      <p>
        Submarket 1 is home to just six percent of Greater Boston’s population. At roughly 200,000 people, it is the smallest submarket by population, but that population has grown by 15 percent since 2000—more than any other submarket. The racial and ethnic diversity of Submarket 1 is similar to the region overall, though its White population is larger and its Black and Latinx populations are smaller than the other dense, urban submarkets. Subregion 1 is the only urban submarket to gain White population since 2000, and the only one to lose Black population. While the Black population in Greater Boston overall increased 21 percent, the Black population in Submarket 1 declined 11 percent; and while the White population in the region overall declined by five percent, in Submarket 1 it increased eight percent.
      </p>
      <p>
        Compared to other submarkets and to the region overall, Subregion 1 has fewer households with children and fewer with adults aged 65 or older. It has only three percent of the region’s households with children and five percent of its households with older adults, despite having eight percent of all of households.
      </p>
      <p>
        Although it’s home to some high-performing public schools, on average, Submarket 1 is tied with Submarket 2 for
        {' '}
        <HoverablePhrase
          phrase="lowest public school performance"
          definition="Test scores are an incomplete measure of school performance, but they often influence where families seek to locate, if they have the means to choose."
        />
        .
        Median scores in both the Mathematics and English Language Arts (ELA) MCAS tests are lowest in Submarkets 1 and 2, as is score improvement from third grade to eighth grade in both tests.
      </p>
    </SectionWithoutChart>
    <SectionWithChart>
      <div>
        <p>
          Despite low-performing public schools, Submarket 1 adults are much more likely than adults in any but one other submarket to be college educated or have a master’s degree or PhD. Nearly 80 percent of adults in Submarket 1 and Submarket 5 have a higher-education degree, compared to the region’s average of 52 percent.
        </p>
        <p>
          As a submarket situated entirely within the dense core of the region, Submarket 1 is well serviced by public transit—almost 90 percent of its land is within half a mile of a rapid transit or commuter rail station—which offers easy access for its residents to hundreds of thousands of jobs. Unemployment is just below the regional average.
        </p>
        <p>
          Despite low unemployment, and perhaps due to the high cost of housing, the rate of
          {' '}
          <HoverablePhrase
            phrase="severe housing cost burden"
            definition="Paying more than half of household income on housing costs."
          />
          {' '}
          in Submarket 1 is 19 percent, slightly higher than the regional average of 16 percent.
        </p>
        <p>
          In the 1930s, about a fifth of the land area of Submarket 1 was redlined—that is, it was deemed too risky for mortgage lenders and financial investment by the federal Home Owners Loan Corporation (HOLC) agency. The agency assigned a grade of “D” to 20 percent of what is now Submarket 1, and a grade of “C” to another 36 percent. Thirteen percent of land area in the subregion was graded “B” and none was graded “A.” For more details on redlining and its impact, see
          {' '}
          <a href="https://dsl.richmond.edu/panorama/redlining/" css={linkStyle}>Mapping Inequality</a>
          .
        </p>
      </div>
      <HigherEducation />
    </SectionWithChart>
  </section>
);

export default SubmarketOneNarrative;
