import React from 'react';
import { Layer } from 'react-map-gl';

const SubmarketLayer = ({ id, data }) => {
  const colors = ['#B1DE68', '#F7695F', '#B0AAD1', '#7DCBBB', '#FFFFA4', '#6EA1C9', '#FBA550'];
  const choropleth = ['match', ['get', 'ct10_id']];
  data.forEach((row) => {
    choropleth.push(row.ct10_id, +row.class === id ? colors[id - 1] : 'rgba(0, 0, 0, 0)');
  });
  choropleth.push('rgb(255, 255, 255)');

  return (
    <Layer type="fill" id={`submarket-${id}`} source="2010 Census Tracts" source-layer="Tracts-2jsl06" paint={{ 'fill-color': choropleth, 'fill-outline-color': '#231F20' }} />
  );
};

export default SubmarketLayer;
