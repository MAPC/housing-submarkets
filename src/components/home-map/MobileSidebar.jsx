import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/react";
import { Stack } from 'phosphor-react';
import Sidebar from './Sidebar';
import { themeColors } from '../../utils/colors';


const MobileSidebar = ({ layerVisibility, dispatch, activeLayer, sidebarOpen }) => (
  <>
    <Stack
      size={36}
      css={css`
        background: ${themeColors.white};
        display: ${sidebarOpen ? 'none' : 'inline'};
        color: ${themeColors.bgPurple};
        border: 2px solid ${themeColors.bgPurple};
        border-radius: 8px;
        padding: .4rem;
        position: absolute;
        top: .8rem;
        right: .8rem;
      `}
      onClick={() => dispatch({ type: 'toggleMobileSidebar', sidebarOpen: true })}
    />
    { sidebarOpen ? <Sidebar layerVisibility={layerVisibility} dispatch={dispatch} activeLayer={activeLayer} sidebarOpen={sidebarOpen} /> : ''}
  </>
);

MobileSidebar.propTypes = {
  layerVisibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  dispatch: PropTypes.func.isRequired,
  activeLayer: PropTypes.number.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
};

export default MobileSidebar;
