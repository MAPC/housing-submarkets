/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import { StaticQuery, graphql } from "gatsby";
import { submarketColors, fonts } from '../../utils/theme';
import StrategyAccordion from './StrategyAccordion';

interface PoliciesProps {
  submarket: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

const Policies: React.FC<PoliciesProps> = ({ submarket }) => (
  <StaticQuery
    query={graphql`
      query Policies {
        allMarkdownRemark(filter: {frontmatter: {folder: {in: "strategies"}}}) {
          nodes {
            html
            frontmatter {
              submarket
            }
          }
        }
      }
    `}
    render={(data) => {
      const submarketList = data.allMarkdownRemark.nodes.find((node) => node.frontmatter.submarket == submarket);
      return (
        <StrategyAccordion title="Housing Strategy Examples">
          <div dangerouslySetInnerHTML={{ __html: submarketList.html }} />
        </StrategyAccordion>
      )
    }}
  />
);

export default Policies;
