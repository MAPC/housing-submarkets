import React from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

const SubmarketChoropleth = ({ viewport, dispatch, choropleth }) => (
  <ReactMapGL
    {...viewport}
    width="600px"
    height="550px"
    onViewportChange={(viewport) => dispatch({ type: 'setViewport', viewport })}
    mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
    mapStyle="mapbox://styles/ihill/ckjn5vkva2jbv19oxvi39hc66"
    style={{ flexShrink: 0 }}
    // onClick={(e) => getClickedTractId(e)}
  >
    <Source id="2010 Census Tracts" type="vector" url="mapbox://ihill.aw7gvvhk">
      <Layer
        type="fill"
        id="Tract choropleth"
        source="2010 Census Tracts"
        source-layer="Tracts-2jsl06"
        paint={{ 'fill-color': choropleth, 'fill-outline-color': '#231F20' }}
      />
    </Source>
    <Source id="MAPC borders" type="vector" url="mapbox://ihill.763lks2o">
      <Layer
        type="line"
        id="MAPC municipal borders"
        source="MAPC borders"
        source-layer="MAPC_borders-0im3ea"
      />
    </Source>
  </ReactMapGL>
);

export default SubmarketChoropleth;
