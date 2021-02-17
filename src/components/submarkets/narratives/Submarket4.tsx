import React from 'react';
import SectionWithChart from '../SectionWithChart';
import SectionWithoutChart from '../SectionWithoutChart';
import Households65Over from '../visualizations/Households65Over';

const SubmarketFourNarrative = () => (
  <React.Fragment>
    <SectionWithoutChart>
      <p>
        Submarket 4, the second largest by population after Submarket 3, is home to 22 percent of residents in the region. At 79 percent, the White share of residents in Submarket 4 is more than ten points higher than the regional average of 68 percent. Latinx and Asian residents make up only 6 percent each of the population, and Black residents 7 percent, all underrepresented compared to the region overall. Populations of color have seen significant growth in Submarket 4, however—since 2000, the Black population has grown 78 percent, the Asian population 84 percent, and the Latinx population 168 percent. The White population has declined 8 percent.
      </p>
      <p>
        Only three percent of the population in Submarket 4 does not speak English well [is linguistically isolated (?)], but because of its large population share, the submarket is home to 12 percent of non-English speaking residents in the region.
      </p>
    </SectionWithoutChart>
    <SectionWithChart>
      <div>
        <p>
          A third of households in Submarket 4 have a household member age 65 or older, more than the regional average by five points, and a quarter of all households with a member 65 or older—91,000 households—are located within the submarket.
        </p>
      </div>
      <Households65Over />
    </SectionWithChart>
    <SectionWithoutChart>
      <p>
        The share of households with children is smaller, at 29 percent, and on par with the regional average, but again because Submarket has a large share of households overall, there are just over 80,000 households with children in the submarket.
      </p>
      <p>
        Public school performance in Submarket 4, as measured by MCAS scores, is slightly better than average—with the third highest median score in both Math and English and Learning Arts tests. However, performance as measured by increasing scores between third and eighth grade on those tests falls to the middle with the fourth highest median growth score.
      </p>
      <p>
        Adults in Submarket 4 are less likely to have a college degree than adults in the region overall, with a rate of 46 percent compared to the region’s 52 percent average. Growth in rate of college degree attainment also falls just short of the regional average, at 22 percent compared to 24 percent.
      </p>
      <p>
        Households in Submarket 4 have a rate of severe cost burden (14 percent) that is just below the regional average (16 percent).
      </p>
    </SectionWithoutChart>
  </React.Fragment>
);

export default SubmarketFourNarrative;
