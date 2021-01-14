import React, { useState } from 'react';
import { VegaLite } from 'react-vega';
import submarketColors from '../utils/colors';

const StripPlots = ({ data, field, domain, format }) => {
  const [spec, setSpec] = useState({
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    vconcat: [
      {
        width: 400,
        height: 25,
        transform: [{ filter: 'datum.class == 1' }],
        title: 'Submarket 1',
        data: { name: 'data' },
        mark: { type: 'tick', fill: submarketColors[0] },
        encoding: {
          x: {
            field,
            type: 'quantitative',
            scale: { type: 'linear', domain },
            title: null,
            axis: { format },
          },
        },
        config: { tick: { bandSize: 20, thickness: 2 } },
      }, {
        width: 400,
        height: 25,
        transform: [{ filter: 'datum.class == 2' }],
        title: 'Submarket 2',
        data: { name: 'data' },
        mark: { type: 'tick', fill: submarketColors[1] },
        encoding: {
          x: {
            field,
            type: 'quantitative',
            scale: { type: 'linear', domain: [0, 250000] },
            title: null,
            axis: { format },
          },
        },
        config: { tick: { bandSize: 20, thickness: 2 } },
      }, {
        width: 400,
        height: 25,
        transform: [{ filter: 'datum.class == 3' }],
        title: 'Submarket 3',
        data: { name: 'data' },
        mark: { type: 'tick', fill: submarketColors[2] },
        encoding: {
          x: {
            field,
            type: 'quantitative',
            scale: { type: 'linear', domain: [0, 250000] },
            title: null,
            axis: { format },
          },
        },
        config: { tick: { bandSize: 20, thickness: 2 } },
      }, {
        width: 400,
        height: 25,
        transform: [{ filter: 'datum.class == 4' }],
        title: 'Submarket 4',
        data: { name: 'data' },
        mark: { type: 'tick', fill: submarketColors[3] },
        encoding: {
          x: {
            field,
            type: 'quantitative',
            scale: { type: 'linear', domain },
            title: null,
            axis: { format },
          },
        },
        config: { tick: { bandSize: 20, thickness: 2 } },
      }, {
        width: 400,
        height: 25,
        transform: [{ filter: 'datum.class == 5' }],
        title: 'Submarket 5',
        data: { name: 'data' },
        mark: { type: 'tick', fill: submarketColors[4] },
        encoding: {
          x: {
            field,
            type: 'quantitative',
            scale: { type: 'linear', domain },
            title: null,
            axis: { format },
          },
        },
        config: { tick: { bandSize: 20, thickness: 2 } },
      }, {
        width: 400,
        height: 25,
        transform: [{ filter: 'datum.class == 6' }],
        title: 'Submarket 6',
        data: { name: 'data' },
        mark: { type: 'tick', fill: submarketColors[5] },
        encoding: {
          x: {
            field,
            type: 'quantitative',
            scale: { type: 'linear', domain },
            title: null,
            axis: { format },
          },
        },
        config: { tick: { bandSize: 20, thickness: 2 } },
      }, {
        width: 400,
        height: 25,
        transform: [{ filter: 'datum.class == 7' }],
        title: 'Submarket 7',
        data: { name: 'data' },
        mark: { type: 'tick', fill: submarketColors[6] },
        encoding: {
          x: {
            field,
            type: 'quantitative',
            scale: { type: 'linear', domain },
            title: null,
            axis: { format },
          },
        },
        config: { tick: { bandSize: 20, thickness: 2 } },
      },
    ],
  });
  return (
    <VegaLite spec={spec} data={{ data: data }} />
  );
};

export default StripPlots;
