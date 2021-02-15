import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from "gatsby";

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
        <li key={submarket}>
          <p>
            {(count/submarketData.total) * 100}% in <Link to={`/submarkets/${submarket}`}>Submarket {submarket}</Link>

          </p>
          <p>{data.allMarkdownRemark.nodes[submarket-1].internal.content}</p>
        </li>
      )}
      />
    )
  )
}

const SubmarketBreakdown: React.FC<SubmarketBreakdownProps> = ({ submarketData }) => {
  return (
    <ul>
      {submarketData ? findPercents(submarketData) : ''}
    </ul>
  );
}

export default SubmarketBreakdown;