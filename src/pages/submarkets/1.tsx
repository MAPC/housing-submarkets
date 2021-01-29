import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import MapChartWrapper from '../../components/submarkets/MapChartWrapper';
import '../../styles/app.scss';

const SubmarketOne = ({ data }) => (
  <Layout>
    <Helmet>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.13.0/mapbox-gl.css" rel="stylesheet" />
    </Helmet>
    <h1>MAPC Housing Submarkets</h1>
    <MapChartWrapper data={data.allDataCsv.nodes} />
  </Layout>
);

export default SubmarketOne;
export const data = graphql`
  query {
    allDataCsv {
      nodes {
        ct10_id
        class
        mhi
        ch_rhu_p
      }
    }
  }
`;
