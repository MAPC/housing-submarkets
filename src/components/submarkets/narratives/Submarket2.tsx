import React from 'react';
import SectionWithChart from '../SectionWithChart';
import SectionWithoutChart from '../SectionWithoutChart';
import HoverablePhrase from '../../HoverablePhrase';
import MCASScores from '../visualizations/MCASScores';
import PercentUnemployed from '../visualizations/PercentUnemployed';
import PercentCostBurdened from '../visualizations/PercentCostBurdened';

const SubmarketTwoNarrative = () => (
  <>
    <SectionWithoutChart>
      <p>
        Just over a tenth of the region’s population, or 360,000 people, reside in Submarket 2. Nearly two-thirds of the population living in the submarket are Black, Latinx, Asian, Indigenous, or multiracial. Thirty percent of the region’s Black residents, and 27 percent of its Latinx residents live in Submarket 2. The submarket’s population has grown 12 percent since 2000, faster than the region’s average of eight percent. Most of that growth can be attributed to Latinx and Asian populations, which grew 59 and 41 percent, respectively. The Black population grew just one percent, and the White population declined nine percent.
      </p>
      <p>
        Immigrants make up 35 percent of the population in Submarket 2—the largest share of any of the submarkets, representing nearly 127,000 people. Submarket 2 also has the largest share of residents with limited English, the highest rate of the submarkets. Just over a quarter of all residents in the region with limited English well live in Submarket 2.
      </p>
      <p>
        Submarket 2 has a slightly smaller share of households with adults 65 years or older (24 percent) than the region overall (28 percent). Households with children make up 27 percent of households in Submarket 2, on par with the region overall.
      </p>
    </SectionWithoutChart>
    <SectionWithChart>
      <div>
        <p>
          While the share of households in Submarket 2 with children is about average and represents only 10 percent of all households with children in the region, the children that do live there and attend public school attend schools with some of the
          {' '}
          <HoverablePhrase
            phrase="lowest median MCAS scores"
            definition="While test scores are not a perfect measure of school performance, they often influence where families seek to locate, if they have the means to choose."
          />
          {' '}
          of the seven submarkets (tied for lowest with Submarket 1). They also perform worst at improving students’ MCAS scores between third and eighth grades.
        </p>
        <p>
          In contrast to Submarket 1, however, adults in Submarket 2 have the lowest rate of college educational attainment of the seven submarkets, at 33 percent. The submarket has seen the highest growth in adults with a college degree, a 34 percent increase—ten points higher than growth in the region overall.
        </p>
      </div>
      <MCASScores />
    </SectionWithChart>
    <SectionWithChart>
      <div>
        <p>
          Half of the land area within Submarket 2 is within half a mile of rapid transit or commuter rail service, and the central location affords residents access to tens of thousands of jobs within 45 minutes on transit. Despite this, workers in Submarket 2 have the highest rate of unemployment of the submarkets by a margin of more than three points. The unemployment rate in Submarket 2 at 8.3 percent is more than double that of Submarket 5, at 3.7 percent.
        </p>
      </div>
      <PercentUnemployed />
    </SectionWithChart>
    <SectionWithChart>
      <div>
        <p>
          Of the seven submarkets, households in Submarket 2 are the most likely to be
          {' '}
          <HoverablePhrase
            phrase="severely housing cost-burdened"
            definition="Paying more than half of household income on housing costs"
          />
          {' '}
          —a quarter of households pay more than half their income on housing costs.
        </p>
        <p>
          Home mortgage loan denial rates for
          {' '}
          <HoverablePhrase
            phrase="high-income applicants"
            definition="Defined here as applicants with combined incomes of $125,000 or more"
          />
          {' '}
          are highest in Submarket 2, at 18 percent. Mortage denial rates for high-income Black, and Latinx residents in Submarket 2 are higher than the average for the submarket, at 31 percent and 22 percent, respectively. By contrast, denial rates for high-income White and Asian residents in Submarket 2 are each 14 percent.
        </p>
        <p>
          The challenges facing Submarket 2 are no accident. The impacts of Redlining impacted the areas that make up Submarket 2 like no others. A quarter of land area in the submarket was given a HOLC score of “D,” the highest share for any submarket. Another third of the land was graded “C,” and none was graded “A.” For more details on the impacts of Redlining on the region, see [report section].
        </p>
      </div>
      <PercentCostBurdened />
    </SectionWithChart>
  </>
);

export default SubmarketTwoNarrative;
