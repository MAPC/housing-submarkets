/** @jsx jsx */

import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { css, jsx } from "@emotion/react";
import { fonts, themeColors, submarketColors } from '../../utils/theme';
import { submarketHighlights } from '../../content/highlights';

const articleStyle = css`
  color: ${themeColors.white};
  height: auto;
  margin-top: 2rem;
  max-width: 52rem;
  padding: 3rem 4rem;
  position: absolute;
  top: 3.5rem;
  z-index: 10;

  @media (max-width: 700px) {
    height: 100%;
    position: unset;
  }
`;

const h2Style = css`
  font-family: ${fonts.calibre};
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 4.4rem;
  margin: 0;
`;

const h3Style = css`
  color: ${themeColors.white};
  font-family: ${fonts.calibre};
  font-size: 2.8rem;
  font-weight: 600;
`;

const listStyle = css`
  padding: 0;
  list-style: none;
`;

const listItemStyle = css`
  font-family: ${fonts.swiftNeueLtPro};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
  margin: 1rem 0;
`;

const boldItemStyle = css`
  font-family: ${fonts.calibre};
`;

const InfoCard = ({ submarket }: { submarket: number }) => {
  const policyTitles = Object.keys(submarketHighlights[submarket].highlights)
  const policies = Object.values(submarketHighlights[submarket].highlights)
  const listItems = policyTitles.map((title, i) => {
    return (
      <li css={listItemStyle} key={title}>
        <span css={boldItemStyle}>{title}</span>: {policies[i]}
      </li>
    )
  });
  return (
    <StaticQuery query={graphql`{
      allMarkdownRemark(filter: {frontmatter: {folder: {in: "definitions"}}}, sort: {fields: frontmatter___submarket, order: ASC}) {
        nodes {
          internal {
            content
              }
            }
          }
      }`}
      render={(data) => (
        <article css={css`
          ${articleStyle}
          background-color: ${submarketColors[submarket]};
        `}>
          <h2 css={h2Style}>{`Submarket ${submarket}`}</h2>
          <p>{data.allMarkdownRemark.nodes[submarket-1].internal.content}</p>
          <h3 css={h3Style}>Key Policies</h3>
          <ul css={listStyle}>
            {listItems}
          </ul>
        </article>
      )}
    />
  )
}

export default InfoCard;
