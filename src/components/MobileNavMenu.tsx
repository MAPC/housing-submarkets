/** @jsx jsx */

import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'gatsby';
import { X } from 'phosphor-react';
import { css, jsx } from "@emotion/react";
import { themeColors } from '../utils/theme';
import { isCurrentPage, navItemStyle, linkStyle } from './MainNav';

const mobileNavStyle = css`
  background-color: ${themeColors.bgPurple};
  box-shadow: -1rem 0 2.5rem ${themeColors.shadowBlack};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
`;

const mobileCloseButtonStyle = css`
  align-self: flex-end;
  background: none;
  border: none;
  color: ${themeColors.white};
  margin: 2rem;
`;

const mobileNavListStyle = css`
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
  padding: 0;
  list-style: none;
`;

interface MobileNavMenuProps {
  toggleMobileNav: Dispatch<SetStateAction<boolean>>,
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ toggleMobileNav }) => {
  const urlPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const mobileNavItemStyle = css`
    ${navItemStyle}
    margin: 1.5rem 1rem;
  `;
  const activeLinkStyle = css`
    ${linkStyle}
    color: ${themeColors.white};
  `;
  return (
    <nav css={mobileNavStyle}>
      <button
        css={mobileCloseButtonStyle}
        role="button"
        onClick={() => toggleMobileNav(false)}
      >
        <X size={24} weight="bold" />
      </button>
      <ul css={mobileNavListStyle}>
        <li css={mobileNavItemStyle}>
          <Link to="/tempIndex" css={ isCurrentPage(urlPath, 'home') ? activeLinkStyle : linkStyle }>
            Home
          </Link>
        </li>
        <li css={mobileNavItemStyle}>
          <Link to="/submarkets" css={ isCurrentPage(urlPath, 'submarkets') ? activeLinkStyle : linkStyle }>
            Submarkets
          </Link>
        </li>
        <li css={mobileNavItemStyle}>
          <Link to="/policy-strategy" css={ isCurrentPage(urlPath, 'policy-strategy') ? activeLinkStyle : linkStyle } >
            Policy Strategy
          </Link>
        </li>
        <li css={mobileNavItemStyle}>
          <Link to="/about" css={ isCurrentPage(urlPath, 'about') ? activeLinkStyle : linkStyle }>
            About
          </Link>
        </li>
      </ul>
    </nav>
)};

export default MobileNavMenu;
