/** @jsx jsx */

import React, { Dispatch, SetStateAction } from 'react';
import { css, jsx } from "@emotion/react";
import { themeColors } from '../utils/theme';
import { List } from 'phosphor-react';

interface MobileNavButtonProps {
  toggleMobileNav: Dispatch<SetStateAction<boolean>>,
}

const MobileNavButton: React.FC<MobileNavButtonProps> = ({ toggleMobileNav }) => (
  <button
    css={css`
      background: none;
      border: 0;
      color: ${themeColors.white};
      padding-bottom: 1rem;
    `}
    role="button"
    onClick={() => toggleMobileNav(true)}
  >
    <List size={36} />
  </button>
);

export default MobileNavButton;
