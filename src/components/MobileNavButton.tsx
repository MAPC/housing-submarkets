/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { themeColors } from '../utils/theme';
import { List } from 'phosphor-react';

const MobileNavButton = () => (
  <button
    css={css`
      background: none;
      border: 0;
      color: ${themeColors.white};
      padding-bottom: 1rem;
    `}
    role="button"
    onClick={() => console.log("Selected")}
  >
    <List size={36} />
  </button>
);

export default MobileNavButton;
