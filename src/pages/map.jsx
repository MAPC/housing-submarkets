import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Map from '../components/map';
import '../styles/app.scss';

const MapPage = () => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css" rel="stylesheet" />
    </Helmet>
    <h1>MAPC Housing Submarkets</h1>
    <Map />
  </Layout>
);

export default MapPage;
