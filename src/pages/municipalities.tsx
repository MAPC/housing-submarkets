/** @jsx jsx */

import React, { useRef, useState } from 'react';
import { graphql } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { MunicipalMapQuery } from '../../types/gatsby-graphql';
import SEO from '../components/seo';
import Layout from '../components/layout';
import SearchBar from '../components/municipalities/SearchBar';
import SearchMap from '../components/municipalities/SearchMap';
import SearchResults from '../components/municipalities/SearchResults';

type MunicipalSearchProps = {
  data: MunicipalMapQuery,
};

const MapResultsWrapperStyle = css`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 146.6rem;
  padding-bottom: 15rem;

  @media (max-width: 1150px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

const MunicipalSearch: React.FC<MunicipalSearchProps> = ({ data }) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const [selectedMuni, setMuni] = useState();
  return (
    <Layout>
      <SEO title="Municipalities">
        <link href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.css' rel='stylesheet' />
      </SEO>
      <SearchBar containerRef={containerRef} />
      <section css={MapResultsWrapperStyle}>
        <SearchMap data={data.postgres.allHousSubmarketsCtsList} containerRef={containerRef} selectedMuni={selectedMuni} setMuni={setMuni} />
        <SearchResults data={data.postgres.allHousSubmarketsCtsList} selectedMuni={selectedMuni} />
      </section>
    </Layout>
  )
};

export const data = graphql`
  query MunicipalMap {
    postgres {
      allHousSubmarketsCtsList {
        ct10Id
        muni
        submktId
      }
    }
  }
`;

export default MunicipalSearch;
