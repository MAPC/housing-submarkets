import React from 'react';
import SectionWithChart from '../SectionWithChart';
import SectionWithoutChart from '../SectionWithoutChart';
import HoverablePhrase from '../../HoverablePhrase';
import PercentHouseholdsWithChildren from '../visualizations/PercentHouseholdsWithChildren';
import PercentCollegeAttainment from '../visualizations/PercentCollegeAttainment';

const SubmarketFiveNarrative = () => (
  <>
    <SectionWithoutChart>
      <p>
        Submarket 5 represents 9 percent of people in the region, a relatively small share compared to other submarkets. It also has the smallest share of Black and Latinx residents of all the submarkets—only two percent are Black and three percent are Latinx, compared to 9 percent and 11 percent, respectively, regionwide. Conversely, it has a larger share of Asian and White residents—12 percent Asian residents and 79 percent White residents, compared to nine percent and 68 percent regionwide. Despite the low numbers, Black and Latinx populations have grown in Submarket 5 since 2000—the Black population grew 45 percent and the Latinx population grew 135 percent. In total numbers, this represents only about 2,000 and 7,000 people, respectively. By comparison, the Asian population grew by 18,000 people, or 107 percent, over 2000. The White population declined at 6 percent (16,000 people), about the same pace as the region overall.
      </p>
      <p>
        Immigrants make up only 17 percent of the residents in Submarket 5, and limited English speakers only two percent, both below the regional averages of 21 and 5 percent, respectively. For those residents that do have limited English—about 5,000 people—representing such a small share of the population may be especially isolating, if they do not have access to resources in their native languages, or are far from family and friends.
      </p>
      <p>
        Submarket 5 has a relatively large share of households with members ages 65 or older—35 percent compared to 29 percent in the region overall. Because of its small population size, however, that represents just 10 percent of households with seniors in the region.
      </p>
    </SectionWithoutChart>
    <SectionWithChart>
      <div>
        <p>
          Submarket 5 has the largest share of households with children of all the submarkets at 39 percent, which is ten points higher than the region overall. It also has an outsized share of households with children compared to its size. However, because it is a relatively small submarket, the total number of households with children is just under 42,000, or only 11 percent of all households with children in the region.
        </p>
        <p>
          It is no wonder that Submarket 5 has a high share of households with children, because it has the best public school performance of the seven submarkets.
          {' '}
          <HoverablePhrase
            phrase="MCAS scores"
            definition="While test scores are not a perfect measure of school performance, they often influence where families seek to locate, if they have the means to choose."
          />
          {' '}
          for both math and English and language arts are the highest, as are the measures of student improvement from third to eighth grade. Yet, only a small share of children in the region are able to access these high-performing school systems, and an even smaller share of Black and Latinx children.
        </p>
      </div>
      <PercentHouseholdsWithChildren />
    </SectionWithChart>
    <SectionWithChart>
      <div>
        <p>
          It is no wonder that the rate of college attainment is highest in Submarket 7, at 79 percent—27 points higher than the regional average.
        </p>
        <p>
          Because of its inclusion of parts of streetcar suburbs, Submarket 5 has the most access to public transit of the mostly-suburban submarkets, with 13 percent of its land area within half a mile of rapid transit or commuter rail service. Residents of Submarket 5 have access to about 10,000 jobs on average—also higher than any of the other suburban-dominated submarkets.
        </p>
        <p>
          Workers in Submarket 5 have the lowest rate of unemployment of the submarkets, at 3.7 percent.
        </p>
        <p>
          Despite the high home prices in Submarket 5, the rate of
          {' '}
          <HoverablePhrase
            phrase="severe cost burden"
            definition="Paying more than half of household income on housing costs"
          />
          {' '}
          is low (13 percent) compared to the region overall (16 percent).
        </p>
        <p>
          Home mortgage denial rates for
          {' '}
          <HoverablePhrase
            phrase="high-income applicants"
            definition="Defined here as applicants with combined incomes of $125,000 or more"
          />
          {' '}
          in Submarket 5 is lowest of all the submarkets, at 8 percent, and is two points below the regional average. High-income White, Asian, and Latinx applicants all have denial rates at or close to 8 percent (9 percent for Latinx), but denial rates for high-income Black residents are more than double at 19 percent.
        </p>
      </div>
      <PercentCollegeAttainment />
    </SectionWithChart>
    <SectionWithoutChart>
      <p>
        As severe as the impact of Redlining was on Submarket 2, in Submarket 5 it had as strong an impact in the opposite direction. Most of the inhabited land area of Submarket 5 was given a HOLC score of “A” or “B.” Though much of the land area of Submarket 5 was not inhabited back in the 1930s (about 70 percent was not graded), of the areas in the region that were assigned a HOLC score, Submarket 5 made up 83 percent of those graded “A.” It also covered half of all areas graded “B.”
      </p>
    </SectionWithoutChart>
  </>
);

export default SubmarketFiveNarrative;
