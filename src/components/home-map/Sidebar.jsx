import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './Toggle';

const Sidebar = ({ layerVisibility, dispatch }) => (
  <aside className="sidebar">
    <Toggle id={1} layerVisibility={layerVisibility} dispatch={dispatch} />
    <Toggle id={2} layerVisibility={layerVisibility} dispatch={dispatch} />
    <Toggle id={3} layerVisibility={layerVisibility} dispatch={dispatch} />
    <Toggle id={4} layerVisibility={layerVisibility} dispatch={dispatch} />
    <Toggle id={5} layerVisibility={layerVisibility} dispatch={dispatch} />
    <Toggle id={6} layerVisibility={layerVisibility} dispatch={dispatch} />
    <Toggle id={7} layerVisibility={layerVisibility} dispatch={dispatch} />
  </aside>
);

Sidebar.propTypes = {
  layerVisibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Sidebar;
