/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { fonts, themeColors } from '../../utils/theme';
import Img from 'gatsby-image';

type GridItemProps = {
  submarket: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

const GridItem: React.FC<GridItemProps> = ({ submarket }) => (
  <div>
    <h3>{submarket}</h3>
    {/* <Img
      // fixed={image}
      // alt={typology}
      className="cell__image"
      style={{ display: 'block' }}
    /> */}
    <div
      className="cell__overlay"
      // onMouseEnter={() => toggleClasses()}
      // onMouseLeave={() => toggleClasses()}
    >
      <h3 className="h3 overlay__title">{submarket}</h3>
      <p className="overlay__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
);

export default GridItem;
