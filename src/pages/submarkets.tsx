/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import SEO from '../components/seo';
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
  padding: 0 18rem 7.6rem;

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
  padding-top: 7.6rem;
  margin: 0;
`;

const Submarkets = () => (
  <Layout cssProps={submarketsBackground}>
    <SEO title="Submarkets" />
    <div css={contentWrapper}>
      <section css={introArticle}>
        <h2 css={h2Style}>A different approach to housing strategies</h2>
        <p>
          Greater Boston is not one housing market, but many. Anyone who has tried to find housing in the region knows this through experience. Depending on the kind of housing you are looking for, where you want to live, and what you can afford to pay, you may or may not be able to find what you need. What’s more, where you live can influence your opportunities, experiences, and access.
        </p>
        <p>
          For Greater Boston to become a more affordable region with stable housing and equitable, integrated communities, housing policies and programs must address the needs and challenges specific to the markets in which they are implemented. Those needs and challenges are different in different places in the region.
        </p>
        <h2 css={h2Style}>What is a submarket?</h2>
        <p>
          A housing submarket is a collection of neighborhoods—some next to each other, some not—with similar housing stock and housing market characteristics. These characteristics determine who can find, afford, and remain in suitable housing in that neighborhood. The neighborhoods in each submarket share common needs and challenges, regardless of geographic location. MAPC’s study revealed seven distinct housing submarkets in the Greater Boston region.
        </p>
      </section>
      <SubmarketGrid />
    </div>
  </Layout>
);

export default Submarkets;
