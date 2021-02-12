/** @jsx jsx */

import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { css, jsx } from '@emotion/react'
import SEO from '../components/seo';
import Layout from '../components/layout';
import SearchBar from '../components/municipalities/SearchBar';
import SearchMap from '../components/municipalities/SearchMap';

const MapResultsWrapperStyle = css`
  display: flex;
  flex-direction: row;
`;

const MunicipalSearch = ({ data }) => {
  const containerRef = useRef<HTMLInputElement>(null);
  return (
    <Layout>
      <SEO title="Municipalities">
        <link href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.css' rel='stylesheet' />
      </SEO>
      <SearchBar containerRef={containerRef} />
      <section css={MapResultsWrapperStyle}>
        <SearchMap data={{test: "Test"}} containerRef={containerRef} />
        <p>Chart section</p>
      </section>
    </Layout>
  )
};

export const data = graphql`
  query MunicipalMap {
    postgres {
      allHousSubmarketsCtsList {
        ct10Id
        submktId
      }
    }
  }
`;

export default MunicipalSearch;
