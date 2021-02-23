/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import SectionWithChart from '../SectionWithChart';
import SectionWithoutChart from '../SectionWithoutChart';
import HoverablePhrase from '../../HoverablePhrase';
import Households65Over from '../visualizations/Households65Over';
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

const SubmarketFourNarrative = () => (
  <React.Fragment>
    <SectionWithoutChart>
      <h3 css={h3Style}>People, Conditions, and Context</h3>
      <p>
        Submarket 4, the second largest by population after Submarket 3, is home to 22 percent of the region’s residents. At 79 percent, the White share of residents in Submarket 4 is more than ten points higher than the regional average of 68 percent. Latinx and Asian residents make up only six percent each of the population, and Black residents seven percent, all underrepresented compared to the region overall. Populations of color have seen significant growth in Submarket 4, however—since 2000, the Black population has grown 78 percent, the Asian population 84 percent, and the Latinx population 168 percent. The White population has declined eight percent.
      </p>
      <p>
        Immigrants represent only 15 percent of Submarket 4’s population, but that’s more than 100,000 people. Only three percent of the population in Submarket 4 has limited English proficiency (which exposes them to language discrimination), but those more than 40,000 people represent 12 percent of English language learners in the region.
      </p>
    </SectionWithoutChart>
    <SectionWithChart>
      <div>
        <p>
          A third of households in Submarket 4 have a household member aged 65 or older, more than the regional average by five points, and a quarter of all households with a member 65 or older—91,000 households—live in the submarket.
        </p>
        <p>
          The share of households with children is smaller, at 29 percent, and on par with the regional average; but again because submarket is populous, this translates to just over 80,000 households with children.
        </p>
        <p>
          Public school performance in Submarket 4, as measured by
          {' '}
          <HoverablePhrase
            phrase="MCAS scores"
            definition="Test scores are an incomplete measure of school performance, but they often influence where families seek to locate, if they have the means to choose."
          />
          {' '}
          is slightly better than average—with the third highest median score in both the Mathematics and English Language Arts (ELA) tests. In performance as measured by score improvement between third and eighth grade, however, the submarket falls to the middle with the fourth highest median growth score.
        </p>
        <p>
          Adults in Submarket 4 are less likely to have a college degree than adults in the region overall, with a rate of 46 percent compared to the region’s 52 percent average. Growth in the rate of college degree attainment also falls just short of the regional average, at 22 percent compared to 24 percent.
        </p>
      </div>
      <Households65Over />
    </SectionWithChart>
    <SectionWithoutChart>
      <p>
        Public transit in Submarket 4 is significantly more limited than in the denser submarkets, with only six percent of its land area located within half a mile of a rapid transit or commuter rail station. This means access via transit to fewer jobs—about 8,000—on average within 45 minutes. Still, unemployment is average for the region in Submarket 4, at 4.8 percent.
      </p>
      <p>
        Households in Submarket 4 have a rate of
        {' '}
        <HoverablePhrase
          phrase="severe cost-burden"
          definition="Paying more than half of household income on housing costs."
        />
        {' '}
        (14 percent) that is just below the regional average (16 percent).
      </p>
    </SectionWithoutChart>
  </React.Fragment>
);

export default SubmarketFourNarrative;
