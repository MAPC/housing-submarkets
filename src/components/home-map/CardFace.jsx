import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from "@emotion/react";
import Toggle from './Toggle';
import submarketColors from '../../utils/colors';

const color = (activeLayer) => (css`color: ${submarketColors[activeLayer-1]};`);

const CardFace = ({ layerVisibility, dispatch, activeLayer, children }) => (
  <div className="sidebar__content">
    <div className="sidebar__title-wrapper">
      <h2 className="sidebar__title" css={color(activeLayer)}>
        Submarket {activeLayer}
      </h2>
      <Toggle activeLayer={activeLayer} layerVisibility={layerVisibility} dispatch={dispatch} />
    </div>
    { children[0] }
    <h3 className="sidebar__subtitle">Key Highlights</h3>
    { children[1] }
    <Link to={`/submarkets/${activeLayer}`} className="sidebar__link" css={color(activeLayer)}>View Full Profile &gt;&gt;</Link>
  </div>
);

CardFace.propTypes = {
  layerVisibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  dispatch: PropTypes.func.isRequired,
  activeLayer: PropTypes.number.isRequired,
};

export default CardFace;
export { color };
