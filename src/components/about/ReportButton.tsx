/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';
import { themeColors } from '../../utils/theme';

type ReportButtonProps = {
  title: string,
  url: string,
}

const reportButtonStyle = css`
  border: 3px solid ${themeColors.bgPurple};
  color: ${themeColors.bgPurple};
  font-size: 2rem;
  height: 14rem;
  line-height: 2.4rem;
  margin-right: 3.6rem;
  padding: 4rem;
  text-decoration: none;
  width: 16rem;

  &:hover {
    background-color: ${themeColors.bgPurple};
    color: ${themeColors.white};
  }

  @media (max-width: 650px) {
    margin-bottom: 3.6rem;
  }
`;

const ReportButton: React.FC<ReportButtonProps> = ({ title, url }) => (
  <a href={url} css={reportButtonStyle}>
    { title }
  </a>
);

export default ReportButton;
