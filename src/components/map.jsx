import React, { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

const Map = ({ data }) => {
  const [viewport, setViewport] = useState({
    latitude: 42.37,
    longitude: -70.944,
    zoom: 8.4,
  });

  const colors = ['#B1DE68', '#F7695F', '#B0AAD1', '#7DCBBB', '#FFFFA4', '#6EA1C9', '#FBA550'];
  const choropleth = ['match', ['get', 'ct10_id']];

  data.forEach((row) => {
    choropleth.push(row.ct10_id, colors[+row.class - 1]);
  });
  choropleth.push('grey');

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
        <Layer type="fill" id="tract-layer" source-layer="Tracts-2jsl06" paint={{ 'fill-color': choropleth, 'fill-outline-color': '#231F20' }} />
      </Source>
    </ReactMapGL>
  );
};

export default Map;
