/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import SectionWithChart from '../SectionWithChart';
import SectionWithoutChart from '../SectionWithoutChart';
import HoverablePhrase from '../../HoverablePhrase';
import PercentPopulationChangeEthnicity from '../visualizations/PercentPopulationChangeEthnicity';
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

const SubmarketSixNarrative = () => (
  <React.Fragment>
    <SectionWithChart>
      <div>
        <h3 css={h3Style}>People, Conditions, and Context</h3>
        <p>
          Submarket 6 is relatively small, with only nine percent of the regional population. In many ways, Submarket 6 looks like the region overall—eight percent of residents are Black, seven percent Latinx, 11 percent Asian, and 71 percent White. Submarket 6 has seen 15 percent growth in population since 2000, tied for fastest growth with Submarket 1. Unlike Submarket 1, however, all the growth in population has been among populations of color. Black, Latinx, and Asian populations in the submarket grew by 113 percent, 204 percent, and 120 percent, respectively—the fastest growth in any submarket for all three groups—while the White population shrank by two percent.
        </p>
        <p>
          Immigrants make up about 22 percent of the population in Submarket 6, on par with the region overall. Only three percent of residents are exposed to the language discrimination associated with limited English proficiency.
        </p>
        <p>
          Households with seniors and those with children make up an average share of households in Submarket 6. Just under 30 percent of all the submarket’s households have children, similar to the regional average, and about ten percent of households with children in the region live in the submarket.
        </p>
        <p>
          Public school performance in Submarket 6 is average. Its median
          {' '}
          <HoverablePhrase
            phrase="MCAS scores"
            definition="Test scores are an incomplete measure of school performance, but they often influence where families seek to locate, if they have the means to choose."
          />
          {' '}
          fall in the middle (fourth) of the seven submarkets. When it comes to improving student test scores from third to eighth grade, the submarket performs slightly higher, at third best of seven.
        </p>
      </div>
      <PercentPopulationChangeEthnicity />
    </SectionWithChart>
    <SectionWithoutChart>
      <p>
        Rates of college attainment in Submarket 6 also fall in the middle of the submarkets, at 47 percent, five points below the regional average; but college attainment rates have grown by 27 percent, three points faster than the regional average.
      </p>
      <p>
        Submarket 6 is the second lowest of all the submarkets in access to public transit. Only four percent of its land area is within half a mile of rapid transit or commuter rail service. Residents in Submarket 6 have access to about 5,000 jobs on average within 45 minutes on transit.
      </p>
      <p>
        At five percent, the rate of unemployment in Submarket 6 is the same as the regional average.
      </p>
      <p>
        The rate of
        {' '}
        <HoverablePhrase
          phrase="severe cost-burden"
          definition="Paying more than half of household income on housing costs."
        />
        {' '}
        in Submarket 6 is also the same as the regional average at 16 percent.
      </p>
      <p>
        Very little—less than ten percent—of the land area in Submarket 6 was assigned a HOLC score in the 1930s, because much of the land was undeveloped or rural.
      </p>
    </SectionWithoutChart>
  </React.Fragment>
);

export default SubmarketSixNarrative;
