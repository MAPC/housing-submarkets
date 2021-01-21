import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { VegaLite } from 'react-vega';
import submarketColors from '../../utils/colors';
import generateSchema from '../../utils/stripPlotSchema';

const StripPlots = ({
  data, field, domain, format, selectedTract,
}) => {
  const [spec, setSpec] = useState();
  useEffect(() => {
    setSpec({
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      vconcat: [
        generateSchema(1, field, domain, format, selectedTract, submarketColors[0]),
        generateSchema(2, field, domain, format, selectedTract, submarketColors[1]),
        generateSchema(3, field, domain, format, selectedTract, submarketColors[2]),
        generateSchema(4, field, domain, format, selectedTract, submarketColors[3]),
        generateSchema(5, field, domain, format, selectedTract, submarketColors[4]),
        generateSchema(6, field, domain, format, selectedTract, submarketColors[5]),
        generateSchema(7, field, domain, format, selectedTract, submarketColors[6]),
      ],
    });
  }, [field, selectedTract]);

  return (
    <div>
      { spec ? <VegaLite spec={spec} data={{ data }} /> : '' }
    </div>
  );
};

StripPlots.propTypes = {
  data: PropTypes.object.isRequired,
  field: PropTypes.oneOf(['mhi', 'ch_rhu_p']).isRequired,
  domain: PropTypes.arrayOf(PropTypes.number).isRequired,
  format: PropTypes.string.isRequired,
  selectedTract: PropTypes.oneOfType([PropTypes.string, null]).isRequired,
};

export default StripPlots;
