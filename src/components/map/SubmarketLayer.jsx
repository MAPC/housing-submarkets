import React from 'react';
import { Layer } from 'react-map-gl';
import submarketColors from '../../utils/colors';

const SubmarketLayer = ({ id, data, isVisible }) => {
  const choropleth = ['match', ['get', 'ct10_id']];
  data.forEach((row) => {
    choropleth.push(row.ct10_id, +row.class === id ? submarketColors[id - 1] : 'rgba(0, 0, 0, 0)');
  });
  choropleth.push('rgb(255, 255, 255)');

  return (
    <Layer
      type="fill"
      id={`submarket-${id}`}
      source="2010 Census Tracts"
      source-layer="Tracts-2jsl06"
      paint={{ 'fill-color': choropleth, 'fill-outline-color': '#231F20' }}
      layout={{ visibility: isVisible ? 'visible' : 'none' }}
    />
  );
};

export default SubmarketLayer;
