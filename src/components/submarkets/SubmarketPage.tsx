/** @jsx jsx */

import React from 'react';
import SEO from '../seo';
import { SubmarketPageCreateQuery } from '../../../types/gatsby-graphql';
import { css, jsx } from "@emotion/react";
import Layout from '../../components/layout';
import SubmarketHeader from '../../components/submarkets/SubmarketHeader';
import MapChartWrapper from '../../components/submarkets/MapChartWrapper';
import SubmarketOneNarrative from './narratives/Submarket1';
import SubmarketTwoNarrative from './narratives/Submarket2';
import SubmarketThreeNarrative from './narratives/Submarket3';
import SubmarketFourNarrative from './narratives/Submarket4';
import SubmarketFiveNarrative from './narratives/Submarket5';
import SubmarketSixNarrative from './narratives/Submarket6';
import SubmarketSevenNarrative from './narratives/Submarket7';
import SubmarketNavigation from '../../components/submarkets/SubmarketNavigation';

const introParagraphStyle = css`
  margin: 0 auto;
  max-width: 80rem;
  padding: 6rem 0;

  @media (max-width: 900px) {
    margin: 0 5rem;
  }
`;

type SubmarketPageProps = {
  pageContext: {
    pagePath: string,
    submarket: 1 | 2| 3 | 4 | 5 | 6 | 7,
    data: {
      data: SubmarketPageCreateQuery
    },
    image: string,
    summary: string,
  }
}

const narrativeComponent = {
  1: <SubmarketOneNarrative />,
  2: <SubmarketTwoNarrative />,
  3: <SubmarketThreeNarrative />,
  4: <SubmarketFourNarrative />,
  5: <SubmarketFiveNarrative />,
  6: <SubmarketSixNarrative />,
  7: <SubmarketSevenNarrative />
}

const SubmarketPage: React.FC<SubmarketPageProps> = ({ pageContext }) => (
  <Layout>
    <SEO title={`Submarket ${pageContext.submarket}`}>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.13.0/mapbox-gl.css" rel="stylesheet" />
    </SEO>
    <SubmarketHeader submarket={pageContext.submarket} />
    <section css={introParagraphStyle} dangerouslySetInnerHTML={{ __html: pageContext.summary }} />
    <MapChartWrapper data={pageContext.data.data.allDataCsv.nodes} />
    <div css={css`
      margin: 4rem auto 10rem auto;
      max-width: 146.6rem;
    `}>
      {narrativeComponent[pageContext.submarket]}
    </div>
    <SubmarketNavigation submarket={pageContext.submarket} />
  </Layout>
);

export default SubmarketPage;