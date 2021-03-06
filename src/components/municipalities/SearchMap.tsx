/** @jsx jsx */

import React, { useRef, useReducer, useCallback, useMemo } from 'react';
import { jsx, css } from '@emotion/react';
import ReactMapGL, { Source, Layer, NavigationControl } from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";
import municipalities from '../../utils/municipalities';
import { submarketColors } from '../../utils/theme';

type SearchMapProps = {
  data: Array<unknown>,
  containerRef: React.RefObject<HTMLInputElement>
  selectedMuni: string|undefined,
  setMuni: React.Dispatch<React.SetStateAction<string|undefined>>,
}

const navigationStyle = css`
  bottom: 4.2rem;
  position: absolute;
  right: 1rem;
`;

const mapStyle = css`
  flex-shrink: 0;
  padding-left: 5rem;
`;

function handleClick(e: Array<unknown>) {
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
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleViewportChange = useCallback(
    (viewport) => dispatch({ type: 'setViewport', viewport }), []
  );

  const handleGeocoderViewportChange = useCallback((newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000, zoom: 11 };
    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides
    });
  }, []);

  const choropleth = ['match', ['get', 'ct10_id']];
  data.forEach((row) => {
    choropleth.push(row.ct10Id, row.submktId ? submarketColors[row.submktId] : 'rgba(0, 0, 0, 0)');
  });
  choropleth.push('#B6B6B6');

  return (
    <div css={mapStyle}>
      <ReactMapGL
        {...state.viewport}
        ref={mapRef}
        width="600px"
        height="600px"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
        mapStyle="mapbox://styles/ihill/ckky67v9h2fsd17qvbh2mipkb"
        scrollZoom={false}
        onClick={(e) => {
          setMuni(handleClick(e.features))
          dispatch({ type: 'setViewport', viewport: {...state.viewport, longitude: e.lngLat[0], latitude: e.lngLat[1], zoom: 11, transitionDuration: 1000 } })
        }}
      >
        <Geocoder
          containerRef={containerRef}
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
          types="place"
          bbox={useMemo(() => ([-71.66866501431952, 41.97523050594343, -70.53487628480008, 42.74357855916575]), [])}
          filter={useCallback((item) => {
            if (municipalities.find(row => item.place_name.includes(`${row}, Massachusetts`))) {
              return true
            }
            return false;
          }, [])}
          onResult={useCallback((e) => {
            if (e.result.text === 'Manchester-by-the-Sea') {
              setMuni('Manchester')
            } else {
              setMuni(e.result.text)
            }
          }, [])}
          marker={false}
        />
        <Source id="2010 Census Tracts" type="vector" url="mapbox://ihill.aw7gvvhk">
          <Layer
          type="fill"
          id="Submarket Choropleth"
          source="2010 Census Tracts"
          source-layer="Tracts-2jsl06"
          paint={{ 'fill-color': choropleth }}
        />
        <Layer
          type="line"
          id="Submarket tract borders"
          source="2010 Census Tracts"
          source-layer="Tracts-2jsl06"
          paint={{ 'line-color': "#707070", 'line-width': .25 }}
        />
        </Source>
          <Source id="MAPC borders" type="vector" url="mapbox://ihill.763lks2o">
          <Layer
            type="line"
            id="MAPC municipal borders"
            source="MAPC borders"
            source-layer="MAPC_borders-0im3ea"
            paint={{ 'line-color': '#231F20' }}
          />
          <Layer
            type="line"
            id="Highlighted municipality"
            source="MAPC borders"
            source-layer="MAPC_borders-0im3ea"
            paint={{
              'line-color': '#FDB525',
              'line-width': 3,
              'line-opacity': selectedMuni ? ['match', ['get', 'municipal'], selectedMuni, 1, 0] : 0,
            }}
          />
        </Source>
        <Source id="MAPC outer border" type="vector" url="mapbox://ihill.74kb5x0f">
          <Layer type="line" source-layer="Outline-6xc0m1" paint={{ 'line-width': 3, 'line-color': '#231F20' }} />
        </Source>
        <div css={navigationStyle}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    </div>
  );
}

export default SearchMap;
