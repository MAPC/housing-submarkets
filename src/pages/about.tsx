/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import RelatedReports from '../components/about/RelatedReports';
import AppendixCallout from '../components/about/AppendixCallout';
import AccordionField from '../components/AccordionField';
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
  margin: 0 0 1.6rem 0;
`;

const linkStyle = css`
  color: ${themeColors.accentPurple};
`;

const About = () => (
  <Layout>
    <SEO title="About" />
    <div css={css`background-color: ${themeColors.bgPurple};`}>
      <div css={contentWrapper}>
        <article css={introArticle}>
          <h2 css={h2Style}>About Housing Submarkets</h2>
          <AccordionField title="Where can I download the data?" triangleColor="white">
            You can download the full dataset and accompanying metadata on
            {' '}
            <a href="https://datacommon.mapc.org/browser/datasets/422" css={linkStyle}>MAPC's DataCommon</a>
            .
          </AccordionField>
          <AccordionField title="Who should I contact with questions?" triangleColor="white">
            For questions, comments, or other inqueries, feel free to reach out to us at
            {' '}
            <a href="mailto:research@mapc.org" css={linkStyle}>research@mapc.org</a>
            .
          </AccordionField>
          <AccordionField title="Where can I watch the research release webinar?" triangleColor="white">
            <p>
              On February 23, 2021, MAPC released the Housing Submarkets research with a Zoom webinar. You can watch the webinar and following panel discussion below, or <a href="https://www.youtube.com/watch?v=ztN6UuXcedM" css={linkStyle}>click here</a> to watch on YouTube.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ztN6UuXcedM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </AccordionField>
          <AccordionField title="Contributors" triangleColor="white">
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
          </AccordionField>
        </article>
      </div>
    </div>
    <RelatedReports />
    <AppendixCallout />
  </Layout>
);

export default About;
