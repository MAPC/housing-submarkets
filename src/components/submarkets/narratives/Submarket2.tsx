import React from 'react';
import SectionWithChart from '../SectionWithChart';
import SectionWithoutChart from '../SectionWithoutChart';
import PercentLimitedEnglishSpeakers from '../visualizations/PercentLimitedEnglishSpeakers';
import PercentUnemployed from '../visualizations/PercentUnemployed';
import PercentCostBurdened from '../visualizations/PercentCostBurdened';

const SubmarketTwoNarrative = () => (
  <React.Fragment>
     <SectionWithoutChart>
      <p>
        Just over a tenth of the region’s population, or 360,000 people, reside in Submarket 2. Nearly two-thirds of the population living in the submarket are Black, Latinx, Asian, Indigenous, or multiracial. Thirty percent of the region’s Black residents, and 27 percent of its Latinx residents live in Submarket 2. Population growth in Submarket two has been 12 percent since 2000, faster than the region’s average of eight percent.
      </p>
    </SectionWithoutChart>
    <SectionWithChart>
      <div>
        <p>
          Twelve percent of residents in Submarket 2 do not speak English well, the highest rate of the submarkets. Just over a quarter of all residents in the region who do not speak English well live in Submarket 2.
        </p>
        <p>
          Public school districts in Submarket 2 have the lowest median MCAS scores of the seven submarkets. They also perform worst at improving students’ MCAS scores between third and eighth grades.
        </p>
        <p>
          Adults in Submarket 2 have the lowest rate of college educational attainment of the seven submarkets, at 33 percent. Yet, the submarket has the highest growth in adults with a college degree, at 34 percent—ten points higher than growth in the region overall.
        </p>
      </div>
      <PercentLimitedEnglishSpeakers />
    </SectionWithChart>
    <SectionWithChart>
      <div>
        <p>
          Despite the central location of Submarket 2, affording residents to nearly 80,000 jobs within 45 minutes using public transit, workers in Submarket 2 have the highest rate of unemployment of the submarkets by a margin of more than three points. The unemployment rate in Submarket 2 at 8.3 percent is more than double that of Submarket 5, at 3.7 percent.
        </p>
      </div>
      <PercentUnemployed />
    </SectionWithChart>
    <SectionWithChart>
      <div>
        <p>
          Of the seven submarkets, households in Submarket 2 are the most likely to be severely housing cost-burdened—a quarter of households pay more than half their income on housing costs.
        </p>
        <p>
          These statistics are no accident. The impacts of Redlining and the HOLC grading system impacted the areas that make up Submarket 2 like no others. A quarter of land area in the submarket was graded "D".
        </p>
      </div>
      <PercentCostBurdened />
    </SectionWithChart>
  </React.Fragment>
);

export default SubmarketTwoNarrative;
