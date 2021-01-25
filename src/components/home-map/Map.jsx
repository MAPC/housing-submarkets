import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Source, Layer, NavigationControl} from 'react-map-gl';
import { css } from "@emotion/react";
import SubmarketLayer from './SubmarketLayer';

const Map = ({ viewport, dispatch, data, layerVisibility }) => {
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(700);
  useEffect(() => {
    setHeight(document.querySelector('main').offsetHeight);
    setWidth(document.querySelector('main').offsetWidth);
  }, []);

  useEffect(() => {
    const handleWidthResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidthResize);
    return () => window.removeEventListener('resize', handleWidthResize);
  }, []);

  useEffect(() => {
    const handleHeightResize = () => setHeight(document.querySelector('main').offsetHeight);
    window.addEventListener('resize', handleHeightResize);
    return () => window.removeEventListener('resize', handleHeightResize);
  }, []);

  return (
  <ReactMapGL
    {...viewport}
    width={`${width}px`}
    height={`${height}px`}
    onViewportChange={(viewport) => dispatch({ type: 'setViewport', viewport })}
    mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
    mapStyle="mapbox://styles/ihill/ckk4b7xz43i8a17mjm1u1r8xs"
    scrollZoom={false}
  >
    <Source id="2010 Census Tracts" type="vector" url="mapbox://ihill.aw7gvvhk">
      <SubmarketLayer id={1} data={data} isVisible={layerVisibility['1']} />
      <SubmarketLayer id={2} data={data} isVisible={layerVisibility['2']} />
      <SubmarketLayer id={3} data={data} isVisible={layerVisibility['3']} />
      <SubmarketLayer id={4} data={data} isVisible={layerVisibility['4']} />
      <SubmarketLayer id={5} data={data} isVisible={layerVisibility['5']} />
      <SubmarketLayer id={6} data={data} isVisible={layerVisibility['6']} />
      <SubmarketLayer id={7} data={data} isVisible={layerVisibility['7']} />
    </Source>
    <Source id="MAPC borders" type="vector" url="mapbox://ihill.763lks2o">
      <Layer
        type="line"
        id="MAPC municipal borders"
        source="MAPC borders"
        source-layer="MAPC_borders-0im3ea"
      />
    </Source>
    <div css={css`
      bottom: 3.2rem;
      position: absolute;
      right: 1.6rem;
    `}>
      <NavigationControl />
    </div>
  </ReactMapGL>
)};

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