/** @jsx jsx */

import React from 'react';
import { Link, navigate } from 'gatsby';
import { css, jsx } from "@emotion/react";
import { themeColors, fonts } from '../../utils/theme';

const calloutStyle = css`
  align-items: flex-start;
  border: 3px solid ${themeColors.white};
  color: ${themeColors.white};
  display: flex;
  flex-direction: column;
  height: calc(35rem - 6px);
  justify-content: center;
  margin: 0 auto;
  padding: 0rem 5rem;
`;

const h3Style = css`
  font-family: ${fonts.calibre};
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0;
`;

const buttonStyle = css`
  background-color: ${themeColors.white};
  color: ${themeColors.bgPurple};
  font-family: ${fonts.calibre};
  font-weight: 600;
  padding: 1rem 3.6rem;
  text-decoration: none;

  &:focus {
    border: 3px solid ${themeColors.buttonBorder};
  }
`;

const ReportCallout = ({...props}) => (
  <div
    {...props}
    css={calloutStyle}
  >
    <h3 css={h3Style}>Policy Strategy</h3>
    <p>Metropolitan Boston is not one housing market, but many, and different policy strategies are required to best meet their individual needs.</p>
    <Link
      to="/policy-strategy"
      css={buttonStyle}
      role="button"
      tabIndex={0}
      onClick={() => navigate('/policy-strategy')}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate('/policy-strategy');
        }
      }}
    >
      Read Policy Strategy
    </Link>
  </div>
);

export default ReportCallout;
