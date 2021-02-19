/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import DropdownSection from '../components/about/DropdownSection';
import RelatedReports from '../components/about/RelatedReports';
import AppendixCallout from '../components/about/AppendixCallout';
import { themeColors, fonts } from '../utils/theme';

const contentWrapper = css`
  max-width: 136.6rem;
  margin: 0 auto;
  padding: 0 5rem;
`;

const introArticle = css`
  color: ${themeColors.white};
  max-width: 100rem;
  padding: 7.6rem 13rem 0 13rem;

  @media (max-width: 1000px) {
    padding: 7rem 9rem;
  }

  @media (max-width: 670px) {
    padding: 5rem 0;
  }
`;

const h2Style = css`
  font-family: ${fonts.calibre};
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 6.2rem;
  margin: 0;
`;

const About = () => (
  <Layout>
    <SEO title="About" />
    <div css={css`background-color: ${themeColors.bgPurple};`}>
      <div css={contentWrapper}>
        <article css={introArticle}>
          <h2 css={h2Style}>About Housing Submarkets</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Semper aeterno percipit ut his, sea ex utinam referrentur repudiandae. Offendit eleifend moderatius ex vix, quem odio mazim et qui, ei denique consequuntur vix. Commune platonem mel id, brute adipiscing duo an.
          </p>
        </article>
        <DropdownSection />
      </div>
    </div>
    <RelatedReports />
    <AppendixCallout />
  </Layout>
);

export default About;
