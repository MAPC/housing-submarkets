import React, { useState, useEffect } from 'react';
import { VegaLite } from 'react-vega';
import { submarketColors } from '../../utils/theme';
import { vegaSchema, View } from '../../utils/submarketViews';

interface StripPlotsProps {
  data: Array<any>,
  field: View,
  domain: Array<number>
  format: string,
  selectedTract?: string,
}

const StripPlots: React.FC<StripPlotsProps> = ({
  data, field, domain, format, selectedTract,
}) => {
  const [spec, setSpec] = useState({
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    vconcat: [
      vegaSchema(1, field, domain, format, selectedTract, submarketColors[1], 562),
      vegaSchema(2, field, domain, format, selectedTract, submarketColors[2], 562),
      vegaSchema(3, field, domain, format, selectedTract, submarketColors[3], 562),
      vegaSchema(4, field, domain, format, selectedTract, submarketColors[4], 562),
      vegaSchema(5, field, domain, format, selectedTract, submarketColors[5], 562),
      vegaSchema(6, field, domain, format, selectedTract, submarketColors[6], 562),
      vegaSchema(7, field, domain, format, selectedTract, submarketColors[7], 562),
    ]
  });

  useEffect(() => {
    setSpec({
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      vconcat: [
        vegaSchema(1, field, domain, format, selectedTract, submarketColors[1], 562),
        vegaSchema(2, field, domain, format, selectedTract, submarketColors[2], 562),
        vegaSchema(3, field, domain, format, selectedTract, submarketColors[3], 562),
        vegaSchema(4, field, domain, format, selectedTract, submarketColors[4], 562),
        vegaSchema(5, field, domain, format, selectedTract, submarketColors[5], 562),
        vegaSchema(6, field, domain, format, selectedTract, submarketColors[6], 562),
        vegaSchema(7, field, domain, format, selectedTract, submarketColors[7], 562),
      ],
    });
  }, [field, selectedTract]);

  return (
    <div>
      { spec ? <VegaLite spec={spec} data={{ data }} /> : '' }
    </div>
  );
};

export default StripPlots;
