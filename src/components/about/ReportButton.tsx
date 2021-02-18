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
  height: 20rem;
  padding: 4rem;
  width: 2.25rem;
`;

const ReportButton: React.FC<ReportButtonProps> = ({ title, url }) => (
  <a href={url} css={reportButtonStyle}>
    { title }
  </a>
);

export default ReportButton;
