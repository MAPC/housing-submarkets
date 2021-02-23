/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import { StaticQuery, graphql } from 'gatsby';
import AccordionField from './AccordionField';
import PolicyItem from './PolicyItem';

const strategiesWrapperStyle = css`
  margin-top: 5rem;
  max-width: 76.8rem;
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
        <div css={strategiesWrapperStyle}>
          <AccordionField title="Housing stability protections">
            {housingStability.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
          </AccordionField>
          <AccordionField title="Community ownership of land">
            {communityOwnership.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
          </AccordionField>
          <AccordionField title="Rental affordability strategies">
            {rentalAffordability.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
          </AccordionField>
          <AccordionField title="Owner affordability strategies">
            {ownerAffordability.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
          </AccordionField>
          <AccordionField title="Small landlord affordability incentives">
            {smallLandlord.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
          </AccordionField>
          <AccordionField title="Affordable housing production strategies">
            {affordableHousing.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
          </AccordionField>
          <AccordionField title="Revenue sources for affordable housing">
            {revenueSources.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
          </AccordionField>
          <AccordionField title="Multifamily production strategies">
            {multifamily.map(node => <PolicyItem title={node.frontmatter.title} body={node.internal.content} />)}
          </AccordionField>
        </div>
      );
    }}
  />
);

export default Strategies;
