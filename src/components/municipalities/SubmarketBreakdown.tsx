/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from "gatsby";
import * as d3 from 'd3-format';
import Policies from './Policies';
import { submarketColors, fonts } from '../../utils/theme';

type SubmarketBreakdownProps = {
  total: number,
  submarkets: {
    1?: number,
    2?: number,
    3?: number,
    4?: number,
    5?: number,
    6?: number,
    7?: number,
  }
}

const submarketListStyle = css`
  list-style: none;
  margin: 0 0 2.8rem 0;
  padding: 0;
`;

const h4Style = css`
  font-family: ${fonts.calibre};
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
`;

function findPercents(submarketData) {
  return Object.entries(submarketData.submarkets).map(([submarket, count]) => (
    <StaticQuery query={graphql`{
      allMarkdownRemark(filter: {frontmatter: {folder: {in: "definitions"}}}, sort: {fields: frontmatter___submarket, order: ASC}) {
        nodes {
          internal {
            content
              }
            }
          }
      }`}
      render={data => (
        <li>
          <h4 css={h4Style}>
            {d3.format('.0%')(count/submarketData.total)} of households are in{' '}
            <Link to={`/submarkets/${submarket}`} css={css`color: ${submarketColors[submarket]};`}>
              Submarket {submarket}
            </Link>
          </h4>
          <p>{data.allMarkdownRemark.nodes[submarket-1].internal.content}</p>
          <Policies submarket={submarket} />
        </li>
      )}
      key={submarket}
      />
    )
  )
}

const SubmarketBreakdown: React.FC<SubmarketBreakdownProps> = ({ submarketData }) => {
  return (
    <ul css={submarketListStyle}>
      {submarketData ? findPercents(submarketData) : ''}
    </ul>
  );
}

export default SubmarketBreakdown;