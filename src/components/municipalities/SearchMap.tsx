/** @jsx jsx */

import React, { useRef, useReducer } from 'react';
import { jsx, css } from '@emotion/react';
import { Maybe, PostGraphile_HousSubmarketsCt } from './../../../types/gatsby-graphql';
import ReactMapGL, { Source, Layer, NavigationControl } from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";
import municipalities from '../../utils/municipalities';

type SearchMapProps = {
  data: Maybe<Array<Pick<PostGraphile_HousSubmarketsCt, 'ct10Id' | 'muni' | 'submktId'>>>,
  containerRef: React.RefObject<HTMLInputElement>
  selectedMuni: string|undefined,
  setMuni: React.Dispatch<React.SetStateAction<string|undefined>>,
}

const navigationStyle = css`
  bottom: 4.2rem;
  position: absolute;
  right: 1rem;
`;

function handleClick(e) {
  const muniPolygon = e.find(feature => feature.layer.id === 'mapc-borders-0im3ea');
  if (muniPolygon) {
    return muniPolygon.properties.municipal;
  } else {
    return;
  }
}

const SearchMap: React.FC<SearchMapProps> = ({ data, containerRef, selectedMuni, setMuni }) => {
  const mapRef = useRef();

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
    <ReactMapGL
      {...state.viewport}
      ref={mapRef}
      width="600px"
      height="600px"
      onViewportChange={(viewport) => dispatch({ type: 'setViewport', viewport })}
      mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
      mapStyle="mapbox://styles/ihill/ckky67v9h2fsd17qvbh2mipkb"
      scrollZoom={false}
      onClick={(e) => {
        setMuni(handleClick(e.features))
        console.log(e)
        dispatch({ type: 'setViewport', viewport: {...state.viewport, longitude: e.lngLat[0], latitude: e.lngLat[1], zoom: 11 } })
      }}
    >
      <Geocoder
        containerRef={containerRef}
        mapRef={mapRef}
        onViewportChange={(viewport) => dispatch({ type: 'setViewport', viewport })}
        mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
        types="place"
        bbox={[-71.66866501431952, 41.97523050594343, -70.53487628480008, 42.74357855916575]}
        filter={(item) => {
          if (municipalities.find(row => item.place_name.includes(`${row}, Massachusetts`))) {
            return true
          }
          return false;
        }}
        onResult={(e) => {
          setMuni(e.result.text)
        }}
      />
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
      <div css={navigationStyle}>
        <NavigationControl />
      </div>
    </ReactMapGL>
  );
}

export default SearchMap;
