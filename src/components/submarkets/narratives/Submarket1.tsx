import React from 'react';
import SectionWithoutChart from '../SectionWithoutChart';
import SectionWithChart from '../SectionWithChart';
import HoverablePhrase from '../../HoverablePhrase';
import HigherEducation from '../visualizations/HigherEducation';

const SubmarketOneNarrative = () => (
  <section>
    <SectionWithoutChart>
      <p>
        Submarket 1 is home to roughly 200,000 people, or just 6 percent of the MAPC region’s population. Though it is the smallest by population, it has seen the most population growth of all the submarkets since 2000, at 15 percent. It is a racially and ethnically diverse submarket that looks similar to the region overall by race and ethnicity, but has a larger White population and smaller Black and Latinx population compared to other submarkets in the dense core of the region. It is the only urban submarket to gain White population since 2000, and the only one to lose Black population. While the Black population in the MAPC region overall increased 21 percent, the Black population in Submarket 1 declined 11 percent; and while the White population in the region overall declined by 5 percent, in Submarket 1 it increased 8 percent.
      </p>
      <p>
        Compared to other submarkets and the region overall, there are fewer households with children and fewer with adults over ages 65 or older in Submarket 1—it has only 3 percent of the region’s households with children and 5 percent of its households with older adults, despite having 8 percent of all of households.
      </p>
      <p>
        Though there are relatively few children living in Submarket 1, public school districts in the submarket are on average tied with those of Submarket 2 for
        {' '}
        <HoverablePhrase
          phrase="lowest performance"
          definition="While test scores are not a perfect measure of school performance, they often influence where families seek to locate, if they have the means to choose."
        />
        {' .'}
        Median MCAS scores in both math and English and language arts are lowest in Submarkets 1 and 2, as are measures of improvement in scores in both subjects from third grade to eighth grade.
      </p>
    </SectionWithoutChart>
    <SectionWithChart>
      <div>
        <p>
          Despite low performing public schools, adults in Submarket 1 are much more likely to be college educated or have a masters or PhD than all but one other Submarket—nearly 80 percent of adults Submarket 1 and Submarket 5 have a higher education degree, compared to the region’s average of 52 percent.
        </p>
        <p>
          As a subregion situated entirely within the dense core of the region, Submarket 1 is well serviced by public transit—almost 90 percent of land is within half a mile of a rapid transit or commuter rail station—which offers easy access for its residents to hundreds of thousands of jobs. Unemployment is just below the regional average.
        </p>
        <p>
          Despite low unemployment, and perhaps due to the high cost of housing, the rate of
          {' '}
          <HoverablePhrase
            phrase="severe housing cost burden"
            definition="Paying more than half of household income on housing costs"
          />
          {' '}
          in Submarket 1 is 19 percent, slightly higher than the regional average of 16 percent.
        </p>
       <p>
         About a fifth of the land area of Submarket 1 was, in the 1930s, deemed too risky for mortgage lenders and financial investment by the federal Home Owners Loan Corporation (HOLC) agency. The agency assigned a grade of “D” to 20 percent of what is now Submarket 1, and a grade of “C” to another 36 percent. Thirteen percent of land area in the subregion was graded “B” and none was graded “A.” For more details on the impacts of Redlining on the region, see [report section].
       </p>
      </div>
      <HigherEducation />
    </SectionWithChart>
  </section>
);

export default SubmarketOneNarrative;
