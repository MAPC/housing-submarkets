/** @jsx jsx */

import React from 'react';
import { SubmarketPageCreateQuery } from '../../../types/gatsby-graphql';
import { css, jsx } from "@emotion/react";
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import SubmarketHeader from '../../components/submarkets/SubmarketHeader';
import MapChartWrapper from '../../components/submarkets/MapChartWrapper';
import NarrativeVisualizationsWrapper from '../../components/submarkets/NarrativeVisualizationsWrapper';
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

const SubmarketPage: React.FC<SubmarketPageProps> = ({ pageContext }) => (
  <Layout>
    <Helmet>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.13.0/mapbox-gl.css" rel="stylesheet" />
      <title>{`Submarket ${pageContext.submarket} | MAPC Housing Submarkets`}</title>
    </Helmet>
    <SubmarketHeader submarket={pageContext.submarket} />
    <section css={introParagraphStyle} dangerouslySetInnerHTML={{ __html: pageContext.summary }} />
    <MapChartWrapper data={pageContext.data.data.allDataCsv.nodes} />
    <NarrativeVisualizationsWrapper />
    <SubmarketNavigation submarket={pageContext.submarket} />
  </Layout>
);

export default SubmarketPage;