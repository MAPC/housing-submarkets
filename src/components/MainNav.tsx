/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import { jsx, css } from "@emotion/react";
import { themeColors } from '../utils/theme';
import { fonts } from '../utils/theme';

const navListStyle = css`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0 0 1rem 0;
  list-style: none;
`;

const navItemStyle = css`
  color: ${themeColors.accentPurple};
  font-family: ${fonts.calibre};
  font-size: 2.4rem;
  font-weight: 600;
  margin: 0 1rem;
`;

const linkStyle = css`
  color: ${themeColors.accentPurple};
  text-decoration: none;
`;

function isCurrentPage(urlPath: string, pageName: string) {
  if (urlPath.includes(pageName)) {
    return true;
  }
  if (urlPath === '/' && pageName === 'home') {
    return true;
  }
  return false;
}

const MainNav = () => {
  const urlPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const activeLinkStyle = css`
    ${linkStyle}
    color: ${themeColors.white};
  `;
  return (
    <nav>
      <ul css={navListStyle}>
        <li css={navItemStyle}>
          <Link to="/" css={ isCurrentPage(urlPath, 'home') ? activeLinkStyle : linkStyle }>
            Home
          </Link>
        </li>
        <li css={navItemStyle} aria-hidden={true}>
          |
        </li>
        <li css={navItemStyle}>
          <Link to="/submarkets" css={ isCurrentPage(urlPath, 'submarkets') ? activeLinkStyle : linkStyle }>
            Submarkets
          </Link>
        </li>
        <li css={navItemStyle} aria-hidden={true}>
          |
        </li>
        <li css={navItemStyle}>
          <Link to="/policy-strategy" css={ isCurrentPage(urlPath, 'policy-strategy') ? activeLinkStyle : linkStyle } >
            Policy Strategy
          </Link>
        </li>
        <li css={navItemStyle} aria-hidden={true}>
          |
        </li>
        <li css={navItemStyle}>
          <Link to="/" css={ isCurrentPage(urlPath, 'about') ? activeLinkStyle : linkStyle }>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default MainNav;
