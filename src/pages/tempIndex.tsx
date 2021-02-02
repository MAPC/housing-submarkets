import React from 'react';
import { HomepageMapQuery } from '../../types/gatsby-graphql';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ToggleableMap from '../components/home-map/ToggleableMap';
import '../styles/app.scss';

const TempIndex = ({ data }: { data: HomepageMapQuery }) => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.13.0/mapbox-gl.css" rel="stylesheet" />
    </Helmet>
    <ToggleableMap data={data.allDataCsv.nodes} />
  </Layout>
);

export default TempIndex;
export const data = graphql`
  query HomepageMap {
    allDataCsv {
      nodes {
        ct10_id
        class
      }
    }
  }
`;