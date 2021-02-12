import React, { useReducer, useRef } from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import ReactMapGL, { Source, Layer, NavigationControl } from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";
import municipalities from '../utils/municipalities';
import SubmarketLayer from '../components/home-map/SubmarketLayer';

const MunicipalSearch = ({ data }) => {
  const mapRef = useRef();
  const containerRef = useRef();
  const initialState = {
    viewport: {
      latitude: 42.3653,
      longitude: -71.0834,
      zoom: 8.4,
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'setViewport':
        return { ...state, viewport: action.viewport };
      case 'setMunicipality':
        return { ...state, municipality: action.municipality };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout>
      <SEO title="Municipalities">
        <link href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.css' rel='stylesheet' />
      </SEO>
      <ReactMapGL
        {...state.viewport}
        ref={mapRef}
        width="600px"
        height="600px"
        onViewportChange={(viewport) => dispatch({ type: 'setViewport', viewport })}
        mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
        mapStyle="mapbox://styles/ihill/ckky67v9h2fsd17qvbh2mipkb"
      >
        <Source id="2010 Census Tracts" type="vector" url="mapbox://ihill.aw7gvvhk">
          <SubmarketLayer id={1} data={data.allDataCsv.nodes} isVisible />
          <SubmarketLayer id={2} data={data.allDataCsv.nodes} isVisible />
          <SubmarketLayer id={3} data={data.allDataCsv.nodes} isVisible />
          <SubmarketLayer id={4} data={data.allDataCsv.nodes} isVisible />
          <SubmarketLayer id={5} data={data.allDataCsv.nodes} isVisible />
          <SubmarketLayer id={6} data={data.allDataCsv.nodes} isVisible />
          <SubmarketLayer id={7} data={data.allDataCsv.nodes} isVisible />
        </Source>
        <Source id="MAPC borders" type="vector" url="mapbox://ihill.763lks2o">
          <Layer
            type="line"
            id="MAPC municipal borders"
            source="MAPC borders"
            source-layer="MAPC_borders-0im3ea"
            paint={{ 'line-color': '#231F20' }}
          />
        </Source>
        <Source id="MAPC outer border" type="vector" url="mapbox://ihill.74kb5x0f">
          <Layer type="line" source-layer="Outline-6xc0m1" paint={{ 'line-width': 3, 'line-color': '#231F20' }} />
        </Source>
        <Geocoder
          containerRef={containerRef}
          mapRef={mapRef}
          onViewportChange={(viewport) => dispatch({ type: 'setViewport', viewport })}
          mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
          position="top-left"
          types="place"
          bbox={[-71.66866501431952, 41.97523050594343, -70.53487628480008, 42.74357855916575]}
          filter={(item) => {
            if (municipalities.find(row => item.place_name.includes(`${row}, Massachusetts`))) {
              return true
            }
            return false;
          }}
        />
      </ReactMapGL>
    </Layout>
  )
};

export const data = graphql`
  query MunicipalMap {
    allDataCsv {
      nodes {
        ct10_id
        class
      }
    }
  }
`;

export default MunicipalSearch;
