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
          To learn more about how this data was collected and analyzed to produce the seven submarkets, you can read our technical appendix below.
        </p>
        <a href="https://hcdtk.gitbook.io/housing-submarket-technical-appendix/" css={buttonStyle}>Read Appendix</a>
      </div>
    </div>
  </article>
);

export default AppendixCallout;
