/** @jsx jsx */

import React from 'react';
import SEO from '../components/seo';
import { css, jsx } from "@emotion/react";
import { fonts, themeColors } from '../utils/theme';
import Layout from '../components/layout';
import SubmarketGrid from '../components/landing-page/SubmarketGrid';

const submarketsBackground = css`
  background-color: ${themeColors.bgPurple};
`;

const contentWrapper = css`
  max-width: 136.6rem;
  margin: 0 auto;
  padding: 0 5rem;
`;

const introArticle = css`
  color: ${themeColors.white};
  max-width: 78.6rem;
  padding: 7.6rem 18rem;

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

const Submarkets = () => (
  <Layout cssProps={submarketsBackground}>
    <SEO title="Submarkets" />
    <div css={contentWrapper}>
      <article css={introArticle}>
        <h2 css={h2Style}>What is a submarket?</h2>
        <p>
          A housing submarket is a collection of neighborhoods—some contiguous, some not—that share similarities in housing stock and housing market characteristics. These characteristics determine who can find, afford, and remain in suitable housing in that neighborhood.
        </p>
        <p>
          MAPC’s regional study identified communities with similar characteristics across Greater Boston—the study revealed seven distinct housing submarkets across the region that share common issues regardless of physical proximity.
        </p>
      </article>
      <SubmarketGrid />
    </div>
  </Layout>
);

export default Submarkets;
