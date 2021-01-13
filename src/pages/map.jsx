import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Map from '../components/map/Map';
import Toggle from '../components/sidebar/Toggle';
import '../styles/app.scss';

const MapPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.13.0/mapbox-gl.css" rel="stylesheet" />
    </Helmet>
    <h1>MAPC Housing Submarkets</h1>
    <Map data={data.allDataCsv.nodes} />
    <Toggle label="Submarket 1" />
    <Toggle label="Submarket 2" />
    <Toggle label="Submarket 3" />
    <Toggle label="Submarket 4" />
    <Toggle label="Submarket 5" />
    <Toggle label="Submarket 6" />
    <Toggle label="Submarket 7" />
  </Layout>
);

export default MapPage;
export const data = graphql`
  query {
    allDataCsv {
      nodes {
        ct10_id
        class
      }
    }
  }
`;
