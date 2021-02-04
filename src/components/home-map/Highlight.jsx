import React from 'react';
import PropTypes from 'prop-types';
import { css } from "@emotion/react";
import { X } from 'phosphor-react';
import { submarketColors, themeColors } from '../../utils/theme';

const MenuCloseButton = css`
  display: none;

  @media (max-width: 768px) {
    background: none;
    border: 0;
    display: inline;
  }
`;

const Highlight = ({ activeLayer, sidebarOpen, dispatch }) => (
  <div css={css`
    background-color: ${submarketColors[activeLayer]};
    height: inherit;
    width: 2rem;

    @media (max-width: 768px) {
      align-items: center;
      display: flex;
      height: 3rem;
      justify-content: flex-end;
      width: inherit;
    }
  `}>
    <button
      css={MenuCloseButton}
      role="button"
      onClick={() => dispatch({ type: 'toggleMobileSidebar', sidebarOpen: false })}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          dispatch({ type: 'toggleMobileSidebar', sidebarOpen: false });
        }
      }}
    >
      <X
        size={20}
        color={themeColors.white}
        weight="bold"
      />
    </button>
  </div>
);

Highlight.propTypes = {
  activeLayer: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool,
};

Highlight.defaultProps = {
  sidebarOpen: false,
}

export default Highlight;
