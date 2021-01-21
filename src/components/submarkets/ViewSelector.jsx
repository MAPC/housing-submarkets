import React from 'react';
import PropTypes from 'prop-types';
import { views } from '../../utils/submarketViews';

const ViewSelector = ({ dispatch }) => {
  const options = Object.keys(views)
    .map((option) => <option value={option} key={views[option].id}>{views[option].title}</option>);
  return (
    <select onChange={(e) => dispatch({ type: 'setChartView', chartView: e.target.value })}>
      { options }
    </select>
  );
};

ViewSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default ViewSelector;
