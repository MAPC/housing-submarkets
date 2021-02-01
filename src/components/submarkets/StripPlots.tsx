import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { VegaLite } from 'react-vega';
import submarketColors from '../../utils/colors';
import { vegaSchema, views } from '../../utils/submarketViews';

const StripPlots = ({
  data, field, domain, format, selectedTract,
}) => {
  const [spec, setSpec] = useState();
  useEffect(() => {
    setSpec({
      $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
      vconcat: [
        vegaSchema(1, field, domain, format, selectedTract, submarketColors[0]),
        vegaSchema(2, field, domain, format, selectedTract, submarketColors[1]),
        vegaSchema(3, field, domain, format, selectedTract, submarketColors[2]),
        vegaSchema(4, field, domain, format, selectedTract, submarketColors[3]),
        vegaSchema(5, field, domain, format, selectedTract, submarketColors[4]),
        vegaSchema(6, field, domain, format, selectedTract, submarketColors[5]),
        vegaSchema(7, field, domain, format, selectedTract, submarketColors[6]),
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
  data: PropTypes.array.isRequired,
  field: PropTypes.oneOf(Object.keys(views)).isRequired,
  domain: PropTypes.arrayOf(PropTypes.number).isRequired,
  format: PropTypes.string.isRequired,
  selectedTract: PropTypes.string,
};

StripPlots.defaultProps = {
  selectedTract: null,
};

export default StripPlots;
