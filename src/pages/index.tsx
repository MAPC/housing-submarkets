import React from 'react';
import { HomepageMapQuery } from '../../types/gatsby-graphql';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ToggleableMap from '../components/home-map/ToggleableMap';

const Index = ({ data }: { data: HomepageMapQuery }) => (
  <Layout>
    <SEO>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.13.0/mapbox-gl.css" rel="stylesheet" />
    </SEO>
    <ToggleableMap data={data.allDataCsv.nodes} />
  </Layout>
);

export default Index;
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
