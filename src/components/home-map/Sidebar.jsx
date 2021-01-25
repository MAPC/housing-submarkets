import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import CardFace from './CardFace';
import LayerMenu from './LayerMenu';
import submarketColors, { themeColors } from '../../utils/colors';

const sidebarWrapper = (activeLayer) => (css`
  background-color: ${themeColors.white};
  border-left: 2rem solid ${submarketColors[activeLayer-1]};
  display: flex;
  flex-direction: row;
  min-height: 47rem;
  position: absolute;
  right: 10rem;
  top: 10rem;
  width: 43rem;
`);

const SidebarList = styled.ul`
  list-style: none;
  margin: 0 0 3rem 0;
  padding: 0;
`;

const SidebarHighlight = styled.li`
  margin: 1.2rem 0;
`;

const Sidebar = ({ layerVisibility, dispatch, activeLayer }) => (
  <aside css={sidebarWrapper(activeLayer)}>
    <CardFace activeLayer={activeLayer} layerVisibility={layerVisibility} dispatch={dispatch}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <SidebarList>
        <SidebarHighlight>Item one</SidebarHighlight>
        <SidebarHighlight>Item two</SidebarHighlight>
      </SidebarList>
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
