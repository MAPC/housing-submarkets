/** @jsx jsx */

import React from 'react';
import { css, jsx } from "@emotion/react";
import { fonts, themeColors } from '../utils/theme';
import logo from './../images/submarkets_logo.png';
import MainNav from './MainNav';

const headerStyle = css`
  align-items: center;
  background-color: ${themeColors.bgPurple};
  display: flex;
  flex-direction: row;
  height: 13rem;
`;

const headerWrapperStyle = css`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 5rem;
  width: 136.6rem;
`;

const logoTitleWrapperStyle = css`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
`;

const titleStyle = css`
  border-bottom: 3px solid #8A6AA8;
  color: ${themeColors.white};
  font-family: ${fonts.swiftNeueLtPro};
  font-size: 4.2rem;
  font-weight: 400;
  margin: 0 1.6rem 1px -1px;
  padding: 0 5rem 1rem 1rem;
`;

const Header = () => (
  <header css={headerStyle}>
    <div css={headerWrapperStyle}>
      <div css={logoTitleWrapperStyle}>
        <img src={logo} alt="Decorative logo of two houses" />
        <h1 css={titleStyle}>Housing Submarkets</h1>
      </div>
      <MainNav />
    </div>
  </header>
)

export default Header;
