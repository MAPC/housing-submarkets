/** @jsx jsx */

import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { css, jsx } from "@emotion/react";
import { fonts, themeColors, submarketColors } from '../../utils/theme';
import SM1 from '../../images/maps/Submarkets_2021_S1.png';
import SM2 from '../../images/maps/Submarkets_2021_S2.png';
import SM3 from '../../images/maps/Submarkets_2021_S3.png';
import SM4 from '../../images/maps/Submarkets_2021_S4.png';
import SM5 from '../../images/maps/Submarkets_2021_S5.png';
import SM6 from '../../images/maps/Submarkets_2021_S6.png';
import SM7 from '../../images/maps/Submarkets_2021_S7.png';

type InfoCardProps = {
  submarket: 1 | 2 | 3 | 4 | 5 | 6 | 7
};

const submarketMap = {
  1: SM1,
  2: SM2,
  3: SM3,
  4: SM4,
  5: SM5,
  6: SM6,
  7: SM7
}

const submarketCredit = {
  1: "Example of submarket one",
  2: "Example of submarket two. Photo credit Amy Dain",
  3: "Example of submarket three",
  4: "Example of submarket four",
  5: "Example of submarket five. Photo credit Alex Koppelman",
  6: "Example of submarket six",
  7: "Example of submarket seven",
}

const articleStyle = css`
  color: ${themeColors.white};
  display: flex;
  flex-direction: column;
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

const InfoCard: React.FC<InfoCardProps> = ({ submarket }) => (
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
        <img src={submarketMap[submarket]} alt={submarketCredit[submarket]} css={css`margin: 2rem auto 0; width: 35rem;`} />
      </article>
    )}
  />
);

export default InfoCard;
