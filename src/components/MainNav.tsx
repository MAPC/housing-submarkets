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

const MainNav = () => (
  <nav>
    <ul css={navListStyle}>
      <li css={navItemStyle}>
        <Link to="/tempIndex" css={linkStyle} activeStyle={{ color: themeColors.white }}>
          Home
        </Link>
      </li>
      <li css={navItemStyle} aria-hidden={true}>
        |
      </li>
      <li css={navItemStyle}>
        <Link to="/submarkets" css={linkStyle} activeStyle={{ color: themeColors.white }} partiallyActive={true}>
          Submarkets
        </Link>
      </li>
      <li css={navItemStyle} aria-hidden={true}>
        |
      </li>
      <li css={navItemStyle}>
        <Link to="/municipalities" css={linkStyle} activeStyle={{ color: themeColors.white }}>
          Municipalities
        </Link>
      </li>
      <li css={navItemStyle} aria-hidden={true}>
        |
      </li>
      <li css={navItemStyle}>
        <Link to="/policy-strategy" css={linkStyle} activeStyle={{ color: themeColors.white }}>
          Policy Strategy
        </Link>
      </li>
      <li css={navItemStyle} aria-hidden={true}>
        |
      </li>
      <li css={navItemStyle}>
        <Link to="/about" css={linkStyle} activeStyle={{ color: themeColors.white }}>
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default MainNav;
export { navListStyle, navItemStyle, linkStyle };
