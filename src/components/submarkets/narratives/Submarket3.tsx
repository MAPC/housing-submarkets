import React from 'react';
import SectionWithChart from '../SectionWithChart';
import SectionWithoutChart from '../SectionWithoutChart';
import HoverablePhrase from '../../HoverablePhrase';
import PercentCollegeAttainment from '../visualizations/PercentCollegeAttainment';

const SubmarketThreeNarrative = () => (
  <React.Fragment>
     <SectionWithoutChart>
      <p>
        Submarket 3 has the largest population share of the submarkets—24 percent of residents in the region live in Submarket 3. It is a racially and ethnically diverse submarket, and is home to 35 percent of the region’s Black residents, 41 percent of Latinx residents, 27 percent of Asian residents, and 19 percent of White residents. Since 2000 Submarket 3 has had a modest increase in Black residents (+13 percent), and more rapid increases in Latinx (+84 percent) and Asian (+52 percent) residents, and the largest decline in White residents (-12 percent) of the submarkets.
      </p>
      <p>
        Submarket 3 is also home to 45 percent of residents of the region who do not speak English well.
      </p>
      <p>
        Households with children make up 27 percent of all households in Submarket 3, which is just below the regional average of 29 percent. However, because of its size, that is more than 81,000 households, the second most households with children of the submarkets after Submarket 7.
      </p>
    </SectionWithoutChart>
    <SectionWithChart>
      <div>
        <p>
          Rates of college attainment or higher in Submarket 3, at 46 percent, are lower than the regional average, but the rate of college attainment in the submarket grew by a third over the last decade
        </p>
        <p>
          Residents of Submarket 3 have public transit access to nearly 50,000 jobs.
        </p>
      </div>
      <PercentCollegeAttainment />
    </SectionWithChart>
    <SectionWithoutChart>
      <p>
        The rate of
        {' '}
        <HoverablePhrase
          phrase="severe housing cost burden"
          definition="Paying more than half of household income on housing costs"
        />
        {' '}
        in Submarket 3 is slightly higher than the regional average, 18 percent compared to 16 percent, but because of its large population share, it is home to more than a quarter of the region’s severely cost burdened households.
      </p>
    </SectionWithoutChart>
  </React.Fragment>
);

export default SubmarketThreeNarrative;
