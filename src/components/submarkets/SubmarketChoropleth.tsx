import React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

function getClickedTractId(clickData) {
  try {
    return clickData.features.find((feature) => feature.layer.id === 'Tract choropleth').properties.ct10_id;
  } catch (e) {
    return null;
  }
}

const SubmarketChoropleth = ({
  viewport, dispatch, choropleth, selectedTract,
}) => (
  <ReactMapGL
    {...viewport}
    width="600px"
    height="592px"
    onViewportChange={(viewport) => dispatch({ type: 'setViewport', viewport })}
    mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
    mapStyle="mapbox://styles/ihill/ckjn5vkva2jbv19oxvi39hc66"
    onClick={(e) => dispatch({ type: 'setSelectedTract', tract: getClickedTractId(e) })}
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
    <Layer
      type="line"
      id="Highlighted tract"
      source="2010 Census Tracts"
      source-layer="Tracts-2jsl06"
      paint={{
        'line-color': '#FDB525',
        'line-width': 3,
        'line-opacity': selectedTract ? ['match', ['get', 'ct10_id'], selectedTract, 1, 0] : 0,
      }}
    />
  </ReactMapGL>
);

SubmarketChoropleth.propTypes = {
  viewport: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  choropleth: PropTypes.array.isRequired,
  selectedTract: PropTypes.string,
};

SubmarketChoropleth.defaultProps = {
  selectedTract: null,
};

export default SubmarketChoropleth;
export { getClickedTractId };
