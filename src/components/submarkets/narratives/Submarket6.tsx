import React from 'react';
import SectionWithChart from '../SectionWithChart';
import SectionWithoutChart from '../SectionWithoutChart';
import PercentPopulationChangeEthnicity from '../visualizations/PercentPopulationChangeEthnicity';

const SubmarketSixNarrative = () => (
  <React.Fragment>
    <SectionWithChart>
      <div>
        <p>
          Submarket 6 is relatively small, with only nine percent of the regional population. Racially and ethnically, Submarket 6 looks similar to the region overall—eight percent of residents in the submarket are Black, seven percent Latinx, 11 percent Asian, and 71 percent White. Submarket 6 has seen 15 percent growth in population since 2000, tied for fastest growth with Submarket 1. Unlike Submarket 1, all the growth in population has been among populations of color. Black, Latinx, and Asian populations in the submarket grew by 113 percent, 204 percent, and 120 percent, respectively—fastest growth for all three groups—while the White population shrank by two percent.
        </p>
      </div>
      <PercentPopulationChangeEthnicity />
    </SectionWithChart>
    <SectionWithoutChart>
      <p>
        Households with children in Submarket 6 represent just under 30 percent of all households, similar to the regional average, and about ten percent of households with children in the region live in the submarket.
      </p>
      <p>
        Test scores at public schools in Submarket 6 are average—their median MCAS scores fall in the middle (fourth) of the seven submarkets. However, when it comes to improving student test scores from third to eighth grade the submarket performs slightly higher, at third best of seven.
      </p>
      <p>
        Rates of college attainment in Submarket 6 also fall in the middle of the submarkets, at 47 percent, five points below the regional average; but college attainment rates have grown by 27 percent, three points faster than the regional average.
      </p>
      <p>
        At 5.0 percent, the rate of unemployment in Submarket 6 is the same as the regional average.
      </p>
      <p>
        The rate of severe cost burden in Submarket 6 is also the same as the regional average at 16 percent.
      </p>
    </SectionWithoutChart>
  </React.Fragment>
);

export default SubmarketSixNarrative;
