/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import { StaticQuery, graphql } from 'gatsby';
import { themeColors, fonts } from '../../utils/theme';
import AccordionField from '../AccordionField';
import PolicyItem from './PolicyItem';

const contentWrapper = css`
  max-width: 136.6rem;
  margin: 0 auto;
  padding: 0 5rem;
`;

const innerWrapper = css`
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
  color: ${themeColors.darkPurple};
  font-family: ${fonts.calibre};
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 4.4rem;
  margin: 0 0 1.6rem 0;
`;

const listStyle = css`
  list-style: none;
  margin: 0;
  padding: 0 4rem;
`;

const linkStyle = css`
  color: ${themeColors.bgPurple};
`;

const Strategies = () => (
  <StaticQuery
    query={graphql`{
      allMarkdownRemark(filter: {frontmatter: {folder: {in: "policies"}}}) {
        nodes {
          internal {
            content
          }
          frontmatter {
            title
            strategies
          }
        }
      }
    }`}
    render={(data) => {
      const housingStability = data.allMarkdownRemark.nodes.filter((node) => node.frontmatter.strategies && node.frontmatter.strategies.includes('Housing stability protections'));
      const communityOwnership = data.allMarkdownRemark.nodes.filter((node) => node.frontmatter.strategies && node.frontmatter.strategies.includes('Community ownership of land'));
      const rentalAffordability = data.allMarkdownRemark.nodes.filter((node) => node.frontmatter.strategies && node.frontmatter.strategies.includes('Rental affordability strategies'));
      const ownerAffordability = data.allMarkdownRemark.nodes.filter((node) => node.frontmatter.strategies && node.frontmatter.strategies.includes('Owner affordability strategies'));
      const smallLandlord = data.allMarkdownRemark.nodes.filter((node) => node.frontmatter.strategies && node.frontmatter.strategies.includes('Small landlord affordability incentives'));
      const affordableHousing = data.allMarkdownRemark.nodes.filter((node) => node.frontmatter.strategies && node.frontmatter.strategies.includes('Affordable housing production strategies'));
      const revenueSources = data.allMarkdownRemark.nodes.filter((node) => node.frontmatter.strategies && node.frontmatter.strategies.includes('Revenue sources for affordable housing'));
      const multifamily = data.allMarkdownRemark.nodes.filter((node) => node.frontmatter.strategies && node.frontmatter.strategies.includes('Multifamily production strategies'));
      return (
        <section css={contentWrapper}>
          <div css={innerWrapper}>
            <h2 css={h2Style}>Explore Strategies</h2>
            <p css={css`margin-bottom: 4rem;`}>
              These example strategies were identified through MAPC’s Metropolitan Mayors Coalition Housing Taskforce. To learn more and find additional strategies, explore <a href="https://housingtaskforce.mapc.org/" css={linkStyle}>housingtaskforce.mapc.org</a>.
            </p>
            <AccordionField title="Housing stability protections" triangleColor="purple">
              <ul css={listStyle}>
                {housingStability.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
              </ul>
            </AccordionField>
            <AccordionField title="Community ownership of land" triangleColor="purple">
              <ul css={listStyle}>
                {communityOwnership.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
              </ul>
            </AccordionField>
            <AccordionField title="Rental affordability strategies" triangleColor="purple">
              <ul css={listStyle}>
                {rentalAffordability.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
              </ul>
            </AccordionField>
            <AccordionField title="Owner affordability strategies" triangleColor="purple">
              <ul css={listStyle}>
                {ownerAffordability.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
              </ul>
            </AccordionField>
            <AccordionField title="Small landlord affordability incentives" triangleColor="purple">
              <ul css={listStyle}>
                {smallLandlord.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
              </ul>
            </AccordionField>
            <AccordionField title="Affordable housing production strategies" triangleColor="purple">
              <ul css={listStyle}>
                {affordableHousing.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
              </ul>
            </AccordionField>
            <AccordionField title="Revenue sources for affordable housing" triangleColor="purple">
              <ul css={listStyle}>
                {revenueSources.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
              </ul>
            </AccordionField>
            <AccordionField title="Multifamily production strategies" triangleColor="purple">
              <ul css={listStyle}>
                {multifamily.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
              </ul>
            </AccordionField>
          </div>
        </section>
      );
    }}
  />
);

export default Strategies;
