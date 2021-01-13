import React, { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import SubmarketLayer from './SubmarketLayer';

const Map = ({ data }) => {
  const [viewport, setViewport] = useState({
    latitude: 42.37,
    longitude: -70.944,
    zoom: 8.4,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="700px"
      height="500px"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
      mapStyle="mapbox://styles/ihill/ckjn5vkva2jbv19oxvi39hc66"
    >
      <Source id="2010 Census Tracts" type="vector" url="mapbox://ihill.aw7gvvhk">
        <SubmarketLayer id={1} data={data} />
        <SubmarketLayer id={2} data={data} />
        <SubmarketLayer id={3} data={data} />
        <SubmarketLayer id={4} data={data} />
        <SubmarketLayer id={5} data={data} />
        <SubmarketLayer id={6} data={data} />
        <SubmarketLayer id={7} data={data} />
      </Source>
    </ReactMapGL>
  );
};

export default Map;
