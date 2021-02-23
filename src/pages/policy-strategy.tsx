/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { themeColors, fonts } from '../utils/theme';
import Strategies from '../components/policies/Strategies';

const contentWrapper = css`
  max-width: 136.6rem;
  margin: 0 auto;
  padding: 0 5rem;
`;

const introArticle = css`
  color: ${themeColors.white};
  max-width: 100rem;
  padding: 7.6rem 13rem 6.4rem 13rem;

  @media (max-width: 1000px) {
    padding: 7rem 9rem;
  }

  @media (max-width: 670px) {
    padding: 5rem 0;
  }
`;

const h2Style = css`
  color: ${themeColors.white};
  font-family: ${fonts.calibre};
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 4.4rem;
  margin: 0 0 1.6rem 0;
`;

const linkStyle = css`
  color: ${themeColors.accentPurple};
`;

const PolicyStrategy = () => (
  <Layout>
    <SEO title="Policy Stragegy" />
    <div css={css`background-color: ${themeColors.bgPurple};`}>
      <div css={contentWrapper}>
        <article css={introArticle}>
          <h2 css={h2Style}>Policy Strategy</h2>
          <p>
            A one-size-fits-all approach to housing policy will not meet the many and varied housing challenges facing Greater Boston. The ultimate goal of this research is to help improve housing conditions for the residents of Greater Boston—reducing the cost of living, enabling access to right-sized housing, protecting housing stability. Achieving this goal requires implementing different strategies in different places: the need for more housing units cannot fall only on the places that have been building dense housing for years; rental affordability strategies aren’t critical in places where there is little rental housing; though the need for rental production strategies is; community land ownership strategies don’t make sense where land is at a premium and the large majority of residents already own their land. Yet all of these strategies are part of the puzzle of building better housing opportunities for the residents of Greater Boston—they are just more critical in some places than others.
          </p>
          <p>
            The Housing Strategies matrix below presents the kinds of housing strategies in each submarket that we think are important to achieving the vision of a more affordable, more housing-stable, more integrated, and more equitable Greater Boston. These are our ideas, and we offer them as examples. We are open to feedback, and hope to engage with you through our MetroCommon 2050 planning and implementation processes to ensure that the housing strategies we present here reflect the needs and challenges of your communities. If a conversation about these policies interests you, please join our MetroCommon housing policy workshop, or email us at <a href="mailto:research@mapc.org" css={linkStyle}>research@mapc.org</a> with your ideas.
          </p>
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/shrGMg0mJGu8klhTi?backgroundColor=orange&viewControls=on"
            frameBorder="0"
            width="100%"
            height="600"
            style={{ background: 'transparent', border: '1px solid #ccc', marginTop: '2.4rem' }}
            title="Policy Matrix"
          />
        </article>
      </div>
    </div>
    <Strategies />
  </Layout>
);

export default PolicyStrategy;
