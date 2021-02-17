import React from 'react';
import SectionWithChart from '../SectionWithChart';
import SectionWithoutChart from '../SectionWithoutChart';
import PercentForeignBorn from '../visualizations/PercentForeignBorn';
import PercentHouseholdsWithChildren from '../visualizations/PercentHouseholdsWithChildren'
import PercentCostBurdened from '../visualizations/PercentCostBurdened';

const SubmarketSevenNarrative = () => (
  <React.Fragment>
    <SectionWithoutChart>
      <p>
        Submarket 7 is the third largest by population, after Submarkets 3 and 4, and is home to 19 percent of people in the region. It is the Whitest of the submarkets, with White residents making up 87 percent of the population, nearly 20 points higher than the region overall. Black, Latinx, and Asian residents make up only two percent, three percent, and six percent of residents in the submarket, all well below their share regionwide (9, 11, 9). Despite their small share of the population, populations of color—especially Latinx and Asian populations—have been growing in the submarket since 2000. Asian residents grew by 154 percent and Latinx residents by 139 percent; Black residents grew by 57 percent. White residents grew by one percent in the submarket—slow growth, but growth, compared to their five percent decline in the region overall. Overall population growth in Submarket 7 has been average, at eight percent.
      </p>
    </SectionWithoutChart>
    <SectionWithChart>
      <div>
        <p>
          Immigrants are underrepresented in Submarket 7 compared to the region overall—11 percent of people in the submarket were born in another country, ten points lower than in the region overall, and the smallest share of all the submarkets. Only one percent of residents don’t speak English well.
        </p>
        <p>
          Older adults are more likely to live in Submarket 7 than the region overall—32 percent of households have a member 65 years or older, four points higher than the region. Because of its large population share, that is more than 72,000 households, second highest in number after Submarket 4.
        </p>
      </div>
      <PercentForeignBorn />
    </SectionWithChart>
    <SectionWithChart>
      <div>
        <p>
          A lot of children live in Submarket 7 too. More households with children are located within Submarket 7 than any other submarket: 81,600, or 36 percent of all households.
        </p>
        <p>
          Public school test scores in Submarket 7 are second best of the submarkets, after Submarket 5, as is the measure of student test score improvement.
        </p>
        <p>
          The rate of college degree attainment in Submarket 7 is above the regional average by seven points at 59 percent, and is third highest of the region. Though, it trails behind Submarkets 1 and 5 by twenty points. Growth in college attainment has been just below the regional average, at 20 percent (compared to 24 percent).
        </p>
        <p>
          As the lowest-density submarket and the farthest from the core of the region, it is not surprising that access to jobs via transit is lowest in Submarket 7.
        </p>
        <p>
          Unemployment in the submarket, however, is below the regional average at 4.1 percent, and is second lowest after Submarket 5.
        </p>
      </div>
      <PercentHouseholdsWithChildren />
    </SectionWithChart>
    <SectionWithChart>
      <div>
        <p>
          Given the low cost of housing and the relative wealth of residents in Submarket 7, it is no surprise that the rate of severe cost burden in the submarket is lowest of the seven submarkets at 11 percent—5 points lower than the regional average.
        </p>
        <p>
          Redlining didn’t have much of an impact on Submarket 7 because in the 1930s not many people lived in the areas that far outside of the core of the region. Almost none of the land area in the submarket was assigned a HOLC grade.
        </p>
      </div>
      <PercentCostBurdened />
    </SectionWithChart>
  </React.Fragment>
);

export default SubmarketSevenNarrative;
