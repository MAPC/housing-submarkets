import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
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
      mapboxApiAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/ihill/ckjn5vkva2jbv19oxvi39hc66"
    />
  );
};

export default Map;
