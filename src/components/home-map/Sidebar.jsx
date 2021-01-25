import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/react"
import CardFace from './CardFace';
import LayerMenu from './LayerMenu';
import submarketColors from '../../utils/colors';

const sidebarBorder = (activeLayer) => (css`border-left: 2rem solid ${submarketColors[activeLayer-1]};`);

const Sidebar = ({ layerVisibility, dispatch, activeLayer }) => (
  <aside className="sidebar" css={sidebarBorder(activeLayer)}>
    <CardFace activeLayer={activeLayer} layerVisibility={layerVisibility} dispatch={dispatch}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ul className="sidebar__list">
        <li className="sidebar__highlight">Item one</li>
        <li className="sidebar__highlight">Item two</li>
      </ul>
    </CardFace>
    <LayerMenu activeLayer={activeLayer} dispatch={dispatch} layerVisibility={layerVisibility} />
  </aside>
);

Sidebar.propTypes = {
  layerVisibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  dispatch: PropTypes.func.isRequired,
  activeLayer: PropTypes.number.isRequired,
};

export default Sidebar;
