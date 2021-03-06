/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { fonts, themeColors } from '../utils/theme';
import logo from '../images/submarkets_logo.png';
import MainNav from './MainNav';
import MobileNav from './MobileNav';

const headerStyle = css`
  align-items: center;
  background-color: ${themeColors.bgPurple};
  display: flex;
  flex-direction: row;
  height: 11.5rem;
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
  text-decoration: none;
`;

const titleStyle = css`
  border-bottom: 3px solid #8A6AA8;
  color: ${themeColors.white};
  font-family: ${fonts.swiftNeueLtPro};
  font-size: 4.2rem;
  font-weight: 400;
  margin: 0 1.6rem 1px -1px;
  padding: 0 5rem 1rem 1rem;

  @media (max-width: 670px) {
    font-size: 3rem;
    line-height: 3rem;
  }

  @media (max-width: 500px) {
    border-bottom: 0;
    margin: 0;
    padding: 0 0 0 1rem;
  }
`;

const Header = () => {
  const [pageWidth, updatePageWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  useEffect(() => {
    const handleResize = () => updatePageWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <header css={headerStyle}>
      <div css={headerWrapperStyle}>
        <Link to="/" css={logoTitleWrapperStyle}>
          <img src={logo} alt="Decorative logo of two houses" />
          <h1 css={titleStyle}>Housing Submarkets</h1>
        </Link>
        { pageWidth >= 1400 ? <MainNav /> : <MobileNav /> }
      </div>
    </header>
  );
};

export default Header;
