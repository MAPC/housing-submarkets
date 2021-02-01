import { choroplethColors } from './theme';

type View = 'mhi' | 'ch_rhu_p';
type ChoroplethFunc = (value: number) => string;

const viewData: {[Key in View]: {
  id: number,
  title: string,
  domain: Array<number>,
  format: string,
  choroplethFunc: ChoroplethFunc,
}} = {
  'mhi': {
    id: 1,
    title: 'Median Household Income',
    domain: [0, 250000],
    format: '$,f',
    choroplethFunc: (value) => {
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
      }
      return choroplethColors[0];
    }
  },
  'ch_rhu_p': {
        id: 2,
    title: 'Change in % Rented Housing Units',
    domain: [-100, 650],
    format: 'f',
    choroplethFunc: (value) => {
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
      }
      return choroplethColors[0];
    },
  }
};

function vegaSchema(submarket, field, domain, format, selectedTract, color, width) {
  return {
    width: width,
    height: 30,
    transform: [{ filter: `datum.class == ${submarket}` }],
    title: `Submarket ${submarket}`,
    data: { name: 'data' },
    mark: { type: 'tick' },
    encoding: {
      color: { value: color },
      x: {
        field,
        type: 'quantitative',
        scale: { type: 'linear', domain },
        title: null,
        axis: { format },
      },
      size: {
        condition: {
          test: `datum['ct10_id'] == ${selectedTract}`,
          value: 25,
        },
        value: 10,
      },
    },
    config: { tick: { thickness: 2, color } },
  };
}

export { View, viewData, vegaSchema };
