import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Toggle from './Toggle';
import { fonts, submarketColors, themeColors } from '../../utils/theme';

const sidebarContentStyle = css`
  padding: 3rem 2rem 0 3rem;
  width: 43rem;

  @media (max-width: 1024px) {
    width: 35rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    width: 32rem;
  }
`;

const titleWrapperStyle = css`
  display: flex;
  flex-direction: row;
`;

const sidebarSubtitleStyle = css`
  font-family: ${fonts.calibre};
  font-size: 2rem;
  line-height: 1.8rem;
`;

const CardFace = ({ layerVisibility, dispatch, activeLayer, children }) => {
  const sidebarTitleStyle = css`
    color: ${submarketColors[activeLayer]};
    font-family: ${fonts.calibre};
    font-size: 2.8rem;
    font-weight: 700;
    margin: 0 3.6rem 0 0;
  `;

  const sidebarLinkStyle = css`
    color: ${submarketColors[activeLayer]};
    text-decoration: underline;

    &:focus {
      border: 1px solid ${themeColors.highlightPurple};
    }
  `;

  return (
    <div css={sidebarContentStyle}>
      <div css={titleWrapperStyle}>
        <h2 css={sidebarTitleStyle}>
          Submarket {activeLayer}
        </h2>
        <Toggle activeLayer={activeLayer} layerVisibility={layerVisibility} dispatch={dispatch} />
      </div>
      { children[0] }
      {/* <h3 css={sidebarSubtitleStyle}>Key Highlights</h3>
      { children[1] } */}
      <Link to={`/submarkets/${activeLayer}`} css={sidebarLinkStyle} tabIndex={0}>View Full Profile &gt;&gt;</Link>
    </div>
  );
};

CardFace.propTypes = {
  layerVisibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  dispatch: PropTypes.func.isRequired,
  activeLayer: PropTypes.number.isRequired,
};

export default CardFace;
