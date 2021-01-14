import React, { useState } from 'react';
import { VegaLite } from 'react-vega';

const StripPlot = ({ data, submarket, color }) => {
  const [spec, setSpec] = useState({
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    width: 400,
    height: 25,
    title: { text: `Median Household Income (Submarket ${submarket})`, orient: 'top' },
    data: { name: 'submarketData' },
    mark: { type: 'tick', fill: color },
    encoding: {
      x: {
        field: 'mhi',
        type: 'quantitative',
        scale: { type: 'linear', domain: [0, 250000] },
        title: ''
      },
    },
    config: { tick: { bandSize: 15, thickness: 2 } },
  });
  return (
    <>
      <VegaLite spec={spec} data={{ submarketData: data }} />
    </>
  );
};

export default StripPlot;
