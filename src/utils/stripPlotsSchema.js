import { choroplethColors } from './colors';

const schema = {
  mhi: {
    domain: [0, 250000],
    format: '$,f',
    choroplethFunc: function mhiChoropleth(value) {
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
    },
  },
  ch_rhu_p: {
    domain: [-100, 650],
    format: 'f',
    choroplethFunc: function mhiChoropleth(value) {
      if (value <= -100) {
        return choroplethColors[6];
      } if (value <= -25) {
        return choroplethColors[5];
      } if (value <= 25) {
        return choroplethColors[4];
      } if (value <= 50) {
        return choroplethColors[3];
      } if (value <= 100) {
        return choroplethColors[2];
      } if (value <= 200) {
        return choroplethColors[1];
      } if (value <= 650) {
        return choroplethColors[0];
      }
    },
  },
};

export default schema;
