import choroplethColors from './colors';

function mhiChoropleth(value) {
  if (value <= 35000) {
    return choroplethColors[6];
  } if (value <= 50000) {
    return choroplethColors[5];
  } if (value <= 75000) {
    return choroplethColors[4];
  } if (value <= 100000) {
    return choroplethColors[3];
  } if (value <= 150000) {
    return choroplethColors[2];
  } if (value <= 200000) {
    return choroplethColors[1];
  } if (value <= 250000) {
    return choroplethColors[0];
  }
};

export default mhiChoropleth;
