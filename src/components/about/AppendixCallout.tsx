/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import { fonts, themeColors } from '../../utils/theme';

const appendixWrapperStyle = css`
  background-color: ${themeColors.bgPurple};
  color: ${themeColors.white};
  padding-bottom: 9rem;
`;

const contentWrapperStyle = css`
  max-width: 136.6rem;
  margin: 0 auto;
  padding: 0 5rem;
`;

const paddingWrapperStyle = css`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 0 13rem;
`;

const h3Style = css`
  font-family: ${fonts.calibre};
  font-size: 3.6rem;
  font-weight: 600;
  padding: 5rem 0 0 0;
  margin: 0;
`;

const buttonStyle = css`
  background-color: ${themeColors.white};
  color: ${themeColors.bgPurple};
  font-family: ${fonts.calibre};
  font-weight: 600;
  margin-top: 2rem;
  padding: 1rem 3.6rem;
  text-decoration: none;

  &:focus {
    border: 3px solid ${themeColors.buttonBorder};
  }
`;

const AppendixCallout = () => (
  <article css={appendixWrapperStyle}>
    <div css={contentWrapperStyle}>
      <div css={paddingWrapperStyle}>
        <h3 css={h3Style}>Technical Appendix</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="https://hcdtk.gitbook.io/housing-submarket-technical-appendix/" css={buttonStyle}>Read Appendix</a>
      </div>
    </div>
  </article>
);

export default AppendixCallout;
