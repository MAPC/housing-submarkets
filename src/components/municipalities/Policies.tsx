/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import { StaticQuery, graphql } from "gatsby";
import { submarketColors, fonts } from '../../utils/theme';

interface PoliciesProps {
  submarket: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

const Policies: React.FC<PoliciesProps> = ({ submarket }) => (
  <StaticQuery
    query={graphql`
      query Policies {
        allMarkdownRemark(filter: {frontmatter: {folder: {in: "policies"}}}) {
          nodes {
            internal {
              content
            }
            frontmatter {
              submarkets
              title
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        Policies
        <ul>
          {
            data.allMarkdownRemark.nodes.reduce((policyArray, node) => {
              if (node.frontmatter.submarkets.includes(+submarket)) {
                const item = (
                  <li><strong>{node.frontmatter.title}:</strong> {node.internal.content}</li>
                )
                policyArray.push(item)
              }
              return policyArray;
            }, [])
          }
        </ul>
      </div>
    )}
  />
);

export default Policies;
