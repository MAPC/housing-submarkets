import { choroplethColors } from './theme';

type View = 'medhv' | 'ch_medhv_p' | 'rhu_p' | 'yrblt59_p' | 'cash17_p';
type ChoroplethFunc = (value: number) => string;

const viewData: {[Key in View]: {
  id: number,
  title: string,
  domain: Array<number>,
  format: string,
  legendKeys: Array<string>,
  choroplethFunc: ChoroplethFunc,
}} = {
  'medhv': {
    id: 1,
    title: 'Median Home Value',
    domain: [100000, 2000000],
    format: '$,f',
    legendKeys: ['≤ $250,000', '$250,001 – $500,000', '$500,001 – $750,000', '$750,001 – $1,000,000', '$1,000,001+'],
    choroplethFunc: (value) => {
      if (value <= 250000) {
        return choroplethColors[0];
      } if (value <= 500000) {
        return choroplethColors[1];
      } if (value <= 750000) {
        return choroplethColors[2];
      } if (value <= 1000000) {
        return choroplethColors[3];
      }
      return choroplethColors[4];
    }
  },
  'ch_medhv_p': {
    id: 2,
    title: 'Percent Change in Median Home Value (2000 – 2017)',
    domain: [-50, 800],
    format: 'f',
    legendKeys: ['-50% – 0%', '0% – 25%', '25% – 50%', '50% – 75%', '75%+'],
    choroplethFunc: (value) => {
      if (value <= 0) {
        return choroplethColors[0];
      } if (value <= 25) {
        return choroplethColors[1];
      } if (value <= 50) {
        return choroplethColors[2];
      } if (value <= 75) {
        return choroplethColors[3];
      }
      return choroplethColors[4];
    }
  },
  'rhu_p': {
    id: 3,
    title: 'Percent Renter Households',
    domain: [0, 100],
    format: 'f',
    legendKeys: ['0% – 20%', '20% – 40%', '40% – 60%', '60% – 80%', '80% – 100%'],
    choroplethFunc: (value) => {
      if (value <= 20) {
        return choroplethColors[0];
      } if (value <= 40) {
        return choroplethColors[1];
      } if (value <= 60) {
        return choroplethColors[2];
      } if (value <= 80) {
        return choroplethColors[3];
      }
      return choroplethColors[4];
    }
  },
  'yrblt59_p': {
    id: 4,
    title: 'Percent Built Prior to 1960',
    domain: [0, 100],
    format: 'f',
    legendKeys: ['0% – 20%', '20% – 40%', '40% – 60%', '60% – 80%', '80% – 100%'],
    choroplethFunc: (value) => {
      if (value <= 20) {
        return choroplethColors[0];
      } if (value <= 40) {
        return choroplethColors[1];
      } if (value <= 60) {
        return choroplethColors[2];
      } if (value <= 80) {
        return choroplethColors[3];
      }
      return choroplethColors[4];
    }
  },
  'cash17_p': {
    id: 5,
    title: 'Percent Cash Sales',
    domain: [0, 100],
    format: 'f',
    legendKeys: ['0% – 10%', '10% – 20%', '20% – 30%', '30% – 40%', '40%+'],
    choroplethFunc: (value) => {
      if (value <= 10) {
        return choroplethColors[0];
      } if (value <= 20) {
        return choroplethColors[1];
      } if (value <= 30) {
        return choroplethColors[2];
      } if (value <= 40) {
        return choroplethColors[3];
      }
      return choroplethColors[4];
    }
  },
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
