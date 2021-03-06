import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, {
  Source, Layer, NavigationControl, Popup,
} from 'react-map-gl';
import { css } from '@emotion/react';
import SubmarketLayer from './SubmarketLayer';
import { fonts } from '../../utils/theme';

const navigationStyle = css`
  bottom: 3.2rem;
  position: absolute;
  right: 1.6rem;

  @media (max-width: 640px) {
    bottom: 4.2rem;
    right: 1rem;
  }
`;

const municipalityStyle = css`
  font-family: ${fonts.calibre};
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.8rem;
  margin: 1rem 0 0 0;
`;

const Map = ({
  viewport, dispatch, data, layerVisibility,
}) => {
  const [width, setWidth] = useState(700);
  const [showPopup, togglePopup] = useState(false);
  const [tract, setTract] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [lngLat, setLngLat] = useState();
  const [submarket, setSubmarket] = useState();
  useEffect(() => {
    setWidth(document.querySelector('main').offsetWidth);
  }, []);

  useEffect(() => {
    const handleWidthResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidthResize);
    return () => window.removeEventListener('resize', handleWidthResize);
  }, []);

  const dataNaTracts = ['match', ['get', 'ct10_id']];
  data.forEach((row) => {
    dataNaTracts.push(row.ct10Id,
      (row.submktId === 1 || row.submktId === 2 || row.submktId === 3 || row.submktId === 4 || row.submktId === 5 || row.submktId === 6 || row.submktId === 7)
        ? 'rgba(0, 0, 0, 0)'
        : '#B6B6B6');
  });
  dataNaTracts.push('#B6B6B6');

  return (
    <ReactMapGL
      {...viewport}
      width={`${width}px`}
      height="calc(100vh - 115px)"
      onViewportChange={(viewport) => dispatch({ type: 'setViewport', viewport })}
      mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
      mapStyle="mapbox://styles/ihill/ckky67v9h2fsd17qvbh2mipkb"
      scrollZoom={false}
      css={css`height: calc(100vh - 115px);`}
      onHover={(e) => {
        const hTract = e.features.find((row) => row.sourceLayer === 'Tracts-2jsl06');
        const hMunicipality = e.features.find((row) => row.sourceLayer === 'MAPC_borders-0im3ea');
        if (hTract && hMunicipality) {
          setLngLat(e.lngLat);
          setMunicipality(hMunicipality.properties.municipal);
          setTract(hTract.properties.ct10_id);
          const selectedSubmarket = data.find((row) => row.ct10Id === hTract.properties.ct10_id);
          selectedSubmarket ? setSubmarket(`Submarket ${selectedSubmarket.submktId}`) : setSubmarket('No submarket');
          togglePopup(true);
        } else {
          togglePopup(false);
        }
      }}
    >
      <Source id="2010 Census Tracts" type="vector" url="mapbox://ihill.aw7gvvhk">
        <SubmarketLayer id={1} data={data} isVisible={layerVisibility['1']} />
        <SubmarketLayer id={2} data={data} isVisible={layerVisibility['2']} />
        <SubmarketLayer id={3} data={data} isVisible={layerVisibility['3']} />
        <SubmarketLayer id={4} data={data} isVisible={layerVisibility['4']} />
        <SubmarketLayer id={5} data={data} isVisible={layerVisibility['5']} />
        <SubmarketLayer id={6} data={data} isVisible={layerVisibility['6']} />
        <SubmarketLayer id={7} data={data} isVisible={layerVisibility['7']} />
        <Layer
          type="fill"
          id="Data NA"
          source="2010 Census Tracts"
          source-layer="Tracts-2jsl06"
          paint={{ 'fill-color': dataNaTracts }}
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
      </Source>
      <Source id="MAPC outer border" type="vector" url="mapbox://ihill.74kb5x0f">
        <Layer type="line" source-layer="Outline-6xc0m1" paint={{ 'line-width': 3, 'line-color': '#231F20' }} />
      </Source>
      <div css={navigationStyle}>
        <NavigationControl />
      </div>
      {showPopup && (
      <Popup
        latitude={lngLat[1]}
        longitude={lngLat[0]}
        closeButton={false}
        onClose={() => togglePopup(false)}
        anchor="top"
      >
        <p css={municipalityStyle}>{municipality}</p>
        <p css={css`margin: 0;`}>Tract {tract}</p>
        <p css={css`margin: 0;`}>{submarket}</p>
      </Popup>
      )}
    </ReactMapGL>
  );
};

Map.propTypes = {
  viewport: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  layerVisibility: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default Map;
