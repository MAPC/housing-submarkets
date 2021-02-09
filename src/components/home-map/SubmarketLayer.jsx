import React from 'react';
import { Layer } from 'react-map-gl';
import { submarketColors } from '../../utils/theme'

const SubmarketLayer = ({ id, data, isVisible }) => {
  const choropleth = ['match', ['get', 'ct10_id']];
  const choroplethBorders = ['match', ['get', 'ct10_id']];
  data.forEach((row) => {
    choropleth.push(row.ct10_id, +row.class === id ? submarketColors[id] : 'rgba(0, 0, 0, 0)');
    choroplethBorders.push(row.ct10_id, +row.class === id ? '#707070' : 'rgba(0, 0, 0, 0)');
  });
  choropleth.push('#B6B6B6');
  choroplethBorders.push('#707070');

  return (
    <React.Fragment>
      <Layer
        type="fill"
        id={`submarket-${id}`}
        source="2010 Census Tracts"
        source-layer="Tracts-2jsl06"
        paint={{ 'fill-color': choropleth }}
        layout={{ visibility: isVisible ? 'visible' : 'none' }}
      />
      <Layer
        type="line"
        id={`submarket-${id}-border`}
        source="2010 Census Tracts"
        source-layer="Tracts-2jsl06"
        paint={{ 'line-color': choroplethBorders, 'line-width': .25 }}
        layout={{ visibility: isVisible ? 'visible' : 'none' }}
      />
    </React.Fragment>
  );
};

export default SubmarketLayer;
