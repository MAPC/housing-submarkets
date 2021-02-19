/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import SEO from '../components/seo';
import Layout from '../components/layout';
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
  padding: 7.6rem 13rem 6.4rem 13rem;

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
            This Housing Submarkets research website is the result of the work of many MAPC staff and interns. Here they are listed in alphabetical order, by last name:
          </p>
          <ul>
            <li>Karen Adelman (Senior Communications Strategist)</li>
            <li>Seleeke Flingai (Research Analyst, former)</li>
            <li>Kasia Hart (Policy Analyst)</li>
            <li>Guy Hydrick (GIS Administrator)</li>
            <li>Ryan Kelly (Digital Services Manager)</li>
            <li>Karina Oliver-Milchman (Chief of Housing and Neighborhood Development)</li>
            <li>Jessie Partidge Guerrero (Research Manager)</li>
            <li>Taylor Perez (Research Intern, former)</li>
            <li>Sarah Philbrick (Senior Research Analyst)</li>
            <li>Tim Reardon (Director of Data Services)</li>
            <li>Caitlin Spence (GIS and Planning Analyst)</li>
            <li>Annabelle Thomas Taylor (Front End Web Developer)</li>
            <li>Kit Un (Visual Designer)</li>
            <li>Lizzi Weyant (Director of Government Affairs)</li>
          </ul>
        </article>
      </div>
    </div>
    <RelatedReports />
    <AppendixCallout />
  </Layout>
);

export default About;
