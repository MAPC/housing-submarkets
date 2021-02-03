/** @jsx jsx */

import React from 'react';
import { SubmarketPageCreateQuery } from '../../../types/gatsby-graphql';
import { css, jsx } from "@emotion/react";
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import SubmarketHeader from '../../components/submarkets/SubmarketHeader';
import MapChartWrapper from '../../components/submarkets/MapChartWrapper';
import NarrativeVisualizationsWrapper from '../../components/submarkets/NarrativeVisualizationsWrapper';

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
  }
}

const SubmarketPage: React.FC<SubmarketPageProps> = ({ pageContext }) => (
  <Layout>
    <Helmet>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.13.0/mapbox-gl.css" rel="stylesheet" />
      <title>{`Submarket ${pageContext.submarket} | MAPC Housing Submarkets`}</title>
    </Helmet>
    <SubmarketHeader submarket={pageContext.submarket} />
    <p css={introParagraphStyle}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vivendum intellegat et qui, ei denique consequuntur vix. Vivendum intellegat et qui, ei denique consequuntur vix. Te cum aeque repudiandae delicatissimi, cu populo dictas ponderum vel, dolor consequat ut vix. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Eos ex affert fabulas iudicabit, dolore ornatus instructior ex per. Prima zril primis eu sed, mei ei eirmod moderatius adversarium. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Scripta periculis ei eam, te pro movet reformidans. No vis iuvaret appareat. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Eos verear percipit ex, eos ne eligendi inimicus.
    </p>
    <MapChartWrapper data={pageContext.data.data.allDataCsv.nodes} />
    <NarrativeVisualizationsWrapper />
  </Layout>
);

export default SubmarketPage;